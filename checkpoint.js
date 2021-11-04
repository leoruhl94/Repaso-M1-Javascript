const {
    LinkedList,
    Node
} = require('./DS.js')


//______________________LinkedLists______________________
/*
*--------------------------------------------------------------*
                       EJERCICIO 1
*--------------------------------------------------------------*

Eliminar el ultimo elemento de una Lista Enlazada y devolver su valor.
Si la lista esta vacia, devolver null.
*/


LinkedList.prototype.remove = function (){
    if(!this.head) return null;
    else if(!this.head.next){
        let data = this.head.value;
        this.head = null;
        this.length--;
        return data;
    }else {
        let currentNode = this.head;
        let holdingPointer;
        let data;
        if(currentNode){
            while(currentNode.next){
                holdingPointer = currentNode;
                currentNode = currentNode.next;
            }
            data = currentNode.value;
            holdingPointer.next = null;
            this.length--;
            return data;
        }
    } 
}
/*
*--------------------------------------------------------------*
                       EJERCICIO 2
*--------------------------------------------------------------*

Buscar un valor dentro de una Lista Enlazada.
Si se encuentra el valor, devolver el nodo completo que contiene ese valor.
Si el valor es una función de callback, debe ejecutarla con el valor de ese nodo.
Si no se encuentra nada, devolver null.

*/
LinkedList.prototype.search = function (value){
    let currentNode = this.head;
    while(currentNode){
        if (typeof value === 'function'){
            if(value(currentNode.value)===true)
                return currentNode;
        }  
        if(currentNode.value === value)
          return currentNode;
        else   
            currentNode = currentNode.next;
        }
    return null; 
}

/*
*--------------------------------------------------------------*
                       EJERCICIO 3
*--------------------------------------------------------------*

Agregar un nuevo nodo al principio de una Lista Enlazada, sin perder el resto de la lista.
Retornar la lista entera.
*/

LinkedList.prototype.append = function(value){
    const newNode = new Node(value)
    let prevHead = this.head;
    this.head = newNode;
    newNode.next = prevHead;
    return this
}


/*
*--------------------------------------------------------------*
                       EJERCICIO 4
*--------------------------------------------------------------*

Buscar el nodo que contenga el valor pasado por parametro y removerlo, sin perder el resto de la lista.
Si se removio correctamente, devolver el valor eliminado.
Si no existe ese valor en la lista enlazada, devolver null.
*/

LinkedList.prototype.removeValue = function(value) {
    if(!this.head) return null
    let current = this.head
    let holdingPointer;
    let data;
    let aux;
    while(current.next){
        if(current.next === value){
            data = current.next
            holdingPointer = current
            aux = current.next.next
            current.next = aux
            return data.value;
        } else {
            holdingPointer = current;
            current = current.next;
        }
    }
    return null;
}

/*
*--------------------------------------------------------------*
                       EJERCICIO 5
*--------------------------------------------------------------*

Convertir la lista enlazada en un array con todos sus valores.
*/

LinkedList.prototype.getArray = function(){
    let array = []
    let current = this.head
    if(!this.head.value) return null
    while(current){
        array.push(current.value)
        current = current.next
    }
    return array;
}



//______________________BST______________________



// *--------------------------------------------------------------*
//                        EJERCICIO 2
// *--------------------------------------------------------------*

BinarySearchTree.prototype.height = function () {
	// Tu código aca:
	if (!this.left && !this.right) {
		return 1;
	} else {
		if (this.left && !this.right) {
			return this.left.height() + 1;
		} else if (!this.left && this.right) {
			return this.right.height() + 1;
		} else {
			return Math.max(this.left.height() + 1, this.right.height() + 1);
		}
	}
};




module.exports = {
    LinkedList,
}