document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const response = document.getElementById('response');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        response.textContent = `Thank you for your message, ${name}! We will get back to you at ${email}.`;

        form.reset();
    });
});
