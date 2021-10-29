import {ref} from "vue";

export default function initApp() {
    const themeRotation = {
        light: 'dark',
        dark: 'nineties',
        nineties: 'light',
    };
    let theme = 'light';
    let bodyClasses = [];

    function setInitialTheme() {
        theme = localStorage.getItem('theme') || Object.keys(themeRotation)[0];
        bodyClasses = document.getElementsByTagName('html')[0].classList;
        bodyClasses.add(theme);
        saveTheme();
    }

    function rotateThemes() {
        let next = themeRotation[theme];
        bodyClasses.replace(theme, next);
        theme = next;
        saveTheme();
    }

    function saveTheme() {
        localStorage.setItem('theme', theme);
    }

    return {
        themeRotation,
        theme,
        bodyClasses,
        setInitialTheme,
        rotateThemes,
    }
}
