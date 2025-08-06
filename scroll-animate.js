// تأثيرات التمرير للعناصر
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // تأثير خاص لبطاقات الخبرات
                if (entry.target.classList.contains('experience-card')) {
                    setTimeout(() => {
                        const levelFill = entry.target.querySelector('.level-fill');
                        if (levelFill) {
                            const width = levelFill.style.width;
                            levelFill.style.width = '0%';
                            setTimeout(() => {
                                levelFill.style.width = width;
                            }, 300);
                        }
                    }, 200);
                }
            }
        });
    }, observerOptions);

    // مراقبة جميع العناصر مع كلاس fade-in
    document.querySelectorAll('.fade-in, .experience-card').forEach(el => {
        observer.observe(el);
    });
});

// تأثيرات إضافية للخبرات
document.addEventListener('DOMContentLoaded', function() {
    const experienceCards = document.querySelectorAll('.experience-card');
    
    experienceCards.forEach((card, index) => {
        // تأخير ظهور البطاقات
        card.style.animationDelay = `${index * 0.2}s`;
        
        // تأثير عند التمرير فوق البطاقة
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});