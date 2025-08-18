import { noise2 } from "./svg/noise.js";

let darkBtn = `
    <div class="darkBtn ripple border-animation" onclick="document.documentElement.classList.toggle('dark')">
        <div class="content">
        dark
        </div>
    </div>
    `


const header =
    `
<header id="header">

      <span id="header-bg"></span>
          
       <div class="left">
       
</div>   
       <div class="middle">
       
</div>   
       <div class="right">
       ${darkBtn}
</div>   
</header>

`


const link = document.createElement('link');
let baseurl = '../shared-core/styles/'
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = baseurl + 'header/header.css';

export function createHeader() {

    return new Promise((resolve, reject) => {

        document.head.appendChild(link);
        link.onload = e => {
            resolve(link)
            document.body.insertAdjacentHTML('afterbegin',
                `

                ${noise2}  
                ${header}          
            
            `)
        }

    });





}