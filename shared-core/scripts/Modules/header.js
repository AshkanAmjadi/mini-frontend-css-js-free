import { noise2 } from "./svg/noise.js";
import {github} from "./svg/other.js";

let darkBtn = `
    <div class="darkBtn ripple border-animation" onclick="document.documentElement.classList.toggle('dark')">
        <div class="content">
        dark
        </div>
    </div>
    `


const details = `
<div class="details">
      
      
     
      
</div>
`
const head = `
<div class="head">
    <img class="profile-img" src="../shared-core/img/me/profile.jpg" alt="">
    <div>
    <p class="username">ashkan amjadi</p>
    <p class="sub">full stack web developer 👨‍💻</p>
    
</div>
</div>
`

const profile = `
<div tabindex="-1" class="profile ">
       
       <div class="content ripple ">
            ${head}
           ${details}
       </div>
       </div>`

const header =
    `
<header id="header">

          
          
       <div class="left">
       
       ${profile}
       <a href="https://github.com/AshkanAmjadi" target="_blank" class="github">
       ${github}
</a>
       
       </div>   
       <div class="middle">
       
        </div>   
       <div class="right">
       ${darkBtn}
</div>  
      <span id="header-bg">
      <span class="noiseimg"></span>
</span>
 
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