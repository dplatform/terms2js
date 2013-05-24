// From node the module is accesible with a simple require
var terms2js = require ('../lib');
var json_roles = require ('../test/en/ebu_RoleCodeCS.json');

var parser = terms2js.parser.createParser ();
parser.parse ({ 'en': json_roles });

var langs = parser.getAvailableLanguages ();

var roles = parser.getVocabulary ('en');

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
