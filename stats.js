// stats.js - صفحة الإحصائيات

const HABITS = [
  { id: 'smoking', name: 'التدخين' },
  { id: 'sugar', name: 'الإفراط في السكر' },
  { id: 'lateness', name: 'التأخير المزمن' },
  { id: 'procrastination', name: 'المماطلة' },
  { id: 'junkfood', name: 'الإفراط في الوجبات السريعة' },
  { id: 'nails', name: 'قضم الأظافر' },
  { id: 'anger', name: 'الغضب السريع' },
  { id: 'negativity', name: 'التفكير السلبي' },
  { id: 'phone', name: 'إدمان الهاتف' },
  { id: 'sleep', name: 'السهر المفرط' }
];

function getHabitData() {
  const data = localStorage.getItem('habitProgress');
  return data ? JSON.parse(data) : {};
}

function renderStats() {
  const stats = getHabitData();
  const container = document.getElementById('statsContainer');
  container.innerHTML = '';
  let maxDays = 0, bestHabit = '';
  HABITS.forEach(habit => {
    const days = stats[habit.id]?.days || 0;
    if (days > maxDays) {
      maxDays = days;
      bestHabit = habit.name;
    }
    const percent = Math.min(100, days * 5);
    const stat = document.createElement('div');
    stat.className = 'stat-card';
    stat.innerHTML = `
      <h3>${habit.name}</h3>
      <div class="progress-bar"><div class="progress" style="width:${percent}%"></div></div>
      <div class="days">أيام المقاومة: <span>${days}</span></div>
      <div class="percent">نسبة التقدم: <span>${percent}%</span></div>
    `;
    container.appendChild(stat);
  });
  if (bestHabit) {
    const best = document.createElement('div');
    best.className = 'best-habit';
    best.innerHTML = `<strong>أكثر عادة تم الالتزام بها:</strong> ${bestHabit} (${maxDays} يوم)`;
    container.prepend(best);
  }
}
document.addEventListener('DOMContentLoaded', renderStats);
