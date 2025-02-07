import gerarDiaDaSemana from "./gerarDiaDaSemana.js";
const inputItem = document.getElementById("input-item");
let contador = 0;

export function criarItemDaLista() {
    
    if(inputItem.value === "") {
        alert("Funcionou");
    }

    const itemDaLista = document.createElement("li");
    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("lista-item-container");
    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = "checkbox-" + contador++;
    const nomeItem = document.createElement("p");
    nomeItem.classList.add("titulo-item");
    nomeItem.innerText = inputItem.value;

    inputCheckbox.addEventListener("click", function() {
        if (inputCheckbox.checked) {
            // nomeItem.style.textDecoration = "line-through"
            nomeItem.classList.add("item-checado")

        } else {
            nomeItem.classList.remove("item-checado")
            // nomeItem.style.textDecoration = "none"
        }
    });

    containerItemDaLista.appendChild(inputCheckbox);
    containerItemDaLista.appendChild(nomeItem);

    itemDaLista.appendChild(containerItemDaLista);
    const dataCompleta = gerarDiaDaSemana();

    const itemData = document.createElement("p");
    itemData.classList.add("texto-data");
    itemData.innerText = dataCompleta;
    itemDaLista.appendChild(itemData);

    return itemDaLista;
}