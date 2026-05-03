const fs = require('fs');
const path = require('path');

const walkSync = function(dir, filelist) {
  let files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      filelist = walkSync(path.join(dir, file), filelist);
    }
    else {
      filelist.push(path.join(dir, file));
    }
  });
  return filelist;
};

const allFiles = walkSync('./src/components').filter(f => f.endsWith('.jsx'));

let changedFiles = 0;
allFiles.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let newContent = content.replace(/(className=(?:\{`|"[^"]*?))(\s*)px-8(\s*|")/g, (match, p1, p2, p3) => {
    if (p1.includes('md:px-8')) return match;
    return `${p1}${p2}px-4 md:px-8${p3}`;
  });
  
  if (content !== newContent) {
    fs.writeFileSync(f, newContent);
    changedFiles++;
    console.log('Updated: ' + f);
  }
});

console.log('Done. Changed ' + changedFiles + ' files.');
