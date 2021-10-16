let input = document.getElementById('input-search')
let button = document.getElementById('button-add')
let task = document.getElementById('name-task-id')
let listaCompleta = document.getElementById('tarefas')

let arrayDeTarefas = []

recarregarTarefas()

function mostrarTarefas() {
  let novaLi = ''

  arrayDeTarefas.forEach((task, index) => {
    novaLi += `
    <li class="item-tarefa ${task.concluida == true ? 'concluido' : ''}">
        <button class="rocket-button" onclick="concluirTarefa(${index})">
            <i class="fas fa-rocket"></i>
        </button>

        <p class="name-task" id="name-task-id">${task.tarefa}</p>
        
        <button class="delete-button" onclick="deletarTarefa(${index})">
            <i class="fas fa-trash"></i>
        </button>
    </li>
  `
  })

  listaCompleta.innerHTML = novaLi

  localStorage.setItem('lista', JSON.stringify(arrayDeTarefas))
}

function deletarTarefa(index) {
  arrayDeTarefas.splice(index, 1)
  mostrarTarefas()
}

function adcionarTarefa() {
  arrayDeTarefas.push({
    tarefa: input.value,
    concluida: false
  })

  mostrarTarefas()
}

function concluirTarefa(index) {
  arrayDeTarefas[index].concluida = !arrayDeTarefas[index].concluida
  console.log(arrayDeTarefas)
  mostrarTarefas()
}

function recarregarTarefas() {
  let minhasTarefas = localStorage.getItem('lista')

  arrayDeTarefas = JSON.parse(minhasTarefas)
  mostrarTarefas()
}

button.addEventListener('click', adcionarTarefa)
