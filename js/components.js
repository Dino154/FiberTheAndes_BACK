/* ===================================
   Fiber the Andes - Master Script
   Maneja: Carga de componentes, Menú Móvil, Scroll y Animaciones
   =================================== */

document.addEventListener('DOMContentLoaded', async function () {
    // 1. Cargar Componentes (Navbar, Footer, WhatsApp)
    await loadComponent('components/navbar.html', 'navbar-placeholder');
    await loadComponent('components/footer.html', 'footer-placeholder');
    await loadComponent('components/whatsapp.html', 'whatsapp-placeholder');

    // 2. Inicializar Lógicas
    initNavbarLogic(); // Hacer que el menú funcione
    initScrollAnimations(); // Activar las animaciones "Chingonas"
});

// --- Función de Carga ---
async function loadComponent(url, elementId) {
    const element = document.getElementById(elementId);
    if (!element) return;
    try {
        const response = await fetch(url);
        if (response.ok) {
            element.innerHTML = await response.text();
            // Si cargamos el navbar, marcamos la página activa
            if (elementId === 'navbar-placeholder') setActivePage();
        }
    } catch (error) {
        console.error(`Error cargando ${url}`, error);
    }
}

// --- Lógica del Navbar (Glassmorphism y Móvil) ---
function initNavbarLogic() {
    const navbar = document.querySelector('.navbar');
    const mobileBtn = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    // Efecto Vidrio al bajar scroll
    window.addEventListener('scroll', () => {
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });

    // Menú Móvil (Hamburguesa)
    if (mobileBtn && navMenu) {
        mobileBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
}

// --- Lógica de Animaciones (Scroll Reveal) ---
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1, // Se activa al ver el 10% del elemento
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Buscar elementos a animar
    const elements = document.querySelectorAll('.fade-in-up, .card, .section-title, .feature-box, .hero-content > *');
    elements.forEach(el => {
        el.classList.add('fade-in-up'); // Asegurar clase base
        observer.observe(el);
    });
}

// --- Marcar enlace activo ---
function setActivePage() {
    let path = window.location.pathname.split("/").pop() || 'index.html';
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        if (link.getAttribute('href') === path) link.classList.add('active');
    });
}