let randomN = document.getElementById('btn');
let max = 6;
let min = 1;

randomN.onclick = function(){
   randomN= Math.floor(Math.random()*6)+min;
   randomN= document.getElementById('gen')
}