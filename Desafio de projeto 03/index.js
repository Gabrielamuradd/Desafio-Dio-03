//Classe;
class Herói {
    constructor(nome, idade, tipo, atacar){
        this.nome= nome;
        this.idade = idade;
        this.tipoHero = tipo;
        this.ataque = atacar;
    }

//Método;
realizarAtaque(){
    console.log(`O ${this.tipoHero} ${this.nome} atacou usando seu cajado que possui ${ this.ataque} de poder.`);
        }
}
//Objeto
let classificar = new Herói ( "Gandalf", "cem anos", "mago" , "magia");

//Escrevendo no console
classificar.realizarAtaque();
