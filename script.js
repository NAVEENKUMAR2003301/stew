
        // Initialize AOS animation
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });

        // Mobile menu toggle
        const mobileMenuButton = document.querySelector('.mobile-menu-button');
        const mobileMenu = document.querySelector('.mobile-menu');
        const mobileServicesToggle = document.querySelector('#mobile-services-toggle');
        const mobileServicesDropdown = document.querySelector('#mobile-services-dropdown');

        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('scale-y-100');
            mobileMenu.classList.toggle('opacity-100');
        });

        mobileServicesToggle.addEventListener('click', () => {
            mobileServicesDropdown.classList.toggle('hidden');
            mobileServicesToggle.querySelector('svg').classList.toggle('rotate-180');
        });

        // FAQ accordion
        const faqQuestions = document.querySelectorAll('.faq-question');
        faqQuestions.forEach(question => {
            question.addEventListener('click', () => {
                const answer = question.parentElement.querySelector('.faq-answer');
                const icon = question.querySelector('i');
                
                // Toggle answer visibility
                answer.classList.toggle('hidden');
                
                // Rotate icon
                icon.classList.toggle('rotate-180');
                
                // Close other open answers
                faqQuestions.forEach(otherQuestion => {
                    if (otherQuestion !== question) {
                        const otherAnswer = otherQuestion.parentElement.querySelector('.faq-answer');
                        const otherIcon = otherQuestion.querySelector('i');
                        
                        otherAnswer.classList.add('hidden');
                        otherIcon.classList.remove('rotate-180');
                    }
                });
            });
        });

        // Back to top button
        const backToTopButton = document.getElementById('backToTop');
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.remove('opacity-0', 'invisible');
                backToTopButton.classList.add('opacity-100', 'visible');
            } else {
                backToTopButton.classList.remove('opacity-100', 'visible');
                backToTopButton.classList.add('opacity-0', 'invisible');
            }
        });

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Header scroll effect
        const header = document.getElementById('mainHeader');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('shadow-lg');
            } else {
                header.classList.remove('shadow-lg');
            }
        });

        // Form submission
        const weddingForm = document.getElementById('weddingForm');
        weddingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Here you would typically send the form data to your server
            alert('Thank you for your inquiry! We will contact you within 24 hours.');
            weddingForm.reset();
        });

        // Service card expansion
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach(card => {
            const readMoreBtn = card.querySelector('.read-more-btn');
            const extraContent = card.querySelector('.extra-content');
            
            if (readMoreBtn && extraContent) {
                readMoreBtn.addEventListener('click', () => {
                    extraContent.classList.toggle('hidden');
                    readMoreBtn.textContent = extraContent.classList.contains('hidden') ? 'Read More' : 'Read Less';
                    
                    // Adjust card height
                    if (extraContent.classList.contains('hidden')) {
                        card.style.height = 'auto';
                    } else {
                        card.style.height = card.scrollHeight + 'px';
                    }
                });
            }
        });
    