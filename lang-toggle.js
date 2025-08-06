const langBtn = document.getElementById('lang-toggle');
const html = document.documentElement;

function setLang(lang) {
    document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
    html.lang = lang;
    langBtn.textContent = lang === 'ar' ? 'EN' : 'AR';
    // غيّر كل النصوص التي لها data-en و data-ar
    document.querySelectorAll('[data-en][data-ar]').forEach(el => {
        el.textContent = lang === 'ar' ? el.getAttribute('data-ar') : el.getAttribute('data-en');
    });
    localStorage.setItem('lang', lang);
}

langBtn.addEventListener('click', () => {
    const current = localStorage.getItem('lang') || 'en';
    setLang(current === 'ar' ? 'en' : 'ar');
});

// عند التحميل
const savedLang = localStorage.getItem('lang') || 'en';
setLang(savedLang);