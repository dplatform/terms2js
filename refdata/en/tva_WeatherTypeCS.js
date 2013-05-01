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

var voc = {"terms":{"1":["Spring"],"2":["Summer"],"3":["Autumn"],"4":["Winter"],"5":["Sunny"],"6":["Rainy"],"7":["Cloudy"],"8":["Snowy"],"9":["Windy"],"10":["Foggy"],"11":["Frosty"],"12":["Storm"],"13":["Extreme Weather"],"12.1":["ThunderStorm"],"12.2":["RainStorm"],"12.3":["SnowStorm"],"13.1":["Hurricane"],"13.2":["Typhoon"],"13.3":["Tornado"]},"names":{"Spring":["1"],"Summer":["2"],"Autumn":["3"],"Winter":["4"],"Sunny":["5"],"Rainy":["6"],"Cloudy":["7"],"Snowy":["8"],"Windy":["9"],"Foggy":["10"],"Frosty":["11"],"Storm":["12"],"ThunderStorm":["12.1"],"RainStorm":["12.2"],"SnowStorm":["12.3"],"Extreme Weather":["13"],"Hurricane":["13.1"],"Typhoon":["13.2"],"Tornado":["13.3"]},"uri":"urn:tva:metadata-cs:WeatherTypeCS_2005","versionDate":"2013-01-07"}
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
