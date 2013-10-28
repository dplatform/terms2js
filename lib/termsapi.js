if (typeof exports !== 'undefined') {
  exports.createVocabulary = function (lang, json) {
    return new Vocabulary (lang, json);
  };
};

var Vocabulary = function (lang, json) {
      var error;

      if (!lang || typeof lang !== "string") {
        error = new Error ("Vocabulary language undefined");
      } else if (json) {
        if (typeof json !== "object" || !json.terms || !json.names || !json.uri) {
          error = new Error ("Invalid JSON input: "+json);
        } else {
          this.voc = json;
        }
      } else {
        this.voc = {
	  "terms"      : {},
          "names"      : {},
	  "equivalent" : {},
	  "mappings"   : {},
          "deprecated" : []
	};
      }
      if (!error) {
        this.lang = lang;
      }
    };

Vocabulary.prototype.stringify = function (ops1, ops2) {
  return JSON.stringify (this.voc, ops1, ops2);
};

// Return true if term is the fully qualified term URI, false otherwise
Vocabulary.prototype.isTermUri = function (term) {
  return (term.indexOf (this.voc.uri) == 0) ? true : false;
};

// Return a string containing the vocabulary language.
Vocabulary.prototype.getLang = function () {
  return this.lang;
};

// Return a string containing the vocabulary namespace URI.
Vocabulary.prototype.getUri = function () {
  return this.voc.uri;
};

// Return a string containing the vocabulary namespace version date.
Vocabulary.prototype.getVersionDate = function () {
  return this.voc.versionDate;
};

// Return boolean value, true if term (termId or termUri) is supported
Vocabulary.prototype.isValid = function (term) {
  var t;
  if (this.isTermUri (term) == true) {
    t = term.replace (this.voc.uri+((this.voc.uri.match (/^urn:/)) ? ':' : '#'), '');
  } else {
    t = term;
  }
  return this.voc.terms.hasOwnProperty(t);
};

// Return a string containing the termId given the fully qualified term URI. If term isn't matching return null.
Vocabulary.prototype.getTermId = function (termUri) {
  if (this.isTermUri (termUri) == true) {
    return termUri.replace (this.voc.uri+((this.voc.uri.match (/^urn:/)) ? ':' : '#'), '');
  } else {
    return null;
  }
};

// Return a string containing the fully qualified term URI.
Vocabulary.prototype.getTermUri = function (termId) {
  return this.voc.uri + ((this.voc.uri.match (/^urn:/)) ? ':' : '#') + termId;
};

// Return boolean value, true if termId is deprecated
Vocabulary.prototype.isDeprecated = function (termId) {
  if (this.voc.deprecated && Object.keys(this.voc.deprecated).length > 0 ) {
    for (var i=0; i < this.voc.deprecated; i++) {
      if (this.voc.deprecated[i] == termId) return true;
    }
  }
  return false;
};

// Return an array with all the termId codes supported.
Vocabulary.prototype.getAllTermId = function() {
  var result = [];
  for (termId in this.voc.terms) {
    if (!this.voc.terms.hasOwnProperty(termId)) continue;
    result.push (termId);
  }
  return result;
};

// Return an array with all the term URI supported.
Vocabulary.prototype.getAllTermUri = function() {
  var result = [];
  for (termId in this.voc.terms) {
    if (!this.voc.terms.hasOwnProperty(termId)) continue;
    result.push (this.getTermUri (termId));
  }
  return result;
};

// Return an array of fully qualified term URI of equivalent terms in other classification schemas.
Vocabulary.prototype.getEquivalent = function (termId) {
  var result = [];
  if (this.voc.equivalent[termId]) {
    for (termUri in this.voc.equivalent[termId]) {
      if (!this.voc.equivalent[termId].hasOwnProperty(termUri)) continue;
      result.push (termUri);
    }
  }
  return result;
};

// Return an array of fully qualified term URI with which termId can be matched in other vocabularies. Results may be filtered by external uri if specified. The external uri may be a single string or an array of strings. 
Vocabulary.prototype.getMappings = function (termId, uri) {
  var result = [];
  if (this.voc.mappings[termId]) {
    var filter;
    if (uri && Array.isArray (uri) === true) {
      filter = uri;
    } else {
      filter = [uri];
    }
    for (var i=0; i < this.voc.mappings[termId].length; i++) {
      var match = false;
      for (var j=0; j < filter.length; j++) {
        if (filter[j] && this.voc.mappings[termId][i].uri === filter[j]) {
          match = true;
	  break;
        }
      }
      if (match === false) {
        continue;
      }
      result.push (this.voc.mappings[termId][i].uri + ((this.voc.mappings[termId][i].uri.match (/^urn:/)) ? ':' : '#') + this.voc.mappings[termId][i].termId);
    } 
  }
  return result;
};

// Return an array of fully qualified term URI mappings in other vocabularies which the termId label matches string. String can be a literal string or a regular expression object. Results may be filtered by external uri if specified. The external uri may be a single string or an array of strings.
Vocabulary.prototype.getMappingsMatching = function (string, uri) {
  var result = [];
  var termIds = this.getAllTermIdMatching (string);
  for (var i=0; i < termIds.length; i++) {
    result.push.apply (result, this.getMappings (termIds[i], uri));
  }
  return result;
};

// Return an array with all the termId matching string. String can be a literal string or a regular expression object.
Vocabulary.prototype.getAllTermIdMatching = function (string) {
  var result = [];
  if (this.voc.names[string]) {
    result.push.apply (result, this.voc.names[string]);
  } else {
    var processed={};
    var re;
    if (Object.prototype.toString.call(string) == '[object RegExp]') {
      re = string;
    } else {
      re = new RegExp (String(string).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, '\\$1'));
    }
    for (var n in this.voc.names) {
      if (!this.voc.names.hasOwnProperty(n)) continue;
      if (re.test (n)) {
	for (var i=0; i < this.voc.names[n].length; i++) {
	  if (!processed[this.voc.names[n][i]]) {
            result.push (this.voc.names[n][i]);
	    processed[this.voc.names[n][i]] = true;
	  }
	}
      }
    }
  }
  return result;
};

// Return an array with all the term URI matching string. String can be a literal string or a regular expression object.
Vocabulary.prototype.getAllTermUriMatching = function (string) {
  var result = [];
  var termIds = this.getAllTermIdMatching (string);
  for (var i=0; i < termIds.length; i++) {
    result.push (this.getTermUri (termIds[i]));
  }
  return result;
};

// Return object {"Name"}. If termId isn't supported return {}.
Vocabulary.prototype.getTermInfo = function (termId) {
  var result = {};
  if (this.isValid (termId) == true) {
    result["Name"] = this.voc.terms[termId];
  }
  return result;
};
