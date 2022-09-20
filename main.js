let mune = document.querySelector('#mun-btn');
let nav = document.querySelector('.navbar');
mune.onclick = () =>{
  mune.classList.toggle('fa-times');
  nav.classList.toggle('active');
}
window.onscroll  = () => {
  mune.classList.remove('fa-times');
  nav.classList.remove('active');
}




