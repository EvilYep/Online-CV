import {ref} from "vue";

export default function initApp() {
    const themeRotation = {
        light: 'dark',
        dark: 'retro',
        retro: 'light',
    };
    let theme = ref('light');
    let bodyClasses = [];

    function setInitialTheme() {
        theme.value = localStorage.getItem('theme') || Object.keys(themeRotation)[0];
        bodyClasses = document.getElementsByTagName('html')[0].classList;
        bodyClasses.add(theme.value);
        saveTheme();
    }

    function rotateThemes() {
        theme.value = localStorage.getItem('theme') || Object.keys(themeRotation)[0];
        let next = themeRotation[theme.value];
        bodyClasses = document.getElementsByTagName('html')[0].classList;
        bodyClasses.replace(theme.value, next);
        theme.value = next;
        saveTheme();
    }

    function logTheme(th) {
        console.log(th);
    }

    function setTheme(th) {
        bodyClasses = document.getElementsByTagName('html')[0].classList;
        bodyClasses.replace(theme.value, th);
        theme.value = th;
        saveTheme();
    }

    function saveTheme() {
        localStorage.setItem('theme', theme.value);
    }

    return {
        themeRotation,
        theme,
        bodyClasses,
        setInitialTheme,
        rotateThemes,
        logTheme,
        setTheme,
    }
}
