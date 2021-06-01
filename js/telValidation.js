let check = document.querySelector('.check');
let number = document.querySelector('.input-data-phone');

let regex = /^\+380\d{3}\d{2}\d{2}\d{2}$/;

check.addEventListener("click",()=>{
    if(number.value ==""){
        alert("Please enter your phone number");
    } else if (number.value.match(regex)){
        alert("Thank you! Your order is accepted");
    } else {
        alert("Your phone number is invalid");
    }
});

