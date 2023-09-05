let listOfNumButtons = document.querySelectorAll('.button[data-type=number]').length
let listOfOperatorButtons = document.querySelectorAll('.button[data-type=operator]').length
let calcDisplay = document.querySelector('.calculator_display')



const operators = {
    add: function(n1, n2) {
        return this.n1 + this.n2
    },
    sub: function(n1, n2){
        return this.n1 - this.n2
    },
    mult: function(n1, n2){
        return this.n1 * this.n2
    },
    div: function(n1, n2){
        return this.n1 / this.n2
    },
}

for (let i = 0; i < listOfNumButtons; i++) {
    
    document.querySelectorAll('.button[data-type=number]')[i].addEventListener('click', function () {
        const currentValue = calcDisplay.textContent;
        const eventValue = this.textContent;
        let newValue = currentValue === '0' ? eventValue : currentValue + eventValue;
        calcDisplay.innerHTML = newValue;
    })
}


for (let i = 0; i < listOfOperatorButtons; i++) {

    document.querySelectorAll('.button[data-type=operator]')[i].addEventListener('click', function () {
        
        
        currentValue = calcDisplay.textContent;
        let eventValue = this.textContent;
        document.querySelector('.calculator_display').innerHTML = eventValue
    })
}

if(calcDisplay.textContent.length > 14){
    calcDisplay = calcDisplay.classList.add('calculator_display2')
}else{
    calcDisplay
}




