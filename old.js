function add7(x) {
    return x+7;
}

let multiply = (a, b) => a*b;

let capitalize = function(string) {
    let first = string.charAt(0).toUpperCase();
    let second = string.slice(1)
    let final = first+second;
    return final;
}

let lastLetter = (text) => {
    return result = text.charAt(text.length - 1);
}

function fizzBuzz(number) {
    for (let i = 1; i <= number; i++) {
        if (i % 3 ===0 && i % 5 === 0){
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz")
        } else if (i % 5 ===0) {
            console.log("Buzz");
        } else {
            console.log(i)
        }
    }
}