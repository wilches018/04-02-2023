function validar() {
    const inputEdad = document.getElementById("edad");
    let edad = inputEdad.value;

    if (edad <= 17) {
        alert("Usted es menor de edad");
        alertify.error('Ready!');
    } else {
        alert("Usted es mañor de edad");
        alertify.success('Ready!');
        
    }    
}

function pareImpare(){
    const input = document.getElementById("edad");
    let tamanio = input.value;
    let par = 0;
    let impar = 0;

    for (let index = 0; index < tamanio; index++){
        if (index % 2 == 0 ){
            par = par + 1;
            console.log("funciona" + par);
        }else{
            impar = impar + 1;
            console.log("no funciona");
        }

    }
    alertify.success("la cantidad pare son son:"+ par)
    alertify.success(' la cantidad de impares son:' + impar);

}

