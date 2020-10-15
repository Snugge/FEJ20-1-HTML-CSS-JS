


// Def vars
let name = 'mikel';


// # 1
const hello = function() {
    console.log('Hello world!');
};
// som arrow funktion ->
const helloArr = () => console.log('Hello world!');




// # 2
const greet = function(name) {
    console.log('Hej ' + name + ' hur mår du?');
};

// som arrow funktion ->
const greetArr = (name) => {
    console.log(`Hej ${name} hur mår du?`);
};




// # 3
const calc = function(numberOne, numberTwo) {
    return numberOne + numberTwo;
};
// som arrow funktion ->
const calcArr = (num1, num2) => num1 + num2;





// # 4
const tip = function(sum, percent) {
    let total = sum + sum * percent;
    return total;
};


// som arrow funktion ->
const tipArr = (sum, procent) => {
    let total = sum + sum * procent;
    return total;
};


// # Bonus 
// Riktig räknare som räknar rätt kring dricks
const tipArrReal = (sum, procent) => {
    //let total = sum + sum * procent;
    calcProcent = procent / 100;
    let total = calcProcent * sum;
    return total;
};


// ######## Körningar för ovan


//hello();
helloArr();

//greet('mikael');
greetArr('mike');

//console.log(calc(10,5));
console.log(calcArr(10,5));


//console.log(tip(100, 2));
console.log(tipArr(100, 2));

//  Extra  dricksräknare
console.log('Det här är en dricksräknare som fungerar: ' + tipArrReal(200, 10) +'kr i dricks.');

