    window.addEventListener('DOMContentLoaded', function(){

        const startTimerButton = document.getElementById('start-timer')
        const timerOuterDiv = document.getElementById('timer-container')
        const grid = document.getElementById('board-container')
        const wordsContainer = document.getElementById('words-container')
        let clearBoardButton;
        let currentWordDiv = document.createElement('div')
        let timerInnerP = document.createElement('p')
        let letterCoordinates = []
        let  time = 0;

        timerOuterDiv.addEventListener('click', function(e){
            if (e.target === startTimerButton) {
                grid.innerHTML = ''
                timerOuterDiv.replaceChild(timerInnerP,startTimerButton)
                time = 3;
                timerInnerP.innerText = time;
                setInterval(countDown, 1000)
                createBoard()
                wordsContainer.innerHTML = `Played Words:
                <ul id='words'></ul>`
                currentWordDiv.innerHTML = `
                    <h2>Current Word:</h2>
                    <p id="letter"></p>
                    <button id='add-word'>Add Word</button><br>
                    <button id='clear-board'>Clear</button>`
                clearBoardButton = document.getElementById('clear-board')
                currentWordDiv.className = 'current-word'
                timerOuterDiv.append(currentWordDiv)
                debugger
            }
            else if (e.target === clearBoardButton) {
                letterCoordinates = []
                currentWordDiv.innerText = ''

            }
        })

        function countDown() {
            if (time > 0){ 
                time--
                timerInnerP.innerText = time
            }
            else if (time === 0) {
                alert('Time\'s up!')
                time = -1
                timerOuterDiv.replaceChild(startTimerButton,timerInnerP)
                currentWordDiv.remove()
                let allItems = document.getElementsByClassName('item')
                
                Array.from(allItems).forEach(item => item.style.backgroundColor = '#80CBC4')
            }
        }


        grid.addEventListener('click', function(e) {
            const letterBar = document.getElementById('letter')

            let letterXId = parseInt(e.target.dataset.xId)
            let letterYId = parseInt(e.target.dataset.yId)
            let letter = e.target.innerText
            if (letterCoordinates.includes([letterXId, letterYId])) {
                alert('You\'ve already played this letter')
            } else if (letterCoordinates.length > 0 && (letterXId >= letterCoordinates[0][0] + 2 || letterYId >= letterCoordinates[0][1] + 2 || letterXId <= letterCoordinates[0][0] - 2 || letterYId <= letterCoordinates[0][1] - 2)) {
                alert('Can\'t click this')
            } else {
                e.target.style.backgroundColor = "red"
                letterCoordinates.unshift([letterXId, letterYId])
                letterBar.innerText += letter
            }
        })

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
            return Math.floor(Math.random() * 5)
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



