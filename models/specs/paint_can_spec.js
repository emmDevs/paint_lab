const assert = require("assert");

const Paint_Can = require("../paint_can.js")

describe("Paint_Can", function(){
    let paint_can;
    beforeEach(function(){
        paint_can = new Paint_Can(5);
    });

    it("should have a number of litres of paint", function(){
        const actual = paint_can.litres;
        assert.strictEqual(actual, 5)
    });

    it("should be able to check if empty", function(){
        paint_can.checkIfEmpty();
        const actual = paint_can.checkIfEmpty();
        assert.strictEqual(actual, false)
    });

    it("should be able to empty itself of paint", function(){
        paint_can.emptyPaint();
        const actual = paint_can.litres;
        assert.strictEqual(actual, 0);
    });
});