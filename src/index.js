import _ from 'lodash';
import './style.css';
import print from './print';
function component() {
  const btn = document.createElement('button');
  btn.innerHTML = 'click';
  btn.onclick = print;
  return btn;
}

document.body.appendChild(component());
