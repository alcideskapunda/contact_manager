const inputContact = document.querySelector(".new-contact-input");
const addTaskButton = document.querySelector(".add-new-contact");

const filterContact = document.querySelector(".cod-country");
const taksContainer = document.querySelector("#tasks-container");

const inputEdit = document.querySelector(".input-edit-contact");
const closeEdit = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const contactEditBtn = document.querySelector("#contactoEditado");

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
    contactEditBtn.addEventListener("click", (e) => {
        pContact.innerText = inputEdit.value;
        e.addEventListener("click", () => toggleModal());
    });
    divContact.appendChild(pContact);
    
    const btnEdit = document.createElement("button");
    btnEdit.classList.add("editBtn");
    btnEdit.innerHTML = '<i class="fa fa-pencil"></i>';
    [btnEdit, closeEdit, contactEditBtn].forEach((el) => {
        el.addEventListener("click", () => toggleModal());
    });
    btnEdit.addEventListener("click", (e) => {
        const targetEl = e.target;
        const parentEl = targetEl.closest("div");
        if (parentEl && parentEl.querySelector("p")) {
            inputEdit.value = parentEl.querySelector("p").innerText;
        }
    });
    divContact.appendChild(btnEdit);
    
    const btnDelete = document.createElement("button");
    btnDelete.classList.add("deleteBtn");
    btnDelete.innerHTML = '<i class="fa fa-trash"></i>';
    btnDelete.addEventListener("click", (e) => {
        const targetEl = e.target;
        const parentEl = targetEl.closest("div");
        parentEl.remove();
    });
    divContact.appendChild(btnDelete);
    
    taksContainer.appendChild(divContact);
    
    //localStorage.setItem("contacto", inputContact.value);

    inputContact.value = "";
}

const toggleModal = () => {
    [modal, fade].forEach((el) => el.classList.toggle("hide"));
}

const inputChange = () => {
    const contactIsValid = validateContact();
  
    if (contactIsValid) {
      return inputContact.classList.remove("error");
    }
};

closeEdit.addEventListener("click", () => {
    [closeEdit, contactEditBtn].forEach((el) => {
        el.addEventListener("click", () => toggleModal());
    });
});

addTaskButton.addEventListener("click", () => getAddContact());
inputContact.addEventListener("change", () => inputChange());
