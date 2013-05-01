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

var voc = {"terms":{"1.0":["Proprietary"],"1.1":["ENTERTAIN"],"1.1.1":["Pure entertainment"],"1.1.2":["Informative entertainment"],"1.2":["INFORM"],"1.2.1":["Government"],"1.2.2":["Pure information"],"1.2.3":["Infotainment"],"1.2.4":["Advice"],"1.3":["EDUCATE"],"1.3.1":["School Programmes"],"1.3.1.1":["Primary"],"1.3.1.2":["Secondary"],"1.3.1.3":["Tertiary"],"1.3.2":["Lifelong/further education"],"1.4":["PROMOTE"],"1.5":["ADVERTISE"],"1.5.1":["Infomercial"],"1.5.2":["Billboarding"],"1.6":["RETAIL"],"1.6.1":["Gambling"],"1.6.2":["Home Shopping"],"1.7":["FUND RAISE/SOCIAL ACTION"],"1.7.1":["Fund Raising"],"1.7.2":["Social Action"],"1.8":["ENRICH"],"1.8.1":["General enrichment"],"1.8.2":["Inspirational enrichment"],"1.9":["EDUCATIONAL DIFFICULTY"],"1.9.1":["Very Easy"],"1.9.2":["Easy"],"1.9.3":["Medium"],"1.9.4":["Difficult"],"1.9.5":["Very Difficult"],"1.10":["Unknown"],"1.11":["Other"]},"names":{"Proprietary":["1.0"],"ENTERTAIN":["1.1"],"Pure entertainment":["1.1.1"],"Informative entertainment":["1.1.2"],"INFORM":["1.2"],"Government":["1.2.1"],"Pure information":["1.2.2"],"Infotainment":["1.2.3"],"Advice":["1.2.4"],"EDUCATE":["1.3"],"School Programmes":["1.3.1"],"Primary":["1.3.1.1"],"Secondary":["1.3.1.2"],"Tertiary":["1.3.1.3"],"Lifelong/further education":["1.3.2"],"PROMOTE":["1.4"],"ADVERTISE":["1.5"],"Infomercial":["1.5.1"],"Billboarding":["1.5.2"],"RETAIL":["1.6"],"Gambling":["1.6.1"],"Home Shopping":["1.6.2"],"FUND RAISE/SOCIAL ACTION":["1.7"],"Fund Raising":["1.7.1"],"Social Action":["1.7.2"],"ENRICH":["1.8"],"General enrichment":["1.8.1"],"Inspirational enrichment":["1.8.2"],"EDUCATIONAL DIFFICULTY":["1.9"],"Very Easy":["1.9.1"],"Easy":["1.9.2"],"Medium":["1.9.3"],"Difficult":["1.9.4"],"Very Difficult":["1.9.5"],"Unknown":["1.10"],"Other":["1.11"]},"uri":"urn:ebu:metadata-cs:IntentionCodeCS_2008","versionDate":"2013-01-07"}
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
