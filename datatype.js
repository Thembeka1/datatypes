let petName = 'Rocky' // Global variable
myFunction()
function myFunction() {
fruit = 'apple'; // Considered global
console.log(typeof petName + '- ' + 'My pet name is ' +petName)
}
console.log(typeof petName + '- ' + 'My pet name is ' + petName + 'Fruit name is ' + fruit)

// Number (Integer and Float)
function showNumber() {
    let age = 30;         
    let weight = 12.5;    
    console.log(typeof age + ' - Age: ' + age);
    console.log(typeof weight + ' - Weight: ' + weight);
}
showNumber();


// String
function Myname() {
    let name = "Thembeka";
    console.log(typeof name + ' - Name: ' + name);
}

Myname();

//Boolean
function checkIsAdult() {
    let age = 20;
    let isAdult = age >= 18;
    console.log(typeof isAdult + ' - Is adult? ' + isAdult);
}
checkIsAdult();

// undefined
function missinginfo() {
    let notSet; // Variable declared but no value assigned
    console.log(typeof notSet + ' - This variable is declared but not defined');
}
missinginfo();

//null
function empty() {
    let emptyValue = null;
    console.log(emptyValue,'this is an emptyValue:',);
    console.log( typeof emptyValue,'Type of emptyValue:',);
}
empty();

// object
Deco()
function Deco() {
    let colors = ['red', 'blue', 'green', 'yellow'];
    console.log(typeof colors + ' - Favorite colors: ' + colors.join(', '));
}

// BigInt
Bignumbers()
function Bignumbers() {
    let bigNumber = 1234567890123456789012345678901234567890n;
    console.log(typeof bigNumber + ' - BigInteger number');
}

