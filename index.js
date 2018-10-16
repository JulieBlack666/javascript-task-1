'use strict';

const {
    abProblem,
    centuryByYearProblem,
    colorsProblem,
    fibonacciProblem,
    matrixProblem,
    numberSystemProblem,
    phoneProblem,
    smilesProblem,
    ticTacToeProblem
} = require('./warmup');

// Выведет `2`
console.info(abProblem(1, 1));

// Выведет `21`
console.info(centuryByYearProblem(2018));


// Выведет "(255, 255, 255)"
console.info(colorsProblem('#FFFFFF'));

// Выведет `1`
console.info(fibonacciProblem(1));

// Выведет `[
//    [1, 4, 7],
//    [2, 5, 8],
//    [3, 6, 9]
// ]`
console.info(matrixProblem([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]));

// Выведет "1010101"
console.info(numberSystemProblem(85, 2));

// Выведет `true`
console.info(phoneProblem('8-800-333-51-73'));

// Выведет `2`
console.info(smilesProblem(':-) (-:'));

// Выведет "x"
console.info(ticTacToeProblem([
    ['x', 'x', 'x'],
    ['o', 'o', 'x'],
    ['o', 'x', 'o']
]));
