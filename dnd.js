(() => {
    'use strict';
    const replace = ev => {
        if (ev) { window.removeEventListener(ev.type, replace, true); }
        try {
            const elements = document.getElementByClassName('skills')
            for ( const element of elements ) {
                const button = element.getElementByClassName('btn');
                if (button.textContent === "Religion") {
                    button.textContent = "Science";
                }
            }   
        } catch { }
    };
    if (document.readyState === 'loading') {
        window.addEventListener('DOMContentLoaded', replace, true);
    } else {
        replace();
    }
})();
