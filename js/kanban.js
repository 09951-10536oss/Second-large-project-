document.addEventListener('DOMContentLoaded', () => {
    const tasks = getStoredTasks();
    console.log('Kanban loaded with', tasks.length, 'tasks');
});
