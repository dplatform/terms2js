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

var voc = {"terms":{"1":["Colour"],"2":["Mixed"],"3":["Monochrome"],"4":["B&W - Black and White"],"5":["Grayscale"],"6":["Tinted"],"7":["Colorised"],"1.1":["Colour with B&W sequences"],"1.2":["Colour with grayscale sequences"],"1.3":["CMYK"],"1.4":["Palette"],"1.5":["YCbCr"],"1.6":["YUV"],"1.7":["RGB"],"1.7.1":["sRGB"],"1.7.2":["AbodeRGB"],"1.7.3":["SMPTE RGB"],"1.7.4":["UHDTV RGB"],"1.7.99":["Other set of RGB colour paramters"],"4.1":["B&W with grayscale sequences"],"4.2":["B&W with colour sequences"],"5.1":["Grayscale with B&W sequences"],"5.2":["Grayscale with colour sequences"]},"names":{"Colour":["1"],"Colour with B&W sequences":["1.1"],"Colour with grayscale sequences":["1.2"],"CMYK":["1.3"],"Palette":["1.4"],"YCbCr":["1.5"],"YUV":["1.6"],"RGB":["1.7"],"sRGB":["1.7.1"],"AbodeRGB":["1.7.2"],"SMPTE RGB":["1.7.3"],"UHDTV RGB":["1.7.4"],"Other set of RGB colour paramters":["1.7.99"],"Mixed":["2"],"Monochrome":["3"],"B&W - Black and White":["4"],"B&W with grayscale sequences":["4.1"],"B&W with colour sequences":["4.2"],"Grayscale":["5"],"Grayscale with B&W sequences":["5.1"],"Grayscale with colour sequences":["5.2"],"Tinted":["6"],"Colorised":["7"]},"uri":"urn:ebu:metadata-cs:ColourCodeCS_2013","versionDate":"2013-01-07"}
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
