// 1 install dependancies
// npm install --dev luxon fs webshot-node
// 2 config (see steps inline)
// 3 run the script
// node screenshot.js screenshots


/*
 * STEP 1
 * Set `domain` to the website you want to screenshot, eg localhost:3000
 */
const domain = 'http://localhost:3000'
//const domain = 'https://das-commitmentsstatement-proto.herokuapp.com'
// option to take mobile screenshots (iphone 6/7/8)
const isMobile = true;

/*
 * STEP 2
 * Set `paths` to an array of named paths, for example:
 */
const paths = [
  // sample
  { title: 'start', path: '/'},
  { title: 'track-progress', path: '/track-progress'},
  { title: 'Welcome', path: '/track-progress/commitment-statement/dashboard/index-b'},
  { title: 'My apprenticeship', path: '/track-progress/commitment-statement/dashboard/my-apprenticeship-current-b'},
  { title: 'Previous jobs', path: '/track-progress/commitment-statement/dashboard/my-previous-jobs'},
  { title: 'My progress', path: '/track-progress/commitment-statement/dashboard/Ksb-list-tracked-3-c'}
]

/*
 * STEP 3
 * Run: node scripts/screenshot.js [name-of-directory], for example:
 *
 * node scripts/screenshot.js apply-for-teacher-training/name-of-directory
 */

// Dependencies
const { DateTime } = require('luxon')
const webshot = require('webshot-node')
const fs = require('fs')

// Arguments
const directoryName = process.argv.slice(-1)[0]
warnIfNoArguments()

const deepestDirectory = directoryName.split('/').pop()

let title = deepestDirectory.replace(/-/g, ' ')
title = title.charAt(0).toUpperCase() + title.slice(1)

const datestamp = DateTime.local().toFormat('yyyy-MM-dd')

const imageDirectory = `${directoryName}`
const postDirectory = `app/posts/${directoryName}`.replace('/' + deepestDirectory, '')

// Run
function start () {
  makeDirectories()
  decoratePaths()
  //generatePage()
  takeScreenshots()
}

function warnIfNoArguments (title) {
  // TODO: Use a better check for an argument
  if (directoryName.startsWith('/Users')) {
    console.log('No arguments set')
    console.log('Please set a directory name: `node scripts/screenshot.js "name-of-directory"`')
  }
}

function makeDirectories () {
  if (!fs.existsSync(imageDirectory)) {
    fs.mkdirSync(imageDirectory)
  }

/*   if (!fs.existsSync(postDirectory)) {
    fs.mkdirSync(postDirectory)
  } */
}

function decoratePaths () {
  paths.forEach(function (item, index) {
    item.id = item.title.replace(/ +/g, '-').toLowerCase()
    item.file = `${imageDirectory}/${item.id}.png`
    item.mobileFile = `${imageDirectory}/mob_${item.id}.png`
    item.src = item.file.replace('app/assets', '/public')
  })
}

function takeScreenshots () {
  // https://github.com/brenden/node-webshot
  const webshotOptions = {
    phantomConfig: {
      //'remote-debugger-port':'9000',
      //'ignore-ssl-errors': 'true'
    },
    windowSize: {
      width: 1200,
      height: 800
    },
    shotSize: {
      width: 'window',
      height: 'all'
    }
  }
  var mobileOptions = {
    screenSize: { //iphone 6/7/8
      width: 375
    , height: 667
    }
  , shotSize: {
      width: 375
    , height: 'all'
    }
  , userAgent: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_2 like Mac OS X; en-us)'
      + ' AppleWebKit/531.21.20 (KHTML, like Gecko) Mobile/7B298g'
  };

  paths.forEach(function (item, index) {
     webshot(
      domain + item.path,
      item.file,
      webshotOptions,
      function () {
        console.error(`${domain + item.path} \n >> ${item.file}`)
      }
    );
  
    if(isMobile){
      webshot(
        domain + item.path,
        item.mobileFile,
        mobileOptions,
        function () {
          console.error(`${domain + item.path} \n >> ${item.file}`)
        }
      )
    }
  })
}

// used to generate an eleventy page for each 
function generatePage () {
  let template = ''
  const templateStart = `---
title: ${title}
description:
date: ${datestamp}
---
{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [`

  const templateEnd = `
  ]
}) }}
`

  paths.forEach(function (item, index) {
    template += `${index > 0 ? ', ' : ''}
    {
      text: "${item.title}"
    }`
  })

  const filename = `${postDirectory}/${datestamp}-${deepestDirectory}.md`

  fs.writeFile(
    filename,
    templateStart + template + templateEnd,
    function (err) {
      if (err) {
        console.error(err)
      }
      console.log(`Page generated: ${filename}`)
    }
  )
}

start();
