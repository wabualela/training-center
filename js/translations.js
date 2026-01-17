// ==========================================
// Multi-language Support System
// ==========================================

const translations = {
    ar: {
        // Navbar
        nav: {
            logo: "🎓 مركز التدريب",
            home: "الرئيسية",
            courses: "الدورات",
            registration: "التسجيل",
            successStories: "قصص النجاح",
            contact: "تواصل معنا"
        },

        // Home Page
        home: {
            heroTitle: "ابدأ رحلتك التعليمية معنا",
            heroSubtitle: "نقدم لك أفضل الدورات التدريبية في مختلف المجالات مع مدربين محترفين",
            heroButton: "ابدأ رحلتك التعليمية ✨",

            pathTitle: "المسار التعليمي",
            step1Title: "سجل حسابك",
            step1Desc: "أنشئ حسابك المجاني وابدأ رحلتك التعليمية في دقائق معدودة",
            step2Title: "اختر دورتك",
            step2Desc: "استكشف مجموعة واسعة من الدورات واختر ما يناسب اهتماماتك وأهدافك",
            step3Title: "تعلم وتطور",
            step3Desc: "تعلم من خلال دروس تفاعلية ومشاريع عملية مع دعم مستمر",
            step4Title: "احصل على الشهادة",
            step4Desc: "أكمل الدورة بنجاح واحصل على شهادة معتمدة تعزز مسيرتك المهنية",

            coursesTitle: "دوراتنا المميزة",
            enrollNow: "سجل الآن",
            quizButton: "🎯 اكتشف الدورة المناسبة لك",

            notificationJoined: "انضم للتو إلى دورة"
        },

        // Courses Page
        courses: {
            pageTitle: "استكشف دوراتنا التدريبية",
            pageSubtitle: "اختر من بين مجموعة واسعة من الدورات المتخصصة",

            filterTitle: "فلتر الدورات",
            allCourses: "جميع الدورات",
            programming: "البرمجة",
            design: "التصميم",
            data: "البيانات",
            marketing: "التسويق",

            sortBy: "ترتيب حسب:",
            popularity: "الأكثر شعبية",
            priceLow: "السعر: من الأقل للأعلى",
            priceHigh: "السعر: من الأعلى للأقل",
            duration: "المدة",
            level: "المستوى",

            viewDetails: "عرض التفاصيل",
            noResults: "لم نجد دورات مطابقة",
            tryAgain: "جرب تغيير خيارات الفلترة",

            courseContent: "محتوى الدورة:",
            whatYouGet: "ماذا ستحصل؟",
            certificate: "شهادة معتمدة عند الإكمال",
            projects: "مشاريع عملية لبناء بورتفوليو",
            support: "دعم مباشر من المدرب",
            resources: "مصادر تعليمية شاملة",
            community: "انضمام لمجتمع الطلاب",
            accessForever: "وصول غير محدود للمحتوى",
            instructor: "المدرب:",
            students: "طالب"
        },

        // Registration Page
        registration: {
            step1Title: "البيانات الشخصية",
            step1Desc: "أدخل معلوماتك الشخصية للبدء",
            fullName: "الاسم الكامل",
            fullNamePlaceholder: "أدخل اسمك الكامل",
            email: "البريد الإلكتروني",
            phone: "رقم الهاتف",
            phonePlaceholder: "05xxxxxxxx",
            age: "العمر",
            agePlaceholder: "أدخل عمرك",

            step2Title: "اختر دورتك",
            step2Desc: "حدد الدورة التدريبية المناسبة لك",
            selectCourse: "اختر الدورة",
            selectCoursePlaceholder: "-- اختر الدورة --",
            courseInfo: "معلومات الدورة المختارة",
            level: "مستواك الحالي",
            selectLevel: "-- اختر مستواك --",
            beginner: "مبتدئ - لا توجد خبرة سابقة",
            intermediate: "متوسط - لدي بعض الخبرة",
            advanced: "متقدم - لدي خبرة جيدة",
            goals: "ما هي أهدافك من الدورة؟",
            goalsPlaceholder: "أخبرنا عن أهدافك وتطلعاتك...",

            step3Title: "معلومات الدفع",
            step3Desc: "اختر طريقة الدفع المناسبة",
            orderSummary: "ملخص الطلب",
            selectedCourse: "الدورة المختارة:",
            amount: "المبلغ:",
            total: "المجموع الكلي:",
            paymentMethod: "طريقة الدفع",
            creditCard: "بطاقة ائتمانية",
            bankTransfer: "تحويل بنكي",
            agreeTerms: "أوافق على",
            termsLink: "الشروط والأحكام",

            step4Title: "تم التسجيل بنجاح!",
            step4Subtitle: "مبروك! لقد تم تسجيلك في الدورة بنجاح",
            confirmationTitle: "تفاصيل التسجيل",
            name: "الاسم",
            course: "الدورة",
            paid: "المبلغ المدفوع",

            nextStepsTitle: "الخطوات التالية",
            nextStep1: "تحقق من بريدك الإلكتروني لرسالة التأكيد",
            nextStep2: "ستتلقى رابط الوصول للدورة خلال 24 ساعة",
            nextStep3: "ابدأ رحلتك التعليمية واستمتع بالتعلم!",

            backHome: "🏠 العودة للرئيسية",
            exploreCourses: "📚 استكشف دورات أخرى",

            previous: "⬅️ السابق",
            next: "التالي ➡️",
            complete: "إتمام التسجيل ✨",

            currency: "ريال"
        },

        // Success Stories Page
        successStories: {
            pageTitle: "قصص نجاح ملهمة",
            pageSubtitle: "تعرف على رحلة طلابنا من التعلم إلى النجاح",

            graduates: "طالب متخرج",
            successRate: "% نسبة النجاح",
            stories: "قصة نجاح",
            companies: "شركة توظيف",

            journeyTitle: "رحلة النجاح",
            journey: "رحلة النجاح",
            quote: "الاقتباس",
            achievements: "الإنجازات",

            readyTitle: "هل أنت مستعد لتكون قصة النجاح القادمة؟",
            readySubtitle: "ابدأ رحلتك التعليمية معنا اليوم",
            exploreCourses: "استكشف الدورات"
        },

        // Contact Page
        contact: {
            pageTitle: "تواصل معنا",
            pageSubtitle: "نحن هنا للإجابة على جميع استفساراتك",

            callUs: "اتصل بنا",
            availableTime: "متاح من 9 ص - 9 م",
            emailUs: "راسلنا",
            replyTime: "نرد خلال 24 ساعة",
            whatsapp: "واتساب",
            instantChat: "محادثة فورية",
            alwaysAvailable: "متاح دائماً",
            visitUs: "زورنا",
            location: "الرياض، السعودية",
            address: "طريق الملك فهد",

            mapTitle: "موقعنا على الخريطة",
            trainingCenter: "مركز التدريب",
            openInMaps: "فتح في خرائط Google",

            howToReach: "كيفية الوصول",
            byCar: "بالسيارة",
            parkingAvailable: "موقف مجاني متاح للزوار",
            byMetro: "بالمترو",
            metroStation: "محطة الملك عبدالله - 5 دقائق سيراً",
            byBus: "بالحافلة",
            busLines: "خطوط 12، 34، 56",

            followUs: "تابعنا على وسائل التواصل",

            faqTitle: "الأسئلة الشائعة",
            faq1Q: "ما هي طرق الدفع المتاحة؟",
            faq1A: "نوفر عدة طرق للدفع: بطاقات الائتمان، التحويل البنكي، PayPal، وإمكانية الدفع على دفعات.",
            faq2Q: "هل يمكنني استرجاع المبلغ؟",
            faq2A: "نعم، نوفر ضمان استرجاع المبلغ خلال 14 يوم من بداية الدورة في حال عدم رضاك.",
            faq3Q: "هل الشهادة معتمدة؟",
            faq3A: "نعم، جميع شهاداتنا معتمدة ومعترف بها من قبل المؤسسة العامة للتدريب التقني والمهني.",
            faq4Q: "كم مدة الوصول للمحتوى؟",
            faq4A: "بعد التسجيل، ستحصل على وصول غير محدود لمحتوى الدورة مدى الحياة.",
            faq5Q: "هل يوجد دعم فني؟",
            faq5A: "نعم، فريق الدعم الفني متاح 24/7 للإجابة على جميع استفساراتك.",

            contactFormTitle: "تواصل معنا",
            subject: "الموضوع",
            selectSubject: "-- اختر الموضوع --",
            generalInquiry: "استفسار عام",
            registrationInquiry: "استفسار عن التسجيل",
            technicalIssue: "مشكلة تقنية",
            complaint: "شكوى",
            suggestion: "اقتراح",
            message: "رسالتك",
            sendMessage: "إرسال الرسالة",

            successTitle: "تم إرسال رسالتك بنجاح!",
            successMessage: "شكراً لتواصلك معنا. سنرد عليك في أقرب وقت ممكن.",
            close: "إغلاق"
        },

        // Common
        common: {
            week: "أسبوع",
            weeks: "أسابيع",
            beginner: "مبتدئ",
            intermediate: "متوسط",
            advanced: "متقدم",
            currency: "ريال",
            student: "طالب",
            students: "طالب"
        }
    },

    en: {
        // Navbar
        nav: {
            logo: "🎓 Training Center",
            home: "Home",
            courses: "Courses",
            registration: "Registration",
            successStories: "Success Stories",
            contact: "Contact Us"
        },

        // Home Page
        home: {
            heroTitle: "Start Your Learning Journey With Us",
            heroSubtitle: "We offer you the best training courses in various fields with professional trainers",
            heroButton: "Start Your Learning Journey ✨",

            pathTitle: "Learning Path",
            step1Title: "Register Your Account",
            step1Desc: "Create your free account and start your learning journey in minutes",
            step2Title: "Choose Your Course",
            step2Desc: "Explore a wide range of courses and choose what suits your interests and goals",
            step3Title: "Learn and Develop",
            step3Desc: "Learn through interactive lessons and practical projects with continuous support",
            step4Title: "Get Your Certificate",
            step4Desc: "Complete the course successfully and get an accredited certificate to boost your career",

            coursesTitle: "Our Featured Courses",
            enrollNow: "Enroll Now",
            quizButton: "🎯 Find Your Perfect Course",

            notificationJoined: "just joined"
        },

        // Courses Page
        courses: {
            pageTitle: "Explore Our Training Courses",
            pageSubtitle: "Choose from a wide range of specialized courses",

            filterTitle: "Filter Courses",
            allCourses: "All Courses",
            programming: "Programming",
            design: "Design",
            data: "Data",
            marketing: "Marketing",

            sortBy: "Sort by:",
            popularity: "Most Popular",
            priceLow: "Price: Low to High",
            priceHigh: "Price: High to Low",
            duration: "Duration",
            level: "Level",

            viewDetails: "View Details",
            noResults: "No matching courses found",
            tryAgain: "Try changing your filter options",

            courseContent: "Course Content:",
            whatYouGet: "What You'll Get?",
            certificate: "Accredited certificate upon completion",
            projects: "Practical projects to build portfolio",
            support: "Direct support from instructor",
            resources: "Comprehensive learning resources",
            community: "Join students community",
            accessForever: "Lifetime access to content",
            instructor: "Instructor:",
            students: "students"
        },

        // Registration Page
        registration: {
            step1Title: "Personal Information",
            step1Desc: "Enter your personal information to begin",
            fullName: "Full Name",
            fullNamePlaceholder: "Enter your full name",
            email: "Email Address",
            phone: "Phone Number",
            phonePlaceholder: "05xxxxxxxx",
            age: "Age",
            agePlaceholder: "Enter your age",

            step2Title: "Choose Your Course",
            step2Desc: "Select the training course that suits you",
            selectCourse: "Select Course",
            selectCoursePlaceholder: "-- Select Course --",
            courseInfo: "Selected Course Information",
            level: "Your Current Level",
            selectLevel: "-- Select Your Level --",
            beginner: "Beginner - No previous experience",
            intermediate: "Intermediate - Some experience",
            advanced: "Advanced - Good experience",
            goals: "What are your goals for this course?",
            goalsPlaceholder: "Tell us about your goals and aspirations...",

            step3Title: "Payment Information",
            step3Desc: "Choose your preferred payment method",
            orderSummary: "Order Summary",
            selectedCourse: "Selected Course:",
            amount: "Amount:",
            total: "Total:",
            paymentMethod: "Payment Method",
            creditCard: "Credit Card",
            bankTransfer: "Bank Transfer",
            agreeTerms: "I agree to",
            termsLink: "Terms and Conditions",

            step4Title: "Registration Successful!",
            step4Subtitle: "Congratulations! You have successfully registered for the course",
            confirmationTitle: "Registration Details",
            name: "Name",
            course: "Course",
            paid: "Amount Paid",

            nextStepsTitle: "Next Steps",
            nextStep1: "Check your email for confirmation message",
            nextStep2: "You will receive course access link within 24 hours",
            nextStep3: "Start your learning journey and enjoy learning!",

            backHome: "🏠 Back to Home",
            exploreCourses: "📚 Explore More Courses",

            previous: "⬅️ Previous",
            next: "Next ➡️",
            complete: "Complete Registration ✨",

            currency: "SAR"
        },

        // Success Stories Page
        successStories: {
            pageTitle: "Inspiring Success Stories",
            pageSubtitle: "Learn about our students' journey from learning to success",

            graduates: "Graduates",
            successRate: "% Success Rate",
            stories: "Success Stories",
            companies: "Hiring Companies",

            journeyTitle: "Success Journey",
            journey: "Success Journey",
            quote: "Quote",
            achievements: "Achievements",

            readyTitle: "Are You Ready to Be the Next Success Story?",
            readySubtitle: "Start your learning journey with us today",
            exploreCourses: "Explore Courses"
        },

        // Contact Page
        contact: {
            pageTitle: "Contact Us",
            pageSubtitle: "We're here to answer all your questions",

            callUs: "Call Us",
            availableTime: "Available 9 AM - 9 PM",
            emailUs: "Email Us",
            replyTime: "We reply within 24 hours",
            whatsapp: "WhatsApp",
            instantChat: "Instant Chat",
            alwaysAvailable: "Always Available",
            visitUs: "Visit Us",
            location: "Riyadh, Saudi Arabia",
            address: "King Fahd Road",

            mapTitle: "Our Location on Map",
            trainingCenter: "Training Center",
            openInMaps: "Open in Google Maps",

            howToReach: "How to Reach",
            byCar: "By Car",
            parkingAvailable: "Free parking available for visitors",
            byMetro: "By Metro",
            metroStation: "King Abdullah Station - 5 min walk",
            byBus: "By Bus",
            busLines: "Lines 12, 34, 56",

            followUs: "Follow Us on Social Media",

            faqTitle: "Frequently Asked Questions",
            faq1Q: "What payment methods are available?",
            faq1A: "We offer several payment methods: credit cards, bank transfer, PayPal, and installment payments.",
            faq2Q: "Can I get a refund?",
            faq2A: "Yes, we offer a money-back guarantee within 14 days of course start if you're not satisfied.",
            faq3Q: "Is the certificate accredited?",
            faq3A: "Yes, all our certificates are accredited and recognized by the Technical and Vocational Training Corporation.",
            faq4Q: "How long is content access?",
            faq4A: "After registration, you get lifetime unlimited access to course content.",
            faq5Q: "Is there technical support?",
            faq5A: "Yes, our technical support team is available 24/7 to answer all your questions.",

            contactFormTitle: "Contact Us",
            subject: "Subject",
            selectSubject: "-- Select Subject --",
            generalInquiry: "General Inquiry",
            registrationInquiry: "Registration Inquiry",
            technicalIssue: "Technical Issue",
            complaint: "Complaint",
            suggestion: "Suggestion",
            message: "Your Message",
            sendMessage: "Send Message",

            successTitle: "Message Sent Successfully!",
            successMessage: "Thank you for contacting us. We will reply to you as soon as possible.",
            close: "Close"
        },

        // Common
        common: {
            week: "week",
            weeks: "weeks",
            beginner: "Beginner",
            intermediate: "Intermediate",
            advanced: "Advanced",
            currency: "SAR",
            student: "student",
            students: "students"
        }
    }
};

// ==========================================
// Language System Functions
// ==========================================

let currentLanguage = localStorage.getItem('language') || 'ar';

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);

    // Update HTML attributes
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.body.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    // Update all translatable elements
    updatePageTranslations();

    // Trigger custom event for other scripts
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
}

function translate(key) {
    const keys = key.split('.');
    let value = translations[currentLanguage];

    for (const k of keys) {
        if (value && value[k]) {
            value = value[k];
        } else {
            console.warn(`Translation key not found: ${key}`);
            return key;
        }
    }

    return value;
}

function updatePageTranslations() {
    // Update all elements with data-translate attribute
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        const translation = translate(key);

        // Update text or placeholder
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            if (element.hasAttribute('placeholder')) {
                element.placeholder = translation;
            }
        } else {
            element.textContent = translation;
        }
    });

    // Update navbar direction
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (currentLanguage === 'ar') {
            navbar.style.flexDirection = 'row';
        } else {
            navbar.style.flexDirection = 'row-reverse';
        }
    }
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLanguage);
});

console.log('🌐 نظام اللغات جاهز! / Language system ready!');
