var arrayTemperaturas = [54, 78, 56, 98, 0, 12, 11, 37]

for (num = 0; num <= 7; num++){

    let conversao = (arrayTemperaturas[num] - 32) / 1.8
    console.log(conversao.toFixed(2)) //Esse método formata o valor para duas casas decimais

}