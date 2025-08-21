window.addEventListener('load' , e=>{


    

document.querySelectorAll('.counter').forEach(el=>{

    let start = 0;
    let degree = el.dataset.degree;
    let color = el.style.getPropertyValue('--clr');


    el.style.setProperty('--indY' , - (el.clientHeight/2 -1) + 'px')
    

    let interval = setInterval(()=>{
        if(start >= degree){
            clearInterval(interval)
            return;
        }
        start++
        
        
        el.style.setProperty('--indDeg' , 360 / 100 * start + 'deg')
        el.querySelector('.holder p').textContent  = start + '%';
        el.style.setProperty('--prs' , start +'%');

    },10);
    

})




})