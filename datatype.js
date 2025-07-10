let petName = 'Rocky' // Global variable
myFunction()
function myFunction() {
fruit = 'apple'; // Considered global
console.log(typeof petName + '- ' + 'My pet name is ' +petName)
}
console.log(typeof petName + '- ' + 'My pet name is ' + petName + 'Fruit name is ' + fruit)


// 1. Number (Integer and Float)
function showNumberTypes() {
    let age = 30;
    let weight = 12.5;
    console.log(typeof age + ' - Age: ' + age);
    console.log(typeof weight + ' - Weight: ' + weight);
}

// 2. String
function showStringType() {
    let name = "Rocky";
    console.log(typeof name + ' - Name: ' + name);
}

// 3. Boolean
function showBooleanType() {
    let isPet = true;
    console.log(typeof isPet + ' - Is it a pet? ' + isPet);
}

// 4. Undefined
function showUndefinedType() {
    let notSet;
    console.log(typeof notSet + ' - This variable is declared but not defined');
}

// 5. Null
function showNullType() {
    let emptyValue = null;
    console.log(typeof emptyValue + ' - Null value');
}

// 6. Object
function showObjectType() {
    let pet = {
        name: "Rocky",
        weight: 12.5,
        type: "dog"
    };
    console.log(typeof pet + ' - Pet object: ' + JSON.stringify(pet));
}

// 7. Array
function showArrayType() {
    let colors = ['red', 'blue', 'green'];
    console.log(typeof colors + ' - Favorite colors: ' + colors.join(', '));
}

// 8. Function
function showFunctionType() {
    function greet() {
        return "Hello!";
    }
    console.log(typeof greet + ' - Greeting: ' + greet());
}

// 9. Symbol
function showSymbolType() {
    let id = Symbol('id');
    console.log(typeof id + ' - Symbol');
}

// 10. BigInt
function showBigIntType() {
    let bigNumber = 1234567890123456789012345678901234567890n;
    console.log(typeof bigNumber + ' - BigInt number');
}

