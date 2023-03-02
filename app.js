
// Obtém o botão de abrir o modal
var budget = document.getElementById("budget");

// Obtém o modal
var modal = document.getElementById("myModal");

// Obtém o botão de fechar o modal
var closeBtn = document.getElementsByClassName("close")[0];

// Quando o usuário clicar no botão, abre o modal
budget.onclick = function() {
	modal.style.display = "block";
}

// Quando o usuário clicar no botão de fechar, fecha o modal
closeBtn.onclick = function() {
	modal.style.display = "none";
}

// Quando o usuário clicar fora do modal, fecha o modal
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}
