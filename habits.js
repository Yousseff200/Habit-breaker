// habits.js - منطق صفحة العادات السيئة

const HABITS = [
  {
    id: 'smoking',
    name: 'التدخين',
    desc: 'استهلاك منتجات التبغ بشكل متكرر.',
    harm: 'يزيد من خطر الإصابة بأمراض القلب والرئة والسرطان.'
  },
  {
    id: 'sugar',
    name: 'الإفراط في السكر',
    desc: 'تناول كميات كبيرة من السكر يوميًا.',
    harm: 'يسبب السمنة، السكري، وتسوس الأسنان.'
  },
  {
    id: 'lateness',
    name: 'التأخير المزمن',
    desc: 'عدم الالتزام بالمواعيد بشكل متكرر.',
    harm: 'يؤثر على العلاقات والثقة بالنفس.'
  },
  {
    id: 'procrastination',
    name: 'المماطلة',
    desc: 'تأجيل المهام الضرورية باستمرار.',
    harm: 'يؤدي إلى التوتر وفقدان الفرص.'
  },
  {
    id: 'junkfood',
    name: 'الإفراط في الوجبات السريعة',
    desc: 'تناول أطعمة غير صحية بكثرة.',
    harm: 'يزيد من خطر الأمراض المزمنة.'
  },
  {
    id: 'nails',
    name: 'قضم الأظافر',
    desc: 'عادة عصبية لقضم الأظافر.',
    harm: 'تؤدي إلى مشاكل صحية بالفم والأظافر.'
  },
  {
    id: 'anger',
    name: 'الغضب السريع',
    desc: 'الانفعال والغضب لأسباب بسيطة.',
    harm: 'يؤثر على الصحة النفسية والعلاقات.'
  },
  {
    id: 'negativity',
    name: 'التفكير السلبي',
    desc: 'التركيز على الجوانب السلبية دائمًا.',
    harm: 'يقلل من جودة الحياة ويزيد التوتر.'
  },
  {
    id: 'phone',
    name: 'إدمان الهاتف',
    desc: 'استخدام الهاتف لساعات طويلة يوميًا.',
    harm: 'يؤثر على التركيز والنوم والصحة النفسية.'
  },
  {
    id: 'sleep',
    name: 'السهر المفرط',
    desc: 'البقاء مستيقظًا حتى وقت متأخر يوميًا.',
    harm: 'يؤثر على الصحة العامة والطاقة.'
  }
];

function getHabitData() {
  const data = localStorage.getItem('habitProgress');
  return data ? JSON.parse(data) : {};
}
function saveHabitData(data) {
  localStorage.setItem('habitProgress', JSON.stringify(data));
}

function renderHabits(filter = '') {
  const list = document.getElementById('habitsList');
  list.innerHTML = '';
  const progress = getHabitData();
  HABITS.filter(h => h.name.includes(filter) || h.desc.includes(filter)).forEach(habit => {
    const days = progress[habit.id]?.days || 0;
    const percent = Math.min(100, days * 5);
    const card = document.createElement('div');
    card.className = 'habit-card';
    card.innerHTML = `
      <h3>${habit.name}</h3>
      <p>${habit.desc}</p>
      <p class="harm">${habit.harm}</p>
      <button data-id="${habit.id}" class="resist-btn">تمت مقاومتها اليوم</button>
      <div class="progress-bar"><div class="progress" style="width:${percent}%"></div></div>
      <div class="days">أيام المقاومة: <span>${days}</span></div>
    `;
    list.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  renderHabits();
  document.getElementById('searchInput').addEventListener('input', function(e) {
    renderHabits(e.target.value.trim());
  });
  document.getElementById('habitsList').addEventListener('click', function(e) {
    if (e.target.classList.contains('resist-btn')) {
      const id = e.target.getAttribute('data-id');
      const progress = getHabitData();
      const today = new Date().toLocaleDateString();
      if (progress[id]?.last === today) {
        showToast('لقد قمت بمقاومة هذه العادة اليوم بالفعل!');
        return;
      }
      if (!progress[id]) progress[id] = { days: 0 };
      progress[id].days++;
      progress[id].last = today;
      saveHabitData(progress);
      renderHabits(document.getElementById('searchInput').value.trim());
      showToast('أحسنت! يوم جديد من المقاومة 🎉', 'success');
      showMotivation();
      notify('يوم جديد من المقاومة!', 'استمر في تحطيم عاداتك السيئة!');
      // إرسال إشعار تحفيزي عبر OneSignal إذا كان متاحًا
      if (window.OneSignal && OneSignal.sendSelfNotification) {
        window.OneSignalDeferred = window.OneSignalDeferred || [];
        OneSignalDeferred.push(function(OneSignal) {
          OneSignal.sendSelfNotification(
            '👏 يوم جديد من الالتزام!',
            'استمر في تحطيم عاداتك السيئة. أنت بطل اليوم! 💪',
            null,
            null
          ).catch(function(e){});
        });
      }
    }
  });
});

function showToast(msg, type = 'info') {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.className = 'toast ' + type;
  toast.style.display = 'block';
  setTimeout(() => { toast.style.display = 'none'; }, 2500);
}

function notify(title, body) {
  if (window.Notification && Notification.permission === 'granted') {
    new Notification(title, { body });
  }
}
if (window.Notification && Notification.permission !== 'granted') {
  Notification.requestPermission();
}

// رسائل تحفيزية دورية
const MOTIVATION = [
  'كل يوم مقاومة هو انتصار صغير! 💪',
  'استمر، أنت أقوى من العادة السيئة!',
  'تذكر هدفك وواصل التحدي!',
  'كل يوم جديد فرصة لبداية أفضل.',
  'أنت بطل في معركتك مع العادات.'
];
function showMotivation() {
  const msg = MOTIVATION[Math.floor(Math.random() * MOTIVATION.length)];
  showToast(msg, 'success');
}
setInterval(showMotivation, 1000 * 60 * 3); // كل 3 دقائق
