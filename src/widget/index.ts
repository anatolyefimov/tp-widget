import formHtmlString from './template.html';
import './style.css';

(function() {
  const template = document.createElement('div');
  template.innerHTML = formHtmlString.trim();

  document.currentScript.parentNode.insertBefore(template.firstChild, document.currentScript);
})();