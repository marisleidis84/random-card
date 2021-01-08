let iconSuperior = document.getElementById("icon1");
let iconInferior = document.getElementById("icon2");
let iconNmero = document.getElementById("numero");
let aux_catro;


//funcion para generar numeros de 1 al 13
function numAleatorio1() {
    let aux = (Math.floor(Math.random() * (14 - 1) + 1));
    if (!(aux == 11 || aux == 12 || aux == 13 || aux == 1)) {
        if (aux_catro == 1 || aux_catro == 3) {
            let fontAux = aux.toString();
            iconNmero.innerHTML = fontAux.fontcolor('red');
        }
        else {
            let fontAux = aux.toString();
            iconNmero.innerHTML = fontAux;
        }
    }
    else if (aux == 11) {
        if (aux_catro == 1 || aux_catro == 3) {
            let fontAux = "J";
            iconNmero.innerHTML = fontAux.fontcolor('red');
        } else
            iconNmero.innerHTML = "J";
    }

    else if (aux == 12) {
        if (aux_catro == 1 || aux_catro == 3) {
            let fontAux = "Q";
            iconNmero.innerHTML = fontAux.fontcolor('red');
        }
        else
            iconNmero.innerHTML = "Q";
    }

    else if (aux == 13) {
        if (aux_catro == 1 || aux_catro == 3) {
            let fontAux = "K";
            iconNmero.innerHTML = fontAux.fontcolor('red');
        }
        else
            iconNmero.innerHTML = "K";
    }

    else if (aux == 1) {
        if (aux_catro == 1 || aux_catro == 3) {
            let fontAux = "A";
            iconNmero.innerHTML = fontAux.fontcolor('red');
        }
        else
            iconNmero.innerHTML = "A";
    }

}

//funcion para generar numeros de 1 al 4
function numAleatorio2() {
    aux_catro = (Math.floor(Math.random() * (5 - 1) + 1));
    if (aux_catro === 1) {
        iconSuperior.innerHTML = "<img src='./img/corazon-rojo.png'/>";
        iconInferior.innerHTML = "<img src='./img/corazon-rojo-reves.png'/>";
    }
    else if (aux_catro === 2) {
        iconSuperior.innerHTML = "<img src='./img/corazon-negro1.png'/>";
        iconInferior.innerHTML = "<img src='./img/corazon-negro-reves1.png'/>";
    }
    else if (aux_catro === 3) {
        iconSuperior.innerHTML = "<img src='./img/diamante.png'/>";
        iconInferior.innerHTML = "<img src='./img/diamante.png'/>";
    }
    else if (aux_catro === 4) {
        iconSuperior.innerHTML = "<img src='./img/trebol.png'/>";
        iconInferior.innerHTML = "<img src='./img/trebol-reves.png'/>";

    }
}
