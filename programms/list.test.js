const list = require("./list.js")

describe("testing the ListNode function", ()=>{
    test("what happens if a ListNode gets created without any parameters",()=>{
        expect(new list.ListNode()).toEqual({"val": 0, "next":null})
    })

    test("what happens if a ListNode gets created with only the first parameter, it should use the parameter as the value",()=>{
        expect(new list.ListNode(10)).toEqual({"val": 10, "next":null})
    })

    test("what happens if a ListNode gets created with only the second parameter, it should use the parameter as the value",()=>{
        expect(new list.ListNode(undefined, new list.ListNode())).toEqual({"val": 0, "next":{"val":0, "next":null}})
    })
    

    test("what happens if a ListNode gets created with two parameter, it should use the first parameter as the value and the second as the next parameter",()=>{
        expect(new list.ListNode(10, new list.ListNode())).toEqual({"val": 10, "next":{"val":0, "next":null}})
    })
})

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
