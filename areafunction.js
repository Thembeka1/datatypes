prompt = require ('prompt-sync')();
let x= prompt("type length and breadth:");
let y= prompt("type another number:");
let length = parseInt(x);
let breadth= parseInt(y);

function area(length, breadth){
    this.length=length;
    this.breadth=breadth;
    let answer = length*breadth;
    return answer;
}
console.log(area(length,breadth))