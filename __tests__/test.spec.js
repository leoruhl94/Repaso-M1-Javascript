const { LinkedList } = require("../checkpoint.js");

describe("LinkedList", function () {

  
  describe("Add y Remove", function () {
    let linkedList = new LinkedList();
    const cb = function (value) {
      if (value > 10) return true;
      return false;
    };

    it("Debe agregar correctamente ", function () {
  
      expect(linkedList.add(1).value).toEqual(1);
      expect(linkedList.add(2).value).toEqual(2);
      expect(linkedList.head.value).toEqual(1);
      expect(linkedList.head.next.value).toEqual(2);
    });
    it("Debe borrar correctamente ", function () {
      linkedList.add(3);
      linkedList.add(4);
      expect(linkedList.remove()).toEqual(4);
      expect(linkedList.head.next.next.value).toEqual(3);
      expect(linkedList.head.next.next.next).toEqual(null);
    });
    console.log(linkedList)
  });

  describe("Search", function () {
    let linkedList2 = new LinkedList();
    linkedList2.add(1);
    linkedList2.add(2);
    const cb = function (value) {
      if (value > 10) return true;
      return false;
    };


    it("debe retornar el nodo que corresponda con el valor y retornarlo", function () {
      linkedList2.add(5);
      linkedList2.add(3);
      expect(linkedList2.search(5).value).toEqual(5);
      expect(linkedList2.search(5).next.value).toEqual(3);
    });

    it("si no encuentra el valor retorna null", function () {
      expect(linkedList2.search(4)).toEqual(null);
    });

    it("Si recibe un cb debe ejecutarlo", function () {
      linkedList2.add(12);
      linkedList2.add(8);
      expect(linkedList2.search(cb).value).toEqual(12);
      expect(linkedList2.search(cb).next.value).toEqual(8);
    });

    it("Debe retornar null si el cb no hace match", function () {
      linkedList2.remove();
      linkedList2.remove();
      expect(linkedList2.search(cb)).toEqual(null);
     });
   
  });

  describe("Append y removeX", function () {
    let linkedList3 = new LinkedList();
    linkedList3.add(1);
    linkedList3.add(2);
    const cb = function (value) {
      if (value > 10) return true;
      return false;
    };


    it("debe insertar un nuevo nodo al principio de la lista", function () {
      expect(linkedList3.append(5).head.value).toEqual(5);
      linkedList3.append(3);
      expect(linkedList3.head.next.value).toEqual(5);
      expect(linkedList3.head.value).toEqual(3);
    });

    it("Debe remover el nodo que coincida con el valor pasado", function () {
      linkedList3.removeValue(5);
      expect(linkedList3.head.next.value).toEqual(1);
      expect(linkedList3.removeValue(2)).toEqual(2);
      expect(linkedList3.head.next.next).toEqual(null);
    });


  });
});
