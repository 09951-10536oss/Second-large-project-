document.getElementById('theme-toggle')?.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    showToast('สลับโหมดการแสดงผลเรียบร้อย');
});
