/*********************************
 * DATA DO ANIVERSÁRIO
 *********************************/
const dataAniversario = new Date("2026-01-19T00:00:00");
let mensagemMostrada = false;

/*********************************
 * CONTADOR
 *********************************/
function atualizarContador() {
    const agora = new Date();
    const diferenca = dataAniversario - agora;

    const tempo = document.getElementById("tempo");
    if (!tempo) return;

    // Chegou o dia
    if (diferenca <= 0) {
        tempo.innerText = "🎉 Hoje é o aniversário dela! da mulher da minha vida, ass: Luan 🎉";

        if (!mensagemMostrada) {
            mostrarMensagemAniversario();
            mensagemMostrada = true;
        }
        return;
    }

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);

    tempo.innerText =
        `${dias} dias ${horas}h ${minutos}m ${segundos}s`;
}

setInterval(atualizarContador, 1000);
atualizarContador();

/*********************************
 * MENSAGEM DO ANIVERSÁRIO
 *********************************/
function mostrarMensagemAniversario() {
    const mensagem = document.getElementById("mensagem-aniversario");
    if (mensagem) mensagem.style.display = "flex";
}

function fecharMensagem() {
    const mensagem = document.getElementById("mensagem-aniversario");
    if (mensagem) mensagem.style.display = "none";
}

/*********************************
 * COPIAR PIX (PIX.HTML)
 *********************************/
function copiarPix() {
    const chave = document.getElementById("chave-pix");
    if (!chave) return;

    const inputTemp = document.createElement("input");
    inputTemp.value = chave.innerText;
    document.body.appendChild(inputTemp);

    inputTemp.select();
    document.execCommand("copy");
    document.body.removeChild(inputTemp);

    alert("💙 Chave Pix copiada com sucesso!");
}
