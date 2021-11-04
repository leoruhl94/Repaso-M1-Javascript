const {
    LinkedList,
} = require("../checkpoint.js");

describe("probando LL", function () {
  var linkedList = new LinkedList();
  const cb = function(value){
    if(value > 10) return true
    return false
  } 


  it("Debe agregar correctamente ", function () {
      linkedList.add(1)
      expect(linkedList.add(2).value).toEqual(2);
      expect(linkedList.head.value).toEqual(1);
      expect(linkedList.head.next.value).toEqual(2);
    });
  it("Debe borrar correctamente ", function () {
      linkedList.add(3)
      linkedList.add(4)
      expect(linkedList.remove()).toEqual(4);
      expect(linkedList.head.next.next.value).toEqual(3);
      expect(linkedList.head.next.next.next).toEqual(null);
    });
 
  it("debe retornar el nodo que corresponda con el valor y retornarlo", function () {
      linkedList.remove()
      linkedList.remove()
      linkedList.add(5)
      linkedList.add(3)
      expect(linkedList.search(5).value).toEqual(5);
      expect(linkedList.search(5).next.value).toEqual(3);
    });

  it("si no encuentra el valor retorna null", function () {
      expect(linkedList.search(4)).toEqual(null);
    });

  it("Si recibe un cb debe ejecutarlo", function () {
      linkedList.add(12)
      linkedList.add(8)
      expect(linkedList.search(cb).value).toEqual(12);
      expect(linkedList.search(cb).next.value).toEqual(8);
   });
    
  it("Debe retornar null si el cb no hace match", function () {
      linkedList.remove()
      linkedList.remove()
      expect(linkedList.search(cb)).toEqual(null);
    });
});