class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    if (this.tipo === "mago") {
      ataque = "magia";
    } else if (this.tipo === "guerreiro") {
      ataque = "espada";
    } else if (this.tipo === "monge") {
      ataque = "artes marciais";
    } else if (this.tipo === "ninja") {
      ataque = "shuriken";
    } else {
      ataque = "um ataque desconhecido";
    }

    console.log(`o ${this.tipo} atacou usando ${ataque}`);
  }
}

// Criando objetos da classe Heroi
let herois = [
  new Heroi("Merlin", 120, "mago"),
  new Heroi("Arthur", 35, "guerreiro"),
  new Heroi("Lee", 28, "monge"),
  new Heroi("Hanzo", 22, "ninja")
];

// Laço de repetição para executar o ataque de cada herói
for (let heroi of herois) {
  heroi.atacar();
}