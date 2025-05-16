// main.js - منطق الصفحة الرئيسية وزر البدء والوضع الليلي

document.addEventListener('DOMContentLoaded', function() {
  // زر البدء
  const startBtn = document.getElementById('startBtn');
  if (startBtn) {
    startBtn.addEventListener('click', function() {
      window.location.href = 'habits.html';
    });
  }

  // زر الوضع الليلي
  let darkModeBtn = document.getElementById('darkModeToggle');
  if (!darkModeBtn) {
    darkModeBtn = document.createElement('button');
    darkModeBtn.id = 'darkModeToggle';
    darkModeBtn.title = 'تبديل الوضع الليلي';
    darkModeBtn.innerHTML = '🌙';
    document.body.appendChild(darkModeBtn);
  }
  // تفعيل الوضع الليلي من localStorage
  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
  darkModeBtn.addEventListener('click', function() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  });
});
