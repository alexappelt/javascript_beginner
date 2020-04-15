
let carro = ["Corsa" , "Civic", "Corolla"];



carro.forEach(                  //Primeiro com o forEach mostramos o indice e o valor
function(value, index)
{
console.log(index,value);
}
);

carro.forEach(                  //Depois mostramos apenas os valores do array
    function(value, index)
    {
    console.log(value);
    }
    );



    /**
     * 
     * Segundo exemplo forEach
     */



let pessoa = ["Alex" , "Appelt" , 20 , "(49)9 91367352"];


pessoa.forEach(
function(valor, indice)
{
console.log(indice, valor)

}
);

