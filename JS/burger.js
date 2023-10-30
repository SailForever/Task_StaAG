const menu=document.querySelector('.menu__burger');
const link=document.querySelector('.menu__link');
const linkTap=document.querySelectorAll('.menu__link a');

menu.onclick=function() {
  menu.classList.toggle('active');
  link.classList.toggle('active');
}

linkTap.forEach(item =>{ 
        item.addEventListener('click', (e) =>{
        linkTap.forEach(el=>{ el.classList.remove('active'); });
        menu.classList.remove('active')
        link.classList.remove('active')
    })
})