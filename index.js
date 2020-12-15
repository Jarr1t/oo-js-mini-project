// Write your classes below this line
class Trainer {
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.pokemon = [];
        this.money = 0;
        this.bag = [];
    }
    capturePokemon(Pokemon){
        Pokemon.isCaptured = !Pokemon.isCaptured;
        this.pokemon.push(Pokemon);
        console.log(`You captured ${Pokemon.name}`);
        return `You captured ${Pokemon.name}`;
    }
    
    trainPokemon(Pokemon){
        Pokemon.experience += 1000;
        if(Pokemon.level * 1000 <= Pokemon.experience){
            Pokemon.level += 1;
            Pokemon.health += 7 * Pokemon.level;
            Pokemon.experience = 0;
        }
    }
    
    releasePokemon(Pokemon){
        let idx = this.pokemon.findIndex(poke => poke.name === Pokemon.name);
        if(idx < 0){
            console.log(`${this.name}, you don't have ${Pokemon}`);
            return `${this.name}, you don't have ${Pokemon}`;
        }
        this.pokemon[idx].isCaptured = false;
        this.pokemon.splice(idx, 1);
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
    
    useAttack(Pokemon, attack){
        console.log(attack);
        //does it know this attack
        let idx = this.attacks.findIndex(att => att === attack);
        if(idx >= 0){
            Pokemon.health -= Math.floor(Math.random() * 20 * this.level);
        } else {
            console.log("not hit");
        }
    }
}


console.log("Welcome to Pikachu Town(pokemon)!");
let dummy = new Trainer("test", 10);
let pikachu = new Pokemon("Pichu", "fork in wall", ["bite", "struggle"], "Pikachu", "Riachu");
let bulbasaur = new Pokemon("Bulbasaur", "green", ["whip lash", "bullet seed"], "Ivysausaur", "Venusaur")
console.log(dummy);
dummy.capturePokemon(pikachu);
console.log(pikachu);
dummy.trainPokemon(pikachu);
console.log(pikachu);
dummy.releasePokemon(pikachu);
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
