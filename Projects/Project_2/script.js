const increasebtn =document.getElementById('incr');
const decreasebtn = document.getElementById('decr');
const resetbtn = document.getElementById('reset');
const count = document.getElementById('count');
let cnt = 0;
increasebtn.onclick = function(){
    cnt ++;
    count.textContent = cnt;
}
resetbtn.onclick = function(){
    cnt = 0;
    count.textContent = cnt;
}

decreasebtn.onclick = function(){
    cnt --;
    count.textContent = cnt;
}

console.log(Math.PI);
console.log(Math.E);
let x =3.51;
x = Math.round(x);
console.log(x);
x = 3.51;
x = Math.floor(x);
console.log(x);
 x =Math.ceil(x);
 console.log(x);

 let n = 90;
 let m = 2;
 let v =3;
 //v = Math.sqrt(n);
 //v = Math.log(n);
 //v =Math.cos(n); //in radians
 //v =Math.tan(n);
 //v = Math.sin(n);
//  v =Math.abs(n); // absolute value (opposite value)
 //v = Math.sign(n);

//let max = Math.max(n,m,v);
//let min = Math.min(n,m,v);


// console.log(max);
// console.log(min);


// generate random num
//let ran = Math.floor(Math.random()*4)+1;
const max = 20;
const min = 5;
let ran = Math.floor(Math.random()*(max-min))+min;
console.log(ran);
