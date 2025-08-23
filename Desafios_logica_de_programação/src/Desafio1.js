//função para obter o level do heroi
function getHeroLevel(xp) 
{
    if (xp < 1000)
        return "Ferro";
    else if (xp >= 1001 && xp <= 2000)
        return "Bronze";
    else if (xp >= 2001 && xp <= 5000)
        return "Prata";
    else if (xp >= 5001 && xp <= 7000)
        return "Ouro";
    else if (xp >= 7001 && xp <= 8000)
        return "Platina";
    else if (xp >= 8001 && xp <= 9000)
        return "Ascendente";
    else if (xp >= 9001 && xp <= 10000)
        return "Imortal";
    else if (xp >= 10001)
        return "Radiante";
}

//função para imprimir no terminal a frase pedida no desafio de acordo com o valor das variaveis
function printHeroStatus(name, xp) 
{
    const level = getHeroLevel(xp);
    
    console.log(`O Herói de nome ${name} está no nível de ${level}`);
}

printHeroStatus("Sthe", 111111111111111111111);
