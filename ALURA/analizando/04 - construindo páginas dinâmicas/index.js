const inputItem = document.getElementById("input-item");
const botaoAdicionar = document.getElementById("adicionar-item");

botaoAdicionar.addEventListener("click", (evento) => {
    // console.log(evento.target);
    // console.log(inputItem.value);
    
    evento.preventDefault();
    if(inputItem.value === "") {
        alert("Funcionou");
    }
});