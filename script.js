const myObserver = new IntersectionObserver( (entries) => {
    entries.forEach( (entry) => {
      if(entry.isIntersecting){
        entry.target.classList.add('show')
      } else {
        entry.target.classList.remove('show')
      }
    })
})

const slideleft = document.querySelectorAll(".slider-left")
const slideright = document.querySelectorAll(".slider-right")

slideleft.forEach((element) => myObserver.observe(element))
slideright.forEach((element) => myObserver.observe(element))


window.onload = function() {
  document.body.style.overflowX = 'hidden';
};

