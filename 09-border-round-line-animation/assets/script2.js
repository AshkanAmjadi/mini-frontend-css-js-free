

let bx = document.querySelector('.bx')
anime.utils.set('.bx', {
    '--deg': '0deg',
    '--os': '0%',
    '--of': '100%',
})
bx.addEventListener('mouseenter', e => {
    
    anime.animate('.bx', {
        '--os': '50%',
        '--of': '50%',
        duration: 300,
        ease: 'inOut'
    })

})

bx.addEventListener('mousemove', e => {

    let deg = calcDeg(e, bx) - 90
    anime.animate('.bx', {
        '--deg': deg+'deg',
        duration: 500,
        
    })
    

})

bx.addEventListener('mouseleave', e => {

    
    // console.log('b');
    anime.animate('.bx', {
        '--os': '0%',
        '--of': '100%',
        duration: 300,
        ease: 'inOut'
    })

})


function calcDeg(mouse, element) {
    let x = mouse.offsetX;
    let y = mouse.offsetY;

    let w = element.getBoundingClientRect().width / 2;
    let h = element.getBoundingClientRect().height / 2;

    let deltaX = w - x;
    let deltaY = h - y;

    let rad = Math.atan2(deltaY, deltaX)

    let deg = Math.round(rad * (180 / Math.PI))

    if (deg < 0) {
        deg = (deg + 360) % 360
    }

    return deg
}