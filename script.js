let box1 = document.querySelector('#div1');
let btn1 = document.querySelector('#btn1');
btn1.addEventListener('click',function(){
    box1.style.backgroundColor = 'Red';
})

let box2 = document.querySelector('#div2');
let btn2 = document.querySelector('#btn2');
btn2.addEventListener('click',function(){
    box2.style.backgroundColor = 'Green';
})

let box3 = document.querySelector('#div3');
let btn3 = document.querySelector('#btn3');
btn3.addEventListener('click',function(){
    box3.style.backgroundColor = 'Blue';
})

let colorBoxes = document.querySelectorAll('.div');
let resetBtn = document.querySelector('.reset-btn');
resetBtn.addEventListener('click', function() {
    for(let i=0; i<colorBoxes.length; i++){
        colorBoxes[i].style.backgroundColor = '';
    }
});
