/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	let nombre;
	let peso;
	let sexo;
	let edad;
	let contMujeres=0;
	let acumEdad=0;
	let flagPesado=0;
	let masPesado;
	let nombrePesado;
	let promedioEdad;

	for(let i=0; i <=4; i++){
		nombre = prompt("Ingrese nombre: ").toLowerCase();
		while(!(isNaN(nombre))){
			nombre = prompt("error. Reingrese nombre: ").toLowerCase();
		}

		peso = parseFloat(prompt("Ingrese peso: "));
		while(isNaN(peso)){
			peso = parseFloat(prompt("error. Reingrese peso: "));
		}

		sexo = prompt("Ingrese sexo (m para masculino f para femenino: ").toLowerCase();
		while(!(sexo=='f' || sexo=='m')){
			sexo = prompt("error. Reingrese sexo (m para masculino f para femenino: ").toLowerCase();
		}

		edad = parseInt(prompt("Ingrese edad: "));
		while(isNaN(edad)){
			edad = parseInt(prompt("error. reingrese edad: "));
		}

		acumEdad += edad;

		if (sexo=='f'){
			contMujeres++;
		}
		else{
			if(flagPesado==0 || peso > masPesado){
				masPesado = peso;
				 nombrePesado = nombre;
				flagPesado = 1;
			}
		}

	}

	promedioEdad = acumEdad / 5;

	console.log("Cantidad de mujeres: "+contMujeres);
	console.log("Edad promedio del total: "+promedioEdad);
	
	if(flagPesado==1){
		console.log("Hombre mas pesado: "+nombrePesado);
	}

}
