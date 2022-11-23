
const numberButtons = document.querySelectorAll(".number-btn")
const cancelButton = document.querySelector(".cancel-btn")
const clearButton = document.querySelector(".clear-btn")
const enterButton = document.querySelector(".enter")
const currentNumber = document.querySelector(".output")

class pinCode {
    constructor(currentNumber) {
        this.currentNumber = currentNumber
        this.clear()
    }

    clear (){
        this.cntNumber = ''
    }

    cancel (){
        this.cntNumber = this.cntNumber.toString().slice(0, -1)
    }

    pushNumber(number){
        this.cntNumber = this.cntNumber.toString() + number.toString()
    }

    enter (){
        const currentValue = parseFloat(this.cntNumber)
        this.cntNumber = currentValue
        alert("Your pincode: " + currentValue)
        this.cntNumber = ''
    }

    updateContent(){
        this.currentNumber.innerText = this.cntNumber
    }
}

const pin = new pinCode (currentNumber)

numberButtons.forEach(button =>{
    button.addEventListener('click', () =>{
        pin.pushNumber(button.innerText)
        pin.updateContent()
    })
})

clearButton.addEventListener('click', () => {
    pin.clear()
    pin.updateContent()
})

cancelButton.addEventListener('click', () => {
    pin.cancel()
    pin.updateContent()
})

enterButton.addEventListener('click', () => {
    pin.enter()
    pin.clear()
    pin.updateContent()
})




