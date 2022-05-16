/**
 * Un buen caso para usar switch
 * 
 * Queremos escribir un script que, dado un mes del año, nos diga en que trimestre nos encomtramos.
 * 
 * Por ejemplo, si mes = 4, deberíamos mostrar por el terminal "Nos encontramos en el segundo trimestre"  
 * 
 * Explra esta información para averiguar como usar el condicional 'switch'; y cómo se pueden agrupar varios casos: https://javascript.info/switch#grouping-of-case
 * 
 */

let mes = 4;



// Escribir a partir de aquí

switch (mes) {
    case 1:
        console.log("primer trimestre");
        break;
    case 2:
        console.log("segundo trimestre");
        break;
    case 3:
        console.log("tercer trimestre");
        break;
    case 4:
        console.log("cuarto trimestre");
        break;
        default:
            console.log("selección no valida");
            break;
}
