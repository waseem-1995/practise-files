const sum=require("./index")

describe("Testing sum function",()=>{  //test suit
    test("add 2 positive numbers",()=>{
        expect(sum(1,2)).toBe(3);
    });
    test("add 2 negative numbers",()=>{
        expect(sum(-1,-2)).toBe(-3);
    });
    test("add two floating numbers",()=>{
        expect(sum(1.3,2.3)).toBe(3.6);
    });
    test("add two floating numbers ,where ouput is integer",()=>{
        expect(sum(1.5,1.5)).toBe(3);
    });
    test("add two numbers as strings and output is integer",()=>{
        expect(sum("1.5","1.5")).toBe(3);
    });
    test("call sum with no aruments",()=>{
        expect(sum()).toBe("sum invoked without arguments");
    });
    test("call sum with one arguments",()=>{
        expect(sum(1)).toBe("sum functions needs atleast 2 arguments");
    });
    test("add 3 numbers",()=>{
        expect(sum(1,2,3)).toBe(6);
    });

    test("add 4 numbers",()=>{
        expect(sum(1,2,3,4)).toBe(10);
    });
});