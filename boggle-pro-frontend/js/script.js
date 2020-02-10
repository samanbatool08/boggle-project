// const ValidWord = {}
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    console.log('javascript is running')

    const grid = document.querySelector('.container')
    const letterBar = document.getElementById('letter')
    let numbers = []
    const currentWordBox = document.getElementById('current-word')
    const doneButton = document.getElementById('done')

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
                numbers.unshift([letterXId, letterYId])
                letterBar.innerText += letter
            }
        }) //ends grid eventlistener

    currentWordBox.addEventListener('click', function(e) {
            let addButton = e.target
            let wordToAdd = addButton.parentNode.querySelector('p').innerText
            let playedWords = document.getElementById('words')
            let newPlayedWord = document.createElement('li')
            newPlayedWord.innerText = wordToAdd
            playedWords.append(newPlayedWord)
        }) //ends currentwordbox eventlistener


    // doneButton.addEventListener('click', function(e) {


    //     }) //ends donebutton eventlistener





}); //ends DOMContentLoaded