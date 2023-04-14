<img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" width="100" align="right"/>

<h1>
  js-browser-autoclick
</h1>

![JS](https://img.shields.io/badge/language-JS-blue)
![Contributors](https://img.shields.io/github/contributors/V-Power-Inc/js-browser-autoclick?color=light)

Это небольшое JavaScript приложение для консольного ввода в браузер, которое позволяет нажимать на некоторый элемент на странице по ID элемента, через определенное количество времени (По дефолту 1 минута 40 секунд).

Очень полезное решение, когда на странице присутствует проверка активности пользователя.

This is a small JavaScript application for console input to the browser that allows you to click on some element on the page by ID, after a certain amount of time (Default 1 minute 40 seconds).

A very useful solution when there is a user activity check on the page.

## RU 🌏 - Как использовать 

Для использования скрипта, необходимо открыть консоль браузера, сделать это можно через F12 или просмотр исходного кода, затем необходимо получить селектор нужного нам блока или его ID.
И прописать его в следующую секцию:

`
var element_by_id = document.getElementById('btn-confirm');
`

Заменив при этом вот этот текст **btn-confirm**

После замены нужно вставить скрипт в консоль браузера и нажать ENTER, что впоследствии позволит каждые 2 секунды кликать определенный элемент на странице.

Если время нужно изменить нужно изменить этот участок кода:
`
}, 100000);
`

Заменив при этом 100000 на другое число (Не забываем что 100000 в данном случае означает 1 минуту 40 секунд)

## EN 🌎 - How to use

To use the script, you need to open the browser console, you can do this through F12 or view the source code, then you need to get the selector of the block we need or its ID.
And add it to the next section:

`
var element_by_id = document.getElementById('btn-confirm');
`

Replacing this text with **btn-confirm**

After the replacement, you need to paste the script into the browser console and press ENTER, which will subsequently allow you to click a certain element on the page every 1 minute 40 seconds.

If the time needs to be changed, you need to change this section of code:
`
}, 100000);
`

Replacing 100000 with another number (Do not forget that 100000 in this case means 1 minute 40 seconds)

## Исходник / Source

https://github.com/V-Power-Inc/js-browser-autoclick/blob/master/solution.js

## Tested in browsers / Протестировано в браузерах
<div>
  <img src="https://github.com/devicons/devicon/blob/master/icons/chrome/chrome-original.svg" title="Chrome" alt="Chrome" width="40" height="40"/>&nbsp;
  <img src="https://raw.githubusercontent.com/V-Power-Inc/js-browser-autoclick/master/common/images/browsers/edge.jpg" title="Edge" alt="Edge" width="40" height="40"/>&nbsp;
</div>


## Technologies / Используемые технологии
<div>
  <img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" title="JavaScript" alt="JavaScript" width="40" height="40"/>&nbsp;
</div>

## Contributors 🧑‍🤝‍🧑

Thank you to all of our awesome contributors! ❤️

<a href="https://github.com/V-Power-Inc/js-browser-autoclick/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=V-Power-Inc/js-browser-autoclick" />
</a>

Made with [contrib.rocks](https://contrib.rocks).