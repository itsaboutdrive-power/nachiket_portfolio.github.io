// Get modal elements
const modal = document.getElementById('contactModal');
const btn = document.getElementById('contactBtn');
const span = document.getElementsByClassName('close')[0];

// Open the modal
btn.onclick = function() {
    modal.style.display = 'block';
}

// Close the modal
span.onclick = function() {
    modal.style.display = 'none';
}

// Close the modal if user clicks outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Handle form submission and download data
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const question = document.getElementById('question').value;

    const formData = `Name: ${name}\nEmail: ${email}\nQuestion: ${question}`;

    const blob = new Blob([formData], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'contact_form.txt';
    link.click();

    // Close the modal after submission
    modal.style.display = 'none';
});
