

/**
 * Primeiro criamos a classe celular
 * Criamos a função constructor e nela definimos nosso atributo e um metodo de exemplo
 * Após isso criamos um objeto a partir de nosssa classe 
 * e mostramos no console o nosso atributo, e depois chamamos a nossa função
 */




class celular{
    constructor(){
        this.marca = "Iphone";
    }

    ligar(){
        console.log("Ligando......");
    }
 
};


celular1 = new celular();

console.log(celular1.marca);

console.log(celular1.ligar());


