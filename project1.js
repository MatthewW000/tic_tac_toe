//cursor not allowed is a css style that can not allow you to select certain elemtns
const cells = document.querySelectorAll(`[data-cell]`)
const resetButton = document.querySelector(`.reset-btn`)
var counter = 0

// const WINNING_COMBINATIONS = [
//     [0, 1, 2], 1
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
//   ]

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var result = document.querySelector(`.result`)

const BLUE_WINS = `blue wins`

const RED_WINS = `red wins`



function showEnd() {{

    modal.style.display = "block";
    }

}
  

function changeColor(event) {
    if (event.target.style.backgroundColor == ``) { 
        if (counter %2 == 0 ){ 
        event.target.style.backgroundColor = `red`
        } else {
            event.target.style.backgroundColor = `blue`
        }  
        counter++
    }  
//check to see who wins wins
    if (cells[0].style.backgroundColor ===  
        cells[1].style.backgroundColor && 
        cells[1].style.backgroundColor ===
        cells[2].style.backgroundColor &&
        cells[0].style.backgroundColor != ``) {
        showEnd() ;
        if (event.target.style.backgroundColor == `red`) {
            result.innerHTML = `red wins`
        }else if (event.target.style.backgroundColor == `blue`) {
            result.innerHTML = `blue wins`
        }
    }
    if (cells[3].style.backgroundColor ===  
        cells[4].style.backgroundColor && 
        cells[4].style.backgroundColor ===
        cells[5].style.backgroundColor &&
        cells[3].style.backgroundColor != ``) {
        showEnd()
        if (event.target.style.backgroundColor == `red`) {
            result.innerHTML = `red wins`
        }else if (event.target.style.backgroundColor == `blue`) {
            result.innerHTML = `blue wins`
        }
    }
    if (cells[6].style.backgroundColor ===  
        cells[7].style.backgroundColor && 
        cells[7].style.backgroundColor ===
        cells[8].style.backgroundColor &&
        cells[6].style.backgroundColor != ``) {
        showEnd()
        if (event.target.style.backgroundColor == `red`) {
            result.innerHTML = `red wins`
        }else if (event.target.style.backgroundColor == `blue`) {
            result.innerHTML = `blue wins`
        }
    }
    if (cells[0].style.backgroundColor ===  
        cells[3].style.backgroundColor && 
        cells[3].style.backgroundColor ===
        cells[6].style.backgroundColor &&
        cells[0].style.backgroundColor != ``) {
        showEnd()
        if (event.target.style.backgroundColor == `red`) {
            result.innerHTML = `red wins`
        }else if (event.target.style.backgroundColor == `blue`) {
            result.innerHTML = `blue wins`
        }
    }
    if (cells[1].style.backgroundColor ===  
        cells[4].style.backgroundColor && 
        cells[4].style.backgroundColor ===
        cells[7].style.backgroundColor &&
        cells[1].style.backgroundColor != ``) {
        showEnd()
        if (event.target.style.backgroundColor == `red`) {
            result.innerHTML = `red wins`
        }else if (event.target.style.backgroundColor == `blue`) {
            result.innerHTML = `blue wins`
        }
    }
    if (cells[2].style.backgroundColor ===  
        cells[5].style.backgroundColor && 
        cells[5].style.backgroundColor ===
        cells[8].style.backgroundColor &&
        cells[2].style.backgroundColor != ``) {
        showEnd()
        if (event.target.style.backgroundColor == `red`) {
            result.innerHTML = `red wins`
        }else if (event.target.style.backgroundColor == `blue`) {
            result.innerHTML = `blue wins`
        }
    }
    if (cells[0].style.backgroundColor ===  
        cells[4].style.backgroundColor && 
        cells[4].style.backgroundColor ===
        cells[8].style.backgroundColor &&
        cells[0].style.backgroundColor != ``) {
        showEnd()
        if (event.target.style.backgroundColor == `red`) {
            result.innerHTML = `red wins`
        }else if (event.target.style.backgroundColor == `blue`) {
            result.innerHTML = `blue wins`
        }
    }
    if (cells[2].style.backgroundColor ===  
        cells[4].style.backgroundColor && 
        cells[4].style.backgroundColor ===
        cells[6].style.backgroundColor &&
        cells[2].style.backgroundColor != ``) {
        showEnd()
        if (event.target.style.backgroundColor == `red`) {
            result.innerHTML = `red wins`
        }else if (event.target.style.backgroundColor == `blue`) {
            result.innerHTML = `blue wins`
        }
    }
    if (counter == 9){
        showEnd()
        result.innerHTML = `its a draw!`
        }
    //     //your end of function is below 
     }

     function resetGame(event) {
         let theOneTheUserClickedOn = event.target

         if (theOneTheUserClickedOn === resetButton){
             cells.forEach(cells => {
                cells.style.backgroundColor = ``
             });
             modal.style.display = `none`
             counter = 0
         }
     }
     function checkWin(event) {
         let theOneTheUserClickedOn = event.target
         if (theOneTheUserClickedOn.backgroundColor.style = `blue`){

         }

     }
//list of cells to change to red or blue
cells[0].addEventListener(`click`, changeColor)
cells[1].addEventListener(`click`, changeColor)
cells[2].addEventListener(`click`, changeColor)
cells[3].addEventListener(`click`, changeColor)
cells[4].addEventListener(`click`, changeColor)
cells[5].addEventListener(`click`, changeColor)
cells[6].addEventListener(`click`, changeColor)
cells[7].addEventListener(`click`, changeColor)
cells[8].addEventListener(`click`, changeColor)

//reset game listener
resetButton.addEventListener(`click`,resetGame)