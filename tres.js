/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	let sexo;
	let lugar;
	let temporada;
	let cantidad;
	let contBariloche=0;
	let contCataratas=0;
	let contSalta=0;
	let lugarMasElegido;
	let flagSexo=0;
	let cantidadMaxima;
	let sexoMasPasajeros;
	let acumPasajerosInvierno=0;
	let contViajesInvierno=0;
	let promedioPersInvierno;

	do{
		sexo = prompt("Ingrese sexo (f para femenino m para masculino): ").toLowerCase();
		while(!(sexo=='f'|| sexo=='m')){
			sexo = prompt("error. reingrese sexo (f para femenino m para masculino): ").toLowerCase();	
		}

		lugar = prompt("Elija un destino (bariloche o cataratas o salta): ").toLowerCase();
		while(!(lugar=="bariloche" || lugar=="cataratas" || lugar=="salta")){
			lugar = prompt("error. Vuelva a elegir un destino (bariloche o cataratas o salta): ").toLowerCase();
		}

		temporada = prompt("Elija una temporada (*otoño *invierno *verano *primavera ): ").toLowerCase();
		while(!(temporada=="otoño" || temporada =="invierno" || temporada=="verano" || temporada=="primavera")){
			temporada = prompt("error. vuelva a elegir una temporada (*otoño *invierno *verano *primavera ): ").toLowerCase();
		}

		cantidad = parseInt(prompt("Ingrese cantidad de personas que viajan: "));
		while(!(cantidad>0)){
			cantidad = parseInt(prompt("Invalido. reingrese cantidad de personas que viajan: "));
		}

		switch(lugar){
			case "bariloche":
				contBariloche++;
				break;
			
			case "cataratas":
				contCataratas++;
				break;

			case "salta":
				contSalta++;
				break;
		}
		
		if(flagSexo==0 || cantidad>cantidadMaxima){
			cantidadMaxima = cantidad;
			sexoMasPasajeros= sexo;
			flagSexo=1;
		}

		if (temporada=="invierno"){
			acumPasajerosInvierno += cantidad;
			contViajesInvierno++;
		}
		
		seguir = prompt("Ingrese s para seguir, ingrese n para terminar: ").toLowerCase();


	}
	while (seguir=='s');

	promedioPersInvierno = acumPasajerosInvierno / contViajesInvierno;

	if(contBariloche > contCataratas && contBariloche > contSalta){
		lugarMasElegido = "Bariloche";
	}
	else if(contCataratas > contSalta && contCataratas >= contBariloche){
		lugarMasElegido = "Cataratas";
	}
	else{
		lugarMasElegido = "Salta";
	}
	console.log("Lugar mas elegido: "+lugarMasElegido);

	console.log("Sexo que lleva mas pasajeros: "+sexoMasPasajeros);

	if(acumPasajerosInvierno!=0){
		console.log("Promedio de pasajeros en vijes de invierno: "+promedioPersInvierno);
	}	

}
