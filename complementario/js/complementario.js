
var operador;
var operacion;
var resultado = 0;


function numero(numero){

    if(operador == null){

        operador = numero;

        document.getElementById('respuesta').innerHTML = operador;

    }else{

        operador+=numero;

        document.getElementById('respuesta').innerHTML = operador;

        //console.log(operacion);

    }

    //console.log(operador);
}

function suma(ope){

    if(operador == null){

        operacion = ope;
        resultado = parseInt(resultado);
        operador = null;

    }else{

        operacion = ope;
        resultado = parseInt(operador);
        operador = null;

    }

    

}

function resta(ope){

    if(operador == null){

        operacion = ope;
        resultado = parseInt(resultado);
        operador = null;

    }else{

        operacion = ope;
        resultado = parseInt(operador);
        operador = null;

    }

}

function multi(ope){

    if(operador == null){

        operacion = ope;
        resultado = parseInt(resultado);
        operador = null;

    }else{

        operacion = ope;
        resultado = parseInt(operador);
        operador = null;

    }

}

function dividir(ope){

    if(operador == null){

        operacion = ope;
        resultado = parseInt(resultado);
        operador = null;

    }else{

        operacion = ope;
        resultado = parseInt(operador);
        operador = null;

    }

}

function raiz(){

    if(operador == null){

        operacion = "raiz";
        resultado = parseInt(resultado);

    }else{
        operacion = "raiz";
        resultado = parseInt(operador);
    }

}

function cuadrado(){

    if(operador == null){

        operacion = "cuadrado";
        resultado = parseInt(resultado);

    }else{

        operacion = "cuadrado";
        resultado = parseInt(operador);
    }

}

function inversa(){

    if(operador == null){

        operacion = "inversa";
        resultado = parseInt(resultado);

    }else{

        operacion = "inversa";
        resultado = parseInt(operador);
    }
}

function modulo(){

    if(operador == null){

        operacion = "mod";
        resultado = parseInt(resultado);
        operador = null;

    }else{
        operacion = "mod";
        resultado = parseInt(operador);
        operador = null;
    }
}

function c(){
    resultado = 0;
    operador= null;
    document.getElementById('respuesta').innerHTML = resultado;
}

function cE(){
    resultado = 0;
    operador= null;
    document.getElementById('respuesta').innerHTML = resultado;
}



function igual(){

    switch(operacion){

        case '+':

            if(operador == null){

                alert("vacio");

            }else{
                resultado = resultado + parseInt(operador);
                document.getElementById('respuesta').innerHTML = resultado;
                operador = null;
            }

        break;

        case '-':

            if(operador == null){

                alert("vacio");

            }else{

                resultado = resultado - parseInt(operador);
                document.getElementById('respuesta').innerHTML = resultado;
                operador = null;

            }

        break;

        case '*':

            if(operador == null){

                alert("vacio");

            }else{

                resultado = resultado * parseInt(operador);
                document.getElementById('respuesta').innerHTML = resultado;
                operador = null;

            }

        break;

        case '/':

            if(operador == null){

                alert("vacio");

            }else{

                resultado = resultado / parseInt(operador);
                document.getElementById('respuesta').innerHTML = resultado;
                operador = null;
            }

        break;

        case 'raiz':

            if(operador == null && resultado == 0){

                alert("vacio");

            }else{
                resultado = Math.sqrt(resultado);
                document.getElementById('respuesta').innerHTML = resultado;
                operador = null;
            }

        break;

        case 'mod':
            if(operador == null && resultado == 0){

                alert("vacio");

            }else{
                resultado = resultado % parseInt(operador);
                document.getElementById('respuesta').innerHTML = resultado;
                operador = null;
            }
        break;

        case 'cuadrado':

            if(operador == null && resultado == 0){

                alert("vacio");
            }else{

                resultado = resultado * resultado;
                document.getElementById('respuesta').innerHTML = resultado;
                operador = null;
            }

        break;

        case 'inversa':

            if(operador == null && resultado == 0){

                alert("vacio");
            }else{

                resultado = 1 / resultado;
                document.getElementById('respuesta').innerHTML = resultado;
                operador = null;
            }

        break;
    }
    

}


