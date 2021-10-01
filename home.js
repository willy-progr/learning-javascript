// DOM MANIPULATION

/*let heading = document.getElementById('heading');
console.log(heading);
console.log(typeof heading); 

let list1 = document.getElementById('list');
//list.textContent ="Hello friend";
//console.log(list.textContent);
list.innerHTML = '<h1>wilfred</h1>';
console.log(list.innerHTML);

// query selector

let myList = document.querySelector('.list');
console.log(myList);

let li = document.querySelector('li')
console.log(li);

let listItems = document.querySelectorAll('li');
console.log(listItems);  */

//let newList = document.querySelectorAll('.listItem');
//console.log(newList);

//ADDING CSS IN JS
 /*let heading2 = document.getElementsByClassName('.heading');
heading2.style.color ='green';
heading2.style.fontSize = '24px';
heading2.style.backgroundColor ='grey'; 

let myList = document.querySelectorAll('li');
//myList[2].style.backgroundColor = "green";

for (let i = 0; i < myList.length; i++) {
    myList[i].style.cssText = "background-color : coral; font-size: 28px;"
    
} */
/*
let heading1 = document.getElementById('heading');
heading1.className= 'changeBg';

//heading1.className = 'changeFt';

heading1.className += " changeFt";
console.log(heading.classList);
heading1.classList.add('changeCl');
heading1.classList.remove('changeCl');

let d = new Date() .getFullYear();
console.log(d)

let month = new Date( ) .getMinutes();
console.log(month);

function myAge() {
    let YearOfBirth = prompt('enter year of birth : ');
    let currentAge = d - YearOfBirth;
    console.log(currentAge);
}
myAge(); 


// JS EVENTS

let heading =document.querySelector('.heading');
let myBtn =document.querySelector('.btn');

myBtn.onclick =() =>{
    console.log('registered');
}
myBtn.onmouseover =() => {
    heading.style.cssText = 'background-color : green ; color: #fff;'
}
myBtn.onmouseout =() => {
    heading.style.cssText = 'background-color : white ; color: black;'
} 


let clickButton =() =>{
    console.log("Registred");
} 

btn.addEventListener('click', ()=>{
    heading.style.cssText = 'background-color : green ; color : white'
}) 

let myParagraph = document.querySelector('.paragraph');
console.log(myParagraph.getAttribute('id'));
console.log(myParagraph.getAttribute('class'));

myParagraph.setAttribute('style', "background-color : coral") 


let myListItem = document.getElementById("list-item");
console.log(myListItem.parentElement);
console.log(myListItem.parentElement.parentNode);
*/


//console.log(list.children);
//console.log(list.childNodes);
//console.log(list.lastElementChild); 

const list = document.querySelector('.list');

let newEL = document.createElement('li');// first step
let text = document.createTextNode('blog');// second step
newEL.appendChild(text);// third step
console.log(newEL);// forth step
list.appendChild(newEL);// fifth step
console.log(list);

let newElement = document.createElement('li');
let newText = document.createTextNode('services');
newElement.appendChild(newText);
list.appendChild(newElement);
console.log(list);




