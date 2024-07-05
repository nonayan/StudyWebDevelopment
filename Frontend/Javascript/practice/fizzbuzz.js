var output = [];
console.log(fizzBuzz());
console.log(fibonacciGenerator(20));

function fizzBuzz() {
    var output = []
    var count = 1;
    while (count <= 100) {
        if (count % 3 == 0 && count % 5 == 0) {
            output.push("FizzBuzz");
        } else if (count % 3 == 0) {
            output.push("Fizz");
        } else if (count % 5 == 0) {
            output.push("Buzz");
        } else {
            output.push(count);
        }
        count++;
    }
    return output;
}

function fibonacciGenerator(num) {
    var output = []
    var firstNum = -1;
    var secondNum = 1;
    var sum = 0;

    for (let i = 0; i < num; i++) {
        sum = firstNum + secondNum;
        output.push(sum);
        firstNum = secondNum;
        secondNum = sum;
    }
    return output;
}