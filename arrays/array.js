let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
middleChange(styles, "Классика")
alert(styles.shift(styles));
styles.unshift("Рэп", "Регги");

let array = ["a", "b"];

array.push(function() {
    alert(this);
});

array[2]();

alert(sumInput());