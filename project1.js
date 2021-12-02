//cursor not allowed is a css style that can not allow you to select certain elemtns
const cells = document.querySelectorAll(`[data-cell]`)
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



function changeColor(event) {
    if (event.target.style.backgroundColor == ``) { 
        if (counter %2 == 0 ){ 
        event.target.style.backgroundColor = `red`
        } else {
            event.target.style.backgroundColor = `blue`
        }  
        counter++
    }  
console.log(cells[8].style.backgroundColor)
//check to see if red wins
    if (cells[0].style.backgroundColor ===  
        cells[1].style.backgroundColor && 
        cells[1].style.backgroundColor ===
        cells[2].style.backgroundColor &&
        cells[0].style.backgroundColor != ``) {
            console.log(`${cells[0].style.backgroundColor} you win!`)
        }
        if (cells[3].style.backgroundColor ===  
            cells[4].style.backgroundColor && 
            cells[4].style.backgroundColor ===
            cells[5].style.backgroundColor &&
            cells[3].style.backgroundColor != ``) {
                console.log(`${cells[0].style.backgroundColor} you win!`)
            }
            if (cells[6].style.backgroundColor ===  
                cells[7].style.backgroundColor && 
                cells[7].style.backgroundColor ===
                cells[8].style.backgroundColor &&
                cells[6].style.backgroundColor != ``) {
                    console.log(`${cells[0].style.backgroundColor} you win!`)
                }
    //     if ()

    //     //your end of function is below 
     }
//check to see if blue wins





//list of cells to switch player turn
// cells[0].addEventListener(`click`,testClicks)

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

// console.log(cells[0].addEventListener(`click`)
