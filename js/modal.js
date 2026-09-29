function openAddTaskModal() {
    const name = prompt('กรุณากรอกชื่อการบ้าน/งาน:');
    if (name) {
        const tasks = getStoredTasks();
        tasks.push({ id: Date.now().toString(), title: name, subject: 'ทั่วไป', completed: false });
        saveStoredTasks(tasks);
        if (typeof renderTasks === 'function') renderTasks();
        showToast('เพิ่มงานสำเร็จ!');
    }
}
