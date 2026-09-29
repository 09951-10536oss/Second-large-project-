let timer;
let seconds = 1500;
document.getElementById('btn-start')?.addEventListener('click', () => {
    clearInterval(timer);
    timer = setInterval(() => {
        if (seconds <= 0) clearInterval(timer);
        seconds--;
        const m = String(Math.floor(seconds / 60)).padStart(2, '0');
        const s = String(seconds % 60).padStart(2, '0');
        document.getElementById('timer-display').textContent = `${m}:${s}`;
    }, 1000);
});
