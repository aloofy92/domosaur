
let spanMess = document.querySelector('.mess-with-me');
spanMess.style.fontSize = "40px";


let paraMess = document.querySelector('p.mess-with-me');
paraMess.style.background = "green";


let hiddenDino = document.querySelector("#hide-me");
hiddenDino.style.display = 'none';


let firstDino = document.querySelector("#triceratops");
firstDino.style.width = '324px';

let feathers = document.querySelector('#feathers');


let biggify = document.querySelector('#biggify');

let dinoButton = document.querySelector('#toggle');



spanMess.addEventListener('click', function(){
    spanMess.style.color = "orange";
});


firstDino.addEventListener('click', function(){
    firstDino.style.border = '3px solid red';
});

feathers.addEventListener('click', function(){
    feathers.style.opacity = '0.5';
});

biggify.addEventListener('mouseover', function(){
biggify.style.width = '200px';
});

dinoButton.addEventListener('click', function(){
if(document.body.style.backgroundColor === 'white'){
    documwnt.body.style.backgroundColor === 'red';
} else {
    document.body.backgroundColor === 'white'
}
});

biggify.addEventListener('click', function(){
if(document.body.style.width === 'hoovered'){
    document.body.style.width === 'not hoovered';
} else {
    document.body.width === 'nothing'
}
});