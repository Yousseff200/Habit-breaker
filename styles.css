/* Font Import */
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap');

/* Reset and Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary-color: #2196f3;
    --success-color: #4caf50;
    --text-color: #333;
    --bg-color: #fff;
    --card-bg: #f5f5f5;
    --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    --transition: all 0.3s ease;
}

.dark-mode {
    --text-color: #fff;
    --bg-color: #1a1a1a;
    --card-bg: #2d2d2d;
    --shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

body {
    font-family: 'Cairo', sans-serif;
    background-color: var(--bg-color);
    color: var(--text-color);
    line-height: 1.6;
    transition: var(--transition);
}

/* Theme Toggle */
.theme-toggle {
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 1000;
}

.theme-toggle button {
    background: none;
    border: none;
    font-size: 1.5rem;
    color: var(--text-color);
    cursor: pointer;
    padding: 10px;
    border-radius: 50%;
    transition: var(--transition);
}

.theme-toggle button:hover {
    background-color: var(--card-bg);
}

/* Notifications Menu */
.notifications-menu {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1000;
}

.notifications-toggle {
    background: none;
    border: none;
    color: var(--text-color);
    font-size: 1.2rem;
    cursor: pointer;
    padding: 8px;
    border-radius: 50%;
    position: relative;
    transition: var(--transition);
}

.notifications-toggle:hover {
    background-color: var(--card-bg);
}

.notifications-count {
    position: absolute;
    top: 0;
    right: 0;
    background-color: var(--primary-color);
    color: white;
    font-size: 0.7rem;
    padding: 2px 6px;
    border-radius: 10px;
    display: none;
}

.notifications-count.show {
    display: block;
}

.notifications-list {
    position: absolute;
    top: 100%;
    left: 0;
    width: 300px;
    background-color: var(--bg-color);
    border-radius: 10px;
    box-shadow: var(--shadow);
    margin-top: 10px;
    display: none;
    z-index: 1000;
    max-height: 400px;
    overflow: hidden;
}

.notifications-list.show {
    display: block;
}

.notifications-header {
    padding: 15px;
    border-bottom: 1px solid var(--card-bg);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.notifications-header h3 {
    margin: 0;
    font-size: 1.1rem;
}

.clear-notifications {
    background: none;
    border: none;
    color: var(--text-color);
    cursor: pointer;
    padding: 5px;
    border-radius: 5px;
    transition: var(--transition);
}

.clear-notifications:hover {
    background-color: var(--card-bg);
}

.notifications-content {
    max-height: 350px;
    overflow-y: auto;
}

.notification-item {
    padding: 15px;
    border-bottom: 1px solid var(--card-bg);
    transition: var(--transition);
    cursor: pointer;
}

.notification-item:hover {
    background-color: var(--card-bg);
}

.notification-item .time {
    font-size: 0.8rem;
    color: var(--text-color);
    opacity: 0.7;
    margin-top: 5px;
}

.no-notifications {
    padding: 20px;
    text-align: center;
    color: var(--text-color);
    opacity: 0.7;
}

/* Container and Section Styles */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

.section {
    min-height: 100vh;
    display: none;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.5s ease;
}

.section.active {
    display: flex;
    opacity: 1;
}

/* Welcome Section */
#welcome {
    text-align: center;
}

#welcome h1 {
    font-size: 3.5rem;
    margin-bottom: 10px;
    color: var(--primary-color);
}

#welcome h2 {
    font-size: 2rem;
    margin-bottom: 20px;
}

#welcome p {
    font-size: 1.2rem;
    margin-bottom: 30px;
}

/* Buttons */
.btn-primary {
    background-color: var(--primary-color);
    color: white;
    border: none;
    padding: 15px 30px;
    border-radius: 25px;
    font-size: 1.1rem;
    cursor: pointer;
    transition: var(--transition);
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow);
}

.btn-success {
    background-color: var(--success-color);
    color: white;
    border: none;
    padding: 15px 30px;
    border-radius: 25px;
    font-size: 1.1rem;
    cursor: pointer;
    transition: var(--transition);
}

.btn-success:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow);
}

/* Habit Selection Grid */
.habits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
}

.habit-card {
    background-color: var(--card-bg);
    padding: 20px;
    border-radius: 15px;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
    display: block;
}

.habit-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow);
}

.habit-card i {
    font-size: 2.5rem;
    color: var(--primary-color);
    margin-bottom: 15px;
}

.habit-card h3 {
    margin-bottom: 0.5rem;
    color: var(--text-color);
}

.habit-card p {
    font-size: 0.9rem;
    color: var(--text-color);
    opacity: 0.8;
}

.habit-card.hidden {
    display: none;
}

.habit-card.fade-out {
    opacity: 0;
    transform: scale(0.95);
}

/* Info Card */
.info-card {
    background-color: var(--card-bg);
    padding: 30px;
    border-radius: 20px;
    max-width: 800px;
    margin: 0 auto;
    box-shadow: var(--shadow);
}

.info-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin: 20px 0;
}

.info-item {
    padding: 15px;
    border-radius: 10px;
    background-color: var(--bg-color);
}

.info-item.definition {
    margin: 20px 0;
    background-color: var(--primary-color);
    color: white;
}

.info-item.definition h3 {
    color: white;
    margin-bottom: 10px;
}

.info-item.definition p {
    color: white;
    opacity: 0.9;
    line-height: 1.5;
}

.motivation {
    grid-column: 1 / -1;
    text-align: center;
    font-size: 1.2rem;
    color: var(--primary-color);
    font-weight: bold;
}

/* Progress Tracking */
.progress-card {
    background-color: var(--card-bg);
    padding: 30px;
    border-radius: 20px;
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
    box-shadow: var(--shadow);
}

.streak-counter {
    margin-bottom: 30px;
}

.streak-number {
    font-size: 4rem;
    font-weight: bold;
    color: var(--primary-color);
}

.progress-bar-container {
    height: 20px;
    background-color: var(--bg-color);
    border-radius: 10px;
    margin: 20px 0;
    overflow: hidden;
}

.progress-bar {
    height: 100%;
    background-color: var(--primary-color);
    width: 0;
    transition: width 0.5s ease;
}

.motivation-message {
    margin: 20px 0;
    font-size: 1.1rem;
    color: var(--success-color);
}

/* Features Grid on Welcome Page */
.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 20px;
    margin-top: 40px;
}

.feature-item {
    background-color: var(--card-bg);
    padding: 20px;
    border-radius: 15px;
    text-align: center;
    transition: var(--transition);
}

.feature-item:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow);
}

.feature-item i {
    font-size: 2rem;
    color: var(--primary-color);
    margin-bottom: 10px;
}

.feature-item span {
    display: block;
    font-size: 1.1rem;
}

/* Notification Container */
.notification-container {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1000;
}

.notification {
    background-color: var(--card-bg);
    color: var(--text-color);
    padding: 15px 25px;
    border-radius: 10px;
    margin-bottom: 10px;
    box-shadow: var(--shadow);
    animation: slideIn 0.3s ease forwards;
    display: flex;
    align-items: center;
    gap: 10px;
}

.notification i {
    font-size: 1.2rem;
    color: var(--primary-color);
}

@keyframes slideIn {
    from {
        transform: translateX(100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

/* Features Section in Progress Tracking */
.features-section {
    margin-top: 40px;
    display: grid;
    gap: 30px;
}

/* Achievements Section */
.achievements-section {
    background-color: var(--bg-color);
    padding: 20px;
    border-radius: 15px;
}

.achievements-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 15px;
    margin-top: 20px;
}

.achievement-item {
    background-color: var(--card-bg);
    padding: 15px;
    border-radius: 10px;
    text-align: center;
    opacity: 0.5;
    transition: var(--transition);
}

.achievement-item.unlocked {
    opacity: 1;
    box-shadow: var(--shadow);
}

.achievement-item i {
    font-size: 2rem;
    color: var(--primary-color);
    margin-bottom: 10px;
}

/* Statistics Section */
.statistics-section {
    background-color: var(--bg-color);
    padding: 20px;
    border-radius: 15px;
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 20px;
    margin-top: 20px;
}

.stat-item {
    background-color: var(--card-bg);
    padding: 15px;
    border-radius: 10px;
    text-align: center;
}

.stat-label {
    display: block;
    font-size: 0.9rem;
    margin-bottom: 5px;
}

.stat-value {
    display: block;
    font-size: 1.8rem;
    font-weight: bold;
    color: var(--primary-color);
}

/* Daily Tip Section */
.daily-tip-section {
    background-color: var(--bg-color);
    padding: 20px;
    border-radius: 15px;
    margin-top: 20px;
}

.daily-tip-card {
    background-color: var(--card-bg);
    padding: 25px;
    border-radius: 10px;
    margin-top: 15px;
    position: relative;
    display: flex;
    align-items: flex-start;
    gap: 15px;
    transition: var(--transition);
}

.daily-tip-card:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow);
}

.daily-tip-card i {
    font-size: 1.5rem;
    color: var(--primary-color);
    margin-top: 3px;
}

.daily-tip-card p {
    margin: 0;
    font-size: 1.1rem;
    line-height: 1.6;
    flex: 1;
}

/* Share Section */
.share-section {
    background-color: var(--bg-color);
    padding: 20px;
    border-radius: 15px;
    margin-top: 20px;
}

.share-buttons {
    display: flex;
    justify-content: center;
    margin-top: 15px;
}

.btn-share {
    background-color: var(--primary-color);
    color: white;
    border: none;
    padding: 15px 30px;
    border-radius: 25px;
    cursor: pointer;
    transition: var(--transition);
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.1rem;
    font-family: 'Cairo', sans-serif;
}

.btn-share:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow);
    opacity: 0.9;
}

.btn-share i {
    font-size: 1.2rem;
}

/* Responsive Design Updates */
@media (max-width: 768px) {
    #welcome h1 {
        font-size: 2.5rem;
    }

    #welcome h2 {
        font-size: 1.5rem;
    }

    .info-content {
        grid-template-columns: 1fr;
    }

    .container {
        padding: 15px;
    }

    .features-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Animations */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.section.active {
    animation: fadeIn 0.5s ease forwards;
}

/* Animation for Achievement Unlock */
@keyframes unlock {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
}

/* Navigation Bar */
.main-nav {
    background-color: var(--bg-color);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 1rem 0;
    position: sticky;
    top: 0;
    z-index: 100;
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    gap: 2rem;
}

.nav-link {
    color: var(--text-color);
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.nav-link i {
    font-size: 1.2rem;
}

.nav-link:hover {
    background-color: var(--primary-color);
    color: white;
}

.nav-link.active {
    background-color: var(--primary-color);
    color: white;
}

/* About Section */
.about-content, .privacy-content {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
}

.about-card, .privacy-card {
    background-color: var(--card-bg);
    border-radius: 16px;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.about-card h3, .privacy-card h3 {
    color: var(--primary-color);
    margin-top: 1.5rem;
    margin-bottom: 1rem;
}

.about-card p, .privacy-card p {
    line-height: 1.6;
    margin-bottom: 1rem;
}

.about-card ul, .privacy-card ul {
    list-style-type: none;
    padding: 0;
    margin: 1rem 0;
}

.about-card li, .privacy-card li {
    margin-bottom: 0.5rem;
    padding-right: 1.5rem;
    position: relative;
}

.about-card li:before, .privacy-card li:before {
    content: "•";
    color: var(--primary-color);
    position: absolute;
    right: 0;
}

/* Dark Mode Adjustments */
.dark-mode .about-card,
.dark-mode .privacy-card {
    background-color: var(--dark-card-bg);
}

/* Responsive Design */
@media (max-width: 768px) {
    .nav-container {
        gap: 1rem;
    }

    .nav-link {
        padding: 0.4rem 0.8rem;
        font-size: 0.9rem;
    }

    .about-content,
    .privacy-content {
        padding: 1rem;
    }

    .about-card,
    .privacy-card {
        padding: 1.5rem;
    }
}

/* More Habits Section */
.section-description {
    text-align: center;
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: var(--text-color);
}

.habits-grid.extended {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
}

.habits-grid.extended .habit-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;
    transition: all 0.3s ease;
}

.habits-grid.extended .habit-card p {
    margin-top: 1rem;
    font-size: 0.9rem;
    color: var(--text-color);
    opacity: 0.8;
}

.habits-grid.extended .habit-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.habits-grid.extended .habit-card i {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: var(--primary-color);
}

.habits-grid.extended .habit-card h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: var(--text-color);
}

/* Dark Mode Adjustments */
.dark-mode .habits-grid.extended .habit-card {
    background-color: var(--card-bg);
}

/* Responsive Design */
@media (max-width: 768px) {
    .habits-grid.extended {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
    }

    .habits-grid.extended .habit-card {
        padding: 1rem;
    }

    .section-description {
        font-size: 1rem;
        margin-bottom: 1.5rem;
    }
}

/* Search Box Styles */
.search-container {
    margin: 2rem 0;
    display: flex;
    justify-content: center;
}

.search-box {
    position: relative;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
}

.search-box input {
    width: 100%;
    padding: 1rem 3rem 1rem 1rem;
    border: 2px solid var(--card-bg);
    border-radius: 25px;
    font-size: 1.1rem;
    background-color: var(--bg-color);
    color: var(--text-color);
    transition: all 0.3s ease;
    font-family: 'Cairo', sans-serif;
}

.search-box input:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(33, 150, 243, 0.1);
}

.search-box i {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: var(--text-color);
    opacity: 0.5;
    font-size: 1.2rem;
}

/* No Results Message */
.no-results {
    text-align: center;
    padding: 2rem;
    display: none;
    margin-top: 2rem;
}

.no-results i {
    font-size: 3rem;
    color: var(--text-color);
    opacity: 0.3;
    margin-bottom: 1rem;
    display: block;
}

.no-results p {
    font-size: 1.2rem;
    color: var(--text-color);
    opacity: 0.7;
}

/* Dark Mode Adjustments */
.dark-mode .search-box input {
    background-color: var(--card-bg);
    border-color: var(--bg-color);
}

.dark-mode .search-box input:focus {
    border-color: var(--primary-color);
}

/* Responsive Design */
@media (max-width: 768px) {
    .search-box input {
        font-size: 1rem;
        padding: 0.8rem 2.5rem 0.8rem 0.8rem;
    }

    .search-box i {
        font-size: 1rem;
    }
}

/* Back Button */
.back-btn {
    background: none;
    border: none;
    color: var(--text-color);
    font-family: 'Cairo', sans-serif;
    font-size: 1.1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    transition: all 0.3s ease;
}

.back-btn:hover {
    background-color: var(--card-bg);
    transform: translateX(5px);
}

.back-btn i {
    font-size: 1.2rem;
}

/* Dark Mode Adjustment */
.dark-mode .back-btn:hover {
    background-color: var(--primary-color);
    color: white;
}

/* Break Message Styles */
.break-message {
    background-color: var(--card-bg);
    padding: 20px;
    border-radius: 15px;
    margin: 20px 0;
    text-align: right;
}

.break-message h3 {
    color: var(--primary-color);
    margin-bottom: 15px;
    font-size: 1.3rem;
}

.break-message p {
    margin-bottom: 15px;
    line-height: 1.6;
}

.break-tips {
    background-color: var(--bg-color);
    padding: 15px;
    border-radius: 10px;
    margin: 15px 0;
}

.break-tips h4 {
    color: var(--primary-color);
    margin-bottom: 10px;
}

.break-tips ul {
    list-style: none;
    padding: 0;
}

.break-tips li {
    margin: 10px 0;
    padding-right: 20px;
    position: relative;
}

.break-tips li:before {
    content: "•";
    color: var(--primary-color);
    position: absolute;
    right: 0;
}

.break-motivation {
    font-weight: bold;
    color: var(--success-color);
    font-size: 1.1rem;
    text-align: center;
    margin-top: 20px;
}

/* Dark Mode Adjustments */
.dark-mode .break-message {
    background-color: var(--card-bg);
}

.dark-mode .break-tips {
    background-color: var(--bg-color);
}

/* Responsive Design - Global */
@media (max-width: 1200px) {
    .container {
        width: 95%;
        padding: 15px;
    }
}

@media (max-width: 992px) {
    #welcome h1 {
        font-size: 2.8rem;
    }

    .features-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }

    .info-content {
        grid-template-columns: 1fr;
    }

    .habits-grid {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }

    .theme-toggle {
        top: 15px;
        left: 15px;
    }

    .notifications-menu {
        top: 15px;
        right: 15px;
    }

    .notifications-toggle {
        padding: 6px;
    }
}

@media (max-width: 768px) {
    body {
        font-size: 16px;
    }

    #welcome h1 {
        font-size: 2.2rem;
        margin-bottom: 15px;
    }

    #welcome h2 {
        font-size: 1.6rem;
        margin-bottom: 15px;
    }

    .container {
        padding: 10px;
    }

    .habits-grid {
        grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
        gap: 15px;
    }

    .habit-card {
        padding: 15px;
    }

    .habit-card i {
        font-size: 2rem;
    }

    .streak-number {
        font-size: 2.5rem;
    }

    .nav-container {
        padding: 10px;
        justify-content: space-around;
    }

    .nav-link {
        font-size: 0.9rem;
        padding: 8px;
    }

    .info-card {
        padding: 20px;
    }

    .daily-tip-card {
        padding: 15px;
    }

    .daily-tip-card p {
        font-size: 0.9rem;
    }

    .features-grid {
        grid-template-columns: 1fr;
        gap: 15px;
    }

    .notifications-list {
        position: fixed;
        top: 50px;
        left: 10px;
        right: 10px;
        width: auto;
        max-height: calc(100vh - 120px);
    }

    .theme-toggle {
        top: 10px;
        left: 10px;
    }

    .notifications-menu {
        top: 10px;
        right: 10px;
    }
}

@media (max-width: 576px) {
    #welcome h1 {
        font-size: 1.8rem;
    }

    #welcome h2 {
        font-size: 1.4rem;
    }

    .btn-primary, 
    .btn-success, 
    .btn-share {
        padding: 12px 20px;
        font-size: 1rem;
        width: 100%;
        margin: 5px 0;
    }

    .habits-grid {
        grid-template-columns: 1fr;
    }

    .streak-number {
        font-size: 2rem;
    }

    .progress-card {
        padding: 15px;
    }

    .notification {
        padding: 10px;
        margin: 5px;
    }

    .search-box input {
        font-size: 0.9rem;
        padding: 8px 35px 8px 15px;
    }

    .break-message h3 {
        font-size: 1.2rem;
    }

    .break-message p {
        font-size: 0.9rem;
    }

    .feature-item {
        padding: 15px;
    }

    .info-item h3 {
        font-size: 1.2rem;
    }

    .theme-toggle button,
    .notifications-toggle {
        font-size: 1.1rem;
        padding: 6px;
    }
}

/* Touch Device Optimizations */
@media (hover: none) {
    .habit-card:active,
    .btn-primary:active,
    .btn-success:active,
    .btn-share:active {
        transform: scale(0.98);
    }

    .nav-link:active {
        background-color: var(--card-bg);
    }

    .feature-item:active {
        transform: translateY(-2px);
    }
}

/* Fix for iOS Safari 100vh issue */
@supports (-webkit-touch-callout: none) {
    .section {
        min-height: -webkit-fill-available;
    }
}

/* RTL Support Improvements */
html[dir="rtl"] .search-box input {
    padding: 10px 45px 10px 20px;
}

html[dir="rtl"] .back-btn i {
    transform: rotate(180deg);
}

/* Improve Navigation on Small Screens */
@media (max-width: 480px) {
    .nav-container {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: var(--bg-color);
        box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
        padding: 10px 5px;
        z-index: 1000;
    }

    .nav-link {
        flex-direction: column;
        font-size: 0.8rem;
        padding: 8px 5px;
    }

    .nav-link i {
        margin: 0 0 5px 0;
        font-size: 1.2rem;
    }

    .section {
        padding-bottom: 70px;
    }

    .notifications-menu {
        position: fixed;
        top: 8px;
        right: 8px;
    }

    .theme-toggle {
        top: 8px;
        left: 8px;
    }

    .theme-toggle button,
    .notifications-toggle {
        font-size: 1.1rem;
        padding: 6px;
    }
}

/* Improve Form Elements on Mobile */
@media (max-width: 768px) {
    input, 
    button, 
    select, 
    textarea {
        font-size: 16px !important; /* Prevent iOS zoom on focus */
    }

    .search-box {
        margin: 10px 0;
    }
}

/* Dark Mode Improvements */
@media (prefers-color-scheme: dark) {
    :root {
        --shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    }
}

/* Loading State */
.section.loading {
    opacity: 0.7;
    pointer-events: none;
}

/* Smooth Scrolling */
html {
    scroll-behavior: smooth;
}

/* RTL Specific Adjustments for Notifications */
.notifications-menu {
    margin-right: 0;
    margin-left: 10px;
}

.notifications-count {
    right: auto;
    left: 0;
}

.notifications-list {
    left: auto;
    right: 0;
}

/* Responsive Design for Notifications */
@media (max-width: 768px) {
    .notifications-list {
        position: fixed;
        top: 60px;
        left: 10px;
        right: 10px;
        width: auto;
        max-height: calc(100vh - 80px);
    }
} 
