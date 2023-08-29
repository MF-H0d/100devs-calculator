let listOfNumButtons = document.querySelectorAll('.button[data-type=number]').length
let listOfOperatorButtons = document.querySelectorAll('.button[data-type=operator]').length
let calcDisplay = document.querySelector('.calculator_display')


// const operators = ()

for (let i = 0; i < listOfNumButtons; i++) {

    document.querySelectorAll('.button[data-type=number]')[i].addEventListener('click', function() {
        let currentValue = this.textContent
        document.querySelector('.calculator_display').innerHTML = currentValue
    })
}

for (let i = 0; i < listOfOperatorButtons; i++) {

    document.querySelectorAll('.button[data-type=operator]')[i].addEventListener('click', function() {
        let currentValue = this.textContent 
        document.querySelector('.calculator_display').innerHTML = currentValue
    })
}




