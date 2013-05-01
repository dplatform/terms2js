/*
 * Copyright 2013
 * Alberto Attilio Reggiori <alberto@derrickmedia.com>
 * https://github.com/dplatform/MetadataReferenceData
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

var voc = {"terms":{"7.0":["Proprietary"],"7.1":["Linear"],"7.1.1":["Audio only"],"7.1.2":["Video only"],"7.1.2.1":["Shot"],"7.1.2.2":["Scene"],"7.1.3":["Audio and video"],"7.1.4":["Multimedia"],"7.1.4.1":["Text"],"7.1.4.1.1":["Message"],"7.1.4.2":["Graphics"],"7.1.4.3":["Application"],"7.1.4.4":["Still picture"],"7.1.4.4.1":["Photo"],"7.1.4.4.2":["Image"],"7.1.5":["Data"],"7.2":["Non Linear"],"7.2.1":["Audio only"],"7.2.2":["Video only"],"7.2.2.1":["Shot"],"7.2.2.2":["Scene"],"7.2.3":["Audio and video"],"7.2.4":["Multimedia"],"7.2.4.1":["Text"],"7.2.4.1.1":["Message"],"7.2.4.2":["Graphics"],"7.2.4.3":["Application"],"7.2.4.4":["Still picture"],"7.2.4.4.1":["Photo"],"7.2.4.4.2":["Image"],"7.2.5":["Data"],"7.3":["Audio Video Enhancements"],"7.3.1":["Linear with non-sync"],"7.3.2":["Linear with sync"],"7.3.3":["Multi stream audio"],"7.3.4":["Multi stream video"],"7.3.5":["Non-linear one stream A/V show"],"7.3.6":["Non-linear multi stream"],"7.3.7":["Hybrid NVOD"],"7.3.8":["Mix and match"],"7.3.9":["Parallel 'layer controlled' audio or video support"],"7.3.10":["Linear broadcast with online insertions"]},"names":{"Proprietary":["7.0"],"Linear":["7.1"],"Audio only":["7.1.1","7.2.1"],"Video only":["7.1.2","7.2.2"],"Shot":["7.1.2.1","7.2.2.1"],"Scene":["7.1.2.2","7.2.2.2"],"Audio and video":["7.1.3","7.2.3"],"Multimedia":["7.1.4","7.2.4"],"Text":["7.1.4.1","7.2.4.1"],"Message":["7.1.4.1.1","7.2.4.1.1"],"Graphics":["7.1.4.2","7.2.4.2"],"Application":["7.1.4.3","7.2.4.3"],"Still picture":["7.1.4.4","7.2.4.4"],"Photo":["7.1.4.4.1","7.2.4.4.1"],"Image":["7.1.4.4.2","7.2.4.4.2"],"Data":["7.1.5","7.2.5"],"Non Linear":["7.2"],"Audio Video Enhancements":["7.3"],"Linear with non-sync":["7.3.1"],"Linear with sync":["7.3.2"],"Multi stream audio":["7.3.3"],"Multi stream video":["7.3.4"],"Non-linear one stream A/V show":["7.3.5"],"Non-linear multi stream":["7.3.6"],"Hybrid NVOD":["7.3.7"],"Mix and match":["7.3.8"],"Parallel 'layer controlled' audio or video support":["7.3.9"],"Linear broadcast with online insertions":["7.3.10"]},"uri":"urn:ebu:metadata-cs:MediaTypeCS_2008","versionDate":"2013-01-07"}
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
