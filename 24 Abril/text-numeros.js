let nome = "JM";
let idade = 18;
let casado = false;
let txt = "Estão chegando as provas.";
let num = 123.5432;


console.log(typeof nome); // Esse typeof serve para indicar o tipo da variável
console.log(typeof idade);
console.log(typeof casado);

console.log("Tamanho", nome.length); //Ele pega o tamanho da variável (quantos caractéres no caso) (O length)

console.log(txt); //Texto original (texto alterado abaixo desse)
console.log(txt.replace("provas", "avaliações")); //Serve para substituir as palavras (provas por avaliações no caso)
console.log(txt.toUpperCase()) // Deixou o "txt" em caps lock (Virou - ESTÃO CHEGANDO AS PROVAS)
console.log(txt.toLowerCase()); // Deixou tudo em minúsculo dessa vez (Virou - estão chegando as provas)
console.log(num.toFixed(2)); // Altera / mostra as casas decimais