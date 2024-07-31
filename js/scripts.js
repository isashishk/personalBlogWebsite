document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const data = `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n`;

    // Create a Blob with the form data
    const blob = new Blob([data], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    // Create a link element and trigger a download
    const a = document.createElement('a');
    a.href = url;
    a.download = 'contact_form.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    // Revoke the object URL after download
    URL.revokeObjectURL(url);

    alert('Form data saved to a file successfully!');
});

