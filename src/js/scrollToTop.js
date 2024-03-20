
        const scrollToTopButton = document.getElementById('scrollToTopButton');
    
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 100) { 
                scrollToTopButton.classList.remove('hidden');
            } else { 
                scrollToTopButton.classList.add('hidden');
            }
        });
    
        scrollToTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' }); 
        });
