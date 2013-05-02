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

var sax = require('sax'),
    events = require('events');

exports.createConverter = function (options, callback) {
  return new Terms2Js (options, callback);
};

var EventEmitter = events.EventEmitter2 || events.EventEmitter;

var Terms2Js = function (options, callback) {
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
      self.parser_options = {trim:true};
      self.parser = sax.parser (self.strict, self.parser_options);

      self.uri = null;
      self.versionDate = null;
      self.termID = null;
      self.json = {};
      self.tags = [];
      self.langs = [];

      self.parser.onopentag = function (node) {
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

        if (node.name === "Term" && node.attributes && node.attributes.termID) {
          self.termID = node.attributes.termID;
        }

        if (node.name === "Name" || node.name === "Definition") {
          if (node.attributes && node.attributes["xml:lang"]) {
            self.langs.push (node.attributes["xml:lang"]);
          } else {
            self.langs.push (self.options.default_lang);
          }
          if (!self.json[self.langs[self.langs.length-1]]) {
            self.json[self.langs[self.langs.length-1]] = {
	      "terms": {},
	      "names": {},
	      /*"definitions": {},*/
	      "deprecated": []
            };
          }

          if (!self.json[self.langs[self.langs.length-1]].terms[self.termID]) {
            self.json[self.langs[self.langs.length-1]].terms[self.termID] = [];
          }
        }
      };

      self.parser.onclosetag = function (tag) {
        self.tags.pop ();

        if (tag === "Name" || tag === "Definition") {
          self.langs.pop ();
        }
      };

      self.parser.ontext = function (text) {
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
      };

      self.parser.onerror = function (e) {
        if (callback && typeof callback === "function") {
          return callback (e);
        } else {
	  console.log (e);
          return;
        }
      };

      self.parser.onend = function () {
	// lift the results
        for (var lang in self.json) {
          self.json[lang].uri = self.uri;
          self.json[lang].versionDate = self.versionDate;

	  if (self.json[lang].deprecated.length == 0)
            delete self.json[lang].deprecated;
        }
      };

      if (callback && typeof callback === "function") {
        return callback (error, self); 
      } else {
        return self;
      }
};

// TODO convertFile + sax stream

Terms2Js.prototype.convertString = function (string, callback) {
  var self = this;

  var error;

  self.parser.write (string).close();

  if (callback && typeof callback === "function") {
    return callback (error, true);
  } else {
    return true;
  }
};

Terms2Js.prototype.getAvailableLanguages = function (callback) {
  var self = this;

  var error;

  var result = [];

  for (var l in self.json) {
    result.push (l);
  }

  if (callback && typeof callback === "function") {
    return callback (error, result); 
  } else {
    return result;
  }
};

Terms2Js.prototype.getTerms = function (lang, callback) {
  var self = this;

  var error;
  var l = lang;

  if (!l) {
    l = self.options.default_lang;
  }

  if (callback && typeof callback === "function") {
    return callback (error, self.json[l]); 
  } else {
    return self.json[l];
  }
};
