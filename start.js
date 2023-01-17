// Core dependencies
const path = require('path')
const fs = require('fs')

// Check for node_modules before running
const checkFiles = require('./lib/build/check-files').checkFiles
checkFiles()

// Local dependencies
const { buildWatchAndServe } = require('./lib/build/tasks')
const { projectDir } = require('./lib/utils')

async function collectDataUsage() {
  // Local dependencies
  const usageData = require('./lib/usage_data')

  // Get usageDataConfig from file, if exists
  const usageDataConfig = usageData.getUsageDataConfig()

  if (usageDataConfig.collectUsageData === undefined) {
    // No recorded answer, so ask for permission
    const permissionGranted = await usageData.askForUsageDataPermission()
    usageDataConfig.collectUsageData = permissionGranted
    usageData.setUsageDataConfig(usageDataConfig)

    if (permissionGranted) {
      usageData.startTracking(usageDataConfig)
    }
  } else {
    if (usageDataConfig.collectUsageData === true) {
      // Opted in
      usageData.startTracking(usageDataConfig)
    }
  }
}

function createSessionDataDefaults() {
  // Create template session data defaults file if it doesn't exist
  const dataDirectory = path.join(projectDir, '/app/data')
  const sessionDataDefaultsFile = path.join(dataDirectory, '/session-data-defaults.js')
  const sessionDataDefaultsFileExists = fs.existsSync(sessionDataDefaultsFile)

  if (!sessionDataDefaultsFileExists) {
    console.log('Creating session data defaults file')
    if (!fs.existsSync(dataDirectory)) {
      fs.mkdirSync(dataDirectory)
    }

    fs.createReadStream(path.join(__dirname, '/lib/template.session-data-defaults.js'))
      .pipe(fs.createWriteStream(sessionDataDefaultsFile))
  }
}

(async () => {

  console.log('createSessionDataDefaults');
  createSessionDataDefaults()
  await collectDataUsage()
  await buildWatchAndServe()
})()





// call IFATE and get current list of standards
// parse the data for version and status counts
/* 
require("request").get("https://www.instituteforapprenticeships.org/api/apprenticeshipstandards", (error, response, body) => {
    var _apiData = JSON.parse(body),
        _versionTypes = {},
        _ksb = 0,
        _status = {};

    console.log(_apiData.length + " standards in API (https://www.instituteforapprenticeships.org/api/apprenticeshipstandards)");

    _apiData.forEach(function(_standard, index) {

      _status["status " + _standard.status] = (_status["status " + _standard.status] || 0) + 1;   
      _versionTypes["version " + _standard.version] = (_versionTypes["version " + _standard.version] || 0) + 1;

       if(_standard.knowledges.length>0 && _standard.status=="Approved for delivery"){
        console.log(_standard.larsCode, _standard.status, _standard.knowledges.length, _standard.knowledges);
        _ksb ++;
       }

    });

    console.log(_versionTypes);
    console.log(_status);
    console.log(_ksb);
});

 */
// 17 Jan 2023
/* 
1050 standards in API (https://www.instituteforapprenticeships.org/api/apprenticeshipstandards)
{
  'version 0.0': 130,
  'version 1.1': 186,
  'version 1.0': 689,
  'version 1.2': 34,
  'version 1.3': 9,
  'version 2.0': 2
}
{
  'status Withdrawn': 46,
  'status In development': 74,
  'status Approved for delivery': 659,
  'status Proposal in development': 12,
  'status Retired': 259
}
*/