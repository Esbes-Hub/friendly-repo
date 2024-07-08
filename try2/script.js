// script.js
document.addEventListener('DOMContentLoaded', () => {
    const admissionForm = document.getElementById('admission-form');
    const successMessage = document.getElementById('success-message');

    admissionForm.addEventListener('submit', async (e) => {
        e.preventDefault(); // Prevent default form submission

        // Get form data
        const formData = new FormData(admissionForm);

        try {
            // Send data to Google Sheets
            const response = await fetch(admissionForm.action, {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                // Display success message
                successMessage.textContent = 'Form submitted successfully';
                // Clear form fields
                admissionForm.reset();
            } else {
                console.error('Error submitting form:', response.statusText);
            }
        } catch (error) {
            console.error('Error submitting form:', error.message);
        }
    });
});
