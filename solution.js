/** Interval function, where 1000 - like 1 second */
setInterval(() => {

    /** Selectors or id which we need for click */
    var elements_by_class = document.getElementsByClassName('js-title-edit-button-1');

    /** Selector of element with id (Use if selector is id) */
    var element_by_id = document.getElementById('btn-confirm');

    /** JS click event */
    var clickEvent = new MouseEvent("click", {
        "view": window,
        "bubbles": true,
        "cancelable": false
    });

    /** Try to click selector - if its not exist's, we logging in the catch block */
    try {
        /** Selector which we want to be clicked */
        element_by_id.dispatchEvent(clickEvent);

        /** Console output */
        console.log('Element being clicked');
    } catch (TypeError) {

        /** Catch type error if element not exists */
        console.log(TypeError);
    }
}, 100000);