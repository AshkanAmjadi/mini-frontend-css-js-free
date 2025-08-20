
window.addEventListener("load", (e) => {
  document.querySelectorAll(".container .box").forEach((box) => {


    

    box.addEventListener("mouseenter", (e) => {
      e.target.classList.add("hover");
      let prev = e.target.previousElementSibling;
      let prev2 = prev?.previousElementSibling;

      let next = e.target.nextElementSibling;
      let next2 = next?.nextElementSibling;

      prev?.classList.add("p1");
      prev2?.classList.add("p2");
      next?.classList.add("n1");
      next2?.classList.add("n2");
    });
    box.addEventListener("mouseleave", (e) => {
      document.querySelectorAll(".hover,.p1,.p2,.n1,.n2").forEach((el) => {
        el.classList.remove("hover", "p1", "p2", "n1", "n2");
      });
    });

  
  });
});



document.querySelectorAll('.box').forEach((el, idx) => {
  el.style.animationDelay = (idx * 0.08) + 's'; // ۰.۱۲ ثانیه به ازای هر آیتم
});
