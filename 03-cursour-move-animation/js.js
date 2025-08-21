window.addEventListener("mousemove", (e) => {
  for (let x = 1; x > 0; x--) {
    let i = document.createElement("i");

    i.style.top = e.pageY + "px";
    i.style.left = e.pageX + "px";

    i.style.setProperty("--x", createRandomTraslationValue());
    i.style.setProperty("--y", createRandomTraslationValue());
    i.style.setProperty("--s", Math.random() + 1);

    setTimeout(() => {
      i.remove();
    }, 1000);

    document.body.appendChild(i);
  }
});

function createRandomTraslationValue() {
    //  let num = (Math.random() * 30 - 15 )  + (Math.random() * 16 -8);
     let num = (Math.random() * 230 - 115 );
  return num + "px";
}
