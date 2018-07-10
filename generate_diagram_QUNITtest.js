/* global QUnit, HTMLCLIENT, JSSERVER, relPos, htmlFileList, findTopHierarchy, findHierarchies, frequencyUsedFiles, commonThreshold, findCommonClientFiles, findToolbox, findDisorderedFiles,
initiateMap, fillComponent, fillLine, addArr */

QUnit.test('Test 1 : htmlFileList', (assert) => {
  assert.strictEqual(htmlFileList(HTMLCLIENT).length, HTMLCLIENT.files.length, 'Good size for the array returned.');
});

QUnit.test('Test 2 : findTopHierarchy', (assert) => {
  assert.deepEqual(findTopHierarchy(HTMLCLIENT), ['index'], '\'index\' is the only one top of hierarchy.');
});

QUnit.test('Test 3 : findHierarchies', (assert) => {
  const fh = findHierarchies(HTMLCLIENT);
  let b = true;
  let c = true;
  let m = 0;
  for (let k = 0; k < fh[0][0].length; k += 1) {
    if (fh[0][0][k].length === 2) {
      if (fh[0][0][k][1] >= m) {
        m = fh[0][0][k][1];
      } else {
        b = false;
      }
    } else {
      c = false;
    }
  }
  assert.strictEqual(c, true, 'All files of the hierarchy are like [name, level].');
  assert.strictEqual(b, true, 'Files are ordered by descending level ordering.');
  assert.strictEqual(fh[0][0][0][0], 'index', '\'index\' is the top of hierarchy.');
  assert.strictEqual(fh[0][0][0][1], 0, 'Level of top of hierarchy is 0.');
  assert.strictEqual(fh[0][0][4][1], 3, 'Last file is a level 3.');
  assert.strictEqual(fh[0][0].indexOf('criteria'), -1, '\'criteria\' is not in the hierarchy.');
});

QUnit.test('Test 4 : frequencyUsedFiles', (assert) => {
  const [, fq] = frequencyUsedFiles(HTMLCLIENT);
  let b;
  const arr = fq[0] + fq[1] + fq[2];
  for (const z of arr) {
    b = !(z <= 1);
  }
  assert.strictEqual(b, false, 'All frequencies below 1.');
});

QUnit.test('Test 5 : commonThreshold', (assert) => {
  const th = commonThreshold(HTMLCLIENT);
  assert.ok(th >= 0.66, 'Threshold is above 0,66.');
  assert.ok(th <= 1, 'Threshold is below 1.');
});

QUnit.test('Test 6 : findCommonClientFiles', (assert) => {
  const [na, fr] = frequencyUsedFiles(HTMLCLIENT);
  const name = String.prototype.split(',', na[0] + na[1] + na[2]);
  const freq = fr[0] + fr[1] + fr[2];
  const th = commonThreshold(HTMLCLIENT);
  const com = findCommonClientFiles(HTMLCLIENT);
  let b = true;
  for (const n of name) {
    if (!(freq[name.indexOf(n)] >= th) && com.indexOf(n) === -1) {
      b = false;
    }
  }
  assert.strictEqual(b, true, 'All files in \'Common Part\' are the only one with frequencies above the threshold.');
});

QUnit.test('Test 7 : findToolbox', (assert) => {
  const tb = findToolbox(JSSERVER);
  let b = true;
  for (const z of tb) {
    for (const r of JSSERVER.files) {
      if (r.name === z) {
        if (!(r.jsDataLinks.length === 0) || !(r.jsMethodsLinks.length === 0) || !(r.externalLinks.length === 0)) {
          b = false;
        }
        break;
      }
    }
  }
  assert.strictEqual(b, true, '\'Toolbox files\' are not linked towards another file.');
});

QUnit.test('Test 8 : findDisorderedFiles', (assert) => {
  const [, arr] = findHierarchies(HTMLCLIENT);
  const di = findDisorderedFiles(arr, HTMLCLIENT);
  let b = true;
  for (const z of di) {
    for (const r of z) {
      if (arr.indexOf(r) !== -1) {
        b = false;
      }
    }
  }
  assert.strictEqual(b, true, 'Files not in the hierarchy are categorized as \'disordered\'.');
});

QUnit.test('Test 9 : relPos', (assert) => {
  const a = relPos({ x: 4, y: 4 }, { x: 4, y: 2 });
  const b = relPos({ x: 4, y: 4 }, { x: 6, y: 2 });
  const c = relPos({ x: 4, y: 4 }, { x: 6, y: 4 });
  const d = relPos({ x: 4, y: 4 }, { x: 6, y: 6 });
  const e = relPos({ x: 4, y: 4 }, { x: 4, y: 6 });
  const f = relPos({ x: 4, y: 4 }, { x: 2, y: 6 });
  const g = relPos({ x: 4, y: 4 }, { x: 2, y: 4 });
  const h = relPos({ x: 4, y: 4 }, { x: 2, y: 2 });
  const i = relPos({ x: 4, y: 4 }, { x: 4, y: 4 });
  assert.strictEqual(a, 1, 'Position 1 found.');
  assert.strictEqual(b, 2, 'Position 2 found.');
  assert.strictEqual(c, 3, 'Position 3 found.');
  assert.strictEqual(d, 4, 'Position 4 found.');
  assert.strictEqual(e, 5, 'Position 5 found.');
  assert.strictEqual(f, 6, 'Position 6 found.');
  assert.strictEqual(g, 7, 'Position 7 found.');
  assert.strictEqual(h, 8, 'Position 8 found.');
  assert.strictEqual(i, 0, 'Position 0 found.');
});

QUnit.test('Test 10 : addArr', (assert) => {
  const a = addArr([1, 2, 3], [1, 2, 3]);
  const b = addArr([1, 2, 3], [-1, -2, -3]);
  const c = addArr([], []);
  const d = addArr([1, 2, 3], [1, 2, 3, 4]);
  assert.deepEqual(a, [2, 4, 6], 'Function working with positive elements.');
  assert.deepEqual(b, [0, 0, 0], 'Function working with negative elements.');
  assert.deepEqual(c, [], 'Function working with empty arrays.');
  assert.strictEqual(d, 0, 'Error detected if arrays don\'t have the same size.');
});

QUnit.test('Test 11 : initiateMap', (assert) => {
  const a = initiateMap(20, 20);
  assert.strictEqual(a.length, 20, 'Good height.');
  assert.strictEqual(a[0].length, 20, 'Good width.');
});

QUnit.test('Test 12 : fillComponent', (assert) => {
  const m = initiateMap(2000, 2000);
  fillComponent(m, 'db', { x: 20, y: 20 });
  fillComponent(m, 'htmljs1', { x: 100, y: 500 });
  assert.strictEqual(m[22][22], 1, 'Db component detected.');
  assert.strictEqual(m[550][150], 1, 'Htmljs1 component detected.');
  assert.strictEqual(m[100][700], 0, 'Nothing found outside both components.');
});

QUnit.test('Test 13 : fillLine', (assert) => {
  const m = initiateMap(2000, 2000);
  fillLine(m, { x: 0, y: 0 }, { x: 2000, y: 2000 });
  fillLine(m, { x: 2000, y: 0 }, { x: 0, y: 2000 });
  assert.strictEqual(m[89][88], 2, 'First line traced.');
  assert.strictEqual(m[300][1700], 2, 'Second line traced.');
  assert.strictEqual(m[1000][1000], 4, 'Crossing lines detected');
});
