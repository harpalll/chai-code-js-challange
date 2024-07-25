const add = (num1, num2) => {
    if(!num1 || !num2) throw new Error("Please provide both numbers")

    return Number(num1) + Number(num2)
}

const subtract = (num1, num2) => {
    if(!num1 || !num2) throw new Error("Please provide both numbers")

    return Number(num1) - Number(num2)
}

const multiply = (num1, num2) => {
    if(!num1 || !num2) throw new Error("Please provide both numbers")

    return Number(num1) * Number(num2)
}

const divide = (num1, num2) => {
    if(!num1 || !num2) throw new Error("Please provide both numbers")
    if(Number(num2) === 0) throw new Error("denominator cannot be zero.")
    return Number(num1) / Number(num2)
}

export {add, subtract, multiply, divide}

