document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 2. Form validation for the contact form
const contactForm = document.querySelector('.contact-form');
const contactName = document.querySelector('[name="name"]');
const contactEmail = document.querySelector('[name="email"]');
const contactMessage = document.querySelector('[name="message"]');

// Adding event listener to the form submit
contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    let formValid = true;

    // Check if the name is valid
    if (contactName.value.trim() === '') {
        formValid = false;
        alert('Name is required');
    }

    // Check if the email is valid
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(contactEmail.value)) {
        formValid = false;
        alert('Please enter a valid email address');
    }

    // Check if the message is valid
    if (contactMessage.value.trim() === '') {
        formValid = false;
        alert('Message cannot be empty');
    }

    if (formValid) {
        // Simulate form submission (in real case, you would submit the form here)
        alert('Form submitted successfully!');
        // Reset the form after submission
        contactForm.reset();
    }
});

// 3. Gallery hover effect: Show text when hovering over images
const galleryImages = document.querySelectorAll('.gallery-image');

galleryImages.forEach(image => {
    image.addEventListener('mouseenter', function () {
        this.style.opacity = '0.7'; // Makes image a bit transparent when hovered
    });

    image.addEventListener('mouseleave', function () {
        this.style.opacity = '1'; // Restores full opacity when mouse leaves
    });
});

// 4. Scroll-to-top button: Show the button when scrolling down
const scrollToTopButton = document.createElement('button');
scrollToTopButton.textContent = '↑';
scrollToTopButton.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopButton);

// Show or hide the scroll-to-top button based on the scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// Scroll to the top of the page when the button is clicked
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});