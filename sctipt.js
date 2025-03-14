// ===================== Menu Icon Toggle =====================
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

const toggleMenu = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

menuIcon.addEventListener('click', toggleMenu);

// ===================== Scroll Sections Active Link =====================
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

const setActiveLinkOnScroll = () => {
    const scrollTop = window.scrollY;

    sections.forEach(sec => {
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (scrollTop >= offset && scrollTop < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
        }
    });
};

// ===================== Sticky Navbar =====================
const header = document.querySelector('.header');

const stickyNavbar = () => {
    header.classList.toggle('sticky', window.scrollY > 100);
};

// ===================== Remove Menu Icon on Link Click =====================
const removeMenuOnLinkClick = () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// ===================== Swiper Initialization =====================
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// ===================== Dark/Light Mode Toggle =====================
const darkModeIcon = document.querySelector('#darkMode-icon');

const toggleDarkMode = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};

darkModeIcon.addEventListener('click', toggleDarkMode);

// ===================== Scroll Reveal Animation =====================
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });

// ===================== Window Scroll Event =====================
window.addEventListener('scroll', () => {
    setActiveLinkOnScroll();
    stickyNavbar();
    removeMenuOnLinkClick();
});
