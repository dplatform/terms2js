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

var voc = {"terms":{"aa":["afar"],"ab":["abkhaze"],"af":["afrikaans"],"ak":["akan"],"sq":["albanais","albanais"],"am":["amharique"],"ar":["arabe"],"an":["aragonais"],"hy":["armenien","armenien"],"as":["assamais"],"av":["avar"],"ae":["avestique"],"ay":["aymara"],"az":["azeri"],"ba":["bachkir"],"bm":["bambara"],"eu":["basque","basque"],"be":["bielorusse"],"bn":["bengali"],"bh":["bihari"],"bi":["bichlamar"],"bo":["tibetain","tibetain"],"bs":["bosniaque"],"br":["breton"],"bg":["bulgare"],"my":["birman","birman"],"ca":["catalan; valencien"],"cs":["tcheque","tcheque"],"ch":["chamorro"],"ce":["tchetchene"],"zh":["chinois"],"cu":["slavon d'eglise; vieux slave; slavon liturgique; vieux bulgare"],"cv":["tchouvache"],"kw":["cornique"],"co":["corse"],"cr":["cree"],"cy":["gallois"],"da":["danois"],"de":["allemand","allemand"],"dv":["maldivien"],"nl":["neerlandais; flamand","neerlandais; flamand"],"dz":["dzongkha"],"el":["grec moderne (apres 1453)","grec moderne (apres 1453)"],"en":["anglais"],"eo":["esperanto"],"et":["estonien"],"ee":["ewe"],"fo":["feroien"],"fa":["persan","persan"],"fj":["fidjien"],"fi":["finnois"],"fr":["français"],"fy":["frison occidental"],"ff":["peul"],"ka":["georgien","georgien"],"gd":["gaelique; gaelique ecossais"],"ga":["irlandais"],"gl":["galicien"],"gv":["manx; mannois"],"gn":["guarani"],"gu":["goudjrati"],"ht":["haitien; creole haitien"],"ha":["haoussa"],"he":["hebreu"],"hz":["herero"],"hi":["hindi"],"ho":["hiri motu"],"hr":["croate","croate"],"hu":["hongrois"],"ig":["igbo"],"is":["islandais","islandais"],"io":["ido"],"ii":["yi de Sichuan"],"iu":["inuktitut"],"ie":["interlingue"],"ia":["interlingua (langue auxiliaire internationale)"],"id":["indonesien"],"ik":["inupiaq"],"it":["italien"],"jv":["javanais"],"ja":["japonais"],"kl":["groenlandais"],"kn":["kannada"],"ks":["kashmiri"],"kr":["kanouri"],"kk":["kazakh"],"km":["khmer central"],"ki":["kikuyu"],"rw":["rwanda"],"ky":["kirghiz"],"kv":["kom"],"kg":["kongo"],"ko":["coreen"],"kj":["kuanyama; kwanyama"],"ku":["kurde"],"lo":["lao"],"la":["latin"],"lv":["letton"],"li":["limbourgeois"],"ln":["lingala"],"lt":["lituanien"],"lb":["luxembourgeois"],"lu":["luba-katanga"],"lg":["ganda"],"mk":["macedonien","macedonien"],"mh":["marshall"],"ml":["malayalam"],"mi":["maori","maori"],"mr":["marathe"],"ms":["malais","malais"],"mg":["malgache"],"mt":["maltais"],"mo":["moldave"],"mn":["mongol"],"na":["nauruan"],"nv":["navaho"],"nr":["ndebele du Sud"],"nd":["ndebele du Nord"],"ng":["ndonga"],"ne":["nepalais"],"nn":["norvegien nynorsk; nynorsk, norvegien"],"nb":["norvegien bokmal"],"no":["norvegien"],"ny":["chichewa; chewa; nyanja"],"oc":["occitan (apres 1500); provençal"],"oj":["ojibwa"],"or":["oriya"],"om":["galla"],"os":["ossete"],"pa":["pendjabi"],"pi":["pali"],"pl":["polonais"],"pt":["portugais"],"ps":["pachto"],"qu":["quechua"],"rm":["romanche"],"ro":["roumain","roumain"],"rn":["rundi"],"ru":["russe"],"sg":["sango"],"sa":["sanskrit"],"sr":["serbe","serbe"],"si":["singhalais"],"sk":["slovaque","slovaque"],"sl":["slovene"],"se":["sami du Nord"],"sm":["samoan"],"sn":["shona"],"sd":["sindhi"],"so":["somali"],"st":["sotho du Sud"],"es":["espagnol; castillan"],"sc":["sarde"],"ss":["swati"],"su":["soundanais"],"sw":["swahili"],"sv":["suedois"],"ty":["tahitien"],"ta":["tamoul"],"tt":["tatar"],"te":["telougou"],"tg":["tadjik"],"tl":["tagalog"],"th":["thai"],"ti":["tigrigna"],"to":["tongan (iles Tonga)"],"tn":["tswana"],"ts":["tsonga"],"tk":["turkmene"],"tr":["turc"],"tw":["twi"],"ug":["ouigour"],"uk":["ukrainien"],"ur":["ourdou"],"uz":["ouszbek"],"ve":["venda"],"vi":["vietnamien"],"vo":["volapük"]},"names":{"afar":["aa"],"abkhaze":["ab"],"afrikaans":["af"],"akan":["ak"],"albanais":["sq","sq"],"amharique":["am"],"arabe":["ar"],"aragonais":["an"],"armenien":["hy","hy"],"assamais":["as"],"avar":["av"],"avestique":["ae"],"aymara":["ay"],"azeri":["az"],"bachkir":["ba"],"bambara":["bm"],"basque":["eu","eu"],"bielorusse":["be"],"bengali":["bn"],"bihari":["bh"],"bichlamar":["bi"],"tibetain":["bo","bo"],"bosniaque":["bs"],"breton":["br"],"bulgare":["bg"],"birman":["my","my"],"catalan; valencien":["ca"],"tcheque":["cs","cs"],"chamorro":["ch"],"tchetchene":["ce"],"chinois":["zh"],"slavon d'eglise; vieux slave; slavon liturgique; vieux bulgare":["cu"],"tchouvache":["cv"],"cornique":["kw"],"corse":["co"],"cree":["cr"],"gallois":["cy"],"danois":["da"],"allemand":["de","de"],"maldivien":["dv"],"neerlandais; flamand":["nl","nl"],"dzongkha":["dz"],"grec moderne (apres 1453)":["el","el"],"anglais":["en"],"esperanto":["eo"],"estonien":["et"],"ewe":["ee"],"feroien":["fo"],"persan":["fa","fa"],"fidjien":["fj"],"finnois":["fi"],"français":["fr"],"frison occidental":["fy"],"peul":["ff"],"georgien":["ka","ka"],"gaelique; gaelique ecossais":["gd"],"irlandais":["ga"],"galicien":["gl"],"manx; mannois":["gv"],"guarani":["gn"],"goudjrati":["gu"],"haitien; creole haitien":["ht"],"haoussa":["ha"],"hebreu":["he"],"herero":["hz"],"hindi":["hi"],"hiri motu":["ho"],"croate":["hr","hr"],"hongrois":["hu"],"igbo":["ig"],"islandais":["is","is"],"ido":["io"],"yi de Sichuan":["ii"],"inuktitut":["iu"],"interlingue":["ie"],"interlingua (langue auxiliaire internationale)":["ia"],"indonesien":["id"],"inupiaq":["ik"],"italien":["it"],"javanais":["jv"],"japonais":["ja"],"groenlandais":["kl"],"kannada":["kn"],"kashmiri":["ks"],"kanouri":["kr"],"kazakh":["kk"],"khmer central":["km"],"kikuyu":["ki"],"rwanda":["rw"],"kirghiz":["ky"],"kom":["kv"],"kongo":["kg"],"coreen":["ko"],"kuanyama; kwanyama":["kj"],"kurde":["ku"],"lao":["lo"],"latin":["la"],"letton":["lv"],"limbourgeois":["li"],"lingala":["ln"],"lituanien":["lt"],"luxembourgeois":["lb"],"luba-katanga":["lu"],"ganda":["lg"],"macedonien":["mk","mk"],"marshall":["mh"],"malayalam":["ml"],"maori":["mi","mi"],"marathe":["mr"],"malais":["ms","ms"],"malgache":["mg"],"maltais":["mt"],"moldave":["mo"],"mongol":["mn"],"nauruan":["na"],"navaho":["nv"],"ndebele du Sud":["nr"],"ndebele du Nord":["nd"],"ndonga":["ng"],"nepalais":["ne"],"norvegien nynorsk; nynorsk, norvegien":["nn"],"norvegien bokmal":["nb"],"norvegien":["no"],"chichewa; chewa; nyanja":["ny"],"occitan (apres 1500); provençal":["oc"],"ojibwa":["oj"],"oriya":["or"],"galla":["om"],"ossete":["os"],"pendjabi":["pa"],"pali":["pi"],"polonais":["pl"],"portugais":["pt"],"pachto":["ps"],"quechua":["qu"],"romanche":["rm"],"roumain":["ro","ro"],"rundi":["rn"],"russe":["ru"],"sango":["sg"],"sanskrit":["sa"],"serbe":["sr","sr"],"singhalais":["si"],"slovaque":["sk","sk"],"slovene":["sl"],"sami du Nord":["se"],"samoan":["sm"],"shona":["sn"],"sindhi":["sd"],"somali":["so"],"sotho du Sud":["st"],"espagnol; castillan":["es"],"sarde":["sc"],"swati":["ss"],"soundanais":["su"],"swahili":["sw"],"suedois":["sv"],"tahitien":["ty"],"tamoul":["ta"],"tatar":["tt"],"telougou":["te"],"tadjik":["tg"],"tagalog":["tl"],"thai":["th"],"tigrigna":["ti"],"tongan (iles Tonga)":["to"],"tswana":["tn"],"tsonga":["ts"],"turkmene":["tk"],"turc":["tr"],"twi":["tw"],"ouigour":["ug"],"ukrainien":["uk"],"ourdou":["ur"],"ouszbek":["uz"],"venda":["ve"],"vietnamien":["vi"],"volapük":["vo"]},"uri":"urn:ebu:metadata-cs:ISO639_1LanguageCodeCS_2008","versionDate":"2013-01-07"}
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
