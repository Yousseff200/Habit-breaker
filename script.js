// Habit data
const habitsData = {
    smoking: {
        title: 'التدخين',
        definition: 'تعاطي التبغ ومنتجاته بشكل منتظم، مما يؤدي إلى الإدمان الجسدي والنفسي.',
        harm: 'يؤدي التدخين إلى تدمير الرئتين وزيادة خطر الإصابة بالسرطان وأمراض القلب.',
        effect: 'يضعف جهاز المناعة ويقلل من مستويات الطاقة ويسبب الشيخوخة المبكرة.',
        stat: '٧ ملايين شخص يموتون سنوياً بسبب التدخين حول العالم.',
        motivation: 'كل يوم بدون تدخين هو انتصار لصحتك وحياتك!'
    },
    procrastination: {
        title: 'التسويف',
        definition: 'تأجيل المهام والمسؤوليات رغم القدرة على إنجازها، مما يؤدي إلى تراكم الضغوط.',
        harm: 'يؤدي إلى تراكم المهام وزيادة التوتر والقلق وفقدان الفرص.',
        effect: 'يؤثر سلباً على الإنتاجية والثقة بالنفس والعلاقات المهنية.',
        stat: '٢٠٪ من سكان العالم يعانون من التسويف المزمن.',
        motivation: 'اليوم هو أفضل وقت للبدء. لا تؤجل سعادتك ونجاحك!'
    },
    'late-sleep': {
        title: 'السهر',
        definition: 'نمط نوم غير صحي يتمثل في النوم متأخراً والاستيقاظ متأخراً، مما يخل بالإيقاع الطبيعي للجسم.',
        harm: 'يضعف الذاكرة ويقلل التركيز ويؤثر على الصحة النفسية.',
        effect: 'يخل بإيقاع الساعة البيولوجية ويضعف جهاز المناعة.',
        stat: '٤٠٪ من البالغين ينامون أقل من ٧ ساعات يومياً.',
        motivation: 'نوم صحي يعني حياة أفضل. استثمر في راحتك!'
    },
    'phone-addiction': {
        title: 'إدمان الهاتف',
        definition: 'استخدام مفرط للهاتف الذكي يتداخل مع الأنشطة اليومية والعلاقات الاجتماعية.',
        harm: 'يسبب مشاكل في العين والرقبة ويؤثر على جودة النوم.',
        effect: 'يقلل التركيز ويضعف العلاقات الاجتماعية الحقيقية.',
        stat: 'يقضي الشخص العادي ٤ ساعات يومياً على هاتفه.',
        motivation: 'عش اللحظة الحقيقية. الحياة أجمل خارج الشاشة!'
    },
    'unhealthy-food': {
        title: 'الأكل غير الصحي',
        definition: 'تناول الأطعمة الغنية بالدهون والسكريات والمعالجة، مع قلة تناول الأطعمة الصحية.',
        harm: 'يزيد من خطر السمنة وأمراض القلب والسكري.',
        effect: 'يؤثر على مستويات الطاقة والمزاج والصحة العامة.',
        stat: '٢.٨ مليون شخص يموتون سنوياً بسبب السمنة.',
        motivation: 'طعامك هو وقودك. اختر الأفضل لجسمك!'
    },
    'negative-thinking': {
        title: 'التفكير السلبي',
        definition: 'نمط تفكير يركز على الجوانب السلبية في المواقف والأحداث، مما يؤثر على النظرة للحياة.',
        harm: 'يزيد من مستويات التوتر والاكتئاب ويضعف المناعة.',
        effect: 'يؤثر على العلاقات الشخصية والنجاح المهني والسعادة.',
        stat: '٨٠٪ من أفكارنا اليومية سلبية إذا لم نتحكم بها.',
        motivation: 'أفكارك تصنع واقعك. اختر الإيجابية!'
    },
    'social-media': {
        title: 'إدمان مواقع التواصل',
        definition: 'قضاء وقت طويل في تصفح مواقع التواصل الاجتماعي بشكل يؤثر على الحياة اليومية.',
        harm: 'يؤدي إلى إهدار الوقت وضعف التركيز والعزلة الاجتماعية الحقيقية.',
        effect: 'يؤثر على الإنتاجية والصحة النفسية والعلاقات الواقعية.',
        stat: 'يقضي المستخدم العادي 2.5 ساعة يومياً على مواقع التواصل.',
        motivation: 'الحياة الحقيقية أجمل وأكثر قيمة من العالم الافتراضي.'
    },
    'nail-biting': {
        title: 'قضم الأظافر',
        definition: 'عادة عصبية لا إرادية تتمثل في قضم الأظافر، غالباً ما تكون مرتبطة بالتوتر والقلق.',
        harm: 'يسبب تلف الأظافر والأسنان ويزيد خطر العدوى البكتيرية.',
        effect: 'يؤثر على مظهر اليدين والثقة بالنفس ويعكس التوتر.',
        stat: '30% من البالغين يعانون من هذه العادة.',
        motivation: 'يداك تستحقان العناية والاهتمام.'
    },
    'impulse-buying': {
        title: 'الشراء الاندفاعي',
        definition: 'شراء منتجات غير مخطط لها بناءً على رغبة لحظية دون تفكير في العواقب المالية.',
        harm: 'يؤدي إلى مشاكل مالية وتراكم أشياء غير ضرورية.',
        effect: 'يسبب الندم والتوتر المالي والفوضى في المنزل.',
        stat: '40% من قرارات الشراء تتم بشكل اندفاعي.',
        motivation: 'التخطيط المالي يمنحك حرية وراحة بال أكبر.'
    },
    'interrupting': {
        title: 'مقاطعة الآخرين',
        definition: 'التحدث قبل انتهاء الشخص الآخر من كلامه، مما يعيق التواصل الفعال.',
        harm: 'تضر بالعلاقات الشخصية والمهنية وتظهر عدم الاحترام.',
        effect: 'تؤثر على جودة التواصل وفهم الآخرين.',
        stat: '60% من سوء التفاهم يحدث بسبب المقاطعة.',
        motivation: 'الإنصات الجيد يفتح آفاقاً جديدة للفهم والتعلم.'
    },
    'perfectionism': {
        title: 'الكمالية المفرطة',
        definition: 'السعي المستمر للكمال في كل شيء، مما يؤدي إلى الضغط النفسي وتأخير الإنجاز.',
        harm: 'تسبب التوتر والقلق وتأخير إنجاز المهام.',
        effect: 'تعيق التقدم والإبداع والرضا عن الإنجازات.',
        stat: '25% من الناس يعانون من الكمالية المفرطة.',
        motivation: 'التقدم التدريجي أفضل من الكمال المستحيل.'
    },
    'self-criticism': {
        title: 'النقد الذاتي المفرط',
        definition: 'توجيه النقد المستمر للذات والتركيز على العيوب والأخطاء بشكل مبالغ فيه.',
        harm: 'يؤدي إلى تدني تقدير الذات والاكتئاب.',
        effect: 'يمنع من تقدير النجاحات والاستمتاع بالإنجازات.',
        stat: '70% من الأفكار السلبية موجهة للذات.',
        motivation: 'كن صديقاً لنفسك، الرفق بالذات يقود للنجاح.'
    },
    'stress-eating': {
        title: 'الأكل العاطفي',
        definition: 'اللجوء إلى الطعام كوسيلة للتعامل مع المشاعر السلبية والتوتر.',
        harm: 'يؤدي إلى زيادة الوزن ومشاكل صحية.',
        effect: 'يخلق علاقة غير صحية مع الطعام والمشاعر.',
        stat: '50% من الناس يلجؤون للطعام عند التوتر.',
        motivation: 'مشاعرك تستحق المعالجة، وجسمك يستحق الاحترام.'
    },
    'overthinking': {
        title: 'التفكير الزائد',
        definition: 'الإفراط في تحليل المواقف والقرارات بشكل يؤدي إلى الشلل الفكري والتردد.',
        harm: 'يستنزف الطاقة العقلية ويسبب القلق والتوتر.',
        effect: 'يعيق اتخاذ القرارات ويقلل من الاستمتاع بالحياة.',
        stat: '80% من مخاوفنا لا تتحقق في الواقع.',
        motivation: 'الحياة أبسط مما نتخيل، ثق في قراراتك.'
    },
    'porn-addiction': {
        title: 'إدمان المحتوى الإباحي',
        definition: 'استخدام قهري للمحتوى الإباحي يؤثر على الصحة النفسية والعلاقات الاجتماعية.',
        harm: 'يؤثر سلباً على الدماغ ويغير نظرة الشخص للعلاقات الطبيعية.',
        effect: 'يسبب العزلة الاجتماعية والاكتئاب وضعف الثقة بالنفس.',
        stat: '40% من المدمنين يبدأون قبل سن 12 عاماً.',
        motivation: 'أنت أقوى من إدمانك. كل يوم نظيف هو انتصار جديد.'
    }
};

// Daily Tips Data
const dailyTips = {
    smoking: [
        'خذ نفساً عميقاً من الهواء النقي كلما شعرت برغبة في التدخين',
        'اشرب الماء بكثرة، يساعد في تخفيف الرغبة',
        'مارس الرياضة، تساعد في تحسين المزاج وتقليل التوتر',
        'احتفظ بسواك أو علكة خالية من السكر'
    ],
    procrastination: [
        'قسم مهامك إلى أجزاء صغيرة يمكن إنجازها',
        'ابدأ بأصعب مهمة في يومك',
        'استخدم تقنية بومودورو: 25 دقيقة عمل، 5 دقائق راحة',
        'أزل المشتتات من محيطك قبل البدء بالعمل'
    ],
    'late-sleep': [
        'حدد موعداً ثابتاً للنوم والاستيقاظ',
        'تجنب الشاشات قبل النوم بساعة',
        'اجعل غرفتك مظلمة وهادئة',
        'تجنب الكافيين بعد العصر'
    ],
    'phone-addiction': [
        'ضع هاتفك في غرفة أخرى أثناء العمل',
        'عطل الإشعارات غير الضرورية',
        'حدد أوقاتاً محددة لتصفح مواقع التواصل',
        'استخدم تطبيقات تتبع وقت الشاشة'
    ],
    'unhealthy-food': [
        'حضّر وجباتك في المنزل',
        'اشرب ماء قبل الأكل بـ 20 دقيقة',
        'تناول الخضروات أولاً في وجبتك',
        'خطط لوجباتك الأسبوعية مسبقاً'
    ],
    'negative-thinking': [
        'اكتب ثلاثة أشياء إيجابية كل صباح',
        'حول كل فكرة سلبية إلى تحدي إيجابي',
        'تجنب مقارنة نفسك بالآخرين',
        'مارس التأمل والتنفس العميق'
    ],
    'social-media': [
        'حدد وقتاً محدداً لتصفح مواقع التواصل',
        'عطل الإشعارات غير الضرورية',
        'اجعل هاتفك بعيداً عن غرفة النوم',
        'خصص وقتاً للقاء الأصدقاء وجهاً لوجه'
    ],
    'nail-biting': [
        'استخدم طلاء أظافر مر الطعم',
        'اشغل يديك بشيء آخر عند التوتر',
        'حافظ على أظافرك مقصوصة ومرتبة',
        'تعرف على مسببات التوتر وعالجها'
    ],
    'impulse-buying': [
        'اكتب قائمة تسوق والتزم بها',
        'انتظر 24 ساعة قبل أي شراء غير ضروري',
        'اعمل ميزانية شهرية واتبعها',
        'اسأل نفسك: هل أحتاج هذا حقاً؟'
    ],
    'interrupting': [
        'خذ نفساً عميقاً قبل الرد',
        'دوّن ملاحظاتك بدل المقاطعة',
        'انتظر ثانيتين بعد انتهاء المتحدث',
        'ركز على فهم الرسالة كاملة'
    ],
    'perfectionism': [
        'حدد أولوياتك بواقعية',
        'اقبل أن الأخطاء جزء من التعلم',
        'ركز على التقدم وليس الكمال',
        'احتفل بالإنجازات الصغيرة'
    ],
    'self-criticism': [
        'اكتب ثلاث نقاط إيجابية عن نفسك يومياً',
        'تحدث مع نفسك كما تتحدث مع صديق',
        'حول النقد إلى فرص للتحسين',
        'تذكر نجاحاتك السابقة'
    ],
    'stress-eating': [
        'تعرف على مشاعرك قبل الأكل',
        'مارس تمارين التنفس عند التوتر',
        'اشرب ماء عند الشعور بالتوتر',
        'جد بدائل صحية للتعامل مع التوتر'
    ],
    'overthinking': [
        'حدد وقتاً محدداً للتفكير في المشكلة',
        'اكتب أفكارك على ورقة',
        'ركز على ما يمكنك التحكم به',
        'مارس التأمل للتخلص من الأفكار السلبية'
    ],
    'porn-addiction': [
        'ثبت برامج حماية على أجهزتك',
        'اشغل وقت فراغك بالرياضة والهوايات المفيدة',
        'تواصل مع مختص نفسي للمساعدة',
        'شارك في مجموعات الدعم والتعافي'
    ]
};

// DOM Elements
const sections = document.querySelectorAll('.section');
const startButton = document.getElementById('startButton');
const habitCards = document.querySelectorAll('.habit-card');
const startTrackingButton = document.getElementById('startTracking');
const successButton = document.getElementById('successButton');
const themeToggle = document.getElementById('themeToggle');
const shareProgressBtn = document.getElementById('shareProgress');
const habitSearch = document.getElementById('habitSearch');
const noResults = document.getElementById('noResults');

// State Management
let currentHabit = null;
let streak = 0;
let lastSuccessDate = null;
let bestStreak = 0; // Add best streak tracking

// Theme Management
function setTheme(isDark) {
    if (isDark) {
        document.body.classList.add('dark-mode');
        themeToggle.querySelector('i').classList.remove('fa-moon');
        themeToggle.querySelector('i').classList.add('fa-sun');
    } else {
        document.body.classList.remove('dark-mode');
        themeToggle.querySelector('i').classList.remove('fa-sun');
        themeToggle.querySelector('i').classList.add('fa-moon');
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        setTheme(true);
    }
}

// Theme Toggle
themeToggle.addEventListener('click', () => {
    const isDark = !document.body.classList.contains('dark-mode');
    setTheme(isDark);
});

// Navigation
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        
        // Update active link
        navLinks.forEach(navLink => navLink.classList.remove('active'));
        link.classList.add('active');
        
        // Show target section
        showSection(targetId);
    });
});

// Update navigation when sections change
function showSection(sectionId) {
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
    
    // Update active nav link
    navLinks.forEach(link => {
        const linkTarget = link.getAttribute('href').substring(1);
        if (linkTarget === sectionId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Event Listeners
startButton.addEventListener('click', () => {
    showSection('habitSelection');
});

habitCards.forEach(card => {
    card.addEventListener('click', () => {
        const habitId = card.dataset.habit;
        currentHabit = habitId;
        updateHabitInfo(habitId);
        showDailyTip();
        showSection('habitInfo');
    });
});

startTrackingButton.addEventListener('click', () => {
    loadProgress();
    showSection('progressTracking');
    updateProgress();
});

// Habit Info Update
function updateHabitInfo(habitId) {
    const habit = habitsData[habitId];
    document.getElementById('habitTitle').textContent = habit.title;
    document.getElementById('habitDefinition').textContent = habit.definition;
    document.getElementById('habitHarm').textContent = habit.harm;
    document.getElementById('habitEffect').textContent = habit.effect;
    document.getElementById('habitStat').textContent = habit.stat;
    document.getElementById('habitMotivation').textContent = habit.motivation;
}

// Progress Tracking
function loadProgress() {
    const savedData = localStorage.getItem(`habit_${currentHabit}`);
    if (savedData) {
        const data = JSON.parse(savedData);
        streak = data.streak;
        bestStreak = data.bestStreak || streak; // Load best streak
        lastSuccessDate = new Date(data.lastSuccessDate);
        checkStreak();
    }
}

function saveProgress() {
    // Update best streak if current streak is higher
    if (streak > bestStreak) {
        bestStreak = streak;
    }
    
    const data = {
        streak,
        bestStreak,
        lastSuccessDate: new Date().toISOString()
    };
    localStorage.setItem(`habit_${currentHabit}`, JSON.stringify(data));
}

function checkStreak() {
    if (lastSuccessDate) {
        const today = new Date();
        const lastDate = new Date(lastSuccessDate);
        const diffDays = Math.floor((today - lastDate) / (1000 * 60 * 60 * 24));
        
        if (diffDays > 1) {
            // Store the broken streak value
            const brokenStreak = streak;
            streak = 0;
            
            // Show detailed break message
            showStreakBreakMessage(brokenStreak, diffDays);
        }
    }
}

function showStreakBreakMessage(brokenStreak, missedDays) {
    const habit = habitsData[currentHabit];
    let message = `<div class="break-message">`;
    
    // Main message
    message += `<h3>لا تقلق! الرحلة مستمرة 💪</h3>`;
    message += `<p>لقد حققت ${brokenStreak} يوم من النجاح قبل هذا الانقطاع.</p>`;
    
    // Add best streak info if applicable
    if (bestStreak > brokenStreak) {
        message += `<p>تذكر أنك حققت سابقاً ${bestStreak} يوم متواصل! يمكنك تحقيق ذلك مرة أخرى.</p>`;
    }
    
    // Add tips based on missed days
    message += `<div class="break-tips">`;
    message += `<h4>نصائح للاستمرار:</h4>`;
    message += `<ul>`;
    message += `<li>ضع تذكيراً يومياً لتسجيل تقدمك</li>`;
    message += `<li>اربط العادة الجديدة بروتين يومي موجود</li>`;
    message += `<li>احتفل بكل يوم نجاح مهما كان صغيراً</li>`;
    message += `</ul>`;
    message += `</div>`;
    
    // Add motivation
    message += `<p class="break-motivation">${habit.motivation}</p>`;
    message += `</div>`;
    
    // Show the message
    const motivationElement = document.getElementById('motivationMessage');
    motivationElement.innerHTML = message;
    
    // Add animation
    motivationElement.style.animation = 'none';
    motivationElement.offsetHeight; // Trigger reflow
    motivationElement.style.animation = 'fadeIn 0.5s ease forwards';
}

function updateProgress() {
    document.getElementById('streakCount').textContent = streak;
    const progress = (streak % 30) / 30 * 100;
    document.getElementById('progressBar').style.width = `${progress}%`;

    // Show special message for completing a month
    if (streak > 0 && streak % 30 === 0) {
        const monthCount = Math.floor(streak / 30);
        const monthText = monthCount === 1 ? 'شهر' : 'شهور';
        
        const specialMessages = [
            `أتممت ${monthCount} ${monthText} من التغيير الإيجابي. كل يوم جديد هو فرصة للنمو 🌱`,
            `${monthCount} ${monthText} من الخطوات الصغيرة تصنع تغييراً كبيراً. استمر في طريقك ⭐️`,
            `مع كل يوم يمر، تصبح أقوى. ${monthCount} ${monthText} من الجهد يستحق الاحتفال 💫`,
            `${monthCount} ${monthText} من الالتزام يظهر قوة إرادتك. أنت تصنع مستقبلك الأفضل ✨`,
            `خطوة بخطوة، يوم بيوم. ${monthCount} ${monthText} من التقدم المستمر 🌟`
        ];
        
        const randomMessage = specialMessages[Math.floor(Math.random() * specialMessages.length)];
        showMotivationMessage(randomMessage);
        
        // Show special notification
        showNotification(
            'أحسنت! ✨',
            `${monthCount} ${monthText} من التقدم المستمر. كل يوم هو خطوة نحو الأفضل`
        );
    }
}

function showMotivationMessage(message) {
    const motivationElement = document.getElementById('motivationMessage');
    motivationElement.textContent = message;
    motivationElement.style.animation = 'none';
    motivationElement.offsetHeight; // Trigger reflow
    motivationElement.style.animation = 'fadeIn 0.5s ease forwards';
}

// Share Progress
shareProgressBtn.addEventListener('click', async () => {
    const habit = habitsData[currentHabit];
    const shareText = `🎯 لقد نجحت في التغلب على ${habit.title} لمدة ${streak} يوم متتالي!\n` +
                     `💪 أنا فخور بتقدمي في رحلة التغيير\n` +
                     `#HabitCrusher #تحدي_العادات`;

    try {
        // Try using the Web Share API first
        if (navigator.share) {
            await navigator.share({
                title: 'Habit Crusher Progress',
                text: shareText
            });
        } else {
            // Fallback to clipboard
            await navigator.clipboard.writeText(shareText);
            showNotification('تم النسخ', 'تم نسخ النص للمشاركة!');
        }
    } catch (error) {
        // If clipboard API fails, use execCommand as last resort
        const textarea = document.createElement('textarea');
        textarea.value = shareText;
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
            showNotification('تم النسخ', 'تم نسخ النص للمشاركة!');
        } catch (err) {
            showNotification('خطأ', 'لم نتمكن من نسخ النص');
        }
        document.body.removeChild(textarea);
    }
});

// Notification System
function showNotification(title, message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <i class="fas fa-bell"></i>
        <div>
            <strong>${title}</strong>
            <p>${message}</p>
        </div>
    `;
    
    document.getElementById('notificationContainer').appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 5000);
}

// Success Button Handler
successButton.addEventListener('click', () => {
    const today = new Date();
    
    if (lastSuccessDate) {
        const lastDate = new Date(lastSuccessDate);
        if (today.toDateString() === lastDate.toDateString()) {
            showMotivationMessage('لقد سجلت نجاحك لهذا اليوم بالفعل. عد غداً!');
            return;
        }
    }
    
    streak++;
    lastSuccessDate = today;
    saveProgress();
    updateProgress();
    
    const messages = [
        'أحسنت! أنت تقترب من هدفك كل يوم!',
        'رائع! استمر في التقدم!',
        'كل يوم نجاح هو خطوة نحو حياة أفضل!',
        'أنت تصنع التغيير! واصل التقدم!',
        'نفتخر بك! أنت قدوة للآخرين!'
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    showMotivationMessage(randomMessage);
});

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    // Initialize theme
    loadTheme();

    // Initialize search functionality
    initializeSearch();

    // Initialize other features
    if (currentHabit) {
        loadProgress();
        showDailyTip();
    }
});

function initializeSearch() {
    const habitSearch = document.getElementById('habitSearch');
    const habitCards = document.querySelectorAll('.habit-card');
    const noResults = document.getElementById('noResults');

    console.log('Search Elements:', {
        searchInput: habitSearch,
        cards: habitCards.length,
        noResults: noResults
    });

    if (habitSearch) {
        // Add input event listener
        habitSearch.addEventListener('input', function() {
            const searchTerm = this.value.trim().toLowerCase();
            console.log('Searching for:', searchTerm);
            
            let hasResults = false;

            habitCards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const description = card.querySelector('p').textContent.toLowerCase();
                const matches = title.includes(searchTerm) || description.includes(searchTerm);

                card.style.display = matches ? 'block' : 'none';
                if (matches) hasResults = true;
            });

            if (noResults) {
                noResults.style.display = hasResults ? 'none' : 'block';
            }
        });

        // Add click listeners to nav links for clearing search
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                habitSearch.value = '';
                habitCards.forEach(card => {
                    card.style.display = 'block';
                });
                if (noResults) {
                    noResults.style.display = 'none';
                }
            });
        });
    }
}

// Daily Tip Functions
function showDailyTip() {
    if (!currentHabit) return;
    
    const tips = dailyTips[currentHabit];
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    const tipIndex = dayOfYear % tips.length;
    const tip = tips[tipIndex];
    
    const dailyTipElement = document.getElementById('dailyTip');
    if (dailyTipElement) {
        dailyTipElement.innerHTML = `
            <i class="fas fa-lightbulb"></i>
            <p>${tip}</p>
        `;
    }
}

// Back Button Functionality
document.querySelectorAll('.back-btn').forEach(button => {
    button.addEventListener('click', () => {
        const targetSection = button.dataset.target;
        showSection(targetSection);
        
        // Update navigation active state
        navLinks.forEach(link => {
            const linkTarget = link.getAttribute('href').substring(1);
            if (linkTarget === targetSection) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    });
}); 