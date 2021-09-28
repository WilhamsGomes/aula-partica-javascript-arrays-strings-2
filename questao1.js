/*1)      Calcular a tabuada de multiplicar de 5.

 a)       Adicionar o resultado de cada cálculo em um array.

b)      Transformar o array em string.

c)       Exibir no console.*/


var array = []

for (num = 0; num <= 10; num++){
  
    let tabuada = num * 5
    array[num] = tabuada

    if (num == 10){
        
        let string = array.join(" ; ")
        console.log(string)
    }

}