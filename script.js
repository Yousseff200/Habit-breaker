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

// Notifications Management
let notifications = JSON.parse(localStorage.getItem('notifications') || '[]');
const maxNotifications = 50;

// DOM Elements for notifications
const notificationsToggle = document.querySelector('.notifications-toggle');
const notificationsList = document.querySelector('.notifications-list');
const notificationsCount = document.querySelector('.notifications-count');
const notificationsContent = document.querySelector('.notifications-content');
const clearNotificationsBtn = document.querySelector('.clear-notifications');

// State Management
let currentHabit = null;
let streak = 0;
let lastSuccessDate = null;
let bestStreak = 0;

// Theme Management
function setTheme(isDark) {
    if (isDark) {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark');
        if (themeToggle) {
            themeToggle.querySelector('i').classList.remove('fa-moon');
            themeToggle.querySelector('i').classList.add('fa-sun');
        }
    } else {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
        if (themeToggle) {
            themeToggle.querySelector('i').classList.remove('fa-sun');
            themeToggle.querySelector('i').classList.add('fa-moon');
        }
    }
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme === 'dark');
}

// Enhanced Notification System
function setupNotificationSystem() {
    if ('Notification' in window) {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                setupDailyReminders();
                setupStreakNotifications();
            }
        });
    }
}

function setupDailyReminders() {
    // Check every hour if the user hasn't logged their progress
    setInterval(checkAndSendReminder, 1000 * 60 * 60); // Check every hour
    checkAndSendReminder(); // Check immediately
}

function checkAndSendReminder() {
    if (!currentHabit) return;

    const now = new Date();
    const lastSuccess = lastSuccessDate ? new Date(lastSuccessDate) : null;
    
    // If no success today and it's after 8 PM
    if ((!lastSuccess || !isSameDay(lastSuccess, now)) && now.getHours() >= 20) {
        sendNotification(
            'تذكير يومي 🌟',
            'لم تسجل التزامك اليوم بعد. لا تفوت فرصة تحسين عاداتك!',
            {
                tag: 'daily-reminder',
                requireInteraction: true,
                actions: [
                    {
                        action: 'open',
                        title: 'تسجيل الآن'
                    }
                ]
            }
        );
    }
}

function setupStreakNotifications() {
    // Send motivational notifications based on streak milestones
    if (streak > 0 && streak % 7 === 0) { // Weekly milestone
        sendNotification(
            'إنجاز أسبوعي رائع! 🎉',
            `أكملت ${streak} أيام متتالية! أنت تصنع التغيير الحقيقي.`,
            {
                tag: 'streak-milestone',
                requireInteraction: true
            }
        );
    }
}

function sendNotification(title, message, options = {}) {
    // First try to send a system notification
    if ('Notification' in window && Notification.permission === 'granted') {
        const notification = new Notification(title, {
            body: message,
            icon: '/icons/icon-192x192.png',
            badge: '/icons/badge.png',
            dir: 'rtl',
            lang: 'ar',
            ...options
        });

        notification.onclick = function() {
            window.focus();
            notification.close();
            // If there's a specific action to perform
            if (options.onClick) {
                options.onClick();
            }
        };
    }

    // Also show in-app notification
    showInAppNotification(title, message, options);
}

function showInAppNotification(title, message, options = {}) {
    const notification = document.createElement('div');
    notification.className = `notification ${options.type || ''}`;
    notification.innerHTML = `
        <div class="notification-content">
            <strong>${title}</strong>
            <p>${message}</p>
        </div>
    `;

    const container = document.getElementById('notificationContainer');
    if (container) {
        container.appendChild(notification);
        
        if (!options.persistent) {
            setTimeout(() => {
                notification.classList.add('notification-exit');
                setTimeout(() => notification.remove(), 300);
            }, options.duration || 5000);
        }
    }
}

function isSameDay(date1, date2) {
    return date1.getDate() === date2.getDate() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getFullYear() === date2.getFullYear();
}

// Initialize the application when DOM is fully loaded
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

// Initialize the application when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize DOM Elements
    const sections = document.querySelectorAll('.section');
    const startButton = document.getElementById('startButton');
    const habitCards = document.querySelectorAll('.habit-card');
    const startTrackingButton = document.getElementById('startTracking');
    const successButton = document.getElementById('successButton');
    const themeToggle = document.getElementById('themeToggle');
    const shareProgressBtn = document.getElementById('shareProgress');
    const habitSearch = document.getElementById('habitSearch');
    const noResults = document.getElementById('noResults');
    const navLinks = document.querySelectorAll('.nav-link');
    const backButtons = document.querySelectorAll('.back-btn');
    const notificationsToggle = document.querySelector('.notifications-toggle');
    const notificationsList = document.querySelector('.notifications-list');
    const notificationsCount = document.querySelector('.notifications-count');
    const notificationsContent = document.querySelector('.notifications-content');
    const clearNotificationsBtn = document.querySelector('.clear-notifications');

    // Initialize theme
    loadTheme();

    // Theme Toggle with fixed functionality
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isDark = !document.body.classList.contains('dark-mode');
            setTheme(isDark);
        });
    }

    // Navigation
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

    // Back buttons
    backButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetSection = button.getAttribute('data-target');
            showSection(targetSection);
        });
    });

    // Start button
    if (startButton) {
        startButton.addEventListener('click', () => {
            showSection('habitSelection');
        });
    }

    // Habit cards
    habitCards.forEach(card => {
        card.addEventListener('click', () => {
            const habitId = card.dataset.habit;
            // Reset state variables before switching habits
            streak = 0;
            lastSuccessDate = null;
            bestStreak = 0;
            currentHabit = habitId;
            updateHabitInfo(habitId);
            showDailyTip();
            // Load the specific habit's progress after resetting state
            loadProgress();
            showSection('habitInfo');
        });
    });

    // Start tracking button
    if (startTrackingButton) {
        startTrackingButton.addEventListener('click', () => {
            showSection('progressTracking');
            updateProgress();
        });
    }

    // Success button with enhanced notifications
    if (successButton) {
        successButton.addEventListener('click', () => {
            const today = new Date();
            
            if (lastSuccessDate && streak > 0) {
                const lastDate = new Date(lastSuccessDate);
                if (isSameDay(today, lastDate)) {
                    showInAppNotification(
                        'تنبيه',
                        'لقد سجلت نجاحك لهذا اليوم بالفعل. عد غداً!',
                        { type: 'info' }
                    );
                    return;
                }
            }
            
            streak++;
            lastSuccessDate = today;
            saveProgress();
            updateProgress();
            showDailyTip();
            
            // Send success notification
            sendNotification(
                'أحسنت! 🎉',
                `لقد أكملت ${streak} يوم من النجاح! واصل التقدم!`,
                {
                    type: 'success',
                    requireInteraction: true
                }
            );

            setupStreakNotifications(); // Check for streak milestones
        });
    }

    // Share Progress
    if (shareProgressBtn) {
        shareProgressBtn.addEventListener('click', async () => {
            const habit = habitsData[currentHabit];
            const shareText = `🎯 لقد نجحت في التغلب على ${habit.title} لمدة ${streak} يوم متتالي!\n` +
                            `💪 أنا فخور بتقدمي في رحلة التغيير\n` +
                            `#HabitCrusher #تحدي_العادات`;

            try {
                if (navigator.share) {
                    await navigator.share({
                        title: 'Habit Crusher Progress',
                        text: shareText
                    });
                } else {
                    await navigator.clipboard.writeText(shareText);
                    showNotification('تم النسخ', 'تم نسخ النص للمشاركة!');
                }
            } catch (error) {
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
    }

    // Initialize notifications system
    initializeNotifications();
    
    // Add event listeners for notifications
    if (notificationsToggle) {
        notificationsToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            notificationsList.classList.toggle('show');
            if (notificationsList.classList.contains('show')) {
                markAllAsRead();
            }
        });
    }

    if (clearNotificationsBtn) {
        clearNotificationsBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            notifications = [];
            localStorage.setItem('notifications', JSON.stringify(notifications));
            updateNotificationsUI();
        });
    }

    // Close notifications on outside click
    document.addEventListener('click', (e) => {
        if (notificationsList && !notificationsList.contains(e.target) && !notificationsToggle.contains(e.target)) {
            notificationsList.classList.remove('show');
        }
    });

    // Initialize search functionality
    initializeSearch();
    
    // Register service worker
    registerServiceWorker();
    
    // Request permissions
    requestPermissions();
    
    // Check last success time
    if (currentHabit) {
        checkLastSuccessTime();
    }

    // Setup enhanced notification system
    setupNotificationSystem();
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
        bestStreak = data.bestStreak || streak;
        lastSuccessDate = new Date(data.lastSuccessDate);
        checkStreak();
        checkLastSuccessTime();
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
    const streakElement = document.getElementById('streakCount');
    const progressBar = document.getElementById('progressBar');
    const motivationElement = document.getElementById('motivationMessage');

    if (streakElement) {
        streakElement.textContent = streak;
    }

    if (progressBar) {
        const progress = (streak % 30) / 30 * 100;
        progressBar.style.width = `${progress}%`;
    }

    if (motivationElement) {
        const message = getMotivationalMessage(streak);
        motivationElement.textContent = message;
        
        // Add animation
        motivationElement.style.animation = 'none';
        motivationElement.offsetHeight; // Trigger reflow
        motivationElement.style.animation = 'fadeIn 0.5s ease forwards';
    }

    // Show notification for milestones
    if (streak > 0 && streak % 5 === 0) {
        showNotification(
            'إنجاز جديد! 🎉',
            getMotivationalMessage(streak),
            { type: 'achievement' }
        );
    }
}

function getMotivationalMessage(streak) {
    if (streak === 0) {
        return 'ابدأ اليوم! كل رحلة تبدأ بخطوة واحدة 🌱';
    }

    const messages = [
        { threshold: 1, message: 'أول يوم نجاح! استمر، أنت تستطيع! 💪' },
        { threshold: 3, message: 'ثلاثة أيام متتالية! بداية رائعة! 🌟' },
        { threshold: 5, message: 'خمسة أيام من النجاح! أنت تصنع التغيير! ✨' },
        { threshold: 7, message: 'أسبوع كامل! إنجاز رائع! 🎉' },
        { threshold: 10, message: 'عشرة أيام متتالية! أنت ملهم! 🏆' },
        { threshold: 14, message: 'أسبوعان من النجاح! قوتك تزداد! 💫' },
        { threshold: 21, message: 'ثلاثة أسابيع! العادة تتشكل! 🌈' },
        { threshold: 30, message: 'شهر كامل! أنت بطل حقيقي! 👑' },
        { threshold: 45, message: 'شهر ونصف! إرادتك من حديد! ⭐' },
        { threshold: 60, message: 'شهران! أنت تلهم الآخرين! 🌟' },
        { threshold: 90, message: 'ثلاثة أشهر! إنجاز استثنائي! 🎯' },
        { threshold: 100, message: 'مائة يوم! أنت أسطورة! 🌠' }
    ];

    // Get the highest threshold that is less than or equal to current streak
    const message = messages
        .filter(m => m.threshold <= streak)
        .pop() || messages[0];

    return message.message;
}

// Notification System
function showNotification(title, message, options = {}) {
    const notificationContainer = document.getElementById('notificationContainer');
    if (!notificationContainer) {
        const container = document.createElement('div');
        container.id = 'notificationContainer';
        container.className = 'notification-container';
        document.body.appendChild(container);
    }

    const notification = document.createElement('div');
    notification.className = `notification ${options.type || ''}`;
    
    notification.innerHTML = `
        <div class="notification-content">
            <i class="${getNotificationIcon(options.type)}"></i>
            <div class="notification-text">
                <strong>${title}</strong>
                <p>${message}</p>
            </div>
        </div>
    `;

    notificationContainer.appendChild(notification);

    // Add to notifications list
    addNotification(title, message, options.type || 'info');

    // Auto remove after duration
    if (!options.persistent) {
        setTimeout(() => {
            notification.classList.add('notification-exit');
            setTimeout(() => notification.remove(), 300);
        }, options.duration || 5000);
    }

    return notification;
}

// Get notification icon
function getNotificationIcon(type) {
    const icons = {
        success: 'fas fa-check-circle',
        warning: 'fas fa-exclamation-triangle',
        info: 'fas fa-info-circle',
        welcome: 'fas fa-hand-paper',
        achievement: 'fas fa-trophy',
        reminder: 'fas fa-bell'
    };
    return icons[type] || icons.info;
}

// Check Last Success Time and Show Notification
function checkLastSuccessTime() {
    if (!lastSuccessDate) return;
    
    const now = new Date();
    const lastDate = new Date(lastSuccessDate);
    const diffDays = Math.floor((now - lastDate) / (1000 * 60 * 60 * 24));
    
    if (diffDays >= 1) {
        const habit = habitsData[currentHabit];
        
        // Get time of day for personalized message
        const hour = now.getHours();
        let timeBasedGreeting = '';
        if (hour >= 5 && hour < 12) {
            timeBasedGreeting = 'صباح الخير! ';
        } else if (hour >= 12 && hour < 17) {
            timeBasedGreeting = 'مساء الخير! ';
        } else if (hour >= 17 && hour < 22) {
            timeBasedGreeting = 'مساء سعيد! ';
        } else {
            timeBasedGreeting = 'تصبح على خير! ';
        }

        // Different messages based on number of missed days
        let motivationalMessage = '';
        let title = '';
        let icon = '';

        if (diffDays === 1) {
            title = 'لم تسجل التزامك بالأمس 💭';
            motivationalMessage = `لا تدع يوماً واحداً يوقف تقدمك! عد إلى المسار الصحيح اليوم.`;
            icon = 'fas fa-history';
        } else if (diffDays === 2) {
            title = 'يومان بدون تسجيل 🤔';
            motivationalMessage = `تذكر لماذا بدأت! قوتك في عودتك. سجل التزامك اليوم وواصل التقدم.`;
            icon = 'fas fa-route';
        } else if (diffDays <= 4) {
            title = 'نفتقد وجودك! 💫';
            motivationalMessage = `${diffDays} أيام مرت. لا تترك العادة القديمة تسيطر عليك. أنت أقوى من ذلك!`;
            icon = 'fas fa-star';
        } else if (diffDays <= 7) {
            title = 'لا تستسلم! 💪';
            motivationalMessage = `أسبوع تقريباً مر. تذكر كل تقدم حققته. يمكنك العودة أقوى!`;
            icon = 'fas fa-fist-raised';
        } else {
            title = 'نحن نؤمن بك! ✨';
            motivationalMessage = `مر ${diffDays} يوم، لكن لا يزال الوقت مناسباً للعودة. كل يوم هو فرصة جديدة!`;
            icon = 'fas fa-sun';
        }

        // Add daily tip to the message
        const tips = dailyTips[currentHabit];
        const randomTip = tips[Math.floor(Math.random() * tips.length)];
        
        // Show in-app notification
        showNotification(
            `${timeBasedGreeting}${title}`,
            `${motivationalMessage}\n\nنصيحة اليوم: ${randomTip}`,
            {
                type: 'reminder',
                icon: icon,
                duration: 10000,
                persistent: true,
                actions: [
                    {
                        id: 'record-success',
                        text: 'تسجيل النجاح',
                        handler: () => {
                            successButton.click();
                        },
                        closeOnClick: true
                    },
                    {
                        id: 'remind-later',
                        text: 'تذكيري بعد ساعة',
                        handler: () => {
                            setTimeout(checkLastSuccessTime, 1000 * 60 * 60);
                        },
                        closeOnClick: true
                    }
                ]
            }
        );

        // Send Push Notification if enabled
        if (Notification.permission === 'granted') {
            schedulePushNotification(
                `${timeBasedGreeting}${title}`,
                `${motivationalMessage}\n\nنصيحة اليوم: ${randomTip}`,
                {
                    tag: 'habit-reminder', // Prevents duplicate notifications
                    renotify: true, // Allows the same notification to notify again
                    requireInteraction: true, // Notification stays until user interacts
                    actions: [
                        {
                            action: 'open',
                            title: 'فتح التطبيق'
                        }
                    ]
                }
            );
        }

        // Schedule next reminder for tomorrow
        const tomorrow = new Date(now);
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(9, 0, 0, 0); // Set to 9 AM tomorrow
        const timeUntilTomorrow = tomorrow - now;
        
        setTimeout(checkLastSuccessTime, timeUntilTomorrow);
    }
}

// Initialize search functionality
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

// Notifications Management
function initializeNotifications() {
    // First, create the notifications HTML structure
    const notificationsHTML = `
        <div class="notifications-menu">
            <button class="notifications-toggle">
                <i class="fas fa-bell"></i>
                <span class="notifications-count">0</span>
            </button>
        </div>
        <div class="notifications-list">
            <div class="notifications-header">
                <h3>الإشعارات</h3>
                <button class="clear-notifications">مسح الكل</button>
            </div>
            <div class="notifications-content"></div>
        </div>
    `;

    // Add the notifications HTML to the body if it doesn't exist
    if (!document.querySelector('.notifications-menu')) {
        const container = document.createElement('div');
        container.innerHTML = notificationsHTML;
        document.body.appendChild(container);
    }

    // Load saved notifications
    notifications = JSON.parse(localStorage.getItem('notifications') || '[]');

    // Add welcome notification if no notifications exist
    if (notifications.length === 0) {
        addNotification(
            'مرحباً بك! 👋',
            'ابدأ رحلة تحسين عاداتك اليوم',
            'welcome'
        );
    }

    // Update notifications UI
    updateNotificationsUI();

    // Add click event to notifications toggle
    const toggle = document.querySelector('.notifications-toggle');
    const list = document.querySelector('.notifications-list');

    if (toggle && list) {
        // Remove any existing event listeners
        const newToggle = toggle.cloneNode(true);
        toggle.parentNode.replaceChild(newToggle, toggle);

        // Add new click event listener
        newToggle.onclick = function(e) {
            e.stopPropagation();
            list.classList.toggle('show');
            if (list.classList.contains('show')) {
                markAllAsRead();
                updateNotificationsUI();
            }
        };

        // Close notifications when clicking outside
        document.addEventListener('click', function(e) {
            if (!list.contains(e.target) && !newToggle.contains(e.target)) {
                list.classList.remove('show');
            }
        });

        // Clear notifications button
        const clearBtn = document.querySelector('.clear-notifications');
        if (clearBtn) {
            clearBtn.onclick = function(e) {
                e.stopPropagation();
                notifications = [];
                localStorage.setItem('notifications', JSON.stringify(notifications));
                updateNotificationsUI();
                list.classList.remove('show');
                showNotification('تم المسح', 'تم مسح جميع الإشعارات', { type: 'info' });
            };
        }
    }
}

// Update notifications UI
function updateNotificationsUI() {
    const notificationsCount = document.querySelector('.notifications-count');
    const notificationsContent = document.querySelector('.notifications-content');
    
    if (!notificationsCount || !notificationsContent) return;

    // Update count
    const unreadCount = notifications.filter(n => !n.read).length;
    notificationsCount.textContent = unreadCount;
    notificationsCount.style.display = unreadCount > 0 ? 'flex' : 'none';

    // Update content
    if (notifications.length === 0) {
        notificationsContent.innerHTML = '<div class="no-notifications">لا توجد إشعارات</div>';
        return;
    }

    notificationsContent.innerHTML = notifications.map(notification => `
        <div class="notification-item ${notification.read ? 'read' : ''}" data-id="${notification.id}">
            <div class="notification-icon">
                <i class="${getNotificationIcon(notification.type)}"></i>
            </div>
            <div class="notification-content">
                <div class="notification-title">${notification.title}</div>
                <div class="notification-message">${notification.message}</div>
                <div class="notification-time">${formatTimestamp(notification.timestamp)}</div>
            </div>
        </div>
    `).join('');

    // Add click listeners to notification items
    document.querySelectorAll('.notification-item').forEach(item => {
        item.onclick = function() {
            const id = parseInt(item.dataset.id);
            markNotificationAsRead(id);
            updateNotificationsUI();
        };
    });
}

// Add notification
function addNotification(title, message, type = 'info') {
    const notification = {
        id: Date.now(),
        title,
        message,
        type,
        timestamp: new Date().toISOString(),
        read: false
    };

    notifications.unshift(notification);

    // Keep only the latest maxNotifications
    if (notifications.length > maxNotifications) {
        notifications = notifications.slice(0, maxNotifications);
    }

    // Save to localStorage
    localStorage.setItem('notifications', JSON.stringify(notifications));

    // Update UI
    updateNotificationsUI();

    return notification;
}

// Mark single notification as read
function markNotificationAsRead(id) {
    notifications = notifications.map(n => {
        if (n.id === id) {
            return { ...n, read: true };
        }
        return n;
    });
    localStorage.setItem('notifications', JSON.stringify(notifications));
    updateNotificationsUI();
}

// Mark all notifications as read
function markAllAsRead() {
    notifications = notifications.map(n => ({ ...n, read: true }));
    localStorage.setItem('notifications', JSON.stringify(notifications));
    updateNotificationsUI();
}

// Format timestamp
function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now - date;
    
    if (diff < 60000) { // Less than 1 minute
        return 'الآن';
    } else if (diff < 3600000) { // Less than 1 hour
        const minutes = Math.floor(diff / 60000);
        return `منذ ${minutes} دقيقة`;
    } else if (diff < 86400000) { // Less than 1 day
        const hours = Math.floor(diff / 3600000);
        return `منذ ${hours} ساعة`;
    } else {
        const days = Math.floor(diff / 86400000);
        return `منذ ${days} يوم`;
    }
}

// Request necessary permissions quietly in the background
async function requestPermissions() {
    try {
        if ('Notification' in window) {
            const notificationPermission = await Notification.requestPermission();
            console.log('Notification permission:', notificationPermission);
        }

        // Request storage permission quietly
        if ('persist' in navigator && 'storage' in navigator) {
            const isPersisted = await navigator.storage.persist();
            console.log('Storage permission:', isPersisted);
            localStorage.setItem('storagePermission', isPersisted.toString());
        }

        return Notification.permission === 'granted';
    } catch (error) {
        console.error('Error requesting permissions:', error);
        return false;
    }
}

// Update Service Worker Registration
async function registerServiceWorker() {
    if ('serviceWorker' in navigator && 'Notification' in window) {
        try {
            // Register service worker
            const registration = await navigator.serviceWorker.register('service-worker.js');
            console.log('تم تسجيل Service Worker');

            // Request notification permission
            const permission = await Notification.requestPermission();
            if (permission === 'granted') {
                // Initialize notifications system
                await initializeNotificationSystem(registration);
            }
        } catch (error) {
            console.error('فشل في تسجيل Service Worker:', error);
        }
    }
}

// Initialize notification system
async function initializeNotificationSystem(registration) {
    // Schedule daily notifications
    scheduleLocalNotification('morning', 9); // Morning notification at 9 AM
    scheduleLocalNotification('evening', 20); // Evening notification at 8 PM
    
    // Setup notification for habit tracking
    setupHabitTrackingNotifications(registration);
}

// Schedule local notification that works offline
function scheduleLocalNotification(type, hour) {
    const now = new Date();
    const scheduledTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hour, 0);
    
    if (now > scheduledTime) {
        scheduledTime.setDate(scheduledTime.getDate() + 1);
    }
    
    const timeUntilNotification = scheduledTime - now;
    
    setTimeout(async () => {
        if ('serviceWorker' in navigator) {
            const registration = await navigator.serviceWorker.ready;
            
            const title = 'محطم العادات السيئة';
            const options = {
                body: type === 'morning' 
                    ? 'صباح الخير! لا تنس تسجيل تقدمك اليوم 🌟' 
                    : 'مساء الخير! هل سجلت تقدمك اليوم؟ 🌙',
                icon: '/icon.png',
                badge: '/badge.png',
                dir: 'rtl',
                lang: 'ar',
                requireInteraction: true,
                silent: false,
                tag: `daily-${type}`,
                actions: [
                    {
                        action: 'open',
                        title: 'فتح التطبيق'
                    },
                    {
                        action: 'close',
                        title: 'إغلاق'
                    }
                ]
            };
            
            try {
                await registration.showNotification(title, options);
                // Schedule next notification
                scheduleLocalNotification(type, hour);
            } catch (error) {
                console.error('فشل في إرسال الإشعار:', error);
            }
        }
    }, timeUntilNotification);
}

// Setup notifications for habit tracking
function setupHabitTrackingNotifications(registration) {
    // Send notification when user completes a day
    successButton.addEventListener('click', async () => {
        if (streak > 0 && streak % 1 === 0) { // Send notification for each day
            try {
                await registration.showNotification('أحسنت! 🎉', {
                    body: `لقد أكملت ${streak} يوم من النجاح! استمر في التقدم!`,
                    icon: '/icon.png',
                    badge: '/badge.png',
                    dir: 'rtl',
                    lang: 'ar',
                    requireInteraction: true,
                    silent: false,
                    actions: [
                        {
                            action: 'share',
                            title: 'مشاركة'
                        }
                    ]
                });
            } catch (error) {
                console.error('فشل في إرسال إشعار النجاح:', error);
            }
        }
    });
}

// Schedule Push Notification
function schedulePushNotification(title, message, options = {}) {
    if (Notification.permission === 'granted') {
        const notification = new Notification(title, {
            body: message,
            icon: '/icon.png', // Add your app icon path
            badge: '/badge.png', // Add your badge icon path
            ...options
        });

        notification.onclick = function() {
            window.focus();
            notification.close();
        };
    }
} 
