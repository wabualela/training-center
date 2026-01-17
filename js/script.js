// ==========================================
// Theme Toggle (Dark/Light Mode)
// ==========================================
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    themeToggle.textContent = theme === 'light' ? '🌙' : '☀️';
}

// ==========================================
// Navbar Scroll Effect
// ==========================================
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ==========================================
// Smooth Scroll
// ==========================================
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// ==========================================
// Scroll Animations
// ==========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe all elements with animation classes
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .path-step');
    animatedElements.forEach(el => observer.observe(el));
});

// ==========================================
// Courses Carousel
// ==========================================
let currentPosition = 0;
const carousel = document.getElementById('coursesCarousel');
const cardWidth = 350 + 32; // card width + gap

function moveCarousel(direction) {
    const maxScroll = carousel.scrollWidth - carousel.parentElement.offsetWidth;
    currentPosition += direction * cardWidth;

    // Limit scrolling
    if (currentPosition < 0) currentPosition = 0;
    if (currentPosition > maxScroll) currentPosition = maxScroll;

    carousel.style.transform = `translateX(${direction === 1 ? '' : '-'}${currentPosition}px)`;
}

// Auto-scroll carousel
let autoScrollInterval = setInterval(() => {
    const maxScroll = carousel.scrollWidth - carousel.parentElement.offsetWidth;
    if (currentPosition >= maxScroll) {
        currentPosition = 0;
    } else {
        currentPosition += cardWidth;
    }
    carousel.style.transform = `translateX(-${currentPosition}px)`;
}, 5000);

// Stop auto-scroll on hover
if (carousel) {
    carousel.parentElement.addEventListener('mouseenter', () => {
        clearInterval(autoScrollInterval);
    });

    carousel.parentElement.addEventListener('mouseleave', () => {
        autoScrollInterval = setInterval(() => {
            const maxScroll = carousel.scrollWidth - carousel.parentElement.offsetWidth;
            if (currentPosition >= maxScroll) {
                currentPosition = 0;
            } else {
                currentPosition += cardWidth;
            }
            carousel.style.transform = `translateX(-${currentPosition}px)`;
        }, 5000);
    });
}

// ==========================================
// Course Details Modal
// ==========================================
const coursesData = {
    1: {
        title: 'تطوير الويب الحديث',
        icon: '💻',
        duration: '12 أسبوع',
        level: 'متقدم',
        price: '1200 ريال',
        description: 'دورة شاملة في تطوير تطبيقات الويب الحديثة باستخدام أحدث التقنيات والأدوات.',
        topics: [
            'HTML5, CSS3, JavaScript ES6+',
            'React.js و Redux',
            'Node.js و Express.js',
            'MongoDB و قواعد البيانات',
            'RESTful APIs',
            'Git و GitHub',
            'مشاريع عملية'
        ],
        instructor: 'م. أحمد خالد',
        students: 1250
    },
    2: {
        title: 'التصميم الجرافيكي',
        icon: '🎨',
        duration: '8 أسابيع',
        level: 'متوسط',
        price: '900 ريال',
        description: 'تعلم أساسيات ومتقدمات التصميم الجرافيكي وإنشاء تصاميم احترافية.',
        topics: [
            'مبادئ التصميم والألوان',
            'Adobe Photoshop',
            'Adobe Illustrator',
            'تصميم الشعارات',
            'تصميم الهوية البصرية',
            'تصميم وسائل التواصل الاجتماعي',
            'مشاريع عملية'
        ],
        instructor: 'أ. سارة محمود',
        students: 890
    },
    3: {
        title: 'الذكاء الاصطناعي',
        icon: '🤖',
        duration: '16 أسبوع',
        level: 'متقدم',
        price: '1500 ريال',
        description: 'دورة متقدمة في الذكاء الاصطناعي والتعلم الآلي مع تطبيقات عملية.',
        topics: [
            'Python للذكاء الاصطناعي',
            'التعلم الآلي (Machine Learning)',
            'التعلم العميق (Deep Learning)',
            'TensorFlow و PyTorch',
            'معالجة اللغات الطبيعية (NLP)',
            'رؤية الحاسوب (Computer Vision)',
            'مشاريع ذكاء اصطناعي حقيقية'
        ],
        instructor: 'د. محمد العلي',
        students: 670
    },
    4: {
        title: 'تطوير تطبيقات الموبايل',
        icon: '📱',
        duration: '10 أسابيع',
        level: 'متوسط',
        price: '1100 ريال',
        description: 'تعلم بناء تطبيقات موبايل احترافية لأنظمة iOS و Android.',
        topics: [
            'React Native',
            'Flutter و Dart',
            'Firebase و Backend',
            'واجهات المستخدم (UI/UX)',
            'النشر على المتاجر',
            'الإشعارات والخدمات',
            'مشاريع تطبيقات كاملة'
        ],
        instructor: 'م. فاطمة أحمد',
        students: 920
    },
    5: {
        title: 'تحليل البيانات',
        icon: '📊',
        duration: '8 أسابيع',
        level: 'مبتدئ',
        price: '800 ريال',
        description: 'اكتشف عالم تحليل البيانات وإنشاء تقارير بصرية تفاعلية.',
        topics: [
            'Excel المتقدم',
            'Power BI',
            'SQL و قواعد البيانات',
            'Python للتحليل',
            'Pandas و NumPy',
            'التصور البياني',
            'مشاريع تحليل حقيقية'
        ],
        instructor: 'أ. خالد سعيد',
        students: 1100
    },
    6: {
        title: 'التسويق الرقمي',
        icon: '🌐',
        duration: '6 أسابيع',
        level: 'مبتدئ',
        price: '700 ريال',
        description: 'أتقن استراتيجيات التسويق الرقمي وبناء حضور قوي على الإنترنت.',
        topics: [
            'أساسيات التسويق الرقمي',
            'SEO و SEM',
            'إعلانات Google و Facebook',
            'إدارة وسائل التواصل',
            'Email Marketing',
            'تحليلات التسويق',
            'حملات تسويقية عملية'
        ],
        instructor: 'أ. نورا عبدالله',
        students: 1350
    }
};

function showCourseDetails(courseId) {
    const course = coursesData[courseId];
    const modal = document.getElementById('courseModal');
    const detailsContainer = document.getElementById('courseDetails');

    if (course) {
        detailsContainer.innerHTML = `
            <div style="text-align: center; font-size: 4rem; margin-bottom: 1rem;">
                ${course.icon}
            </div>
            <h2 style="text-align: center; color: var(--primary-color); margin-bottom: 1rem;">
                ${course.title}
            </h2>
            <div style="display: flex; justify-content: center; gap: 2rem; margin-bottom: 1.5rem; flex-wrap: wrap;">
                <span>⏱️ ${course.duration}</span>
                <span>📊 ${course.level}</span>
                <span>👥 ${course.students} طالب</span>
            </div>
            <p style="margin-bottom: 1.5rem; line-height: 1.8;">
                ${course.description}
            </p>
            <h3 style="color: var(--primary-color); margin-bottom: 1rem;">محتوى الدورة:</h3>
            <ul style="list-style: none; padding: 0; margin-bottom: 1.5rem;">
                ${course.topics.map(topic => `
                    <li style="padding: 0.5rem; margin-bottom: 0.5rem; background: var(--bg-secondary); border-radius: 8px;">
                        ✓ ${topic}
                    </li>
                `).join('')}
            </ul>
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
                <div>
                    <p style="margin: 0; color: var(--text-secondary);">المدرب: ${course.instructor}</p>
                    <p style="font-size: 1.8rem; color: var(--primary-color); font-weight: bold; margin: 0.5rem 0;">
                        ${course.price}
                    </p>
                </div>
                <button class="cta-button" onclick="window.location.href='registration.html?course=${courseId}'">
                    سجل الآن
                </button>
            </div>
        `;
        modal.classList.add('active');
    }
}

function closeModal() {
    const modal = document.getElementById('courseModal');
    modal.classList.remove('active');
}

// Close modal on outside click
document.addEventListener('click', (e) => {
    const modal = document.getElementById('courseModal');
    if (e.target === modal) {
        closeModal();
    }
});

// ==========================================
// Live Notifications
// ==========================================
const notifications = [
    { name: 'أحمد محمد', course: 'تطوير الويب' },
    { name: 'سارة أحمد', course: 'التصميم الجرافيكي' },
    { name: 'خالد عبدالله', course: 'الذكاء الاصطناعي' },
    { name: 'فاطمة علي', course: 'تطبيقات الموبايل' },
    { name: 'محمد سعيد', course: 'تحليل البيانات' },
    { name: 'نور الهدى', course: 'التسويق الرقمي' },
    { name: 'عبدالرحمن خالد', course: 'تطوير الويب' },
    { name: 'ليلى محمود', course: 'التصميم الجرافيكي' }
];

let notificationIndex = 0;

function showNotification() {
    const notification = document.getElementById('liveNotification');
    const studentName = document.getElementById('studentName');
    const courseName = document.getElementById('courseName');

    const data = notifications[notificationIndex];
    studentName.textContent = data.name;
    courseName.textContent = data.course;

    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 4000);

    notificationIndex = (notificationIndex + 1) % notifications.length;
}

// Show first notification after 3 seconds
setTimeout(showNotification, 3000);

// Show notification every 10 seconds
setInterval(showNotification, 10000);

// ==========================================
// Mini Quiz
// ==========================================
const quizRecommendations = {
    'web': { courseId: 1, message: 'ننصحك بدورة تطوير الويب الحديث!' },
    'design': { courseId: 2, message: 'ننصحك بدورة التصميم الجرافيكي!' },
    'ai': { courseId: 3, message: 'ننصحك بدورة الذكاء الاصطناعي!' },
    'mobile': { courseId: 4, message: 'ننصحك بدورة تطوير تطبيقات الموبايل!' },
    'data': { courseId: 5, message: 'ننصحك بدورة تحليل البيانات!' },
    'marketing': { courseId: 6, message: 'ننصحك بدورة التسويق الرقمي!' }
};

function handleQuizAnswer(answer) {
    const recommendation = quizRecommendations[answer];
    if (recommendation) {
        alert(recommendation.message);
        showCourseDetails(recommendation.courseId);
    }
}

// Show quiz button on homepage
window.addEventListener('DOMContentLoaded', () => {
    // Add quiz toggle button if on home page
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            const quizBtn = document.createElement('button');
            quizBtn.className = 'cta-button';
            quizBtn.textContent = '🎯 اكتشف الدورة المناسبة لك';
            quizBtn.style.marginTop = '1rem';
            quizBtn.style.background = 'var(--secondary-color)';
            quizBtn.onclick = () => {
                const quizSection = document.getElementById('quiz-section');
                if (quizSection) {
                    quizSection.style.display = 'block';
                    quizSection.scrollIntoView({ behavior: 'smooth' });
                }
            };
            heroContent.appendChild(quizBtn);
        }
    }
});

// ==========================================
// Add Quiz Styles
// ==========================================
const quizStyles = document.createElement('style');
quizStyles.textContent = `
    .quiz-container {
        max-width: 800px;
        margin: 0 auto;
        padding: 2rem;
        background: var(--card-bg);
        border-radius: var(--border-radius);
        box-shadow: 0 5px 20px var(--shadow);
    }

    .quiz-question h3 {
        text-align: center;
        color: var(--text-color);
        margin-bottom: 2rem;
        font-size: 1.5rem;
    }

    .quiz-options {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
    }

    .quiz-option {
        padding: 1.5rem;
        background: var(--bg-secondary);
        border: 2px solid transparent;
        border-radius: var(--border-radius);
        cursor: pointer;
        transition: var(--transition);
        font-size: 1.1rem;
        text-align: center;
    }

    .quiz-option:hover {
        border-color: var(--primary-color);
        background: var(--primary-color);
        color: white;
        transform: translateY(-5px);
        box-shadow: 0 10px 20px var(--shadow);
    }
`;
document.head.appendChild(quizStyles);

// ==========================================
// Prevent Card Click Propagation for Enroll Button
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const enrollButtons = document.querySelectorAll('.enroll-btn');
    enrollButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            window.location.href = 'registration.html';
        });
    });
});

// ==========================================
// Add Parallax Effect on Hero Background
// ==========================================
window.addEventListener('scroll', () => {
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        const scrolled = window.pageYOffset;
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

console.log('🎉 مركز التدريب - الموقع التفاعلي جاهز!');
