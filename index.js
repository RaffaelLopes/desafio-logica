// Função para calcular o nível com base na experiência (XP)
function calcularNivel(nome, xp) {
    let nivel;

    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 4000) {
        nivel = "Prata";
    } else if (xp >= 5001 && xp <= 6000) {
        nivel = "Ouro";
    } else if (xp >= 6001 && xp <= 7000) {
        nivel = "Platina Diamante";
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    console.log("O Herói " + nome + " está no nível de " + nivel);
}

// Exemplos de uso
calcularNivel("Mula sem Cabeça", 1500);
calcularNivel("Iara", 6000);
calcularNivel("Saci Pererê", 3500);
calcularNivel("Caipora", 8000);
calcularNivel("Curupira", 500);
calcularNivel("Boto Cor de Rosa", 9500);
calcularNivel("Negrinho do Pastoreiro", 200);
calcularNivel("Cuca", 7500);
calcularNivel("Boitatá", 3000);
calcularNivel("Cobra Grande", 11000);
calcularNivel("Vitória Régia", 700);
calcularNivel("Cumadre Fulozinha", 9200);
calcularNivel("Corpo Seco", 400);
