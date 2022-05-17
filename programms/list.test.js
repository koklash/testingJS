const list = require("./list.js")


describe("testing the numberToListNodeConvert function", ()=>{

    test("test if the function converts a number to a linked list", () => {
        expect(list.numberToListNodeConverter(122)).toEqual({
            "next":{"next":{"next":null,"val":1},"val":2},"val":2})
        })
    
    test('test if the function throws an error if we give it a negative number', () => {
        expect(() => {list.numberToListNodeConverter(-2)}).toThrow("no negative number allowed")
    })
})

describe("testing the overflowed function", ()=>{
    
    test("test if the function converts a number to a linked list", () => {
        expect(list.overflowed(list.numberToListNodeConverter(122))).toEqual({
            "next":{"next":{"next":null,"val":1},"val":2},"val":3})
        })
})


