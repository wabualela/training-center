// ==========================================
// Language Handler - Auto-update all pages
// ==========================================

// Load translations
document.write('<script src="js/translations.js"></script>');

// Toggle Language Function
function toggleLanguage() {
    const newLang = currentLanguage === 'ar' ? 'en' : 'ar';
    setLanguage(newLang);
    updateLanguageButton();
    updatePageContent();
}

// Update Language Button Text
function updateLanguageButton() {
    const langButton = document.getElementById('languageToggle');
    if (langButton) {
        langButton.textContent = currentLanguage === 'ar' ? 'EN' : 'عربي';
    }
}

// Update Page Content Based on Current Page
function updatePageContent() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    if (currentPage === 'index.html' || currentPage === '') {
        updateHomePage();
    } else if (currentPage === 'courses.html') {
        updateCoursesPage();
    } else if (currentPage === 'registration.html') {
        updateRegistrationPage();
    } else if (currentPage === 'success-stories.html') {
        updateSuccessStoriesPage();
    } else if (currentPage === 'contact.html') {
        updateContactPage();
    }
}

// ==========================================
// Home Page Updates
// ==========================================
function updateHomePage() {
    // Update Hero Section
    const heroTitle = document.querySelector('.hero-content h1');
    const heroSubtitle = document.querySelector('.hero-content p');
    const heroButton = document.querySelector('.hero-content .cta-button');

    if (heroTitle) heroTitle.textContent = translate('home.heroTitle');
    if (heroSubtitle) heroSubtitle.textContent = translate('home.heroSubtitle');
    if (heroButton) heroButton.textContent = translate('home.heroButton');

    // Update Learning Path
    const pathTitle = document.querySelector('.learning-path .section-title');
    if (pathTitle) pathTitle.textContent = translate('home.pathTitle');

    const pathSteps = document.querySelectorAll('.path-step');
    if (pathSteps.length >= 4) {
        pathSteps[0].querySelector('h3').textContent = translate('home.step1Title');
        pathSteps[0].querySelector('p').textContent = translate('home.step1Desc');
        pathSteps[1].querySelector('h3').textContent = translate('home.step2Title');
        pathSteps[1].querySelector('p').textContent = translate('home.step2Desc');
        pathSteps[2].querySelector('h3').textContent = translate('home.step3Title');
        pathSteps[2].querySelector('p').textContent = translate('home.step3Desc');
        pathSteps[3].querySelector('h3').textContent = translate('home.step4Title');
        pathSteps[3].querySelector('p').textContent = translate('home.step4Desc');
    }

    // Update Courses Section
    const coursesTitle = document.querySelector('.courses-section .section-title');
    if (coursesTitle) coursesTitle.textContent = translate('home.coursesTitle');

    const enrollButtons = document.querySelectorAll('.enroll-btn');
    enrollButtons.forEach(btn => {
        btn.textContent = translate('home.enrollNow');
    });
}

// ==========================================
// Courses Page Updates
// ==========================================
function updateCoursesPage() {
    const pageTitle = document.querySelector('.page-header h1');
    const pageSubtitle = document.querySelector('.page-header p');

    if (pageTitle) pageTitle.textContent = translate('courses.pageTitle');
    if (pageSubtitle) pageSubtitle.textContent = translate('courses.pageSubtitle');

    // Update filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    const filterTexts = ['allCourses', 'programming', 'design', 'data', 'marketing'];
    filterButtons.forEach((btn, index) => {
        if (filterTexts[index]) {
            const span = btn.querySelector('span:last-child');
            if (span) span.textContent = translate('courses.' + filterTexts[index]);
        }
    });

    // Update sort label
    const sortLabel = document.querySelector('.sort-container label');
    if (sortLabel) sortLabel.textContent = translate('courses.sortBy');

    // Reload courses with new language
    if (typeof displayCourses === 'function' && typeof displayedCourses !== 'undefined') {
        displayCourses(displayedCourses);
    }
}

// ==========================================
// Registration Page Updates
// ==========================================
function updateRegistrationPage() {
    // Update step labels
    const stepLabels = document.querySelectorAll('.step-label');
    if (stepLabels.length >= 4) {
        stepLabels[0].textContent = translate('registration.step1Title');
        stepLabels[1].textContent = translate('registration.step2Title');
        stepLabels[2].textContent = translate('registration.step3Title');
        stepLabels[3].textContent = translate('registration.step4Title');
    }

    // Update form labels and placeholders dynamically
    updateFormTranslations();
}

function updateFormTranslations() {
    // This will be called when language changes
    const labels = {
        'fullName': 'registration.fullName',
        'email': 'registration.email',
        'phone': 'registration.phone',
        'age': 'registration.age'
    };

    Object.keys(labels).forEach(id => {
        const input = document.getElementById(id);
        if (input) {
            const label = input.previousElementSibling;
            if (label && label.tagName === 'LABEL') {
                // Keep the icon, update text
                const icon = label.querySelector('.label-icon');
                if (icon) {
                    label.innerHTML = '';
                    label.appendChild(icon);
                    label.appendChild(document.createTextNode(translate(labels[id])));
                }
            }
        }
    });
}

// ==========================================
// Success Stories Page Updates
// ==========================================
function updateSuccessStoriesPage() {
    const pageTitle = document.querySelector('.page-header h1');
    const pageSubtitle = document.querySelector('.page-header p');

    if (pageTitle) pageTitle.textContent = translate('successStories.pageTitle');
    if (pageSubtitle) pageSubtitle.textContent = translate('successStories.pageSubtitle');

    // Update stats labels
    const statLabels = document.querySelectorAll('.stat-label');
    if (statLabels.length >= 4) {
        statLabels[0].textContent = translate('successStories.graduates');
        statLabels[1].textContent = translate('successStories.successRate');
        statLabels[2].textContent = translate('successStories.stories');
        statLabels[3].textContent = translate('successStories.companies');
    }

    const timelineTitle = document.querySelector('.timeline-section .section-title');
    if (timelineTitle) timelineTitle.textContent = translate('successStories.journeyTitle');
}

// ==========================================
// Contact Page Updates
// ==========================================
function updateContactPage() {
    const pageTitle = document.querySelector('.page-header h1');
    const pageSubtitle = document.querySelector('.page-header p');

    if (pageTitle) pageTitle.textContent = translate('contact.pageTitle');
    if (pageSubtitle) pageSubtitle.textContent = translate('contact.pageSubtitle');

    // Update contact method cards
    const methodCards = document.querySelectorAll('.contact-method-card');
    if (methodCards.length >= 4) {
        methodCards[0].querySelector('h3').textContent = translate('contact.callUs');
        methodCards[0].querySelectorAll('p')[1].textContent = translate('contact.availableTime');

        methodCards[1].querySelector('h3').textContent = translate('contact.emailUs');
        methodCards[1].querySelectorAll('p')[1].textContent = translate('contact.replyTime');

        methodCards[2].querySelector('h3').textContent = translate('contact.whatsapp');
        methodCards[2].querySelectorAll('p')[0].textContent = translate('contact.instantChat');
        methodCards[2].querySelectorAll('p')[1].textContent = translate('contact.alwaysAvailable');

        methodCards[3].querySelector('h3').textContent = translate('contact.visitUs');
        methodCards[3].querySelectorAll('p')[1].textContent = translate('contact.address');
    }

    // Update map section
    const mapTitle = document.querySelector('.map-section .section-title');
    if (mapTitle) mapTitle.textContent = translate('contact.mapTitle');

    // Update social section
    const socialTitle = document.querySelector('.social-section .section-title');
    if (socialTitle) socialTitle.textContent = translate('contact.followUs');

    // Update FAQ section
    const faqTitle = document.querySelector('.faq-section .section-title');
    if (faqTitle) faqTitle.textContent = translate('contact.faqTitle');
}

// ==========================================
// Add Language Button to All Pages
// ==========================================
function addLanguageButton() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    // Check if button already exists
    if (document.getElementById('languageToggle')) return;

    // Find theme toggle button
    const themeToggle = navbar.querySelector('.theme-toggle');
    if (!themeToggle) return;

    // Create nav-controls wrapper if it doesn't exist
    let navControls = navbar.querySelector('.nav-controls');
    if (!navControls) {
        navControls = document.createElement('div');
        navControls.className = 'nav-controls';

        // Wrap theme toggle in nav-controls
        themeToggle.parentNode.insertBefore(navControls, themeToggle);
        navControls.appendChild(themeToggle);
    }

    // Create language button
    const langButton = document.createElement('button');
    langButton.id = 'languageToggle';
    langButton.className = 'language-toggle';
    langButton.textContent = currentLanguage === 'ar' ? 'EN' : 'عربي';
    langButton.onclick = toggleLanguage;

    // Insert before theme toggle
    navControls.insertBefore(langButton, themeToggle);
}

// ==========================================
// Initialize on Page Load
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // Add language button
    addLanguageButton();

    // Update navbar translations
    const navLinks = document.querySelectorAll('.nav-links a');
    if (navLinks.length >= 5) {
        navLinks[0].textContent = translate('nav.home');
        navLinks[1].textContent = translate('nav.courses');
        navLinks[2].textContent = translate('nav.registration');
        navLinks[3].textContent = translate('nav.successStories');
        navLinks[4].textContent = translate('nav.contact');
    }

    const logo = document.querySelector('.logo');
    if (logo) logo.textContent = translate('nav.logo');

    // Update page content
    updatePageContent();

    // Update language button
    updateLanguageButton();
});

// Listen for language change events
window.addEventListener('languageChanged', () => {
    updateLanguageButton();
    updatePageContent();

    // Update navbar
    const navLinks = document.querySelectorAll('.nav-links a');
    if (navLinks.length >= 5) {
        navLinks[0].textContent = translate('nav.home');
        navLinks[1].textContent = translate('nav.courses');
        navLinks[2].textContent = translate('nav.registration');
        navLinks[3].textContent = translate('nav.successStories');
        navLinks[4].textContent = translate('nav.contact');
    }

    const logo = document.querySelector('.logo');
    if (logo) logo.textContent = translate('nav.logo');
});

console.log('🌐 Language handler loaded!');
