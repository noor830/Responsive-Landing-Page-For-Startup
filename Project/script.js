// Mobile Menu Toggle

const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.innerHTML = navLinks.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Smooth Scrolling for navigation links

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
                
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Testimonial Slider

const testimonialSlides = document.querySelectorAll('.testimonial-slide');
const testimonialButtons = document.querySelectorAll('.testimonial-nav button');
let currentSlide = 0;

function showSlide(index) {
    testimonialSlides.forEach(slide => slide.classList.remove('active'));
    testimonialButtons.forEach(button => button.classList.remove('active'));
            
    testimonialSlides[index].classList.add('active');
    testimonialButtons[index].classList.add('active');
    currentSlide = index;
}

testimonialButtons.forEach((button, index) => {
    button.addEventListener('click', () => showSlide(index));
});

        
// Auto-advance slides

setInterval(() => {
    let nextSlide = (currentSlide + 1) % testimonialSlides.length;
    showSlide(nextSlide);
}, 5000);

// Add animations when elements come into view

const animateOnScroll = () => {
    const elements = document.querySelectorAll('.fade-in, .slide-up');
            
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
                
        if (elementPosition < windowHeight - 100) {
            element.classList.add('fade-in');
            element.classList.add('slide-up');
            }
        });
};

// Run once on load and then on scroll

animateOnScroll();
window.addEventListener('scroll', animateOnScroll);
