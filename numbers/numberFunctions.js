function readNumber() {
    let number;

    do {
        number = prompt("insert number:", 0);
    } while(!isFinite(number))
    
    if (number === null || number === '') 
        return null;

    return +number;
}

function random(min, max) {
    return Math.random() * (max - min) + min;
}

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    
    return Math.floor(rand);
}