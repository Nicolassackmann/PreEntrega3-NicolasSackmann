alert("Bienvenido, Para comprar entradas para el Gran Premio de Buenos Aires de la Formula 1 debes ingresar tus datos")

let nombre
let apellido
let edad

nombre= prompt("¿Cuál es tu nombre?");

while (nombre == "") {
    nombre = prompt("Ingresa tu nombre para continuar")
}

apellido= prompt("¿Cuál es tu apellido?");

while (apellido == "") {
    apellido = prompt ("Ingresa tu apellido para continuar")
}

edad= prompt("¿Cuántos años tenes?");

while (edad <= 10) {
    edad = prompt("La edad minima necesaria para ingresar es 10");
}

console.log(`Bienvenido ${nombre} ${apellido}`);

console.log(`Tu edad es ${edad} años`);

alert("Bienvenido, Ya puedes seleccionar y comprar tus entradas para la Formula 1")



let entradas
let precio
let equipoPits
let promocion

entradas = parseInt(prompt("¿Qué tipo de entrada quieres?: \n1. Butaca General \n2. Butaca Preferencial \n3. Butaca Vip \n4. Entrada AllInclusive"))

while (isNaN(entradas) || entradas < 1 || entradas > 4) {
    entradas = parseInt(prompt("Porfavor seleccione un tipo de entrada: \n1. Butaca General \n2. Butaca Preferencial \n3. Butaca Vip \n4. Entrada AllInclusive"))
}

function alertaEntradas(entradas) {
    alert(`La entrada seleccionada es  seleccionada es ${entradas}`)
}

switch (entradas) {
    case 1:
        entradas = "Butaca General";
        alertaEntradas(entradas);
        break;
    case 2:
        entradas = "Butaca Preferencial";
        alertaEntradas(entradas);
        break;
    case 3:
        entradas = "Butaca Vip";
        alertaEntradas(entradas);
        break;
    case 4: 
        entradas = "Entrada AllInclusive"
        alertaEntradas(entradas)
        break;
}

const alertaEquipo = (entradas,) => {
    alert(`Tu entrada es: ${entradas}`);
}

if (entradas === "Butaca General") {
   alert("El valor de tu entrada general es de U$360")
}

if (entradas === "Butaca Preferencial") {
    alert("El valor de tu Entrada Preferencial es de U$600")
}

if (entradas === "Butaca Vip") {
    alert("El valor de tu Entrada Vip es de U$1000")
}

if (entradas === "Entrada AllInclusive") {
    alert("Con tu Entrada AllInclusive tenes la posibilidad de visitar los pits de tu equipo favorito")
    equipoPits = parseInt(prompt(`Porfavor selecciona tu equipo Favorito: \n1. Red Bull \n2. Aston Martin \n3. Mercedes \n4. Ferrari \n5. Williams \n6. Alfa Romeo \n7. AlphaTauri \n8. Hass \n9. Alpine \n10. McLaren`))

    while (isNaN(equipoPits) || equipoPits < 1 || equipoPits > 10) {
        equipoPits = parseInt(prompt(`Porfavor selecciona tu equipo Favorito: \n1. Red Bull \n2. Aston Martin \n3. Mercedes \n4. Ferrari \n5. Williams \n6. Alfa Romeo \n7. AlphaTauri \n8. Hass \n9. Alpine \n10. McLaren`))
    }

    switch (equipoPits) {
        case 1:
            equipoPits = "Red Bull";
            break;
        case 2:
            equipoPits = "Aston Martin";
            break;
        case 3:
            equipoPits = "Mercedes";
            break;
        case 4:
            equipoPits = "Ferrari";
            break;
        case 5:
            equipoPits = "Williams";
            break;
        case 6:
            equipoPits = "Alfa Romeo";
            break;
        case 7:
            equipoPits = "AlphaTauri";
            break;
        case 8:
            equipoPits = "Hass";
            break;
        case 9:
            equipoPits = "Alpine";
            break;
        case 10:
            equipoPits = "McLaren";
            break;

    }
    console.log(`Tu entrada es: ${entradas} \nY podras estar en los pits del equipo: ${equipoPits} `)
}




