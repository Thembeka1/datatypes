let petName = 'Rocky' 
myFunction()
function myFunction() {
fruit = 'apple'; 
console.log(typeof petName + '- ' + 'My pet name is ' +petName)
}
console.log(typeof petName + '- ' + 'My pet name is ' + petName + 'Fruit name is ' + fruit)



function showNumberTypes() {
    let age = 30;
    let weight = 12.5;
    console.log(typeof age + ' - Age: ' + age);
    console.log(typeof weight + ' - Weight: ' + weight);
}


function showStringType() {
    let name = "Rocky";
    console.log(typeof name + ' - Name: ' + name);
}


function showBooleanType() {
    let isPet = true;
    console.log(typeof isPet + ' - Is it a pet? ' + isPet);
}


function showUndefinedType() {
    let notSet;
    console.log(typeof notSet + ' - This variable is declared but not defined');
}


function showNullType() {
    let emptyValue = null;
    console.log(typeof emptyValue + ' - Null value');
}


function showObjectType() {
    let pet = {
        name: "Rocky",
        weight: 12.5,
        type: "dog"
    };
    console.log(typeof pet + ' - Pet object: ' + JSON.stringify(pet));
}


function showArrayType() {
    let colors = ['red', 'blue', 'green'];
    console.log(typeof colors + ' - Favorite colors: ' + colors.join(', '));
}


function showFunctionType() {
    function greet() {
        return "Hello!";
    }
    console.log(typeof greet + ' - Greeting: ' + greet());
}


function showSymbolType() {
    let id = Symbol('id');
    console.log(typeof id + ' - Symbol');
}


function showBigIntType() {
    let bigNumber = 1234567890123456789012345678901234567890n;
    console.log(typeof bigNumber + ' - BigInt number');
}

