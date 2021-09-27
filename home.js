// challenge 1 : age in days
function ageInDays() {
    let birthYear = prompt('Hello, enter your year of birth :'); 
    let daysOnPlanet = (2021 - birthYear)*356;
    let h1 = document.createElement('h1');
    let testAnswer = document.createTextNode('you are ' + daysOnPlanet + ' days old');
    h1.setAttribute('id', 'daysOnPlanet');
    h1.appendChild(testAnswer);
    document.getElementById('results').appendChild(h1);

 //document.getElementById('endResults').innerHTML= 'your days on earth are ' + element.innerHTML;
}
function reset() {
    document.getElementById('results').remove();
}

// challenge 2 : image generator;
function generateCat() {
    let image1 = document.createElement('img');
    let div = document.getElementById('flex-cat-gen');
    image1.src ="https://picsum.photos/200";
    div.appendChild(image1);
}