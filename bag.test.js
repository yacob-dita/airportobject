const Bag =  require("./bag.js")

describe('Bag class',() => {
    test('bag needs a weight',()=>{
        //  make an instant of clss Bag Wwith specific argument.
        const testBag  = new Bag(16)
        expect(testBag.weight).toBe(16)

    })
    
})