//CONFIGURAÇÕES DA SEÇÃO DE ALUNOS

var sara = document.getElementById("sara");
var debora = document.getElementById("debora");
var fernanda = document.getElementById("fernanda");
var alexandre = document.getElementById("alexandre");
var bianca = document.getElementById("bianca");
var douglas = document.getElementById("douglas");
var nanda = document.getElementById("nanda");
var dandara = document.getElementById("dandara");
var clara = document.getElementById("clara");

var sara1 = document.getElementById("sara1");
var debora1 = document.getElementById("debora1");
var fernanda1 = document.getElementById("fernanda1");
var alexandre1 = document.getElementById("alexandre1");
var bianca1 = document.getElementById("bianca1");
var douglas1 = document.getElementById("douglas1");
var nanda1 = document.getElementById("nanda1");
var dandara1 = document.getElementById("dandara1");
var clara1 = document.getElementById("clara1");

sara.style.opacity = "1"
debora.style.opacity = "1"
fernanda.style.opacity = "1"
alexandre.style.opacity = "1"
douglas.style.opacity = "1"
bianca.style.opacity = "1"
nanda.style.opacity = "1"
dandara.style.opacity = "1"
clara.style.opacity = "1"

sara1.style.opacity = "0"
debora1.style.opacity = "0"
fernanda1.style.opacity = "0"
alexandre1.style.opacity = "0"
douglas1.style.opacity = "0"
bianca1.style.opacity = "0"
nanda1.style.opacity = "0"
dandara1.style.opacity = "0"
clara1.style.opacity = "0"

function alunaSara() {
    sara.style.opacity = "0.5"
    sara1.style.opacity = "1"
}
function bioSara() {
    prompt("Tenho 14 anos de idade e sou anula das turmas de violão. Quer Saber Mais de mim?");
    var resposta = prompt.value;
    console.log(resposta)

}
function alunaDebora() {
    debora.style.opacity = "0.5"
    debora1.style.opacity = "1"
}
function alunaFernanda() {
    fernanda.style.opacity = "0.5"
    fernanda1.style.opacity = "1"
  }
function alunoAlexandre() {
    alexandre.style.opacity = "0.5"
    alexandre1.style.opacity = "1"
}
function alunaBianca() {
    bianca.style.opacity = "0.5"
    bianca1.style.opacity = "1"
}
function alunoDouglas() {
    douglas.style.opacity = "0.5"
    douglas1.style.opacity = "1"
}
function alunaNanda() {
    nanda.style.opacity = "0.5"
    nanda1.style.opacity = "1"
}
function alunaDandara() {
    dandara.style.opacity = "0.5"
    dandara1.style.opacity = "1"
}
function alunaClara() {
    clara.style.opacity = "0.5"
    clara1.style.opacity = "1"
}
function fecharNome() {
    sara.style.opacity = "1"
    debora.style.opacity = "1"
    fernanda.style.opacity = "1"
    alexandre.style.opacity = "1"
    douglas.style.opacity = "1"
    bianca.style.opacity = "1"
    nanda.style.opacity = "1"
    dandara.style.opacity = "1"
    clara.style.opacity = "1"

    sara1.style.opacity = "0"
    debora1.style.opacity = "0"
    fernanda1.style.opacity = "0"
    alexandre1.style.opacity = "0"
    douglas1.style.opacity = "0"
    bianca1.style.opacity = "0"
    nanda1.style.opacity = "0"
    dandara1.style.opacity = "0"
    clara1.style.opacity = "0"
}