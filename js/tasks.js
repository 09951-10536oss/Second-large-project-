function renderTasks() {
    const list = document.getElementById('task-list');
    if (!list) return;
    const tasks = getStoredTasks();
    if (tasks.length === 0) {
        list.innerHTML = '<p>ไม่มีงานที่ต้องทำในขณะนี้</p>';
        return;
    }
    list.innerHTML = tasks.map(t => `
        <div class="task-card">
            <h4>${t.title}</h4>
            <p>วิชา: ${t.subject}</p>
            <p>สถานะ: ${t.completed ? '✅ เสร็จแล้ว' : '⏳ รอดำเนินการ'}</p>
        </div>
    `).join('');
}
