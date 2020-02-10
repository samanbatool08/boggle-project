    window.addEventListener('DOMContentLoaded', function(){

        const startTimerButton = document.getElementById('start-timer')
        const timerOuterDiv = document.getElementById('timer-container')
        const grid = document.getElementById('board-container')
        const wordsContainer = document.getElementById('words-container')
        const letterBar = document.getElementById('letter')
        const clearBoardButton = document.getElementById('clear-board')
        const addWordButton = document.getElementById('add-word')
        const submittedWordsUl = document.getElementById('submitted-words-ul')
        const doneButton = document.getElementById('done')
        let allWordsArray = []
        let currentWordContainer = document.getElementById('current-word-container')
        let timerInnerP = document.createElement('p')
        let letterCoordinates = []
        let  time = 0;

        timerOuterDiv.addEventListener('click', function(e){
            if (e.target === startTimerButton) {
                grid.innerHTML = ''
                timerOuterDiv.replaceChild(timerInnerP,startTimerButton)
                time = 3
                timerInnerP.innerText = `Time: ${time}`
                setInterval(countDown, 1000)
                createBoard()
                currentWordContainer.style.visibility = 'visible'
                wordsContainer.style.visibility = 'visible'
            }
        })
        
        currentWordContainer.addEventListener('click', function(e){
            while (time > 0) {
                if (e.target === clearBoardButton) {
                    letterCoordinates = []
                    letterBar.innerText = ''
                    let allItems = document.getElementsByClassName('item')
                    Array.from(allItems).forEach(item => item.style.backgroundColor = '#80CBC4')
                }
                else if (e.target === addWordButton) {
                    allWordsArray.push(letterBar.innerText)
                    createWordLi(letterBar.innerText)
                    letterBar.innerText = ''
                    let allItems = document.getElementsByClassName('item')
                    Array.from(allItems).forEach(item => item.style.backgroundColor = '#80CBC4')
                    letterCoordinates = []
                }
            }
        })

        function createWordLi(word) {
            let wordLi = document.createElement('li')
            wordLi.innerText = word
            submittedWordsUl.appendChild(wordLi)
            console.log(submittedWordsUl)
        }
       

        function countDown() {
            if (time > 0){ 
                time--
                timerInnerP.innerText = `Time: ${time}`
            }
            else if (time === 0) {
                alert('Time\'s up!')
                time = -1
                timerOuterDiv.replaceChild(startTimerButton,timerInnerP)
                currentWordContainer.style.visibility = 'hidden'
                let allItems = document.getElementsByClassName('item')
                Array.from(allItems).forEach(item => item.style.backgroundColor = '#80CBC4')
            }
        }

        grid.addEventListener('click', function(e) {

            let letterXId = parseInt(e.target.dataset.xId)
            let letterYId = parseInt(e.target.dataset.yId)
            let letter = e.target.innerText
            if (letterCoordinates.includes([letterXId, letterYId])) {
                alert('You\'ve already played this letter')
            } else if (letterCoordinates.length > 0 && (letterXId >= letterCoordinates[0][0] + 2 || letterYId >= letterCoordinates[0][1] + 2 || letterXId <= letterCoordinates[0][0] - 2 || letterYId <= letterCoordinates[0][1] - 2)) {
                alert('Can\'t click this')
            } else {
                e.target.style.backgroundColor = '#379683'
                letterCoordinates.unshift([letterXId, letterYId])
                letterBar.innerText += letter
            }
        })

        currentWordContainer.addEventListener('click', function(e) {
            let addButton = e.target
            let wordToAdd = addButton.parentNode.querySelector('p').innerText
            let playedWords = document.getElementById('words')
            let newPlayedWord = document.createElement('li')
            newPlayedWord.innerText = wordToAdd
            playedWords.append(newPlayedWord)
        }) //ends currentwordbox eventlistener

        const letterArrays = [
            ['A','A','E','E','G','N'],
            ['E','L','R','T','T','Y'],
            ['A','O','O','T','T','W'],
            ['A','B','B','J','O','O'],
            ['E','H','R','T','V','W'],
            ['C','I','M','O','T','U'],
            ['D','I','S','T','T','Y'],
            ['E','I','O','S','S','T'],
            ['D','E','L','R','V','Y'],
            ['A','C','H','O','P','S'],
            ['H','I','M','N','Q','U'],
            ['E','E','I','N','S','U'],
            ['E','E','G','H','N','W'],
            ['A','F','F','K','P','S'],
            ['H','L','N','N','R','Z'],
            ['D','E','I','L','R','X']
        ]

        function getRandomIndex() {
            return Math.floor(Math.random() * 6)
        }

        function createBoard() {
            for (let x=0; x < 4; x++){
                for (let y=0; y < 4; y++){
                    let currentLetterIndex = x+y;
                    let currentLetter = letterArrays[currentLetterIndex][getRandomIndex()]
                    grid.insertAdjacentHTML("beforeend", `
                    <div class="item" data-x-id=${x} data-y-id=${y}>${currentLetter}</div>`
                )}
            }
        }
    })



>>>>>>> timer
