// ==========================================
// Contact Modal Functions
// ==========================================
function openContactModal(type) {
    const modal = document.getElementById('contactModal');
    modal.classList.add('active');

    // Set default subject based on type
    if (type === 'phone' || type === 'email') {
        document.getElementById('contactSubject').value = 'inquiry';
    }
}

function closeContactModal() {
    const modal = document.getElementById('contactModal');
    modal.classList.remove('active');
}

// ==========================================
// WhatsApp Function
// ==========================================
function openWhatsApp() {
    const phoneNumber = '966501234567'; // Saudi phone number format
    const message = encodeURIComponent('مرحباً، أود الاستفسار عن دوراتكم التدريبية');
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
}

// ==========================================
// Google Maps Function
// ==========================================
function openInGoogleMaps() {
    const latitude = 24.7136;
    const longitude = 46.6753;
    const googleMapsURL = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    window.open(googleMapsURL, '_blank');
}

function showLocationOnMap() {
    openInGoogleMaps();
}

// ==========================================
// FAQ Toggle
// ==========================================
function toggleFAQ(element) {
    const faqItem = element.parentElement;
    const isActive = faqItem.classList.contains('active');

    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });

    // Toggle current item
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

// ==========================================
// Contact Form Submission
// ==========================================
function submitContactForm(event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const phone = document.getElementById('contactPhone').value;
    const subject = document.getElementById('contactSubject').value;
    const message = document.getElementById('contactMessage').value;

    // Simulate form submission
    console.log('Form submitted:', { name, email, phone, subject, message });

    // Show success message
    showSuccessMessage();

    // Reset form
    document.getElementById('contactForm').reset();
}

function showSuccessMessage() {
    const container = document.getElementById('contactFormContainer');
    container.innerHTML = `
        <div class="success-message">
            <div class="success-message-icon">✅</div>
            <h3>تم إرسال رسالتك بنجاح!</h3>
            <p>شكراً لتواصلك معنا. سنرد عليك في أقرب وقت ممكن.</p>
            <button class="btn btn-primary" onclick="closeContactModal()" style="margin-top: 2rem;">
                إغلاق
            </button>
        </div>
    `;
}

// ==========================================
// Close Modal on Outside Click
// ==========================================
document.addEventListener('click', (e) => {
    const modal = document.getElementById('contactModal');
    if (e.target === modal) {
        closeContactModal();
    }
});

// ==========================================
// Animate Contact Cards on Scroll
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const contactCards = document.querySelectorAll('.contact-method-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.animation = 'scaleIn 0.5s ease forwards';
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    contactCards.forEach(card => observer.observe(card));
});

// Add scale-in animation
const style = document.createElement('style');
style.textContent = `
    @keyframes scaleIn {
        from {
            opacity: 0;
            transform: scale(0.8);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }

    .contact-method-card {
        opacity: 0;
    }
`;
document.head.appendChild(style);

// ==========================================
// Interactive Map Hover Effect
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const mapPlaceholder = document.querySelector('.map-placeholder');
    if (mapPlaceholder) {
        mapPlaceholder.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.3s ease';
        });

        mapPlaceholder.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
});

// ==========================================
// Social Links Click Tracking
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const platform = this.querySelector('.social-name').textContent;
            console.log(`Clicked on ${platform}`);

            // Add ripple effect
            const ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.width = '20px';
            ripple.style.height = '20px';
            ripple.style.background = 'rgba(255, 255, 255, 0.5)';
            ripple.style.borderRadius = '50%';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s ease-out';
            ripple.style.pointerEvents = 'none';

            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';

            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);

            // Simulate opening social media (in real app, use actual URLs)
            alert(`سيتم فتح ${platform} قريباً!`);
        });
    });

    // Add ripple animation
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);
});

// ==========================================
// Form Validation Enhancement
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    if (form) {
        const inputs = form.querySelectorAll('input, select, textarea');

        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                if (this.value.trim() !== '') {
                    this.style.borderColor = 'var(--secondary-color)';
                } else {
                    this.style.borderColor = 'var(--bg-secondary)';
                }
            });

            input.addEventListener('focus', function() {
                this.style.borderColor = 'var(--primary-color)';
            });
        });
    }
});

// ==========================================
// Add Typing Effect to Page Header
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.page-header h1');
    if (header && window.location.pathname.includes('contact.html')) {
        const text = header.textContent;
        header.textContent = '';
        let i = 0;

        function typeWriter() {
            if (i < text.length) {
                header.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }

        setTimeout(typeWriter, 300);
    }
});

console.log('📞 صفحة التواصل جاهزة!');
