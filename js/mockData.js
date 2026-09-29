function initMockData() {
    if (!localStorage.getItem(CONFIG.APP_KEY)) {
        const initialTasks = [
            { id: '1', title: 'ส่งรายงานวิชาภาษาไทย', subject: 'ภาษาไทย', completed: false },
            { id: '2', title: 'ทำแบบฝึกหัดคณิตศาสตร์', subject: 'คณิตศาสตร์', completed: true }
        ];
        saveStoredTasks(initialTasks);
    }
}
