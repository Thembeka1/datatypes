let globalvar = "This is a global variable"

function myvars(){
    let localvar = "This is a local variable"
    console.log(localvar + ", it is only accessible inside a method or a function");

}
console.log(globalvar + "it is accessible everywhere");
myvars()