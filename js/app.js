document.addEventListener('DOMContentLoaded', () => {
    initMockData();
    renderAppTasks();
});
function renderAppTasks() {
    if (typeof renderTasks === 'function') renderTasks();
}
