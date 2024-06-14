let tarjetaVisible = 0;
let botonActivo = 0;

document.getElementById("id0").className = "tarjeta aparecer";


function mostrar(numTarjeta){
	let lista = document.querySelectorAll('button')
	if (numTarjeta != tarjetaVisible){
		let idTarjeta = "id" + numTarjeta;
		document.getElementById(idTarjeta).className = "tarjeta aparecer";
		idTarjetaVisible = "id" + tarjetaVisible;
		document.getElementById(idTarjetaVisible).className = "tarjeta desaparecer";
		tarjetaVisible = numTarjeta;

		lista[numTarjeta].className = "seleccionado";
		lista[botonActivo].className = "";
		botonActivo = numTarjeta;
	}
}

/*
function mostrar(numTarjeta){
	let lista = document.querySelectorAll('button')
	if (numTarjeta != tarjetaVisible){
		let idTarjeta = "id" + numTarjeta;
		document.getElementById(idTarjeta).className = "tarjeta aparecer";
		idTarjetaVisible = "id" + tarjetaVisible;
		document.getElementById(idTarjetaVisible).className = "tarjeta desaparecer";
		tarjetaVisible = numTarjeta;

		lista[numTarjeta].className = "seleccionado fondo_On";
		lista[botonActivo].className = "fondo_Off";
		botonActivo = numTarjeta;
	}
}
*/
