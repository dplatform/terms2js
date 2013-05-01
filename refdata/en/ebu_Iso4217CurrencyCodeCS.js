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

var voc = {"terms":{"AFN":["Afghani"],"ALL":["Lek"],"DZD":["Algerian Dinar"],"USD":["US Dollar","US Dollar","US Dollar","US Dollar","US Dollar","US Dollar","US Dollar","US Dollar","US Dollar","US Dollar","US Dollar","US Dollar","US Dollar","US Dollar","US Dollar"],"EUR":["Euro","Euro","Euro","Euro","Euro","Euro","Euro","Euro","Euro","Euro","Euro","Euro","Euro","Euro","Euro","Euro","Euro","Euro","Euro","Euro","Euro","Euro","Euro","Euro"],"AOA":["Kwanza"],"XCD":["East Caribbean Dollar","East Caribbean Dollar","East Caribbean Dollar","East Caribbean Dollar","East Caribbean Dollar","East Caribbean Dollar","East Caribbean Dollar","East Caribbean Dollar"],"ARS":["Argentine Peso"],"AMD":["Armenian Dram"],"AWG":["Aruban Guilder"],"AUD":["Australian Dollar","Australian Dollar","Australian Dollar","Australian Dollar","Australian Dollar","Australian Dollar","Australian Dollar","Australian Dollar"],"AZN":["Azerbaijanian Manat"],"BSD":["Bahamian Dollar"],"BHD":["Bahraini Dinar"],"BDT":["Taka"],"BBD":["Barbados Dollar"],"BYR":["Belarussian Ruble"],"BZD":["Belize Dollar"],"XOF":["CFA Franc BCEAO","CFA Franc BCEAO \\ul\\'86\\ulnone","CFA Franc BCEAO \\ul\\'86\\ulnone","CFA Franc BCEAO \\ul\\'86\\ulnone","CFA Franc BCEAO \\ul\\'86\\ulnone","CFA Franc BCEAO \\ul\\'86\\ulnone","CFA Franc BCEAO \\ul\\'86\\ulnone","CFA Franc BCEAO \\ul\\'86\\ulnone"],"BMD":["Bermudian Dollar (customarily known as Bermuda Dollar)"],"BTN":["Ngultrum"],"INR":["Indian Rupee","Indian Rupee"],"BOB":["Boliviano"],"BOV":["Mvdol"],"BAM":["Convertible Marks"],"BWP":["Pula"],"NOK":["Norwegian Krone","Norwegian Krone","Norwegian Krone"],"BRL":["Brazilian Real"],"BND":["Brunei Dollar"],"BGN":["Bulgarian Lev"],"BIF":["Burundi Franc"],"KHR":["Riel"],"XAF":["CFA Franc BEAC \\ul\\'87\\ulnone","CFA Franc BEAC \\ul\\'87\\ulnone","CFA Franc BEAC\\ul\\f1\\fs20\\'87\\ulnone","CFA Franc BEAC \\ul\\'87\\ulnone","CFA Franc BEAC \\ul\\'87\\ulnone","CFA Franc BEAC \\ul\\'87\\ulnone"],"CAD":["Canadian Dollar"],"CVE":["Cape Verde Escudo"],"KYD":["Cayman Islands Dollar"],"CLP":["Chilean Peso"],"CLF":["Unidades de formento"],"CNY":["Yuan Renminbi"],"COP":["Colombian Peso"],"COU":["Unidad de Valor Real"],"KMF":["Comoro Franc"],"CDF":["Franc Congolais"],"NZD":["New Zealand Dollar","New Zealand Dollar","New Zealand Dollar","New Zealand Dollar","New Zealand Dollar"],"CRC":["Costa Rican Colon"],"HRK":["Croatian Kuna"],"CUP":["Cuban Peso"],"CYP":["Cyprus Pound"],"CZK":["Czech Koruna"],"DKK":["Danish Krone","Danish Krone","Danish Krone"],"DJF":["Djibouti Franc"],"DOP":["Dominican Peso"],"EGP":["Egyptian Pound"],"SVC":["El Salvador Colon"],"ERN":["Nakfa"],"EEK":["Kroon"],"ETB":["Ethiopian Birr"],"FKP":["Falkland Islands Pound"],"FJD":["Fiji Dollar"],"XPF":["CFP Franc","CFP Franc","CFP Franc"],"GMD":["Dalasi"],"GEL":["Lari"],"GHC":["Cedi"],"GIP":["Gibraltar Pound"],"GTQ":["Quetzal"],"GNF":["Guinea Franc"],"GWP":["Guinea-Bissau Peso"],"GYD":["Guyana Dollar"],"HTG":["Gourde"],"HNL":["Lempira"],"HKD":["Hong Kong Dollar"],"HUF":["Forint"],"ISK":["Iceland Krona"],"IDR":["Rupiah"],"XDR":["SDR"],"IRR":["Iranian Rial"],"IQD":["Iraqi Dinar"],"ILS":["New Israeli Sheqel"],"JMD":["Jamaican Dollar"],"JPY":["Yen"],"JOD":["Jordanian Dinar"],"KZT":["Tenge"],"KES":["Kenyan Shilling"],"KPW":["North Korean Won"],"KRW":["Won"],"KWD":["Kuwaiti Dinar"],"KGS":["Som"],"LAK":["Kip"],"LVL":["Latvian Lats"],"LBP":["Lebanese Pound"],"ZAR LSL":["Rand Loti"],"LRD":["Liberian Dollar"],"LYD":["Libyan Dinar"],"CHF":["Swiss Franc","Swiss Franc"],"LTL":["Lithuanian Litas"],"MOP":["Pataca"],"MKD":["Denar"],"MGA":["Malagascy Ariary"],"MWK":["Kwacha"],"MYR":["Malaysian Ringgit"],"MVR":["Rufiyaa"],"MTL":["Maltese Lira"],"MRO":["Ouguiya"],"MUR":["Mauritius Rupee"],"MXN":["Mexican Peso"],"MXV":["Mexican Unidad de Inversion (UID)"],"MDL":["Moldovan Leu"],"MNT":["Tugrik"],"MAD":["Moroccan Dirham","Moroccan Dirham"],"MZN":["Metical"],"MMK":["Kyat"],"ZAR":["Rand","Rand"],"NAD":["Namibian Dollar"],"NPR":["Nepalese Rupee"],"ANG":["Netherlands Antillian Guilder"],"NIO":["Cordoba Oro"],"NGN":["Naira"],"OMR":["Rial Omani"],"PKR":["Pakistan Rupee"],"PAB USD":["Balboa US Dollar"],"PGK":["Kina"],"PYG":["Guarani"],"PEN":["Nuevo Sol"],"PHP":["Philippine Peso"],"PLN":["Zloty"],"QAR":["Qatari Rial"]," ROL":["Old Leu"]," RON":["New Leu"],"RUB":["Russian Ruble"],"RWF":["Rwanda Franc"],"SHP":["Saint Helena Pound"],"WST":["Tala"],"STD":["Dobra"],"SAR":["Saudi Riyal"],"RSD":["Serbian Dinar"],"SCR":["Seychelles Rupee"],"SLL":["Leone"],"SGD":["Singapore Dollar"],"SKK":["Slovak Koruna"],"SIT":["Tolar"],"SBD":["Solomon Islands Dollar"],"SOS":["Somali Shilling"],"LKR":["Sri Lanka Rupee"],"SDG":["Sudanese Dinar"],"SRD":["Surinam Dollar"],"SZL":["Lilangeni"],"SEK":["Swedish Krona"],"SYP":["Syrian Pound"],"TWD":["New Taiwan Dollar"],"TJS":["Somoni"],"TZS":["Tanzanian Shilling"],"THB":["Baht"],"TOP":["Pa'anga"],"TTD":["Trinidad and Tobago Dollar"],"TND":["Tunisian Dinar"],"TRY":["New Turkish Lira"],"TMM":["Manat"],"UGX":["Uganda Shilling"],"UAH":["Hryvnia"],"AED":["UAE Dirham"],"GBP":["Pound Sterling"]," UYU":["Peso Uruguayo"]," UYI":["Uruguay Peso en Unidades Indexadas"],"UZS":["Uzbekistan Sum"],"VUV":["Vatu"],"VEB":["Bolivar"],"VND":["Dong"],"YER":["Yemeni Rial"],"ZMK":["Kwacha"],"ZWD":["Zimbabwe Dollar"],"XAU":["Gold"],"XBA":["Bond Markets Units European Composite Unit (EURCO)"],"XBB":["European Monetary Unit (E.M.U.-6)"],"XBC":["European Unit of Account 9(E.U.A.-9)"],"XBD":["European Unit of Account 17(E.U.A.-17)"],"XPD":["Palladium"],"XPT":["Platinum"],"XAG":["Silver"],"XFU":["UIC-Franc"],"XFO":["Gold-Franc"],"XXX":["The codes assigned for transactions where no currency is involved"]},"names":{"Afghani":["AFN"],"Lek":["ALL"],"Algerian Dinar":["DZD"],"US Dollar":["USD","USD","USD","USD","USD","USD","USD","USD","USD","USD","USD","USD","USD","USD","USD"],"Euro":["EUR","EUR","EUR","EUR","EUR","EUR","EUR","EUR","EUR","EUR","EUR","EUR","EUR","EUR","EUR","EUR","EUR","EUR","EUR","EUR","EUR","EUR","EUR","EUR"],"Kwanza":["AOA"],"East Caribbean Dollar":["XCD","XCD","XCD","XCD","XCD","XCD","XCD","XCD"],"Argentine Peso":["ARS"],"Armenian Dram":["AMD"],"Aruban Guilder":["AWG"],"Australian Dollar":["AUD","AUD","AUD","AUD","AUD","AUD","AUD","AUD"],"Azerbaijanian Manat":["AZN"],"Bahamian Dollar":["BSD"],"Bahraini Dinar":["BHD"],"Taka":["BDT"],"Barbados Dollar":["BBD"],"Belarussian Ruble":["BYR"],"Belize Dollar":["BZD"],"CFA Franc BCEAO":["XOF"],"Bermudian Dollar (customarily known as Bermuda Dollar)":["BMD"],"Ngultrum":["BTN"],"Indian Rupee":["INR","INR"],"Boliviano":["BOB"],"Mvdol":["BOV"],"Convertible Marks":["BAM"],"Pula":["BWP"],"Norwegian Krone":["NOK","NOK","NOK"],"Brazilian Real":["BRL"],"Brunei Dollar":["BND"],"Bulgarian Lev":["BGN"],"CFA Franc BCEAO \\ul\\'86\\ulnone":["XOF","XOF","XOF","XOF","XOF","XOF","XOF"],"Burundi Franc":["BIF"],"Riel":["KHR"],"CFA Franc BEAC \\ul\\'87\\ulnone":["XAF","XAF","XAF","XAF","XAF"],"Canadian Dollar":["CAD"],"Cape Verde Escudo":["CVE"],"Cayman Islands Dollar":["KYD"],"CFA Franc BEAC\\ul\\f1\\fs20\\'87\\ulnone":["XAF"],"Chilean Peso":["CLP"],"Unidades de formento":["CLF"],"Yuan Renminbi":["CNY"],"Colombian Peso":["COP"],"Unidad de Valor Real":["COU"],"Comoro Franc":["KMF"],"Franc Congolais":["CDF"],"New Zealand Dollar":["NZD","NZD","NZD","NZD","NZD"],"Costa Rican Colon":["CRC"],"Croatian Kuna":["HRK"],"Cuban Peso":["CUP"],"Cyprus Pound":["CYP"],"Czech Koruna":["CZK"],"Danish Krone":["DKK","DKK","DKK"],"Djibouti Franc":["DJF"],"Dominican Peso":["DOP"],"Egyptian Pound":["EGP"],"El Salvador Colon":["SVC"],"Nakfa":["ERN"],"Kroon":["EEK"],"Ethiopian Birr":["ETB"],"Falkland Islands Pound":["FKP"],"Fiji Dollar":["FJD"],"CFP Franc":["XPF","XPF","XPF"],"Dalasi":["GMD"],"Lari":["GEL"],"Cedi":["GHC"],"Gibraltar Pound":["GIP"],"Quetzal":["GTQ"],"Guinea Franc":["GNF"],"Guinea-Bissau Peso":["GWP"],"Guyana Dollar":["GYD"],"Gourde":["HTG"],"Lempira":["HNL"],"Hong Kong Dollar":["HKD"],"Forint":["HUF"],"Iceland Krona":["ISK"],"Rupiah":["IDR"],"SDR":["XDR"],"Iranian Rial":["IRR"],"Iraqi Dinar":["IQD"],"New Israeli Sheqel":["ILS"],"Jamaican Dollar":["JMD"],"Yen":["JPY"],"Jordanian Dinar":["JOD"],"Tenge":["KZT"],"Kenyan Shilling":["KES"],"North Korean Won":["KPW"],"Won":["KRW"],"Kuwaiti Dinar":["KWD"],"Som":["KGS"],"Kip":["LAK"],"Latvian Lats":["LVL"],"Lebanese Pound":["LBP"],"Rand Loti":["ZAR LSL"],"Liberian Dollar":["LRD"],"Libyan Dinar":["LYD"],"Swiss Franc":["CHF","CHF"],"Lithuanian Litas":["LTL"],"Pataca":["MOP"],"Denar":["MKD"],"Malagascy Ariary":["MGA"],"Kwacha":["MWK","ZMK"],"Malaysian Ringgit":["MYR"],"Rufiyaa":["MVR"],"Maltese Lira":["MTL"],"Ouguiya":["MRO"],"Mauritius Rupee":["MUR"],"Mexican Peso":["MXN"],"Mexican Unidad de Inversion (UID)":["MXV"],"Moldovan Leu":["MDL"],"Tugrik":["MNT"],"Moroccan Dirham":["MAD","MAD"],"Metical":["MZN"],"Kyat":["MMK"],"Rand":["ZAR","ZAR"],"Namibian Dollar":["NAD"],"Nepalese Rupee":["NPR"],"Netherlands Antillian Guilder":["ANG"],"Cordoba Oro":["NIO"],"Naira":["NGN"],"Rial Omani":["OMR"],"Pakistan Rupee":["PKR"],"Balboa US Dollar":["PAB USD"],"Kina":["PGK"],"Guarani":["PYG"],"Nuevo Sol":["PEN"],"Philippine Peso":["PHP"],"Zloty":["PLN"],"Qatari Rial":["QAR"],"Old Leu":[" ROL"],"New Leu":[" RON"],"Russian Ruble":["RUB"],"Rwanda Franc":["RWF"],"Saint Helena Pound":["SHP"],"Tala":["WST"],"Dobra":["STD"],"Saudi Riyal":["SAR"],"Serbian Dinar":["RSD"],"Seychelles Rupee":["SCR"],"Leone":["SLL"],"Singapore Dollar":["SGD"],"Slovak Koruna":["SKK"],"Tolar":["SIT"],"Solomon Islands Dollar":["SBD"],"Somali Shilling":["SOS"],"Sri Lanka Rupee":["LKR"],"Sudanese Dinar":["SDG"],"Surinam Dollar":["SRD"],"Lilangeni":["SZL"],"Swedish Krona":["SEK"],"Syrian Pound":["SYP"],"New Taiwan Dollar":["TWD"],"Somoni":["TJS"],"Tanzanian Shilling":["TZS"],"Baht":["THB"],"Pa'anga":["TOP"],"Trinidad and Tobago Dollar":["TTD"],"Tunisian Dinar":["TND"],"New Turkish Lira":["TRY"],"Manat":["TMM"],"Uganda Shilling":["UGX"],"Hryvnia":["UAH"],"UAE Dirham":["AED"],"Pound Sterling":["GBP"],"Peso Uruguayo":[" UYU"],"Uruguay Peso en Unidades Indexadas":[" UYI"],"Uzbekistan Sum":["UZS"],"Vatu":["VUV"],"Bolivar":["VEB"],"Dong":["VND"],"Yemeni Rial":["YER"],"Zimbabwe Dollar":["ZWD"],"Gold":["XAU"],"Bond Markets Units European Composite Unit (EURCO)":["XBA"],"European Monetary Unit (E.M.U.-6)":["XBB"],"European Unit of Account 9(E.U.A.-9)":["XBC"],"European Unit of Account 17(E.U.A.-17)":["XBD"],"Palladium":["XPD"],"Platinum":["XPT"],"Silver":["XAG"],"UIC-Franc":["XFU"],"Gold-Franc":["XFO"],"The codes assigned for transactions where no currency is involved":["XXX"]},"uri":"urn:ebu:metadata-cs:ISO4217CurrencyCodeCS_2008","versionDate":"2013-01-07"}
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
