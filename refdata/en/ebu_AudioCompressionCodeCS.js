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

var voc = {"terms":{"1":["A-LAW"],"2":["MU-LAW"],"3":["ATRAC"],"4":["DOLBY"],"5":["DTS"],"6":["G.72x"],"7":["MPEG-1 Audio"],"8":["MPEG-2 AAC"],"9":["MPEG-2 Audio"],"10":["MPEG-4 Audio"],"11":["Linear PCM"],"12":["AMR"],"13":["NICAM"],"14":["Real Audio"],"15":["None"],"16":["Unspecified"],"17":["Unspecified lossless"],"18":["Unspecified lossy"],"19":["Windows Media Audio (Wma)"],"20":["ALAC"],"21":["DSD","DST"],"22":["FLAC"],"23":["LPAC"],"24":["LTAC"],"25":["MLP","QCELP"],"26":["Vorbis"],"27":["WM9-lossless"],"28":["WAV"],"29":["Ambisonic"],"3.1":["ATRAC2"],"3.2":["ATRAC3"],"4.1":["DOLBY A"],"4.2":["AC3"],"4.3":["E-AC3"],"4.4":["DOLBY B"],"4.5":["DOLBY C"],"4.6":["DOLBY E"],"4.7":["DOLBY Pro-logic"],"4.8":["DOLBY Pro-logic II"],"4.9":["DOLBY S"],"4.10":["DOLBY SR"],"4.11":["DOLBY Stereo"],"4.12":["DOLBY Surround"],"4.13":["DOLBY Digital Plus"],"4.14":["DOLBY EX"],"4.15":["DOLBY TRUEHD"],"5.1":["DTS-ES"],"5.2":["DTS-HRA"],"5.3":["DTS-96/24"],"5.4":["DTS-MA"],"6.1":["G.722"],"6.2":["G.723"],"6.3":["G.723.1"],"6.4":["G.726"],"6.5":["G.728"],"6.6":["G.729"],"6.7":["G.729.1"],"6.8":["G.729.a"],"7.1":["MPEG-1 Layer I"],"7.2":["MPEG-1 Layer II"],"7.3":["MPEG-1 Layer III"],"8.1":["MPEG-2 Audio AAC Low Complexity Profile"],"8.2":["MPEG-2 Audio AAC Main Profile"],"8.3":["MPEG-2 Audio AAC Sampling Rate Scalable Profile"],"8.4":["MP3"],"8.5":["HE-AACv2"],"9.1":["MPEG-2 Layer I"],"9.2":["MPEG-2 Layer II"],"9.3":["MPEG-2 Layer III"],"9.4":["MPEG-2 Audio Low Sampling Rate"],"9.4.1":["MPEG-2 Audio Low Sampling Rate Layer I"],"9.4.2":["MPEG-2 Audio Low Sampling Rate Layer II"],"9.4.3":["MPEG-2 Audio Low Sampling Rate Layer III"],"9.5":["MPEG-2 Backward Compatible Multi-Channel"],"9.5.1":["MPEG-2 Backward Compatible Multi-Channel Layer I"],"9.5.2":["MPEG-2 Backward Compatible Multi-Channel Layer II"],"9.5.3":["MPEG-2 Backward Compatible Multi-Channel Layer III"],"10.1":["MPEG-4 Audio Synthetic Profile"],"10.1.1":["MPEG-4 Audio Synthetic Profile @ Level 1"],"10.1.2":["MPEG-4 Audio Synthetic Profile @ Level 2"],"10.1.3":["MPEG-4 Audio Synthetic Profile @ Level 3"],"10.2":["MPEG-4 Audio Speech Profile"],"10.2.1":["MPEG-4 Audio Speech Profile @ Level 1"],"10.2.2":["MPEG-4 Audio Speech Profile @ Level 2"],"10.3":["MPEG-4 Audio Scalable Profile"],"10.3.1":["MPEG-4 Audio Scalable Profile @ Level 1"],"10.3.2":["MPEG-4 Audio Scalable Profile @ Level 2"],"10.3.3":["MPEG-4 Audio Scalable Profile @ Level 3"],"10.3.4":["MPEG-4 Audio Scalable Profile @ Level 4"],"10.4":["MPEG-4 Main Audio Profile"],"10.4.1":["MPEG-4 Main Audio Profile @ Level 1"],"10.4.2":["MPEG-4 Main Audio Profile @ Level 2"],"10.4.3":["MPEG-4 Main Audio Profile @ Level 3"],"10.4.4":["MPEG-4 Main Audio Profile @ Level 4"],"10.5":["MPEG-4 High Quality Audio Profile"],"10.5.1":["MPEG-4 High Quality Audio Profile @ Level 1"],"10.5.2":["MPEG-4 High Quality Audio Profile @ Level 2"],"10.5.3":["MPEG-4 High Quality Audio Profile @ Level 3"],"10.5.4":["MPEG-4 High Quality Audio Profile @ Level 4"],"10.5.5":["MPEG-4 High Quality Audio Profile @ Level 5"],"10.5.6":["MPEG-4 High Quality Audio Profile @ Level 6"],"10.5.7":["MPEG-4 High Quality Audio Profile @ Level 7"],"10.5.8":["MPEG-4 High Quality Audio Profile @ Level 8"],"10.6":["MPEG-4 Low Delay Audio Profile"],"10.6.1":["MPEG-4 Low Delay Audio Profile @ Level 1"],"10.6.2":["MPEG-4 Low Delay Audio Profile @ Level 2"],"10.6.3":["MPEG-4 Low Delay Audio Profile @ Level 3"],"10.6.4":["MPEG-4 Low Delay Audio Profile @ Level 4"],"10.6.5":["MPEG-4 Low Delay Audio Profile @ Level 5"],"10.6.6":["MPEG-4 Low Delay Audio Profile @ Level 6"],"10.6.7":["MPEG-4 Low Delay Audio Profile @ Level 7"],"10.6.8":["MPEG-4 Low Delay Audio Profile @ Level 8"],"10.7":["MPEG-4 Natural Audio Profile"],"10.7.1":["MPEG-4 Natural Audio Profile @ Level 1"],"10.7.2":["MPEG-4 Natural Audio Profile @ Level 2"],"10.7.3":["MPEG-4 Natural Audio Profile @ Level 3"],"10.7.4":["MPEG-4 Natural Audio Profile @ Level 4"],"10.8":["MPEG-4 Mobile Audio Internetworking Profile"],"10.8.1":["MPEG-4 Mobile Audio Internetworking Profile @ Level 1"],"10.8.2":["MPEG-4 Mobile Audio Internetworking Profile @ Level 2"],"10.8.3":["MPEG-4 Mobile Audio Internetworking Profile @ Level 3"],"10.8.4":["MPEG-4 Mobile Audio Internetworking Profile @ Level 4"],"10.8.5":["MPEG-4 Mobile Audio Internetworking Profile @ Level 5"],"10.8.6":["MPEG-4 Mobile Audio Internetworking Profile @ Level 6"],"10.9":["MPEG-4 AAC Profile"],"10.9.1":["MPEG-4 AAC Profile @ Level 1"],"10.9.2":["MPEG-4 AAC Profile @ Level 2"],"10.9.3":["MPEG-4 AAC Profile @ Level 3"],"10.9.4":["MPEG-4 AAC Profile @ Level 4"],"10.9.5":["MPEG-4 AAC Profile @ Level 5"],"10.10":["MPEG-4 High Efficiency AAC Profile"],"10.10.0":["MPEG-4 High Efficiency AAC Profile @ Level 1"],"10.10.1":["MPEG-4 High Efficiency AAC Profile @ Level 2"],"10.10.2":["MPEG-4 High Efficiency AAC Profile @ Level 3"],"10.10.3":["MPEG-4 High Efficiency AAC Profile @ Level 4"],"10.10.5":["MPEG-4 High Efficiency AAC Profile @ Level 5"],"10.11":["MPEG-4 High Efficency AAC v2 Profile"],"10.11.0":["MPEG-4 High Efficency AAC v2 Profile @ Level 1"],"10.11.1":["MPEG-4 High Efficency AAC v2 Profile @ Level 2"],"10.11.2":["MPEG-4 High Efficency AAC v2 Profile @ Level 3"],"10.11.3":["MPEG-4 High Efficency AAC v2 Profile @ Level 4"],"10.11.4":["MPEG-4 High Efficency AAC v2 Profile @ Level 5"],"10.12":["MPEG-4 Low Delay AAC Profile"],"10.12.1":["MPEG-4 Low Delay AAC Profile @ Level 1"],"12.1":["AMR-WB+"],"14.1":["Real Audio - Lossless"],"19.1":["WM9-lossless"],"21.1":["DST"]},"names":{"A-LAW":["1"],"MU-LAW":["2"],"ATRAC":["3"],"ATRAC2":["3.1"],"ATRAC3":["3.2"],"DOLBY":["4"],"DOLBY A":["4.1"],"AC3":["4.2"],"E-AC3":["4.3"],"DOLBY B":["4.4"],"DOLBY C":["4.5"],"DOLBY E":["4.6"],"DOLBY Pro-logic":["4.7"],"DOLBY Pro-logic II":["4.8"],"DOLBY S":["4.9"],"DOLBY SR":["4.10"],"DOLBY Stereo":["4.11"],"DOLBY Surround":["4.12"],"DOLBY Digital Plus":["4.13"],"DOLBY EX":["4.14"],"DOLBY TRUEHD":["4.15"],"DTS":["5"],"DTS-ES":["5.1"],"DTS-HRA":["5.2"],"DTS-96/24":["5.3"],"DTS-MA":["5.4"],"G.72x":["6"],"G.722":["6.1"],"G.723":["6.2"],"G.723.1":["6.3"],"G.726":["6.4"],"G.728":["6.5"],"G.729":["6.6"],"G.729.1":["6.7"],"G.729.a":["6.8"],"MPEG-1 Audio":["7"],"MPEG-1 Layer I":["7.1"],"MPEG-1 Layer II":["7.2"],"MPEG-1 Layer III":["7.3"],"MPEG-2 AAC":["8"],"MPEG-2 Audio AAC Low Complexity Profile":["8.1"],"MPEG-2 Audio AAC Main Profile":["8.2"],"MPEG-2 Audio AAC Sampling Rate Scalable Profile":["8.3"],"MP3":["8.4"],"HE-AACv2":["8.5"],"MPEG-2 Audio":["9"],"MPEG-2 Layer I":["9.1"],"MPEG-2 Layer II":["9.2"],"MPEG-2 Layer III":["9.3"],"MPEG-2 Audio Low Sampling Rate":["9.4"],"MPEG-2 Audio Low Sampling Rate Layer I":["9.4.1"],"MPEG-2 Audio Low Sampling Rate Layer II":["9.4.2"],"MPEG-2 Audio Low Sampling Rate Layer III":["9.4.3"],"MPEG-2 Backward Compatible Multi-Channel":["9.5"],"MPEG-2 Backward Compatible Multi-Channel Layer I":["9.5.1"],"MPEG-2 Backward Compatible Multi-Channel Layer II":["9.5.2"],"MPEG-2 Backward Compatible Multi-Channel Layer III":["9.5.3"],"MPEG-4 Audio":["10"],"MPEG-4 Audio Synthetic Profile":["10.1"],"MPEG-4 Audio Synthetic Profile @ Level 1":["10.1.1"],"MPEG-4 Audio Synthetic Profile @ Level 2":["10.1.2"],"MPEG-4 Audio Synthetic Profile @ Level 3":["10.1.3"],"MPEG-4 Audio Speech Profile":["10.2"],"MPEG-4 Audio Speech Profile @ Level 1":["10.2.1"],"MPEG-4 Audio Speech Profile @ Level 2":["10.2.2"],"MPEG-4 Audio Scalable Profile":["10.3"],"MPEG-4 Audio Scalable Profile @ Level 1":["10.3.1"],"MPEG-4 Audio Scalable Profile @ Level 2":["10.3.2"],"MPEG-4 Audio Scalable Profile @ Level 3":["10.3.3"],"MPEG-4 Audio Scalable Profile @ Level 4":["10.3.4"],"MPEG-4 Main Audio Profile":["10.4"],"MPEG-4 Main Audio Profile @ Level 1":["10.4.1"],"MPEG-4 Main Audio Profile @ Level 2":["10.4.2"],"MPEG-4 Main Audio Profile @ Level 3":["10.4.3"],"MPEG-4 Main Audio Profile @ Level 4":["10.4.4"],"MPEG-4 High Quality Audio Profile":["10.5"],"MPEG-4 High Quality Audio Profile @ Level 1":["10.5.1"],"MPEG-4 High Quality Audio Profile @ Level 2":["10.5.2"],"MPEG-4 High Quality Audio Profile @ Level 3":["10.5.3"],"MPEG-4 High Quality Audio Profile @ Level 4":["10.5.4"],"MPEG-4 High Quality Audio Profile @ Level 5":["10.5.5"],"MPEG-4 High Quality Audio Profile @ Level 6":["10.5.6"],"MPEG-4 High Quality Audio Profile @ Level 7":["10.5.7"],"MPEG-4 High Quality Audio Profile @ Level 8":["10.5.8"],"MPEG-4 Low Delay Audio Profile":["10.6"],"MPEG-4 Low Delay Audio Profile @ Level 1":["10.6.1"],"MPEG-4 Low Delay Audio Profile @ Level 2":["10.6.2"],"MPEG-4 Low Delay Audio Profile @ Level 3":["10.6.3"],"MPEG-4 Low Delay Audio Profile @ Level 4":["10.6.4"],"MPEG-4 Low Delay Audio Profile @ Level 5":["10.6.5"],"MPEG-4 Low Delay Audio Profile @ Level 6":["10.6.6"],"MPEG-4 Low Delay Audio Profile @ Level 7":["10.6.7"],"MPEG-4 Low Delay Audio Profile @ Level 8":["10.6.8"],"MPEG-4 Natural Audio Profile":["10.7"],"MPEG-4 Natural Audio Profile @ Level 1":["10.7.1"],"MPEG-4 Natural Audio Profile @ Level 2":["10.7.2"],"MPEG-4 Natural Audio Profile @ Level 3":["10.7.3"],"MPEG-4 Natural Audio Profile @ Level 4":["10.7.4"],"MPEG-4 Mobile Audio Internetworking Profile":["10.8"],"MPEG-4 Mobile Audio Internetworking Profile @ Level 1":["10.8.1"],"MPEG-4 Mobile Audio Internetworking Profile @ Level 2":["10.8.2"],"MPEG-4 Mobile Audio Internetworking Profile @ Level 3":["10.8.3"],"MPEG-4 Mobile Audio Internetworking Profile @ Level 4":["10.8.4"],"MPEG-4 Mobile Audio Internetworking Profile @ Level 5":["10.8.5"],"MPEG-4 Mobile Audio Internetworking Profile @ Level 6":["10.8.6"],"MPEG-4 AAC Profile":["10.9"],"MPEG-4 AAC Profile @ Level 1":["10.9.1"],"MPEG-4 AAC Profile @ Level 2":["10.9.2"],"MPEG-4 AAC Profile @ Level 3":["10.9.3"],"MPEG-4 AAC Profile @ Level 4":["10.9.4"],"MPEG-4 AAC Profile @ Level 5":["10.9.5"],"MPEG-4 High Efficiency AAC Profile":["10.10"],"MPEG-4 High Efficiency AAC Profile @ Level 1":["10.10.0"],"MPEG-4 High Efficiency AAC Profile @ Level 2":["10.10.1"],"MPEG-4 High Efficiency AAC Profile @ Level 3":["10.10.2"],"MPEG-4 High Efficiency AAC Profile @ Level 4":["10.10.3"],"MPEG-4 High Efficiency AAC Profile @ Level 5":["10.10.5"],"MPEG-4 High Efficency AAC v2 Profile":["10.11"],"MPEG-4 High Efficency AAC v2 Profile @ Level 1":["10.11.0"],"MPEG-4 High Efficency AAC v2 Profile @ Level 2":["10.11.1"],"MPEG-4 High Efficency AAC v2 Profile @ Level 3":["10.11.2"],"MPEG-4 High Efficency AAC v2 Profile @ Level 4":["10.11.3"],"MPEG-4 High Efficency AAC v2 Profile @ Level 5":["10.11.4"],"MPEG-4 Low Delay AAC Profile":["10.12"],"MPEG-4 Low Delay AAC Profile @ Level 1":["10.12.1"],"Linear PCM":["11"],"AMR":["12"],"AMR-WB+":["12.1"],"NICAM":["13"],"Real Audio":["14"],"Real Audio - Lossless":["14.1"],"None":["15"],"Unspecified":["16"],"Unspecified lossless":["17"],"Unspecified lossy":["18"],"Windows Media Audio (Wma)":["19"],"WM9-lossless":["19.1","27"],"ALAC":["20"],"DSD":["21"],"DST":["21.1","21"],"FLAC":["22"],"LPAC":["23"],"LTAC":["24"],"MLP":["25"],"QCELP":["25"],"Vorbis":["26"],"WAV":["28"],"Ambisonic":["29"]},"deprecated":["21","27"],"uri":"urn:ebu:metadata-cs:AudioCompressionCodeCS_2013","versionDate":"2013-01-07"}
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
