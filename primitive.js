"use strict";

let user = {
    name: "John",
    money: 300,

    toString() {
        return `name: "${this.name}"`;
    }
};

alert(user);
alert(user + 500);