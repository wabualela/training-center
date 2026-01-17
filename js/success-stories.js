// ==========================================
// Success Stories Data
// ==========================================
const stories = {
    1: {
        name: 'أحمد محمد',
        icon: '👨‍💻',
        course: 'تطوير الويب الحديث',
        year: '2023',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        quote: 'لم أكن أتخيل أن أصل إلى هذا المستوى في وقت قصير. الدورة غيرت حياتي بالكامل!',
        journey: [
            {
                phase: '🎯 البداية',
                description: 'كنت أعمل في وظيفة لا علاقة لها بالبرمجة وأحلم بالدخول في عالم التقنية'
            },
            {
                phase: '📚 التعلم',
                description: 'التحقت بدورة تطوير الويب وتعلمت React و Node.js والعديد من التقنيات الحديثة'
            },
            {
                phase: '💼 التحول',
                description: 'بعد إنهاء الدورة، بدأت بناء مشاريع شخصية وحصلت على وظيفة Junior Developer'
            },
            {
                phase: '🚀 النجاح',
                description: 'الآن أعمل كـ Full Stack Developer في شركة تقنية عالمية براتب 3 أضعاف راتبي السابق'
            }
        ],
        achievements: [
            { icon: '💰', value: '300%', label: 'زيادة في الراتب' },
            { icon: '🏢', value: 'Google', label: 'شركة عالمية' },
            { icon: '📈', value: '15+', label: 'مشروع ناجح' },
            { icon: '⭐', value: '5.0', label: 'تقييم الأداء' }
        ]
    },
    2: {
        name: 'سارة أحمد',
        icon: '👩‍🎨',
        course: 'التصميم الجرافيكي',
        year: '2024',
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        quote: 'الدورة لم تعلمني التصميم فقط، بل علمتني كيف أفكر بطريقة إبداعية وأبني مشروعي الخاص',
        journey: [
            {
                phase: '🎯 البداية',
                description: 'كانت لدي موهبة الرسم لكن لم أكن أعرف كيف أستثمرها بشكل احترافي'
            },
            {
                phase: '📚 التعلم',
                description: 'تعلمت Photoshop و Illustrator وأساسيات التصميم والهوية البصرية'
            },
            {
                phase: '💼 التحول',
                description: 'بدأت العمل كـ Freelancer وأنجزت مشاريع متنوعة لعملاء من مختلف البلدان'
            },
            {
                phase: '🚀 النجاح',
                description: 'أسست استوديو تصميم خاص بي وأعمل الآن مع أكثر من 50 عميل دائم'
            }
        ],
        achievements: [
            { icon: '🎨', value: '50+', label: 'عميل دائم' },
            { icon: '💼', value: 'استوديو', label: 'مشروع خاص' },
            { icon: '💰', value: '25K', label: 'دخل شهري' },
            { icon: '⭐', value: '4.9', label: 'تقييم العملاء' }
        ]
    },
    3: {
        name: 'خالد العلي',
        icon: '👨‍🔬',
        course: 'الذكاء الاصطناعي',
        year: '2023',
        gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        quote: 'الذكاء الاصطناعي هو مستقبل التقنية، وهذه الدورة كانت البداية المثالية لرحلتي الأكاديمية',
        journey: [
            {
                phase: '🎯 البداية',
                description: 'خريج جديد ومهتم بالذكاء الاصطناعي لكن لم أعرف من أين أبدأ'
            },
            {
                phase: '📚 التعلم',
                description: 'تعلمت Python و TensorFlow والتعلم الآلي والشبكات العصبية'
            },
            {
                phase: '💼 التحول',
                description: 'نشرت ورقة بحثية في مؤتمر دولي وحصلت على قبول للدكتوراه'
            },
            {
                phase: '🚀 النجاح',
                description: 'الآن عضو في فريق بحث الذكاء الاصطناعي في جامعة مرموقة'
            }
        ],
        achievements: [
            { icon: '🎓', value: 'PhD', label: 'دكتوراه' },
            { icon: '📄', value: '5', label: 'أوراق بحثية' },
            { icon: '🏆', value: '3', label: 'جوائز علمية' },
            { icon: '👥', value: '100+', label: 'طالب علَّمتهم' }
        ]
    },
    4: {
        name: 'فاطمة حسن',
        icon: '👩‍💻',
        course: 'تطوير تطبيقات الموبايل',
        year: '2024',
        gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        quote: 'من فكرة بسيطة إلى تطبيق ناجح بـ 100 ألف تحميل، الحلم أصبح حقيقة!',
        journey: [
            {
                phase: '🎯 البداية',
                description: 'كانت لدي فكرة تطبيق لكن لم أكن أعرف البرمجة'
            },
            {
                phase: '📚 التعلم',
                description: 'تعلمت React Native و Flutter وبنيت أول تطبيق لي'
            },
            {
                phase: '💼 التحول',
                description: 'أطلقت تطبيقي على المتاجر وبدأ في اكتساب المستخدمين'
            },
            {
                phase: '🚀 النجاح',
                description: 'تطبيقي الآن لديه أكثر من 100 ألف تحميل وتقييم 4.8 نجوم'
            }
        ],
        achievements: [
            { icon: '📱', value: '100K+', label: 'تحميل' },
            { icon: '⭐', value: '4.8', label: 'تقييم' },
            { icon: '💰', value: '$5K', label: 'دخل شهري' },
            { icon: '🌍', value: '45', label: 'دولة' }
        ]
    },
    5: {
        name: 'محمد سعيد',
        icon: '👨‍💼',
        course: 'تحليل البيانات',
        year: '2023',
        gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        quote: 'البيانات هي النفط الجديد، وتعلم تحليلها فتح لي أبواب كثيرة في مجال الأعمال',
        journey: [
            {
                phase: '🎯 البداية',
                description: 'كنت موظف في قسم الحسابات وأريد تطوير مهاراتي'
            },
            {
                phase: '📚 التعلم',
                description: 'تعلمت Excel المتقدم و Power BI و SQL وPython للتحليل'
            },
            {
                phase: '💼 التحول',
                description: 'انتقلت لقسم تحليل البيانات وساهمت في قرارات استراتيجية مهمة'
            },
            {
                phase: '🚀 النجاح',
                description: 'أصبحت محلل بيانات رئيسي وحصلت على ترقية سريعة'
            }
        ],
        achievements: [
            { icon: '📊', value: '50+', label: 'تقرير تحليلي' },
            { icon: '💼', value: 'Senior', label: 'منصب قيادي' },
            { icon: '💰', value: '250%', label: 'زيادة راتب' },
            { icon: '🏆', value: 'موظف', label: 'السنة' }
        ]
    },
    6: {
        name: 'نورا عبدالله',
        icon: '👩‍💼',
        course: 'التسويق الرقمي',
        year: '2024',
        gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
        quote: 'التسويق الرقمي هو مستقبل الأعمال، وأنا الآن جزء من هذا المستقبل!',
        journey: [
            {
                phase: '🎯 البداية',
                description: 'كنت أعمل في مبيعات تقليدية وأردت الدخول في العالم الرقمي'
            },
            {
                phase: '📚 التعلم',
                description: 'تعلمت SEO والإعلانات وإدارة وسائل التواصل الاجتماعي'
            },
            {
                phase: '💼 التحول',
                description: 'بدأت العمل الحر مع عدة شركات صغيرة ونجحت في زيادة مبيعاتهم'
            },
            {
                phase: '🚀 النجاح',
                description: 'أسست وكالة تسويق رقمي تخدم أكثر من 30 عميل دائم'
            }
        ],
        achievements: [
            { icon: '🏢', value: '30+', label: 'عميل دائم' },
            { icon: '📈', value: '400%', label: 'نمو المبيعات' },
            { icon: '👥', value: '10', label: 'موظف' },
            { icon: '💰', value: '40K', label: 'دخل شهري' }
        ]
    }
};

// ==========================================
// Stats Counter Animation
// ==========================================
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const duration = 2000;
    const stepTime = duration / 50;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
        element.classList.add('counting');
    }, stepTime);
}

// Observe stats cards for animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const numberElement = entry.target.querySelector('.stat-number');
            const target = parseInt(numberElement.getAttribute('data-target'));
            animateCounter(numberElement, target);
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach(card => statsObserver.observe(card));
});

// ==========================================
// Open Story Modal
// ==========================================
function openStory(storyId) {
    const story = stories[storyId];
    if (!story) return;

    const modal = document.getElementById('storyModal');
    const detailsContainer = document.getElementById('storyDetails');

    detailsContainer.innerHTML = `
        <div class="story-detail-header" style="background: ${story.gradient};">
            <div class="story-detail-icon">${story.icon}</div>
            <h2>${story.name}</h2>
            <p class="story-detail-course">${story.course} - ${story.year}</p>
        </div>

        <div class="story-quote">
            <p>${story.quote}</p>
        </div>

        <div class="story-journey">
            <h3>رحلة النجاح</h3>
            ${story.journey.map(phase => `
                <div class="journey-phase">
                    <h4>${phase.phase}</h4>
                    <p>${phase.description}</p>
                </div>
            `).join('')}
        </div>

        <div class="story-achievements">
            <h3>الإنجازات</h3>
            <div class="achievements-grid">
                ${story.achievements.map(achievement => `
                    <div class="achievement-item">
                        <div class="achievement-icon">${achievement.icon}</div>
                        <strong>${achievement.value}</strong>
                        <span>${achievement.label}</span>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="story-cta">
            <h3>هل أنت مستعد لتكون قصة النجاح القادمة؟</h3>
            <p>ابدأ رحلتك التعليمية معنا اليوم</p>
            <button class="cta-button" onclick="window.location.href='courses.html'">
                استكشف الدورات
            </button>
        </div>
    `;

    modal.classList.add('active');
}

function closeStoryModal() {
    const modal = document.getElementById('storyModal');
    modal.classList.remove('active');
}

// Close modal on outside click
document.addEventListener('click', (e) => {
    const modal = document.getElementById('storyModal');
    if (e.target === modal) {
        closeStoryModal();
    }
});

console.log('✨ صفحة قصص النجاح جاهزة!');
