function exportData() {
    const data = JSON.stringify(getStoredTasks());
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'eduflow-backup.json';
    a.click();
}
