function mostrarSecao(id) {
    document.querySelectorAll('.main5').forEach(secao => {
        secao.style.display = 'none';
    });
    document.getElementById(id).style.display = 'block';
}

const usefulButtonErase = document.getElementById("erase");
usefulButtonErase.addEventListener("click", () => {
    console.clear()
});

let bool = false;
const usefulButtonEye = document.getElementById("eye");
usefulButtonEye.addEventListener("click", () => {
    bool = !bool;
    
    if (!bool) {
        document.querySelectorAll(".disabledFlag").forEach(rota => {
            rota.classList.add("disabled");
            usefulButtonEye.src = "/src/eyee.png";
        });
    } else {
        document.querySelectorAll(".disabled").forEach(rota => {
            rota.classList.remove("disabled");
            usefulButtonEye.src = "/src/eye.png";
        });
    }
});
