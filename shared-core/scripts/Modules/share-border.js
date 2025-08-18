export function makeRipple() {


    document.querySelectorAll(".share-border").forEach((box) => {

        let func = function (event) {
            // console.log(event.pageY - e.offsetTop);
            // console.log(event.pageX - e.offsetLeft);

            let aria = 120;

            let rects = box.getBoundingClientRect();

            let ariaY = event.pageY - (box.offsetTop - aria);
            let ariaYmax = rects.height + aria * 2;
            let ariaX = event.pageX - (box.offsetLeft - aria);
            let ariaXmax = rects.width + aria * 2;

            if (ariaY > 0 && ariaY < ariaYmax && ariaX > 0 && ariaX < ariaXmax) {
                box.style.setProperty("--x", event.pageX - box.offsetLeft + "px");
                box.style.setProperty("--y", event.pageY - box.offsetTop + "px");

                box.style.setProperty("--o", "0.5");
            } else {
                box.style.setProperty("--o", "0");
            }
        };
        window.addEventListener("mousemove", func);
        window.addEventListener("scroll", func);
    });

}
