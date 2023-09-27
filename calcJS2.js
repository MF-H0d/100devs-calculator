let listOfNumButtons = document.querySelectorAll('.button[data-type=number]')
let listOfOperatorButtons = document.querySelectorAll('.op_btn')
let calcDisplay = document.querySelector('.calculator_display')
let firstVal = calcDisplay.textContent
let operator
let secondValue

for (let i = 0; i < listOfNumButtons.length; i++) {

    listOfNumButtons[i].addEventListener('click', function () {
        const eventValue = this.textContent;
        let newValue
        if (operator) {
            newValue = secondValue ? secondValue + eventValue : eventValue
            secondValue = newValue
        } else {
            newValue = firstVal === '0' ? eventValue : firstVal + eventValue;
            firstVal = newValue
        }
        calcDisplay.innerHTML = newValue
    })
}


for (let i = 0; i < listOfOperatorButtons.length; i++) {

    listOfOperatorButtons[i].addEventListener('click', function (event) {
        operator = event.target.textContent
        console.log(operator)
        calcDisplay.innerHTML = ""

//operator buttons printing NaN to calc screen..create separate '.btn' class that is tied directly to button elements of only the operator buttons

        switch (operator) {
                case '/':
                    return firstVal / secondValue
                    break;
                case 'x':
                    return firstVal * secondValue
                    break
                case '+':
                    return firstVal + secondValue
                    break
                case '-':
                    return firstVal - secondValue
                    break
                default:
                    break;
            }
    })
}

document.querySelector('.button[data-type=equals]').addEventListener('click', function (event){
    calcDisplay.innerHTML = eval(firstVal + operator + secondValue)
})








// if(calcDisplay.textContent.length > 14){
//     calcDisplay = calcDisplay.classList.add('calculator_display2')
// }else{
//     calcDisplay
// }





