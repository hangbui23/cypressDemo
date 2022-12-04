//dump data
let add= (a,b) => a+b;
let subtract = (a,b)=> a-b

describe('Dump data',()=>{
  describe('Positive number',()=>{
    it('Add positive method',()=>{
      expect(add(2,2)).to.eql(4);
    })
    it('Subtract positive method',()=>{
      expect(subtract(2,2)).to.eql(0);
    })
  })
  describe('Decimal number',()=>{
    it('Add decimal method',()=>{
      expect(add(2.2,2.2)).to.eql(4.4);
    })
    it('Subtract decimal method',()=>{
      expect(subtract(2.2,2.2)).to.eql(0);
    })

  })
})