import { addition } from "./calculator"

describe('Test Addition',()=>{

    it("Testing Addition Function",()=>{
        expect(addition(10,20)).toBe(30);
    })

})