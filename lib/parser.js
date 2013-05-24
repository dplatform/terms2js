/*
 * Copyright 2013
 * Alberto Attilio Reggiori <alberto@derrickmedia.com>
 * https://github.com/dplatform/terms2js
 *
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 * 
 *   http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

var sax = require ('sax'),
    util = require ('util'),
    termsapi = require ('./termsapi'),
    events = require ('events');

exports.createParser = function (options, callback) {
  return new VocabularyParser (options, callback);
};

var EventEmitter = events.EventEmitter2 || events.EventEmitter;

var VocabularyParser = function (options, callback) {
      var self = this;

      EventEmitter.call(self);

      var error;

      var defaultOptions = {
        default_lang : 'en'
      };
      self.options = defaultOptions;
      if (options) {
        for (var o in options) {
          self.options[o] = options[o];
        }
      }

      self.strict = true;
      self.sax_parser_options = {trim:true};
      self.sax_parser = sax.parser (self.strict, self.sax_parser_options);

      self.uri = null;
      self.versionDate = null;
      self.termID = null;
      self.langs = null;
      self.json = {};
      self.tags = [];

      // NOTE - the following struct at the moment is replicated in termsapi.js - need to be reworked
      self.voc_template = function () {
        return JSON.parse(
	'{' +
        '  "terms" : {},' +
        '  "names" : {},' +
        '  "equivalent" : {},' +
        '  "mappings"   : {},' +
        /*'  "definitions" : {},' + */
        '  "deprecated" : []' +
        '}');
      };

      /* BEGIN TVA XML parser */

      self.sax_parser.onopentag = function (node) {
        self.tags.push (node.name);

        if (node.name === "ClassificationScheme") {
          if (node.attributes) {
            if (node.attributes.uri) {
              self.uri = node.attributes.uri;
            }
            if (node.attributes.versionDate) {
              self.versionDate = node.attributes.versionDate;
            }
          }
        }

        if (node.name === "Term") {
          if (node.attributes && node.attributes.termID) {
            self.termID = node.attributes.termID;
	  }
          self.langs = [];
        }

        if (node.name === "Name" || node.name === "Definition") {
          if (node.attributes && node.attributes["xml:lang"]) {
            self.langs.push (node.attributes["xml:lang"]);
          } else {
            self.langs.push (self.options.default_lang);
          }
          if (!self.json[self.langs[self.langs.length-1]]) {
            self.json[self.langs[self.langs.length-1]] = self.voc_template ();
          }

          if (!self.json[self.langs[self.langs.length-1]].terms[self.termID]) {
            self.json[self.langs[self.langs.length-1]].terms[self.termID] = [];
          }
        }

        if (node.name === "EquivalentCSTerm" && node.attributes && node.attributes["href"]) {
	  var processed = {};
	  for (var i=0; i < self.langs.length; i++) {
	    if (!processed[self.langs[i]]) {
              if (!self.json[self.langs[i]].equivalent[self.termID]) {
                self.json[self.langs[i]].equivalent[self.termID] = [];
              }
	      self.json[self.langs[i]].equivalent[self.termID].push (node.attributes["href"]);
	      processed[self.langs[i]] = true;
	    }
          }
        }

        if (node.name === "MappingTerm" && node.attributes && node.attributes["originalTermID"]) {
	  var processed = {};
	  for (var i=0; i < self.langs.length; i++) {
	    if (!processed[self.langs[i]]) {
              if (!self.json[self.langs[i]].mappings[self.termID]) {
                self.json[self.langs[i]].mappings[self.termID] = [];
              }
	      self.json[self.langs[i]].mappings[self.termID].push ({
	        termId: node.attributes["originalTermID"]
              });
	      processed[self.langs[i]] = true;
            }
          }
        }
      };

      self.sax_parser.onclosetag = function (tag) {
        self.tags.pop ();

        if (tag === "Term") {
          self.langs = [];
        }
      };

      self.sax_parser.ontext = function (text) {
        if (self.tags[self.tags.length-1] === "ValidityFlag" && text && !text.match(/(1|yes|on)/)) {
          for (var l in self.json) {
            self.json[l].deprecated.push (self.termID);
          }
        }

        if (self.tags[self.tags.length-1] === "Name") {
          var values = text.replace (/[\n\r\t\f]/gi, "").split (" / ");
          self.json[self.langs[self.langs.length-1]].terms[self.termID].push.apply (self.json[self.langs[self.langs.length-1]].terms[self.termID], values);
          for (var i=0 ; i < values.length ; i++) {
            if (!self.json[self.langs[self.langs.length-1]].names[values[i]]) {
              self.json[self.langs[self.langs.length-1]].names[values[i]] = []
            }
            self.json[self.langs[self.langs.length-1]].names[values[i]].push (self.termID);
          }
        }

        if (self.tags[self.tags.length-1] === "Definition") {
          // NOTE - try to be clever and use a Definition in a given language definition if no Name defined
          //	      For example see the defintions in ebu_ParentalGuidanceCodeCS.xml
          if (self.json[self.langs[self.langs.length-1]].terms[self.termID].length == 0) {
            var val = text.replace (/[\n\r\t\f]/gi, "");
            self.json[self.langs[self.langs.length-1]].terms[self.termID].push (val);
            if (!self.json[self.langs[self.langs.length-1]].names[val]) {
              self.json[self.langs[self.langs.length-1]].names[val] = [];
            }
            self.json[self.langs[self.langs.length-1]].names[val].push (self.termID);
          }

          // NOTE - the following is not used yet
          //self.json[self.langs[self.langs.length-1]].definitions[self.termID] = text;
        }

        if (self.tags[self.tags.length-1] === "ClassificationSchemeURL" && text) {
	  if (self.json[self.langs[self.langs.length-1]].mappings[self.termID][self.json[self.langs[self.langs.length-1]].mappings[self.termID].length-1])
	    self.json[self.langs[self.langs.length-1]].mappings[self.termID][self.json[self.langs[self.langs.length-1]].mappings[self.termID].length-1].uri = text;
        }

        if (self.tags[self.tags.length-1] === "OriginalTermName" && text) {
          var values = text.replace (/[\n\r\t\f]/gi, "").split (" / ");
	  if (self.json[self.langs[self.langs.length-1]].mappings[self.termID][self.json[self.langs[self.langs.length-1]].mappings[self.termID].length-1])
	    self.json[self.langs[self.langs.length-1]].mappings[self.termID][self.json[self.langs[self.langs.length-1]].mappings[self.termID].length-1].Name = values;
        }
      };

      self.sax_parser.onerror = function (e) {
        if (callback && typeof callback === "function") {
          return callback (e);
        } else {
	  console.log (e);
          return;
        }
      };

      self.sax_parser.onend = function () {
	// lift the results
        for (var lang in self.json) {
          self.json[lang].uri = self.uri;
          if (self.versionDate !== null) {
            self.json[lang].versionDate = self.versionDate;
          }
        }
      };

      /* END TVA XML parser */

      if (callback && typeof callback === "function") {
        return callback (error, self); 
      } else {
	if (error) {
	  console.error (error);
	  return;
	} else {
          return self;
	}
      }
};

// TODO parseFile + sax stream

VocabularyParser.prototype.parseString = function (string, callback) {
  var self = this;

  var error;

  self.sax_parser.write (string).close();

  if (callback && typeof callback === "function") {
    return callback (error, true);
  } else {
    if (error) {
      console.error (error);
      return false;
    } else {
      return true;
    }
  }
};

// object to vocabularies
// where object must be like { "lang_code": { self.voc_template }, ... }

VocabularyParser.prototype.parse = function (input_object, callback) {
  var self = this;

  var error;

  if (!input_object || typeof input_object !== "object") {
    error = new Error ("Cannot parse input object '"+util.inspect (input_object)+"'.");
  } else {
    var template = self.voc_template ();

    for (var lang in input_object) {

      // 1. Validation of input object

      // TODO - add language code validation
      if (typeof input_object[lang] !== "object") {
        error = new Error ("Invalid input object: language structure '"+util.inspect (lang)+"' is not a valid vocabulary object.");
	break;
      }

      for (var p in template) {

        // TODO - add more validation checkings

        if (input_object[lang].hasOwnProperty (p) !== true) {
          error = new Error ("Invalid input object: missing vocabulary object property '"+p+"'.");
          break;
        }

	// NOTE - the following checks shall change with self.voc_template eventually

	if (p === "deprecated") {
          if (input_object[lang][p].isArray === false) {
            error = new Error ("Invalid input object: invalid vocabulary object property '"+p+"'.");
            break;
          }
	} else {
          if (typeof input_object[lang][p] !== "object") {
            error = new Error ("Invalid input object: invalid vocabulary object property '"+p+"'.");
            break;
          }
	}

      }

      // TODO - check more about URI syntax - URN vs. TAG/URI etc.
      if (input_object[lang].hasOwnProperty ("uri") === false) {
        error = new Error ("Invalid input object: missing or invalid URI for vocabulary in language '"+lang+"'.");
      }

      if (input_object[lang].hasOwnProperty ("versionDate") === true) {
        // TODO - check syntax about optional version date field
      }

      if (error) {
        break;
      }

      // 2. Initialise vocabulary
      self.json[lang] = {};

      for (var p in template) {
        self.json[lang][p] = JSON.parse(JSON.stringify(input_object[lang][p]));
      }

      self.json[lang].uri = input_object[lang].uri;
      self.json[lang].versionDate = input_object[lang].versionDate;
    }
  }
 
  if (callback && typeof callback === "function") {
    return callback (error, true);
  } else {
    if (error) {
      console.error (error);
      return false;
    } else {
      return true;
    }
  }
};

VocabularyParser.prototype.getAvailableLanguages = function (callback) {
  var self = this;

  var error;

  var result = [];

  for (var l in self.json) {
    result.push (l);
  }

  if (callback && typeof callback === "function") {
    return callback (error, result); 
  } else {
    if (error) {
      console.error (error);
      return;
    } else {
      return result;
    }
  }
};

VocabularyParser.prototype.getVocabulary = function (lang, callback) {
  var self = this;

  var error;
  var l = lang;

  if (!l) {
    l = self.options.default_lang;
  }

  if (callback && typeof callback === "function") {
    return callback (error, termsapi.createVocabulary (lang, self.json[l])); 
  } else {
    if (error) {
      console.error (error);
      return;
    } else {
      return termsapi.createVocabulary (lang, self.json[l]);
    }
  }
};
