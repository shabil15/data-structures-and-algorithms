class Hashtable{
  constructor(size){
    this.table = new Array(size)
    this.size = size
  }

  hash(key){
    let total = 0
    for(let i=0;i<key.length;i++){
      total += key.charCodeAt(i)
    }
    return total % this.size
  }

  set(key,value){
    let index = this.hash(key)
    if(!this.table[index]){
      this.table[index]=[]
    }

    this.table[index]= value
  }

  get(key){
    let index = this.hash(key)
    return this.table[index]
  }

  remove(key){
    let index = this.hash(key)
    this.table[index]= undefined
  }

  display(){
    for(let i=0;i<this.table.length;i++){
      if(this.table[i]){
        console.log(i,this.table[i]);
      }
    }
  }
  
}

const table = new Hashtable(10)

table.set('name','shabil')
table.set('age',13)
table.set('place','mlpm')
table.remove('name')
console.log(table.get('place'));
table.display()