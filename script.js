function adicionarFuncionario() {
  const nome = document.getElementById("nomeFuncionario").value.trim();
  const salario = parseFloat(document.getElementById("salarioFuncionario").value);

  if (!nome || isNaN(salario) || salario <= 0) {
    alert("Preencha todos os campos corretamente.");
    return;
  }

  if (funcionarios.some(f => f.nome.toLowerCase() === nome.toLowerCase())) {
    alert("Funcionário já cadastrado.");
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

  funcionarios.forEach((f, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${f.nome} - R$ ${f.salarioOriginal.toFixed(2)} 
      <button onclick="removerFuncionario(${index})">Remover</button>`;
    lista.appendChild(li);
  });
}

function removerFuncionario(index) {
  funcionarios.splice(index, 1);
  atualizarLista();
}function salvarDados() {
  localStorage.setItem("funcionarios", JSON.stringify(funcionarios));
}

function carregarDados() {
  const dados = localStorage.getItem("funcionarios");
  if (dados) {
    funcionarios = JSON.parse(dados);
    atualizarLista();
  }
}

// Chame carregarDados() assim que a página iniciar:
window.onload = carregarDados;

// Atualize salvarDados() sempre que alterar a lista:
function atualizarLista() {
  const lista = document.getElementById("listaFuncionarios");
  lista.innerHTML = "";
  funcionarios.forEach((f, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${f.nome} - R$ ${f.salarioOriginal.toFixed(2)} 
      <button onclick="removerFuncionario(${index})">Remover</button>`;
    lista.appendChild(li);
  });
  salvarDados();
}const formatador = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

li.innerHTML = `${f.nome} - ${formatador.format(f.salarioOriginal)} 
  <button onclick="removerFuncionario(${index})">Remover</button>`;
