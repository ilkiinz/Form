const userForm = document.querySelector('.user-form'); 
const subscribeCheckbox = document.querySelector('.acceptance'); 
userForm.addEventListener('submit', (event) => { 
    event.preventDefault(); 
    if (subscribeCheckbox.checked) { 
        alert('Kart qeydiyyatdan keçdi'); 
        const data = new FormData(event.target); 
        console.log(data.get('firstname')); 
        console.log(data.get('lastname')); 
        console.log(data.get('gender')); 
        console.log(data.get('age')); 
        console.log(data.get('email')); 
        console.log(data.get('tel')); 
        console.log(data.get('text')); 
    } else { 
        alert('Kart qeydiyyatdan keçmədi'); 
    } 
 
});