const list = require("./list.js")


describe("testing the numberToListNodeConvert function", ()=>{

    test("test if the function converts a number to a linked list", () => {
        expect(list.numberToListNodeConverter(122)).toEqual({
            "next":{"next":{"next":null,"val":1},"val":2},"val":2})
        })
    
    test('test if the function throws an error if we give it a negative number', () => {
        expect(() => {list.numberToListNodeConverter(-2)}).toThrow("no negative number allowed")
    })

    test('test if the function throws an error if we give it a string', () => {
        expect(() => {list.numberToListNodeConverter("abc")}).toThrow("not a number")
    })
})

describe("testing the overflowed function", ()=>{
    
    test("test if the function converts the 2->2->1 list to a 3->2->1 list", () => {
        expect(list.overflowed(list.numberToListNodeConverter(122))).toEqual({
            "next":{"next":{"next":null,"val":1},"val":2},"val":3})
    })

    test("test an overflow in the overflowed function, a 9->2->1 list should return as a 0->3->1", () => {
        expect(list.overflowed(list.numberToListNodeConverter(129))).toEqual({
            "next":{"next":{"next":null,"val":1},"val":3},"val":0})
        })
    
    test("test an overflow in the overflowed function, which exceeds the current list length a 9->9->9 list should return as a 0->0->0->1", () => {
        expect(list.overflowed(list.numberToListNodeConverter(999))).toEqual({
            "next":{"next":{"next":{"next":null, "val":1},"val":0},"val":0},"val":0})
        })
})
