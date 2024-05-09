//  ===============Beknazar Oltiboyev=================


let count_number = document.querySelector('.count_number')
let minus = document.querySelector('.minus')
let reset = document.querySelector('.reset')
let plus = document.querySelector('.plus')

let c = 0


minus.addEventListener('click', ()=>{
    c--
    startFunction()
})
reset.addEventListener('click', ()=>{
    c = 0
    startFunction()
})
plus.addEventListener('click', ()=>{
    c++
    startFunction()
})


function startFunction(){
    count_number.innerHTML = c
}
