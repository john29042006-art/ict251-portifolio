document.addEventListener('DOMContentLoaded', () => {

    // 1. Theme Switcher (Light/Dark Mode Toggle)
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            if (currentTheme === 'light') {
                document.documentElement.removeAttribute('data-theme');
                themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i> Theme';
            } else {
                document.documentElement.setAttribute('data-theme', 'light');
                themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i> Theme';
            }
        });
    }

    // 2. Photo Gallery Image Cycle Logic
    const photos = ['images/photo1.jpg', 'images/photo2.jpg', 'images/photo3.jpg'];
    let currentPhotoIdx = 0;
    const galleryImg = document.getElementById('gallery-img');
    const prevBtn = document.getElementById('prev-photo-btn');
    const nextBtn = document.getElementById('next-photo-btn');

    if (galleryImg && prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            currentPhotoIdx = (currentPhotoIdx - 1 + photos.length) % photos.length;
            galleryImg.src = photos[currentPhotoIdx];
        });

        nextBtn.addEventListener('click', () => {
            currentPhotoIdx = (currentPhotoIdx + 1) % photos.length;
            galleryImg.src = photos[currentPhotoIdx];
        });
    }

    // 3. Lightbox Full-screen View on Image Click
    const lightboxModal = document.getElementById('lightbox-modal');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightbox-close');

    if (galleryImg && lightboxModal && lightboxImg) {
        galleryImg.addEventListener('click', () => {
            lightboxImg.src = galleryImg.src;
            lightboxModal.classList.add('active');
        });

        lightboxClose.addEventListener('click', () => {
            lightboxModal.classList.remove('active');
        });

        lightboxModal.addEventListener('click', (e) => {
            if (e.target === lightboxModal) {
                lightboxModal.classList.remove('active');
            }
        });
    }

    // 4. Study Calculator Logic
    const calcForm = document.getElementById('study-calc-form');
    const calcResult = document.getElementById('calc-result');

    if (calcForm && calcResult) {
        calcForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const hours = parseFloat(document.getElementById('hours-per-day').value);
            const days = parseFloat(document.getElementById('days-per-week').value);

            if (hours >= 1 && hours <= 24 && days >= 1 && days <= 7) {
                const total = hours * days;
                calcResult.textContent = `Total Estimated Study Time: ${total} Hours / Week`;
            } else {
                calcResult.textContent = 'Please enter valid hours (1-24) and days (1-7).';
            }
        });
    }

    // 5. Contact Form Validation and Live Preview
    const contactForm = document.getElementById('contact-form');
    const nameInput = document.getElementById('fullname');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');
    const previewBox = document.getElementById('contact-preview');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;

            // Clear errors
            nameError.textContent = '';
            emailError.textContent = '';
            messageError.textContent = '';

            // Validate Name
            if (!nameInput.value.trim()) {
                nameError.textContent = 'Full name is required.';
                isValid = false;
            }

            // Validate Email
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailInput.value.trim() || !emailPattern.test(emailInput.value.trim())) {
                emailError.textContent = 'Please enter a valid email address.';
                isValid = false;
            }

            // Validate Message
            if (!messageInput.value.trim()) {
                messageError.textContent = 'Message field cannot be empty.';
                isValid = false;
            }

            if (isValid) {
                previewBox.textContent = `Message Formatted & Verified:\n\nName: ${nameInput.value.trim()}\nEmail: ${emailInput.value.trim()}\nMessage: ${messageInput.value.trim()}\n\nStatus: Local Validation Passed!`;
            } else {
                previewBox.textContent = '';
            }
        });
    }

});