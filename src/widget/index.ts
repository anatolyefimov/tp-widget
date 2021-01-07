import Widget from './widget';

(function() {
  //@ts-ignore
  let query: string = document.currentScript.src.replace(/^[^\?]+\??/,'');
  let params = {};
  var pairs = query.split(/[;&]/);
  for (let i = 0; i < pairs.length; i++ ) {
    let keyVal = pairs[i].split('=');
    if ( !keyVal || keyVal.length != 2 ) continue;
    var key = unescape( keyVal[0] );
    var val = unescape( keyVal[1] );
    val = val.replace(/\+/g, ' ');
    params[key] = val;
  }

  const widget = new Widget(params);
  widget.init();
})();