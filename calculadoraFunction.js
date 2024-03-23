const calculate = (n1, n2, operation) => {
    let result
    switch (operation) {
        case "+":
            result = n1 + n2
            break;
        case "-":
            result = n1 - n2
            break;
        case "*":
            result = n1 * n2
            break;
        case "/":
            result = n1 / n2
            break;
        default:
            break;
    }
    return result
}

console.log(calculate(2,4,'+'))
console.log(calculate(24,6,'*'))
console.log(calculate(20,10,'/'))
console.log(calculate(80,47,'-'))