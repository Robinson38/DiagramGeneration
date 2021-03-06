
const svgStart = `
<svg width="5000" height="5000" xmlns="http://www.w3.org/2000/svg">

<style>
    /* <![CDATA[ */
    :root {
    --colorDb: #20A93B;
    }
    polyline {
      stroke:black;
      stroke-width:3;
    }
    #js polyline {
      fill:#1E90FF;
    }
    #html polyline {
      fill:#DF0306;
    }
    .basicPattern text {
      font-size:20px;
    }
    .htmljs polyline {
      fill:#1E90FF;
    }
    #db path {
      stroke:black;
      stroke-width:3;
      fill:var(--colorDb);
    }
    #db text {
      font-size:25px;
    }
    #db ellipse {
      stroke:black;
      stroke-width:3;
    }
    #db rect {
      fill:var(--colorDb);
    }
    #css rect {
      fill:#FFD700;
      stroke:black;
      stroke-width:3;
    }
    #ext rect {
      fill:#FF8C00;
      stroke:black;
      stroke-width:3;
    }
    /* ]]> */
  </style>

<g id="js" class="basicPattern">
  <polyline points="1,1 85,1 119,34 119,131 1,131 1,0" />
  <text x="5" y="123">.js</text>
</g>

<g id="html" class="basicPattern">
  <polyline points="1,1 80,1 114,39 114,39 114,131 1,131 1,0" />
  <text x="5" y="123">.html</text>
</g>

<g id="db" class="basicPattern">
  <rect x="3" y="22" width="117" height="89" />
  <ellipse cx="61" cy="22" rx="59" ry="20" style="fill:white;"/>
  <ellipse cx="61" cy="22" rx="59" ry="20" style="fill:var(--colorDb);"/>
  <path d="M2,22 v0,87" />
  <path d="M120,22 v0,87" />
  <path d="M2,51 a59,20 0 1,0 118,0" />
  <path d="M2,80 a59,20 0 1,0 118,0" />
  <path d="M2,108 a59,20 0 1,0 118,0" />
  <path d="M2,108 a59,20 0 1,0 118,0" />
  <text x="38" y="29">SQL</text>
</g>

<g id="htmljs1" class="htmljs">
  <polyline points="81,1 185,1 219,34 219,34 219,131 81,131 81,0" />
  <use x="0" y="0" xlink:href="#html" />
  <text x="195" y="123">.js</text>
</g>

<g id="htmljs2" class="htmljs">
  <polyline points="81,1 185,1 219,34 219,34 219,131 81,131 81,0" />
  <polyline points="81,66 185,66 219,100 219,100 219,131 81,131 81,65" />
  <use x="0" y="0" xlink:href="#html" />
  <text x="195" y="123" style="font-size:20px;">.js</text>
</g>

<g id="htmljs3" class="htmljs">
  <polyline points="81,1 185,1 219,34 219,131 81,131 81,0" />
  <polyline points="81,45 185,45 219,78 219,131 81,131 81,0" />
  <polyline points="81,89 185,89 219,122 219,131 81,131 81,0" />
  <use x="0" y="0" xlink:href="#html" />
  <text x="195" y="123" style="font-size:20px;">.js</text>
</g>

<g id="htmljs4" class="htmljs">
  <polyline points="81,1 185,1 219,34 219,131 81,131 81,0" />
  <polyline points="81,34 185,34 219,67 219,131 81,131 81,0" />
  <polyline points="81,67 185,67 219,100 219,131 81,131 81,0" />
  <polyline points="81,100 185,100 217,131 81,131 81,0" />
  <use x="0" y="0" xlink:href="#html" />
  <text x="195" y="123" style="font-size:20px;">.js</text>
</g>

<g id="css" class="basicPattern">
  <rect width="130" height="130" />
  <text x="5" y="123">.css</text>
</g>

<g id="ext" class="basicPattern">
  <rect width="130" height="130" />
  <text x="5" y="123" style="font-size:20px;">external</text>
</g>

<marker id="fleche" markerWidth="24" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto" refX="11" refY="5">
<path d="M0,0 l12,5 l-12,5 z" style="fill:black;" />
</marker>

<rect x="0" y="0" width="250" height="250" style="fill:white" />`;


const svgEnd = '</svg>';

/*

First idea of data representation, but need of a representation more logical according to the hand-made diagram

//list of JS files on client side
let JSCLIENT = ['index', 'home', 'project-overview', 'project-marking', 'project-compare', 'criteria', 'admin', 'sort-table', 'admin-project-overview', 'common'] ;

//list of HTML files
let HTML= ['index', 'home', 'project-overview', 'project-marking', 'project-compare', 'criteria', 'admin', 'admin-project-overview'] ;

//list of JS called by the HTML files on server side
let HTMLJS = [[1,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,1],[0,0,1,0,0,0,0,0,0,1],[0,0,0,1,0,0,0,0,0,1],[0,0,0,0,1,0,0,0,0,1],[0,0,0,0,0,1,0,0,0,1],[0,0,0,0,0,0,1,0,0,1],[0,0,0,0,0,0,0,0,1,1]] ;

//list of hyperlinks
let HYPERLINKS = [[0,1,0,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,1,0,1,1,0,0,0],[0,1,0,0,0,0,0,0],[0,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,1],[0,0,0,0,0,0,1,0]] ;

//list of JS files on server side
let JSSERVER = ['index', 'api', 'tools', 'config', 'emails', 'db-datastore', ['Shared', 'statuses', 'marking-calculations'],['Errors', 'BadRequestError', 'ConflictError', 'ForbiddenError', 'NotFoundError']] ;

//list of imports between JS files on server side
let JSJS = [[0,2,0,1,2,0,0,2],[0,0,2,1,0,2,2,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,2,1,0,0,0,0],[0,0,2,1,0,0,2,2],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]] ;

//list of methods from JS files on server side used by JS files on client side
let CLIENTSERVER = [[0,0,0,0,0,0,0,0],[0,1,0,0,0,0,1,0],[0,1,0,0,0,0,1,0],[0,1,0,0,0,0,1,0],[0,1,0,0,0,0,1,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0]] ;
*/


// Second idea of data representation, seeing files as objects

const HTMLCLIENT = {
  extension: '.html',
  files: [
    {
      name: 'index',
      jsClientLinks: ['index'],
      jsserverlinks: [],
      cssLinks: ['sums'],
      hyperlinks: ['home'],
      externalLinks: ['apis.google.com/js/platform.js'],
    },
    {
      name: 'home',
      jsClientLinks: ['home', 'common'],
      jsserverlinks: ['statuses', 'api'],
      cssLinks: ['sums'],
      hyperlinks: ['project-overview'],
      externalLinks: ['apis.google.com/js/platform.js'],
    },
    {
      name: 'project-overview',
      jsClientLinks: ['project-overview', 'common'],
      jsserverlinks: ['statuses', 'api'],
      cssLinks: ['sums'],
      hyperlinks: ['home', 'project-marking', 'project-compare'],
      externalLinks: ['apis.google.com/js/platform.js'],
    },
    {
      name: 'project-marking',
      jsClientLinks: ['project-marking', 'common'],
      jsserverlinks: ['marking-calculations', 'api'],
      cssLinks: ['sums'],
      hyperlinks: ['home', 'project-overview'],
      externalLinks: ['apis.google.com/js/platform.js'],
    },
    {
      name: 'project-compare',
      jsClientLinks: ['project-compare', 'common'],
      jsserverlinks: ['marking-calculations', 'api'],
      cssLinks: ['sums'],
      hyperlinks: ['home', 'project-overview'],
      externalLinks: ['apis.google.com/js/platform.js'],
    },
    {
      name: 'admin',
      jsClientLinks: ['admin', 'common', 'sort-table'],
      jsserverlinks: ['statuses', 'api'],
      cssLinks: ['sums'],
      hyperlinks: ['admin-project-overview'],
      externalLinks: ['apis.google.com/js/platform.js'],
    },
    {
      name: 'admin-project-overview',
      jsClientLinks: ['admin-project-overview', 'common'],
      jsserverlinks: ['statuses', 'api'],
      cssLinks: ['sums'],
      hyperlinks: ['admin'],
      externalLinks: ['apis.google.com/js/platform.js'],
    },
    {
      name: 'criteria',
      jsClientLinks: ['criteria', 'common'],
      jsserverlinks: ['api'],
      cssLinks: ['sums'],
      hyperlinks: [],
      externalLinks: ['apis.google.com/js/platform.js'],
    },
  ],
};

const JSSERVER = {
  extension: '.js',
  files: [
    {
      name: 'index',
      jsDataLinks: ['config'],
      jsMethodsLinks: ['emails', 'NotFoundError', 'api'],
      externalLinks: [],
    },
    {
      name: 'api',
      jsDataLinks: ['config'],
      jsMethodsLinks: ['tools', 'marking-calculations', 'NotFoundError', 'BadRequestError', 'ConflictError', 'ForbiddenError', 'db-datastore'],
      externalLinks: [],
    },
    {
      name: 'config',
      jsDataLinks: [],
      jsMethodsLinks: [],
      externalLinks: [],
    },
    {
      name: 'emails',
      jsDataLinks: ['config'],
      jsMethodsLinks: ['tools'],
      externalLinks: ['@sendgrid/mail'],
    },
    {
      name: 'tools',
      jsDataLinks: [],
      jsMethodsLinks: [],
      externalLinks: [],
    },
    {
      name: 'db-datastore',
      jsDataLinks: ['config'],
      jsMethodsLinks: ['tools', 'emails', 'marking-calculations', 'ConflictError', 'statuses'],
      externalLinks: ['@google-cloud/databstore'],
    },
    {
      name: 'statuses',
      jsDataLinks: [],
      jsMethodsLinks: [],
      externalLinks: [],
    },
    {
      name: 'marking-calculations',
      jsDataLinks: [],
      jsMethodsLinks: [],
      externalLinks: [],
    },
    {
      name: 'BadRequest',
      jsDataLinks: [],
      jsMethodsLinks: [],
      externalLinks: [],
    },
    {
      name: 'ConflictError',
      jsDataLinks: [],
      jsMethodsLinks: [],
      externalLinks: [],
    },
    {
      name: 'ForbiddenError',
      jsDataLinks: [],
      jsMethodsLinks: [],
      externalLinks: [],
    },
    {
      name: 'NotFoundError',
      jsDataLinks: [],
      jsMethodsLinks: [],
      externalLinks: [],
    },
  ],
  folders: [
    {
      name: 'Shared',
      composedby: ['statuses', 'marking-calculations'],
    },
    {
      name: 'Errors',
      composedby: ['BadRequest', 'ConflictError', 'ForbiddenError', 'NotFoundError'],
    },
  ],
};

const EXTERNAL = {
  files: [
    {
      name: '@google-cloud/datastore',
      type: 'database',
    },
    {
      name: 'apis.google.com/js/platform.js',
      type: 'authentification',
    },
    {
      name: '@sendgrid/mail',
      type: 'email',
    },
  ],
};

/* List of caracteristics of SVG pre-defined patterns that will be called by
javascript
Patterns will be placed according to the coordinates of their
top left hand side corner, as it is done in SVG
*/

const patternsInfo = [
  {
    name: 'js',
    // Size of the pattern
    height: 132,
    width: 120,
    // Points where arrows can be linked to the box (clockwise)
    // Array of directions from the top left hand corner
    linkPoints: [[60, 0], [120, 65], [60, 130], [0, 65]],
  },
  {
    name: 'html',
    height: 132,
    width: 120,
    linkPoints: [[60, 0], [120, 65], [60, 130], [0, 65]],
  },
  {
    name: 'db',
    height: 130,
    width: 122,
    linkPoints: [[60, 0], [120, 65], [60, 130], [0, 65]],
  },
  {
    name: 'htmljs1',
    height: 132,
    width: 220,
    linkPoints: [[110, 0], [220, 66], [110, 132], [0, 66]],
  },
  {
    name: 'htmljs2',
    height: 132,
    width: 220,
    linkPoints: [[110, 0], [220, 66], [110, 132], [0, 66]],
  },
  {
    name: 'htmljs3',
    height: 132,
    width: 220,
    linkPoints: [[110, 0], [220, 66], [110, 132], [0, 66]],
  },
  {
    name: 'htmljs4',
    height: 132,
    width: 220,
    linkPoints: [[110, 0], [220, 66], [110, 132], [0, 66]],
  },
];

// Add to the html page tag given the text given
function setElementContent(htmlSelector, htmlCode) {
  document.querySelector(htmlSelector).innerHTML = htmlCode;
}

// Finding the index in the fileSystem.files of a given name file
function indexOfHtml(fileSystem, name) {
  let num;
  for (let k = 0; k < fileSystem.files.length; k += 1) {
    if (fileSystem.files[k].name === name) {
      num = k;
    }
  }
  return num;
}

/* 1st method :
Detecting hierarchy between HTML files within the client side

Known limitation : if a hierarchy owns more than one file on the top of
the hierachy, a hierarchy will be  find for each of the 'top files'
(no gathering of hierarchies is implemented)
*/

// Creation of an index for HTML files
// Each name of HTML file in the list returned is at the same place in the fileSystem.files array
function htmlFileList(fileSystem) {
  const fileIndex = [];
  for (let k = 0; k < fileSystem.files.length; k += 1) {
    fileIndex.push(fileSystem.files[k].name);
  }
  return fileIndex;
}

// List of html client files name which have a hyperlink pointing towards them
function hyperlinkedHtml(fileSystem) {
  const hyp = [];
  for (let k = 0; k < fileSystem.files.length; k += 1) {
    for (let j = 0; j < fileSystem.files[k].hyperlinks.length; j += 1) {
      hyp.push(fileSystem.files[k].hyperlinks[j]);
    }
  }
  return hyp;
}

// Find the top of the hierarchy
// Returns a list with all tops of different hierarchies possibles
function findHierarchyRoots(fileSystem) {
  const topOfHierarchies = [];
  const hyp = hyperlinkedHtml(fileSystem);
  for (let k = 0; k < fileSystem.files.length; k += 1) {
    const s = fileSystem.files[k].name;
    if (hyp.indexOf(s) === -1 && fileSystem.files[k].hyperlinks.length !== 0) {
      topOfHierarchies.push(s);
    }
  }
  return topOfHierarchies;
}

// Find all the hierarchies on client side
// Returns a list of all hierarchies found, each one corresponding to a top of the findHierarchyRoots list
function findHierarchies(fileSystem) {
  const topOfHierarchies = findHierarchyRoots(fileSystem);
  const fileIndex = htmlFileList(fileSystem);
  // allHierarchiesist is a list of all the hierarchies in our client side
  const allHierarchies = [];
  // Doing the loop on all possible hierarchies found before in topOfHierarchies
  for (const curTop of topOfHierarchies) {
    // For each hierarchy, hierarchyNameList contains the files name already seen in the hierarchy
    const hierarchyNameList = [];
    // rk is the rank in the hierarchy
    let rk = 0;
    // first is the number of files which we didn't explore at a given level of the hierarchy
    let first = 1;
    hierarchyNameList.push(curTop);
    // The hierarchy we are going to build is called 'hierarchy' an begins with the top at the index 0
    const hierarchy = [[curTop, rk]];
    // i is the index we follow in the hierarchy
    let i = 0;
    let [nMax, nCur, nNextFiles] = [1, 0, 0];
    while (first > 0) {
      if (nCur === nMax) {
        rk += 1;
        // nMax is the number of files of a given level
        // nCur is the index of the file that we are exploring (nCur <= nMax)
        // nNextFiles is the number of files we will need to take a look at in the following level of the hierarchy
        [nMax, nCur, nNextFiles] = [nNextFiles, 0, 0];
      }
      const curObj = hierarchy[i][0];
      const curInd = fileIndex.indexOf(curObj);
      // second is the number of new files hyperlinks array we have to tackle with after
      let second = 0;
      for (const hyper of fileSystem.files[curInd].hyperlinks) {
        if (hierarchyNameList.indexOf(hyper) === -1) {
          second += 1;
          hierarchyNameList.push(hyper);
          hierarchy.push([hyper, rk + 1]);
        }
      }
      nNextFiles += second;
      nCur += 1;
      first -= 1;
      i += 1;
      // If there is no new hyperlink arrays to tackle, we stop
      if ((first === 0) && (second > 0)) {
        first = second;
      } else {
        first += second;
      }
    }
    allHierarchies.push(hierarchy);
  }
  return allHierarchies;
}


// Function that returns a global name list of files which can be found in the hierarchies
function hierarchiesFilesnameList(hierarchiesList) {
  const globalNameList = [];
  for (const hierarchy of hierarchiesList) {
    for (let k = 0; k < hierarchy.length; k += 1) {
      globalNameList.push(hierarchy[k][0]);
    }
  }
  return globalNameList;
}

/* 2nd method :
Detecting files which might be in the 'common part' of the client side because
they are applying to a majority of client side files. Including calculation
of the 'common membership threshold'.

Known limitation : here threshold calculation is based on the gap of
frequencies of the JS files only.
*/

// Returns the name and frequency of use of each file
function usedFilesFrequency(fileSystem) {
  const jsName = [];
  const cssName = [];
  const extName = [];
  const jsFreq = [];
  const cssFreq = [];
  const extFreq = [];
  let n = 0;
  // Counting of differents files linked in each category
  for (const el of fileSystem.files) {
    n += 1;
    for (const js of el.jsClientLinks) {
      if (jsName.indexOf(js) === -1) {
        jsName.push(js);
        jsFreq.push(0);
      }
      jsFreq[jsName.indexOf(js)] += 1;
    }
    for (const css of el.cssLinks) {
      if (cssName.indexOf(css) === -1) {
        cssName.push(css);
        cssFreq.push(0);
      }
      cssFreq[cssName.indexOf(css)] += 1;
    }
    for (const ext of el.externalLinks) {
      if (extName.indexOf(ext) === -1) {
        extName.push(ext);
        extFreq.push(0);
      }
      extFreq[extName.indexOf(ext)] += 1;
    }
  }
  // Division by the number of files at first in order to have a using-frequency
  for (let k = 0; k < jsFreq.length; k += 1) {
    jsFreq[k] /= n;
  }
  for (let k = 0; k < cssFreq.length; k += 1) {
    cssFreq[k] /= n;
  }
  for (let k = 0; k < extFreq.length; k += 1) {
    extFreq[k] /= n;
  }
  // Returns list of file name and list of files' frequency
  return [[jsName, cssName, extName], [jsFreq, cssFreq, extFreq]];
}

// Threshold calculation
function commonPartThreshold(fileSystem) {
  const [, [jsFreq]] = usedFilesFrequency(fileSystem);
  const cpjs = jsFreq.slice(0);
  let maxi = Math.max(...cpjs);
  // Array with the gaps
  const gap = [];
  // Array with the value after each gap
  const valBefGap = [];
  // Filling the arrays defined before
  while (cpjs.length > 0) {
    let k = 0;
    while (k < cpjs.length) {
      if (cpjs[k] === maxi) {
        cpjs.splice(k, 1);
      } else {
        k += 1;
      }
    }
    if (cpjs.length > 0) {
      const omaxi = Math.max(...cpjs);
      gap.push(maxi - omaxi);
      valBefGap.push(maxi);
      maxi = omaxi;
    }
  }
  // Threshold definition : use the maximum gap
  const maxiGap = Math.max(...gap);
  let threshold;
  const test = valBefGap[gap.indexOf(maxiGap)] - (0.1 * maxiGap);
  if (test > 0.6) {
    threshold = valBefGap[gap.indexOf(maxiGap)] - (0.1 * maxiGap);
  } else {
    // Default value of threshold
    threshold = 0.66;
  }
  return threshold;
}

// Creation of the 'common client side files'
function findCommonClientFiles(fileSystem) {
  const threshold = commonPartThreshold(fileSystem);
  const [[jsName, cssName, extName], [jsFreq, cssFreq, extFreq]] = usedFilesFrequency(fileSystem);
  // Each of the followig arrays will be containing files name of the right type that reach the threshold calculated
  const jsCommon = [];
  const cssCommon = [];
  const extCommon = [];
  for (let k = 0; k < jsFreq.length; k += 1) {
    if (jsFreq[k] >= threshold) {
      jsCommon.push(jsName[k]);
    }
  }
  for (let k = 0; k < cssFreq.length; k += 1) {
    if (cssFreq[k] >= threshold) {
      cssCommon.push(cssName[k]);
    }
  }
  for (let k = 0; k < extFreq.length; k += 1) {
    if (extFreq[k] >= threshold) {
      extCommon.push(extName[k]);
    }
  }
  return [jsCommon, cssCommon, extCommon];
}


/* Returning the number of js links on the client side without counting the js in 'Common Part'
 Also returning a list of the js files in the 'Common Part'
 In order to know how many js files should we layer aside each html
*/
function numberOfJsFiles(fileSystem, name) {
  const num = indexOfHtml(fileSystem, name);
  const commonJs = findCommonClientFiles(fileSystem)[0];
  let n = 0;
  for (const js of fileSystem.files[num].jsClientLinks) {
    if (commonJs.indexOf(js) === -1) {
      n += 1;
    }
  }
  return [n, commonJs];
}

/* 3rd method
Detecting 'toolbox' on server side
*/

// Find 'toolbox' files, namely, files only called by others
// Returns a list of server js files names which need to be placed in the 'toolbox'
function findServerToolbox(fileSystem) {
  const toolbox = [];
  for (const el of fileSystem.files) {
    if (el.jsDataLinks.length === 0 && el.jsMethodsLinks.length === 0 && el.externalLinks.length === 0) {
      toolbox.push(el.name);
    }
  }
  return toolbox;
}

/* 4th method
Detecting files hyperlinked without hierarchy, in order to put them
in the same box on the client side
*/

// For unhierarchized files, finding which are linked and those who are alone
// Like for the hierarchies, the output is a list of new component which need to be drawn (files alone or files linked with no hierarchy)
function findClientDisorderedFiles(hierarchyNameList, fileSystem) {
  const copyOfHierarchyNameList = hierarchyNameList.slice(0);
  let newStructure = [];
  const otherFilesForLayering = [];
  for (const file of fileSystem.files) {
    // If the file is not in a hierarchy, we deal with it
    if (copyOfHierarchyNameList.indexOf(file.name) === -1) {
      newStructure = [];
      copyOfHierarchyNameList.push(file.name);
      newStructure.push(file.name);
      for (const hyperlinkedFile of file.hyperlinks) {
        copyOfHierarchyNameList.push(hyperlinkedFile);
        newStructure.push(hyperlinkedFile);
      }
      otherFilesForLayering.push(newStructure);
    }
  }
  return otherFilesForLayering;
}

/* 5th method
Renaming of external links because they often have difficult names

Known limitation : the user have to type the name he wants for the file,
a database could be implemented. Rough function that needs another way to do this thing...
*/

// Ask the user for a substitue name for external files
function renameExternalComponents() {
  for (let k = 0; k < EXTERNAL.files.length; k += 1) {
    let newname = prompt('Enter the shortcut name for \"' + EXTERNAL.files[k].name + '\" :');
    EXTERNAL.files[k].name = newname;
  }
}

/* Function which finds the relative position between two elements and returns
an integer according to the position map below
Map of positions in the space :
        |
        1
    8   |   2
--7-----O-----3--
    6   |   4
        5
        |
*/
function relativePosition(point1, point2) {
  let position = 0;
  const dX = point1.x - point2.x;
  const dY = point1.y - point2.y;
  if (dX === 0 && dY === 0) {
    // Elements have the same positionition
    return 0;
  } else if (dX === 0) {
    position = dY > 0 ? 1 : 5;
  } else if (dY === 0) {
    position = dX > 0 ? 7 : 3;
  } else if (dX > 0) {
    position = dY > 0 ? 8 : 6;
  } else {
    position = dY > 0 ? 2 : 4;
  }
  return position;
}

// Function which according to the relative position of 2 elements,
// returns the points to link the arrow between them (first point is where the arrow begins and the second point is where the arrow ends)
function arrowBetweenElements(firstType, point1, secondType, point2) {
  // Places of each element type in the patternsInfo list
  let n1 = 0;
  let n2 = 0;
  for (let k = 0; k < patternsInfo.length; k += 1) {
    const { name } = patternsInfo[k];
    if (name === firstType) {
      n1 = k;
    }
    if (name === secondType) {
      n2 = k;
    }
  }
  // Relative position between the points
  const relPosition = relativePosition(point1, point2);
  const point3 = {};
  const point4 = {};
  // According to the relative position of the elements, linking points are not the same (not beginning and ending in the same position on the components)
  switch (relPosition) {
    case 1:
      point3.x = patternsInfo[n1].linkPoints[0][0] + point1.x;
      point3.y = patternsInfo[n1].linkPoints[0][1] + point1.y;
      point4.x = patternsInfo[n2].linkPoints[2][0] + point2.x;
      point4.y = patternsInfo[n2].linkPoints[2][1] + point2.y;
      break;
    case 2:
      point3.x = patternsInfo[n1].linkPoints[0][0] + point1.x;
      point3.y = patternsInfo[n1].linkPoints[0][1] + point1.y;
      point4.x = patternsInfo[n2].linkPoints[3][0] + point2.x;
      point4.y = patternsInfo[n2].linkPoints[3][1] + point2.y;
      break;
    case 3:
      point3.x = patternsInfo[n1].linkPoints[1][0] + point1.x;
      point3.y = patternsInfo[n1].linkPoints[1][1] + point1.y;
      point4.x = patternsInfo[n2].linkPoints[3][0] + point2.x;
      point4.y = patternsInfo[n2].linkPoints[3][1] + point2.y;
      break;
    case 4:
      point3.x = patternsInfo[n1].linkPoints[2][0] + point1.x;
      point3.y = patternsInfo[n1].linkPoints[2][1] + point1.y;
      point4.x = patternsInfo[n2].linkPoints[3][0] + point2.x;
      point4.y = patternsInfo[n2].linkPoints[3][1] + point2.y;
      break;
    case 5:
      point3.x = patternsInfo[n1].linkPoints[2][0] + point1.x;
      point3.y = patternsInfo[n1].linkPoints[2][1] + point1.y;
      point4.x = patternsInfo[n2].linkPoints[0][0] + point2.x;
      point4.y = patternsInfo[n2].linkPoints[0][1] + point2.y;
      break;
    case 6:
      point3.x = patternsInfo[n1].linkPoints[2][0] + point1.x;
      point3.y = patternsInfo[n1].linkPoints[2][1] + point1.y;
      point4.x = patternsInfo[n2].linkPoints[1][0] + point2.x;
      point4.y = patternsInfo[n2].linkPoints[1][1] + point2.y;
      break;
    case 7:
      point3.x = patternsInfo[n1].linkPoints[3][0] + point1.x;
      point3.y = patternsInfo[n1].linkPoints[3][1] + point1.y;
      point4.x = patternsInfo[n2].linkPoints[1][0] + point2.x;
      point4.y = patternsInfo[n2].linkPoints[1][1] + point2.y;
      break;
    case 8:
      point3.x = patternsInfo[n1].linkPoints[0][0] + point1.x;
      point3.y = patternsInfo[n1].linkPoints[0][1] + point1.y;
      point4.x = patternsInfo[n2].linkPoints[1][0] + point2.x;
      point4.y = patternsInfo[n2].linkPoints[1][1] + point2.y;
      break;
    default:
      return 'Bug somewhere !';
  }
  return [point3, point4];
}

/* Tracing test for arrwBetween
svgBody += '<use x="30" y="80" xlink:href="#db"/><use x="300" y="200" xlink:href="#htmljs3"/>';
let arr = arrowBetweenElements('db', [30, 80], 'htmljs3', [300, 200]);
svgBody += `<line x1="${arr[0][0]}" y1="${arr[0][1]}" x2="${arr[1][0]}" y2="${arr[1][1]}" style="stroke:black; stroke-width:1px;">`;
*/

// Layering ellements on the drawing
// Returns a bitmap filled with 0 with the height and width given
// CAUTION WITH COORDINATES !!! map[y][x]
function initiateMap(width, height) {
  const arrbis = [];
  const map = [];
  for (let k = 0; k < width; k += 1) {
    arrbis.push(0);
  }
  for (let k = 0; k < height; k += 1) {
    map.push(arrbis.slice(0));
  }
  return map;
}

// Function registering the component given in the array (which is a map)
// Returns nothing, just fill the map
function fillComponentMap(map, name, point) {
  // n is the index in patternsInfo
  let n = 0;
  for (let k = 0; k < patternsInfo.length; k += 1) {
    const test = patternsInfo[k].name;
    if (test === name) {
      n = k;
    }
  }
  for (let g = point.y; g < point.y + patternsInfo[n].height; g += 1) {
    for (let i = point.x; i < point.x + patternsInfo[n].width; i += 1) {
      map[g][i] = 1; // eslint-disable-line no-param-reassign
    }
  }
}

// Function tracing the map and counting the different numbers
// Returns the number of lines crossing and elements overlapping according to our bitmap for the new line traced
function fillLineMap(map, point1, point2) {
  let yb;
  let xb;
  const dx = Math.abs(point1.x - point2.x);
  // Number of crossing lines
  let numberCross = 0;
  // Number of overlapped components
  let numberOver = 0;
  // Boolean to know if the line or component that we meet in the graph has already been counted or not
  let sameComponentMet = false;
  let sameLineMet = false;
  // Case of a vertical line (need to check on the right and left side of each pixel of the line)
  if (dx === 0) {
    const xeq = point1.x;
    const dy = Math.abs(point1.y - point2.y);
    yb = point1.y < point2.y ? point1.y : point2.y;
    for (let k = yb + 5; k < yb + (dy - 2); k += 1) {
      const valueCurrentPixel = map[k][xeq];
      switch (valueCurrentPixel) {
        case 0:
          if (((map[k][xeq - 1] % 2 === 0 && map[k][xeq - 1] !== 0) ||
          (map[k][xeq + 1] % 2 === 0 && map[k][xeq + 1] !== 0)) && !sameLineMet) {
            numberCross += 1;
            sameLineMet = true;
          } else if (map[k][xeq - 1] === 0 && map[k][xeq + 1] === 0) {
            sameLineMet = false;
          }
          sameComponentMet = false;
          break;
        case 1:
          if (!sameComponentMet) {
            numberOver += 1;
            sameComponentMet = true;
            sameLineMet = false;
          } else if ((map[k][xeq - 1] === 3 || map[k][xeq + 1] === 3) && !sameLineMet) {
            numberCross += 1;
            sameLineMet = true;
          } else if ((map[k][xeq - 1] === 3 || map[k][xeq + 1] === 3) && sameLineMet) {
            sameLineMet = true;
          } else {
            sameLineMet = false;
          }
          break;
        case 2:
          if (!sameLineMet) {
            numberCross += 1;
            sameLineMet = true;
          }
          sameComponentMet = false;
          break;
        case 3:
          if (!sameLineMet) {
            numberCross += 1;
            sameLineMet = true;
          }
          break;
        case 4:
          if (!sameLineMet) {
            numberCross += 1;
            sameLineMet = true;
          }
          sameComponentMet = false;
          break;
        default:
      }
      // In order to not miss crossings, we define thicker on the map the line we are tracing
      // 2 is the value attributed to a line in the bitmap
      map[k][xeq] += 2; // eslint-disable-line no-param-reassign
      map[k][xeq - 1] += 2; // eslint-disable-line no-param-reassign
      map[k][xeq + 1] += 2;// eslint-disable-line no-param-reassign
    }
  } // eslint-disable-line brace-style
  // Other cases (need to check on the top and bottom side of each pixel of the line)
  else {
    // Looking for the lowest x coordinate
    let dy;
    if (point1.x < point2.x) {
      dy = point1.y - point2.y;
      [xb, yb] = [point1.x, point1.y];
    } else {
      dy = point2.y - point1.y;
      [xb, yb] = [point2.x, point2.y];
    }
    // Calculating the slope in order to follow the line from the lowest x coordinate
    const slope = -dy / dx;
    // We begin the comparisons ith a little gap and end them with the same gap of 4 pixels to avoid counting crossing between a line and another, or a component, at the root of the line
    let fp = Math.round(yb + (3 * slope));
    // Following the line
    for (let k = xb + 4; k < (xb + dx) - 2; k += 1) {
      fp += slope;
      const v = Math.round(fp);
      const valueCurrentPixel = map[v][k];
      // Different cases according to what the line is crossing or not
      switch (valueCurrentPixel) {
        // Need to check if we are not avoiding for one case a line (or plenty of) crossed
        // Each time we deal with the pixel we have calculated, but also the one above and below it too
        case 0:
          if (((map[v - 1][k] % 2 === 0 && map[v - 1][k] !== 0) ||
          (map[v + 1][k] % 2 === 0 && map[v + 1][k] !== 0)) && !sameLineMet) {
            numberCross += 1;
            sameLineMet = true;
          } else if ((map[v - 1][k] === 0) && (map[v + 1][k] === 0)) {
            sameLineMet = false;
          }
          sameComponentMet = false;
          break;
        // If the line is overlapping a component
        case 1:
          if (!sameComponentMet) {
            numberOver += 1;
            sameComponentMet = true;
            sameLineMet = false;
          } else if ((map[v - 1][k] === 3 || map[v + 1][k] === 3) && !sameLineMet) {
            numberCross += 1;
            sameLineMet = true;
          } else if ((map[v - 1][k] === 3 || map[v + 1][k] === 3) && sameLineMet) {
            sameLineMet = true;
          } else {
            sameLineMet = false;
          }
          break;
        // If the line is explicitely crossing another line
        case 2:
          if (!sameLineMet) {
            numberCross += 1;
            sameLineMet = true;
          }
          sameComponentMet = false;
          break;
        // If the line is crossing another, overlapping a component
        case 3:
          if (!sameLineMet) {
            numberCross += 1;
            sameLineMet = true;
          }
          break;
        // If a line is crossing 2 others at the same time (rare)
        case 4:
          if (!sameLineMet) {
            numberCross += 1;
            sameLineMet = true;
          }
          sameComponentMet = false;
          break;
        // Normally all other cases are almost impossible...
        default:
          numberCross += 1;
          numberOver += 1;
      }
      // Adding to the map the new line traced
      // In order to not miss crossings, we define thicker on the map the line we are tracing
      // 2 is the value attributed on the bitmap for a pixel of a line
      map[v][k] += 2; // eslint-disable-line no-param-reassign
      map[v - 1][k] += 2; // eslint-disable-line no-param-reassign
      map[v + 1][k] += 2; // eslint-disable-line no-param-reassign
    }
  }
  sameLineMet = false;
  sameComponentMet = false;
  return [numberCross, numberOver];
}

// Knowing the disposition of files
// Returns the maximum number of file on a level (in order to layer the hierarchy with a symetry)
// and the array with the number of file in each level (which are the positions in the array)
function maxHierarchyFilesLevel(hierarchy) {
  // arrNum is an array where each position represents the same the rank in the hierarchy
  // On each rank is put the number of files in this rank
  const arrnum = [];
  for (let k = 0; k < hierarchy.length; k += 1) {
    arrnum.push(0);
  }
  for (let k = 0; k < hierarchy.length; k += 1) {
    arrnum[hierarchy[k][1]] += 1;
  }
  return [Math.max(...arrnum), arrnum];
}

// Returning random positions in an array
// In order to randomly order the files at each level
function randomList(num) {
  const rd = [];
  const rdList = [];
  for (let k = 0; k < num; k += 1) {
    rd.push(Math.random());
  }
  for (let k = 0; k < num; k += 1) {
    const max = rd.indexOf(Math.max(...rd));
    rd[max] = -1;
    rdList.push(max);
  }
  return rdList;
}

// Returning the type of component for knowing where to link the components
// Counting the number of js files linked without counting the ones common
function typeHtmlJs(fileSystem, name) {
  let ref = 'html';
  const [howMany, cmnJs] = numberOfJsFiles(fileSystem, name);
  if (howMany !== 0) {
    ref = `htmljs${howMany}`;
  }
  return [ref, cmnJs];
}

// Returning the SVG tag of component for the layering
// Counting the number of js files linked without counting the ones common
function tagHtmlJs(fileSystem, name) {
  let ref = '#htmljs';
  const [howMany, cmnJs] = numberOfJsFiles(fileSystem, name);
  if (howMany !== 0) {
    ref += howMany;
  }
  return [ref, cmnJs, howMany];
}

// Placing a hierarchy found on the client side, with random position for elements situated on the same level
// stepX & stepY are the scale of the grid in which you place on meeting points the top left hand corner of elements
// beginningPoint is the top left hand corner of the hierarchy
function placeHierarchyMap(map, hierarchy, typeEl, stepX, stepY, beginningPoint) {
  const [maxNbFilesLevel, nbFilesPerLevel] = maxHierarchyFilesLevel(hierarchy);
  // begX is the x-coordinate of the top element, placed in order to have a symetry at the end
  const begX = Math.round((maxNbFilesLevel / 2) - 0.5) + 1;
  let k = 1;
  let count = 1;
  const place = [];
  // Initializaton : top of hierarchy component placed
  fillComponentMap(map, typeEl, { x: beginningPoint.x + (begX * stepX), y: beginningPoint.y + stepY });
  let point = {};
  point.x = beginningPoint.x + (begX * stepX);
  point.y = beginningPoint.y + stepY;
  place.push(point);
  // List of lists ordered names of file in the hierarchy at each level (one list per level)
  const orderedNames = [hierarchy[0][0]];
  while (k < hierarchy.length) {
    // Number of files in the level
    const n = nbFilesPerLevel[count];
    // Randomization of positions in the level
    const order = randomList(n);
    const dep = begX - (Math.round((n / 2) + 0.5) - 1);
    // Calculation of the y-coordinate of the level
    const gridHeight = beginningPoint.y + ((1 + count) * stepY);
    let sym = 0;
    for (let j = 0; j < n; j += 1) {
      // Name of the file we are placng on the map
      const nameFile = hierarchy[k + order[j]][0];
      orderedNames.push(nameFile);
      // Calculation of the x-coordinate in order to have symetry
      const gridWidth = (dep + j + beginningPoint.x + sym) * stepX;
      // alert('Level :' + count + '  Name :' + nameFile + '  Point :' + gridWidth + ' / ' + gridHeight);
      point = {};
      point.x = gridWidth;
      point.y = gridHeight;
      place.push(point);
      fillComponentMap(map, typeEl, { x: gridWidth, y: gridHeight });
      if ((n % 2 === 0) && (dep + j === begX - 1)) {
        sym = 1;
      }
    }
    k += n;
    count += 1;
  }
  return [orderedNames, place];
}

// For a hierarchy given, randomly generates a layering and counts the number of lines crossed and components overlapped
// Returns the score and the order of components in the hierarchy for this score
function calculateScoreHierarchy(fileSystem, map, hierarchy, stepX, stepY, beginningPoint) {
  // Counter of lines crossed and components overlapping
  const count = {};
  count.linesCrossed = 0;
  count.componentsOverlapped = 0;
  const indexHtmlFiles = htmlFileList(fileSystem);
  const typeEl = typeHtmlJs(fileSystem, hierarchy[0][0]);
  const [orderedNames, place] = placeHierarchyMap(map, hierarchy, typeEl, stepX, stepY, beginningPoint);
  for (let k = 0; k < orderedNames.length; k += 1) {
    // We are identifying the component...
    const num = indexHtmlFiles.indexOf(orderedNames[k]);
    const position = place[k];
    // alert('place beg :' + position.x + ' / ' + position.y);
    // ... and tracing the links leaving from it ...
    for (let j = 0; j < fileSystem.files[num].hyperlinks.length; j += 1) {
      const towards = place[orderedNames.indexOf(fileSystem.files[num].hyperlinks[j])];
      const [beg, end] = arrowBetweenElements(typeHtmlJs(fileSystem, orderedNames[k]), position, typeHtmlJs(fileSystem, fileSystem.files[num].hyperlinks[j]), towards);
      const [a, b] = fillLineMap(map, beg, end);
      // ... obviously counting the problems encountered.
      count.linesCrossed += a;
      count.componentsOverlapped += b;
    }
  }
  // Score is defined this way but can be redefined
  // I decided to penalize strongly components overlapped
  return [orderedNames, place, (count.linesCrossed + (49 * count.componentsOverlapped)) / 50];
}

// const map = initiateMap(2000, 2000);
// alert(calculateScoreHierarchy(HTMLCLIENT, map, [['index', 0], ['home', 1], ['project-overview', 2], ['project-compare', 3], ['project-marking', 3]], 300, 300, { w: 0, h: 0 })[2]);

// Rough and heavy function that trace our bitmap in order to check if everything is okay when testing functions
// Return SVG code for bitmap layering
function drawFilledMap(map) {
  let text = '';
  for (let k = 0; k < map.length; k += 1) {
    for (let j = 0; j < map[0].length; j += 1) {
      switch (map[k][j]) {
        case 1:
          text += `<rect x="${j}" y="${k}" width="1" height="1" stroke="none" fill="blue"/>`;
          break;
        case 2:
          text += `<rect x="${j}" y="${k}" width="1" height="1" stroke="none" fill="red"/>`;
          break;
        case 3:
          text += `<rect x="${j}" y="${k}" width="1" height="1" stroke="none" fill="yellow"/>`;
          break;
        case 4:
          text += `<rect x="${j}" y="${k}" width="1" height="1" stroke="none" fill="green"/>`;
          break;
        default:
      }
    }
  }
  return text;
}

// const svgBody = drawFilledMap(map);

// Finding the best hierarchy (minimum of score) by iterating a certain number of times
function findBestHierarchyLayering(fileSystem, hierarchy, stepX, stepY, beginningPoint, iteration) {
  // Random high value, to be sure that it will decrease
  let min = 1000;
  let listNames;
  let listPlace;
  for (let k = 0; k < iteration; k += 1) {
    const bitMap = initiateMap(5000, 5000);
    const [names, place, score] = calculateScoreHierarchy(fileSystem, bitMap, hierarchy, stepX, stepY, beginningPoint);
    // Is the new score with the new configuration better than the old one
    if (score < min) {
      listNames = names.slice(0);
      listPlace = place.slice(0);
      min = score;
    }
  }
  // Return the best configuration : list of names from up to the bottom and from righ to left, places of each component in the same order, minimum score of the hierarchy
  return [listNames, listPlace, min];
}

// Sizing a text (a new line for each '-' separator) and writing svg instruction to layer it properly from the top left hand corner of a component
// separator is the character where all texts will be cut to go to a new line
// Returns the SVG code in order to put the name on a file already drawn
function writeFileName(name, newPlace, separator) {
  const arr = name.split(separator);
  let text = '';
  const test = arr.length - 1;
  // If text needs to be layered on multiple lines
  if (test > 0) {
    for (let k = 0; k < test; k += 1) {
      const t = `${arr[k] + separator}`;
      text += `<text x="${newPlace.x}" y="${newPlace.y + (k * 25)}" style="font-size:22px;">${t}</text>`;
    }
    text += `<text x="${newPlace.x}" y="${newPlace.y + (test * 25)}" style="font-size:22px;">${arr[test]}</text>`;
  } else {
    // If a line is sufficient
    text += `<text x="${newPlace.x}" y="${newPlace.y}" style="font-size:22px;">${name}</text>`;
  }
  return text;
}

// Placing a text on a html file
function layerHtmlFileName(data, place, separator) {
  return writeFileName(data, { x: place.x + 6, y: place.y + 30 }, separator);
}

// Placing all names on a js-'linked to html' file (it could be from one to 4 according to the svg patterns predefined)
function layerJsFileName(fileSystem, place, num, cmnJs, nbrJs, separator) {
  let text = '';
  let p = -1;
  // Layering differs according to the number of js files
  const espaceY = 130 / nbrJs;
  for (let i = 0; i < fileSystem.files[num].jsClientLinks.length; i += 1) {
    const name = fileSystem.files[num].jsClientLinks[i];
    if (cmnJs.indexOf(name) === -1) {
      p += 1;
      text += writeFileName(name, { x: place.x + 120, y: place.y + (espaceY * p) + 30 }, separator);
    }
  }
  return text;
}

// Layering of the best hierarchy in the diagram
// First tracing the components, then putting all the links
// space is the space between the extreme components of the hierarchy and the border that will be traced
// Returns the SVG code in order to draw the best layering found for a hierarchy given
function layerBestHierarchy(fileSystem, bitMapGeneral, hierarchy, stepX, stepY, beginningPoint, iteration, space, separator) {
  const [listNames, listPlace] = findBestHierarchyLayering(fileSystem, hierarchy, stepX, stepY, beginningPoint, iteration);
  const htmlFileIndex = htmlFileList(fileSystem);
  let text = '';
  // Defining the first coordinates that will be needed to trace the border
  // Tracing the border with the top left hand point (xb-yb) and the bottom right hand point (xe-ye)
  const border = {};
  border.xb = (beginningPoint.x + stepX) - space;
  border.yb = (beginningPoint.y + stepY) - space;
  border.ye = listPlace[listPlace.length - 1].y + 132 + space;
  let xBorderEnd = 0;
  // Firstly layer the elements (drawing and writing of names)
  for (let k = 0; k < listNames.length; k += 1) {
    const ref = tagHtmlJs(fileSystem, listNames[k]);
    text += `<use x="${listPlace[k].x}" y="${listPlace[k].y}" href="${ref[0]}" />`;
    text += layerHtmlFileName(listNames[k], listPlace[k], separator);
    text += layerJsFileName(fileSystem, listPlace[k], indexOfHtml(fileSystem, listNames[k]), ref[1], ref[2], separator);
    const test = listPlace[k].x + 220 + space;
    if (test > xBorderEnd) {
      xBorderEnd = test;
    }
  }
  // Second layer the lines
  for (let k = 0; k < listNames.length; k += 1) {
    const num = htmlFileIndex.indexOf(listNames[k]);
    for (let j = 0; j < fileSystem.files[num].hyperlinks.length; j += 1) {
      const refFrom = typeHtmlJs(fileSystem, listNames[k])[0];
      const towards = listPlace[listNames.indexOf(fileSystem.files[num].hyperlinks[j])];
      const refTowards = typeHtmlJs(fileSystem, fileSystem.files[num].hyperlinks[j])[0];
      const [beg, end] = arrowBetweenElements(refFrom, listPlace[k], refTowards, towards);
      text += `<line x1="${beg.x}" y1="${beg.y}" x2="${end.x}" y2="${end.y}" style="stroke:black; stroke-width:2px; fill:black; marker-end:url(#fleche)" />`;
    }
  }
  // Layering of the border (before the svg instructions of drawing components and links to be able to put a fill under these things)
  border.xBorderEnd = xBorderEnd;
  const textF = `<rect x="${border.xb}" y="${border.yb}" width="${border.xBorderEnd - border.xb}" height="${border.ye - border.yb}" style="fill:#F0F8FF; stroke:black; stroke-width:1px;" />${text}`;
  // Preparing output needed for another function
  const point = {};
  point.x = beginningPoint.x;
  point.y = listPlace[listPlace.length - 1].y;
  return [textF, point, xBorderEnd];
}

/* Iterates the layering of hierarchy for all hierarchies found on our fect
Known limitation : the x-coordinate of the center of each symetric hierarchy is defined based on each hierarchy and not on the maximum value of this coordinate for all hierarchies
*/
// Returns the SVG code for layering but also the beginning point for new things to layer after and the
// final x-coordinate to know where to stop tracing the border
function completeHierarchiesLayering(fileSystem, map, stepX, stepY, beginningPoint, iteration, space, separator) {
  let text = '';
  const allHierarchies = findHierarchies(fileSystem);
  let begPoint = beginningPoint;
  let xBorderEnd;
  for (let k = 0; k < allHierarchies.length; k += 1) {
    const [svg, nextPoint, xend] = layerBestHierarchy(fileSystem, map, allHierarchies[k], stepX, stepY, begPoint, iteration, space, separator);
    begPoint = {};
    begPoint = nextPoint;
    begPoint.y += stepY;
    text += svg;
    xBorderEnd = xend;
  }
  begPoint.y -= stepY;
  return [text, begPoint, xBorderEnd];
}

// Write svg instructions to layer files not included in a hierarchy
// xp is the layering x-coordinate of each disordered file
// begPoint is needed to know what is the y-coordinate of our layering
function layerClientDisorderedFiles(fileSystem, stepX, stepY, begPoint, xp, space, separator) {
  let text = '';
  const names = hierarchiesFilesnameList(findHierarchies(fileSystem));
  const files = findClientDisorderedFiles(names, fileSystem);
  const point = begPoint;
  const hierarchyNameList = [];
  const placeList = [];
  const border = {};
  border.xb = xp - space;
  border.yb = (begPoint.y + stepY) - space;
  border.xBorderEnd = xp + 220 + space;
  // Instructions to draw the components with their names
  for (let k = 0; k < files.length; k += 1) {
    for (let j = 0; j < files[k].length; j += 1) {
      const currentFile = files[k][j];
      const ref = tagHtmlJs(fileSystem, currentFile);
      text += `<use x="${xp}" y="${point.y + stepY}" href="${ref[0]}" />`;
      text += layerJsFileName(fileSystem, { x: xp, y: point.y + stepY }, indexOfHtml(fileSystem, currentFile), ref[1], ref[2], separator);
      point.y += stepY;
      hierarchyNameList.push(currentFile);
      const place = { x: xp, y: point.y };
      placeList.push(place);
      text += layerHtmlFileName(currentFile, place, separator);
    }
  }
  border.ye = begPoint.y + 132 + space;
  // Instructions to draw the links between the components
  for (let k = 0; k < files.length; k += 1) {
    for (let j = 0; j < files[k].length; j += 1) {
      const currentFile = files[k][j];
      const num = indexOfHtml(fileSystem, currentFile);
      for (let i = 0; i < fileSystem.files[num].hyperlinks.length; i += 1) {
        const refFrom = typeHtmlJs(fileSystem, currentFile)[0];
        const from = placeList[hierarchyNameList.indexOf(currentFile)];
        const refTo = typeHtmlJs(fileSystem, fileSystem.files[num].hyperlinks[i])[0];
        const to = placeList[hierarchyNameList.indexOf(fileSystem.files[num].hyperlinks[i])];
        const [beg, end] = arrowBetweenElements(refFrom, from, refTo, to);
        text += `<line x1="${beg.x}" y1="${beg.y}" x2="${end.x}" y2="${end.y}" style="stroke:black; stroke-width:2px; fill:black; marker-end:url(#fleche)" />`;
      }
    }
  }
  // Layering of the border (before the svg instructions of drawing components and links to be able to put a fill under these things)
  const textF = `<rect x="${border.xb}" y="${border.yb}" width="${border.xBorderEnd - border.xb}" height="${border.ye - border.yb}" style="fill:#F0F8FF; stroke:black; stroke-width:1px;" />${text}`;
  return [textF, begPoint.y + stepY];
}


// Write svg instructions in order to layer the 'Common Part'
// xBorderEnd is the x-coordinate of the end of the border in order to keep the symetry on
function layerClientCommonPart(fileSystem, place, stepX, stepY, xBorderEnd, space, separator) {
  let text = '';
  const common = findCommonClientFiles(fileSystem);
  let x = place.x + (stepX / 2);
  const y = place.y + stepY;
  let newPlace = {};
  newPlace.x = x;
  newPlace.y = y;
  const border = {};
  border.xb = x - space;
  border.yb = (place.y + stepY) - (3 * space);
  border.ye = y + 132 + space;
  border.xBorderEnd = xBorderEnd + (stepX / 2);
  // A loop for each category of common files : js, css and external
  for (let k = 0; k < common[0].length; k += 1) {
    text += `<use x="${newPlace.x}" y="${newPlace.y}" href="#js" />`;
    text += writeFileName(common[0][k], { x: newPlace.x + 6, y: newPlace.y + 25 }, separator);
    x += stepX;
    newPlace = {};
    newPlace.x = x;
    newPlace.y = y;
  }
  for (let k = 0; k < common[1].length; k += 1) {
    text += `<use x="${newPlace.x}" y="${newPlace.y}" href="#css" />`;
    text += writeFileName(common[1][k], { x: newPlace.x + 6, y: newPlace.y + 25 }, separator);
    x += stepX;
    newPlace = {};
    newPlace.x = x;
    newPlace.y = y;
  }
  for (let k = 0; k < common[2].length; k += 1) {
    text += `<use x="${newPlace.x}" y="${newPlace.y}" href="#ext" />`;
    text += writeFileName(common[2][k], { x: newPlace.x + 6, y: newPlace.y + 25 }, separator);
    x += stepX;
    newPlace = {};
    newPlace.x = x;
    newPlace.y = y;
  }
  const textF = `<rect x="${border.xb}" y="${border.yb}" width="${border.xBorderEnd - border.xb}" height="${border.ye - border.yb}" style="fill:#F0F8FF; stroke:black; stroke-width:1px;" /><text x="${border.xb + space}" y="${border.yb + (space * 2)}" style="font-size:30px;">Common Part</text>${text}`;
  return textF;
}

// Trace the client side based on the higher x and y coordinate
function traceClientSide(x, y, stepX, stepY) {
  return `<polyline  points="3,3 ${x + stepX},3 ${x + stepX},${y + (2 * stepY)} 3,${y + (2 * stepY)} 3,3" style="stroke:black; stroke-width:4px; fill:none; stroke-linecap:round; stroke-dasharray:15,15;"/><text x="20" y="55" style="font-size:40px;">Client Side</text>`;
}

// BLOCK OF COMMAND

const bitMapGeneral = initiateMap(5000, 5000);
// renameExternalComponents();
const [text, begPoint, xBorderEnd] = completeHierarchiesLayering(HTMLCLIENT, bitMapGeneral, 250, 200, { x: 0, y: 0 }, 5, 25, '-');
let svgBody = text;
const [disordered, begY] = layerClientDisorderedFiles(HTMLCLIENT, 250, 200, { x: 0, y: begPoint.y + 200 }, 500, 25, '-');
svgBody += disordered;
svgBody += layerClientCommonPart(HTMLCLIENT, { x: 0, y: begY }, 250, 200, xBorderEnd, 25, '-');
svgBody += traceClientSide(xBorderEnd, begY, 250, 200);

setElementContent('#graph', svgStart + svgBody + svgEnd);
