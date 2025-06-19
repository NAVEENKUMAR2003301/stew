// Initialize AOS animation library
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

const submitt = document.getElementById("#submitt")

const msg =()=>{
    alert("we will reach you Thank you for reach me...")
}
// Mobile menu toggle functionality
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('hidden');
    navLinks.classList.toggle('flex');
    navLinks.classList.toggle('flex-col');
    navLinks.classList.toggle('absolute');
    navLinks.classList.toggle('top-20');
    navLinks.classList.toggle('left-0');
    navLinks.classList.toggle('w-full');
    navLinks.classList.toggle('bg-white');
    navLinks.classList.toggle('px-[5%]');
    navLinks.classList.toggle('py-4');
});

// Testimonial carousel functionality
const carousel = document.getElementById('testimonialCarousel');
const prevBtn = document.getElementById('prevTestimonial');
const nextBtn = document.getElementById('nextTestimonial');
const slides = document.querySelectorAll('.testimonial-slide');
let currentIndex = 0;

function updateCarousel() {
    const slideWidth = slides[0].offsetWidth;
    carousel.scrollTo({
        left: currentIndex * (slideWidth + 32), // 32px for gap (8px padding on each side)
        behavior: 'smooth'
    });
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
});

// Back to top button functionality
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.remove('opacity-0', 'invisible');
        backToTopBtn.classList.add('opacity-100', 'visible');
    } else {
        backToTopBtn.classList.remove('opacity-100', 'visible');
        backToTopBtn.classList.add('opacity-0', 'invisible');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerOffset = 80; // Height of your fixed header
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (!navLinks.classList.contains('hidden')) {
                navLinks.classList.add('hidden');
                navLinks.classList.remove('flex', 'flex-col', 'absolute', 'top-20', 'left-0', 'w-full', 'bg-white', 'px-[5%]', 'py-4');
            }
        }
    });
});

// Form submission handling
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Here you would typically send the form data to your server
        // For demo purposes, we'll just show an alert
        alert('Thank you for your message! We will contact you within 24 hours.');
        contactForm.reset();
    });
}

// Responsive adjustments
function handleResize() {
    // Reset mobile menu on larger screens
    if (window.innerWidth >= 768) {
        navLinks.classList.remove('flex', 'flex-col', 'absolute', 'top-20', 'left-0', 'w-full', 'bg-white', 'px-[5%]', 'py-4');
        if (navLinks.classList.contains('hidden')) {
            navLinks.classList.remove('hidden');
        }
    }
}

window.addEventListener('resize', handleResize);
handleResize(); // Run once on load

// Learn More functionality
document.querySelectorAll('a[href="#"]').forEach(link => {
    if (link.textContent.includes('Learn more')) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Find the parent service card
            const serviceCard = this.closest('.bg-white');
            
            // Create or reveal the additional content
            let extraContent = serviceCard.querySelector('.extra-content');
            
            if (!extraContent) {
                // Create new extra content based on which service it is
                const serviceTitle = serviceCard.querySelector('h3').textContent;
                extraContent = document.createElement('div');
                extraContent.className = 'extra-content mt-6 pt-6 border-t border-gray-200';
                
                // Add different content based on service
                if (serviceTitle.includes('Complete Wedding Decor')) {
                    extraContent.innerHTML = `
                        <h4 class="font-bold mb-3">Full Package Details</h4>
                        <p class="text-gray-600 mb-4">Our complete wedding decor package includes everything you need for a seamless, beautiful event from start to finish.</p>
                        <ul class="text-gray-600 space-y-2 mb-4">
                            <li class="flex items-center"><i class="fas fa-check-circle text-pink-500 mr-2"></i> Custom design consultation</li>
                            <li class="flex items-center"><i class="fas fa-check-circle text-pink-500 mr-2"></i> On-site setup and breakdown</li>
                            <li class="flex items-center"><i class="fas fa-check-circle text-pink-500 mr-2"></i> Full venue transformation</li>
                            <li class="flex items-center"><i class="fas fa-check-circle text-pink-500 mr-2"></i> Coordination with other vendors</li>
                        </ul>
                        <p class="text-gray-600">Packages start at $3,500</p>
                    `;
                } 
                else if (serviceTitle.includes('Floral Design')) {
                    extraContent.innerHTML = `
                        <h4 class="font-bold mb-3">Floral Package Options</h4>
                        <p class="text-gray-600 mb-4">We work with seasonal flowers to create stunning arrangements that fit your style and budget.</p>
                        <ul class="text-gray-600 space-y-2 mb-4">
                            <li class="flex items-center"><i class="fas fa-check-circle text-purple-500 mr-2"></i> Premium imported flowers available</li>
                            <li class="flex items-center"><i class="fas fa-check-circle text-purple-500 mr-2"></i> Eco-friendly options</li>
                            <li class="flex items-center"><i class="fas fa-check-circle text-purple-500 mr-2"></i> Preservation services</li>
                            <li class="flex items-center"><i class="fas fa-check-circle text-purple-500 mr-2"></i> Custom color matching</li>
                        </ul>
                        <p class="text-gray-600">Packages start at $1,200</p>
                    `;
                }
                else if (serviceTitle.includes('Venue Styling')) {
                    extraContent.innerHTML = `
                        <h4 class="font-bold mb-3">Venue Styling Options</h4>
                        <p class="text-gray-600 mb-4">We offer complete venue styling packages to transform any space into your dream wedding location.</p>
                        <ul class="text-gray-600 space-y-2 mb-4">
                            <li class="flex items-center"><i class="fas fa-check-circle text-blue-500 mr-2"></i> Over 50 furniture styles available</li>
                            <li class="flex items-center"><i class="fas fa-check-circle text-blue-500 mr-2"></i> Custom lighting designs</li>
                            <li class="flex items-center"><i class="fas fa-check-circle text-blue-500 mr-2"></i> Themed decor packages</li>
                            <li class="flex items-center"><i class="fas fa-check-circle text-blue-500 mr-2"></i> Complete venue draping</li>
                        </ul>
                        <p class="text-gray-600">Packages start at $2,800</p>
                    `;
                }
                
                serviceCard.appendChild(extraContent);
                this.innerHTML = 'Show less <i class="fas fa-arrow-up ml-2"></i>';
            } 
            else {
                // Toggle visibility
                if (extraContent.style.display === 'none' || !extraContent.style.display) {
                    extraContent.style.display = 'block';
                    this.innerHTML = 'Show less <i class="fas fa-arrow-up ml-2"></i>';
                } else {
                    extraContent.style.display = 'none';
                    this.innerHTML = 'Learn more <i class="fas fa-arrow-right ml-2"></i>';
                }
            }
        });
    }
});

// Mobile menu toggle
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuButton.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden');
    this.querySelector('svg').classList.toggle('hidden');
    this.querySelector('svg').classList.toggle('block');
});

// Header scroll effect
const header = document.getElementById('mainHeader');
let lastScroll = 0;

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
        header.classList.remove('shadow-lg');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('-translate-y-full')) {
        // Scroll down
        header.classList.add('-translate-y-full');
        header.classList.remove('shadow-lg');
    } else if (currentScroll < lastScroll && header.classList.contains('-translate-y-full')) {
        // Scroll up
        header.classList.remove('-translate-y-full');
        header.classList.add('shadow-lg');
    }
    lastScroll = currentScroll;
});

// Marquee text animation
const marqueeText = document.querySelector('.marquee-text');
if (marqueeText) {
    marqueeText.innerHTML = marqueeText.innerHTML.repeat(3);
    marqueeText.style.animation = 'marquee 20s linear infinite';
    
    // Add to styles:
    // @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
}