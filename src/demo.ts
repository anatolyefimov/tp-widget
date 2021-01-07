const samplesCount: number = 4;

const configs = [
  {},
  {},
  {
    buttonColor: 'tomato',
    backgroundColor: 'yellow',
    textColor: 'black'
  },
  { 
    lang: 'ru'
  },
  {}
];

for (let i = 1; i <= samplesCount; ++i) {
  const container = document.getElementById('place-' + i);

  const widget = document.createElement('script');
  widget.async = true;

  let pairs: string[] = Object.keys(configs[i]).map(key => key + '=' + configs[i][key]);
  let queryString: string =  pairs.join('&');
  widget.src = 'widget.js?' + queryString;

  container.appendChild(widget);
}