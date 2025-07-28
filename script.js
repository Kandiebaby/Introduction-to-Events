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


  function handleFocus() {
            document.getElementById('username').style.background = 'lightblue';
        }
    
 function validateAge() {
            var age = document.getElementById('ageInput');
            var ageValue = parseInt(age.value, 10);

            if (isNaN(ageValue)) {
                age.style.backgroundColor = '#ffdab9';
                console.log('Please enter a valid number')
            
            } else if (ageValue >= 18) {
                age.style.backgroundColor = 'lightgreen'; 
                console.log('You are an adult.');
            } else {
                age.style.backgroundColor = '#f4c5b9ff'; 
                console.log('You are too young.');
            }
        }

         
        const list = document.getElementById('itemList');

        
        list.addEventListener('click', function(event) {
            if (event.target.tagName === 'LI') {
                alert('You clicked: ' + event.target.textContent);
                event.target.style.backgroundColor = '#d8bfd8'; m
            }
        });