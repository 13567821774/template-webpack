import _ from 'lodash';
import './style.css';
function component() {
  console.log(123213213);
  const element = document.createElement('div');
  element.classList.add('test');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
}

document.body.appendChild(component());
