const Node = require('./node');

class LinkedList {
    constructor() 
    {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) 
    {
        var element=new Node(data);
        if (this.length>0){
            this._tail.next = element;
            element.previous = this._tail;
            this._tail = element;
        }else{
            this._head=element;
            this._tail=element;
        }
        this.length++;
        return this;
    }

    head() 
    {
        if (this.length>0){
            return this._head.data;    
        }
        else{
            return null;
        }
        
    }

    tail() 
    {
        if (this.length>0){
            return this._tail.data;    
        }
        else{
            return null;
        }
        
    }

    at(index) 
    {
        var current = this._head;
        var pos=0;
        if (this.length<1 || index<0 || index>this.length){
            return false;
        }
        else
        {
            while (pos < index) 
            {
                current = current.next;
                pos++;
            }
            return current.data;
        }
        
    }

    insertAt(index, data) 
    {
        var element=new Node(data);
        var current = this._head;
        var pos=0;
        if (index<0 || index>this.length){
            return this;
        }
        else{
            //вставка в голову
            if (index==0){
                if (this.length==0){
                    this._head=element;
                    this._tail=element;        
                }
                else{
                    this._head=element;
                    this._head.next=current;
                    current.previous=element;
                }
            }
            //вставка в конец
            else if (index==this.length){
                append(data);
            }
            //вставка между
            else{
                while(pos<index){
                    current=current.next;
                    pos++;
                }
                before=current.previous;
                after=current;
                before.next=element;
                element.previous=before;
                after.previous=element;
                element.next=after;
            }
            this.length++;
            return this;
        }
    }

    isEmpty() 
    {
        if (this.length==0)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    clear()
    {
        this.length = 0;
        this._head = null;
        this._tail = null;
        return this;
    }

    deleteAt(index) 
    {
        var current = this._head;
        var pos=0;
        if (this.length<1 || index<0 || index>this.length){
            return false;
        }
        else{
            //проверка или не голова
            if (index==0){
                if (this.length==1){
                    this._head=null;
                    this._tail=null;
                }
                else{
                    this._head=this._head.next;
                    this._head.previous=null;
                }
            }
            //проверка или не хвост
            else if (index==this.length-1){
                this._tail=this._tail.previous;
                this._tail.next = null;
            }
            //где-то между головой и хвостом
            else{
                while(pos<index){
                    current=current.next;
                    pos++;
                }
                var before=current.previous;
                var after=current.next;
                before.next=after;
                after.previous=before;
                current=null;
            }
            this.length--;
            return this;
        }
    }

    reverse() 
    {
        var current = this._head;
        while(current) {
            var tmp = current.next;
            current.next=current.previous;
            current.previous = tmp;
            current =tmp;
        }
        var tmp = this._head;
        this._head = this._tail;
        this._tail = tmp;    

        return this;
    }

    indexOf(data) 
    {
        var current = this._head;
        var pos=0;
        while (pos < this.length) 
        {
            if (current.data==data){
                return pos;
            } 
            current = current.next;
            pos++;
        } 
        return -1;
    }
}

module.exports = LinkedList;
