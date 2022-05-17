const list=require("./list.js")
test('test if the function converts a number to a linked list', () => {
    expect(list.numberToListNodeConverter(122)).toEqual({
        "next":{
            "next":{
                "next":null,
                "val":"2"
            },
            "val":"2"
        },
        "val":"1"
    });
  })

  test('test if the function throws an error if we give it a negative number', () => {
    expect(() => {list.numberToListNodeConverter(-2)}).toThrow("no negative number allowed")
})