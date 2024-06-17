function calculator(a, b, operator) {
    // declare a variable to store the result
    let result;

    // use a switch statement to determine which operation to perform
    switch(operator) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break; 
        case "*":
            result = a * b;
            break;
        case "/":
            result = a / b;
            break;
        default:
            // if the operator is not one of the above, throw an error
            throw new Error("Invalid operator");
    }

    return result;
}

module.exports = calculator;
