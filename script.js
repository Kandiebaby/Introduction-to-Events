document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('myForm');
            const username = document.getElementById('username');
            const status = document.getElementById('status');

            // Handle form submission
            form.addEventListener('submit', function(event) {
                console.log('Form submitted');
                event.preventDefault(); // Prevent the actual form submission
                alert(`Username: ${username.value}, Status: ${status.value}`);
            });

            // Handle changes in the select menu
            status.addEventListener('change', function() {
                console.log('Selection changed to:', this.value);
            });

            // Handle real-time input changes in the username field
            username.addEventListener('input', function() {
                console.log('Input changed: ', this.value);
            });
});
