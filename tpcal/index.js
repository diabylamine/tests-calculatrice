/**
 * @param a number
 * @param b number
 * @return {number}
 */
function Addition (a, b) {
    return a + b;
}

module.exports = Addition;

const DividedByZeroError = require('../Errors/DividedByZeroError');

/**
 * @param a number
 * @param b number
 * @return {number}
 * @throws DividedByZeroError
 */
function Division (a, b) {

    if (0 === b) {
        throw DividedByZeroError.singleton();
    }

    return a / b;
}

module.exports = Division;


module.exports = Multiplication;

/**
 * @param a number
 * @param b number
 * @return {number}
 */
function Multiplication (a, b) {
    return a * b;
}


module.exports = Soustraction;

/**
 * @param a number
 * @param b number
 * @return {number}
 */
function Soustraction (a, b) {
    return a - b;
}
