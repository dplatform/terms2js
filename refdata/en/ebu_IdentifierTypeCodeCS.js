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

var voc = {"terms":{"1":["PROGRAMME IDENTIFIERS"],"2":["PHYSICAL MEDIA IDENTIFIERS"],"3":["INTERNATIONAL STANDARD IDENTIFIERS"],"4":["INTERNATIONAL STANDARD BASED COMPOUND IDENTIFIERS"],"5":["OBJECT IDENTIFIERS"],"6":["DEVICE IDENTIFIERS"],"7":["PLATFORM IDENTIFIERS"],"8":["NETWORK AND STREAM IDENTIFIERS"],"9":["LOCALLY UNIQUE LOCATORS"],"10":["GENERAL ORGANISATION IDENTIFIERS"],"11":["UNIQUE IPR IDENTIFIERS"],"12":["IPI (SUISA/CISAC)"],"13":["AGICOA/MPAA"],"14":["MUSIC INDUSTRY IDENTIFIERS"],"15":["URI"],"16":["Accounting Reference"],"17":["Archive Number"],"18":["Commissioning Project Number"],"19":["PMetaTransactionNumber"],"20":["Other identifiers"],"21":["Other private references"],"1.1":["UMID"],"1.2":["EPID"],"1.3":["UPID"],"1.4":["UPN"],"1.5":["USID"],"1.6":["Programme Number"],"1.7":["Programme Version Number"],"2.1":["TAPE IDENTIFIERS"],"2.1.1":["IBTN"],"2.1.2":["Tape Number"],"2.2.":["FILM CODES"],"2.2.1":["Film Header"],"2.2.2":["Reel/Roll Number"],"2.3":["DISK IDENTIFIERS"],"2.3.1":["Magnetic Disk"],"2.3.2":["Magnetic Disk Number"],"2.4":["Optical Disk"],"2.4.1":["Optical Disk Number"],"3.1":["CRID"],"3.2":["ISAN","V-ISAN"],"3.3":["ISBD"],"3.4":["ISBN"],"3.5":["ISCI"],"3.6":["ISMN"],"3.7":["ISRC"],"3.8":["ISRN"],"3.9":["ISSN"],"3.10":["ISTC"],"3.11":["EIDR"],"3.12":["IMDb"],"4.1":["SICI"],"4.2":["BICI"],"4.3":["AICI"],"4.4":["PII"],"5.1":["UUID","GUID"],"5.2":["LUID"],"5.3":["Package Name"],"5.4":["DOI"],"5.5":["Defined Object ID"],"5.6":["Global Number"],"5.7":["Clip ID"],"5.8":["Extended Clip ID"],"5.9":["Clip ID Array"],"5.10":["Package ID"],"6.1":["Device Designation"],"6.2":["Device Model"],"6.3":["Device Serial Number"],"6.4":["IEEE Device Identifier (often used as a network node identifier)"],"6.5":["Device ID Type"],"6.6":["Device Type"],"6.7":["Device Asset Number"],"7.1":["Platform Designation"],"7.2":["Platform Model"],"7.3":["Platform Serial Number"],"8.1":["Channel Handle"],"8.2":["Stream ID"],"8.3":["Transport ID"],"8.4":["Essence ID"],"8.5":["Index Stream ID"],"9.1":["MEDIA LOCATORS"],"9.1.1":["Local File Path"],"9.1.2":["Physical Media Location"],"9.1.3":["Track Number"],"9.1.4":["Track Number Batch"],"9.2":["FILM LOCATORS"],"9.2.1":["Edge Code"],"9.2.2":["Key Code"],"9.2.3":["Lnk Number"],"10.1":["Organisation Code"],"12.1":["Natural Person","legal entity"],"13.1":["AGICOA/MPAA Identifier"],"14.1":["ISWC"],"14.2":["Recording Label"],"14.3":["Collection"],"14.4":["Origin Code"],"14.5":["Main catalogue number"],"14.6":["Catalogue prefix number"],"14.7":["Side number"],"14.8":["Track number"],"15.1":["URN"],"15.2":["URL"]},"names":{"PROGRAMME IDENTIFIERS":["1"],"UMID":["1.1"],"EPID":["1.2"],"UPID":["1.3"],"UPN":["1.4"],"USID":["1.5"],"Programme Number":["1.6"],"Programme Version Number":["1.7"],"PHYSICAL MEDIA IDENTIFIERS":["2"],"TAPE IDENTIFIERS":["2.1"],"IBTN":["2.1.1"],"Tape Number":["2.1.2"],"FILM CODES":["2.2."],"Film Header":["2.2.1"],"Reel/Roll Number":["2.2.2"],"DISK IDENTIFIERS":["2.3"],"Magnetic Disk":["2.3.1"],"Magnetic Disk Number":["2.3.2"],"Optical Disk":["2.4"],"Optical Disk Number":["2.4.1"],"INTERNATIONAL STANDARD IDENTIFIERS":["3"],"CRID":["3.1"],"ISAN":["3.2"],"V-ISAN":["3.2"],"ISBD":["3.3"],"ISBN":["3.4"],"ISCI":["3.5"],"ISMN":["3.6"],"ISRC":["3.7"],"ISRN":["3.8"],"ISSN":["3.9"],"ISTC":["3.10"],"EIDR":["3.11"],"IMDb":["3.12"],"INTERNATIONAL STANDARD BASED COMPOUND IDENTIFIERS":["4"],"SICI":["4.1"],"BICI":["4.2"],"AICI":["4.3"],"PII":["4.4"],"OBJECT IDENTIFIERS":["5"],"UUID":["5.1"],"GUID":["5.1"],"LUID":["5.2"],"Package Name":["5.3"],"DOI":["5.4"],"Defined Object ID":["5.5"],"Global Number":["5.6"],"Clip ID":["5.7"],"Extended Clip ID":["5.8"],"Clip ID Array":["5.9"],"Package ID":["5.10"],"DEVICE IDENTIFIERS":["6"],"Device Designation":["6.1"],"Device Model":["6.2"],"Device Serial Number":["6.3"],"IEEE Device Identifier (often used as a network node identifier)":["6.4"],"Device ID Type":["6.5"],"Device Type":["6.6"],"Device Asset Number":["6.7"],"PLATFORM IDENTIFIERS":["7"],"Platform Designation":["7.1"],"Platform Model":["7.2"],"Platform Serial Number":["7.3"],"NETWORK AND STREAM IDENTIFIERS":["8"],"Channel Handle":["8.1"],"Stream ID":["8.2"],"Transport ID":["8.3"],"Essence ID":["8.4"],"Index Stream ID":["8.5"],"LOCALLY UNIQUE LOCATORS":["9"],"MEDIA LOCATORS":["9.1"],"Local File Path":["9.1.1"],"Physical Media Location":["9.1.2"],"Track Number":["9.1.3"],"Track Number Batch":["9.1.4"],"FILM LOCATORS":["9.2"],"Edge Code":["9.2.1"],"Key Code":["9.2.2"],"Lnk Number":["9.2.3"],"GENERAL ORGANISATION IDENTIFIERS":["10"],"Organisation Code":["10.1"],"UNIQUE IPR IDENTIFIERS":["11"],"IPI (SUISA/CISAC)":["12"],"Natural Person":["12.1"],"legal entity":["12.1"],"AGICOA/MPAA":["13"],"AGICOA/MPAA Identifier":["13.1"],"MUSIC INDUSTRY IDENTIFIERS":["14"],"ISWC":["14.1"],"Recording Label":["14.2"],"Collection":["14.3"],"Origin Code":["14.4"],"Main catalogue number":["14.5"],"Catalogue prefix number":["14.6"],"Side number":["14.7"],"Track number":["14.8"],"URI":["15"],"URN":["15.1"],"URL":["15.2"],"Accounting Reference":["16"],"Archive Number":["17"],"Commissioning Project Number":["18"],"PMetaTransactionNumber":["19"],"Other identifiers":["20"],"Other private references":["21"]},"uri":"urn:ebu:metadata-cs:IdentifierTypeCodeCS_2010","versionDate":"2013-01-07"}
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
