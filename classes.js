
// let animal = {eats : true}
// let rabbit = {jumps : true}
// rabbit.__proto__ = animal

//  now check rabbit on console , it's prototype changed to animal and shows eats:true as well with jumps:true

class Animal{
    constructor(name){console.log("constructor is on")
        this.name = name
    } 
    
    eats() {console.log(" char rha hun ")}

    jumps() {console.log(" kood rha hun ")}
}

let chita = new Animal("sheru")

class Lion extends Animal {
    constructor(name){console.log("constructor is on")
        super(name)
        this.name = name}
}

let loki = new Lion("shera")
