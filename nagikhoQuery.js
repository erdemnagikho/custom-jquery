const addFunctionsToCollection = collection => {
    collection.each = (callback) => {
        collection.forEach((element, i) => {
            const boundFun = callback.bind(element);
            boundFun(i, element);
        });
    };
    collection.on = (eventName, handler) => {
        collection.forEach((element) => {
            element.addEventListener(eventName, handler);
        });
    };
    collection.css = (...cssArgs) => {
        if (typeof cssArgs[0] === 'string') {
            const [property, value] = cssArgs;
            collection.forEach((element) => {
                element.style[property] = value;
            });
        } else if (typeof cssArgs[0] === 'object') {
            const cssProps = Object.entries(cssArgs[0]);
            collection.forEach((element) => {
                cssProps.forEach(([property, value]) => {
                    element.style[property] = value;
                });
            });
        }
    };
};

const $ = (...args) => {
    if (typeof args[0] === 'function') {
        // document ready listener
        const readyFun = args[0];
        document.addEventListener('DOMContentLoaded', readyFun);
    } else if (typeof args[0] === 'string') {
        // select an element!
        const selector = args[0];
        const collection = document.querySelectorAll(selector);
        addFunctionsToCollection(collection);
        return collection;
    } else if (args[0] instanceof HTMLElement) {
        // an element!
        const collection = [args[0]];
        addFunctionsToCollection(collection);
        return collection;
    }
};