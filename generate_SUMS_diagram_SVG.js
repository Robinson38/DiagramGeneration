
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


//Second idea of data representation, seeing files as objects

let HTMLCLIENT = {
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
    }
  ]
};

let JSSERVER = {
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
    }
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
  ]
};

let EXTERNAL = {
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
    }
  ]
};

//SVG

//drawing of both "Client side" and "Server side"
//will be done at the end of the construction, when all components will be put at their own place
let svgBody = '<rect x="1" y="1" width="1998" height="998" style="fill:white; stroke:black; stroke-width:2px;" /><path d="M1000,0 v0,1000" style="stroke:black; stroke-width:4px; stroke-dasharray:5,5;" />';
svgBody += '<text x="20" y="40" style="font-size:30px">Client side</text><text x="1850" y="40" style="font-size:30px">Server side</text>'

let el = HTMLCLIENT.files[0].hyperlinks[0];
let hyp = [];

/* 1st method :
detecting hierarchy between HTML files within the client side
*/

//creation of an index for HTML files
let indexHTML = [];
for(let k = 0 ; k < HTMLCLIENT.files.length ; k += 1) {
  indexHTML.push(HTMLCLIENT.files[k].name);
}

//list of html client files names
for(let k = 0 ; k < HTMLCLIENT.files.length ; k += 1) {
  for(let j = 0 ; j < HTMLCLIENT.files[k].hyperlinks.length ; j += 1) {
    hyp.push(HTMLCLIENT.files[k].hyperlinks[j]);
  }
}

//find the top of the hierarchy
let toph = [];
for(let k = 0 ; k < HTMLCLIENT.files.length ; k += 1) {
  s = HTMLCLIENT.files[k].name;
  if(hyp.indexOf(s) == -1 && HTMLCLIENT.files[k].hyperlinks.length != 0) {
    toph.push(s);
  }
}

let globalnamelist = [];
let j = 0;
//list of all the hierarchies in our client side
let allhierarchies = [];
//we do the loop on all possible hierarchies found before
for(let k = 0 ; k < toph.length ; k += 1) {
  //rank in the hierarchy
  let rk = 1;
  let el = toph[k];
  //list with names of elements already seen in the hierarchy
  let namelist = [el];
  globalnamelist.push(el);
  let hierarchy = [[el,rk]];
  //number of new files added
  let n = 1;
  let nbis = 1;
  //take the last element on the list to search for where it is hyperlinking
  while(j < hierarchy.length) {
    j += 1;
    rk += 1;
    //iteration on all news files added to the hierarchy the step before
    for(let m = 0 ; m < nbis ; m += 1) {
      hyp = HTMLCLIENT.files[indexHTML.indexOf(el)].hyperlinks;
      //we search for the files hyperlinked which are not already ordered
      for(let file of hyp) {
        if(namelist.indexOf(file) == -1) {
          hierarchy.push([file, rk]);
          namelist.push(file);
          globalnamelist.push(file);
          n += 1;
        }
      }
      n -= 1
      el = namelist[j + m];
    }
    nbis = n;
    n = 1;
  }
  allhierarchies.push(hierarchy);
}


//alert(allhierarchies);

/* 2nd method :
detecting files which might be in the 'common part' of the client side because
they are applying to a majority of client side files
*/

let jsname = [];
let cssname = [];
let extname = [];
let jsfreq = [];
let cssfreq = [];
let extfreq = [];
let n = 0;

//counting of differents files linked in each category
for(let el of HTMLCLIENT.files) {
  n += 1;
  for(let js of el.jsclientlinks) {
    if(jsname.indexOf(js) == -1) {
      jsname.push(js);
      jsfreq.push(0);
    }
    jsfreq[jsname.indexOf(js)] += 1;
  }
  for(let css of el.csslinks) {
    if(cssname.indexOf(css) == -1) {
      cssname.push(css);
      cssfreq.push(0);
    }
    cssfreq[cssname.indexOf(css)] += 1;
  }
  for(let ext of el.externallinks) {
    if(extname.indexOf(ext) == -1) {
      extname.push(ext);
      extfreq.push(0);
    }
    extfreq[extname.indexOf(ext)] += 1;
  }
}

//division by the number of files at first in order to have a using-frequency
for(let k = 0 ; k < jsfreq.length ; k += 1) {
  jsfreq[k] = jsfreq[k] / n;
}
for(let k = 0 ; k < cssfreq.length ; k += 1) {
  cssfreq[k] = cssfreq[k] / n;
}
for(let k = 0 ; k < extfreq.length ; k += 1) {
  extfreq[k] = extfreq[k] / n;
}

//alert(jsfreq);
//alert(cssfreq);
//alert(extfreq);

//threshold detection

let cpjs = jsfreq.slice(0);
let maxi = Math.max(...cpjs);
let gap = [];
let valbefgap = [];

//return an array with the maximum gaps, and another with
while(cpjs.length > 0) {
  let k = 0;
  while(k < cpjs.length) {
    if(cpjs[k] == maxi) {
      cpjs.splice(k, 1);
    }
    else {
      k += 1;
    }
  }
  if(cpjs.length > 0) {
    let omaxi = Math.max(...cpjs);
    gap.push(maxi-omaxi);
    valbefgap.push(maxi);
    maxi = omaxi;
  }
}

//threshold definition
let maxigap = Math.max(...gap);
let threshold = 0;
let test = valbefgap[gap.indexOf(maxigap)] - 0.1*maxigap;
if(test > 0.6) {
  threshold = valbefgap[gap.indexOf(maxigap)] - 0.1*maxigap;
}

//alert(threshold);

//creation of the 'common client side files'
let jscommon = [];
let csscommon = [];
let extcommon = [];

for(let k = 0 ; k < jsfreq.length ; k += 1) {
  if(jsfreq[k] >= threshold) {
    jscommon.push(jsname[k]);
  }
}
for(let k = 0 ; k < cssfreq.length ; k += 1) {
  if(cssfreq[k] >= threshold) {
    csscommon.push(cssname[k]);
  }
}
for(let k = 0 ; k < extfreq.length ; k += 1) {
  if(extfreq[k] >= threshold) {
    extcommon.push(extname[k]);
  }
}

//alert(jscommon);
//alert(csscommon);
//alert(extcommon);

/* 3rd method
detecting 'toolbox' on server side
*/

let toolbox = [];
for(let el of JSSERVER.files) {
  if(el.jsdatalinks.length == 0 && el.jsmethodslinks.length == 0 && el.externallinks.length == 0) {
    toolbox.push(el.name);
  }
}

//alert(toolbox);

/* 4th method
detecting files hyperlinked without hierarchy, in order to put them in the same box
*/

let li = [];
let otherboxes = [];
for(let el of HTMLCLIENT.files) {
  if(globalnamelist.indexOf(el.name) == -1) {
    li = [];
    globalnamelist.push(el.name);
    li.push(el.name);
    for(let file of el.hyperlinks) {
      globalnamelist.push(file);
      li.push(file);

    otherboxes.push(li);
    }
  }
}

//alert(otherboxes);

/* 5th method
renaming of external links because they often have difficult names
*/

for(let k = 0 ; k < EXTERNAL.files.length ; k += 1) {
  let newname = prompt('Enter the shortcut name for ' + EXTERNAL.files[k].name + ' :');
  EXTERNAL.files[k].name = newname;
}

document.querySelector('#graph').innerHTML = svgStart + svgBody + svgEnd;
