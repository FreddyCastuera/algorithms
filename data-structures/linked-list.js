class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }
    insertTail(val){
        let nodo = new Node(val);
        if(this.tail==null){
            this.head=nodo;
            this.tail=nodo;
            
        }
        else{
            this.tail.next=nodo;
            this.tail=nodo;
        }
        this.length++;
    }
    deleteTail(){
        if(this.length===0){
            this.head=null;
            this.tail=null;
            throw new Error("no podemos eliminar de una lista vacia");
        }

        let current = this.head;
        let temp = null;
        for(let i=0;i<this.length-1;i++){
            current=current.next;
        }
        temp=current;
        current.next=null;
        this.tail=current;
        this.length--;
        return temp.val;
    }
    deleteHead(){
        if(this.length===0){
            this.head=null;
            this.tail=null;
            throw new Error("no podemos eliminar de una lista vacia");
        }
        let temp = this.head;
        this.head=this.head.next;
        this.length--;
        return temp.val;
    }
    traverse(){
        let current = this.head;
        let string="head-->";
        for(let i=0;i<this.length;i++){
            string+=current.val+"-->"
            current=current.next;
        }
        string+="null";
        return string;
    }
}

let lista = new LinkedList();
lista.insertTail(1);
lista.insertTail(2);
lista.insertTail(3);
lista.insertTail(4);
lista.insertTail(5);
lista.insertTail("hola");
console.log(lista.traverse());
console.log(lista.deleteHead());
console.log(lista.deleteTail());
console.log(lista.traverse());





