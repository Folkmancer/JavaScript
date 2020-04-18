let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
middleChange(styles, "Классика")
alert(styles.shift(styles));
styles.unshift("Рэп", "Регги");

function middleChange(array, element) {
    if (array.length == 0) {
        array[0] = element;
    }
    else {
        array[Math.floor((array.length - 1) / 2)] = element;
    }
}

let array = ["a", "b"];

array.push(function() {
    alert(this);
});

array[2]();

function sumInput() {
    let numbers = [];

    while (true) {
        let value = prompt("Введите число:", 0);

        if (value == "" || value === null || !isFinite(value))
            break;
        
        numbers.push(+value);
    }

    let sum = 0;

    for (let number of numbers) {
        sum += number;
    }

    return sum;
}

alert(sumInput());

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