        // Mobile Menu Toggle
        function toggleMenu() {
            const menu = document.getElementById('mobileMenu');
            menu.classList.toggle('hidden');
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    // Close mobile menu if open
                    document.getElementById('mobileMenu').classList.add('hidden');
                }
            });
        });

        // Certificate Protection
        document.addEventListener('contextmenu', function(e) {
            if (e.target.classList.contains('certificate-image') || e.target.classList.contains('modal-image')) {
                e.preventDefault();
                alert('Certificate content is protected and cannot be downloaded.');
                return false;
            }
        });

        // Disable keyboard shortcuts for saving
        document.addEventListener('keydown', function(e) {
            if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'p' || e.key === 'S' || e.key === 'P')) {
                e.preventDefault();
                alert('Saving/printing is disabled for certificate protection.');
                return false;
            }
            
            // Disable F12 for developer tools
            if (e.key === 'F12') {
                e.preventDefault();
                return false;
            }
        });

        // Disable dragging of certificate images
        document.addEventListener('dragstart', function(e) {
            if (e.target.classList.contains('certificate-image') || e.target.classList.contains('modal-image')) {
                e.preventDefault();
                return false;
            }
        });

        // Certificate Modal Functions
        function showCertificate(imgSrc) {
            const modal = document.getElementById('certificateModal');
            const modalImg = document.getElementById('modalCertificate');
            modalImg.src = imgSrc;
            modal.style.display = "block";
            document.body.style.overflow = "hidden";
        }

        function closeModal() {
            document.getElementById('certificateModal').style.display = "none";
            document.body.style.overflow = "auto";
        }

        // Close modal when clicking outside
        window.onclick = function(event) {
            const modal = document.getElementById('certificateModal');
            if (event.target === modal) {
                closeModal();
            }
        }

        // Animation on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('section, .glass-card').forEach(element => {
            observer.observe(element);
        });

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('nav');
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-lg');
                navbar.classList.add('bg-gray-900/90');
            } else {
                navbar.classList.remove('shadow-lg');
                navbar.classList.remove('bg-gray-900/90');
            }
        });
