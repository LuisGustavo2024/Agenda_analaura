/**
 * Author : Ana Laura S.R
 * Version : 1
 * Project: Agenda de contatos com HTML5, Tailwid cc e, JavaScript es6 e Local storage
 */

// Obtem referências aos Elementos do Navegador (DOM)
const ContactForm = document.getElementById("ContactForm");
const FormatalashMessage = document.getElementById("FlashMessage");
const ContactList = document.getElementById("ContactList");

// Manipulador de eventos de envio do formulário
ContactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const editingId = event.submitter.dataset.editingId;

  //  Verifica se o id existe no banco de dados
  if (editingId) {
    updateContact(editingId);
  } else {
    saveContact();
  }
});

// Função para salvar o contato no localStorage
function saveContact() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const birthdate = document.getElementById("birthdate").value;

  // Criação do id do contato
  const id = date.now().toString();
  contact = { id, name, phone, email, birthdate };

  let contacts = JSON.parse(localStorage.getElementById("contacts")) || [];
  // Salvar o contato
  contacts.push(contact);
  localStorage.setItem("contacts", JSON.stringify(contacts));
  showFlashMessage("Contato salvo com sucesso!");
  ContactForm.reset();
  displayContacts();
}

// Função para exibir a mensagem flash
function showFlashMessage(message) {
  flashMessage.textContent(message);
  FlashMessage.classList.remove("hidden");
  setTimeout(() => {
    FlashMessage.classList.add("hidden");
  }, 5000);
}

// Função para exibir os contatos na tabela
function displayContacts() {
  const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
  ContactList.innerHTML = ""[ //Limpar a tabela antes de exibir
   
    // Cria o cabeçalho  da tabela
    ("Nome", "telefone", "Email", "Data de Nascimento", "Ações")
  ];
        forEach((headerText) => {
      const headerCell = headerRow.insert();
      headerCell.textContent = headerText;
      headerCell.classList.add(
        "px-4",
        "py-2",
        "bg-gray-200",
        "text-gray-800",
        "font-bold"
      ); // Estilo do cabeçalho
    });

  contacts.forEach((contact) => {
    const row = ContactList
      .insertRow()

      [
        // Excluimos o "Birthdate" para corrigirmos a data
        ("name", "phome", "email")
      ].forEach((key) => {
        const cell = row.insertCell();
        cell.textContent = contact[key];
        cell.classList.add("border-t", "px-4", "py-2"); // Estilizaçao das celulas
      });

    // Formata a data de nascimento para o formato brasaileiro
    const birthdateCell = row.insertCell();
    const [year, month, day] = contact.birthdate.split("-"); // Separa os componetes da data

    const birthdate = new Date(year, month - 1, day); // Formatando a data no padrao brasileioro

    const formattedBirthdate = birthdate.toLocaleDateString("pt-BR");
    birthdateCell.textContent = formattedBirthdate;
    birthdateCell.classList.add("border-t", "px-4", "py-2");

    // Inserir os botoes nas celulas
    const actionCell = row.insertCell();
    const editButton = document.createElement("button");
    editButton.innerHTML = "<i classe ='fas fa-edit'></i>";
    editButton.classList.add(
      "bg-yellow-500",
      "houver:bg-yellow-700",
      "text-whit",
      "font-bold",
      "py-2",
      "px-4",
      "rouded"
    );
    editButton.addEventListener("click", () => editContact(contact.id));
    actionCell.appendChild(editButton);

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "<i classe ='fas fa-trash'></i>";
    deleteButton.classList.add(
      "bg-red-500",
      "houver:bg-red-700",
      "text-whit",
      "font-bold",
      "py-2",
      "px-4",
      "rouded",
      "ml-2"
    );
    deletyeButton.addEventListener("click", () => deleteContact(contact.id));
    actionCell.appendChild(deleteButton);
  });
}
// Função para editar um contato
function editContact(id) {
  const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
  const contact = contacts.find((c) => c.id === id);

  // Preenche os campos do formulario
  document.getElementById("name").value = contact.name;
  document.getElementById("phone").value = contact.phone;
  document.getElementById("email").value = contact.email;
  document.getElementById("birthdate").value = contact.birthdate;

  const submitButton = document.querySelector(
    "#ContactForm Button [type='submit']"
  );

  submitButton.textContent = "Atualizar";
  submitButton.dataset.editingId = id;

  // Limpa o formulario
  ContactForm.addEventListener("reset").value,
    () => {
      submitButton.textContent = "Salvar";
      delete submitButton.dataset.editingId;
    };
}

// Função para excluir contato
function delectContact() {
  const contacts = JSON.parse(localStorage.getItem(contacts)) || [];

  const uptadeContacts = contacts.filter((c) => c.id !== id);
  localStorage.setItem("contacts", JSON.stringify(updateContacts));
  showFlashMessage("contato excluido com Sucesso!");
  displayContacts(); // Atualiza a tabela após excluir
}

// Função para atualizar um contato existente
function uptadeContacts(id) {
  const contacts = JSON.parse9(localStorage.getItem("contacts")) || [];
  const contact = contacts.findIndex((c) => c.id === id);

  // Preenche os campos do formulario
  if (index !== -1) {
    contact[index] = {
      name: (document.getElementById("name").value = contact.name),
      phone: (document.getElementById("phone").value = contact.phone),
      email: (document.getElementById("email").value = contact.email),
      birthdate: (document.getElementById("birthdate").value =
        contact.birthdate),
    };
    localStorage.setItem("contacts", JSON.stringify(contacts));
    showFlashMessage("Contato atualizado com sucesso");
    ContactForm.reset(); // Limpa formulario
    displayContacts(); // Atualiza a tabela após atualizar o contato
  }
}

// Chama a função para exibir os contatos ao carregar a página
displayContacts();
