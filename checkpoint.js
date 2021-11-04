const {
    LinkedList,
    Node
} = require('./DS.js')


//______________________LinkedLists______________________
/*
*/
/*
*--------------------------------------------------------------*
                       EJERCICIO 1
*--------------------------------------------------------------*

Eliminar el ultimo elemento de una Lista Enlazada y devolver su valor.
Si la lista esta vacia, devolver null.
*/

LinkedList.prototype.remove = function (){
  
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

}

/*
*--------------------------------------------------------------*
                       EJERCICIO 3
*--------------------------------------------------------------*

Agregar un nuevo nodo al principio de una Lista Enlazada, sin perder el resto de la lista.
Retornar la lista entera.
*/

LinkedList.prototype.append = function(value){

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

}

/*
*--------------------------------------------------------------*
                       EJERCICIO 5
*--------------------------------------------------------------*

Convertir la lista enlazada en un array con todos sus valores.
*/

LinkedList.prototype.getArray = function(){

}







module.exports = {
    LinkedList,
}