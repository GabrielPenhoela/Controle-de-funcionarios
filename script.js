let funcionarios = [];

function adicionarFuncionario() {
  const nome = document.getElementById("nomeFuncionario").value.trim();
  const salario = parseFloat(document.getElementById("salarioFuncionario").value);

  if (!nome || isNaN(salario) || salario <= 0) {
    alert("Preencha todos os campos corretamente.");
    return;
  }

  funcionarios.push({
    nome,
    salarioOriginal: salario,
  });

  atualizarLista();
  limparCampos();
}

function atualizarLista() {
  const lista = document.getElementById("listaFuncionarios");
  lista.innerHTML = "";

  funcionarios.forEach((f) => {
    const li = document.createElement("li");
    li.innerHTML = `${f.nome} - R$ ${f.salarioOriginal.toFixed(2)}`;
    lista.appendChild(li);
  });
}

function limparCampos() {
  document.getElementById("nomeFuncionario").value = "";
  document.getElementById("salarioFuncionario").value = "";
}
