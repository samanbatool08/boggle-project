console.log('javascript is running')

const grid = document.querySelector('.container')
const letterBar = document.getElementById('letter')
let numbers = []

grid.addEventListener('click', function(e) {
    let letterXId = parseInt(e.target.dataset.xId)
    let letterYId = parseInt(e.target.dataset.yId)
    let letter = e.target.innerText
    if (numbers.includes([letterXId, letterYId])) {
        alert('You\'ve already played this letter')
    } else if (numbers.length > 0 && (letterXId >= numbers[0][0] + 2 || letterYId >= numbers[0][1] + 2 || letterXId <= numbers[0][0] - 2 || letterYId <= numbers[0][1] - 2)) {
        alert('Can\'t click this')
    } else {
        e.target.style.backgroundColor = "red"
        numbers.push([letterXId, letterYId])
        letterBar.innerText += letter
    }
})

// grid.addEventListener('click', function(e) {
//     if (e.target.dataset.xId + 2 && e.target.dataset.yId + 2)
// })