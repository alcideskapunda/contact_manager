const inputContact = document.querySelector(".new-contact-input");
const addTaskButton = document.querySelector(".add-new-contact");

const filterContact = document.querySelector(".cod-country");
const taksContainer = document.querySelector("#tasks-container");


const validateContact = () => {
    const angolaRegex = /^\+\d{3}\d{3}\d{3}\d{3}$/;
    const brasilRegex = /^\+\d{2}\d{5}-\d{4}$/;
    const portugalRegex = /^\+\d{3}\d{2}\d{3}\d{4}$/;

    let contacto = inputContact.value.trim();

    if (angolaRegex.test(contacto) || brasilRegex.test(contacto) || portugalRegex.test(contacto)) {
        return true;
    }
}

const getAddContact = () => {
    const contactIsValid = validateContact();

    if (!contactIsValid) {
        //alert("Usar o codigo telefonico");
        return inputContact.classList.add("error");
    }

    const divContact = document.createElement("div");
    divContact.classList.add("task-item");

    const pContact = document.createElement("p");
    pContact.innerText = inputContact.value;
    divContact.appendChild(pContact);
    
    const btnEdit = document.createElement("button");
    btnEdit.classList.add("editBtn");
    btnEdit.innerHTML = '<i class="fa fa-pencil"></i>';
    divContact.appendChild(btnEdit);
    
    const btnDelete = document.createElement("button");
    btnDelete.classList.add("deleteBtn");
    btnDelete.innerHTML = '<i class="fa fa-trash"></i>';
    divContact.appendChild(btnDelete);
    
    taksContainer.appendChild(divContact);
    
    inputContact.value = "";
}

const inputChange = () => {
    const contactIsValid = validateContact();
  
    if (contactIsValid) {
      return inputContact.classList.remove("error");
    }
};

addTaskButton.addEventListener("click", () => getAddContact());
inputContact.addEventListener("change", () => inputChange());