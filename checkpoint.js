const {
    LinkedList,
    Node
} = require('./DS.js')

function prueba (){
    return 'probando'
}

//______________________Recursividad______________________





//______________________LinkedLists______________________
/*
clase LL y OLL + Clase node
LL
->Add
->append
->RemoveLast
->RemoveX (por valor)
->GetArray
->Search

OLL
->Add
->RemoveX


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

//retorna el nodo que coincida con el valor si no encuentra retorna null
// si recibe un cb lo debe aplicar
LinkedList.prototype.search = function (value){
    let currentNode = this.head;
    while(currentNode){
        if (typeof value === 'function'){
            if(value(currentNode.value)===true)
                return currentNode.value;
        }  
        if(currentNode.value === value)
          return currentNode.value;
        else   
            currentNode = currentNode.next;
        }
    return null; 
}






//______________________Queue______________________





//______________________BST______________________





//______________________Sort______________________





//______________________Clousures______________________









module.exports = {
    LinkedList,
}