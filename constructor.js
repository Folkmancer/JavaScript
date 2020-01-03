"use strict";

function Calculator() {
    this.read = function() {
        this.x = +prompt("insert number x:", 0);
        this.y = +prompt("insert number y:", 0);
    };

    this.sum = function() {
        return this.x + this.y;
    };

    this.mul = function() {
        return this.x * this.y;
    };
};

function Accumulator(startingValue) {
    this.value = startingValue;
    
    this.read = function() {
        this.value += +prompt("insert number value:", 0);
    };
}

/*let calculator = new Calculator();
calculator.read();
alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );*/

let accumulator = new Accumulator(1); // начальное значение 1
accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению
alert(accumulator.value); // выведет сумму этих значений