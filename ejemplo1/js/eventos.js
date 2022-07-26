function iniciar(){
    //Definiar objetos sobres los que se escucharan eventos
    //y asociar los eventos correspondientes
    //Primera caja de texto
    var textFieldFocus = document.frmEjemplo.txtfoco;

    textFieldFocus.onfocus = foco;
    //Segunda caja de texto
    var textFieldKey = document.frmEjemplo.txttecla;
    textFieldKey.onkeypress = tecla;
    //Campo select
    var selectField = document.frmEjemplo.selopciones;
    selectField.onchange = function(){
        campoOpcion(this.options[this.selectIndex].value);
    };
    //Primer campo checkbox
    var chkbix1 = document.getElementById("chkbox1");
    chkbox1.addEventListener("click",function (){
        activarCasilla(chkbox1,chkbox1.value);
    }, false);
    //segundo campo checkbox
    var chkbix2 = document.getElementById("chkbox2");
    chkbox1.addEventListener("click",function (){
        activarCasilla(chkbox2,chkbox2.value);
    }, false);
    //tercer campo checkbox
    var chkbix3 = document.getElementById("chkbox3");
    chkbox1.addEventListener("click",function (){
        activarCasilla(chkbox3,chkbox3.value);
    }, false);
    //Botón de envío del formulario
    var submitButton = document.getElementById("submitbutton");
    submitButton.addEventListener("click",function(){
        alert(pulsa());
        return false;
    },false);
}

function foco(){
    alert("Foco en la primera Caja");
    this.focus();
}

function tecla(){
    alert("Pulsaste una tecla");
    this.focus;
}

function cambioOpcion(nuevaOpcion){
    alert("Has cambiado a la opcion" + nuevaOpcion);
}

function activarCasilla(casilla,valorCasilla){
    var accion;
    //alert(casilla.checked);
    (casilla.checked) ? accion = "activado": accion = "desactivado";
    alert("Se ha" + accion +"la casilla" + casilla.id + "con la opcion" + valorCasilla);
}

function pulsa(){
    return "Materia: Desarrollo de Aplicaciones web con software interpretado en el cliente";
}
//iniciar los manejadores de eventos al cargar la pagina
window.onload = iniciar;