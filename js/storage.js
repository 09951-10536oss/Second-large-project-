function getStoredTasks() {
    return JSON.parse(localStorage.getItem(CONFIG.APP_KEY)) || [];
}
function saveStoredTasks(tasks) {
    localStorage.setItem(CONFIG.APP_KEY, JSON.stringify(tasks));
}
