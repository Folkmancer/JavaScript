"use strict";

describe("ucFirst", function() {
    it("Возвращает true, если строки совпадают", function() {
        assert.equal(ucFirst("вася"), "Вася");
    });
  
    it("Возвращает true, если строки не совпадают", function() {
        assert.notEqual(ucFirst("вася"), "вася");
    });
    
    it("Возвращает true, если строки совпадают", function() {
        assert.equal(ucFirst(""), "");
    });
  });
  
describe("checkSpam", function() {
    it("Возвращает true, если есть слово viagra", function() {
        assert.equal(checkSpam('buy ViAgRA now'), true);
    });
  
    it("Возвращает true, если есть слово xxx", function() {
        assert.equal(checkSpam('free xxxxx'), true);
    });
      
    it("Возвращает false, если нет слов входящих в спам", function() {
        assert.equal(checkSpam("innocent rabbit"), false);
    });
  
    it("Возвращает false, если строка пуста", function() {
        assert.equal(checkSpam(""), false);
    }); 
});

describe("truncate", function() {
    describe("Строка должна быть 20 символов в длинну и содержать '…'", function() {
        var result = truncate("Вот, что мне хотелось бы сказать на эту тему:", 20);

        it("Строка совпадает", function() {
            assert.equal(result, "Вот, что мне хотело…");
        });

        it("Длина строки равна максимальной длине", function() {
            assert.equal(result.length, 20);
        });

        it("Cтрока содержит '…'", function() {
            assert.isTrue(result.includes("…"));
        });
    });

    describe("Строка должна быть меньше 20 символов в длинну и  не содержать '…'", function() {
        var result = truncate("Всем привет!", 20);

        it("Строка совпадает", function() {
            assert.equal(result, "Всем привет!");
        });

        it("Длина строки меньше максимальной длины", function() {
            assert.notEqual(result.length, 20);
        });

        it("Cтрока не содержит '…'", function() {
            assert.isFalse(result.includes("…"));
        });
    });
});

describe("extractCurrencyValue", function() {
    it("Возвращает для строки $120 число 120", function() {
        assert.equal(extractCurrencyValue("$120"), 120);
    });
});