const displayResultado = document.querySelector('.resultado');

function getInput() {
    document.addEventListener('click', (e) => {
        const el = e.target;

        if(el.classList.contains('btnNum')){
            (function addHtml(btn){
                displayResultado.innerHTML += btn;

            })(el.innerText);
        }
    })
};

getInput()

function calulator(){
    try {
        displayResultado.value
    } catch (error) {
        
    }
}
