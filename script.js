const bars = document.querySelector(".bar"),
close = document.querySelector(".close"),
menu = document.querySelector(".menu");

bars.addEventListener("click",() =>{
   menu.classlist.add("active");
    gsap .from(".menu", {
      opacity:0,
      duration: .3
    })
    gsap .from(".menu ul", {
      opacity:0,
      x: -300
    })
});
close.addEventListener("click",() =>{
    menu.classlist.remove("active");
 });

 function animateContent(selector) {
  selector.forEach((selector) => {
    gsap.to(selector, {
      y:30,
      duration:0.1,
      opacity:1,
      delay:0.2,
      stagger:0.2,
      ease:"power2.out",
    });
  });
 }