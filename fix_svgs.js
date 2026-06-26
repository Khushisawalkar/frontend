const fs = require('fs');
const path = require('path');
const dir = './src/components';

fs.readdirSync(dir).forEach(file => {
  if (file.endsWith('.tsx')) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/\/SVGs\//g, '/frontend/SVGs/');
    fs.writeFileSync(filePath, content);
  }
});
console.log('Fixed SVG paths');
