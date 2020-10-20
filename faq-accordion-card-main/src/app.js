const accordion = document.querySelectorAll('.accordion');
const panels = document.querySelectorAll('.panel');

accordion.forEach(button  => {
 button.addEventListener('click' , function () {
    const panel = this.nextElementSibling;
    console.log(panel)
    if(panel.style.maxHeight){
        panel.style.maxHeight = null ;
    } else {
        let active = document.querySelectorAll('a.accordion.active');
         for(let i = 0; i < active.length; i++){
            active[i].classList.remove('active');
            active[i].nextElementSibling.style.maxHeight = null;
         }
    
    }
    this.classList.toggle('active');
    panel.style.maxHeight = panel.scrollHeight + 'px';
 })
})
