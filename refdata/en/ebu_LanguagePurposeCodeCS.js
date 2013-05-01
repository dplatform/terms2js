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

var voc = {"terms":{"1":["Audio"],"2":["Text"],"3":["Sign Language"],"1.1":["Main Original Language"],"1.2":["Main Dubbed Language"],"1.3":["Additional Original Language"],"1.4":["Additional Dubbed Language"],"1.5":["Descriptive Video Information"],"1.6":["Supplemental commentary"],"1.7":["Director's commentary"],"1.8":["Audio description"],"1.9":["Supplementary Audio Programme"],"1.10":["Educational notes"],"1.11":["Voice over"],"1.12":["Original Commentary"],"1.13":["Dubbed Commentary"],"1.14":["Original Narration"],"1.15":["Dubbed Dialogue"],"1.16":["Dubbed Narration"],"1.17":["Interviewer Language"],"1.18":["Interviewee Language"],"2.1":["Text description for the hard-of-hearing"],"2.2":["Transcript"],"2.3":["Caption"],"2.3.1":["Open Caption"],"2.3.2":["Closed Caption"],"2.3.3":["Supplemental"],"2.4":["Titles"],"2.5":["Subtitles"],"2.5.1":["Open Subtitles"],"2.5.2":["Closed Subtitles"],"2.6":["Song Lyrics"],"3.1":["Dubbed Sign Language"]},"names":{"Audio":["1"],"Main Original Language":["1.1"],"Main Dubbed Language":["1.2"],"Additional Original Language":["1.3"],"Additional Dubbed Language":["1.4"],"Descriptive Video Information":["1.5"],"Supplemental commentary":["1.6"],"Director's commentary":["1.7"],"Audio description":["1.8"],"Supplementary Audio Programme":["1.9"],"Educational notes":["1.10"],"Voice over":["1.11"],"Original Commentary":["1.12"],"Dubbed Commentary":["1.13"],"Original Narration":["1.14"],"Dubbed Dialogue":["1.15"],"Dubbed Narration":["1.16"],"Interviewer Language":["1.17"],"Interviewee Language":["1.18"],"Text":["2"],"Text description for the hard-of-hearing":["2.1"],"Transcript":["2.2"],"Caption":["2.3"],"Open Caption":["2.3.1"],"Closed Caption":["2.3.2"],"Supplemental":["2.3.3"],"Titles":["2.4"],"Subtitles":["2.5"],"Open Subtitles":["2.5.1"],"Closed Subtitles":["2.5.2"],"Song Lyrics":["2.6"],"Sign Language":["3"],"Dubbed Sign Language":["3.1"]},"uri":"urn:ebu:metadata-cs:LanguagePurposeCodeCS_2008","versionDate":"2013-01-07"}
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
