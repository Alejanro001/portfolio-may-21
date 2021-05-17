
//This is the functionallity of the hamburger menu
document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
});
//THIS IS FOR THE TYPEWRITER EFFECT


//


let centriqCert = document.querySelector('.centriqCert')
let gaCert = document.querySelector('.ga-cert')
// let animateOnView = function(element, animation){
//   element.getBoundingClientRect().top < window.innerHeight && element.classList.add(animation)
// }
// window.addEventListener('scroll',animateOnView(centriqCert, 'animate_fadeInLeft'))
  
  // animateOnView(gaCert, 'animate_fadeInRight')

window.addEventListener('scroll', ()=>{
  centriqCert.getBoundingClientRect().top < window.innerHeight && centriqCert.classList.add('animate__fadeInLeft')
  gaCert.getBoundingClientRect().top < window.innerHeight && gaCert.classList.add('animate__fadeInRight')
} )






