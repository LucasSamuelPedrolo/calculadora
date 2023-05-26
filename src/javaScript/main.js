const numerosEoperacoes = document.querySelectorAll('.btnNum');
const igual = document.getElementById('btnIgual')
const displayResultado = document.getElementById('resultado');

document.addEventListener('click', (e) => {
    const el = e.target;

    if (el.classList.contains('btnDelete')) {
        displayResultado.innerHTML = '';
    }

    if (el.classList.contains('btnNum')) {
        displayResultado.innerHTML += el.innerText;
    }

    if (el.classList.contains('btnIgual')) {
        verificaCode(displayResultado.innerText)
        return;
    }
});

function verificaCode(value) {
    try {
        if(eval(value)) {
            displayResultado.innerHTML = eval(value);
        }

    } catch (err) {
        displayResultado.innerHTML = '';
    }
}
