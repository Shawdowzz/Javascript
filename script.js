/*console.log('Hello');
console.log('\n I love Chocolate');

//window.alert('You are learning Javascript');
//window.alert('oh ok');
document.getElementById("myH").textContent = 'Welcome !!!';
document.getElementById("myPar").textContent = 'I like Chocolate';

let yax ;
yax = 209;
console.log(typeof yax);
//window.alert(`The value of yax is ${yax}`);
let names = "Darshan ";
console.log(`your name is ${names}`);
console.log(`Line 3
Line 2

 `);
console.log('THi');

/*

//You know this is single line comment

let LiftUp = true;
console.log(`Is the Lift Up? : ${LiftUp}`);


document.getElementById("p1").textContent = `Is the lift in the upmost floor ? : ${LiftUp}`;

let say = 34;
say+=2;
console.log(say);
console.log(say+1);
console.log(say**2); // power of 2^2
console.log(say%2);

let may = 1 +(2+3)+3+5;
console.log(`may value if ${may}`);

let username;
username = window.prompt("what is your name ");
document.getElementById("p3").textContent = `Your name is ${username}`;
*/

let user;
var names = 56;
    names = 567;
    console.log(names)

document.getElementById("button").onclick = function() {
    user = document.getElementById("in").value; // Changed ariaValueMax to value
    document.getElementById("headers").textContent = `Welcome ${user} !!`;
    
}
document.getElementById('click').addEventListener('click', function() {
    document.getElementById('click').textContent = `Welcome!!!`;
});