


const link = document.createElement('link');
let baseurl = '../shared-core/styles/'
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = baseurl + 'other/border-anim.css';

export function initBordrAnimation() {

    document.head.appendChild(link);
    document.querySelectorAll('.border-animation').forEach(el => {

        anime.utils.set(el, {
            '--deg': '0deg',
            '--os': '0%',
            '--of': '100%',
        })
        el.addEventListener('mouseenter', e => {

            anime.animate(el, {
                '--os': '50%',
                '--of': '50%',
                duration: 300,
                ease: 'inOut'
            })

        })

        el.addEventListener('mousemove', e => {

            let deg = calcDeg(e, el) - 90
            anime.animate(el, {
                '--deg': deg + 'deg',
                duration: 500,

            })


        })

        el.addEventListener('mouseleave', e => {


            // console.log('b');
            anime.animate(el, {
                '--os': '0%',
                '--of': '100%',
                duration: 300,
                ease: 'inOut'
            })

        })

    })


}

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