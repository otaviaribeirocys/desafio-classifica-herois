const listDigmons = [
    { name: "Agumon", xp: "2800" },
    { name: "Greymon", xp: "5000" },
    { name: "Gabumon", xp: "2500" },
    { name: "Garurumon", xp: "4000" },
    { name: "Togemon", xp: "4500" },
    { name: "Ikkakumon", xp: "7000" },
    { name: "Angewomon", xp: "8000" },
    { name: "Magna Angemon", xp: "9000" },
    { name: "Seraphimon", xp: "10000" },
    { name: "Dinotigermon", xp: "1200" },
  ];
  
  const level = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Diamante", "Imortal", "Radiante"];
  
  listDigmons.forEach((digimon) => {
    let { name, xp } = digimon;
    xp = parseInt(xp);
  
    let nivel = "";
  
    if (xp <= 1000) {
      nivel = level[0]; // Ferro
    } else if (xp <= 2000) {
      nivel = level[1]; // Bronze
    } else if (xp <= 3000) {
      nivel = level[2]; // Prata
    } else if (xp <= 5000) {
      nivel = level[3]; // Ouro
    } else if (xp <= 7000) {
      nivel = level[4]; // Platina
    } else if (xp <= 8000) {
      nivel = level[5]; // Diamante
    } else if (xp <= 10000) {
      nivel = level[6]; // Imortal
    } else {
      nivel = level[7]; // Radiante
    }
  
    console.log(`O Digimon ${name} é do nível: ${nivel}`);
  });
  