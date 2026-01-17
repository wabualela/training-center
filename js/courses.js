// ==========================================
// Courses Data
// ==========================================
const allCourses = [
    {
        id: 1,
        title: 'تطوير الويب الحديث',
        category: 'programming',
        icon: '💻',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        description: 'تعلم تطوير تطبيقات الويب باستخدام أحدث التقنيات مثل React و Node.js والمزيد',
        duration: '12 أسبوع',
        level: 'متقدم',
        price: 1200,
        students: 1250,
        instructor: 'م. أحمد خالد',
        badge: 'الأكثر طلباً'
    },
    {
        id: 2,
        title: 'التصميم الجرافيكي',
        category: 'design',
        icon: '🎨',
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        description: 'أتقن فنون التصميم الجرافيكي باستخدام Adobe Photoshop و Illustrator',
        duration: '8 أسابيع',
        level: 'متوسط',
        price: 900,
        students: 890,
        instructor: 'أ. سارة محمود',
        badge: 'جديد'
    },
    {
        id: 3,
        title: 'الذكاء الاصطناعي',
        category: 'programming',
        icon: '🤖',
        gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        description: 'اكتشف عالم الذكاء الاصطناعي والتعلم الآلي مع Python و TensorFlow',
        duration: '16 أسبوع',
        level: 'متقدم',
        price: 1500,
        students: 670,
        instructor: 'د. محمد العلي',
        badge: 'متقدم'
    },
    {
        id: 4,
        title: 'تطوير تطبيقات الموبايل',
        category: 'programming',
        icon: '📱',
        gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        description: 'ابني تطبيقات موبايل احترافية باستخدام React Native و Flutter',
        duration: '10 أسابيع',
        level: 'متوسط',
        price: 1100,
        students: 920,
        instructor: 'م. فاطمة أحمد',
        badge: 'شائع'
    },
    {
        id: 5,
        title: 'تحليل البيانات',
        category: 'data',
        icon: '📊',
        gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        description: 'تعلم تحليل البيانات وإنشاء تقارير تفاعلية باستخدام Excel و Power BI',
        duration: '8 أسابيع',
        level: 'مبتدئ',
        price: 800,
        students: 1100,
        instructor: 'أ. خالد سعيد',
        badge: 'للمبتدئين'
    },
    {
        id: 6,
        title: 'التسويق الرقمي',
        category: 'marketing',
        icon: '🌐',
        gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
        description: 'أتقن استراتيجيات التسويق الرقمي ووسائل التواصل الاجتماعي',
        duration: '6 أسابيع',
        level: 'مبتدئ',
        price: 700,
        students: 1350,
        instructor: 'أ. نورا عبدالله',
        badge: 'الأكثر شعبية'
    },
    {
        id: 7,
        title: 'أمن المعلومات',
        category: 'programming',
        icon: '🔒',
        gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
        description: 'تعلم كيفية حماية الأنظمة والشبكات من الهجمات الإلكترونية',
        duration: '14 أسبوع',
        level: 'متقدم',
        price: 1400,
        students: 540,
        instructor: 'م. عبدالله حسن',
        badge: 'مميز'
    },
    {
        id: 8,
        title: 'تصميم UI/UX',
        category: 'design',
        icon: '🎯',
        gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
        description: 'صمم واجهات مستخدم جذابة وتجارب مستخدم استثنائية',
        duration: '10 أسابيع',
        level: 'متوسط',
        price: 1000,
        students: 780,
        instructor: 'أ. مريم علي',
        badge: 'رائج'
    },
    {
        id: 9,
        title: 'علم البيانات',
        category: 'data',
        icon: '🔬',
        gradient: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
        description: 'استكشف علم البيانات والتحليل المتقدم باستخدام Python و R',
        duration: '16 أسبوع',
        level: 'متقدم',
        price: 1600,
        students: 490,
        instructor: 'د. سعيد أحمد',
        badge: 'متقدم'
    },
    {
        id: 10,
        title: 'إدارة وسائل التواصل',
        category: 'marketing',
        icon: '📲',
        gradient: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)',
        description: 'أتقن فن إدارة حسابات التواصل الاجتماعي وبناء المحتوى الجذاب',
        duration: '6 أسابيع',
        level: 'مبتدئ',
        price: 650,
        students: 1450,
        instructor: 'أ. ريم محمد',
        badge: 'جديد'
    },
    {
        id: 11,
        title: 'الرسوم المتحركة',
        category: 'design',
        icon: '🎬',
        gradient: 'linear-gradient(135deg, #fddb92 0%, #d1fdff 100%)',
        description: 'تعلم إنشاء الرسوم المتحركة والموشن جرافيك باستخدام After Effects',
        duration: '12 أسبوع',
        level: 'متوسط',
        price: 1050,
        students: 620,
        instructor: 'م. ياسر علي',
        badge: 'إبداعي'
    },
    {
        id: 12,
        title: 'تحليلات التسويق',
        category: 'marketing',
        icon: '📈',
        gradient: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
        description: 'تعلم تحليل بيانات التسويق واتخاذ قرارات مبنية على البيانات',
        duration: '8 أسابيع',
        level: 'متوسط',
        price: 950,
        students: 730,
        instructor: 'أ. هند سعيد',
        badge: 'تحليلي'
    }
];

let displayedCourses = [...allCourses];
let currentFilter = 'all';
let currentSort = 'popularity';

// ==========================================
// Display Courses
// ==========================================
function displayCourses(courses) {
    const coursesGrid = document.getElementById('coursesGrid');
    const noResults = document.getElementById('noResults');

    if (courses.length === 0) {
        coursesGrid.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }

    coursesGrid.style.display = 'grid';
    noResults.style.display = 'none';

    coursesGrid.innerHTML = courses.map(course => `
        <div class="course-card-full" onclick="showCourseDetails(${course.id})">
            <div class="course-header">
                <div class="course-header-bg" style="background: ${course.gradient};"></div>
                <div class="course-icon">${course.icon}</div>
                <div class="course-badge">${course.badge}</div>
            </div>
            <div class="course-body">
                <h3>${course.title}</h3>
                <p class="course-description">${course.description}</p>

                <div class="course-stats">
                    <div class="stat">
                        <span class="stat-icon">⏱️</span>
                        <span class="stat-value">${course.duration}</span>
                    </div>
                    <div class="stat">
                        <span class="stat-icon">📊</span>
                        <span class="stat-value">${course.level}</span>
                    </div>
                    <div class="stat">
                        <span class="stat-icon">👥</span>
                        <span class="stat-value">${course.students} طالب</span>
                    </div>
                </div>

                <div class="course-instructor">
                    <span>👨‍🏫</span>
                    <span>${course.instructor}</span>
                </div>

                <div class="course-footer">
                    <div class="course-price-tag">${course.price} ريال</div>
                    <button class="view-details-btn" onclick="event.stopPropagation(); showCourseDetails(${course.id})">
                        عرض التفاصيل
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// ==========================================
// Filter Courses
// ==========================================
function filterCourses(category) {
    currentFilter = category;

    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-category="${category}"]`).classList.add('active');

    // Filter courses
    if (category === 'all') {
        displayedCourses = [...allCourses];
    } else {
        displayedCourses = allCourses.filter(course => course.category === category);
    }

    // Apply current sort
    sortCourses(currentSort);
}

// ==========================================
// Sort Courses
// ==========================================
function sortCourses(sortBy) {
    currentSort = sortBy;

    switch (sortBy) {
        case 'popularity':
            displayedCourses.sort((a, b) => b.students - a.students);
            break;
        case 'price-low':
            displayedCourses.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            displayedCourses.sort((a, b) => b.price - a.price);
            break;
        case 'duration':
            displayedCourses.sort((a, b) => {
                const getDuration = (str) => parseInt(str);
                return getDuration(a.duration) - getDuration(b.duration);
            });
            break;
        case 'level':
            const levelOrder = { 'مبتدئ': 1, 'متوسط': 2, 'متقدم': 3 };
            displayedCourses.sort((a, b) => levelOrder[a.level] - levelOrder[b.level]);
            break;
    }

    displayCourses(displayedCourses);
}

// ==========================================
// Show Course Details (Extended)
// ==========================================
function showCourseDetails(courseId) {
    const course = allCourses.find(c => c.id === courseId);
    const modal = document.getElementById('courseModal');
    const detailsContainer = document.getElementById('courseDetails');

    if (course) {
        // Get course topics based on category
        let topics = [];
        if (course.category === 'programming') {
            topics = [
                'أساسيات البرمجة والمفاهيم المتقدمة',
                'بناء مشاريع عملية حقيقية',
                'أفضل الممارسات والأنماط البرمجية',
                'التعامل مع قواعد البيانات',
                'اختبار وتصحيح الأخطاء',
                'النشر والإطلاق',
                'مشاريع نهائية شاملة'
            ];
        } else if (course.category === 'design') {
            topics = [
                'مبادئ التصميم الأساسية',
                'نظرية الألوان والتايبوجرافي',
                'استخدام الأدوات الاحترافية',
                'تصميم الهوية البصرية',
                'تصميم واجهات المستخدم',
                'مشاريع عملية متنوعة',
                'بناء بورتفوليو احترافي'
            ];
        } else if (course.category === 'data') {
            topics = [
                'جمع وتنظيف البيانات',
                'التحليل الإحصائي',
                'أدوات التحليل المتقدمة',
                'التصور البياني التفاعلي',
                'لوحات معلومات احترافية',
                'التنبؤ واتخاذ القرارات',
                'مشاريع تحليل حقيقية'
            ];
        } else if (course.category === 'marketing') {
            topics = [
                'استراتيجيات التسويق الرقمي',
                'تحسين محركات البحث SEO',
                'الحملات الإعلانية المدفوعة',
                'التسويق عبر وسائل التواصل',
                'كتابة المحتوى التسويقي',
                'تحليل الأداء والنتائج',
                'حملات تسويقية عملية'
            ];
        }

        detailsContainer.innerHTML = `
            <div style="text-align: center; font-size: 5rem; margin-bottom: 1rem;">
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
            <p style="margin-bottom: 1.5rem; line-height: 1.8; font-size: 1.1rem;">
                ${course.description}
            </p>
            <h3 style="color: var(--primary-color); margin-bottom: 1rem;">محتوى الدورة:</h3>
            <ul style="list-style: none; padding: 0; margin-bottom: 1.5rem;">
                ${topics.map(topic => `
                    <li style="padding: 0.8rem; margin-bottom: 0.5rem; background: var(--bg-secondary); border-radius: 8px; border-right: 4px solid var(--primary-color);">
                        ✓ ${topic}
                    </li>
                `).join('')}
            </ul>
            <div style="background: var(--bg-secondary); padding: 1.5rem; border-radius: var(--border-radius); margin-bottom: 1.5rem;">
                <h3 style="color: var(--primary-color); margin-bottom: 1rem;">ماذا ستحصل؟</h3>
                <ul style="list-style: none; padding: 0;">
                    <li style="padding: 0.5rem 0;">🎓 شهادة معتمدة عند الإكمال</li>
                    <li style="padding: 0.5rem 0;">💼 مشاريع عملية لبناء بورتفوليو</li>
                    <li style="padding: 0.5rem 0;">👨‍🏫 دعم مباشر من المدرب</li>
                    <li style="padding: 0.5rem 0;">📚 مصادر تعليمية شاملة</li>
                    <li style="padding: 0.5rem 0;">👥 انضمام لمجتمع الطلاب</li>
                    <li style="padding: 0.5rem 0;">♾️ وصول غير محدود للمحتوى</li>
                </ul>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
                <div>
                    <p style="margin: 0; color: var(--text-secondary);">المدرب: ${course.instructor}</p>
                    <p style="font-size: 2rem; color: var(--primary-color); font-weight: bold; margin: 0.5rem 0;">
                        ${course.price} ريال
                    </p>
                </div>
                <button class="cta-button" onclick="window.location.href='registration.html?course=${course.id}'">
                    سجل الآن ✨
                </button>
            </div>
        `;
        modal.classList.add('active');
    }
}

// ==========================================
// Initialize
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    displayCourses(allCourses);
});
