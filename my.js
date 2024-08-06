/* ----------------------------Javascript ----------------------------------*/

/* VARIABLES

defined , declared , assigned
  
data  types in js 
        primitive and non-primitive

types of variable
        var let const
        
        var - can be re-declared , assigned
        ex) var a =10; var a =20 ; a= 30

        let - cannot be re-declared , can be assigned/updated
        ex) let a =10 ; a =20

        const - must to initializes when declared; cannot be re-declared and assigned (non-modifiable)
        ex) const a=10

------> var 
EX1:

var a;  // declared
console.log(a);         //O/P -> undefined


EX2:
var a=10;
console.log(a)
var a=20;
console.log(a)
a=30;
console.log(a)


--------> let

EX 1:
let a
console.log(a)         // O/P : undefined


EX 2:

let a
let b= 10
a= 20
console.log(a)
console.log(b)
let c = 30
console.log(c)
let c= 40              // ERROR: identifier has already been dechared
console.log(c)    

-----------> const

EX 1:

const a
console.log(a)         // SyntaxError: Missing initializer in const declaration


EX 2:
const a= 10
console.log(a)
a=20
console.log(a)      // TypeError: Assignment to constant variable.

EX 3:

const a=10
console.log(a)
const a=20          // SyntaxError: Identifier 'a' has already been declared
console.log(a)

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Primitive data types:
        sting , number , boolean , undefined ,  null

        use typeof() function to find the data type
        use console.log() function to print the output in console


--------> String
 
var firstName="Aswin"
var lastName="j"
var age="27"
console.log(" my name is " + firstName + " . " +  lastName + " and age is " + age);
console.log(typeof(firstName))
var names=firstName+lastName+'@'+age               // sting concotination
console.log(names)

------> number

var maths=60.5
var english=60
var science=80
var ethics=-25
var cs=70
const total=500
var subTotal=total - (maths+english+science+ethics+cs)
console.log(subTotal)
console.log(typeof(subTotal))

-------> boolean

var pass=true;
var fail=false;
console.log(pass)
console.log(typeof(fail))

--------> undefined

var string1;
console.log(typeof(string1))

--------> null

var subTotal=null;
console.log(subTotal)
console.log(typeof(subTotal))

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Non-primitive datatypes

        objects

var bio= {
    names:"aswin",
    age:25,
    education:"BE",
    occupation:"engineer"
}

console.log(bio)
console.log(typeof(bio))


//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// scope of the varaible


--------> global variable

var string1="global_var";
console.log("1.outside the function", string1)

function localvar(){
    console.log("inside the function",string1)
    string1="Updated from local"
}

localvar()
console.log("2.outside the function",string1)

-----------> local variable


function localvar() {
    var string1="im Local"
    console.log("inside",string1)
}
string1="global"
console.log("1.outside",string1)
localvar()
// string1="global"
console.log("2.outside",string1)

*/

// coding challenge 1

var num =1 , decimalNum=2.71888 , letter="H" , word="Hello word", pass=true;
console.log(num + "\n" + decimalNum + "\n" + letter + "\n" + word + "\n" + pass)
console.log(typeof(num) + "\n" + typeof(decimalNum) + "\n" + typeof(letter) + "\n" + typeof(word) + "\n" + typeof(pass))
