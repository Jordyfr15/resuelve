//Código Steps
const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");

const pregress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step")

let formStepsNum = 0;

nextBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        formStepsNum++;
        updateFormSteps();
        udpdateProgressbar();
    });
});

prevBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        formStepsNum--;
        updateFormSteps();
        udpdateProgressbar();
    });
});

function updateFormSteps(){

    formSteps.forEach(formStep => {
        formStep.classList.contains("form-step-active") &&
        formStep.classList.remove("form-step-active");
    })
    formSteps[formStepsNum].classList.add("form-step-active");
}

function udpdateProgressbar(){
    progressSteps.forEach((progressStep, idx) => {
        if(idx < formStepsNum + 1){
            progressStep.classList.add('progress-step-active');
        } else {
            progressStep.classList.remove('progress-step-active');
        }
    });

    const progressActive = document.querySelectorAll(".progress-step-active");

    progress.style.width = ((progressActive.length - 1) / (progressSteps.length - 1 )) * 100 + "%";
}

//Selcción Institución

$('.institucion').change(function(){
    var responseID = $(this).val();
    if(responseID == "Bancos"){
        $('#detail').removeClass("hidden");
        $('#detail').addClass("show");
        $('#detail1').addClass("hidden");
        $('#detail1').removeClass("show");
        $('#detail2').addClass("hidden");
        $('#detail2').removeClass("show");

    } else if(responseID == "Tiendas"){
        $('#detail1').removeClass("hidden");
        $('#detail1').addClass("show");
        $('#detail').addClass("hidden");
        $('#detail').removeClass("show");
        $('#detail2').addClass("hidden");
        $('#detail2').removeClass("show");

    }else{
        $('#detail2').removeClass("hidden");
        $('#detail2').addClass("show");
        $('#detail1').addClass("hidden");
        $('#detail1').removeClass("show");
        $('#detail').addClass("hidden");
        $('#detail').removeClass("show");
    }
    console.log(responseID)
});

//Formulario


const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras,espacios y acento.
    apeliidop: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras,espacios y acento.
	apeliidom: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras,espacios y acento.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	tel: /^\d{10}$/, // 10 numeros.
    rfc: /^.{10}$/ // 10 digitos.
}

const campos = {
	nombre: false,
	password: false,
	correo: false,
	telefono: false

}


function validar(){
    var slinstitucion = document.getElementById('institucion').value
    var slbanco;
    var slmonto = document.getElementById('monto').value;

    if (slinstitucion == "Bancos") {
        slbanco = document.getElementById("bancos").value
    }
    if (slinstitucion == "Tiendas") {
        slbanco = document.getElementById("tienda").value
    }
    if (slinstitucion == "Financieras") {
        slbanco = document.getElementById("fincanciera").value
    }
    if (!slbanco) {
        alert("Elige a quien le debes")
      return false
        }
        if (!slmonto){
        alert("Selecciona la cantidad que debes")
        return false;
      }

    alert("Se envío la información de manera correcta")
}


function validacion(){

    var nom = document.getElementById("nombre").value;
    var apellidop = document.getElementById("apellidop").value;
    var apellidom = document.getElementById("apeelidom").value;
    var tel = document.getElementById("tel").value;
    var correo = document.getElementById("correo").value;
    var rfc = document.getElementById("rfc").value;

    if (nom == "") {
        alert("Por favor, ingresa tu nombre")
        return false;
    }
    if (apellidop == "") {
        alert("Por favor, ingresa tus apellidos")

        return false;
    }
    if (apellidom == "") {
        alert("Por favor, ingresa tus apellidos")

        return false;
    }
    if (tel.length != 10) {
        alert("Ingresa tu teléfono a 10 digitos")

        return false;
    }
    if (correo == "") {
        alert("Por favor, ingresa tu correo electrónico")

        return false;
    }

    if (rfc == "") {
        alert("Por favor, ingresa tu correo electrónico")

        return false;
    }

    return true;

}



//localstorage

function store(){
    var nombres= document.getElementById("nombre");
    localStorage.setItem("nombre", nombres.value);

    var apellidop= document.getElementById("apellidop");
    localStorage.setItem("apellidop", apellidop.value);

    var apellidom= document.getElementById("apellidom");
    localStorage.setItem("apellidom", apellidom.value);

    var tel= document.getElementById("tel");
    localStorage.setItem("tel", tel.value);

    var correo= document.getElementById("correo");
    localStorage.setItem("correo", correo.value);

    var rfc= document.getElementById("rfc");
    localStorage.setItem("rfc", rfc.value);
}