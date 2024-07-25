export const addTwoNumbers = (num1, num2) => {
    if(!num1 || !num2) throw new Error("Please provide both numbers")

    return Number(num1) + Number(num2)
}