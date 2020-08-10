/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/function mostrar()
{
  let marca;
  let precio;
  let peso;
  let tipo;
  let acumPesoTotal=0;
  let flagCaro=0;
  let marcaCaro;
  let precioMasCaro;
  let flagBarato=0;
  let marcaBarato;
  let precioMasBarato;

  do{
    marca = prompt("Ingrese marca: ");

    precio = parseFloat(prompt("Ingrese precio: "));
    while(!(precio>0)){
      precio = parseFloat(prompt("Error. Reingrese precio: "));
    }

    peso = parseFloat(prompt("Ingrese peso en kilogramos: "));
    while(!(peso>0)){
      peso = parseFloat(prompt("Error. Reingrese peso en kilogramos: "));
    }

    tipo = prompt("Ingrese tipo (solido o liquido): " ).toLowerCase();
    while(!(tipo=="solido" || tipo=="liquido")){
      tipo = prompt("Error. Reingrese tipo (solido o liquido): ").toLowerCase();
    }

    acumPesoTotal += peso;

    if (tipo=="solido"){
      if(flagBarato==0 || precio < precioMasBarato){
        precioMasBarato = precio;
        marcaBarato = marca;
        flagBarato=1;
      }

    }
    else{
      if(flagCaro==0 || precio > precioMasCaro){
        precioMasCaro= precio;
        marcaCaro= marca;
        flagCaro=1;
      }
    }

    seguir= prompt("Ingrese s para seguir cargando, ingrese n para terminar: ").toLowerCase();
  
  }
  while(seguir == 's');

  console.log("Peso total de la compra: "+acumPesoTotal);
  
  console.log("Marca del liquido mas caro: "+marcaCaro);
  
  console.log("Marca del solido mas barato: "+marcaBarato);

}
