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
    result.push (termId);
  }
  return result;
};

// Return an array of fully qualified term URI of equivalent terms in other classification schemas.
Vocabulary.prototype.getEquivalent = function (termId) {
  var result = [];
  if (this.voc.equivalent[termId]) {
    for (termUri in this.voc.equivalent[termId]) {
      result.push (termUri);
    }
  }
  return result;
};

// Return an array of fully qualified term URI with which termId can be matched in other vocabularies. Results may be filtered by external uri if specified.
Vocabulary.prototype.getMappings = function (termId, uri) {
  var result = [];
  if (this.voc.mappings[termId]) {
    for (var i=0; i < this.voc.mappings[termId].length; i++) {
      if (uri && this.voc.mappings[termId][i].uri !== uri) {
        continue;
      }
      result.push (this.voc.mappings[termId][i].uri + ((this.voc.mappings[termId][i].uri.match (/^urn:/)) ? ':' : '#') + this.voc.mappings[termId][i].termId);
    } 
  }
  return result;
};

// Return an array of fully qualified term URI with which the termId having label string can be matched in other vocabularies. Results may be filtered by external uri if specified.
Vocabulary.prototype.getMappingsMatching = function (string, uri) {
  var result = [];
  var termIds = this.getAllTermIdMatching (string);
  for (var i=0; i < termIds.length; i++) {
    result.push.apply (result, this.getMappings (termIds[i], uri));
  }
  return result;
};

// Return an array with all the termId matching string.
Vocabulary.prototype.getAllTermIdMatching = function (string) {
  var result = [];
  if (this.voc.names[string]) {
    result.push.apply (result, this.voc.names[string]);
  } else {
    for (var n in this.voc.names) {
      if (this.voc.names[n].indexOf (string) !== -1)
        result.push.apply (result, this.voc.names[n]);
    }
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
