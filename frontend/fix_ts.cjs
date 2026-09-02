const fs = require('fs');
const path = require('path');
const pagesDir = path.join('src', 'pages');
fs.readdirSync(pagesDir).forEach(file => {
  if(!file.endsWith('.tsx')) return;
  let c = fs.readFileSync(path.join(pagesDir, file), 'utf8');
  c = c.replace(/viewbox=/gi, 'viewBox=');
  c = c.replace(/preserveaspectratio=/gi, 'preserveAspectRatio=');
  c = c.replace(/disabled="true"/gi, 'disabled');
  c = c.replace(/checked="checked"/gi, 'defaultChecked');
  c = c.replace(/selected="selected"/gi, 'defaultValue');
  c = c.replace(/required="required"/gi, 'required');
  c = c.replace(/autocomplete=/gi, 'autoComplete=');
  fs.writeFileSync(path.join(pagesDir, file), c);
});
