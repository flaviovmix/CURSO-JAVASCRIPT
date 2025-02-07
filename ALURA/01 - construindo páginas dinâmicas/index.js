// console.log(evento.target);
// console.log(inputItem.value);

//export o documento inteiro
import { criarItemDaLista } from "./js/criarItemDaLista.js";

//export default 
import verificarListaVazia from "./js/verificarListaVazia.js";

const listaDeCompras = document.getElementById("lista-de-compras");
const botaoAdicionar = document.getElementById("adicionar-item");

botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault();
    const itemDaLista = criarItemDaLista();
    listaDeCompras.appendChild(itemDaLista);    
    verificarListaVazia(listaDeCompras);
});

verificarListaVazia(listaDeCompras);