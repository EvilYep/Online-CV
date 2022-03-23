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

    function setTheme(th) {
        bodyClasses = document.getElementsByTagName('html')[0].classList;
        bodyClasses.replace(theme.value, th);
        theme.value = th;
        saveTheme();
    }

    function saveTheme() {
        localStorage.setItem('theme', theme.value);
        document.activeElement.blur();
    }

    function startRetroBackground() {
        const canvas = document.getElementById('retro-background');
        const ctx = canvas.getContext('2d');

        const w = canvas.width = document.body.offsetWidth;
        const h = canvas.height = document.body.offsetHeight;
        const cols = Math.floor(w / 20) + 1;
        const YPos = Array(cols).fill(0);

        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, w, h);

        function matrix () {
            ctx.fillStyle = '#0001';
            ctx.fillRect(0, 0, w, h);

            ctx.fillStyle = '#0f0';
            ctx.font = '15pt "Roboto Mono"';

            YPos.forEach((y, ind) => {
                const text = String.fromCharCode(Math.random() * 2048);
                const x = ind * 20;
                ctx.fillText(text, x, y);
                if (y > 100 + Math.random() * 10000) YPos[ind] = 0;
                else YPos[ind] = y + 20;
            });
        }

        setInterval(matrix, 50);
    }

    function parallaxScroll(element, speed) {
        let e = document.getElementById(element);
        window.addEventListener("scroll", (e) => {
            const distance = window.scrollY;
            document.getElementById(element).style.transform = `translateY(${distance * speed}px)`;
        });
    }

    function letsGo() {
        setInitialTheme();
        startRetroBackground();
    }

    return {
        theme,
        setTheme,
        parallaxScroll,
        letsGo,
    }
}
