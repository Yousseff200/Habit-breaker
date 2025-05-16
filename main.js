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

  // إشعارات الموقع (جرس + Inbox)
  const notifBell = document.getElementById('notifBell');
  const notifInbox = document.getElementById('notifInbox');
  let notifList = JSON.parse(localStorage.getItem('notifInbox') || '[]');

  function renderInbox() {
    notifInbox.innerHTML = notifList.length
      ? notifList.map(n => `<div class="notif-item">${n}</div>`).join('')
      : '<div class="notif-item">لا توجد إشعارات بعد.</div>';
  }
  notifBell.addEventListener('click', function() {
    notifInbox.style.display = notifInbox.style.display === 'flex' ? 'none' : 'flex';
    notifBell.setAttribute('data-hasnew', 'false');
  });
  window.addEventListener('click', function(e) {
    if (!notifBell.contains(e.target) && !notifInbox.contains(e.target)) {
      notifInbox.style.display = 'none';
    }
  });
  function pushNotification(msg) {
    notifList.unshift(msg);
    if (notifList.length > 30) notifList = notifList.slice(0, 30);
    localStorage.setItem('notifInbox', JSON.stringify(notifList));
    notifBell.setAttribute('data-hasnew', 'true');
    renderInbox();
    showAnimatedToast(msg);
  }
  function showAnimatedToast(msg) {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.className = 'toast success';
    toast.style.display = 'block';
    toast.style.right = '-400px';
    toast.style.opacity = '1';
    setTimeout(() => {
      toast.style.transition = 'right 0.5s cubic-bezier(.68,-0.55,.27,1.55), opacity 0.3s';
      toast.style.right = '2rem';
    }, 10);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.right = '-400px';
    }, 3500);
    setTimeout(() => {
      toast.style.display = 'none';
      toast.style.transition = '';
    }, 4000);
  }
  // عند تحميل الصفحة
  renderInbox();
  // مثال: استقبال إشعار من الكود (يمكنك استبداله بإشعار OneSignal)
  // pushNotification('مثال: إشعار جديد!');
  // إذا أردت استقبال إشعار من OneSignal:
  if (window.OneSignal) {
    window.OneSignalDeferred = window.OneSignalDeferred || [];
    OneSignalDeferred.push(function(OneSignal) {
      OneSignal.on('notificationDisplay', function(event) {
        if(event && event.heading) {
          pushNotification(event.heading + (event.content ? (': ' + event.content) : ''));
        }
      });
    });
  }
});
