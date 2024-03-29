<img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" width="100" align="right"/>

<h1>
  js-browser-autoclick
</h1>

![JS](https://img.shields.io/badge/language-JS-blue)
![Contributors](https://img.shields.io/github/contributors/V-Power-Inc/js-browser-autoclick?color=light)

Это небольшое JavaScript приложение для консольного ввода в браузер, которое позволяет нажимать на некоторый элемент на странице по имени класса, через определенное количество времени (По дефолту 2 секунды).

Очень полезное решение, когда на странице присутствует проверка активности пользователя.

This is a small JavaScript application for console input to the browser that allows you to click on some element on the page by class name, after a certain amount of time (Default 2 seconds).

A very useful solution when there is a user activity check on the page.

## RU 🌏 - Как использовать 

Для использования скрипта, необходимо открыть консоль браузера, сделать это можно через F12 или просмотр исходного кода, затем необходимо получить селектор нужного нам блока или его ID.
И прописать его в следующую секцию:

`
var elements_by_class = document.getElementsByClassName('js-title-edit-button-1');
`

Заменив при этом вот этот текст **js-title-edit-button-1**

После замены нужно вставить скрипт в консоль браузера и нажать ENTER, что впоследствии позволит каждые 2 секунды кликать определенный элемент на странице.

Если время нужно изменить нужно изменить этот участок кода:
`
}, 2000);
`

Заменив при этом 2000 на другое число (Не забываем что 2000 в данном случае означает 2 секунды)

## EN 🌎 - How to use

To use the script, you need to open the browser console, you can do this through F12 or view the source code, then you need to get the selector of the block we need or its ID.
And add it to the next section:

`
var elements_by_class = document.getElementsByClassName('js-title-edit-button-1');
`

Replacing this text with **js-title-edit-button-1**

After the replacement, you need to paste the script into the browser console and press ENTER, which will subsequently allow you to click a certain element on the page every 2 seconds.

If the time needs to be changed, you need to change this section of code:
`
}, 2000);
`

Replacing 2000 with another number (Do not forget that 2000 in this case means 2 seconds)

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

## Existing branches

- **mro** - for view online conferences without popup on Desktop (Popups are checking user activity on page)

## Contributors 🧑‍🤝‍🧑

Thank you to all of our awesome contributors! ❤️

<a href="https://github.com/V-Power-Inc/js-browser-autoclick/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=V-Power-Inc/js-browser-autoclick" />
</a>

Made with [contrib.rocks](https://contrib.rocks).