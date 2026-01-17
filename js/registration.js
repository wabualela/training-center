// ==========================================
// Registration State
// ==========================================
let currentStep = 1;
const totalSteps = 4;
let registrationData = {
    fullName: '',
    email: '',
    phone: '',
    age: '',
    course: '',
    coursePrice: 0,
    level: '',
    goals: '',
    payment: 'credit'
};

// ==========================================
// Course Data (matching courses page)
// ==========================================
const coursesInfo = {
    1: { name: 'تطوير الويب الحديث', price: 1200, duration: '12 أسبوع', level: 'متقدم' },
    2: { name: 'التصميم الجرافيكي', price: 900, duration: '8 أسابيع', level: 'متوسط' },
    3: { name: 'الذكاء الاصطناعي', price: 1500, duration: '16 أسبوع', level: 'متقدم' },
    4: { name: 'تطوير تطبيقات الموبايل', price: 1100, duration: '10 أسابيع', level: 'متوسط' },
    5: { name: 'تحليل البيانات', price: 800, duration: '8 أسابيع', level: 'مبتدئ' },
    6: { name: 'التسويق الرقمي', price: 700, duration: '6 أسابيع', level: 'مبتدئ' },
    7: { name: 'أمن المعلومات', price: 1400, duration: '14 أسبوع', level: 'متقدم' },
    8: { name: 'تصميم UI/UX', price: 1000, duration: '10 أسابيع', level: 'متوسط' },
    9: { name: 'علم البيانات', price: 1600, duration: '16 أسبوع', level: 'متقدم' },
    10: { name: 'إدارة وسائل التواصل', price: 650, duration: '6 أسابيع', level: 'مبتدئ' }
};

// ==========================================
// Initialize
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // Check if course was selected from URL
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get('course');
    if (courseId && coursesInfo[courseId]) {
        document.getElementById('courseSelect').value = courseId;
        updateCoursePreview();
    }
});

// ==========================================
// Update Progress Bar
// ==========================================
function updateProgressBar(step) {
    const progressFill = document.getElementById('progressFill');
    const progressSteps = document.querySelectorAll('.progress-step');

    // Update progress bar width
    const progressPercentage = (step / totalSteps) * 100;
    progressFill.style.width = progressPercentage + '%';

    // Update step indicators
    progressSteps.forEach((stepElement, index) => {
        const stepNumber = index + 1;
        stepElement.classList.remove('active', 'completed');

        if (stepNumber < step) {
            stepElement.classList.add('completed');
        } else if (stepNumber === step) {
            stepElement.classList.add('active');
        }
    });
}

// ==========================================
// Navigation Functions
// ==========================================
function nextStep(fromStep) {
    if (validateStep(fromStep)) {
        saveStepData(fromStep);

        // Hide current step
        document.getElementById(`step${fromStep}`).classList.remove('active');

        // Show next step
        currentStep = fromStep + 1;
        document.getElementById(`step${currentStep}`).classList.add('active');

        // Update progress
        updateProgressBar(currentStep);

        // Update payment summary if moving to step 3
        if (currentStep === 3) {
            updatePaymentSummary();
        }

        // Show confirmation if on step 4
        if (currentStep === 4) {
            showConfirmation();
        }

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function prevStep(fromStep) {
    // Hide current step
    document.getElementById(`step${fromStep}`).classList.remove('active');

    // Show previous step
    currentStep = fromStep - 1;
    document.getElementById(`step${currentStep}`).classList.add('active');

    // Update progress
    updateProgressBar(currentStep);

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==========================================
// Validation Functions
// ==========================================
function validateStep(step) {
    clearErrors();

    switch (step) {
        case 1:
            return validateStep1();
        case 2:
            return validateStep2();
        case 3:
            return validateStep3();
        default:
            return true;
    }
}

function validateStep1() {
    let isValid = true;

    // Validate Full Name
    const fullName = document.getElementById('fullName').value.trim();
    if (fullName === '') {
        showError('nameError', 'الرجاء إدخال الاسم الكامل');
        isValid = false;
    } else if (fullName.length < 3) {
        showError('nameError', 'الاسم يجب أن يكون 3 أحرف على الأقل');
        isValid = false;
    }

    // Validate Email
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        showError('emailError', 'الرجاء إدخال البريد الإلكتروني');
        isValid = false;
    } else if (!emailRegex.test(email)) {
        showError('emailError', 'الرجاء إدخال بريد إلكتروني صحيح');
        isValid = false;
    }

    // Validate Phone
    const phone = document.getElementById('phone').value.trim();
    const phoneRegex = /^05[0-9]{8}$/;
    if (phone === '') {
        showError('phoneError', 'الرجاء إدخال رقم الهاتف');
        isValid = false;
    } else if (!phoneRegex.test(phone)) {
        showError('phoneError', 'الرجاء إدخال رقم هاتف سعودي صحيح (05xxxxxxxx)');
        isValid = false;
    }

    // Validate Age
    const age = document.getElementById('age').value;
    if (age === '') {
        showError('ageError', 'الرجاء إدخال العمر');
        isValid = false;
    } else if (age < 15 || age > 100) {
        showError('ageError', 'العمر يجب أن يكون بين 15 و 100');
        isValid = false;
    }

    return isValid;
}

function validateStep2() {
    let isValid = true;

    // Validate Course Selection
    const course = document.getElementById('courseSelect').value;
    if (course === '') {
        showError('courseError', 'الرجاء اختيار الدورة');
        isValid = false;
    }

    // Validate Level
    const level = document.getElementById('level').value;
    if (level === '') {
        showError('levelError', 'الرجاء اختيار مستواك');
        isValid = false;
    }

    // Validate Goals
    const goals = document.getElementById('goals').value.trim();
    if (goals === '') {
        showError('goalsError', 'الرجاء كتابة أهدافك من الدورة');
        isValid = false;
    } else if (goals.length < 10) {
        showError('goalsError', 'الرجاء كتابة أهدافك بشكل أكثر تفصيلاً (10 أحرف على الأقل)');
        isValid = false;
    }

    return isValid;
}

function validateStep3() {
    let isValid = true;

    // Validate Terms
    const terms = document.getElementById('terms').checked;
    if (!terms) {
        showError('termsError', 'يجب الموافقة على الشروط والأحكام');
        isValid = false;
    }

    return isValid;
}

function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(el => el.textContent = '');
}

// ==========================================
// Save Step Data
// ==========================================
function saveStepData(step) {
    switch (step) {
        case 1:
            registrationData.fullName = document.getElementById('fullName').value.trim();
            registrationData.email = document.getElementById('email').value.trim();
            registrationData.phone = document.getElementById('phone').value.trim();
            registrationData.age = document.getElementById('age').value;
            break;
        case 2:
            const courseId = document.getElementById('courseSelect').value;
            registrationData.course = coursesInfo[courseId].name;
            registrationData.coursePrice = coursesInfo[courseId].price;
            registrationData.level = document.getElementById('level').value;
            registrationData.goals = document.getElementById('goals').value.trim();
            break;
        case 3:
            registrationData.payment = document.querySelector('input[name="payment"]:checked').value;
            break;
    }
}

// ==========================================
// Update Course Preview
// ==========================================
function updateCoursePreview() {
    const courseSelect = document.getElementById('courseSelect');
    const selectedCourseId = courseSelect.value;
    const coursePreview = document.getElementById('coursePreview');
    const previewDetails = document.getElementById('previewDetails');

    if (selectedCourseId && coursesInfo[selectedCourseId]) {
        const course = coursesInfo[selectedCourseId];

        previewDetails.innerHTML = `
            <div class="preview-item">
                <span>📚 اسم الدورة:</span>
                <strong>${course.name}</strong>
            </div>
            <div class="preview-item">
                <span>⏱️ المدة:</span>
                <strong>${course.duration}</strong>
            </div>
            <div class="preview-item">
                <span>📊 المستوى:</span>
                <strong>${course.level}</strong>
            </div>
            <div class="preview-item">
                <span>💰 السعر:</span>
                <strong style="color: var(--primary-color); font-size: 1.2rem;">${course.price} ريال</strong>
            </div>
        `;

        coursePreview.style.display = 'block';
    } else {
        coursePreview.style.display = 'none';
    }
}

// ==========================================
// Update Payment Summary
// ==========================================
function updatePaymentSummary() {
    document.getElementById('selectedCourseName').textContent = registrationData.course;
    document.getElementById('coursePrice').textContent = registrationData.coursePrice + ' ريال';
    document.getElementById('totalPrice').textContent = registrationData.coursePrice + ' ريال';
}

// ==========================================
// Show Confirmation
// ==========================================
function showConfirmation() {
    document.getElementById('confirmName').textContent = registrationData.fullName;
    document.getElementById('confirmEmail').textContent = registrationData.email;
    document.getElementById('confirmCourse').textContent = registrationData.course;
    document.getElementById('confirmPrice').textContent = registrationData.coursePrice + ' ريال';

    // Confetti effect (optional)
    setTimeout(() => {
        createConfetti();
    }, 300);
}

// ==========================================
// Confetti Animation (Optional)
// ==========================================
function createConfetti() {
    const colors = ['#4A90E2', '#50E3C2', '#F5A623', '#E74C3C', '#9B59B6'];
    const confettiCount = 50;

    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-10px';
            confetti.style.borderRadius = '50%';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '9999';
            confetti.style.opacity = '1';
            confetti.style.transition = 'all 3s ease-out';

            document.body.appendChild(confetti);

            setTimeout(() => {
                confetti.style.top = '100vh';
                confetti.style.opacity = '0';
                confetti.style.transform = `translateX(${Math.random() * 200 - 100}px) rotate(${Math.random() * 720}deg)`;
            }, 50);

            setTimeout(() => {
                confetti.remove();
            }, 3000);
        }, i * 30);
    }
}

// ==========================================
// Auto-save Progress (localStorage)
// ==========================================
function saveProgress() {
    localStorage.setItem('registrationData', JSON.stringify(registrationData));
    localStorage.setItem('currentStep', currentStep);
}

function loadProgress() {
    const savedData = localStorage.getItem('registrationData');
    const savedStep = localStorage.getItem('currentStep');

    if (savedData) {
        registrationData = JSON.parse(savedData);
        // Restore form fields if needed
    }

    if (savedStep && savedStep < 4) {
        // Optionally restore to saved step
        // currentStep = parseInt(savedStep);
        // updateProgressBar(currentStep);
    }
}

function clearProgress() {
    localStorage.removeItem('registrationData');
    localStorage.removeItem('currentStep');
}

// Call saveProgress after each step
const originalNextStep = nextStep;
nextStep = function(step) {
    originalNextStep(step);
    saveProgress();
};

console.log('📝 نظام التسجيل جاهز!');
