function sumInput() {
    let numbers = [];

    while (true) {
        let value = prompt("Введите число:", 0);

        if (value == "" || value === null || !isFinite(value)) {
            break;
        };
        
        numbers.push(+value);
    }

    let sum = 0;

    for (let number of numbers) {
        sum += number;
    }

    return sum;
}

function middleChange(array, element) {
    if (array.length == 0) {
        array[0] = element;
    }
    else {
        array[Math.floor((array.length - 1) / 2)] = element;
    }
}

function getMaxSubSum(array) {
    let maxSum = 0;
    let partialSum = 0;

    for (let item of array) {
        partialSum += item;
        maxSum = Math.max(maxSum, partialSum);
        
        if (partialSum < 0)  {
            partialSum = 0;
        }
    }

    return maxSum;
}

function camelize(str) {
    return str.split("-")
                .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
                .join("");
}

function filterRange(array, a, b) {
    return array.filter(item => item >= a && item <= b);
}

function filterRangeInPlace(array, a, b) {
    for (let i = 0; i < array.length; i++) {
        let item = array[i];

        if (item < a || item > b) {
            array.splice(i, 1);
            i--;
        }
    }
}

function sortInDecreasingOrder(array) {
    array.sort((a, b) => b - a);
}

function copySorted(array) {
    return array.slice().sort((a, b) => a.localeCompare(b));
}

function Calculator() {
    this.methods = {
        "+": (a, b) => a + b
    };
    
    this.addMethod = function (name, func) {
        this.methods[name] = func;
    };
    
    this.calculate = function (str) {
        let data = str.split(" ");
        let a = +data[0];
        let op = data[1];
        let b = +data[2];

        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return this.methods[op](a, b);
    };
}

function mapToNames(array) {
    return array.map(item => item.name);
}

function mapToObjects(array) {
    return array.map(item => ({ fullName: `${item.name} ${item.surname}`, id: item.id}));
}

function sortByAge(array) {
    array.sort((a, b) => a.age - b.age);
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function getAverageAge(array) {
    return Math.round(array.reduce((sum, currentItem) => sum + currentItem.age, 0) / array.length);
}

function unique(array) {
    let uniqueArray = [];
    
    for (let item of array) {
        if (!uniqueArray.includes(item)) {
            uniqueArray.push(item);
        }
    }    

    return uniqueArray;
}

function groupById(array) {
    return array.reduce((users, currentUser) => { 
        users[currentUser.id] = currentUser;
        return users;
    }, {});
}