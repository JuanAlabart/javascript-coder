alert("Primera pre entrega");
    let nombreUsuario = prompt("Ingrese su nombre");
    while(nombreUsuario === ""){
        nombreUsuario = prompt("Ingrese su nombre")
    }

function solicitarNombre() {
    alert("Bienvenido " + nombreUsuario + ". Gracias por visitarnos.")
}

function elegirProducto() {
    let producto;
    do {
        producto = parseInt(prompt("Ingrese la prenda que desea adquirir.\n\nEjemplo seleccione '1' para collar.\n\n1- Collar\n2- Pulsera\n3- Anillo"));
    } while (producto !=1 && producto !=2 && producto !=3);
    switch(producto){
        case 1:
            return "Collar";
        case 2:
            return "Pulsera";
        case 3:
            return "Anillo";
    }
}

function elegirPiedra(){
    let piedra;
    do {
        piedra = parseInt(prompt("Seleccione piedra.\n\nEjemplo seleccione '1' para Turmalina.\n\n1- Turmalina \n2- Cuarzo \n3- Jade \n4- Cuarzo Rosa"));
    } while (piedra !=1 && piedra !=2 && piedra !=3 && piedra !=4);
    switch(piedra){
        case 1:
            return "Turmalina";
        case 2:
            return "Cuarzo";
        case 3:
            return "Jade";
        case 4:
            return "Cuarzo Rosa";
    }
}

//collares
function validarPrecio (prenda, piedra) {

    if (prenda === "Collar" && piedra === "Turmalina" ) {
                return 1500;
    } else if (prenda === "Collar" && piedra === "Cuarzo") {
                return 1600;
    } else if (prenda === "Collar" && piedra === "Jade") {
            return 1700;
    } else if (prenda === "Collar" && piedra === "Cuarzo Rosa" && talle === "Xs") {
        return 1800;

//pulseras
    
    } else if (prenda === "Pulsera" && piedra === "Turmalina") {
        return 900;
    } else if (prenda === "Pulsera" && piedra === "Cuarzo") {
        return 1000;
    } else if (prenda === "Pulsera" && piedra === "Jade") {
        return 1100;
    } else if (prenda === "Pulsera" && piedra === "Cuarzo Rosa") {
        return 1200;
   
//anillos

    } else if (prenda === "Anillo" && piedra === "Turmalina") {
        return 500;
    } else if (prenda === "Anillo" && piedra === "Cuarzo") {
        return 550;
    } else if (prenda === "Anillo" && piedra === "Jade") {
        return 600;
    } else if (prenda === "Anillo" && piedra === "Cuarzo Rosa") {
        return 700;

}
}

//presupuesto
function presupuesto (nombre, piedra, precio){
    alert("El precio de " + nombre + " de piedra " + piedra + "\nes de $" + precio)
}
//cobro
function cobrar (nombre, precio){
    let pago;
    do {
        pago = parseInt(prompt("Con cuanto pagas?. El precio del producto " + nombre + " es de $" + precio));
        while (isNaN(pago)) {
            alert("Ingrese un valor númerico");
            pago = parseInt(prompt("Con cuanto pagas?. El precio del producto " + nombre + " es de $" + precio));
        }
    } while (pago < precio);
    alert("Gracias!, " + nombreUsuario + ". Ha comprado el producto: " + nombre + ". Su vuelto es de $" + (pago - precio))
}

function saludoFinal (){
    alert("Gracias por elegirnos, " + nombreUsuario);{
    }
}


solicitarNombre();
let productoNombre = elegirProducto();
let piedraNombre = elegirPiedra();
let precioProducto = validarPrecio(productoNombre, piedraNombre);
presupuesto(productoNombre, piedraNombre, precioProducto);
cobrar(productoNombre, precioProducto);
saludoFinal();
