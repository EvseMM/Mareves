 // Initialize EmailJS with your user ID
 (function(){
    emailjs.init("4GNhh0TE-h_RQjI9E");
})();


// Function to send email using EmailJS
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Send the email using the form data
    
    emailjs.sendForm('service_ytgd8ih', 'template_wirvszi', this)
        .then(function() {
            alert('Message Sent Successfully!');
        }, function(error) {
            alert('Failed to send the message: ' + JSON.stringify(error));
        });
});
