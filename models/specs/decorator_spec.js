const assert = require("assert");

const Decorator = require("../decorator.js");
const Paint_Can = require("../paint_can.js");

describe("Decorator", function(){
    let decorator;
    beforeEach(function(){
        decorator = new Decorator([]);
    });

    it("should start with an empty paint stock", function(){
        const actual = decorator.paint_stock;
        assert.deepStrictEqual(actual, []);
    });

    it("should be able to add a can of paint to paint stock", function(){
        decorator.addPaint(Paint_Can);
        const actual = decorator.paint_stock.length
    });
});