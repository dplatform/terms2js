terms2js
========

This a basic and lightweight JavaScript and JSON version of Metadata Reference Data & Classification Schemes.

Stores the vocabularies as JSON objects, accesible as node modules or by browser javascript interpreter. Generated vocabulariy files have no dependencies and can be used stand-alone.

The package is completely generic and may be used to generate your own hierarchical reference vocabularies such as the ones expressed with the TV-Anytime XML Schema.

Command line
------------

To built a new version of vocabularies in refdata or transform your own you can use the 'terms2js' command.

Note: In order to run the 'terms2js' command you need to install these node modules:

```sh
npm install -g optimist
npm install -g uglify-js
```

For example

```sh
terms2js test/*.xml --output-dir test
```

Generated Vocabularies usage
----------------------------

From javascript the JSON object is not accesible directly. You must use this public functions:

*  **<vocabulary>.isValid (term)**: *Return boolean value, true if term (termId or termUri) is supported.*
*  **<vocabulary>.getTermId (term)**: *Return a string containing the termId given the fully qualified term URI. If term isn't matching return null.*
*  **<vocabulary>.getTermUri (termId)**: *Return a string containing the fully qualified term URI.*
*  **<vocabulary>.isDeprecated (termId)**: *Return boolean value, true if termId is deprecated.*
*  **<vocabulary>.getAllTermId ()**: *Return an array with all the termId codes supported.*
*  **<vocabulary>.getAllTermIdMatching (string)**: *Return an array with all the termId matching string.*
*  **<vocabulary>.getTermInfo (termId)**: *Return object {"Name"}. If termId isn't supported return {}.*
*  **<vocabulary>.isTermUri (term)**: *Return true if term is the fully qualified term URI, false otherwise.*
*  **<vocabulary>.getUri ()**: *Return a string containing the vocabulary namespace URI.*
*  **<vocabulary>.getVersionDate ()**: *Return a string containing the vocabulary namespace version date.*
*  **<vocabulary>.getLang()**: *Return a string containing the vocabulary language.*
*  **<vocabulary>.stringify()**: *JSON stringify the vocabulary.*
*  **<vocabulary>.getEquivalent(termId)**: *Return an array of fully qualified term URI of equivalent terms in other classification schemas.*
*  **<vocabulary>.getMappings(termId, [uri])**: *Return an array of fully qualified term URI with which termId can be matched in other vocabularies. Results may be filtered by external uri if specified.*
*  **<vocabulary>.getMappingsMatching (string, [uri])**: *Return an array of fully qualified term URI with which the termId having label string can be matched in other vocabularies. Results may be filtered by external uri if specified.*

See the test folder for more usage examples:

### From nodejs

```js
// From node the module is accesible with a simple require
var roles = require ('../test/en/ebu_RoleCodeCS.min.js').Vocabulary;
var num_roles = 0;

// roles.getAllTermId () return an array of all EBU Role terms supported
var rolecodes = roles.getAllTermId ();
// iterate this array
for (num_roles=0; num_roles<rolecodes.length; num_roles++) {
  // show a string representation of the object return by roles.getTermInfo(termId)
        console.log (rolecodes[num_roles]);
        console.log ("   "+JSON.stringify(roles.getTermInfo(rolecodes[num_roles])));
}
// show the number of roles supported
console.log ("Roles supported: "+num_roles);
// test roles.isValid (termId) function
console.log("Is '4.2' a role code? "+roles.isValid ('4.2'));
console.log("What is the URI of role code '4.2'? "+roles.getTermUri ('4.2'));
console.log("What is the role code for 'Actor'? "+roles.getAllTermIdMatching ('Actor'));
```

### From browser

```html
<!doctype html>
<html>
<head>
    <title>Test EBU roles module</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
    <!--<script src="../test/en/ebu_RoleCodeCS.min.js"></script>-->
    <script src="../test/en/ebu_RoleCodeCS.js"></script>
    <style>
    body {
        background-color: #eee;
    }
    .center {
        width:700px;
        margin:10px auto;
        border:1px solid #ccc;
        padding:20px;
        background-color:#fff;
    }
    </style>
</head>
<body>
    <div class="center">
        <h1>Test EBU roles module (Browser client side)</h1>
        <hr />
        <div id="test"></div>
    </div>
    <script>
        var num_roles = 0,
        text = '';

        // terms2js.en.ebu_RoleCodeCS.Vocabulary.getAllTermId() return an array of all EBU Role terms supported
        var rolecodes = terms2js.en.ebu_RoleCodeCS.Vocabulary.getAllTermId();
        // iterate this array
        for (num_roles=0; num_roles<rolecodes.length; num_roles++) {
            // save in text variable a string representation of the object return by terms2js.en.ebu_RoleCodeCS.Vocabulary.getTermInfo(termId)
            var termId = rolecodes[num_roles];
            text+='<b>'+termId+'</b> '+JSON.stringify(terms2js.en.ebu_RoleCodeCS.Vocabulary.getTermInfo(termId))+'<br />';
        }
        // save the number of roles supported
        text = '<h2>Roles supported: '+num_roles+'</h2>'+text;
        // write the test result in DOM element with id='test'
        document.getElementById('test').innerHTML = text;
    </script>
</body>
</html>
```

See Also
--------

* EBU Metadata Reference Data & Classification Schemes - http://tech.ebu.ch/MetadataReferenceData
* EBU Reference Data & Classification Schemes Tech 3336 - http://tech.ebu.ch/docs/tech/tech3336v1_1.pdf
* ETSI TS 102 822-3-1 V1.7.1 (2011-11) - http://www.etsi.org/deliver/etsi_ts/102800_102899/1028220301/01.07.01_60/ts_1028220301v010701p.pdf

Aknowledgments
--------------

This package is inspired to [languages4translatewiki.js](https://github.com/joker-x/languages4translatewiki.git).
