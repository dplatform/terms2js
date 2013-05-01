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

var voc = {"terms":{"AD":["ANDORRE"],"AE":["EMIRATS ARABES UNIS"],"AF":["AFGHANISTAN"],"AG":["ANTIGUA-ET-BARBUDA"],"AI":["ANGUILLA"],"AL":["ALBANIE"],"AM":["ARMENIE"],"AN":["ANTILLES NEERLANDAISES"],"AO":["ANGOLA"],"AQ":["ANTARCTIQUE"],"AR":["ARGENTINE"],"AS":["SAMOA AMERICAINES"],"AT":["AUTRICHE"],"AU":["AUSTRALIE"],"AW":["ARUBA"],"AX":["ALAND, ILES"],"AZ":["AZERBAIDJAN"],"BA":["BOSNIE-HERZEGOVINE"],"BB":["BARBADE"],"BD":["BANGLADESH"],"BE":["BELGIQUE"],"BF":["BURKINA FASO"],"BG":["BULGARIE"],"BH":["BAHREIN"],"BI":["BURUNDI"],"BJ":["BENIN"],"BM":["BERMUDES"],"BN":["BRUNEI DARUSSALAM"],"BO":["BOLIVIE"],"BR":["BRESIL"],"BS":["BAHAMAS"],"BT":["BHOUTAN"],"BV":["BOUVET, ILE"],"BW":["BOTSWANA"],"BY":["BELARUS"],"BZ":["BELIZE"],"CA":["CANADA"],"CC":["COCOS (KEELING), ILES"],"CD":["CONGO, LA REPUBLIQUE DEMOCRATIQUE DU"],"CF":["CENTRAFRICAINE, REPUBLIQUE"],"CG":["CONGO"],"CH":["SUISSE"],"CI":["COTE D'IVOIRE"],"CK":["COOK, ILES"],"CL":["CHILI"],"CM":["CAMEROUN"],"CN":["CHINE"],"CO":["COLOMBIE"],"CR":["COSTARICA"],"CU":["CUBA"],"CV":["CAP-VERT"],"CX":["CHRISTMAS, ILE"],"CY":["CHYPRE"],"CZ":["TCHEQUE, REPUBLIQUE"],"DE":["ALLEMAGNE"],"DJ":["DJIBOUTI"],"DK":["DANEMARK"],"DM":["DOMINIQUE"],"DO":["DOMINICAINE, REPUBLIQUE"],"DZ":["ALGERIE"],"EC":["EQUATEUR"],"EE":["ESTONIE"],"EG":["EGYPTE"],"EH":["SAHARA OCCIDENTAL"],"ER":["ERYTHREE"],"ES":["ESPAGNE"],"ET":["ETHIOPIE"],"FI":["FINLANDE"],"FJ":["FIDJI"],"FK":["FALKLAND, ILES (MALVINAS)"],"FM":["MICRONESIE, ETATS FEDERES DE"],"FO":["FEROE, ILES"],"FR":["FRANCE"],"GA":["GABON"],"GB":["ROYAUME-UNI"],"GD":["GRENADE"],"GE":["GEORGIE"],"GF":["GUYANE FRAN�AISE"],"GG":["GUERNESEY"],"GH":["GHANA"],"GI":["GIBRALTAR"],"GL":["GROENLAND"],"GM":["GAMBIE"],"GN":["GUINEE"],"GP":["GUADELOUPE"],"GQ":["GUINEE EQUATORIALE"],"GR":["GRECE"],"GS":["GEORGIE DU SUD ET LES ILES SANDWICH DU SUD"],"GT":["GUATEMALA"],"GU":["GUAM"],"GW":["GUINEE-BISSAU"],"GY":["GUYANA"],"HK":["HONG-KONG"],"HM":["HEARD,ILE ET MCDONALD, ILES"],"HN":["HONDURAS"],"HR":["CROATIE"],"HT":["HAITI"],"HU":["HONGRIE"],"ID":["INDONESIE"],"IE":["IRLANDE"],"IL":["ISRAEL"],"IM":["ILEDEMAN"],"IN":["INDE"],"IO":["OCEAN INDIEN,TERRITOIRE BRITANNIQUE DE L'"],"IQ":["IRAQ"],"IR":["IRAN, REPUBLIQUE ISLAMIQUE D'"],"IS":["ISLANDE"],"IT":["ITALIE"],"JE":["JERSEY"],"JM":["JAMAIQUE"],"JO":["JORDANIE"],"JP":["JAPON"],"KE":["KENYA"],"KG":["KIRGHIZISTAN"],"KH":["CAMBODGE"],"KI":["KIRIBATI"],"KM":["COMORES"],"KN":["SAINT-KITTS-ET-NEVIS"],"KP":["COREE, REPUBLIQUE POPULAIRE DEMOCRATIQUE DE"],"KR":["COREE, REPUBLIQUE DE"],"KW":["KOWEIT"],"KY":["CAIMANES, ILES"],"KZ":["KAZAKHSTAN"],"LA":["LAO, REPUBLIQUE DEMOCRATIQUE POPULAIRE"],"LB":["LIBAN"],"LC":["SAINTE-LUCIE"],"LI":["LIECHTENSTEIN"],"LK":["SRI LANKA"],"LR":["LIBERIA"],"LS":["LESOTHO"],"LT":["LITUANIE"],"LU":["LUXEMBOURG"],"LV":["LETTONIE"],"LY":["LIBYENNE, JAMAHIRIYAARABE"],"MA":["MAROC"],"MC":["MONACO"],"MD":["MOLDOVA, REPUBLIQUE DE"],"ME":["MONTENEGRO"],"MG":["MADAGASCAR"],"MH":["MARSHALL, ILES"],"MK":["MACEDOINE, L'EX-REPUBLIQUE YOUGOSLAVE DE"],"ML":["MALI"],"MM":["MYANMAR"],"MN":["MONGOLIE"],"MO":["MACAO"],"MP":["MARIANNES DU NORD, ILES"],"MQ":["MARTINIQUE"],"MR":["MAURITANIE"],"MS":["MONTSERRAT"],"MT":["MALTE"],"MU":["MAURICE"],"MV":["MALDIVES"],"MW":["MALAWI"],"MX":["MEXIQUE"],"MY":["MALAISIE"],"MZ":["MOZAMBIQUE"],"NA":["NAMIBIE"],"NC":["NOUVELLE-CALEDONIE"],"NE":["NIGER"],"NF":["NORFOLK, ILE"],"NG":["NIGERIA"],"NI":["NICARAGUA"],"NL":["PAYS-BAS"],"NO":["NORVEGE"],"NP":["NEPAL"],"NR":["NAURU"],"NU":["NIUE"],"NZ":["NOUVELLE-ZELANDE"],"OM":["OMAN"],"PA":["PANAMA"],"PE":["PEROU"],"PF":["POLYNESIE FRAN�AISE"],"PG":["PAPOUASIE-NOUVELLE-GUINEE"],"PH":["PHILIPPINES"],"PK":["PAKISTAN"],"PL":["POLOGNE"],"PM":["SAINT-PIERRE-ET-MIQUELON"],"PN":["PITCAIRN"],"PR":["PORTORICO"],"PS":["PALESTINIEN OCCUPE,TERRITOIRE"],"PT":["PORTUGAL"],"PW":["PALAOS"],"PY":["PARAGUAY"],"QA":["QATAR"],"RE":["REUNION"],"RO":["ROUMANIE"],"RS":["SERBIE"],"RU":["RUSSIE, FEDERATION DE"],"RW":["RWANDA"],"SA":["ARABIE SAOUDITE"],"SB":["SALOMON, ILES"],"SC":["SEYCHELLES"],"SD":["SOUDAN"],"SE":["SUEDE"],"SG":["SINGAPOUR"],"SH":["SAINTE-HELENE"],"SI":["SLOVENIE"],"SJ":["SVALBARD ET ILE JANMAYEN"],"SK":["SLOVAQUIE"],"SL":["SIERRA LEONE"],"SM":["SAINT-MARIN"],"SN":["SENEGAL"],"SO":["SOMALIE"],"SR":["SURINAME"],"ST":["SAOTOME-ET-PRINCIPE"],"SV":["EL SALVADOR"],"SY":["SYRIENNE, REPUBLIQUE ARABE"],"SZ":["SWAZILAND"],"TC":["TURKS ET CAIQUES,ILES"],"TD":["TCHAD"],"TF":["TERRES AUSTRALES FRAN�AISES"],"TG":["TOGO"],"TH":["THAILANDE"],"TJ":["TADJIKISTAN"],"TK":["TOKELAU"],"TL":["TIMOR-LESTE"],"TM":["TURKMENISTAN"],"TN":["TUNISIE"],"TO":["TONGA"],"TR":["TURQUIE"],"TT":["TRINITE-ET-TOBAGO"],"TV":["TUVALU"],"TW":["TAIWAN, PROVINCE DE CHINE"],"TZ":["TANZANIE, REPUBLIQUE-UNIE DE"],"UA":["UKRAINE"],"UG":["OUGANDA"],"UM":["ILES MINEURES ELOIGNEES DES ETATS-UNIS"],"US":["ETATS-UNIS"],"UY":["URUGUAY"],"UZ":["OUZBEKISTAN"],"VA":["SAINT-SIEGE (ETAT DE LA CITE DU VATICAN)"],"VC":["SAINT-VINCENT-ET-LES-GRENADINES"],"VE":["VENEZUELA"],"VG":["ILES VIERGES BRITANNIQUES"],"VI":["ILES VIERGES DES ETATS-UNIS"],"VN":["VIETNAM"],"VU":["VANUATU"],"WF":["WALLIS ET FUTUNA"],"WS":["SAMOA"],"YE":["YEMEN"],"YT":["MAYOTTE"],"ZA":["AFRIQUE DU SUD"],"ZM":["ZAMBIE"],"ZW":["ZIMBABWE"]},"names":{"ANDORRE":["AD"],"EMIRATS ARABES UNIS":["AE"],"AFGHANISTAN":["AF"],"ANTIGUA-ET-BARBUDA":["AG"],"ANGUILLA":["AI"],"ALBANIE":["AL"],"ARMENIE":["AM"],"ANTILLES NEERLANDAISES":["AN"],"ANGOLA":["AO"],"ANTARCTIQUE":["AQ"],"ARGENTINE":["AR"],"SAMOA AMERICAINES":["AS"],"AUTRICHE":["AT"],"AUSTRALIE":["AU"],"ARUBA":["AW"],"ALAND, ILES":["AX"],"AZERBAIDJAN":["AZ"],"BOSNIE-HERZEGOVINE":["BA"],"BARBADE":["BB"],"BANGLADESH":["BD"],"BELGIQUE":["BE"],"BURKINA FASO":["BF"],"BULGARIE":["BG"],"BAHREIN":["BH"],"BURUNDI":["BI"],"BENIN":["BJ"],"BERMUDES":["BM"],"BRUNEI DARUSSALAM":["BN"],"BOLIVIE":["BO"],"BRESIL":["BR"],"BAHAMAS":["BS"],"BHOUTAN":["BT"],"BOUVET, ILE":["BV"],"BOTSWANA":["BW"],"BELARUS":["BY"],"BELIZE":["BZ"],"CANADA":["CA"],"COCOS (KEELING), ILES":["CC"],"CONGO, LA REPUBLIQUE DEMOCRATIQUE DU":["CD"],"CENTRAFRICAINE, REPUBLIQUE":["CF"],"CONGO":["CG"],"SUISSE":["CH"],"COTE D'IVOIRE":["CI"],"COOK, ILES":["CK"],"CHILI":["CL"],"CAMEROUN":["CM"],"CHINE":["CN"],"COLOMBIE":["CO"],"COSTARICA":["CR"],"CUBA":["CU"],"CAP-VERT":["CV"],"CHRISTMAS, ILE":["CX"],"CHYPRE":["CY"],"TCHEQUE, REPUBLIQUE":["CZ"],"ALLEMAGNE":["DE"],"DJIBOUTI":["DJ"],"DANEMARK":["DK"],"DOMINIQUE":["DM"],"DOMINICAINE, REPUBLIQUE":["DO"],"ALGERIE":["DZ"],"EQUATEUR":["EC"],"ESTONIE":["EE"],"EGYPTE":["EG"],"SAHARA OCCIDENTAL":["EH"],"ERYTHREE":["ER"],"ESPAGNE":["ES"],"ETHIOPIE":["ET"],"FINLANDE":["FI"],"FIDJI":["FJ"],"FALKLAND, ILES (MALVINAS)":["FK"],"MICRONESIE, ETATS FEDERES DE":["FM"],"FEROE, ILES":["FO"],"FRANCE":["FR"],"GABON":["GA"],"ROYAUME-UNI":["GB"],"GRENADE":["GD"],"GEORGIE":["GE"],"GUYANE FRAN�AISE":["GF"],"GUERNESEY":["GG"],"GHANA":["GH"],"GIBRALTAR":["GI"],"GROENLAND":["GL"],"GAMBIE":["GM"],"GUINEE":["GN"],"GUADELOUPE":["GP"],"GUINEE EQUATORIALE":["GQ"],"GRECE":["GR"],"GEORGIE DU SUD ET LES ILES SANDWICH DU SUD":["GS"],"GUATEMALA":["GT"],"GUAM":["GU"],"GUINEE-BISSAU":["GW"],"GUYANA":["GY"],"HONG-KONG":["HK"],"HEARD,ILE ET MCDONALD, ILES":["HM"],"HONDURAS":["HN"],"CROATIE":["HR"],"HAITI":["HT"],"HONGRIE":["HU"],"INDONESIE":["ID"],"IRLANDE":["IE"],"ISRAEL":["IL"],"ILEDEMAN":["IM"],"INDE":["IN"],"OCEAN INDIEN,TERRITOIRE BRITANNIQUE DE L'":["IO"],"IRAQ":["IQ"],"IRAN, REPUBLIQUE ISLAMIQUE D'":["IR"],"ISLANDE":["IS"],"ITALIE":["IT"],"JERSEY":["JE"],"JAMAIQUE":["JM"],"JORDANIE":["JO"],"JAPON":["JP"],"KENYA":["KE"],"KIRGHIZISTAN":["KG"],"CAMBODGE":["KH"],"KIRIBATI":["KI"],"COMORES":["KM"],"SAINT-KITTS-ET-NEVIS":["KN"],"COREE, REPUBLIQUE POPULAIRE DEMOCRATIQUE DE":["KP"],"COREE, REPUBLIQUE DE":["KR"],"KOWEIT":["KW"],"CAIMANES, ILES":["KY"],"KAZAKHSTAN":["KZ"],"LAO, REPUBLIQUE DEMOCRATIQUE POPULAIRE":["LA"],"LIBAN":["LB"],"SAINTE-LUCIE":["LC"],"LIECHTENSTEIN":["LI"],"SRI LANKA":["LK"],"LIBERIA":["LR"],"LESOTHO":["LS"],"LITUANIE":["LT"],"LUXEMBOURG":["LU"],"LETTONIE":["LV"],"LIBYENNE, JAMAHIRIYAARABE":["LY"],"MAROC":["MA"],"MONACO":["MC"],"MOLDOVA, REPUBLIQUE DE":["MD"],"MONTENEGRO":["ME"],"MADAGASCAR":["MG"],"MARSHALL, ILES":["MH"],"MACEDOINE, L'EX-REPUBLIQUE YOUGOSLAVE DE":["MK"],"MALI":["ML"],"MYANMAR":["MM"],"MONGOLIE":["MN"],"MACAO":["MO"],"MARIANNES DU NORD, ILES":["MP"],"MARTINIQUE":["MQ"],"MAURITANIE":["MR"],"MONTSERRAT":["MS"],"MALTE":["MT"],"MAURICE":["MU"],"MALDIVES":["MV"],"MALAWI":["MW"],"MEXIQUE":["MX"],"MALAISIE":["MY"],"MOZAMBIQUE":["MZ"],"NAMIBIE":["NA"],"NOUVELLE-CALEDONIE":["NC"],"NIGER":["NE"],"NORFOLK, ILE":["NF"],"NIGERIA":["NG"],"NICARAGUA":["NI"],"PAYS-BAS":["NL"],"NORVEGE":["NO"],"NEPAL":["NP"],"NAURU":["NR"],"NIUE":["NU"],"NOUVELLE-ZELANDE":["NZ"],"OMAN":["OM"],"PANAMA":["PA"],"PEROU":["PE"],"POLYNESIE FRAN�AISE":["PF"],"PAPOUASIE-NOUVELLE-GUINEE":["PG"],"PHILIPPINES":["PH"],"PAKISTAN":["PK"],"POLOGNE":["PL"],"SAINT-PIERRE-ET-MIQUELON":["PM"],"PITCAIRN":["PN"],"PORTORICO":["PR"],"PALESTINIEN OCCUPE,TERRITOIRE":["PS"],"PORTUGAL":["PT"],"PALAOS":["PW"],"PARAGUAY":["PY"],"QATAR":["QA"],"REUNION":["RE"],"ROUMANIE":["RO"],"SERBIE":["RS"],"RUSSIE, FEDERATION DE":["RU"],"RWANDA":["RW"],"ARABIE SAOUDITE":["SA"],"SALOMON, ILES":["SB"],"SEYCHELLES":["SC"],"SOUDAN":["SD"],"SUEDE":["SE"],"SINGAPOUR":["SG"],"SAINTE-HELENE":["SH"],"SLOVENIE":["SI"],"SVALBARD ET ILE JANMAYEN":["SJ"],"SLOVAQUIE":["SK"],"SIERRA LEONE":["SL"],"SAINT-MARIN":["SM"],"SENEGAL":["SN"],"SOMALIE":["SO"],"SURINAME":["SR"],"SAOTOME-ET-PRINCIPE":["ST"],"EL SALVADOR":["SV"],"SYRIENNE, REPUBLIQUE ARABE":["SY"],"SWAZILAND":["SZ"],"TURKS ET CAIQUES,ILES":["TC"],"TCHAD":["TD"],"TERRES AUSTRALES FRAN�AISES":["TF"],"TOGO":["TG"],"THAILANDE":["TH"],"TADJIKISTAN":["TJ"],"TOKELAU":["TK"],"TIMOR-LESTE":["TL"],"TURKMENISTAN":["TM"],"TUNISIE":["TN"],"TONGA":["TO"],"TURQUIE":["TR"],"TRINITE-ET-TOBAGO":["TT"],"TUVALU":["TV"],"TAIWAN, PROVINCE DE CHINE":["TW"],"TANZANIE, REPUBLIQUE-UNIE DE":["TZ"],"UKRAINE":["UA"],"OUGANDA":["UG"],"ILES MINEURES ELOIGNEES DES ETATS-UNIS":["UM"],"ETATS-UNIS":["US"],"URUGUAY":["UY"],"OUZBEKISTAN":["UZ"],"SAINT-SIEGE (ETAT DE LA CITE DU VATICAN)":["VA"],"SAINT-VINCENT-ET-LES-GRENADINES":["VC"],"VENEZUELA":["VE"],"ILES VIERGES BRITANNIQUES":["VG"],"ILES VIERGES DES ETATS-UNIS":["VI"],"VIETNAM":["VN"],"VANUATU":["VU"],"WALLIS ET FUTUNA":["WF"],"SAMOA":["WS"],"YEMEN":["YE"],"MAYOTTE":["YT"],"AFRIQUE DU SUD":["ZA"],"ZAMBIE":["ZM"],"ZIMBABWE":["ZW"]},"uri":"urn:ebu:metadata-cs:ISO3166CountryCodeCS_2008","versionDate":"2013-01-07"}
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
