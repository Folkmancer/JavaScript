"use strict";

describe("middleChange", function () {
    it("", function () {
        let array = [];
        let value = "Классика";
        
        middleChange(array, value);
        
        assert.equal(array[0], value);
    });

    it("", function () {
        let array = ["Джаз", "Фолк"];
        let value = "Классика";
        
        middleChange(array, value);
        
        assert.equal(array[0], value);
    });

    it("", function () {
        let array = ["Джаз", "Фолк", "Рок"];
        let value = "Классика";
        
        middleChange(array, value);
        
        assert.equal(array[1], value);
    });
});

describe("getMaxSubSum", function () {
    it("Для массива [-1, 2, 3, -9] сумма должна быть 5", function () {
        assert.equal(getMaxSubSum([-1, 2, 3, -9]), 5);
    });

    it("Для массива [2, -1, 2, 3, -9] сумма должна быть 6", function () {
        assert.equal(getMaxSubSum([2, -1, 2, 3, -9]), 6);
    });

    it("Для массива [-1, 2, 3, -9, 11] сумма должна быть 11", function () {
        assert.equal(getMaxSubSum([-1, 2, 3, -9, 11]), 11);
    });

    it("Для массива [-2, -1, 1, 2] сумма должна быть 3", function () {
        assert.equal(getMaxSubSum([-2, -1, 1, 2]), 3)
    });

    it("Для массива [100, -9, 2, -3, 5] сумма должна быть 100", function () {
        assert.equal(getMaxSubSum([100, -9, 2, -3, 5]), 100);
    });

    it("Для массива [1, 2, 3] сумма должна быть 6", function () {
        assert.equal(getMaxSubSum([1, 2, 3]), 6);
    });
});