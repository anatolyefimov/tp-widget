
const tempalte = (styles) => (
  `<form class="${styles.form}">
    <div class="${styles.title}">Where does it come from? Why do we use it? Why do we use?</div>
    <div class="${styles.description}">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
    <input type="date" class="${styles.datepicker}"/>
    <input type="date" class="${styles.datepicker}"/>
    <button type="submit" class="${styles.button}">search</button>
  </form>`
);

export default tempalte;