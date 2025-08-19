

import { createHeader } from "./scripts/Modules/header.js";
import { initBordrAnimation } from "./scripts/Modules/border-animation.js";
import { loadScript } from "./scripts/Modules/loader.js";
import { makeRipple } from "./scripts/Modules/share-border.js";
// import { delay } from "./scripts/Modules/helper/helper.js"






async function init() {

  try {

    setGlowEvent()
    await loadScript('../shared-core/scripts/anime.iife.min.js');
    await createHeader();
    makeRipple();
    initBordrAnimation();

  } catch (error) {
    console.error("اجرای برنامه با مشکل مواجه شد:", error);
    document.getElementById('app').innerHTML = `<p style="color: red;">خطا در بارگذاری منابع برنامه.</p>`;
  }


}
window.addEventListener("load", (e) => {

  init()

});







function setGlowEvent() {


  window.addEventListener("click", (e) => {

    document.querySelector('.glow')?.remove()
    let target = e.target
    if (target.matches('.ripple')) {
      let x = e.offsetX;
      let y = e.offsetY;
      target.insertAdjacentHTML('afterbegin', `<div class="glow" style="top : ${y}px ; left: ${x}px;"></div>`)
    }

  });

}

function generateRandomColor() {
  const hexDigits = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hexDigits[Math.floor(Math.random() * 16)];
  }
  return color;
}