//event listener grabs value and places it in input window 
//event listener grabs operator when operator buttons are pushed 
//function adds operator to existing values (a + +)
//event lister grabs new value and adds it to existing expression (a + b)
//event listener grabs '=' signs and completes express
//document.querySelector returns value to input window


// const buttonInput = document.querySelectorAll('li');  

// buttonInput.forEach(button =>{
//     button.addEventListener('click', grab);
// })

// function grab(event) {
//     const value = event.target.textContent;
//     // document.querySelector('input').innerText = value
//     console.log(value)  
// }

const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator_keys')
const display = calculator.querySelector('.calculator_display')

keys.addEventListener('click', event => {
    if (!event.target.closest('button')) return

    const key = event.target
    const keyValue = key.textContent
    const displayValue = display.textContent
    const {type} = key.dataset
    const {previousKeyType} = calculator.dataset

    //is this a number key?
    if (type === 'number') {
        if (displayValue === '0') {
            display.textContent = keyValue
        } else if (previousKeyType === 'operator') {
            display.textContent = keyValue
        } else {
            display.textContent = displayValue + keyValue
        }
        previousKeyType = 'number'
}

    // is this an operator key?
    if (type === 'operator') {
        console.log(key)
    
    previousKeyType = 'operator'
    }


    
})