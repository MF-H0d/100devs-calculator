//event listener grabs value and places it in input window 
//event listener grabs operator when operator buttons are pushed 
//function adds operator to existing values (a + +)
//event lister grabs new value and adds it to existing expression (a + b)
//event listener grabs '=' signs and completes express
//document.querySelector returns value to input window


const buttonInput = document.querySelectorAll('li');  

buttonInput.forEach(button =>{
    button.addEventListener('click', grab);
})

// const display = document.getElementById('screen', calculate)
// const buttons = document.querySelectorAll('button')

// let calculation = []  

function grab(event) {
    const value = event.target.textContent;
    // document.querySelector('input').innerText = value
    console.log(value)  
}
