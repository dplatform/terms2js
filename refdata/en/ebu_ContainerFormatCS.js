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

var voc = {"terms":{"7.0":["Proprietary"],"7.1":["Audio"],"7.1.1":["mp3"],"7.1.2":["mp4"],"7.1.3":["Real Audio"],"7.1.4":["wav"],"7.1.5":["wma"],"7.1.6":["Quicktime"],"7.1.7":["aiff"],"7.1.8":["aiff-c"],"7.2":["Video"],"7.2.1":["mjpeg"],"7.2.2":["mpeg"],"7.2.2.1":["mpg"],"7.2.2.2":["mp4"],"7.2.3":["dv"],"7.2.4":["avi"],"7.2.5":["quicktime"],"7.2.6":["Real Networks"],"7.2.7":["wmv"],"7.2.8":["asf"],"7.2.9":["ogg"],"7.2.10":["raw"],"7.2.11":["mov"],"7.2.12":["3GP"],"7.2.13":["3GP2"],"7.2.14":["DIVX"],"7.2.15":["FLV"],"7.2.16":["HCT"],"7.2.17":["M4V"],"7.2.18":["MJ2"],"7.2.19":["MKV"],"7.2.20":["RIFF"],"7.2.21":["VOB"],"7.3":["Image"],"7.3.1":["jpeg"],"7.3.1.1":["jpeg baseline"],"7.3.1.2":["jpeg progressive"],"7.3.1.3":["jpg"],"7.3.1.4":["jpeg2000"],"7.3.2":["jfif"],"7.3.3":["bdf"],"7.3.4":["bmp"],"7.3.5":["gif"],"7.3.5.1":["gif87"],"7.3.5.2":["gif89"],"7.3.6":["Photocd/ImagePac"],"7.3.7":["ppm"],"7.3.8":["png"],"7.3.9":["spiff"],"7.3.10":["tiff"],"7.3.11":["pcx"],"7.4":["Text"],"7.4.1":["IPTC 7901"],"7.4.2":["NITF"],"7.4.3":["CSV"],"7.4.4":["css"],"7.4.5":["xml"],"7.4.6":["html"],"7.5":["Graphics"],"7.5.1":["svg"],"7.5.2":["cdr"],"7.6":["Application"],"7.6.1":["pdf"],"7.6.2":["msword/doc"],"7.6.3":["ms-excel/xls"],"7.6.4":["ms-powerpoint/ppt"],"7.6.5":["postscript/eps"],"7.6.6":["rtf"],"7.7":["Data"],"7.7.1":["atj"],"7.7.2":["bzip2"],"7.7.3":["compress"],"7.7.4":["gzip"],"7.7.5":["jar"],"7.7.6":["tar"],"7.7.7":["tar.bzip2"],"7.7.8":["tar.compress"],"7.7.9":["tar.gzip"],"7.7.10":["zip"],"7.7.11":["BiM"],"7.7.12":["XHTML"],"7.7.13":["iff"],"7.7.14":["miff"],"7.8":["Animation"],"7.8.1":["fla"],"7.8.2":["swf"],"7.9":["Other"]},"names":{"Proprietary":["7.0"],"Audio":["7.1"],"mp3":["7.1.1"],"mp4":["7.1.2","7.2.2.2"],"Real Audio":["7.1.3"],"wav":["7.1.4"],"wma":["7.1.5"],"Quicktime":["7.1.6"],"aiff":["7.1.7"],"aiff-c":["7.1.8"],"Video":["7.2"],"mjpeg":["7.2.1"],"mpeg":["7.2.2"],"mpg":["7.2.2.1"],"dv":["7.2.3"],"avi":["7.2.4"],"quicktime":["7.2.5"],"Real Networks":["7.2.6"],"wmv":["7.2.7"],"asf":["7.2.8"],"ogg":["7.2.9"],"raw":["7.2.10"],"mov":["7.2.11"],"3GP":["7.2.12"],"3GP2":["7.2.13"],"DIVX":["7.2.14"],"FLV":["7.2.15"],"HCT":["7.2.16"],"M4V":["7.2.17"],"MJ2":["7.2.18"],"MKV":["7.2.19"],"RIFF":["7.2.20"],"VOB":["7.2.21"],"Image":["7.3"],"jpeg":["7.3.1"],"jpeg baseline":["7.3.1.1"],"jpeg progressive":["7.3.1.2"],"jpg":["7.3.1.3"],"jpeg2000":["7.3.1.4"],"jfif":["7.3.2"],"bdf":["7.3.3"],"bmp":["7.3.4"],"gif":["7.3.5"],"gif87":["7.3.5.1"],"gif89":["7.3.5.2"],"Photocd/ImagePac":["7.3.6"],"ppm":["7.3.7"],"png":["7.3.8"],"spiff":["7.3.9"],"tiff":["7.3.10"],"pcx":["7.3.11"],"Text":["7.4"],"IPTC 7901":["7.4.1"],"NITF":["7.4.2"],"CSV":["7.4.3"],"css":["7.4.4"],"xml":["7.4.5"],"html":["7.4.6"],"Graphics":["7.5"],"svg":["7.5.1"],"cdr":["7.5.2"],"Application":["7.6"],"pdf":["7.6.1"],"msword/doc":["7.6.2"],"ms-excel/xls":["7.6.3"],"ms-powerpoint/ppt":["7.6.4"],"postscript/eps":["7.6.5"],"rtf":["7.6.6"],"Data":["7.7"],"atj":["7.7.1"],"bzip2":["7.7.2"],"compress":["7.7.3"],"gzip":["7.7.4"],"jar":["7.7.5"],"tar":["7.7.6"],"tar.bzip2":["7.7.7"],"tar.compress":["7.7.8"],"tar.gzip":["7.7.9"],"zip":["7.7.10"],"BiM":["7.7.11"],"XHTML":["7.7.12"],"iff":["7.7.13"],"miff":["7.7.14"],"Animation":["7.8"],"fla":["7.8.1"],"swf":["7.8.2"],"Other":["7.9"]},"uri":"urn:ebu:metadata-cs:ContainerFormatCS_2011"}
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
