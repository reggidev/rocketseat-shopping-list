// Selecionar elementos
const inputField = document.querySelector('.add-item-input')
const addButton = document.querySelector('.add-item-btn')
const itemList = document.querySelector('.item-list')
const deleteMessage = document.querySelector('.delete-message')

// Função para criar e adicionar um novo item
function addItem() {
  const itemText = inputField.value.trim()

  // Verifica se o input está vazio
  if (itemText === "") {
    return alert('Por favor, insira um item!')
  }

  // Criar o elemento <li>
  const listItem = document.createElement("li")
  listItem.className = "flex items-center justify-between p-3 rounded-xl shadow-sm bg-white"

  // Criar o label com checkbox e texto
  const label = document.createElement("label")
  label.className = "flex items-center gap-3"

  const checkbox = document.createElement("input")
  checkbox.type = "checkbox"
  checkbox.className = "checkbox-item h-4 w-4 focus:ring-0 focus:ring-brand"

  const span = document.createElement("span")
  span.className = "item-text text-content-secondary text-base font-medium"
  span.textContent = itemText

  label.appendChild(checkbox)
  label.appendChild(span)

  // Criar o botão de excluir
  const deleteButton = document.createElement("button")
  deleteButton.className = "delete-item-btn"
  const trashIcon = document.createElement("img")
  trashIcon.src = "img/trash.svg"
  trashIcon.alt = "Delete Item"
  trashIcon.className = "cursor-pointer"
  deleteButton.appendChild(trashIcon)

  // Adicionar evento ao botão de excluir
  deleteButton.addEventListener("click", () => {
    listItem.remove()
  })

  // Adicionar label e botão ao <li>
  listItem.appendChild(label)
  listItem.appendChild(deleteButton)

  // Adicionar <li> à lista
  itemList.appendChild(listItem)

  // Limpar o campo de entrada
  inputField.value = ""
}

// Adicionar evento ao botão
addButton.addEventListener("click", addItem)

// Adicionar evento para "Enter" no campo de texto
inputField.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addItem()
  }
})

// Evento de clique para o botão de exclusão (delegação de eventos)
itemList.addEventListener("click", (event) => {
  if (event.target.closest(".delete-item-btn")) {
    const listItem = event.target.closest("li")
    if (listItem) {
      listItem.remove()

      // Exibe a mensagem de exclusão
      deleteMessage.classList.remove("hidden")

      // Esconde a mensagem novamente após 3 segundos
      setTimeout(() => {
        deleteMessage.classList.add("hidden")
      }, 3000)
    }
  }
})