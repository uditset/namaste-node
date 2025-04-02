const sub = (a,b) => {
    console.log("Subtract: " + (a-b))
}

const mult = (a,b) => {
    console.log("Multiply: " +a*b)
}

const divide = (a,b) => {
    console.log("Divide: " + a/b)
}

const percent = (a,b) => {
    console.log("Percentage: " + (a/b)*100);
}

console.log("Arithmetic Operation module is loadedd")

module.exports = {
    subtract: sub,
    multiply: mult,
    divide: divide,
    percentage: percent,
};