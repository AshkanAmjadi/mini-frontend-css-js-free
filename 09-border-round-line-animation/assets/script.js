

let bx = document.querySelector('.bx')
let os = 0;
let of = 100;
bx.style.setProperty('--os', os + '%')
bx.style.setProperty('--of', of + '%')
let Interval;
let delay;


bx.addEventListener('mouseenter', e => {


    let deg = calcDeg(e, bx) - 90
    bx.style.setProperty('--deg', deg + 'deg');

    delay = setTimeout(() => {
        clearInterval(Interval)

        Interval = setInterval(() => {

            // console.log('a');

            if (os >= 0 && os < 50) {
                os++
                bx.style.setProperty('--os', os + '%');

            }
            if (of <= 100 && of > 50) {
                of--
                bx.style.setProperty('--of', of + '%');
            }

            if (of == 50 && os == 50) {
                clearInterval(Interval)
            }



        }, 5);
    }, 50)


})



bx.addEventListener('mouseleave', e => {


    clearTimeout(delay)
    let deg = calcDeg(e, bx) - 90

    setTimeout(() => {
        bx.style.setProperty('--deg', deg + 'deg');

        clearInterval(Interval)
        Interval = setInterval(() => {
            // console.log('b');
            if (os > 0 && os <= 50) {
                os--
                bx.style.setProperty('--os', os + '%');
            }
            if (of < 100 && of >= 50) {
                of++
                bx.style.setProperty('--of', of + '%');
            }
            if (of == 100 && os == 0) {
                clearInterval(Interval)
            }


        }, 3);

    }, 150)


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