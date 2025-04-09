const display = document.getElementById("display");
const botoes = document.querySelectorAll("button");

// Atualiza o tela
function atualizarDisplay(valor) {
    if (valor === "delete") {
        if (display.textContent === "Resposta" || display.textContent.length <= 1) {
            display.textContent = "Resposta";
        } else {
            display.textContent = display.textContent.slice(0, -1);
        }
    } else if (valor === "=") {
        try {
            const resultado = eval(display.textContent);
            display.textContent = resultado;
        } catch {
            display.textContent = "Erro";
        }
    } else {
        if (display.textContent === "Resposta" || display.textContent === "Erro") {
            display.textContent = valor;
        } else {
            display.textContent += valor;
        }
    }
}
//interaçao 
botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        const valor = botao.textContent;
        atualizarDisplay(valor);
    });
});

document.addEventListener("keydown", (event) => {
    const tecla = event.key;

    if (!isNaN(tecla) || "+-*/().".includes(tecla)) {
        atualizarDisplay(tecla);
    } else if (tecla === "Backspace") {
        atualizarDisplay("delete");
    } else if (tecla === "Enter") {
        atualizarDisplay("=");
    }
});