
const svgStart = '<svg width="2000" height="1000" xmlns="http://www.w3.org/2000/svg">';
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
      composedby : ['statuses', 'marking-calculations'],
    },
    {
      name: 'Errors',
      composedby : ['BadRequest', 'ConflictError', 'ForbiddenError', 'NotFoundError'],
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
svgBody += '<text x="20" y="40" style="font-size:30px">Client side</text><text x="1850" y="40" style="font-size:30px">Server side</text>';

const el = HTMLCLIENT.files[0].hyperlinks[0];
let hyp = [];

/* 1st method :
Detecting hierarchy between HTML files within the client side

Known limitation : if a hierarchy owns more than one file on the top of
the hierachy, a hierarchy will be  find for each of the 'top files'
(no gathering of hierarchies is implemented)
*/

// Creation of an index for HTML files
let indexHTML = [];
for (let k = 0; k < HTMLCLIENT.files.length; k += 1) {
  indexHTML.push(HTMLCLIENT.files[k].name);
}

// List of html client files names
for (let k = 0; k < HTMLCLIENT.files.length ;k += 1) {
  for (let j = 0; j < HTMLCLIENT.files[k].hyperlinks.length; j += 1) {
    hyp.push(HTMLCLIENT.files[k].hyperlinks[j]);
  }
}

// Find the top of the hierarchy
let toph = [];
let s;
for (let k = 0; k < HTMLCLIENT.files.length; k += 1) {
  s = HTMLCLIENT.files[k].name;
  if (hyp.indexOf(s) === -1 && HTMLCLIENT.files[k].hyperlinks.length !== 0) {
    toph.push(s);
  }
}

let globalnamelist = [];
let j = 0;
// List of all the hierarchies in our client side
let allhierarchies = [];
// Doing the loop on all possible hierarchies found before
for (let k = 0; k < toph.length; k += 1) {
  // Rank in the hierarchy
  let rk = 1;
  let cur = toph[k];
  // List with names of elements already seen in the hierarchy
  let namelist = [cur];
  globalnamelist.push(cur);
  let hierarchy = [[cur, rk]];
  // Number of new files added
  let n = 1;
  let nbis = 1;
  // Take the last element on the list to search for where it is hyperlinking
  while (j < hierarchy.length) {
    j += 1;
    rk += 1;
    // Iteration on all news files added to the hierarchy the step before
    for (let m = 0; m < nbis; m += 1) {
      hyp = HTMLCLIENT.files[indexHTML.indexOf(cur)].hyperlinks;
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


// alert(allhierarchies);

/* 2nd method :
Detecting files which might be in the 'common part' of the client side because
they are applying to a majority of client side files. Including calculation
of the 'common membership threshold'.

Known limitation : here threshold calculation is based on the gap of
frequencies of the JS files only.
*/

let jsname = [];
let cssname = [];
let extname = [];
let jsfreq = [];
let cssfreq = [];
let extfreq = [];
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

// alert(jsfreq);
// alert(cssfreq);
// alert(extfreq);

// Threshold calculation

let cpjs = jsfreq.slice(0);
let maxi = Math.max(...cpjs);
let gap = [];
let valbefgap = [];

// Return an array with the maximum gaps, and another with the value after
// each gap

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
    let omaxi = Math.max(...cpjs);
    gap.push(maxi - omaxi);
    valbefgap.push(maxi);
    maxi = omaxi;
  }
}

// Threshold definition

let maxigap = Math.max(...gap);
let threshold = 0;
let test = valbefgap[gap.indexOf(maxigap)] - (0.1 * maxigap);
if (test > 0.6) {
  threshold = valbefgap[gap.indexOf(maxigap)] - (0.1 * maxigap);
}

// alert(threshold);

// Creation of the 'common client side files'
let jscommon = [];
let csscommon = [];
let extcommon = [];

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

// alert(jscommon);
// alert(csscommon);
// alert(extcommon);

/* 3rd method
Detecting 'toolbox' on server side
*/

let toolbox = [];
for (let el of JSSERVER.files) {
  if (el.jsdatalinks.length === 0 && el.jsmethodslinks.length === 0 && el.externallinks.length === 0) {
    toolbox.push(el.name);
  }
}

// alert(toolbox);

/* 4th method
Detecting files hyperlinked without hierarchy, in order to put them
in the same box on the client side
*/

let li = [];
let otherboxes = [];
for (let el of HTMLCLIENT.files) {
  if (globalnamelist.indexOf(el.name) === -1) {
    li = [];
    globalnamelist.push(el.name);
    li.push(el.name);
    for (let file of el.hyperlinks) {
      globalnamelist.push(file);
      li.push(file);
    }
  otherboxes.push(li);
  }
}

// alert(otherboxes);

/* 5th method
Renaming of external links because they often have difficult names

Known limitation : the user have to type the name he wants for the file,
a database could be implemented
*/

// for (let k = 0; k < EXTERNAL.files.length; k += 1) {
//   let newname = prompt('Enter the shortcut name for ' + EXTERNAL.files[k].name + ' :');
//   EXTERNAL.files[k].name = newname;
// }

/*
*/


// List of caracteristics of SVG pre-defined patterns that will be called by
// javascript

let phw = [
  {
    name: 'js',
    // Size of the pattern
    h: 132,
    width: 119.8,
    // Points where arrows can be linked to the box (clockwise)
    linkpoints: [[0, -65], [60, 0], [0, 65], [-60, 0]],
  },
  {
    name: 'html',
    height: 132,
    width: 119.8,
    linkpoints: [[0, -65], [60, 0], [0, 65], [-60, 0]],
  },
  {
    name: 'db',
    height: 130,
    width: 122,
    linkpoints: [[0, -64], [59, 0], [0, 64], [-59, 0]],
  },
  {
    name: 'htmljs1',
    height: 132,
    width: 219.8,
    linkpoints: [[0, -65], [105.5, 0], [0, 65], [-105.5, 0]],
  },
  {
    name: 'htmljs2',
    height: 132,
    width: 219.8,
    linkpoints: [[0, -65], [105.5, 0], [0, 65], [-105.5, 0]],
  },
  {
    name: 'htmljs3',
    height: 132,
    width: 219.8,
    linkpoints: [[0, -65], [105.5, 0], [0, 65], [-105.5, 0]],
  },
  {
    name: 'htmljs4',
    height: 132,
    width: 219.8,
    linkpoints: [[0, -65], [105.5, 0], [0, 65], [-105.5, 0]],
  },
];

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

/* Function which according to the relative position of 2 elements,
returns the best arrow between them
*/

function addArr(arr1, arr2) {
  let sub = [];
  if (arr1.length !== arr2.length) {
    return 'Arrays don\'t have the same size !';
  }
  for (let k = 0; k < arr1.length; k += 1) {
    sub.push(arr1[k] + arr2[k]);
  }
  return sub;
}

function arrowBetween(el1, coor1, el2, coor2) {
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
  alert('Names not found :' + n1 == 0 && n2 == 0);
  const pos = relPos(coor1[0], coor1[1], coor2[0], coor2[1]);
  let pointstolink = [];
  switch (pos) {
    case 1:
      pointstolink.push(addArr(phw[n1].linkpoints[0], coor1), addArr(phw[n2].linkpoints[2], coor2));
      break;
    case 2:
      pointstolink.push(addArr(phw[n1].linkpoints[0], coor1), addArr(phw[n2].linkpoints[3], coor2));
      break;
    case 3:
      pointstolink.push(addArr(phw[n1].linkpoints[1], coor1), addArr(phw[n2].linkpoints[3], coor2));
      break;
    case 4:
      pointstolink.push(addArr(phw[n1].linkpoints[2], coor1), addArr(phw[n2].linkpoints[3], coor2));
      break;
    case 5:
      pointstolink.push(addArr(phw[n1].linkpoints[2], coor1), addArr(phw[n2].linkpoints[0], coor2));
      break;
    case 6:
      pointstolink.push(addArr(phw[n1].linkpoints[2], coor1), addArr(phw[n2].linkpoints[1], coor2));
      break;
    case 7:
      pointstolink.push(addArr(phw[n1].linkpoints[3], coor1), addArr(phw[n2].linkpoints[1], coor2));
      break;
    case 8:
      pointstolink.push(addArr(phw[n1].linkpoints[0], coor1), addArr(phw[n2].linkpoints[1], coor2));
      break;
    default: return 'Bug somewhere !';
  }
  return pointstolink;
}

// alert(arrowBetween('htmljs1', [300, 300], 'database', [500, 500]));

document.querySelector('#graph').innerHTML = svgStart + svgBody + svgEnd;
