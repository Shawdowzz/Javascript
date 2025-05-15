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

 let n = -20;
 let m = 2;
 let v;
 //v = Math.sqrt(n);
 //v = Math.log(n);
 //v =Math.cos(n); //in radians
 //v =Math.tan(n);
 //v = Math.sin(n);
//  v =Math.abs(n); // absolute value (opposite value)



 console.log(v);
