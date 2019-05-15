const containerSheet = document.getElementById('containerSheet');
const anchor = document.getElementById('anchor');

function eliminar(){
    const elementos = document.getElementsByClassName("caja");

    Array.from(elementos).forEach(elem => {
        elem.classList.remove('appearContainerCaja');
        elem.classList.remove('mostrarCaja');
       
    });
}

anchor.addEventListener('click', (e) => {
    const id = e.target.id.replace("Link", "");
    eliminar();
    document.getElementById(id).classList.add('mostrarCaja');
    document.getElementById(id).classList.add('appearContainerCaja');
});



