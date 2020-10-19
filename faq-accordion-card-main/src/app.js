const accordion = document.querySelectorAll('.accordion');
const panels = document.querySelectorAll('.panel');
accordion.forEach((button , index) => {
 button.addEventListener('click' , function () {
     this.classList.toggle('active');
    const panel = button.nextElementSibling
    panel.style.display === 'block' ?
    panel.style.display = "none" :
     panel.style.display = 'block';
 })
})
