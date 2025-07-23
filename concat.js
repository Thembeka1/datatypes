//concatenate is a method we use to combine one or join two or more arrays into one.

let intro = ["HTML","css", "javascript"];
let basics = ["Problem solving","Coding", "Git"];
let fundamentals = ["Algorithms","Functions", "Logics"];

let cs =intro.concat(basics, fundamentals)
console.log(cs)

//flat method we use it for reduucing nesting inside an array"also called flatten array

let courses = [["HTML","css", "javascript"],
["Problem solving","Coding", "Git"],
["Algorithms","Functions", "Logics"]
]

let subjects = courses.flat(Infinity)
console.log(subjects)