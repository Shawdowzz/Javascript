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