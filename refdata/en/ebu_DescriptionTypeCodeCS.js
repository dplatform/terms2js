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

var voc = {"terms":{"1":["Description"],"2":["Synopsis"],"3":["Script","Screenplay","Storyboard"],"4":["Summary"],"5":["Promotional information"],"6":["Review","Opinion"],"7":["Selection","Excerpt"],"8":["Table of contents"],"9":["Playlist"],"10":["Abstract"],"11":["Transcript"],"12":["Anecdotal comments & reflections"],"13":["Annotation"],"14":["Bookmarks"],"15":["Theme"],"16":["Highlights"],"17":["Shot list"],"18":["Edit Decision List"],"19":["Purpose"],"20":["Outline"],"21":["Rundown"],"22":["Cue Words"],"23":["Process"],"24":["Assessment","Qualitative Value"],"25":["Awards"],"26":["Editorial comments"],"27":["Key Points"],"28":["Number"],"29":["Headline"],"30":["Shot Description"],"31":["Dopesheet"],"32":["Keyword"],"33":["Credit Line"],"34":["Instructions"],"35":["Model Information"],"36":["Artwork","Object"],"37":["Event"],"38":["Release information"],"39":["Intention"],"40":["Shot Comment"],"41":["Quote","Citation"],"1.1":["Annotation Description"],"2.1":["Group Synopsis"],"2.2":["Annotation Synopsis"],"22.1":["Cue-In Words"],"22.2":["Cue-Out Words"]},"names":{"Description":["1"],"Annotation Description":["1.1"],"Synopsis":["2"],"Group Synopsis":["2.1"],"Annotation Synopsis":["2.2"],"Script":["3"],"Screenplay":["3"],"Storyboard":["3"],"Summary":["4"],"Promotional information":["5"],"Review":["6"],"Opinion":["6"],"Selection":["7"],"Excerpt":["7"],"Table of contents":["8"],"Playlist":["9"],"Abstract":["10"],"Transcript":["11"],"Anecdotal comments & reflections":["12"],"Annotation":["13"],"Bookmarks":["14"],"Theme":["15"],"Highlights":["16"],"Shot list":["17"],"Edit Decision List":["18"],"Purpose":["19"],"Outline":["20"],"Rundown":["21"],"Cue Words":["22"],"Cue-In Words":["22.1"],"Cue-Out Words":["22.2"],"Process":["23"],"Assessment":["24"],"Qualitative Value":["24"],"Awards":["25"],"Editorial comments":["26"],"Key Points":["27"],"Number":["28"],"Headline":["29"],"Shot Description":["30"],"Dopesheet":["31"],"Keyword":["32"],"Credit Line":["33"],"Instructions":["34"],"Model Information":["35"],"Artwork":["36"],"Object":["36"],"Event":["37"],"Release information":["38"],"Intention":["39"],"Shot Comment":["40"],"Quote":["41"],"Citation":["41"]},"uri":"urn:ebu:metadata-cs:DescriptionTypeCodeCS_2013","versionDate":"2013-01-07"}
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
