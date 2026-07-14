// script.js
(function() {
    'use strict';

    // ═══════════════════════════════════════
    // 📦 ДАННЫЕ
    // ═══════════════════════════════════════
    const menuData = {
        soups: [
            { name: 'Борщ', price: 150, weight: '300 гр', image: 'mages/b51c232f88839b7023d82d308a39fb44.jpg' },
            { name: 'Харчо', price: 170, weight: '300 гр', image: 'mages/xarcho.jpg' },
            { name: 'Шурпа', price: 210, weight: '300 гр', image: 'mages/shurpa.webp' },
            { name: 'Грибной суп', price: 170, weight: '300 гр', image: 'mages/gribnoy.jpg' },
            { name: 'Куриный суп', price: 140, weight: '300 гр', image: 'mages/kurini.jpg' },
            { name: 'Гороховый суп', price: 140, weight: '300 гр', image: 'mages/gorox.jpg' },
            { name: 'Рассольник', price: 140, weight: '300 гр', image: 'mages/rassolnik.jpg' },
            { name: 'Солянка', price: 180, weight: '300 гр', image: 'mages/solyanka.jpg' },
            { name: 'Овощной суп', price: 170, weight: '300 гр', image: 'mages/ovosh.jpg' },
            { name: 'Фасолевый суп', price: 150, weight: '300 гр', image: 'mages/fasol.jpg' },
            { name: 'Суп с фрикадельками', price: 160, weight: '300 гр', image: 'mages/frikadel.jpg' },
            { name: 'Суп чечевичный', price: 140, weight: '300 гр', image: 'mages/chechev.jpg' },
            { name: 'Окрошка на квасе', price: 210, weight: '300 гр', image: 'mages/okroshka.jpg' },
            { name: 'Суп с вермишелью', price: 140, weight: '300 гр', image: 'mages/vermish.jpg' }
        ],
        garnishes: [
            { name: 'Картофельное пюре', price: 100, weight: '200 гр', image: 'mages/pyure.jpg' },
            { name: 'Макароны по-флотски', price: 130, weight: '200 гр', image: 'mages/poflostki.jpg' },
            { name: 'Рис с куриным мясом (плов)', price: 150, weight: '200 гр', image: 'mages/risskur.jpg' },
            { name: 'Рис с овощами', price: 130, weight: '200 гр', image: 'mages/rissovosh.jpg' },
            { name: 'Гречка с овощами', price: 90, weight: '200 гр', image: 'mages/grechkasovosh.jpg' },
            { name: 'Спагетти', price: 90, weight: '200 гр', image: 'mages/spaget.jpg' },
            { name: 'Капуста тушёная с фасолью', price: 120, weight: '200 гр', image: 'mages/kapustatush.jpg' },
            { name: 'Фасоль стручковая тушёная', price: 120, weight: '200 гр', image: 'mages/fasolstruch.jpg' },
            { name: 'Картошка запечённая (по-деревенски)', price: 150, weight: '200 гр', image: 'mages/kartoshkapodereven.jpg' },
            { name: 'Дранники картофельные', price: 70, weight: '1 шт (120 гр)', image: 'mages/dranikikartof.jpg' },
            { name: 'Оладьи из кабачков', price: 80, weight: '1 шт (120 гр)', image: 'mages/oladiiskabachkov.jpg' }
        ],
        meat: [
            { name: 'Котлеты куриные', price: 110, weight: '150 гр', image: 'mages/kotletakurinn.jpg' },
            { name: 'Голень запечённая куриная', price: 110, weight: '160 гр', image: 'mages/golen.jpg' },
            { name: 'Бедро куриное запечённое', price: 130, weight: '200 гр', image: 'mages/bedro.jpg' },
            { name: 'Гуляш из свинины', price: 130, weight: '200 гр', image: 'mages/gulyash.jpg' },
            { name: 'Гуляш из куриных желудков', price: 110, weight: '200 гр', image: 'mages/gulyashiskurinix.jpg' },
            { name: 'Гуляш из куриной печени', price: 110, weight: '200 гр', image: 'mages/gulyashizpecheni.jpg' },
            { name: 'Куриное филе в кляре', price: 160, weight: '150 гр', image: 'mages/kuricavklyare.jpg' },
            { name: 'Долма', price: 200, weight: '220 гр (4 шт)', image: 'mages/dolma.jpg' },
            { name: 'Рыба камбала запечённая с овощами', price: 170, weight: '200 гр', image: 'mages/kambla.jpg' },
            { name: 'Рыба хек запечённый', price: 140, weight: '180 гр', image: 'mages/xek.jpg' },
            { name: 'Шашлык из свиной шеи', price: 160, weight: '100 гр', image: 'mages/sheya.jpg' },
            { name: 'Люля-кебаб из курицы', price: 250, weight: '200 гр', image: 'mages/kebab.jpg' },
            { name: 'Шашлык куриный', price: 130, weight: '100 гр', image: 'mages/kurinashash.jpg' },
            { name: 'Карп на мангале', price: 150, weight: '100 гр', image: 'mages/karp.jpg' },
            { name: 'Баранина на мангале', price: 280, weight: '100 гр', image: 'mages/baranina.jpg' }
        ],
        salads: [
            { name: 'Оливье', price: 90, weight: '150 гр', image: 'mages/olivie.jpg' },
            { name: 'Крабовый салат', price: 90, weight: '150 гр', image: 'mages/krabovisalat.jpg' },
            { name: 'Фасолевый салат', price: 90, weight: '150 гр', image: 'mages/fasolevisalat.jpg' },
            { name: 'Салат с ананасами', price: 120, weight: '150 гр', image: 'mages/salatsanasami.jpg' },
            { name: 'Сельдь под шубой', price: 120, weight: '180 гр', image: 'mages/seldpodshuboy.jpg' },
            { name: 'Овощной салат', price: 80, weight: '150 гр', image: 'mages/ovoshnysalat.jpg' },
            { name: 'Морковный салат', price: 70, weight: '150 гр', image: 'mages/markovnisalat.jpg' },
            { name: 'Свекольный салат', price: 70, weight: '150 гр', image: 'mages/sa;atsveklo.jpg' },
            { name: 'Красное море', price: 90, weight: '150 гр', image: 'mages/krasnoemore.jpg' },
            { name: 'Салат "Кудесница"', price: 90, weight: '150 гр', image: 'mages/kudesnica.jpg' },
            { name: 'Винегрет', price: 90, weight: '150 гр', image: 'mages/venegret.jpg' },
            { name: 'Салат с грибами', price: 130, weight: '180 гр', image: 'mages/sa;atsgribamin.jpg' }
        ],
        drinks: [
            { name: 'Компот из сухофруктов', price: 50, weight: '200 мл', image: 'mages/kompotizsuxofruktov.jpg' },
            { name: 'Ягодный морс', price: 65, weight: '200 мл', image: 'mages/yagodnimors.jpg' },
            { name: 'Томатный сок', price: 50, weight: '200 мл', image: 'mages/tomatnisok.jpg' },
            { name: 'Яблочный сок', price: 50, weight: '200 мл', image: 'mages/yablochnisok.jpg' },
            { name: 'Чай чёрный/зелёный', price: 60, weight: '200 мл', image: 'mages/chay.jpg' },
            { name: 'Кофе заварное', price: 70, weight: '200 мл', image: 'mages/koffe.jpg' },
            { name: 'Лимонад', price: 90, weight: '0,5 л', image: 'mages/limonad.jpg' },
            { name: 'Вода с газом', price: 50, weight: '0,5 л', image: 'mages/vodasgazom.jpg' },
            { name: 'Вода без газа', price: 45, weight: '0,5 л', image: 'mages/vodasgazom.jpg' }
        ]
    };

    const categoryNames = {
        soups: '🥣 Супы',
        garnishes: '🍚 Гарниры',
        meat: '🍖 Мясные блюда',
        salads: '🥗 Салаты',
        drinks: '🥤 Напитки'
    };

    const categoryOrder = ['soups', 'garnishes', 'meat', 'salads', 'drinks'];

    const hits = [
        { name: 'Борщ', price: 150, weight: '300 гр', category: 'soups', image: 'mages/b51c232f88839b7023d82d308a39fb44.jpg' },
        { name: 'Шашлык из свиной шеи', price: 160, weight: '100 гр', category: 'meat', image: 'mages/sheya.jpg' },
        { name: 'Оливье', price: 90, weight: '150 гр', category: 'salads', image: 'mages/olivie.jpg' },
        { name: 'Картофельное пюре', price: 100, weight: '200 гр', category: 'garnishes', image: 'mages/pyure.jpg' },
        { name: 'Котлеты куриные', price: 110, weight: '150 гр', category: 'meat', image: 'mages/kotletakurinn.jpg' },
        { name: 'Солянка', price: 180, weight: '300 гр', category: 'soups', image: 'mages/solyanka.jpg' },
        { name: 'Сельдь под шубой', price: 120, weight: '180 гр', category: 'salads', image: 'mages/seldpodshuboy.jpg' },
        { name: 'Компот из сухофруктов', price: 50, weight: '200 мл', category: 'drinks', image: 'mages/kompotizsuxofruktov.jpg' }
    ];

    const services = [
        { id: 1, name: 'Поминальный обед', description: 'Организация поминального обеда с полным меню, сервировкой и обслуживанием. Учтём все традиции.', price: 'от 800 ₽/чел', image: 'mages/pominalobed.JPG' },
        { id: 2, name: 'День рождения', description: 'Праздничный стол на любой возраст. Торт, украшения, аниматоры — всё под ключ.', price: 'от 1200 ₽/чел', image: 'mages/denrojd.JPG' },
        { id: 3, name: 'Корпоратив', description: 'Фуршеты, банкеты, кофе-брейки для вашего коллектива. Выездное обслуживание.', price: 'от 1500 ₽/чел', image: 'mages/korporativ.JPG' },
        { id: 4, name: 'Любое мероприятие под ключ', description: 'Свадьба, юбилей, выпускной — полная организация питания и сервиса. Индивидуальный подход.', price: 'договорная', image: 'mages/podkluch.JPG' },
        { id: 5, name: 'Доставка шашлыка от 5 кг', description: 'Сочный шашлык из свинины, курицы или баранины. Доставка горячим в термоконтейнерах. Минимальный заказ — 5 кг.', price: 'от 2200 ₽/кг', image: 'mages/dostavka.JPG' }
    ];

    // ═══════════════════════════════════════
    // 🎯 DOM
    // ═══════════════════════════════════════
    const pages = document.querySelectorAll('.page');
    const navLinks = document.querySelectorAll('.nav__link');
    const logoLink = document.querySelector('.logo');
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    const hitsGrid = document.getElementById('hits-grid');
    const menuGrid = document.getElementById('menu-grid');
    const menuEmpty = document.getElementById('menu-empty');
    const servicesGrid = document.getElementById('services-grid');
    const filterSearch = document.getElementById('filter-search');
    const filterCategory = document.getElementById('filter-category');
    const header = document.getElementById('header');
    const preloader = document.getElementById('preloader');
    const statusBadge = document.getElementById('status-badge');
    const statusText = document.getElementById('status-text');
    const stickyCategories = document.getElementById('sticky-categories');
    const canvas = document.getElementById('particles-canvas');

    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    const isMobile = window.innerWidth <= 768;

    // ═══════════════════════════════════════
    // ✨ PARTICLES
    // ═══════════════════════════════════════
    function initParticles() {
        if (!canvas || isMobile) return;
        const ctx = canvas.getContext('2d');
        let particles = [];
        let mouseX = 0, mouseY = 0;
        let animationId;

        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resize();
        window.addEventListener('resize', resize, { passive: true });

        class Particle {
            constructor() {
                this.reset();
            }
            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 3 + 1;
                this.speedX = (Math.random() - 0.5) * 0.5;
                this.speedY = (Math.random() - 0.5) * 0.5;
                this.opacity = Math.random() * 0.5 + 0.1;
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                const dx = mouseX - this.x;
                const dy = mouseY - this.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 100) {
                    this.x -= dx * 0.01;
                    this.y -= dy * 0.01;
                }
                if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
                    this.reset();
                }
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(245, 124, 0, ${this.opacity})`;
                ctx.fill();
            }
        }

        for (let i = 0; i < 50; i++) {
            particles.push(new Particle());
        }

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        }, { passive: true });

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => { p.update(); p.draw(); });
            // Connect nearby particles
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 100) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(245, 124, 0, ${0.1 * (1 - dist / 100)})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }
            animationId = requestAnimationFrame(animate);
        }
        animate();
    }

    // ═══════════════════════════════════════
    // 🕐 STATUS (Открыто/Закрыто)
    // ═══════════════════════════════════════
    function updateStatus() {
        if (!statusBadge || !statusText) return;
        const now = new Date();
        const day = now.getDay();
        const hour = now.getHours();
        const minute = now.getMinutes();
        const time = hour * 60 + minute;

        // Пн-Пт: 10:00-20:00, Сб-Вс: 11:00-19:00
        let openTime, closeTime;
        if (day >= 1 && day <= 5) {
            openTime = 10 * 60;
            closeTime = 20 * 60;
        } else {
            openTime = 11 * 60;
            closeTime = 19 * 60;
        }

        const isOpen = time >= openTime && time < closeTime;
        if (isOpen) {
            statusText.textContent = 'Открыто';
            statusBadge.classList.remove('status-badge--closed');
        } else {
            statusText.textContent = 'Закрыто';
            statusBadge.classList.add('status-badge--closed');
        }
    }
    setInterval(updateStatus, 60000);
    updateStatus();

    // ═══════════════════════════════════════
    // 🔄 ПРЕЛОАДЕР
    // ═══════════════════════════════════════
    function hidePreloader() {
        setTimeout(() => {
            if (preloader) {
                preloader.classList.add('hidden');
                setTimeout(() => {
                    preloader.style.display = 'none';
                    initScrollReveal();
                    animateHeroElements();
                }, 600);
            }
        }, 1800);
    }

    // ═══════════════════════════════════════
    // 📜 SCROLL REVEAL
    // ═══════════════════════════════════════
    let scrollObserver;

    function initScrollReveal() {
        const revealElements = document.querySelectorAll('.scroll-reveal, .product-card, .service-card, .category-divider');
        scrollObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    if (entry.target.classList.contains('product-card') || entry.target.classList.contains('service-card')) {
                        const parent = entry.target.parentElement;
                        const siblings = Array.from(parent.children);
                        const index = siblings.indexOf(entry.target);
                        entry.target.style.transitionDelay = `${index * 0.08}s`;
                    }
                    scrollObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
        revealElements.forEach(el => scrollObserver.observe(el));
    }

    // ═══════════════════════════════════════
    // 🦸 HERO
    // ═══════════════════════════════════════
    function animateHeroElements() {
        const heroWords = document.querySelectorAll('.hero__word');
        heroWords.forEach((word, index) => {
            word.style.animationDelay = `${0.3 + index * 0.2}s`;
            word.style.animationPlayState = 'running';
        });
    }

    // ═══════════════════════════════════════
    // 🏠 HEADER SCROLL
    // ═══════════════════════════════════════
    let lastScroll = 0;
    let ticking = false;
    function handleScroll() {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 50) {
            header.classList.add('header--scrolled');
        } else {
            header.classList.remove('header--scrolled');
        }
        lastScroll = currentScroll;
        ticking = false;
    }
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(handleScroll);
            ticking = true;
        }
    }, { passive: true });

    // ═══════════════════════════════════════
    // 🧭 НАВИГАЦИЯ
    // ═══════════════════════════════════════
    function navigateTo(pageName) {
        pages.forEach(p => p.classList.remove('active'));
        const targetPage = document.getElementById(`page-${pageName}`);
        if (targetPage) {
            targetPage.classList.add('active');
            setTimeout(() => {
                if (scrollObserver) scrollObserver.disconnect();
                initScrollReveal();
            }, 100);
        }
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.page === pageName) link.classList.add('active');
        });
        nav.classList.remove('active');
        burger.classList.remove('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        renderPage();
    }

    navLinks.forEach(link => link.addEventListener('click', (e) => {
        e.preventDefault();
        navigateTo(link.dataset.page);
    }));
    logoLink.addEventListener('click', (e) => { e.preventDefault(); navigateTo('home'); });
    document.addEventListener('click', (e) => {
        const pageBtn = e.target.closest('[data-page]');
        if (pageBtn && pageBtn !== logoLink && !pageBtn.classList.contains('nav__link')) {
            e.preventDefault();
            navigateTo(pageBtn.dataset.page);
        }
    });

    burger.addEventListener('click', (e) => {
        e.stopPropagation();
        burger.classList.toggle('active');
        nav.classList.toggle('active');
    });
    document.addEventListener('click', (e) => {
        if (nav.classList.contains('active') && !nav.contains(e.target) && !burger.contains(e.target)) {
            nav.classList.remove('active');
            burger.classList.remove('active');
        }
    });
    let touchStartX = 0;
    document.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
    document.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].screenX;
        if (nav.classList.contains('active') && touchEndX - touchStartX > 80) {
            nav.classList.remove('active');
            burger.classList.remove('active');
        }
    }, { passive: true });

    // ═══════════════════════════════════════
    // 🏷 STICKY CATEGORIES
    // ═══════════════════════════════════════
    if (stickyCategories) {
        stickyCategories.addEventListener('click', (e) => {
            const btn = e.target.closest('.sticky-categories__btn');
            if (!btn) return;
            stickyCategories.querySelectorAll('.sticky-categories__btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const cat = btn.dataset.cat;
            if (filterCategory) {
                filterCategory.value = cat;
                renderMenu();
            }
        });
    }

    // ═══════════════════════════════════════
    // 🛠 УТИЛИТЫ
    // ═══════════════════════════════════════
    function escapeHTML(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    function getColorForCategory(category) {
        const colors = { soups: 'FFE0B2', garnishes: 'C8E6C9', meat: 'FFAB91', salads: 'B3E5FC', drinks: 'D1C4E9' };
        return colors[category] || 'DDDDDD';
    }

    // ═══════════════════════════════════════
    // 🔍 ПОДСВЕТКА ПОИСКА
    // ═══════════════════════════════════════
    function highlightSearch(text, query) {
        if (!query) return escapeHTML(text);
        const lowerText = text.toLowerCase();
        const lowerQuery = query.toLowerCase().trim();
        if (!lowerQuery) return escapeHTML(text);
        const index = lowerText.indexOf(lowerQuery);
        if (index === -1) return escapeHTML(text);
        const before = text.slice(0, index);
        const match = text.slice(index, index + lowerQuery.length);
        const after = text.slice(index + lowerQuery.length);
        return `${escapeHTML(before)}<span class="search-highlight">${escapeHTML(match)}</span>${highlightSearch(after, query)}`;
    }

    // ═══════════════════════════════════════
    // 🃏 КОМПОНЕНТЫ
    // ═══════════════════════════════════════
    function createCategoryDivider(categoryKey) {
        const divider = document.createElement('div');
        divider.className = 'category-divider scroll-reveal';
        divider.innerHTML = `
            <div class="category-divider__line"></div>
            <h3 class="category-divider__title">${categoryNames[categoryKey]}</h3>
            <div class="category-divider__line"></div>
        `;
        return divider;
    }

    function createProductCard(product, index = 0, searchQuery = '') {
        const card = document.createElement('div');
        card.className = 'product-card scroll-reveal--scale';
        card.style.transitionDelay = `${index * 0.08}s`;
        const imageSrc = product.image || `https://via.placeholder.com/200/${getColorForCategory(product.category)}/333?text=${encodeURIComponent(product.name)}`;
        const isSoup = product.category === 'soups';
        const highlightedName = highlightSearch(product.name, searchQuery);
        card.innerHTML = `
            <img src="${imageSrc}" alt="${product.name}" class="product-card__image" loading="lazy" onerror="this.src='https://via.placeholder.com/200/${getColorForCategory(product.category)}/333?text=${encodeURIComponent(product.name)}'">
            ${isSoup ? '<div class="product-card__steam"></div>' : ''}
            <div class="product-card__body">
                <span class="product-card__name">${highlightedName}</span>
                <span class="product-card__weight">${escapeHTML(product.weight)}</span>
                <span class="product-card__price" data-price="${product.price}">0 ₽</span>
            </div>`;
        return card;
    }

    function createServiceCard(service, index = 0) {
        const card = document.createElement('div');
        card.className = 'service-card scroll-reveal';
        card.style.transitionDelay = `${index * 0.1}s`;
        const imageSrc = service.image || `https://via.placeholder.com/400x250/DDDDDD/333?text=${encodeURIComponent(service.name)}`;
        card.innerHTML = `
            <img src="${imageSrc}" alt="${service.name}" class="service-card__image" loading="lazy" onerror="this.src='https://via.placeholder.com/400x250/DDDDDD/333?text=${encodeURIComponent(service.name)}'">
            <div class="service-card__body">
                <span class="service-card__name">${escapeHTML(service.name)}</span>
                <span class="service-card__description">${escapeHTML(service.description)}</span>
                <span class="service-card__price">${escapeHTML(service.price)}</span>
            </div>`;
        return card;
    }

    // ═══════════════════════════════════════
    // 💰 АНИМАЦИЯ СЧЁТЧИКА ЦЕНЫ
    // ═══════════════════════════════════════
    function animatePrice(element, targetPrice) {
        const duration = 800;
        const start = performance.now();
        function update(currentTime) {
            const elapsed = currentTime - start;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(easeOut * targetPrice);
            element.textContent = current.toLocaleString('ru-RU') + ' ₽';
            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }
        requestAnimationFrame(update);
    }

    // ═══════════════════════════════════════
    // 🎨 РЕНДЕР
    // ═══════════════════════════════════════
    function renderHits() {
        if (!hitsGrid) return;
        hitsGrid.innerHTML = '';
        hits.forEach((p, index) => {
            const card = document.createElement('div');
            card.className = 'product-card scroll-reveal--scale';
            card.style.transitionDelay = `${index * 0.1}s`;
            const imageSrc = p.image || `https://via.placeholder.com/200/${getColorForCategory(p.category)}/333?text=${encodeURIComponent(p.name)}`;
            card.innerHTML = `
                <img src="${imageSrc}" alt="${p.name}" class="product-card__image" loading="lazy" onerror="this.src='https://via.placeholder.com/200/${getColorForCategory(p.category)}/333?text=${encodeURIComponent(p.name)}'">
                <span class="product-card__badge">ХИТ</span>
                <div class="product-card__body">
                    <span class="product-card__name">${escapeHTML(p.name)}</span>
                    <span class="product-card__weight">${escapeHTML(p.weight)}</span>
                    <span class="product-card__price" data-price="${p.price}">0 ₽</span>
                </div>`;
            hitsGrid.appendChild(card);
        });
        setTimeout(() => {
            if (scrollObserver) scrollObserver.disconnect();
            initScrollReveal();
            // Анимируем цены
            document.querySelectorAll('.product-card__price[data-price]').forEach(el => {
                const price = parseInt(el.dataset.price);
                animatePrice(el, price);
            });
        }, 50);
    }

    function renderMenu() {
        if (!menuGrid) return;
        menuGrid.innerHTML = '';
        const search = filterSearch.value.trim();
        const selectedCategory = filterCategory.value;
        let hasItems = false;

        categoryOrder.forEach((categoryKey, catIndex) => {
            if (selectedCategory !== 'all' && selectedCategory !== categoryKey) return;
            const items = menuData[categoryKey] || [];
            let filteredItems = items;
            if (search) {
                filteredItems = items.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
            }
            if (filteredItems.length === 0) return;
            hasItems = true;
            const divider = createCategoryDivider(categoryKey);
            divider.style.transitionDelay = `${catIndex * 0.1}s`;
            menuGrid.appendChild(divider);
            filteredItems.forEach((item, index) => {
                const product = { ...item, category: categoryKey };
                const card = createProductCard(product, index, search);
                menuGrid.appendChild(card);
            });
        });

        if (!hasItems) {
            menuEmpty.style.display = 'block';
            menuEmpty.style.animation = 'none';
            menuEmpty.offsetHeight;
            menuEmpty.style.animation = 'shakeEmpty 0.5s ease';
        } else {
            menuEmpty.style.display = 'none';
        }

        setTimeout(() => {
            if (scrollObserver) scrollObserver.disconnect();
            initScrollReveal();
            document.querySelectorAll('.product-card__price[data-price]').forEach(el => {
                const price = parseInt(el.dataset.price);
                animatePrice(el, price);
            });
        }, 50);
    }

    function renderServices() {
        if (!servicesGrid) return;
        servicesGrid.innerHTML = '';
        services.forEach((s, index) => {
            const card = createServiceCard(s, index);
            servicesGrid.appendChild(card);
        });
        setTimeout(() => {
            if (scrollObserver) scrollObserver.disconnect();
            initScrollReveal();
        }, 50);
    }

    function renderPage() {
        const active = document.querySelector('.page.active');
        if (!active) return;
        if (active.id === 'page-home') renderHits();
        if (active.id === 'page-menu') renderMenu();
        if (active.id === 'page-services') renderServices();
    }

    filterSearch.addEventListener('input', renderMenu);
    filterCategory.addEventListener('change', renderMenu);

    // ═══════════════════════════════════════
    // ✨ ДЕКСТОП-ЭФФЕКТЫ
    // ═══════════════════════════════════════
    if (!isTouchDevice) {
        document.querySelectorAll('.btn--accent').forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                btn.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
            });
            btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
        });
    }

    // ═══════════════════════════════════════
    // 🚀 ИНИЦИАЛИЗАЦИЯ
    // ═══════════════════════════════════════
    initParticles();
    window.addEventListener('load', () => { hidePreloader(); });
    renderServices();
    renderHits();
    navigateTo('home');

})();