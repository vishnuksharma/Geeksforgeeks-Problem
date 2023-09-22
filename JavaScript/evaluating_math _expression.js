function operate(a, b, op) {
    switch(op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
        default: throw new Error('Unsupported operator: ' + op);
    }
}

function evaluateMathExpression(expr) {
    let tokens = expr.split(' ');
    
    let values = [];
    let ops = [];
    
    for(let token of tokens) {
        if (!isNaN(token)) {
            values.push(parseFloat(token));
        } else if('+-*/'.includes(token)) {
            while (ops.length && '*/'.includes(ops[ops.length - 1]) && '+-'.includes(token)) {
                let value2 = values.pop();
                let value1 = values.pop();
                values.push(operate(value1, value2, ops.pop()));
            }
            ops.push(token);
        }
    }
    
    while(ops.length) {
        let value2 = values.pop();
        let value1 = values.pop();
        values.push(operate(value1, value2, ops.pop()));
    }
    
    return values[0];
}

const expression = "3 + 4 * 2 + ( 3 - 6 / 1 )"; 
const result = evaluateMathExpression(expression);
console.log(result);  // Outputs: 11
