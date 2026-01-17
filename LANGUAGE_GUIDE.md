# دليل دعم اللغات المتعددة / Multilingual Support Guide

## نظرة عامة / Overview

تم إضافة دعم كامل للغتين العربية والإنجليزية في موقع مركز التدريب. يمكن للمستخدمين التبديل بين اللغتين بنقرة واحدة مع حفظ تفضيلاتهم تلقائياً.

The training center website now fully supports both Arabic and English languages. Users can switch between languages with one click, and their preference is automatically saved.

---

## المميزات / Features

### العربية:
- ✅ ترجمة كاملة لجميع صفحات الموقع
- ✅ تبديل تلقائي لاتجاه الصفحة (RTL)
- ✅ حفظ تفضيل اللغة في المتصفح
- ✅ زر تبديل سهل الاستخدام في شريط التنقل
- ✅ تحديث ديناميكي للمحتوى دون إعادة تحميل الصفحة

### English:
- ✅ Complete translation of all website pages
- ✅ Automatic page direction switching (LTR)
- ✅ Language preference saved in browser
- ✅ Easy-to-use toggle button in navigation bar
- ✅ Dynamic content update without page reload

---

## كيفية الاستخدام / How to Use

### للمستخدمين / For Users:

#### العربية:
1. ابحث عن زر "EN" أو "عربي" في شريط التنقل العلوي
2. اضغط على الزر للتبديل بين العربية والإنجليزية
3. سيتم حفظ اختيارك تلقائياً وسيبقى عند زيارتك التالية

#### English:
1. Look for the "EN" or "عربي" button in the top navigation bar
2. Click the button to switch between Arabic and English
3. Your choice will be saved automatically and persist on your next visit

---

## البنية التقنية / Technical Structure

### الملفات الرئيسية / Main Files:

#### 1. `js/translations.js`
يحتوي على جميع الترجمات للغتين العربية والإنجليزية.

Contains all translations for both Arabic and English languages.

**الهيكل / Structure:**
```javascript
const translations = {
    ar: {
        nav: { ... },
        home: { ... },
        courses: { ... },
        // ...
    },
    en: {
        nav: { ... },
        home: { ... },
        courses: { ... },
        // ...
    }
};
```

#### 2. `js/language-handler.js`
يدير تبديل اللغة وتحديث المحتوى في جميع الصفحات.

Manages language switching and content updates across all pages.

**الوظائف الرئيسية / Main Functions:**
- `toggleLanguage()`: تبديل اللغة / Switch language
- `setLanguage(lang)`: تعيين اللغة / Set language
- `translate(key)`: الحصول على الترجمة / Get translation
- `updatePageContent()`: تحديث محتوى الصفحة / Update page content

---

## إضافة ترجمات جديدة / Adding New Translations

### العربية:
لإضافة ترجمات جديدة، قم بتحديث ملف `js/translations.js`:

```javascript
translations.ar.newSection = {
    title: "العنوان بالعربية",
    description: "الوصف بالعربية"
};

translations.en.newSection = {
    title: "Title in English",
    description: "Description in English"
};
```

### English:
To add new translations, update the `js/translations.js` file:

```javascript
translations.ar.newSection = {
    title: "العنوان بالعربية",
    description: "الوصف بالعربية"
};

translations.en.newSection = {
    title: "Title in English",
    description: "Description in English"
};
```

---

## التكامل مع صفحات جديدة / Integration with New Pages

### العربية:
عند إضافة صفحة جديدة:

1. أضف السكريبتات المطلوبة قبل `</body>`:
```html
<script src="js/translations.js"></script>
<script src="js/language-handler.js"></script>
<script src="js/script.js"></script>
```

2. أنشئ دالة تحديث للصفحة في `language-handler.js`:
```javascript
function updateNewPage() {
    // Update page content here
}
```

3. أضف الدالة إلى `updatePageContent()`:
```javascript
else if (currentPage === 'new-page.html') {
    updateNewPage();
}
```

### English:
When adding a new page:

1. Add required scripts before `</body>`:
```html
<script src="js/translations.js"></script>
<script src="js/language-handler.js"></script>
<script src="js/script.js"></script>
```

2. Create an update function for the page in `language-handler.js`:
```javascript
function updateNewPage() {
    // Update page content here
}
```

3. Add the function to `updatePageContent()`:
```javascript
else if (currentPage === 'new-page.html') {
    updateNewPage();
}
```

---

## التخصيص / Customization

### تغيير اللغة الافتراضية / Changing Default Language

في ملف `js/translations.js`:

```javascript
// للعربية كلغة افتراضية / For Arabic as default
let currentLanguage = localStorage.getItem('language') || 'ar';

// للإنجليزية كلغة افتراضية / For English as default
let currentLanguage = localStorage.getItem('language') || 'en';
```

---

## الأسئلة الشائعة / FAQ

### العربية:

**س: هل يتم حفظ اختيار اللغة؟**
ج: نعم، يتم حفظ اللغة المختارة في localStorage وتبقى عند إغلاق المتصفح.

**س: هل يمكن إضافة لغات أخرى؟**
ج: نعم، يمكن إضافة لغات جديدة بسهولة عن طريق توسيع كائن `translations`.

**س: هل يعمل النظام مع جميع المتصفحات؟**
ج: نعم، النظام متوافق مع جميع المتصفحات الحديثة.

### English:

**Q: Is the language choice saved?**
A: Yes, the selected language is saved in localStorage and persists across browser sessions.

**Q: Can I add other languages?**
A: Yes, new languages can be easily added by extending the `translations` object.

**Q: Does the system work with all browsers?**
A: Yes, the system is compatible with all modern browsers.

---

## الدعم / Support

للمساعدة أو الإبلاغ عن مشاكل / For help or to report issues:
- GitHub: https://github.com/wabualela/training-center
- Email: info@training-center.com

---

## الترخيص / License

هذا المشروع مفتوح المصدر ومتاح للاستخدام الحر.

This project is open source and available for free use.

---

**تم التطوير بواسطة / Developed by:** Claude Code
**آخر تحديث / Last Updated:** 2026-01-17
