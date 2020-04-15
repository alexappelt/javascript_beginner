
let celular = function(){    //Criamos uma classe celular

    this.marca = "Iphone";     //Definimos um metodo para ela utilizando this
    
    this.ligar = function(){    //Definimos um metodo, utilizando this
    
        console.log("Prim, prim, prim........");
    
    }
    
    }
    
    
    iphone = new celular();   //criamos um novo objeto do tipo celular
    
    console.log(iphone);    //mostramos nosso objeto
    
    console.log(iphone.marca);  //Mostramos apenas o valor do atributo de nosso objeto
    
    iphone.marca = "Samsung";  //Trocamos o conteudo do atributo
    
    console.log(iphone.marca); //Exibimos o atributo novamente
    
    iphone.ligar();  ///Chamamos um metodo