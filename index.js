// Write your classes below this line
class Trainer {
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.pokemon = [];
        this.money = 0;
        this.bag = [];
    }
    
    capturePokemon(pokemon){
      if (!pokemon.isCaptured && pokemon instanceof Pokemon){
        pokemon.isCaptured = !pokemon.isCaptured;
        this.pokemon.push(pokemon);
        console.log(`You captured ${pokemon.name}`);
        return `You captured ${pokemon.name}`;
      } else {
        return `Not for capturing`
      }
    }

    
    trainPokemon(pokemon){
        pokemon.experience += 1000;
        if(pokemon.level * 1000 <= pokemon.experience){
            pokemon.level += 1;
            pokemon.health += 7 * pokemon.level;
            pokemon.experience = 0;
        }
    }
    
    releasePokemon(pokemon){
        let idx = this.pokemon.findIndex(poke => poke.name === pokemon.name);
        if(idx < 0){
            console.log(`${this.name}, you don't have ${pokemon}`);
            return `${this.name}, you don't have ${pokemon}`;
        }
        this.pokemon[idx].isCaptured = false;
        this.pokemon.splice(idx, 1);
    }
    
    useItem(){
        
    }
    
}

class Pokemon{
    constructor(name, type, attacks, ...evolutions){
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.experience = 0;
        this.evolutions = [...evolutions];
        this.isCaptured = false;
        this.attacks = attacks;
    }
    
    evolve(){
        if(this.level === 10){
            console.log(`your pokemon is evolving`);
            this.name = this.evolutions[0];
            this.health += this.level * 15;
        } else if(this.level === 20){
            console.log("evolving again");
            this.name = this.evolutions[1];
            this.health += this.level * 15;
        }
    }
    
    useAttack(pokemon, attack){
        console.log(attack);
        //does it know this attack
        let idx = this.attacks.findIndex(att => att === attack);
        if(idx >= 0){
            pokemon.health -= Math.floor(Math.random() * 20 * this.level);
        } else {
            console.log("not hit");
        }
    }
}

class Items{
    constructor(name, description, quantity, price) {
        this.name = name;
        this.description = description;
        this.quantity = quantity;
        this.price = price; 
    }
    displayDescription(){
        console.log(`${this.name}:\n ${this.description}`);
        return `${this.name}:\n ${this.description}`;
    }
    
    buyItem(trainer){
        if(trainer.money >= this.price){
            trainer.bag.push(this);
            trainer.money -= this.price;
            return `${this.name} has been successfully bought.`
        }
        else{
            return `${this.name} can not be bought, you do not have enough money.`
        }
        //check if item can be bought? enough money?
        //if so, add to bag.
    }
    
    
}




console.log("Welcome to Pikachu Town(pokemon)!");
let dummy = new Trainer("test", 10);
let pikachu = new Pokemon("Pichu", "fork in wall", ["bite", "struggle"], "Pikachu", "Riachu");
let bulbasaur = new Pokemon("Bulbasaur", "green", ["whip lash", "bullet seed"], "Ivysausaur", "Venusaur")
console.log(dummy);
dummy.capturepokemon(pikachu);
console.log(pikachu);
dummy.trainpokemon(pikachu);
console.log(pikachu);
dummy.releasepokemon(pikachu);
console.log(dummy);
console.log(pikachu);
pikachu.level = 10;
pikachu.evolve();
console.log(pikachu);
pikachu.level = 20;
pikachu.evolve();
console.log(pikachu);
console.log(pikachu, bulbasaur);
pikachu.useAttack(bulbasaur, "bite");
console.log(pikachu, bulbasaur);
// Write your data (instances and method calls) below this line
