/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

var standards = require('./ifate_standard_502.json')
var standards_developer = require('./ifate_standard_2.json')
var apprentices = require('./apprentices.json')

module.exports = {
  standards : standards,
  standards_developer : standards_developer,
  apprentices : apprentices,
}

/* 
// this is called twice as the kit initialises, but doesn't appear to be used in the prototype
// removed 13/09/2022
require("request").get("https://www.instituteforapprenticeships.org/api/apprenticeshipstandards", (error, response, body) => {
    var _apiData = JSON.parse(body),
        _versionTypes = {}
    console.log(_apiData.length + " standards in API (https://www.instituteforapprenticeships.org/api/apprenticeshipstandards)")
    _apiData.forEach(function(_standard, index) {
        _versionTypes["version " + _standard.version] = (_versionTypes["version " + _standard.version] || 0) + 1
    });
    console.log(_versionTypes)
});
 */