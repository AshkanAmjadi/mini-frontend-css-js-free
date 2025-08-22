document.querySelectorAll(".magnet").forEach((magnet) => {

  magnet.addEventListener("mouseenter", (e) => {
  
    magnet.style.setProperty('--bxSize' , '30px');
  });

  magnet.addEventListener("mousemove", (e) => {
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    let height = magnet.clientHeight;
    let width = magnet.clientWidth;
    let transX = (mouseX - height / 2)/2;
    let transY = (mouseY - width / 2)/2;

    magnet.style.setProperty("--trx", transX + "px");
    magnet.style.setProperty("--try", transY + "px");
    magnet.style.setProperty("--x-sh", +-transX + "px");
    magnet.style.setProperty("--y-sh", +-transY + "px");
  });

  magnet.addEventListener("mouseout", (e) => {
    magnet.style.setProperty("--trx", "0px");
    magnet.style.setProperty("--try", "0px");
    magnet.style.setProperty("--x-sh", "0px");
    magnet.style.setProperty("--y-sh", "0px");
    magnet.style.setProperty('--bxSize' , '0px');

  });

});
