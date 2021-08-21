import _ from 'lodash';
import print from './print.js';
const sw = require('./sw.js');
console.log(123);
function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.onclick = print.bind(null, 'Hello webpack!');

  return element;
}

document.body.appendChild(component());
sw();