describe("toBe or not.toBe",()=>{
    test("3 is 3",()=>{
        expect(3).toBe(3);
    });
    test("Boolean values",()=>{
        expect(true).toBe(true)
        expect(false).toBe(false)
        expect(true).not.toBe(false)
    })
})


describe("Tests for reference data types",()=>{
    test("{}!=={}",()=>{
  expect({}).not.toBe({})
    });

    test("[]!==[]",()=>{
        expect([]).not.toBe([])
          });

          test("object a === object a",()=>{
             let a={}
            expect(a).toBe(a)
              });
})

//shallow Equal  ,  1 level deep in object ,array
// deepEqual   ----> it goes all ways down to the root node

describe("toEqual",()=>{
test ("[]  is equal to [] ",()=>{
    expect([]).toEqual([])
})

test ("[1,2,3]  is not equal to [] ",()=>{
    expect([1,2,3]).not.toEqual([])
})

test ("[1,2,3]  is equal to [1,2,3] ",()=>{
    expect([1,2,3]).toEqual([1,2,3])
})

test ("[1,2,[3,4]]  is equal to [1,2,[3,4]] ",()=>{
    expect([1,2,[3,4]]).toEqual([1,2,[3,4]])
})

test ("nested arrays",()=>{
    let a=[1,2,3]
    let b=[a,a]
    let c=[[1,2,3],a]
    expect([b]).toEqual([c])
})
})

//test.only will check fro that test case only and for rest ingnore
// test.skip will skip that test run for other test case.

describe("ralational operators",()=>{
    test("100+100 <=200",()=>{
        expect(100+100).toBeLessThanOrEqual(200);
    })

    test("100+100 <201",()=>{
        expect(100+100).toBeLessThan(201);
    })

   
})