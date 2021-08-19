import { squre } from './math';
function component() {
  const pre = document.createElement('pre');
  pre.innerHTML = squre(2);
  document.body.appendChild(pre);
}
component()