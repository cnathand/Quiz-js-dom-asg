let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');
let box3 = document.getElementById('box3');
let box4 = document.getElementById('box4');
let box5 = document.getElementById('box5');
let box6 = document.getElementById('box6');
let box7 = document.getElementById('box7');
let box8 = document.getElementById('box8');

let changeBtn = document.getElementById('changeBtn');
let resetBtn = document.getElementById('resetBtn');

let boxNumber = document.getElementById('boxNumber');
let changeColor = document.getElementById('changeColor');

let box = '';
let color = '';

let colorArr = [];

changeBtn.addEventListener('click', function (){
    box = boxNumber.value;
    color = changeColor.value;
    if(box == 1){

        box1.classList.add(color.toLowerCase)
    }
    if(box == 2){
        box2.classList.add(color.toLowerCase)
    }
    if(box == 3){
        box3.classList.add(color.toLowerCase)
    }
    if(box == 4){
        box4.classList.add(color.toLowerCase)
    }
    if(box == 5){
        box5.classList.add(color.toLowerCase)
    }
    if(box == 6){
        box6.classList.add(color.toLowerCase)
    }
    if(box == 7){
        box7.classList.add(color.toLowerCase)
    }
    if(box == 8){
        box8.classList.add(color.toLowerCase)
    }
    console.log(box);
    console.log(color);
});

resetBtn.addEventListener('click', function(){
    box1.classList.remove(color.toLowerCase)
    box2.classList.remove(color.toLowerCase)
    box3.classList.remove(color.toLowerCase)
    box4.classList.remove(color.toLowerCase)
    box5.classList.remove(color.toLowerCase)
    box6.classList.remove(color.toLowerCase)
    box7.classList.remove(color.toLowerCase)
    box8.classList.remove(color.toLowerCase)
});