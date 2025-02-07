function gerarDiaDaSemana() {
    const disDaSemana = new Date().toLocaleDateString("pt-BR",{weekday: "long"});
    const data = new Date().toLocaleDateString("pt-BR");
    const hora = new Date().toLocaleTimeString("pt-BR",{
            hour: "numeric",
            minute: "numeric",
        }
    );
    const dataCompleta = `${disDaSemana} - (${data} às ${hora})`;

    return dataCompleta;
}

export default gerarDiaDaSemana;