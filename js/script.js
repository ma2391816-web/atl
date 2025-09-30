// تتبع النقرات على رابط واتساب باستخدام بكسل تيك توك
document.addEventListener('DOMContentLoaded', function() {
    const whatsappLink = document.getElementById('whatsapp-link');
    
    if (whatsappLink) {
        whatsappLink.addEventListener('click', function() {
            if (typeof ttq !== 'undefined') {
                ttq.track('ClickWhatsApp', {
                    content_id: 'whatsapp_contact',
                    content_type: 'product',
                    value: 1,
                    currency: 'USD'
                });
            }
            
            // تتبع إضافي باستخدام Google Analytics إذا كان مضافاً
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click', {
                    'event_category': 'WhatsApp',
                    'event_label': 'Contact Button'
                });
            }
        });
    }
    
    // إضافة تأثيرات إضافية
    const features = document.querySelectorAll('.feature');
    features.forEach(feature => {
        feature.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        feature.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});