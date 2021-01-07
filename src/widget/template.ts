
const tempalte = (styles, config) => {

  return (
    `<form class="${styles.form}" style="
      ${config.backgroundColor ? 'background-color: ' + config.backgroundColor + ';' : ''}
      ${config.textColor ? 'color: ' + config.textColor : ''}
    ">
      <div class="${styles.title}" style="color: inherit">
        ${
    config.lang === 'ru' ? (
      'Откуда это взялось? Почему мы используем это? Почему мы используем?'
    ) : (
      'Where does it come from? Why do we use it? Why do we use?'
    )
    }
      </div>
      <div class="${styles.description}" style="color: inherit">
        ${
    config.lang === 'ru' ? (
      'Давно установлено, что читатель будет отвлекаться на удобочитаемое содержимое страницы при просмотре ее макета.'
    ) : (
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    )
    }
      </div>
      <input type="date"  class="${styles.datepicker}" />
      <input type="date"  class="${styles.datepicker}" />
      <button type="submit" style="${config.buttonColor ? 'background-color: ' + config.buttonColor : ''}; color: inherit" class="${styles.button}">
        ${config.lang == 'ru' ? 'поиск' : 'search'} 
      </button>
    </form>`
  );
};


export default tempalte;