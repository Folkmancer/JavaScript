"use strict";

describe("middleChange", function () {
    it("Для пустого массива вставляет значение в начало массива", function () {
        let array = [];
        let value = "Классика";
        
        middleChange(array, value);
        
        assert.equal(array[0], value);
    });

    it("Для массива с чётным количеством элементов вставляет в конец первой половины", function () {
        let array = ["Джаз", "Фолк"];
        let value = "Классика";
        
        middleChange(array, value);
        
        assert.equal(array[0], value);
    });

    it("Для массива с нечётным количеством элементов вставляет в середину", function () {
        let array = ["Джаз", "Фолк", "Рок"];
        let value = "Классика";
        
        middleChange(array, value);
        
        assert.equal(array[1], value);
    });
});

describe("getMaxSubSum", function () {
    it("Для массива [-1, 2, 3, -9] максимальная непрерывная сумма подмассива равна 5", function () {
        assert.equal(getMaxSubSum([-1, 2, 3, -9]), 5);
    });

    it("Для массива [2, -1, 2, 3, -9] максимальная непрерывная сумма подмассива равна 6", function () {
        assert.equal(getMaxSubSum([2, -1, 2, 3, -9]), 6);
    });

    it("Для массива [-1, 2, 3, -9, 11] максимальная непрерывная сумма подмассива равна 11", function () {
        assert.equal(getMaxSubSum([-1, 2, 3, -9, 11]), 11);
    });

    it("Для массива [-2, -1, 1, 2] максимальная непрерывная сумма подмассива равна 3", function () {
        assert.equal(getMaxSubSum([-2, -1, 1, 2]), 3)
    });

    it("Для массива [100, -9, 2, -3, 5] максимальная непрерывная сумма подмассива равна 100", function () {
        assert.equal(getMaxSubSum([100, -9, 2, -3, 5]), 100);
    });

    it("Для массива [1, 2, 3] максимальная непрерывная сумма подмассива равна 6", function () {
        assert.equal(getMaxSubSum([1, 2, 3]), 6);
    });
});

describe("camelize", function () {
    it("Для 'background-color' результат 'backgroundColor'", function () {
        assert.equal(camelize("background-color"), "backgroundColor");
    });

    it("Для 'list-style-image' результат 'listStyleImage'", function () {
        assert.equal(camelize("list-style-image"), "listStyleImage");
    });

    it("Для '-webkit-transition' результат 'WebkitTransition'", function () {
        assert.equal(camelize("-webkit-transition"), "WebkitTransition");
    });
});

describe("filterRange", function () {
    it("Для массива [5, 3, 8, 1] с диапазоном значений от a = 1 до b = 4 результат '3,1'", function () {
        assert.equal(filterRange([5, 3, 8, 1], 1, 4), "3,1");
    });
});

describe("filterRangeInPlace", function () {
    it("Для массива [5, 3, 8, 1] с диапазоном значений от a = 1 до b = 4 результат '3,1'", function () {
        let array = [5, 3, 8, 1];

        filterRangeInPlace(array, 1, 4);

        assert.equal(array, "3,1");
    });
});

describe("sortInDecreasingOrder", function () {
    it("Для массива [5, 2, 1, -10, 8] результат сортировки по убыванию: '8,5,2,1,-10'", function () {
        let array = [5, 2, 1, -10, 8];

        sortInDecreasingOrder(array);

        assert.equal(array, "8,5,2,1,-10");
    });
});

describe("copySorted", function () {
    it("Для копии массива ['HTML', 'JavaScript', 'CSS'] результат сортировки равен 'CSS,HTML,JavaScript'", function () {
        let array = ["HTML", "JavaScript", "CSS"];

        assert.equal(copySorted(array), "CSS,HTML,JavaScript");
        assert.equal(array, "HTML,JavaScript,CSS");
    });
});

describe("calculate", function () {
    it("Для выражения '3 + 7' результат 10", function () {
        let calc = new Calculator;
        
        assert.equal(calc.calculate("3 + 7"), 10);
    });

    it("Для выражения '3 * 7' результат 21", function () {
        let calc = new Calculator;

        calc.addMethod("*", (a, b) => a * b);

        assert.equal(calc.calculate("3 * 7"), 21);
    });

    it("Для выражения '3 - 7' результат -4", function () {
        let calc = new Calculator;
        
        calc.addMethod("-", (a, b) => a - b);

        assert.equal(calc.calculate("3 - 7"), -4);
    });

    it("Для выражения '3 ** 7' результат 2187", function () {
        let calc = new Calculator;
        
        calc.addMethod("**", (a, b) => a ** b);

        assert.equal(calc.calculate("3 ** 7"), 2187);
    });
});

describe("mapToNames", function () {
    it("Для объектов выводит массив имён", function () {
        let john = { name: "John", age: 25 };
        let pete = { name: "Pete", age: 30 };
        let mary = { name: "Mary", age: 28 };

        let users = [ john, pete, mary ];
        let names = mapToNames(users);

        assert.equal(users.length, names.length);
        assert.equal(names, "John,Pete,Mary");
    });
});

describe("mapToObjects", function () {
    it("Для объектов выводит массив модифицированных объектов", function () {
        let john = { name: "John", surname: "Smith", id: 1 };
        let pete = { name: "Pete", surname: "Hunt", id: 2 };
        let mary = { name: "Mary", surname: "Key", id: 3 };

        let users = [ john, pete, mary ];
        let usersMapped = mapToObjects(users);

        assert.equal(users.length, usersMapped.length);
        assert.equal(usersMapped[0].id, 1);
        assert.equal(usersMapped[0].fullName, "John Smith");
    });
});

describe("sortByAge", function () {
    it("Сортировка объектов по возрасту", function () {
        let john = { name: "John", age: 25 };
        let pete = { name: "Pete", age: 30 };
        let mary = { name: "Mary", age: 28 };

        let users = [ pete, john, mary ];

        sortByAge(users);

        assert.equal(users[0].name, "John");
        assert.equal(users[1].name, "Mary");
        assert.equal(users[2].name, "Pete");
    });
});

describe("getAverageAge", function () {
    it("Для 25, 30 и 29 лет средний возраст 28 лет", function () {
        let john = { name: "John", age: 25 };
        let pete = { name: "Pete", age: 30 };
        let mary = { name: "Mary", age: 29 };

        let users = [ john, pete, mary ];

        assert.equal(getAverageAge(users), 28);
    });

    it("Для 13, 6 и 27 лет средний возраст 15 лет", function () {
        let john = { name: "John", age: 13 };
        let pete = { name: "Pete", age: 6 };
        let mary = { name: "Mary", age: 27 };

        let users = [ john, pete, mary ];
        
        assert.equal(getAverageAge(users), 15);
    });
});

describe("unique", function () {
    it("Для массива ['Hare', 'Krishna', 'Hare', 'Krishna', " +
        "'Krishna', 'Krishna', 'Hare', 'Hare', ':-O'] " +
        "уникальными записями будут ['Hare', 'Krishna', ':-O']", function () {
        let strings = ["Hare", "Krishna", "Hare", "Krishna",
            "Krishna", "Krishna", "Hare", "Hare", ":-O"];

        assert.equal(unique(strings), "Hare,Krishna,:-O");
    });
});

describe("groupById", function () {
    it("id элементов массива должны совпасть с id объекта полученными по ключам", function () {
        let users = [
            {id: 'john', name: "John Smith", age: 20},
            {id: 'ann', name: "Ann Smith", age: 24},
            {id: 'pete', name: "Pete Peterson", age: 31},
          ];
          
          let usersById = groupById(users);

        assert.equal(usersById.john.id, users[0].id);
        assert.equal(usersById.ann.id, users[1].id);
        assert.equal(usersById.pete.id, users[2].id);
    });
});