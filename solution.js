/** Interval function, where 1000 - like 1 second */
setInterval(() => {

    /** Selectors or id which we need for click */
    var nodes = document.getElementsByClassName('js-title-edit-button')

    /** JS click event */
    var clickEvent = new MouseEvent("click", {
        "view": window,
        "bubbles": true,
        "cancelable": false
    });

    /** Selector which we want to be clicked */
    nodes[0].dispatchEvent(clickEvent);

    /** Console output */
    console.log('Клик 11');
}, 2000);