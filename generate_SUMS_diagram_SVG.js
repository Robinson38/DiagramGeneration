
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
      jsclientlinks: ['index'],
      jsserverlinks: [],
      csslinks: ['sums'],
      hyperlinks: ['home'],
      externallinks: ['apis.google.com/js/platform.js'],
    },
    {
      name: 'home',
      jsclientlinks: ['home', 'common'],
      jsserverlinks: ['statuses', 'api'],
      csslinks: ['sums'],
      hyperlinks: ['project-overview'],
      externallinks: ['apis.google.com/js/platform.js'],
    },
    {
      name: 'project-overview',
      jsclientlinks: ['project-overview', 'common'],
      jsserverlinks: ['statuses', 'api'],
      csslinks: ['sums'],
      hyperlinks: ['home', 'project-marking', 'project-compare'],
      externallinks: ['apis.google.com/js/platform.js'],
    },
    {
      name: 'project-marking',
      jsclientlinks: ['project-marking', 'common'],
      jsserverlinks: ['marking-calculations', 'api'],
      csslinks: ['sums'],
      hyperlinks: ['home', 'project-overview'],
      externallinks: ['apis.google.com/js/platform.js'],
    },
    {
      name: 'project-compare',
      jsclientlinks: ['project-compare', 'common'],
      jsserverlinks: ['marking-calculations', 'api'],
      csslinks: ['sums'],
      hyperlinks: ['home', 'project-overview'],
      externallinks: ['apis.google.com/js/platform.js'],
    },
    {
      name: 'admin',
      jsclientlinks: ['admin', 'common', 'sort-table'],
      jsserverlinks: ['statuses', 'api'],
      csslinks: ['sums'],
      hyperlinks: ['admin-project-overview'],
      externallinks: ['apis.google.com/js/platform.js'],
    },
    {
      name: 'admin-project-overview',
      jsclientlinks: ['admin', 'common'],
      jsserverlinks: ['statuses', 'api'],
      csslinks: ['sums'],
      hyperlinks: ['admin'],
      externallinks: ['apis.google.com/js/platform.js'],
    },
    {
      name: 'criteria',
      jsclientlinks: ['criteria', 'common'],
      jsserverlinks: ['api'],
      csslinks: ['sums'],
      hyperlinks: [],
      externallinks: ['apis.google.com/js/platform.js'],
    },
  ],
};

const JSSERVER = {
  extension: '.js',
  files: [
    {
      name: 'index',
      jsdatalinks: ['config'],
      jsmethodslinks: ['emails', 'NotFoundError', 'api'],
      externallinks: [],
    },
    {
      name: 'api',
      jsdatalinks: ['config'],
      jsmethodslinks: ['tools', 'marking-calculations', 'NotFoundError', 'BadRequestError', 'ConflictError', 'ForbiddenError', 'db-datastore'],
      externallinks: [],
    },
    {
      name: 'config',
      jsdatalinks: [],
      jsmethodslinks: [],
      externallinks: [],
    },
    {
      name: 'emails',
      jsdatalinks: ['config'],
      jsmethodslinks: ['tools'],
      externallinks: ['@sendgrid/mail'],
    },
    {
      name: 'tools',
      jsdatalinks: [],
      jsmethodslinks: [],
      externallinks: [],
    },
    {
      name: 'db-datastore',
      jsdatalinks: ['config'],
      jsmethodslinks: ['tools', 'emails', 'marking-calculations', 'ConflictError', 'statuses'],
      externallinks: ['@google-cloud/databstore'],
    },
    {
      name: 'statuses',
      jsdatalinks: [],
      jsmethodslinks: [],
      externallinks: [],
    },
    {
      name: 'marking-calculations',
      jsdatalinks: [],
      jsmethodslinks: [],
      externallinks: [],
    },
    {
      name: 'BadRequest',
      jsdatalinks: [],
      jsmethodslinks: [],
      externallinks: [],
    },
    {
      name: 'ConflictError',
      jsdatalinks: [],
      jsmethodslinks: [],
      externallinks: [],
    },
    {
      name: 'ForbiddenError',
      jsdatalinks: [],
      jsmethodslinks: [],
      externallinks: [],
    },
    {
      name: 'NotFoundError',
      jsdatalinks: [],
      jsmethodslinks: [],
      externallinks: [],
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

let svgBody = '<rect x="1" y="1" width="1998" height="998" style="fill:white; stroke:black; stroke-width:2px;" /><path d="M1000,0 v0,1000" style="stroke:black; stroke-width:4px; stroke-dasharray:5,5;" />';
// svgBody += '<text x="20" y="40" style="font-size:30px">Client side</text><text x="1850" y="40" style="font-size:30px">Server side</text>';

/* 1st method :
Detecting hierarchy between HTML files within the client side

Known limitation : if a hierarchy owns more than one file on the top of
the hierachy, a hierarchy will be  find for each of the 'top files'
(no gathering of hierarchies is implemented)
*/

// Creation of an index for HTML files
function htmlFileList() {
  const indexHTML = [];
  for (let k = 0; k < HTMLCLIENT.files.length; k += 1) {
    indexHTML.push(HTMLCLIENT.files[k].name);
  }
  return indexHTML;
}

// List of html client files names
function hyperlinkedHtml() {
  const hyp = [];
  for (let k = 0; k < HTMLCLIENT.files.length; k += 1) {
    for (let j = 0; j < HTMLCLIENT.files[k].hyperlinks.length; j += 1) {
      hyp.push(HTMLCLIENT.files[k].hyperlinks[j]);
    }
  }
  return hyp;
}

// Find the top of the hierarchy
function findTopHierarchy() {
  const toph = [];
  let s;
  const hyp = hyperlinkedHtml();
  for (let k = 0; k < HTMLCLIENT.files.length; k += 1) {
    s = HTMLCLIENT.files[k].name;
    if (hyp.indexOf(s) === -1 && HTMLCLIENT.files[k].hyperlinks.length !== 0) {
      toph.push(s);
    }
  }
  return toph;
}

// Find all the hierarchies on client side
function findHierarchies() {
  const globalnamelist = [];
  let j = 0;
  const toph = findTopHierarchy();
  // List of all the hierarchies in our client side
  const allhierarchies = [];
  // Doing the loop on all possible hierarchies found before
  for (let k = 0; k < toph.length; k += 1) {
    // Rank in the hierarchy
    let rk = 1;
    let cur = toph[k];
    // List with names of elements already seen in the hierarchy
    const namelist = [cur];
    globalnamelist.push(cur);
    const hierarchy = [[cur, rk]];
    // Number of new files added
    let n = 1;
    let nbis = 1;
    // Take the last element on the list to search for where it is hyperlinking
    while (j < hierarchy.length) {
      j += 1;
      rk += 1;
      // Iteration on all news files added to the hierarchy the step before
      for (let m = 0; m < nbis; m += 1) {
        const indexHTML = htmlFileList();
        const hyp = HTMLCLIENT.files[indexHTML.indexOf(cur)].hyperlinks;
        // Searching for the files hyperlinked which are not already ordered
        for (let file of hyp) {
          if (namelist.indexOf(file) === -1) {
            hierarchy.push([file, rk]);
            namelist.push(file);
            globalnamelist.push(file);
            n += 1;
          }
        }
        n -= 1;
        cur = namelist[j + m];
      }
      nbis = n;
      n = 1;
    }
    allhierarchies.push(hierarchy);
  }
  return [allhierarchies, globalnamelist];
}

const [allhierarchies, globalnamelist] = findHierarchies();
// alert(allhierarchies);

/* 2nd method :
Detecting files which might be in the 'common part' of the client side because
they are applying to a majority of client side files. Including calculation
of the 'common membership threshold'.

Known limitation : here threshold calculation is based on the gap of
frequencies of the JS files only.
*/

// Returns the name and frequency of use of each file
function frequencyUsedFiles() {
  const jsname = [];
  const cssname = [];
  const extname = [];
  const jsfreq = [];
  const cssfreq = [];
  const extfreq = [];
  let n = 0;
  // Counting of differents files linked in each category
  for (let el of HTMLCLIENT.files) {
    n += 1;
    for (let js of el.jsclientlinks) {
      if (jsname.indexOf(js) === -1) {
        jsname.push(js);
        jsfreq.push(0);
      }
      jsfreq[jsname.indexOf(js)] += 1;
    }
    for (let css of el.csslinks) {
      if(cssname.indexOf(css) === -1) {
        cssname.push(css);
        cssfreq.push(0);
      }
      cssfreq[cssname.indexOf(css)] += 1;
    }
    for (let ext of el.externallinks) {
      if (extname.indexOf(ext) === -1) {
        extname.push(ext);
        extfreq.push(0);
      }
      extfreq[extname.indexOf(ext)] += 1;
    }
  }
  // Division by the number of files at first in order to have a using-frequency
  for (let k = 0; k < jsfreq.length; k += 1) {
    jsfreq[k] /= n;
  }
  for (let k = 0; k < cssfreq.length; k += 1) {
    cssfreq[k] /= n;
  }
  for (let k = 0; k < extfreq.length; k += 1) {
    extfreq[k] /= n;
  }
  // Returns list of file name and list of files' frequency
  return [[jsname, cssname, extname], [jsfreq, cssfreq, extfreq]];
}

// alert(jsfreq);
// alert(cssfreq);
// alert(extfreq);

// Threshold calculation
function commonThreshold() {
  const [, [jsfreq, cssfreq, extfreq]] = frequencyUsedFiles();
  alert([jsfreq, cssfreq, extfreq]);
  const cpjs = jsfreq.slice(0);
  let maxi = Math.max(...cpjs);
  // Array with the gaps
  const gap = [];
  // Array with the value after each gap
  const valbefgap = [];
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
      valbefgap.push(maxi);
      maxi = omaxi;
    }
  }
  // Threshold definition : use the maximum gap
  const maxigap = Math.max(...gap);
  let threshold;
  const test = valbefgap[gap.indexOf(maxigap)] - (0.1 * maxigap);
  if (test > 0.6) {
    threshold = valbefgap[gap.indexOf(maxigap)] - (0.1 * maxigap);
  } else {
    // Default value of threshold
    threshold = 0.66;
  }
  return threshold;
}

// alert(threshold);

// Creation of the 'common client side files'
function findCommonClientFiles() {
  const threshold = commonThreshold();
  const [[jsname, cssname, extname], [jsfreq, cssfreq, extfreq]] = frequencyUsedFiles();
  const jscommon = [];
  const csscommon = [];
  const extcommon = [];
  for (let k = 0; k < jsfreq.length; k += 1) {
    if (jsfreq[k] >= threshold) {
      jscommon.push(jsname[k]);
    }
  }
  for (let k = 0; k < cssfreq.length; k += 1) {
    if (cssfreq[k] >= threshold) {
      csscommon.push(cssname[k]);
    }
  }
  for (let k = 0; k < extfreq.length; k += 1) {
    if (extfreq[k] >= threshold) {
      extcommon.push(extname[k]);
    }
  }
  return [jscommon, csscommon, extcommon];
}

// const [jscommon, csscommon, extcommon] = findCommonClientFiles();
// alert(jscommon);
// alert(csscommon);
// alert(extcommon);

/* 3rd method
Detecting 'toolbox' on server side
*/

// Find 'toolbox' files, namely, files only called by others
function findToolbox() {
  const toolbox = [];
  for (let el of JSSERVER.files) {
    if (el.jsdatalinks.length === 0 && el.jsmethodslinks.length === 0 && el.externallinks.length === 0) {
      toolbox.push(el.name);
    }
  }
}

// alert(toolbox);

/* 4th method
Detecting files hyperlinked without hierarchy, in order to put them
in the same box on the client side
*/

// For unhierarchized files, find which are linked and those who are alone
function findDisorderedFiles(hierarchyNameList) {
  let li = [];
  const otherboxes = [];
  for (let el of HTMLCLIENT.files) {
    if (hierarchyNameList.indexOf(el.name) === -1) {
      li = [];
      hierarchyNameList.push(el.name);
      li.push(el.name);
      for (let file of el.hyperlinks) {
        hierarchyNameList.push(file);
        li.push(file);
      }
      otherboxes.push(li);
    }
  }
  return otherboxes;
}

// alert(otherboxes);

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
    linkpoints: [[60, 0], [120, 65], [60, 130], [0, 65]],
  },
  {
    name: 'html',
    height: 132,
    width: 120,
    linkpoints: [[60, 0], [120, 65], [60, 130], [0, 65]],
  },
  {
    name: 'db',
    height: 130,
    width: 122,
    linkpoints: [[60, 0], [120, 65], [60, 130], [0, 65]],
  },
  {
    name: 'htmljs1',
    height: 132,
    width: 220,
    linkpoints: [[105, 0], [210, 65], [105, 130], [0, 65]],
  },
  {
    name: 'htmljs2',
    height: 132,
    width: 220,
    linkpoints: [[105, 0], [210, 65], [105, 130], [0, 65]],
  },
  {
    name: 'htmljs3',
    height: 132,
    width: 220,
    linkpoints: [[105, 0], [210, 65], [105, 130], [0, 65]],
  },
  {
    name: 'htmljs4',
    height: 132,
    width: 220,
    linkpoints: [[105, 0], [210, 65], [105, 130], [0, 65]],
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
function relPos(x1, y1, x2, y2) {
  let pos = 0;
  const cx = x1 - x2;
  const cy = y1 - y2;
  if (cx === 0 && cy === 0) {
    return 'Elements have the same position !';
  } else if (cx === 0) {
    cy > 0 ? pos = 1 : pos = 5;
  } else if (cy === 0) {
    cx > 0 ? pos = 7 : pos = 3;
  } else if (cx > 0) {
    cy > 0 ? pos = 8 : pos = 6;
  } else {
    cy > 0 ? pos = 2 : pos = 4;
  }
  return pos;
}

// alert(relPos(4,4,4,2));
// alert(relPos(4,4,6,2));
// alert(relPos(4,4,6,4));
// alert(relPos(4,4,6,6));
// alert(relPos(4,4,4,6));
// alert(relPos(4,4,2,6));
// alert(relPos(4,4,2,4));
// alert(relPos(4,4,2,2));
// alert(relPos(4,4,4,4));

// Function adding elements of 2 arrays situated at the same index
function addArr(arr1, arr2) {
  const sub = [];
  if (arr1.length !== arr2.length) {
    return 'Arrays don\'t have the same size !';
  }
  for (let k = 0; k < arr1.length; k += 1) {
    sub.push(arr1[k] + arr2[k]);
  }
  return sub;
}

// Function which according to the relative position of 2 elements,
// returns the best arrow between them
function arrowBetween(el1, p1, el2, p2) {
  let n1 = 0;
  let n2 = 0;
  for (let k = 0; k < phw.length; k += 1) {
    let name = phw[k].name;
    if (name === el1) {
      n1 = k;
    } else if (name === el2) {
      n2 = k;
    }
  }
  const pos = relPos(p1.x, p1.y, p2.x, p2.y);
  const pointstolink = [];
  switch (pos) {
    case 1:
      pointstolink.push(addArr(phw[n1].linkpoints[0], [p1.x, p1.y]), addArr(phw[n2].linkpoints[2], [p2.x, p2.y]));
      break;
    case 2:
      pointstolink.push(addArr(phw[n1].linkpoints[0], [p1.x, p1.y]), addArr(phw[n2].linkpoints[3], [p2.x, p2.y]));
      break;
    case 3:
      pointstolink.push(addArr(phw[n1].linkpoints[1], [p1.x, p1.y]), addArr(phw[n2].linkpoints[3], [p2.x, p2.y]));
      break;
    case 4:
      pointstolink.push(addArr(phw[n1].linkpoints[2], [p1.x, p1.y]), addArr(phw[n2].linkpoints[3], [p2.x, p2.y]));
      break;
    case 5:
      pointstolink.push(addArr(phw[n1].linkpoints[2], [p1.x, p1.y]), addArr(phw[n2].linkpoints[0], [p2.x, p2.y]));
      break;
    case 6:
      pointstolink.push(addArr(phw[n1].linkpoints[2], [p1.x, p1.y]), addArr(phw[n2].linkpoints[1], [p2.x, p2.y]));
      break;
    case 7:
      pointstolink.push(addArr(phw[n1].linkpoints[3], [p1.x, p1.y]), addArr(phw[n2].linkpoints[1], [p2.x, p2.y]));
      break;
    case 8:
      pointstolink.push(addArr(phw[n1].linkpoints[0], [p1.x, p1.y]), addArr(phw[n2].linkpoints[1], [p2.x, p2.y]));
      break;
    default: return 'Bug somewhere !';
  }
  return pointstolink;
}

// alert(arrowBetween('htmljs1', [300, 300], 'database', [500, 500]));

/* Tracing test
svgBody += '<use x="30" y="80" xlink:href="#db"/><use x="300" y="200" xlink:href="#htmljs3"/>';
let arr = arrowBetween('db', [30, 80], 'htmljs3', [300, 200]);
svgBody += `<line x1="${arr[0][0]}" y1="${arr[0][1]}" x2="${arr[1][0]}" y2="${arr[1][1]}" style="stroke:black; stroke-width:1px;">`;
*/

// Layering ellements on the drawing
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
function fillComponent(arr, name, p) {
  let n = 0;
  for (let k = 0; k < phw.length; k += 1) {
    let test = phw[k].name;
    if (test === name) {
      n = k;
    }
  }
  for (let g = p.y; g < p.y + phw[n].height; g += 1) {
    for (let i = p.x; i < p.x + phw[n].width; i += 1) {
      arr[g][i] = 1;
    }
  }
}

// fillComponent('db', {x:20, y:20});
// alert('True : ' + arr[30][30] + '  /  False : ' + arr[200][150]);

// Function tracing the map and counting the different numbers
function fillLine(arr, p1, p2) {
  let yb;
  let xb;
  const dx = Math.abs(p1.x - p2.x);
  // Number of crossing lines
  let numbercross = 0;
  // Number of overlapped components
  let numberover = 0;
  // Boolean to know if the line or component that we meet in the graph has already been counted or not
  let samecomp = false;
  let sameline = false;
  // Case of a vertical line
  if (p1.x === p2.x) {
    const xeq = p1.x;
    const dy = Math.abs(p1.y - p2.y);
    p1.y < p2.x ? yb = p1.y : yb = p2.y;
    for (let k = yb + 5; k < dy - 4; k += 1) {
      let test = arr[k][xeq];
      switch (test) {
        case 0:
          if (((arr[k][xeq - 1] % 2 === 0 && arr[k][xeq - 1] !== 0) ||
          (arr[k][xeq + 1] % 2 === 0 && arr[k][xeq + 1] !== 0)) && !sameline) {
            numbercross += 1;
            sameline = true;
          } else if (arr[k][xeq - 1] === 0 && arr[k][xeq + 1] === 0) {
            sameline = false;
          }
          samecomp = false;
          break;
        case 1:
          if (!samecomp) {
            numberover += 1;
            samecomp = true;
            sameline = false;
          } else if ((arr[k][xeq - 1] === 3 || arr[k][xeq + 1] === 3) && !sameline) {
            numbercross += 1;
            sameline = true;
          } else if ((arr[k][xeq - 1] === 3 || arr[k][xeq + 1] === 3) && sameline) {
            sameline = true;
          } else {
            sameline = false;
          }
          break;
        case 2:
          if (!sameline) {
            numbercross += 1;
            sameline = true;
          }
          samecomp = false;
          break;
        case 3:
          if (!sameline) {
            numbercross += 1;
            sameline = true;
          }
          break;
        case 4:
          if (!sameline) {
            numbercross += 1;
            sameline = true;
          }
          samecomp = false;
          break;
        default:
          alert('Default case for fillLine method !');
      }
      arr[k][xeq] += 2;
    }
  }
  // Other cases
  else {
    // Looking for the lowest x coordinate
    let dy;
    if (p1.x < p2.x) {
      dy = p1.y - p2.y;
      [xb, yb] = [p1.x, p1.y];
    } else {
      dy = p2.y - p1.y;
      [xb, yb] = [p2.x, p2.y];
    }
    // Calculating the slope in order to follow the line from the lowest x coordinate
    const slope = -dy / dx;
    let fp = Math.round(yb + (4 * slope));
    // Following the line
    for (let k = xb + 5; k < (xb + dx) - 9; k += 1) {
      fp += slope;
      const v = Math.round(fp);
      const testb = arr[v][k];
      // Different cases according to what the line is crossing or not
      switch (testb) {
        // Need to check if we are not avoiding for one case a line (or plenty of) crossed
        case 0:
          if (((arr[v - 1][k] % 2 === 0 && arr[v - 1][k] !== 0) ||
          (arr[v + 1][k] % 2 === 0 && arr[v + 1][k] !== 0)) && !sameline) {
            numbercross += 1;
            sameline = true;
          } else if ((arr[v - 1][k] === 0) && (arr[v + 1][k] === 0)) {
            sameline = false;
          }
          samecomp = false;
          break;
        // If the line is overlapping a component
        case 1:
          if (!samecomp) {
            numberover += 1;
            samecomp = true;
            sameline = false;
          } else if ((arr[v - 1][k] === 3 || arr[v + 1][k] === 3) && !sameline) {
            numbercross += 1;
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
            numbercross += 1;
            sameline = true;
          }
          samecomp = false;
          break;
        // If the line is crossing another, overlapping a component
        case 3:
          if (!sameline) {
            numbercross += 1;
            sameline = true;
          }
          break;
        // If a line is crossing 2 others at the sami time (rare)
        case 4:
          if (!sameline) {
            numbercross += 1;
            sameline = true;
          }
          samecomp = false;
          break;
        // Normally all other cases are almost impossible...
        default:
          alert('Default case for fillLine method !');
      }
      // Adding to the map the new line traced
      arr[v][k] += 2;
      arr[v - 1][k] += 2;
      arr[v + 1][k] += 2;
    }
  }
  sameline = false;
  samecomp = false;
  return [numbercross, numberover];
}

// const map = initiateMap(150, 150);
// alert(fillLine(map, [2, 2], [100, 100])[0] + fillLine(map, [30, 100], [80, 2])[0] +
// fillLine(map, [2, 22], [100, 22])[0] + fillLine(map, [45, 2], [45, 100])[0] +
// fillLine(map, [45, 2], [75, 100])[0] + fillLine(map, [2, 50], [100, 25])[0]);
// svgBody += '<line x1="2" y1="2" x2="100" y2="100" style="stroke:black;"/><line x1="30" y1="100" x2="80" y2="2" style="stroke:black;" /><line x1="2" y1="22" x2="100" y2="22" style="stroke:black;" /><line x1="45" y1="2" x2="45" y2="100" style="stroke:black;" /><line x1="45" y1="2" x2="75" y2="100" style="stroke:black;" /><line x1="2" y1="50" x2="100" y2="25" style="stroke:black;" />';

// Function that places the hierarchies found on the client side

function maxLevel(hier) {
  const arrnum = [];
  for (let k = 0; k < hier.length; k += 1) {
    arrnum.push(0);
  }
  for (let k = 0; k < hier.length; k += 1) {
    arrnum[hier[k][1]] += 1;
  }
  return Math.max(...arrnum);
}

// for (let i = 0; i < allhierarchies.length; i += 1) {
//   let hier = allhierarchies[i];
//   let maxl = maxLevel(allhierarchies[i]);
//   // Let a blank position on the left 3->3 5->4 7->5 9->6 11->7
//   let begpoint;
//   maxl % 2 == 0 ?
//   maxl % 2 == 0 ? begpoint = 2 + maxl / 2 : begpoint = maxl;
//   for (let k = 0; k < hier.length; k += 1) {
//
//   }
// }

document.querySelector('#graph').innerHTML = svgStart + svgBody + svgEnd;
