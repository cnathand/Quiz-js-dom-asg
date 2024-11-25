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

changeBtn.addEventListener('click', function (){
    box = boxNumber.value;
    color = changeColor.value;
    if(box == 1){
        if(color == 'red'){
            box1.classList.add('change-red');
        } else if(color == 'blue'){
            box1.classList.add('change-blue');
        } else if(color == 'purple'){
            box1.classList.add('change-purple');
        } else if(color == 'brown'){
            box1.classList.add('change-brown');
        } else if(color == 'yellow'){
            box1.classList.add('change-yellow');
        } 
    }
    if(box == 2){
        if(color == 'red'){
            box2.classList.add('change-red');
        } else if(color == 'blue'){
            box2.classList.add('change-blue');
        } else if(color == 'purple'){
            box2.classList.add('change-purple');
        } else if(color == 'brown'){
            box2.classList.add('change-brown');
        } else if(color == 'yellow'){
            box2.classList.add('change-yellow');
        } 
    }
    if(box == 3){
        if(color == 'red'){
            box3.classList.add('change-red');
        } else if(color == 'blue'){
            box3.classList.add('change-blue');
        } else if(color == 'purple'){
            box3.classList.add('change-purple');
        } else if(color == 'brown'){
            box3.classList.add('change-brown');
        } else if(color == 'yellow'){
            box3.classList.add('change-yellow');
        } 
    }
    if(box == 4){
        if(color == 'red'){
            box4.classList.add('change-red');
        } else if(color == 'blue'){
            box4.classList.add('change-blue');
        } else if(color == 'purple'){
            box4.classList.add('change-purple');
        } else if(color == 'brown'){
            box4.classList.add('change-brown');
        } else if(color == 'yellow'){
            box4.classList.add('change-yellow');
        } 
    }
    if(box == 5){
        if(color == 'red'){
            box5.classList.add('change-red');
        } else if(color == 'blue'){
            box5.classList.add('change-blue');
        } else if(color == 'purple'){
            box5.classList.add('change-purple');
        } else if(color == 'brown'){
            box5.classList.add('change-brown');
        } else if(color == 'yellow'){
            box5.classList.add('change-yellow');
        } 
    }
    if(box == 6){
        if(color == 'red'){
            box6.classList.add('change-red');
        } else if(color == 'blue'){
            box6.classList.add('change-blue');
        } else if(color == 'purple'){
            box6.classList.add('change-purple');
        } else if(color == 'brown'){
            box6.classList.add('change-brown');
        } else if(color == 'yellow'){
            box6.classList.add('change-yellow');
        } 
    }
    if(box == 7){
        if(color == 'red'){
            box7.classList.add('change-red');
        } else if(color == 'blue'){
            box7.classList.add('change-blue');
        } else if(color == 'purple'){
            box7.classList.add('change-purple');
        } else if(color == 'brown'){
            box7.classList.add('change-brown');
        } else if(color == 'yellow'){
            box7.classList.add('change-yellow');
        } 
    }
    if(box == 8){
        if(color == 'red'){
            box8.classList.add('change-red');
        } else if(color == 'blue'){
            box8.classList.add('change-blue');
        } else if(color == 'purple'){
            box8.classList.add('change-purple');
        } else if(color == 'brown'){
            box8.classList.add('change-brown');
        } else if(color == 'yellow'){
            box8.classList.add('change-yellow');
        } 
    }
    console.log(box);
    console.log(color);
});

resetBtn.addEventListener('click', function(){
    box1.classList.remove('change-red', 'change-blue', 'change-purple', 'change-brown', 'change-yellow')
    box2.classList.remove('change-red', 'change-blue', 'change-purple', 'change-brown', 'change-yellow')
    box3.classList.remove('change-red', 'change-blue', 'change-purple', 'change-brown', 'change-yellow')
    box4.classList.remove('change-red', 'change-blue', 'change-purple', 'change-brown', 'change-yellow')
    box5.classList.remove('change-red', 'change-blue', 'change-purple', 'change-brown', 'change-yellow')
    box6.classList.remove('change-red', 'change-blue', 'change-purple', 'change-brown', 'change-yellow')
    box7.classList.remove('change-red', 'change-blue', 'change-purple', 'change-brown', 'change-yellow')
    box8.classList.remove('change-red', 'change-blue', 'change-purple', 'change-brown', 'change-yellow')
});