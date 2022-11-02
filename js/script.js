let eleGrid = document.querySelector('.grid')

for ( let i = 1; i <= 100; i++) {
    const eleCell = document.createElement('div')
    eleCell.classList.add('cell')
    eleCell.innerHTML = `${i}`
    eleGrid.append(eleCell)
}