/* ========================================
   Main JavaScript - Common Functionality
   ======================================== */

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    initHeaderScroll();
    initMobileMenu();
    initLanguageSwitcher();
    initScrollAnimations();
    initCookieBanner();
    initSmoothScroll();
    initFormSubmissions();
    initProductFilters();
    initProductTabs();
    initGalleryThumbnails();
});

// Header scroll effect
function initHeaderScroll() {
    const header = document.querySelector('.header');
    if (!header) return;
    
    function handleScroll() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
}

// Mobile menu toggle
function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (!menuBtn || !navLinks) return;
    
    menuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('show');
        
        // Animate hamburger
        const spans = menuBtn.querySelectorAll('span');
        if (navLinks.classList.contains('show')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
    
    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('show');
            const spans = menuBtn.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
}

// Language switcher dropdown
function initLanguageSwitcher() {
    const langBtn = document.querySelector('.lang-btn');
    const dropdown = document.querySelector('.lang-dropdown');
    
    if (!langBtn || !dropdown) return;
    
    langBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        dropdown.classList.toggle('show');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!dropdown.contains(e.target) && !langBtn.contains(e.target)) {
            dropdown.classList.remove('show');
        }
    });
    
    // Language selection
    dropdown.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
            if (lang && typeof setLanguage === 'function') {
                setLanguage(lang);
            }
        });
    });
}

// Scroll animations
function initScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in');
    if (elements.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach(el => observer.observe(el));
}

// Cookie banner
function initCookieBanner() {
    const banner = document.querySelector('.cookie-banner');
    if (!banner) return;
    
    // Check if user already made a choice
    const cookieChoice = localStorage.getItem('cookieChoice');
    if (cookieChoice) return; // Already chosen
    
    // Show banner after a short delay
    setTimeout(() => {
        banner.classList.add('show');
    }, 1000);
    
    // Accept button
    const acceptBtn = banner.querySelector('.cookie-accept');
    if (acceptBtn) {
        acceptBtn.addEventListener('click', function() {
            localStorage.setItem('cookieChoice', 'accepted');
            banner.classList.remove('show');
        });
    }
    
    // Reject button
    const rejectBtn = banner.querySelector('.cookie-reject');
    if (rejectBtn) {
        rejectBtn.addEventListener('click', function() {
            localStorage.setItem('cookieChoice', 'rejected');
            banner.classList.remove('show');
        });
    }
    
    // Manage button
    const manageBtn = banner.querySelector('.cookie-manage');
    if (manageBtn) {
        manageBtn.addEventListener('click', function() {
            // In a real implementation, this would open a preferences modal
            alert('Cookie preferences management would open here.');
        });
    }
}

// Smooth scroll for anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerHeight = document.querySelector('.header')?.offsetHeight || 80;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Form submissions
function initFormSubmissions() {
    // Inquiry form
    const inquiryForm = document.getElementById('inquiryForm');
    if (inquiryForm) {
        inquiryForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Store in localStorage (simulating backend)
            const inquiries = JSON.parse(localStorage.getItem('inquiries') || '[]');
            data.id = Date.now();
            data.date = new Date().toISOString();
            data.status = 'pending';
            inquiries.push(data);
            localStorage.setItem('inquiries', JSON.stringify(inquiries));
            
            // Show success message
            showNotification('Inquiry sent successfully! We will reply within 12 hours.', 'success');
            
            // Reset form
            this.reset();
        });
    }
    
    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            const inquiries = JSON.parse(localStorage.getItem('inquiries') || '[]');
            data.id = Date.now();
            data.date = new Date().toISOString();
            data.status = 'pending';
            inquiries.push(data);
            localStorage.setItem('inquiries', JSON.stringify(inquiries));
            
            showNotification('Message sent successfully! We will reply within 12 hours.', 'success');
            this.reset();
        });
    }
}

// Product filters
function initProductFilters() {
    const filterCheckboxes = document.querySelectorAll('.filter-item input[type="checkbox"]');
    const treatmentBtns = document.querySelectorAll('.treatment-filter-btn');
    const productCards = document.querySelectorAll('.product-card');
    
    if (productCards.length === 0) return;
    
    let activeTreatment = null;
    
    function applyFilters() {
        const activeFilters = {
            category: [],
            application: [],
            certification: []
        };
        
        filterCheckboxes.forEach(checkbox => {
            if (checkbox.checked) {
                const filterType = checkbox.getAttribute('data-filter-type');
                const filterValue = checkbox.getAttribute('data-filter-value');
                if (activeFilters[filterType]) {
                    activeFilters[filterType].push(filterValue);
                }
            }
        });
        
        let visibleCount = 0;
        
        productCards.forEach(card => {
            const category = card.getAttribute('data-category');
            const application = card.getAttribute('data-application');
            const certification = card.getAttribute('data-certification');
            const treatment = card.getAttribute('data-treatment');
            
            let show = true;
            
            if (activeFilters.category.length > 0) {
                show = show && activeFilters.category.includes(category);
            }
            if (activeFilters.application.length > 0) {
                show = show && activeFilters.application.includes(application);
            }
            if (activeFilters.certification.length > 0) {
                show = show && activeFilters.certification.includes(certification);
            }
            if (activeTreatment) {
                show = show && treatment === activeTreatment;
            }
            
            if (show) {
                card.style.display = 'block';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });
        
        // Update results count
        const resultsCount = document.getElementById('resultsCount');
        if (resultsCount) {
            resultsCount.textContent = visibleCount;
        }
    }
    
    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', applyFilters);
    });
    
    treatmentBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            if (this.classList.contains('active')) {
                this.classList.remove('active');
                activeTreatment = null;
            } else {
                treatmentBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                activeTreatment = this.getAttribute('data-treatment');
            }
            applyFilters();
        });
    });
}

// Product detail tabs
function initProductTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    if (tabBtns.length === 0) return;
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Remove active from all
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active to clicked
            this.classList.add('active');
            const targetContent = document.getElementById(tabId);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
}

// Gallery thumbnails
function initGalleryThumbnails() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.querySelector('.main-image');
    
    if (thumbnails.length === 0 || !mainImage) return;
    
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function() {
            thumbnails.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            const thumbImg = this.querySelector('img');
            const mainImg = mainImage.querySelector('img');
            if (thumbImg && mainImg) {
                mainImg.src = thumbImg.src;
                mainImg.alt = thumbImg.alt;
            }
        });
    });
}

// Notification helper
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 16px 24px;
        background: ${type === 'success' ? '#00b894' : '#0984e3'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        z-index: 10000;
        font-weight: 500;
        animation: slideIn 0.3s ease;
        max-width: 350px;
    `;
    notification.textContent = message;
    
    // Add animation style
    if (!document.getElementById('notification-style')) {
        const style = document.createElement('style');
        style.id = 'notification-style';
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Product data (shared across pages)
const productsData = [
    {
        id: 1,
        name: '鼻炎舒缓仪 Pro™ RR-2000',
        nameKey: 'product_name_1',
        category: 'rhinitis',
        application: 'home',
        certification: 'ce',
        model: 'ZY018G-I',
        particleSize: '≤2.5μm',
        nebulizationRate: '≥ 0.3 ml/min',
        capacity: '6 ml',
        charging: 'Type-C USB',
        frequency: '2.7MHz',
        weight: '~92g',
        moq: '500 pcs',
        badge: 'Best Seller',
        image: 'assets/images/xionxio-rhinitis.png',
        gallery: ['assets/images/cat-rhinitis.png'],
        treatment: '鼻炎',
        treatmentKey: 'rhinitis',
        treatmentDesc: '有效缓解鼻塞、流涕、打喷嚏等过敏性鼻炎及慢性鼻炎症状，通过微粒子导入技术直达鼻腔病灶，温和舒适。',
        description: 'Professional rhinitis relief device using advanced micro-particle technology to deliver soothing care directly to nasal passages for fast relief from congestion, sneezing and allergic symptoms.',
        features: [
            'Advanced micro-particle delivery technology for deep nasal care',
            'Ultra-quiet operation for comfortable daily use',
            'Durable design for long-term home therapy',
            'Complete nasal care accessory kit included',
            'CE certified health device'
        ]
    },
    {
        id: 2,
        name: '助眠安睡仪™ SW-100',
        nameKey: 'product_name_2',
        category: 'sleep',
        application: 'travel',
        certification: 'fda',
        model: 'ZY018G-I',
        particleSize: '≤2.5μm',
        nebulizationRate: '≥ 0.25 ml/min',
        capacity: '8 ml',
        charging: 'Type-C USB',
        frequency: '2.7MHz',
        weight: '~92g',
        moq: '300 pcs',
        badge: 'New',
        image: 'assets/images/xionxio-sleep.png',
        gallery: ['assets/images/cat-sleep.png'],
        treatment: '助眠',
        treatmentKey: 'sleep',
        treatmentDesc: '通过舒缓的微雾吸入方式，帮助放松身心、改善睡眠质量，适合因压力或焦虑导致的失眠人群，出差旅行也能轻松入睡。',
        description: 'Ultra-portable sleep aid device with calming micro-mist technology, rechargeable battery, perfect for travel and on-the-go relaxation to achieve restful deep sleep.',
        features: [
            'Advanced calming micro-mist technology',
            'USB rechargeable lithium battery',
            'Lightweight and pocket-sized design',
            'One-button intuitive operation',
            'FDA registered health device'
        ]
    },
    {
        id: 3,
        name: '能量激活仪™ EB-500',
        nameKey: 'product_name_3',
        category: 'fatigue',
        application: 'home',
        certification: 'ce',
        model: 'ZY018G-I',
        particleSize: '≤2.5μm',
        nebulizationRate: '≥ 0.5 ml/min',
        capacity: '10 ml',
        charging: 'Type-C USB',
        frequency: '2.7MHz',
        weight: '~92g',
        moq: '400 pcs',
        badge: '',
        image: 'assets/images/xionxio-fatigue.png',
        treatment: '缓解疲劳',
        treatmentKey: 'fatigue',
        treatmentDesc: '通过高效能量导入技术，快速缓解身体疲劳、恢复精力，适合长期工作疲劳、运动后恢复及日常精力不足的人群。',
        description: 'Advanced energy recovery device with high-efficiency delivery for combating daily fatigue, restoring vitality and enhancing overall energy levels.',
        features: [
            'High-frequency energy delivery technology',
            'Fast-acting fatigue relief',
            'Large capacity for extended sessions',
            'Quiet operation for comfortable use',
            'Auto shut-off safety protection'
        ]
    },
    {
        id: 4,
        name: '儿童鼻腔护理仪™ KN-300',
        nameKey: 'product_name_4',
        category: 'rhinitis',
        application: 'home',
        certification: 'iso',
        model: 'ZY018G-I',
        particleSize: '≤2.5μm',
        nebulizationRate: '≥ 0.2 ml/min',
        capacity: '6 ml',
        charging: 'Type-C USB',
        frequency: '2.7MHz',
        weight: '~92g',
        moq: '600 pcs',
        badge: 'Popular',
        image: 'assets/images/xionxio-rhinitis.png',
        gallery: ['assets/images/cat-rhinitis.png'],
        treatment: '鼻炎',
        treatmentKey: 'rhinitis',
        treatmentDesc: '专为儿童设计的鼻腔护理方案，可爱造型减少孩子抵触心理，温和护理鼻腔，有效缓解儿童过敏性鼻炎和慢性鼻炎症状。',
        description: 'Child-friendly nasal care device with fun design and gentle operation specially designed for pediatric rhinitis relief, making treatment a pleasant experience.',
        features: [
            'Cute design loved by children',
            'Extra quiet operation for kids comfort',
            'Child-safe materials throughout',
            'Pediatric nasal care tip included',
            'ISO 13485 certified'
        ]
    },
    {
        id: 5,
        name: '深睡助眠仪™ DS-100',
        nameKey: 'product_name_5',
        category: 'sleep',
        application: 'home',
        certification: 'ce',
        model: 'ZY018G-I',
        particleSize: '≤2.5μm',
        nebulizationRate: '≥ 0.25 ml/min',
        capacity: '6 ml',
        charging: 'Type-C USB',
        frequency: '2.7MHz',
        weight: '~92g',
        moq: '500 pcs',
        badge: '',
        image: 'assets/images/xionxio-sleep.png',
        gallery: ['assets/images/xionxio-sleep-gallery.png'],
        treatment: '助眠',
        treatmentKey: 'sleep',
        treatmentDesc: '家用深度助眠方案，通过舒缓微雾帮助放松身心、快速入眠，改善睡眠质量，适合长期失眠及睡眠浅的人群。',
        description: 'Reliable home-use deep sleep aid with compact design and easy operation for daily relaxation and sleep quality improvement.',
        features: [
            'Compact and lightweight design',
            'Easy to clean and maintain',
            'Reliable performance motor',
            'Complete home sleep kit',
            'CE certified'
        ]
    },
    {
        id: 6,
        name: '男士活力增强仪™ VB-200',
        nameKey: 'product_name_6',
        category: 'libido',
        application: 'clinical',
        certification: 'ce',
        model: 'ZY018G-I',
        particleSize: '≤2.5μm',
        nebulizationRate: '≥ 0.3 ml/min',
        capacity: '10 ml',
        charging: 'Type-C USB',
        frequency: '2.7MHz',
        weight: '~92g',
        moq: '400 pcs',
        badge: 'Premium',
        image: 'assets/images/xionxio-virility.png',
        treatment: '壮阳',
        treatmentKey: 'libido',
        treatmentDesc: '专业级男士活力增强方案，双模式操作，通过精准微粒子技术助力男性健康，增强活力与自信。',
        description: 'Professional-grade men\'s health device with dual mode operation and premium build quality for vitality enhancement and overall male wellness.',
        features: [
            'Dual mode: continuous / intermittent',
            'Medical grade materials',
            'Large capacity cup',
            'Rechargeable battery + AC power',
            'CE & ISO certified'
        ]
    },
    {
        id: 7,
        name: '全天能量仪™ AE-9000',
        nameKey: 'product_name_7',
        category: 'fatigue',
        application: 'hospital',
        certification: 'iso',
        model: 'ZY018G-I',
        particleSize: '≤2.5μm',
        nebulizationRate: '≥ 0.4 ml/min',
        capacity: '8 ml',
        charging: 'Type-C USB',
        frequency: '2.7MHz',
        weight: '~92g',
        moq: '200 pcs',
        badge: 'Professional Grade',
        image: 'assets/images/xionxio-fatigue.png',
        treatment: '缓解疲劳',
        treatmentKey: 'fatigue',
        treatmentDesc: '专业级疲劳缓解方案，专为高强度工作和长期疲劳设计，高效能量导入，全天保持充沛精力。',
        description: 'Heavy-duty energy recovery device designed for sustained daily use to combat chronic fatigue and maintain peak performance throughout the day.',
        features: [
            'Heavy-duty design for frequent use',
            'Professional-grade build quality',
            'Multi-session compatible',
            'Advanced delivery system',
            'ISO 13485 certified'
        ]
    },
    {
        id: 8,
        name: '便携助眠伴侣™ TS-50',
        nameKey: 'product_name_8',
        category: 'sleep',
        application: 'travel',
        certification: 'rohs',
        model: 'ZY018G-I',
        particleSize: '≤2.5μm',
        nebulizationRate: '≥ 0.2 ml/min',
        capacity: '5 ml',
        charging: 'Type-C USB',
        frequency: '2.7MHz',
        weight: '~92g',
        moq: '300 pcs',
        badge: '',
        image: 'assets/images/xionxio-sleep.png',
        gallery: ['assets/images/xionxio-sleep-gallery.png'],
        treatment: '助眠',
        treatmentKey: 'sleep',
        treatmentDesc: '超便携助眠方案，出差旅行也能轻松使用，通过温和微雾帮助快速入眠、提升深度睡眠质量。',
        description: 'Ultra-compact travel sleep aid that fits in your pocket, powered by AA batteries or USB for maximum convenience and restful sleep anywhere.',
        features: [
            'Pocket-sized ultra compact design',
            'AA battery or USB powered',
            'Super lightweight 80g',
            'Travel pouch included',
            'RoHS compliant'
        ]
    },
    {
        id: 9,
        name: '儿童鼻炎舒缓仪™ Animal Series',
        nameKey: 'product_name_9',
        category: 'rhinitis',
        application: 'home',
        certification: 'ce',
        model: 'ZY018G-I',
        particleSize: '≤2.5μm',
        nebulizationRate: '≥ 0.22 ml/min',
        capacity: '6 ml',
        charging: 'Type-C USB',
        frequency: '2.7MHz',
        weight: '~92g',
        moq: '500 pcs',
        badge: 'Kids Favorite',
        image: 'assets/images/xionxio-rhinitis.png',
        gallery: ['assets/images/cat-rhinitis.png'],
        treatment: '鼻炎',
        treatmentKey: 'rhinitis',
        treatmentDesc: '可爱动物造型儿童鼻炎护理系列，让孩子在愉悦中完成鼻腔护理，温和有效缓解儿童鼻塞、鼻炎问题。',
        description: 'Fun animal-shaped pediatric rhinitis care device series that makes nasal treatment enjoyable for children of all ages while providing effective relief.',
        features: [
            'Multiple animal designs available',
            'Fun and engaging for children',
            'Soft pediatric nasal tip',
            'Low noise gentle operation',
            'CE certified'
        ]
    }
];

// Render product cards (used on products page)
function renderProducts(containerId, products = productsData) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = products.map(product => `
        <div class="product-card fade-in" data-category="${product.category}" data-application="${product.application}" data-certification="${product.certification}" data-treatment="${product.treatment}">
            <div class="product-image">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                ${product.image
                    ? `<img src="${product.image}" alt="${product.name}" class="product-img">`
                    : `<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="opacity: 0.2;">
                        <rect x="25" y="20" width="50" height="60" rx="8" fill="#0a3d62"/>
                        <circle cx="50" cy="50" r="15" fill="#00b894"/>
                        <rect x="45" y="10" width="10" height="15" rx="3" fill="#0a3d62"/>
                        <rect x="35" y="75" width="30" height="5" rx="2" fill="#0a3d62"/>
                    </svg>`}
            </div>
            <div class="product-info">
                <span class="product-category-tag">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</span>
                <h3>${typeof t === 'function' ? (t(product.nameKey) || product.name) : product.name}</h3>
                <span class="treatment-tag" data-i18n="treatment.${product.treatmentKey}">${typeof t === 'function' ? t('treatment.' + product.treatmentKey) : product.treatment}</span>
                <div class="product-specs">
                    <div class="product-spec">
                        <span class="label">Model:</span>
                        <span class="value">${product.model}</span>
                    </div>
                    <div class="product-spec">
                        <span class="label">Particle:</span>
                        <span class="value">${product.particleSize}</span>
                    </div>
                </div>
                <div class="product-certs">
                    <span class="cert-tag">${product.certification.toUpperCase()}</span>
                    <span class="cert-tag">ISO</span>
                </div>
                <div class="product-footer">
                    <span class="product-moq">MOQ: <strong>${product.moq}</strong></span>
                    <a href="product-detail.html?id=${product.id}" class="btn btn-small btn-primary">Inquire Now</a>
                </div>
            </div>
        </div>
    `).join('');
    
    // Re-init scroll animations for new elements
    initScrollAnimations();
}

// Get product by ID
function getProductById(id) {
    return productsData.find(p => p.id === parseInt(id)) || productsData[0];
}
