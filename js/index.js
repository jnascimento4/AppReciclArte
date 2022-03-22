//CONFIGURAÇÕES DO MENU PRINCIPAL

var inicio = document.getElementById('telaPrincipal');
var estudantes = document.getElementById('alunos') 

var contatos = document.querySelector('footer');

function home() {
  inicio.style.display = "block";
  estudantes.style.display = "none";
  contatos.style.display = "none";
}
function participantes() {
  inicio.style.display = "none";
  estudantes.style.display = "block";
  contatos.style.display = "none";
}
function footer() {
  inicio.style.display = "none";
  estudantes.style.display = "none";
  contatos.style.display = "block";
}


//CONFIGURAÇÃO DA LOGO MARCA
var biografia = document.querySelector(".fundoImg2")

function intuito() {
  biografia.style.display = "block"
}
function sair() {
  biografia.style.display = "none"
}


