
let grid = document.querySelector('.grid')


for (let i = 0; i < 100; i++) {
    let cell = document.createElement('div');
    cell.classList.add('cell')
    grid.appendChild(cell)
}


grid.addEventListener('mousemove', e => {


    let rect = grid.getBoundingClientRect();
    let mouseX = e.clientX;
    let mouseY = e.clientY;
    grid.querySelectorAll('.cell').forEach(cell => {

        let cellrect = cell.getBoundingClientRect();
        let cellX = cellrect.left + cellrect.width / 2;
        let cellY = cellrect.top + cellrect.height / 2;
        let distance = Math.hypot(mouseX - cellX, mouseY - cellY);

        if (distance < 100) {

            let angle = Math.atan2(mouseX - cellX, mouseY - cellY) * 180 / Math.PI;

            cell.style.transform = `rotate(${-angle + 180}deg)`;
            cell.classList.add('active')
        } else {
            cell.style.transform = `rotate(0deg)`;
            cell.classList.remove('active')
        }

    })




})


grid.addEventListener('mouseleave', e => {
    grid.querySelectorAll('.cell').forEach(cell => {
        cell.style.transform = `rotate(0deg)`;
        cell.classList.remove('active')
    })
})