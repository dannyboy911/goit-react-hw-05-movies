#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const componentName = process.argv[2];

if (!componentName) {
  console.error('Please provide a component name.');
  process.exit(1);
}

const componentDir = path.join(__dirname, 'src', 'components', componentName);

if (fs.existsSync(componentDir)) {
  console.error('Component already exists.');
  process.exit(1);
}

fs.mkdirSync(componentDir);

// Create JSX file
const jsxTemplate = `import React from 'react';
import styles from './${componentName}.module.css';

const ${componentName} = () => {
  return (
    <div className={styles.${componentName.toLowerCase()}}>
      <h1>${componentName} component</h1>
    </div>
  );
};

export default ${componentName};
`;

fs.writeFileSync(path.join(componentDir, `${componentName}.jsx`), jsxTemplate);

// Create module.css file
const cssTemplate = `.${componentName.toLowerCase()} {
  /* Add your styles here */
}
`;

fs.writeFileSync(path.join(componentDir, `${componentName}.module.css`), cssTemplate);

console.log(`${componentName} component created successfully.`);
