import commonStyles from  './styles/common.css';
import widestStyles from './styles/widest.css';
import wideStyles from './styles/wide.css';
import narrowStyles from './styles/narrow.css';
import narrowestStyles from './styles/narrowest.css';
import template from './template';

interface IConfig {
  textColor?: string;
  buttonColor?: string;
  backgroundColor?: string;
  lang?: 'en' | 'ru'
}


const mergeStyles = (acc, newStyles) => {
  for (let styleName in newStyles) {
    if (acc[styleName]) {
      acc[styleName] += ' ' + newStyles[styleName];
    } else {
      acc[styleName] = newStyles[styleName];
    }
  }
};

const fitStyles = (elem: Element) => {
  const width: number = elem.clientWidth;
  const styles: any = {
    ...commonStyles
  };

  if (1020 <= width) {
    mergeStyles(styles, widestStyles);
  }
  if (760 <= width && width < 1020) {
    mergeStyles(styles, wideStyles);
  }
  if (440 <= width && width < 760) {
    mergeStyles(styles, narrowStyles);
  }
  if (width < 440) {
    mergeStyles(styles, narrowestStyles);
  }

  return styles;
};


class Widget {
  config: IConfig;
  elem: Element;

  constructor() {

  }

  init(): void {
    const styles = fitStyles(document.currentScript.parentElement);

    const templateNodeRoot = document.createElement('div');
    templateNodeRoot.innerHTML = template(styles);
    const templateNode = templateNodeRoot.firstChild;
    this.elem = templateNodeRoot.children[0];

    window.addEventListener('resize', this.handleResize.bind(this));
    document.currentScript.parentNode.insertBefore(templateNode, document.currentScript);
  }

  handleResize(): void {
    console.log('resize...');
    console.log(this.elem);
    const styles = fitStyles(this.elem);
    this.elem.innerHTML = template(styles);
  }
}

export default Widget;