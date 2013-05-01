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

var voc = {"terms":{"6.0":["ALERT NOT REQUIRED"],"6.0.1":["No content that requires alerting in any of the categories below"],"6.1":["SEX"],"6.1.1":["No sex descriptors"],"6.1.2":["Obscured or implied sexual activity"],"6.1.3":["Frank portrayal of sex and sexuality"],"6.1.4":["Scenes of explicit sexual behaviour suitable for adults only"],"6.1.4.1":["One scene of explicit sexual behaviour suitable for adults only"],"6.1.4.2":["Occasional scenes of explicit sexual behaviour suitable for adults only"],"6.1.4.3":["Frequent scenes of explicit sexual behaviour suitable for adults only"],"6.1.5":["Sexual Violence"],"6.1.5.1":["One scene of sexual violence"],"6.1.5.2":["Occasional scenes of sexual violence"],"6.1.5.3":["Frequent scenes of sexual Violence"],"6.1.6":["Verbal sexual References"],"6.1.6.1":["One verbal sexual reference"],"6.1.6.2":["Occasional verbal sexual references"],"6.1.6.3":["Frequent verbal sexual references"],"6.2":["NUDITY"],"6.2.1":["No nudity descriptors"],"6.2.2":["Partial nudity"],"6.2.2.1":["One scene of partial nudity"],"6.2.2.2":["Occasional scenes of partial nudity"],"6.2.2.3":["Frequent scenes of partial nudity"],"6.2.3":["Full frontal nudity"],"6.2.3.1":["One scene of full frontal nudity"],"6.2.3.2":["Occasional scenes of full frontal nudity"],"6.2.3.3":["Frequent scenes of full frontal nudity"],"6.3":["VIOLENCE - HUMAN BEINGS"],"6.3.1":["No violence descriptors human beings"],"6.3.2":["Deliberate infliction of pain to human beings"],"6.3.2.1":["One Scene of deliberate infliction of pain to human beings"],"6.3.2.2":["Occasional deliberate infliction of pain to human beings"],"6.3.2.3":["Frequent deliberate infliction of pain to human beings"],"6.3.3":["Infliction of strong psychological or physical pain to human beings"],"6.3.3.1":["One scene of infliction of strong psychological or physical pain to human beings"],"6.3.3.2":["Occasional scenes of infliction of strong psychological or physical pain to human beings"],"6.3.3.3":["Frequent scenes of infliction of strong psychological or physical pain to human beings"],"6.3.4":["Deliberate killing of human beings"],"6.3.4.1":["One scene of deliberate killing of human beings"],"6.3.4.2":["Occasional deliberate killing of human beings"],"6.3.4.3":["Frequent deliberate killing of human beings"],"6.4":["VIOLENCE - ANIMALS"],"6.4.1":["No violence descriptors animals"],"6.4.2":["Deliberate infliction of pain to animals"],"6.4.2.1":["One scene of deliberate infliction of pain to animals"],"6.4.2.2":["Occasional deliberate infliction of pain to animals"],"6.4.2.3":["Frequent deliberate infliction of pain to animals"],"6.4.3":["Deliberate killing of animals"],"6.4.3.1":["One scene of deliberate killing of animals","Frequent deliberate killing of animals"],"6.4.3.2":["Occasional deliberate killing of animals"],"6.5":["VIOLENCE - FANTASY CHARACTERS"],"6.5.1":["No violence descriptors"],"6.5.2":["Deliberate infliction of pain to fantasy characters (including animation)"],"6.5.2.1":["One scene of deliberate infliction of pain to fantasy characters (including animation)"],"6.5.2.2":["Occasional deliberate infliction of pain to fantasy characters (including animation)"],"6.5.2.3":["Frequent deliberate infliction of pain to fantasy characters (including animation)"],"6.5.3":["Deliberate killing of fantasy characters (including animation)"],"6.5.3.1":["One scene of deliberate killing of fantasy characters (including animation)"],"6.5.3.2":["Occasional deliberate killing of fantasy characters (including animation)"],"6.5.3.3":["Frequent deliberate killing of fantasy characters (including animation)"],"6.6":["LANGUAGE"],"6.6.1":["No language descriptors"],"6.6.2":["Occasional use of mild swear words and profanities"],"6.6.3":["Frequent use of mild swear words and profanities"],"6.6.4":["Occasional use of very strong language"],"6.6.5":["Frequent use of very strong language"],"6.6.6":["One use of very strong language"],"6.6.7":["Occasional use of strong language"],"6.6.8":["Frequent use of strong language"],"6.6.9":["One use of strong language"],"6.6.10":["Occasional use of offensive language (racist, homophobic, sexist)"],"6.6.11":["Frequent use of offensive language (racist, homophobic, sexist)"],"6.6.12":["One use of offensive language (racist, homophobic, sexist)"],"6.7":["DISTURBING SCENES"],"6.7.1":["No disturbing scenes descriptors"],"6.7.2":["Factual material that may cause distress, including verbal descriptions of traumatic events and the telling of sensitive human interest stories."],"6.7.3":["Mild scenes of blood and gore (including medical procedures, injuries from accidents, terrorists attack, murder, disaster, war)"],"6.7.3.1":["One mild scene of blood and gore"],"6.7.3.2":["Occasional mild scenes of blood and gore"],"6.7.3.3":["Frequent mild scenes of blood and gore"],"6.7.4":["Severe scenes of blood and gore (as 6.7.3 above)"],"6.7.4.1":["One severe scene of blood and gore"],"6.7.4.2":["Occasional severe scenes of blood and gore (as 6.7.3 above)"],"6.7.4.3":["Frequent severe scenes of blood and gore (as 6.7.3 above)"],"6.7.5":["Scenes with extreme horror effects"],"6.7.5.1":["One scene with extreme horror effects"],"6.7.5.2":["Occasional scenes with extreme horror effects"],"6.7.5.3":["Frequent scenes with extreme horror effects"],"6.8":["DISCRIMINATION"],"6.8.1":["No discrimination descriptors"],"6.8.2":["Deliberate discrimination or the portrayal of deliberate discrimination"],"6.9":["ILLEGAL DRUGS"],"6.9.1":["No illegal drugs descriptors"],"6.9.2":["Portrayal of illegal drug use"],"6.9.2.1":["One scene of illegal drug use"],"6.9.2.2":["Occasional portrayal of illegal drug use"],"6.9.2.3":["Frequent portrayal of illegal drug use"],"6.9.3":["Portrayal of illegal drug use with instructive detail"],"6.9.3.1":["One scene of illegal drug use with instructive detail"],"6.9.3.2":["Occasional portrayal of illegal drug use with instructive detail"],"6.9.3.3":["Frequent portrayal of illegal drug use with instructive detail"],"6.10":["STROBING"],"6.10.1":["No strobing"],"6.10.2":["Strobing that could impact on those suffering from Photosensitive epilepsy"],"6.10.2.1":["One scene of strobing that could impact on those suffering from photosensitive epilepsy"],"6.10.2.2":["Occasional strobing that could impact on those suffering from photosensitive epilepsy"],"6.10.2.3":["Frequent strobing that could impact on those suffering from photosensitive epilepsy"]},"names":{"ALERT NOT REQUIRED":["6.0"],"No content that requires alerting in any of the categories below":["6.0.1"],"SEX":["6.1"],"No sex descriptors":["6.1.1"],"Obscured or implied sexual activity":["6.1.2"],"Frank portrayal of sex and sexuality":["6.1.3"],"Scenes of explicit sexual behaviour suitable for adults only":["6.1.4"],"One scene of explicit sexual behaviour suitable for adults only":["6.1.4.1"],"Occasional scenes of explicit sexual behaviour suitable for adults only":["6.1.4.2"],"Frequent scenes of explicit sexual behaviour suitable for adults only":["6.1.4.3"],"Sexual Violence":["6.1.5"],"One scene of sexual violence":["6.1.5.1"],"Occasional scenes of sexual violence":["6.1.5.2"],"Frequent scenes of sexual Violence":["6.1.5.3"],"Verbal sexual References":["6.1.6"],"One verbal sexual reference":["6.1.6.1"],"Occasional verbal sexual references":["6.1.6.2"],"Frequent verbal sexual references":["6.1.6.3"],"NUDITY":["6.2"],"No nudity descriptors":["6.2.1"],"Partial nudity":["6.2.2"],"One scene of partial nudity":["6.2.2.1"],"Occasional scenes of partial nudity":["6.2.2.2"],"Frequent scenes of partial nudity":["6.2.2.3"],"Full frontal nudity":["6.2.3"],"One scene of full frontal nudity":["6.2.3.1"],"Occasional scenes of full frontal nudity":["6.2.3.2"],"Frequent scenes of full frontal nudity":["6.2.3.3"],"VIOLENCE - HUMAN BEINGS":["6.3"],"No violence descriptors human beings":["6.3.1"],"Deliberate infliction of pain to human beings":["6.3.2"],"One Scene of deliberate infliction of pain to human beings":["6.3.2.1"],"Occasional deliberate infliction of pain to human beings":["6.3.2.2"],"Frequent deliberate infliction of pain to human beings":["6.3.2.3"],"Infliction of strong psychological or physical pain to human beings":["6.3.3"],"One scene of infliction of strong psychological or physical pain to human beings":["6.3.3.1"],"Occasional scenes of infliction of strong psychological or physical pain to human beings":["6.3.3.2"],"Frequent scenes of infliction of strong psychological or physical pain to human beings":["6.3.3.3"],"Deliberate killing of human beings":["6.3.4"],"One scene of deliberate killing of human beings":["6.3.4.1"],"Occasional deliberate killing of human beings":["6.3.4.2"],"Frequent deliberate killing of human beings":["6.3.4.3"],"VIOLENCE - ANIMALS":["6.4"],"No violence descriptors animals":["6.4.1"],"Deliberate infliction of pain to animals":["6.4.2"],"One scene of deliberate infliction of pain to animals":["6.4.2.1"],"Occasional deliberate infliction of pain to animals":["6.4.2.2"],"Frequent deliberate infliction of pain to animals":["6.4.2.3"],"Deliberate killing of animals":["6.4.3"],"One scene of deliberate killing of animals":["6.4.3.1"],"Occasional deliberate killing of animals":["6.4.3.2"],"Frequent deliberate killing of animals":["6.4.3.1"],"VIOLENCE - FANTASY CHARACTERS":["6.5"],"No violence descriptors":["6.5.1"],"Deliberate infliction of pain to fantasy characters (including animation)":["6.5.2"],"One scene of deliberate infliction of pain to fantasy characters (including animation)":["6.5.2.1"],"Occasional deliberate infliction of pain to fantasy characters (including animation)":["6.5.2.2"],"Frequent deliberate infliction of pain to fantasy characters (including animation)":["6.5.2.3"],"Deliberate killing of fantasy characters (including animation)":["6.5.3"],"One scene of deliberate killing of fantasy characters (including animation)":["6.5.3.1"],"Occasional deliberate killing of fantasy characters (including animation)":["6.5.3.2"],"Frequent deliberate killing of fantasy characters (including animation)":["6.5.3.3"],"LANGUAGE":["6.6"],"No language descriptors":["6.6.1"],"Occasional use of mild swear words and profanities":["6.6.2"],"Frequent use of mild swear words and profanities":["6.6.3"],"Occasional use of very strong language":["6.6.4"],"Frequent use of very strong language":["6.6.5"],"One use of very strong language":["6.6.6"],"Occasional use of strong language":["6.6.7"],"Frequent use of strong language":["6.6.8"],"One use of strong language":["6.6.9"],"Occasional use of offensive language (racist, homophobic, sexist)":["6.6.10"],"Frequent use of offensive language (racist, homophobic, sexist)":["6.6.11"],"One use of offensive language (racist, homophobic, sexist)":["6.6.12"],"DISTURBING SCENES":["6.7"],"No disturbing scenes descriptors":["6.7.1"],"Factual material that may cause distress, including verbal descriptions of traumatic events and the telling of sensitive human interest stories.":["6.7.2"],"Mild scenes of blood and gore (including medical procedures, injuries from accidents, terrorists attack, murder, disaster, war)":["6.7.3"],"One mild scene of blood and gore":["6.7.3.1"],"Occasional mild scenes of blood and gore":["6.7.3.2"],"Frequent mild scenes of blood and gore":["6.7.3.3"],"Severe scenes of blood and gore (as 6.7.3 above)":["6.7.4"],"One severe scene of blood and gore":["6.7.4.1"],"Occasional severe scenes of blood and gore (as 6.7.3 above)":["6.7.4.2"],"Frequent severe scenes of blood and gore (as 6.7.3 above)":["6.7.4.3"],"Scenes with extreme horror effects":["6.7.5"],"One scene with extreme horror effects":["6.7.5.1"],"Occasional scenes with extreme horror effects":["6.7.5.2"],"Frequent scenes with extreme horror effects":["6.7.5.3"],"DISCRIMINATION":["6.8"],"No discrimination descriptors":["6.8.1"],"Deliberate discrimination or the portrayal of deliberate discrimination":["6.8.2"],"ILLEGAL DRUGS":["6.9"],"No illegal drugs descriptors":["6.9.1"],"Portrayal of illegal drug use":["6.9.2"],"One scene of illegal drug use":["6.9.2.1"],"Occasional portrayal of illegal drug use":["6.9.2.2"],"Frequent portrayal of illegal drug use":["6.9.2.3"],"Portrayal of illegal drug use with instructive detail":["6.9.3"],"One scene of illegal drug use with instructive detail":["6.9.3.1"],"Occasional portrayal of illegal drug use with instructive detail":["6.9.3.2"],"Frequent portrayal of illegal drug use with instructive detail":["6.9.3.3"],"STROBING":["6.10"],"No strobing":["6.10.1"],"Strobing that could impact on those suffering from Photosensitive epilepsy":["6.10.2"],"One scene of strobing that could impact on those suffering from photosensitive epilepsy":["6.10.2.1"],"Occasional strobing that could impact on those suffering from photosensitive epilepsy":["6.10.2.2"],"Frequent strobing that could impact on those suffering from photosensitive epilepsy":["6.10.2.3"]},"uri":"urn:tva:metadata-cs:ContentAlertCS_2008","versionDate":"2013-01-07"}
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
