document.addEventListener('DOMContentLoaded', () => {
  const supportedLangs = ['es', 'ca', 'en', 'ja'];
  let currentLang = localStorage.getItem('portfolio-lang');

  // If no stored language, detect from browser
  if (!currentLang || !supportedLangs.includes(currentLang)) {
    const browserLang = navigator.language || navigator.userLanguage;
    const shortLang = browserLang.substring(0, 2).toLowerCase();
    
    if (shortLang === 'ja') {
      currentLang = 'ja';
    } else if (shortLang === 'ca') {
      currentLang = 'ca';
    } else if (shortLang === 'es') {
      currentLang = 'es';
    } else {
      currentLang = 'en'; // default to English
    }
  }

  // Set initial language
  setLanguage(currentLang);

  // Bind click event to language buttons
  const langButtons = document.querySelectorAll('.lang-btn');
  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedLang = btn.getAttribute('data-lang-select');
      if (supportedLangs.includes(selectedLang)) {
        setLanguage(selectedLang);
      }
    });
  });

  function setLanguage(lang) {
    // 1. Remove other language classes from body and add current
    supportedLangs.forEach(l => {
      document.body.classList.remove(`lang-${l}`);
    });
    document.body.classList.add(`lang-${lang}`);

    // 2. Save language in localStorage
    localStorage.setItem('portfolio-lang', lang);

    // 3. Highlight the active switcher button
    document.querySelectorAll('.lang-btn').forEach(btn => {
      if (btn.getAttribute('data-lang-select') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    console.log(`Language set to: ${lang}`);
  }
});
