/** Interval function, where 1000 - like 1 second */
setInterval(() => {

    /** Selectors or id which we need for click */
    var nodes = document.getElementsByClassName('js-title-edit-button-1');

    /** JS click event */
    var clickEvent = new MouseEvent("click", {
        "view": window,
        "bubbles": true,
        "cancelable": false
    });

    /** Try to click selector - if its not exist's, we logging in the catch block */
    try {
        /** Selector which we want to be clicked */
        nodes[0].dispatchEvent(clickEvent);

        /** Console output */
        console.log('Клик 11');
    } catch (TypeError) {

        /** Catch type error if element not exists */
        console.log(TypeError);
    }
}, 2000);