export default function easterEgg() {
    const KONAMI_CODE = [
        'ArrowUp',
        'ArrowUp',
        'ArrowDown',
        'ArrowDown',
        'ArrowLeft',
        'ArrowRight',
        'ArrowLeft',
        'ArrowRight',
        'b',
        'a',
    ];
    let c = 0;

    function startEasterEggListener(cb) {
        window.addEventListener("keydown", (e) => {
            c = (e.key === KONAMI_CODE[c] ? c + 1 : (e.key !== 'ArrowUp' ? 0 : (c ? (KONAMI_CODE[c-1] === 'ArrowUp' ? c : 0) : 0)));
            if (c === KONAMI_CODE.length) {
                activateGodMode()
            }
        });
    }

    function activateGodMode() {
        console.log('God Mode Activated');
    }

    return {
        startEasterEggListener
    }
}
