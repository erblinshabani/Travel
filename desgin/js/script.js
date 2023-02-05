let navbar = document.querySelector('.eg-header .flex .navbar');
const menuBtn = document.querySelector('#menu-btn')


menuBtn.onclick = () =>{
   navbar.classList.toggle('active');
   menuBtn.classList.toggle('active-btn')
}

window.onscroll = () =>{
   navbar.classList.remove('active');
   menuBtn.classList.remove('active-btn')
}

document.querySelectorAll('input[type="number"]').forEach(inputNumber => {
   inputNumber.oninput = () =>{
      if(inputNumber.value.length > inputNumber.maxLength) inputNumber.value = inputNumber.value.slice(0, inputNumber.maxLength);
   };
});

AOS.init({
   duration: 400,
   delay: 200,
});