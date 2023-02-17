function habilitar(){
    nombre = document.getElementById("nombre").value;
    email = document.getElementById("Email").value;
    num = document.getElementById("NumeroRandom").value;
    val = 0;

    if(nombre == ""){
        val++;
    }
    if(email == ""){
        val++;
    }
    if(num == ""){
        val++;
    }
    if(val == 0){
        document.getElementById("btn").disabled = false;
    }else{
        document.getElementById("btn").disabled = true;
    }
}

document.getElementById("nombre").addEventListener("keyup", habilitar);
document.getElementById("Email").addEventListener("keyup", habilitar);
document.getElementById("NumeroRandom").addEventListener("keyup", habilitar);
document.getElementById("btn").addEventListener("click", () =>{
    alert("Haz llenado todo");
});

function sinNumeros(e){
    key=e.keycode || e.which;
    teclado = String.fromCharCode(key).toLowerCase();
    letras=" abcdefghijklmnñopqrstuvwxyz";
    especiales ="8-37-38-46-164";
    teclado_especial=false;
    for(var i in especiales){
        if(key==especiales[i]){
            teclado_especial=true;break;
    }  
    } 
    if(letras.indexOf(teclado)==-1 && !teclado_especial){
        return false;
    } 
    }

function generarNumero (min, max){
        return Math.round(Math.random()*(1 + max - min)+ min);   
}

num = generarNumero(100000,999999);

document.getElementById("NumeroRandom").innerHTML = "" + num; 

