#!/usr/bin/env node
const sass = require('sass');
const fs = require('fs');
const path = require('path');

// Get the project root directory (where package.json is located)
const projectRoot = path.resolve(__dirname, '..');
const scssPath = path.join(projectRoot, 'public/assets/scss/main.scss');
const cssPath = path.join(projectRoot, 'public/assets/css/style.css');
const cssDir = path.dirname(cssPath);

// Ensure CSS directory exists
if (!fs.existsSync(cssDir)) {
  fs.mkdirSync(cssDir, { recursive: true });
}

// Check if SCSS file exists
if (!fs.existsSync(scssPath)) {
  console.error(`Error: SCSS file not found at ${scssPath}`);
  console.log(`Project root: ${projectRoot}`);
  console.log(`Current working directory: ${process.cwd()}`);
  console.log('Available files in scss directory:');
  const scssDir = path.dirname(scssPath);
  if (fs.existsSync(scssDir)) {
    try {
      const files = fs.readdirSync(scssDir);
      console.log(files.slice(0, 10).join(', '));
    } catch (e) {
      console.log(`Could not read directory: ${e.message}`);
    }
  } else {
    console.log(`SCSS directory does not exist: ${scssDir}`);
    // Try to find the file in common locations
    const alternativePaths = [
      path.join(process.cwd(), 'public/assets/scss/main.scss'),
    ];
    for (const altPath of alternativePaths) {
      if (fs.existsSync(altPath)) {
        console.log(`Found SCSS file at: ${altPath}`);
      }
    }
  }
  process.exit(1);
}

try {
  const result = sass.compile(scssPath, {
    style: 'compressed',
    sourceMap: false,
  });
  
  fs.writeFileSync(cssPath, result.css, 'utf8');
  console.log(`✓ Successfully compiled SCSS to ${cssPath}`);
} catch (error) {
  console.error('Error compiling SCSS:', error.message);
  process.exit(1);
}
