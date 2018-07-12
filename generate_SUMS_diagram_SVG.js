
const svgStart = `
<svg width="5000" height="5000" xmlns="http://www.w3.org/2000/svg">

<g id="js">
  <polyline points="1,1 85,1 119,34 119,131 1,131 1,0" style="fill:blue; stroke:black; stroke-width:3;" />
  <text x="28" y="28" style="font-size:25px;">JS</text>
</g>

<g id="html">
  <polyline points="1,1 85,1 119,34 119,131 1,131 1,0" style="fill:red; stroke:black; stroke-width:3;" />
  <text x="6" y="30" style="font-size:25px;">HTML</text>
</g>

<g id="db">
  <rect x="3" y="22" width="117" height="89" style="fill:green;" />
  <ellipse cx="61" cy="22" rx="59" ry="20" style="stroke:black; stroke-width:3; fill:white;"/>
  <ellipse cx="61" cy="22" rx="59" ry="20" style="stroke:black; stroke-width:3; fill:green;"/>
  <path d="M2,22 v0,87" style="stroke:black; stroke-width:3;"/>
  <path d="M120,22 v0,87" style="stroke:black; stroke-width:3;"/>
  <path d="M2,51 a59,20 0 1,0 118,0" style="stroke:black; stroke-width:3; fill:green;"/>
  <path d="M2,80 a59,20 0 1,0 118,0" style="stroke:black; stroke-width:3; fill:green;"/>
  <path d="M2,108 a59,20 0 1,0 118,0" style="stroke:black; stroke-width:3; fill:green;" />
  <path d="M2,108 a59,20 0 1,0 118,0" style="stroke:black; stroke-width:3; fill:green;" />
  <text x="38" y="29" style="font-size:25px;">SQL</text>
</g>

<g id="folder">
  <polyline points="2,30 2,2 60,2 60,30" style="fill:#C0C0C0; fill-opacity:0.3; stroke:black; stroke-width:3; stroke-linejoin:round;" />
  <rect x="2" y="30" width="100" height="100" style="fill:#C0C0C0; fill-opacity:0.3; stroke:black; stroke-width:3; stroke-linejoin:round;" />
  <text x="10" y="21" style="font-size:15px;">Folder</text>
</g>

<g id="htmljs1">
  <polyline points="81,1 185,1 219,34 219,34 219,131 81,131 81,0" style="fill:blue; stroke:black; stroke-width:3;" />
  <text x="120" y="30" style="font-size:25px;">JS</text>
  <polyline points="1,1 80,1 114,39 114,39 114,131 1,131 1,0" style="fill:red; stroke:black; stroke-width:3;" />
  <text x="6" y="30" style="font-size:25px;">HTML</text>
</g>

<g id="htmljs2">
  <polyline points="81,1 185,1 219,34 219,34 219,131 81,131 81,0" style="fill:blue; stroke:black; stroke-width:3;" />
  <polyline points="81,66 185,66 219,100 219,100 219,131 81,131 81,65" style="fill:blue; stroke:black; stroke-width:3;" />
  <text x="120" y="30" style="font-size:25px;">JS</text>
  <text x="120" y="95" style="font-size:25px;">JS</text>
  <polyline points="1,1 80,1 114,39 114,39 114,131 1,131 1,0" style="fill:red; stroke:black; stroke-width:3;" />
  <text x="6" y="30" style="font-size:25px;">HTML</text>
</g>

<g id="htmljs3">
  <polyline points="81,1 185,1 219,34 219,131 81,131 81,0" style="fill:blue; stroke:black; stroke-width:3;" />
  <polyline points="81,45 185,45 219,78 219,131 81,131 81,0" style="fill:blue; stroke:black; stroke-width:3;" />
  <polyline points="81,89 185,89 219,122 219,131 81,131 81,0" style="fill:blue; stroke:black; stroke-width:3;" />
  <text x="120" y="30" style="font-size:25px;">JS</text>
  <text x="120" y="74" style="font-size:25px;">JS</text>
  <text x="120" y="118" style="font-size:25px;">JS</text>
  <polyline points="0,1 80,1 114,39 114,39 114,131 1,131 1,0" style="fill:red; stroke:black; stroke-width:3;" />
  <text x="6" y="30" style="font-size:25px;">HTML</text>
</g>

<g id="htmljs4">
  <polyline points="81,1 185,1 219,34 219,131 81,131 81,0" style="fill:blue; stroke:black; stroke-width:3;" />
  <polyline points="81,34 185,34 219,67 219,131 81,131 81,0" style="fill:blue; stroke:black; stroke-width:3;" />
  <polyline points="81,67 185,67 219,100 219,131 81,131 81,0" style="fill:blue; stroke:black; stroke-width:3;" />
  <polyline points="81,100 185,100 217,131 81,131 81,0" style="fill:blue; stroke:black; stroke-width:3;" />
  <text x="120" y="25" style="font-size:25px;">JS</text>
  <text x="120" y="58" style="font-size:25px;">JS</text>
  <text x="120" y="91" style="font-size:25px;">JS</text>
  <text x="120" y="124" style="font-size:25px;">JS</text>
  <polyline points="1,1 80,1 114,39 114,39 114,131 1,131 1,0" style="fill:red; stroke:black; stroke-width:3;" />
  <text x="6" y="30" style="font-size:25px;">HTML</text>
</g>

<marker id="fleche" markerWidth="24" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto" refX="0" refY="5">
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
      jsClientLinks: ['admin', 'common'],
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

/* SVG
Drawing of both "Client side" and "Server side" (will be done at the end
of the construction, when all components will be put at their own place
*/

// let svgBody = '<rect x="1" y="1" width="1998" height="998" style="fill:white; stroke:black; stroke-width:2px;" /><path d="M1000,0 v0,1000" style="stroke:black; stroke-width:4px; stroke-dasharray:5,5;" />';
// svgBody += '<text x="20" y="40" style="font-size:30px">Client side</text><text x="1850" y="40" style="font-size:30px">Server side</text>';

// Add to the html page tag given the text given
function addToHtmlPage(tag, text) {
  document.querySelector(tag).innerHTML = text;
}

/* 1st method :
Detecting hierarchy between HTML files within the client side

Known limitation : if a hierarchy owns more than one file on the top of
the hierachy, a hierarchy will be  find for each of the 'top files'
(no gathering of hierarchies is implemented)
*/

// Creation of an index for HTML files
function htmlFileList(obj) {
  const indexHTML = [];
  for (let k = 0; k < obj.files.length; k += 1) {
    indexHTML.push(obj.files[k].name);
  }
  return indexHTML;
}

// List of html client files names
function hyperlinkedHtml(obj) {
  const hyp = [];
  for (let k = 0; k < obj.files.length; k += 1) {
    for (let j = 0; j < obj.files[k].hyperlinks.length; j += 1) {
      hyp.push(obj.files[k].hyperlinks[j]);
    }
  }
  return hyp;
}

// Find the top of the hierarchy
function findTopHierarchy(obj) {
  const toph = [];
  const hyp = hyperlinkedHtml(obj);
  for (let k = 0; k < obj.files.length; k += 1) {
    const s = obj.files[k].name;
    if (hyp.indexOf(s) === -1 && obj.files[k].hyperlinks.length !== 0) {
      toph.push(s);
    }
  }
  return toph;
}

// Find all the hierarchies on client side
function findHierarchies(obj) {
  const globalNameList = [];
  const toph = findTopHierarchy(obj);
  const indexHTML = htmlFileList(obj);
  // List of all the hierarchies in our client side
  const allHierarchies = [];
  const nameList = [];
  // Doing the loop on all possible hierarchies found before
  for (const topHier of toph) {
    // Rank in the hierarchy
    let rk = 0;
    let currentIndexFile = 0;
    // List with names of elements already seen in the hierarchy
    nameList.push(topHier);
    globalNameList.push(topHier);
    const hierarchy = [[topHier, rk]];
    // Number of new files added
    let n = 1;
    let nbis = 1;
    let cur = topHier;
    // Take the last element on the list to search for where it is hyperlinking
    while (currentIndexFile < hierarchy.length) {
      currentIndexFile += 1;
      rk += 1;
      // Iteration on all news files added to the hierarchy the step before
      for (let m = 0; m < nbis; m += 1) {
        const hyp = obj.files[indexHTML.indexOf(cur)].hyperlinks;
        // Searching for the files hyperlinked which are not already ordered
        for (const file of hyp) {
          if (nameList.indexOf(file) === -1) {
            hierarchy.push([file, rk]);
            nameList.push(file);
            globalNameList.push(file);
            n += 1;
          }
        }
        n -= 1;
        cur = nameList[currentIndexFile + m];
      }
      nbis = n;
      n = 1;
    }
    allHierarchies.push(hierarchy);
  }
  return [allHierarchies, nameList];
}

/* 2nd method :
Detecting files which might be in the 'common part' of the client side because
they are applying to a majority of client side files. Including calculation
of the 'common membership threshold'.

Known limitation : here threshold calculation is based on the gap of
frequencies of the JS files only.
*/

// Returns the name and frequency of use of each file
function frequencyUsedFiles(obj) {
  const jsName = [];
  const cssName = [];
  const extName = [];
  const jsFreq = [];
  const cssFreq = [];
  const extFreq = [];
  let n = 0;
  // Counting of differents files linked in each category
  for (const el of obj.files) {
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
function commonThreshold(obj) {
  const [, [jsFreq, cssFreq, extFreq]] = frequencyUsedFiles(obj);
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
function findCommonClientFiles(obj) {
  const threshold = commonThreshold(obj);
  const [[jsName, cssName, extName], [jsFreq, cssFreq, extFreq]] = frequencyUsedFiles(obj);
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

/* 3rd method
Detecting 'toolbox' on server side
*/

// Find 'toolbox' files, namely, files only called by others
function findToolbox(obj) {
  const toolbox = [];
  for (const el of obj.files) {
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

// For unhierarchized files, find which are linked and those who are alone
function findDisorderedFiles(nameList, obj) {
  const hierarchyNameList = nameList.slice(0);
  let li = [];
  const otherBoxes = [];
  for (const el of obj.files) {
    if (hierarchyNameList.indexOf(el.name) === -1) {
      li = [];
      hierarchyNameList.push(el.name);
      li.push(el.name);
      for (const file of el.hyperlinks) {
        hierarchyNameList.push(file);
        li.push(file);
      }
      otherBoxes.push(li);
    }
  }
  return otherBoxes;
}

/* 5th method
Renaming of external links because they often have difficult names

Known limitation : the user have to type the name he wants for the file,
a database could be implemented
*/

// Ask the user for a substitue name for external files
function renameExternalComponents() {
  for (let k = 0; k < EXTERNAL.files.length; k += 1) {
    let newname = prompt('Enter the shortcut name for \"' + EXTERNAL.files[k].name + '\" :');
    EXTERNAL.files[k].name = newname;
  }
}

/* List of caracteristics of SVG pre-defined patterns that will be called by
javascript
Patterns will be placed according to the coordinates of their
top left hand side corner, as it is done in svg
*/

const phw = [
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
    linkPoints: [[105, 0], [210, 65], [105, 130], [0, 65]],
  },
  {
    name: 'htmljs3',
    height: 132,
    width: 220,
    linkPoints: [[105, 0], [210, 65], [105, 130], [0, 65]],
  },
  {
    name: 'htmljs4',
    height: 132,
    width: 220,
    linkPoints: [[105, 0], [210, 65], [105, 130], [0, 65]],
  },
];

/* Function which finds the relative position between two elements and returns
an integer according to the position map below
map of positions in the space :
        |
        1
    8   |   2
--7-----O-----3--
    6   |   4
        5
        |
*/
function relPos(point1, point2) {
  let pos = 0;
  const cx = point1.x - point2.x;
  const cy = point1.y - point2.y;
  if (cx === 0 && cy === 0) {
    // Elements have the same position
    return 0;
  } else if (cx === 0) {
    pos = cy > 0 ? 1 : 5;
  } else if (cy === 0) {
    pos = cx > 0 ? 7 : 3;
  } else if (cx > 0) {
    pos = cy > 0 ? 8 : 6;
  } else {
    pos = cy > 0 ? 2 : 4;
  }
  return pos;
}

// Function which according to the relative position of 2 elements,
// returns the best arrow between them
function arrowBetween(el1, point1, el2, point2) {
  let n1 = 0;
  let n2 = 0;
  for (let k = 0; k < phw.length; k += 1) {
    const { name } = phw[k];
    if (name === el1) {
      n1 = k;
    }
    if (name === el2) {
      n2 = k;
    }
  }
  const pos = relPos(point1, point2);
  const dx = Math.abs(point1.x - point2.x);
  let dy;
  if (point1.x < point2.x) {
    dy = point1.y - point2.y;
  } else {
    dy = point2.y - point1.y;
  }
  // Calculating the slope in order to follow the line from the lowest x coordinate
  const slope = dy / dx;
  const point3 = {};
  const point4 = {};
  switch (pos) {
    case 1:
      point3.x = phw[n1].linkPoints[0][0] + point1.x;
      point3.y = phw[n1].linkPoints[0][1] + point1.y;
      point4.x = phw[n2].linkPoints[2][0] + point2.x;
      point4.y = (phw[n2].linkPoints[2][1] + point2.y) + 9;
      break;
    case 2:
      point3.x = phw[n1].linkPoints[0][0] + point1.x;
      point3.y = phw[n1].linkPoints[0][1] + point1.y;
      point4.x = (phw[n2].linkPoints[3][0] + point2.x) - 4;
      point4.y = (phw[n2].linkPoints[3][1] + point2.y) + (4 * slope);
      break;
    case 3:
      point3.x = phw[n1].linkPoints[1][0] + point1.x;
      point3.y = phw[n1].linkPoints[1][1] + point1.y;
      point4.x = (phw[n2].linkPoints[3][0] + point2.x) - 9;
      point4.y = phw[n2].linkPoints[3][1] + point2.y;
      break;
    case 4:
      point3.x = phw[n1].linkPoints[2][0] + point1.x;
      point3.y = phw[n1].linkPoints[2][1] + point1.y;
      point4.x = (phw[n2].linkPoints[3][0] + point2.x) - 4;
      point4.y = (phw[n2].linkPoints[3][1] + point2.y) + (4 * slope);
      break;
    case 5:
      point3.x = phw[n1].linkPoints[2][0] + point1.x;
      point3.y = phw[n1].linkPoints[2][1] + point1.y;
      point4.x = phw[n2].linkPoints[0][0] + point2.x;
      point4.y = (phw[n2].linkPoints[0][1] + point2.y) - 9;
      break;
    case 6:
      point3.x = phw[n1].linkPoints[2][0] + point1.x;
      point3.y = phw[n1].linkPoints[2][1] + point1.y;
      point4.x = (phw[n2].linkPoints[1][0] + point2.x) + 4;
      point4.y = (phw[n2].linkPoints[1][1] + point2.y) - (4 * slope);
      break;
    case 7:
      point3.x = phw[n1].linkPoints[3][0] + point1.x;
      point3.y = phw[n1].linkPoints[3][1] + point1.y;
      point4.x = (phw[n2].linkPoints[1][0] + point2.x) + 9;
      point4.y = phw[n2].linkPoints[1][1] + point2.y;
      break;
    case 8:
      point3.x = phw[n1].linkPoints[0][0] + point1.x;
      point3.y = phw[n1].linkPoints[0][1] + point1.y;
      point4.x = (phw[n2].linkPoints[1][0] + point2.x) + 4;
      point4.y = (phw[n2].linkPoints[1][1] + point2.y) - (4 * slope);
      break;
    default:
      return 'Bug somewhere !';
  }
  return [point3, point4];
}

/* Tracing test
svgBody += '<use x="30" y="80" xlink:href="#db"/><use x="300" y="200" xlink:href="#htmljs3"/>';
let arr = arrowBetween('db', [30, 80], 'htmljs3', [300, 200]);
svgBody += `<line x1="${arr[0][0]}" y1="${arr[0][1]}" x2="${arr[1][0]}" y2="${arr[1][1]}" style="stroke:black; stroke-width:1px;">`;
*/

// Layering ellements on the drawing
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

// Function registering the component given in the array
function fillComponent(arr, name, point) {
  let n = 0;
  for (let k = 0; k < phw.length; k += 1) {
    const test = phw[k].name;
    if (test === name) {
      n = k;
    }
  }
  for (let g = point.y; g < point.y + phw[n].height; g += 1) {
    for (let i = point.x; i < point.x + phw[n].width; i += 1) {
      arr[g][i] = 1; // eslint-disable-line no-param-reassign
    }
  }
}

// Function tracing the map and counting the different numbers
function fillLine(arr, point1, point2) {
  let yb;
  let xb;
  const dx = Math.abs(point1.x - point2.x);
  // Number of crossing lines
  let numberCross = 0;
  // Number of overlapped components
  let numberOver = 0;
  // Boolean to know if the line or component that we meet in the graph has already been counted or not
  let samecomp = false;
  let sameline = false;
  // Case of a vertical line
  if (dx === 0) {
    const xeq = point1.x;
    const dy = Math.abs(point1.y - point2.y);
    yb = point1.y < point2.y ? point1.y : point2.y;
    for (let k = yb + 5; k < yb + (dy - 2); k += 1) {
      const test = arr[k][xeq];
      switch (test) {
        case 0:
          if (((arr[k][xeq - 1] % 2 === 0 && arr[k][xeq - 1] !== 0) ||
          (arr[k][xeq + 1] % 2 === 0 && arr[k][xeq + 1] !== 0)) && !sameline) {
            numberCross += 1;
            sameline = true;
          } else if (arr[k][xeq - 1] === 0 && arr[k][xeq + 1] === 0) {
            sameline = false;
          }
          samecomp = false;
          break;
        case 1:
          if (!samecomp) {
            numberOver += 1;
            samecomp = true;
            sameline = false;
          } else if ((arr[k][xeq - 1] === 3 || arr[k][xeq + 1] === 3) && !sameline) {
            numberCross += 1;
            sameline = true;
          } else if ((arr[k][xeq - 1] === 3 || arr[k][xeq + 1] === 3) && sameline) {
            sameline = true;
          } else {
            sameline = false;
          }
          break;
        case 2:
          if (!sameline) {
            numberCross += 1;
            sameline = true;
          }
          samecomp = false;
          break;
        case 3:
          if (!sameline) {
            numberCross += 1;
            sameline = true;
          }
          break;
        case 4:
          if (!sameline) {
            numberCross += 1;
            sameline = true;
          }
          samecomp = false;
          break;
        default:
      }
      arr[k][xeq] += 2; // eslint-disable-line no-param-reassign
      arr[k][xeq - 1] += 2; // eslint-disable-line no-param-reassign
      arr[k][xeq + 1] += 2;// eslint-disable-line no-param-reassign
    }
  }
  // Other cases
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
    let fp = Math.round(yb + (3 * slope));
    // Following the line
    for (let k = xb + 4; k < (xb + dx) - 2; k += 1) {
      fp += slope;
      const v = Math.round(fp);
      const testb = arr[v][k];
      // Different cases according to what the line is crossing or not
      switch (testb) {
        // Need to check if we are not avoiding for one case a line (or plenty of) crossed
        case 0:
          if (((arr[v - 1][k] % 2 === 0 && arr[v - 1][k] !== 0) ||
          (arr[v + 1][k] % 2 === 0 && arr[v + 1][k] !== 0)) && !sameline) {
            numberCross += 1;
            sameline = true;
          } else if ((arr[v - 1][k] === 0) && (arr[v + 1][k] === 0)) {
            sameline = false;
          }
          samecomp = false;
          break;
        // If the line is overlapping a component
        case 1:
          if (!samecomp) {
            numberOver += 1;
            samecomp = true;
            sameline = false;
          } else if ((arr[v - 1][k] === 3 || arr[v + 1][k] === 3) && !sameline) {
            numberCross += 1;
            sameline = true;
          } else if ((arr[v - 1][k] === 3 || arr[v + 1][k] === 3) && sameline) {
            sameline = true;
          } else {
            sameline = false;
          }
          break;
        // If the line is explicitely crossing another line
        case 2:
          if (!sameline) {
            numberCross += 1;
            sameline = true;
          }
          samecomp = false;
          break;
        // If the line is crossing another, overlapping a component
        case 3:
          if (!sameline) {
            numberCross += 1;
            sameline = true;
          }
          break;
        // If a line is crossing 2 others at the sami time (rare)
        case 4:
          if (!sameline) {
            numberCross += 1;
            sameline = true;
          }
          samecomp = false;
          break;
        // Normally all other cases are almost impossible...
        default:
          return 0;
      }
      // Adding to the map the new line traced
      arr[v][k] += 2; // eslint-disable-line no-param-reassign
      arr[v - 1][k] += 2; // eslint-disable-line no-param-reassign
      arr[v + 1][k] += 2; // eslint-disable-line no-param-reassign
    }
  }
  sameline = false;
  samecomp = false;
  return [numberCross, numberOver];
}

// Placing the hierarchies found on the client side
function maxLevel(hier) {
  const arrnum = [];
  for (let k = 0; k < hier.length; k += 1) {
    arrnum.push(0);
  }
  for (let k = 0; k < hier.length; k += 1) {
    arrnum[hier[k][1]] += 1;
  }
  return [Math.max(...arrnum), arrnum];
}

// Returning random positions in an array
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

// Placing a hierarchy found on the client side, with random position for elements situated on the same level
// stepX & stepY are the scale of the grid in which you place on meeting points the top left hand corner of elements
function placeHierarchy(map, hierarchy, stepX, stepY, initBeg) {
  const [maxiL, arrnum] = maxLevel(hierarchy);
  // x-coordinate of the top element, placed n order to have a symetry at the end
  const begX = Math.round((maxiL / 2) - 0.5) + 1;
  let k = 1;
  let count = 1;
  const place = [];
  // Initializaton : top of hierarchy component placed
  fillComponent(map, 'htmljs1', { x: (initBeg.w + begX) * stepX, y: (initBeg.h + 1) * stepY });
  let point = {};
  point.x = (initBeg.w + begX) * stepX;
  point.y = (initBeg.h + 1) * stepY;
  place.push(point);
  // List of lists ordered names of file in the hierarchy at each level (one list per level)
  const orderedNames = [hierarchy[0][0]];
  while (k < hierarchy.length) {
    // Number of files in the level
    const n = arrnum[count];
    // Randomization of positions in the level
    const order = randomList(n);
    const dep = begX - (Math.round((n / 2) + 0.5) - 1);
    // Calcultaion of the y-coordinate of the level
    const gridHeight = (initBeg.y + 1 + count) * stepY;
    let sym = 0;
    for (let j = 0; j < n; j += 1) {
      // Name of the file we are placng on the map
      const nameFile = hierarchy[k + order[j]][0];
      orderedNames.push(nameFile);
      // Calculation of the x-coordinate in order to have symetry
      const gridWidth = (dep + j + initBeg.x + sym) * stepX;
      // alert('Level :' + count + '  Name :' + nameFile + '  Point :' + gridWidth + ' / ' + gridHeight);
      point = {};
      point.x = gridWidth;
      point.y = gridHeight;
      place.push(point);
      fillComponent(map, 'htmljs1', { x: gridWidth, y: gridHeight });
      if ((n % 2 === 0) && (dep + j === begX - 1)) {
        sym = 1;
      }
    }
    k += n;
    count += 1;
  }
  return [orderedNames, place];
}

// const map = initiateMap(1000, 2000);
// alert(placeHierarchy(map, [['index', 0], ['home', 1], ['index', 1], ['project-compare', 2], ['project-marking', 2], ['project-overview', 2]], 200, 200, { w: 0, h: 0 })[1]);

// For a hierarchy given, randomly generates a layering and counts the number of lines crossed and components overlapped
// Returns the score and the order of components in the hierarchy for this score
function calculateScoreHierarchy(obj, map, hierarchy, stepX, stepY, initBeg) {
  // Counter of lines crossed and components overlapping
  const count = {};
  count.linesCrossed = 0;
  count.componentsOverlapped = 0;
  const index = htmlFileList(obj);
  const [orderedNames, place] = placeHierarchy(map, hierarchy, stepX, stepY, initBeg);
  for (let k = 0; k < orderedNames.length; k += 1) {
    // We are identifying the component...
    const num = index.indexOf(orderedNames[k]);
    const position = place[k];
    // ... and tracing the links leaving from it ...
    for (let j = 0; j < obj.files[num].hyperlinks.length; j += 1) {
      const towards = place[orderedNames.indexOf(obj.files[num].hyperlinks[j])];
      const [beg, end] = arrowBetween('htmljs1', position, 'htmljs1', towards);
      const [a, b] = fillLine(map, beg, end);
      // ... obviously counting the problems encountered.
      count.linesCrossed += a;
      count.componentsOverlapped += b;
    }
  }
  // Score is defined this way but can be redefined
  return [orderedNames, place, (count.linesCrossed + (2 * count.componentsOverlapped)) / 3];
}

// const map = initiateMap(2000, 2000);
// alert(calculateScoreHierarchy(HTMLCLIENT, map, [['index', 0], ['home', 1], ['project-overview', 2], ['project-compare', 3], ['project-marking', 3]], 300, 300, { w: 0, h: 0 })[2]);

// Rough and heavy function that trace our bitmap in order to check if everything is okay when testing functions
function traceBitmap(mmm) {
  let text = '';
  for (let k = 0; k < mmm.length; k += 1) {
    for (let j = 0; j < mmm[0].length; j += 1) {
      switch (mmm[k][j]) {
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

// const svgBody = traceBitmap(map);

// Finding the best hierarchy (minimum of score) by iterating a certain number of times
function bestHierarchy(obj, hierarchy, stepX, stepY, initBeg, it) {
  let min = 1000;
  let listNames;
  let listPlace;
  for (let k = 0; k < it; k += 1) {
    const bitMap = initiateMap(5000, 5000);
    const [names, place, score] = calculateScoreHierarchy(obj, bitMap, hierarchy, stepX, stepY, initBeg);
    if (score < min) {
      listNames = names.slice(0);
      listPlace = place.slice(0);
      min = score;
    }
  }
  return [listNames, listPlace, min];
}

// Layering of the best hierarchy in the diagram
// First tracing the components, then putting all the links
function layerFinalHierarchy(obj, bitMapGeneral, hierarchy, stepX, stepY, initBeg, it) {
  const [listNames, listPlace] = bestHierarchy(obj, hierarchy, stepX, stepY, initBeg, it);
  const index = htmlFileList(obj);
  let text = '';
  // Firstly layer the elements
  for (let k = 0; k < listNames.length; k += 1) {
    text += `<use x="${listPlace[k].x}" y="${listPlace[k].y}" href="#htmljs1" />`;
  }
  // Second layer the lines
  for (let k = 0; k < listNames.length; k += 1) {
    const num = index.indexOf(listNames[k]);
    for (let j = 0; j < obj.files[num].hyperlinks.length; j += 1) {
      const towards = listPlace[listNames.indexOf(obj.files[num].hyperlinks[j])];
      const [beg, end] = arrowBetween('htmljs1', listPlace[k], 'htmljs1', towards);
      text += `<line x1="${beg.x}" y1="${beg.y}" x2="${end.x}" y2="${end.y}" style="stroke:black; stroke-width:3px; fill:black; marker-end:url(#fleche)" />`;
    }
  }
  return text;
}

// addToHtmlPage('#graph', svgStart + svgBody + svgEnd);
