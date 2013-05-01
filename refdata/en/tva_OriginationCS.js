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

;(function(exports){

/* PRIVATE */

//embed object json
//no accessible directly, you must use isValid, getTermId, getTermUri, isDeprecated, getAllTermId, getTermInfo, getUri or getVersionDate

var voc = {"terms":{"5.7":["Cinema"],"5.7.1":["Made on location"],"5.7.2":["Made in studio"],"5.7.3":["Made by the consumer"],"5.7.4":["Produced by major studio"],"5.7.5":["Produced by independent studio"],"5.8":["TV"],"5.8.1":["Made on location"],"5.8.1.1":["Live"],"5.8.1.2":["As Live"],"5.8.1.3":["Edited"],"5.8.2":["Made in studio"],"5.8.2.1":["Live"],"5.8.2.2":["As Live"],"5.8.2.3":["Edited"],"5.8.3":["Made by the consumer"],"5.9":["Radio"],"5.9.1":["Made on location"],"5.9.1.1":["Live"],"5.9.1.2":["As Live"],"5.9.1.3":["Edited"],"5.9.2":["Made in studio"],"5.9.2.1":["Live"],"5.9.2.2":["As Live"],"5.9.2.3":["Edited"],"5.9.3":["Made on consumer equipment (home audio)"],"5.9.3.1":["Live"],"5.9.3.2":["As Live"],"5.9.3.3":["Edited"],"5.10":["Online Distribution"],"5.10.1":["Made on location"],"5.10.1.1":["Live"],"5.10.1.2":["As Live"],"5.10.1.3":["Edited"],"5.10.2":["Made in studio"],"5.10.2.1":["Live"],"5.10.2.2":["As Live"],"5.10.2.3":["Edited"],"5.10.3":["Made on consumer equipment"],"5.10.3.1":["Live"],"5.10.3.2":["As Live"],"5.10.3.3":["Edited"],"5.11":["Offline Distribution"]},"names":{"Cinema":["5.7"],"Made on location":["5.7.1","5.8.1","5.9.1","5.10.1"],"Made in studio":["5.7.2","5.8.2","5.9.2","5.10.2"],"Made by the consumer":["5.7.3","5.8.3"],"Produced by major studio":["5.7.4"],"Produced by independent studio":["5.7.5"],"TV":["5.8"],"Live":["5.8.1.1","5.8.2.1","5.9.1.1","5.9.2.1","5.9.3.1","5.10.1.1","5.10.2.1","5.10.3.1"],"As Live":["5.8.1.2","5.8.2.2","5.9.1.2","5.9.2.2","5.9.3.2","5.10.1.2","5.10.2.2","5.10.3.2"],"Edited":["5.8.1.3","5.8.2.3","5.9.1.3","5.9.2.3","5.9.3.3","5.10.1.3","5.10.2.3","5.10.3.3"],"Radio":["5.9"],"Made on consumer equipment (home audio)":["5.9.3"],"Online Distribution":["5.10"],"Made on consumer equipment":["5.10.3"],"Offline Distribution":["5.11"]},"uri":"urn:tva:metadata:cs:OriginationCS:2011","versionDate":"2013-01-07"}
// Return true if term is the fully qualified term URI, false otherwise
var isTermUri = function (term) {
  return (term.indexOf (voc.uri) == 0) ? true : false;
};

// Return a string containing the vocabulary namespace URI.
var getUri = function () {
  return voc.uri;
};

// Return a string containing the vocabulary namespace version date.
var getVersionDate = function () {
  return voc.versionDate;
};

/* PUBLIC */

// Return boolean value, true if term (termId or termUri) is supported
exports.isValid = function (term) {
  var t;
  if (isTermUri (term) == true) {
    t = term.replace (voc.uri, '');
  } else {
    t = term;
  }
  return voc.terms.hasOwnProperty(t);
};

// Return a string containing the termId given the fully qualified term URI. If term isn't matching return null.
exports.getTermId = function (termUri) {
  if (isTermUri (termUri) == true) {
    return termUri.replace (voc.uri, '');
  } else {
    return null;
  }
};

// Return a string containing the fully qualified term URI.
exports.getTermUri = function (termId) {
  return voc.uri + ((voc.uri.match (/^urn:/)) ? ':' : '#') + termId;
};

// Return boolean value, true if termId is deprecated
exports.isDeprecated = function (termId) {
  if (voc.deprecated) {
    for (var i=0; i < voc.deprecated; i++) {
      if (voc.deprecated[i] == termId) return true;
    }
  }
  return false;
};

// Return an array with all the termId codes supported.
exports.getAllTermId = function() {
  var result = [];
  for (termId in voc.terms) {
    result.push (termId);
  }
  return result;
};

// Return an array with all the termId matching string.
exports.getAllTermIdMatching = function (string) {
  var result = [];
  if (voc.names[string]) {
    result.push.apply (result, voc.names[string]);
  } else {
    for (var n in voc.names) {
      if (voc.names[n].indexOf (string) !== -1)
        result.push.apply (result, voc.names[n]);
    }
  }
  return result;
};

// Return object {"Name"}. If termId isn't supported return {}.
exports.getTermInfo = function (termId) {
  var result = {};
  if (exports.isValid (termId)) {
    result["Name"] = voc.terms[termId];
  }
  return result;
};

//allow executing by nodejs in the server or by javascript in the browser
})(typeof exports === 'undefined'? this['terms']={}: exports);
