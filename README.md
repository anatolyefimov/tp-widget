# TP widget

## Сборка 
Чтобы локально запустить демо с примерами вставки виджета, собранного из исходников, нужно выполнить следующие команды:
```bash
$ npm i
$ npm start
```
Сборка production версии:
```bash
$ npn run build
```
Появится файл `dist/widget.js`, который можно вставить на страницу следующим образом:
```html
<script src='<path-to-widget>/widget.js' async></script>
```
Виджет вставится в родительский элемент `<script>`

## Кастомизация
Можно поменять язык виджета, цвет фона, текста и кнопки, пердевая пераметры через query string:

```html
<script src='<path-to-widget>/widget.js?backgroundColor=yellow&textColor=black&buttonColor=tomato&lang=ru' async></script>
```

## Production-версия
Собранный скрипт задеплоен по ссылке [https://unpkg.com/tp-widget@1.0.3/dist/widget.js](https://unpkg.com/tp-widget@1.0.3/dist/widget.js). Задеплоенную версию виджета можно вставить таким же образом:

```html
<script src='https://unpkg.com/tp-widget@1.0.3/dist/widget.js?backgroundColor=yellow&textColor=black&buttonColor=tomato&lang=ru' async></script>
```