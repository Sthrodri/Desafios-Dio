function getHeroLevel(vitorias)
{
    if (vitorias < 10)
        return "Ferro";
    else if (vitorias >= 11 && vitorias <= 20)
        return "Bronze";
    else if (vitorias >= 21 && vitorias <= 50)
        return "Prata";
    else if (vitorias >= 51 && vitorias <= 80)
        return "Ouro";
    else if (vitorias >= 81 && vitorias <= 90)
        return "Diamante";
    else if (vitorias >= 91 && vitorias <= 100)
        return "Lendário";
    else if (vitorias >= 101)
        return "Imortal";
}

function calcularRankeadas(vitorias, derrotas)
{
    const saldoVitorias = vitorias - derrotas;
    const nivel = getHeroLevel(vitorias);

    console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);
}

calcularRankeadas(120, 10);
