let x = +prompt("insert first number:", 0);
let y = +prompt("insert second number:", 0);

alert(x + y);

function readNumber() {
    let number;

    do {
        number = prompt("insert number:", 0);
    } while(!isFinite(number))
    
    if (number === null || number === '') 
        return null;

    return +number;
}

alert(readNumber());

function random(min, max) {
    return Math.random() * (max - min) + min;
}

alert(random(1, 5));
alert(random(1, 5));
alert(random(1, 5));

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

alert(randomInteger(1, 5));
alert(randomInteger(1, 5));
alert(randomInteger(1, 5));