let textel = document.querySelector(".text");
let textCon = textel.textContent;



window.addEventListener("load", (e) => {
  splitText();


  let indicator = textel.querySelector('.i');
  setTimeout(function () {
  

    let spans = textel.querySelectorAll("span");
    let time = 0
    spans.forEach((el, index) => {
      

      let spanrect = el.getBoundingClientRect()
      let wraperrect = textel.getBoundingClientRect()

      let random = Math.round(Math.random() * 400 + 100);
      time += random;
      

      setTimeout(function () {
        indicator.style.opacity = '1';
        indicator.style.top = spanrect.y - wraperrect.y +'px';
        indicator.style.left = spanrect.x - wraperrect.x + spanrect.width +'px';
        el.style.color = "#fd9800ff";
        el.style.opacity = "1";
        if(index === spans.length - 1){

          setTimeout(()=>{
             indicator.style.opacity = 0;
          },300)

        }
      }, time );


    });




  }, 200);
});

function splitText() {
  textel.innerHTML = "";
  textCon.split(" ").forEach((word) => {
    textel.insertAdjacentHTML("beforeend", `<span>${word}</span> `);
  });

  textel.insertAdjacentHTML("afterbegin", `<i class="i"></i>`);

}
