let gen = document.getElementById("gen");
let btn = document.getElementById('btn');
btn.onclick= function(){
    let min = parseInt(document.getElementById('Min').value);
    let max = parseInt(document.getElementById('Max').value);
    
    if(isNaN(min)|| isNaN(max)){
        gen.textContent = "Please Enter valid number";
        return;
    }
    if(min>max){
        gen.textContent = "Minimum is greater than Maximum";
        return;
    }
    let rando = Math.floor(Math.random()*(max-min+1))+min;
    gen.textContent= `The Random Number is ${rando}`;
}