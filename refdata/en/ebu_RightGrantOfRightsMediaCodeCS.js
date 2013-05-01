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

var voc = {"terms":{"0":["All"],"1":["Cable"],"2":["Cable Pay TV"],"3":["Cable TV On-demand"],"4":["Cable Pay-per-view TV"],"5":["Downloadable"],"6":["Free"],"7":["Home Video/Audio"],"8":["Internet"],"9":["Internet On-demand"],"10":["Internet Public Site"],"11":["Internet Restricted Access Site"],"12":["Pay Media"],"13":["Radio"],"14":["Restricted Access media"],"15":["Satellite"],"16":["Satellite Free TV"],"17":["Satellite Pay TV"],"18":["Satellite Pay-per-view TV"],"19":["Streaming Media"],"20":["Terrestrial"],"21":["Terrestrial Free TV"],"22":["Terrestrial Pay TV"],"23":["Interactive TV"],"24":["Theatrical Distribution"],"25":["Removable Media"],"26":["Pay-per-View","Catch-up-TV"],"27":["Catch-up-TV"],"28":["Hospitality"],"29":["Theatrical"],"7.1":["CD"],"7.2":["VHS"],"7.3":["Video Disk"],"7.4":["DVD"],"7.5":["Blue-Ray"],"9.1":["Internet Buy"],"9.2":["Internet Rent"]},"names":{"All":["0"],"Cable":["1"],"Cable Pay TV":["2"],"Cable TV On-demand":["3"],"Cable Pay-per-view TV":["4"],"Downloadable":["5"],"Free":["6"],"Home Video/Audio":["7"],"CD":["7.1"],"VHS":["7.2"],"Video Disk":["7.3"],"DVD":["7.4"],"Blue-Ray":["7.5"],"Internet":["8"],"Internet On-demand":["9"],"Internet Buy":["9.1"],"Internet Rent":["9.2"],"Internet Public Site":["10"],"Internet Restricted Access Site":["11"],"Pay Media":["12"],"Radio":["13"],"Restricted Access media":["14"],"Satellite":["15"],"Satellite Free TV":["16"],"Satellite Pay TV":["17"],"Satellite Pay-per-view TV":["18"],"Streaming Media":["19"],"Terrestrial":["20"],"Terrestrial Free TV":["21"],"Terrestrial Pay TV":["22"],"Interactive TV":["23"],"Theatrical Distribution":["24"],"Removable Media":["25"],"Pay-per-View":["26"],"Catch-up-TV":["26","27"],"Hospitality":["28"],"Theatrical":["29"]},"uri":"urn:ebu:metadata-cs:RightGrantOfRightsMediaCodeCS_20013","versionDate":"2013-01-07"}
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
