"use strict";

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

let schedule = {};

alert(isEmpty(schedule));

schedule["8:30"] = "get up";

alert(isEmpty(schedule));

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;

for (let key in salaries) {
    sum += salaries[key];
}

alert(sum);

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

for (let key in menu) {
    alert(menu[key]);
}

multiplyNumeric(menu);

for (let key in menu) {
    alert(menu[key]);
}

let calculator = {
    x: 0,
    y: 0,
    read() {
        this.x = +prompt("Введите первое число:", 0);
        this.y = +prompt("Введите второе число:", 0);
    },
    sum() {
        return this.x + this.y;
    },
    mul() {
        return this.x * this.y;
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        alert(this.step);
        return this;
    }
}

ladder.up()
    .up()
    .down()
    .up()
    .down()
    .showStep();