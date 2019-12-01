function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true; 
}

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}