let listOfNumButtons = document.querySelectorAll('.button[data-type=number]').length
let listOfOperatorButtons = document.querySelectorAll('.button[data-type=operator]').length
let calcDisplay = document.querySelector('.calculator_display')



// const operators = {
//     add: function(n1, n2) {
//         return n1 + n2
//     }
//     subtract: function(n1, n2){
//         return n1 - n2
//     }
//     multiply: function(n1, n2){
//         return n1 * n2
//     }
//     divide: function(n1, n2){
//         return n1 / n2
//     }
// }

for (let i = 0; i < listOfNumButtons; i++) {

    document.querySelectorAll('.button[data-type=number]')[i].addEventListener('click', function () {
        const currentValue = calcDisplay.textContent
        const eventValue = this.textContent
        let newValue = currentValue === '0' ? eventValue : currentValue + eventValue

       

        calcDisplay.innerHTML = newValue



    })
}

for (let i = 0; i < listOfOperatorButtons; i++) {

    document.querySelectorAll('.button[data-type=operator]')[i].addEventListener('click', function () {
        let eventValue = this.textContent
        document.querySelector('.calculator_display').innerHTML = eventValue
    })
}




