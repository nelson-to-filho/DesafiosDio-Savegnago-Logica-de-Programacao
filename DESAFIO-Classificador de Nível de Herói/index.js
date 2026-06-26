let herois = [
  ["007", 10000],
  ["Meliodas", 1500],
  ["Luffy", 3500],
  ["Goku", 6500],
  ["Kaka", 7500],
  ["Joazinho", 8500],
  ["Fulano", 9500],
  ["Siclano", 12000]
];

for (let i = 0; i < herois.length; i++) {
  let nomeHeroi = herois[i][0];
  let xpHeroi = herois[i][1];
  let nivel = "";

  if (xpHeroi <= 1000) {
    nivel = "Ferro";
  } else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
    nivel = "Bronze";
  } else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
    nivel = "Prata";
  } else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
    nivel = "Ouro";
  } else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
    nivel = "Platina";
  } else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
    nivel = "Ascendente";
  } else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
    nivel = "Imortal";
  } else {
    nivel = "Radiante";
  }

  console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivel);
}