
function botao(){
   document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>";
   console.log(document.getElementById("agradecimento"));
    // alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://www.uol.com.br/")
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse!";
    // alert("Trocar texto");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui!";
    // alert("Trocar texto");
}

function load(){
    alert('Página carregada');
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

// function validaIdade(idade){
//     var validar;
//     if(idade >=18){
//        return validar = true;
//     }else{
//       return validar = false
//     } 
// }

// var idade = prompt("Qual a sua idade? ");
// console.log(validaIdade(idade));

// function soma(n1, n2){
//     return n1 + n2;
// }

// function setReplace(frase, nome, novo_nome){
//    return frase.replace(nome, novo_nome);
// } 

// alert(soma(5,10));
// alert(setReplace('Vai Japão', 'Japão', 'Brasil'));

// var d = new Date();

// alert(d.getDay());
// alert(d.getHours());
// alert(d.getMinutes());


// var count = 0;

// for(count = 0; count <=5; count++){
//     console.log(count);
// }

// var count = 0;
// while (count <= 5){
//     console.log(count);
//     count++;
// }

// var idade = prompt("Qual a sua idade? ");

// if(idade >= 18){
//     alert("Maior de idade");
// }else{
//     alert("Menor de idade");
// }

// var frutas = [{nome: "maçã", cor: "vermelha"}, {nome: "uva", cor: "roxa"}];
// console.log(frutas);
// console.log(frutas[1].nome);

// var fruta = {nome: "maçã", cor: "vermelha"};
// console.log(fruta.nome);
// alert(fruta.cor);

// var lista = ["maçã", "pêra", "laranja"];
// lista.push("uva");
// console.log(lista);
// console.log(lista.toString());

// var nome = "João Maria";
// var idade = 22;
// var frase = "Japão é o melhor país do mundo!";

// // alert("Bem Vindo " + nome + "!");