let courses = ["HTML", "Javascript", "React", "CSS"];

//push method add element at the end of array
courses.push("typescript");
//unshift method add element at the beginning of array
courses.unshift("Node.js")
//pop is used to emove elements at thge end of an array
courses.pop("Typescript")
//shift removes elementt the beginning of the array
courses.shift("Nodesjs")

let total = courses.length;
console.log(`Elements inside array courses are ${courses}`);
console.log(`Number of items in an array is ${total}`);

// Join elements with a separator "|"
let separator = courses.join('|');
console.log(`Separated elements: ${separator}`);


let convertor = courses.toString();  

// Change to uppercase
let caps = convertor.toUpperCase(); 

// Change to lowercase
let smalls = convertor.toLowerCase(); 

console.log(`This array becomes a list of strings: ${convertor}`);
console.log(`Testing if string can call uppercase: ${caps}`);
console.log(`Testing if string can be lowercase: ${smalls}`);


let student={
    firstname: "Thembeka",
    Secondname: "Tshidi",
    stipend: 6000

}

console.log(delete student.stipend)
console.log(student)
console.log(student.firstname, student.Secondname)
