let eleGrid = document.querySelector('.grid')
let button = document.getElementById('play')
button.addEventListener('click', play) 

function play() {
    eleGrid.innerHTML = ''
    for ( let i = 1; i <= 100; i++) {
    const eleCell = document.createElement('div')
    eleCell.classList.add('cell')
    eleCell.innerHTML = `${i}`
    eleGrid.append(eleCell)

    eleCell.addEventListener('click', function () {
        this.classList.toggle('active')  
    }) 
}
}
