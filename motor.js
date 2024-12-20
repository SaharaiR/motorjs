//Recibe 3 parametros de string(tipoNomina y genero) y tipo Date (fechaPrimerEmpleo)
function calculoMotor(tipoNomina, fechaPrimerEmpleo, genero){
    const fechaHoy = new Date();
    if (!(fechaPrimerEmpleo instanceof Date) || isNaN(fechaPrimerEmpleo)) {
        throw new Error('El valor proporcionado no es un objeto Date válido');
    }
    //Calculamos los meses laboradorados hasta la fecha actual
    const aniosEmpleo = fechaHoy.getFullYear() - fechaPrimerEmpleo.getFullYear();
    const mesesEmpleo = fechaHoy.getMonth() - fechaPrimerEmpleo.getMonth();
    const mesesLaborados = aniosEmpleo * 12 + mesesEmpleo + (fechaHoy.getDate() >= fechaPrimerEmpleo.getDate() ? 0 : -1);
    /*return mesesLaborados; //para prueba*/
    //Reglas para el monto maximo y minimo segun el genero
    let montoMinimo = 0;
    let montoMaximo = 0;
    switch(genero){
        //Para genero masculino (m)
        case 'm':
            switch(tipoNomina){
                case 'A':
                    if(mesesLaborados < 27) montoMinimo = 100;
                    else if(mesesLaborados === 27) montoMinimo = 400;
                    else if(mesesLaborados === 28) montoMinimo = 900;
                    else if(mesesLaborados === 29) montoMinimo = 100;
                    else montoMinimo = 600;

                    if(mesesLaborados < 27) montoMaximo = 4900;
                    else if(mesesLaborados === 27) montoMaximo = 4700;
                    else if(mesesLaborados === 28) montoMaximo = 4600;
                    else if(mesesLaborados === 29) montoMaximo = 4600
                    else montoMaximo = 4500;
                    break;
                case 'B':
                    if (mesesLaborados < 27) montoMinimo = 1000;
                    else if (mesesLaborados === 27) montoMinimo = 600;
                    else if (mesesLaborados === 28) montoMinimo = 1000;
                    else if (mesesLaborados === 29) montoMinimo = 1000;
                    else montoMinimo = 1000;

                    if (mesesLaborados < 27) montoMaximo = 4700;
                    else if (mesesLaborados === 27) montoMaximo = 4400;
                    else if (mesesLaborados === 28) montoMaximo = 5000;
                    else if (mesesLaborados === 29) montoMaximo = 4400;
                    else montoMaximo = 4900;
                    break;
                case 'C':
                    if (mesesLaborados < 27) montoMinimo = 400;
                    else if (mesesLaborados === 27) montoMinimo = 200;
                    else if (mesesLaborados === 28) montoMinimo = 200;
                    else if (mesesLaborados === 29) montoMinimo = 1000;
                    else montoMinimo = 600;

                    if (mesesLaborados < 27) montoMaximo = 5000;
                    else if (mesesLaborados === 27) montoMaximo = 4700;
                    else if (mesesLaborados === 28) montoMaximo = 5000;
                    else if (mesesLaborados === 29) montoMaximo = 4200;
                    else montoMaximo = 4600;
                    break;
                case 'D':
                    if (mesesLaborados < 27) montoMinimo = 400;
                    else if (mesesLaborados === 27) montoMinimo = 300;
                    else if (mesesLaborados === 28) montoMinimo = 500;
                    else if (mesesLaborados === 29) montoMinimo = 900;
                    else montoMinimo = 1000;

                    if (mesesLaborados < 27) montoMaximo = 4400;
                    else if (mesesLaborados === 27) montoMaximo = 4700;
                    else if (mesesLaborados === 28) montoMaximo = 4300;
                    else if (mesesLaborados === 29) montoMaximo = 4900;
                    else montoMaximo = 4300;
                    break;
                default:
                    throw new Error('Tipo de nómina no válida');
            }
            //Para género femenimo (f)
            case 'f':  // Género Femenino
                switch (tipoNomina) {
                    case 'A':
                        if (mesesLaborados < 25) montoMinimo = 800;
                        else if (mesesLaborados === 25) montoMinimo = 800;
                        else if (mesesLaborados === 26) montoMinimo = 800;
                        else if (mesesLaborados === 27) montoMinimo = 600;
                        else montoMinimo = 200;

                        if (mesesLaborados < 25) montoMaximo = 4000;
                        else if (mesesLaborados === 25) montoMaximo = 4200;
                        else if (mesesLaborados === 26) montoMaximo = 4100;
                        else if (mesesLaborados === 27) montoMaximo = 4200;
                        else montoMaximo = 4500;
                        break;
                    case 'B':
                        if (mesesLaborados < 25) montoMinimo = 800;
                        else if (mesesLaborados === 25) montoMinimo = 700;
                        else if (mesesLaborados === 26) montoMinimo = 100;
                        else if (mesesLaborados === 27) montoMinimo = 600;
                        else montoMinimo = 700;

                        if (mesesLaborados < 25) montoMaximo = 4700;
                        else if (mesesLaborados === 25) montoMaximo = 4200;
                        else if (mesesLaborados === 26) montoMaximo = 4500;
                        else if (mesesLaborados === 27) montoMaximo = 4300;
                        else montoMaximo = 4400;
                        break;
                    case 'C':
                        if (mesesLaborados < 25) montoMinimo = 200;
                        else if (mesesLaborados === 25) montoMinimo = 900;
                        else if (mesesLaborados === 26) montoMinimo = 700;
                        else if (mesesLaborados === 27) montoMinimo = 800;
                        else montoMinimo = 100;

                        if (mesesLaborados < 25) montoMaximo = 4600;
                        else if (mesesLaborados === 25) montoMaximo = 4900;
                        else if (mesesLaborados === 26) montoMaximo = 4600;
                        else if (mesesLaborados === 27) montoMaximo = 4700;
                        else montoMaximo = 4000;
                        break;
                    case 'D':
                        if (mesesLaborados < 25) montoMinimo = 500;
                        else if (mesesLaborados === 25) montoMinimo = 1000;
                        else if (mesesLaborados === 26) montoMinimo = 600;
                        else if (mesesLaborados === 27) montoMinimo = 400;
                        else montoMinimo = 700;

                        if (mesesLaborados < 25) montoMaximo = 5000;
                        else if (mesesLaborados === 25) montoMaximo = 4900;
                        else if (mesesLaborados === 26) montoMaximo = 4700;
                        else if (mesesLaborados === 27) montoMaximo = 5000;
                        else montoMaximo = 4300;
                        break;
                    default:
                        throw new Error('Tipo de nómina no válido');
            }
            break;
        default:
            throw new Error('Género no válido');
    }
    /*Generar la línea de crédito óptima, formula:
        linea de credito optima = max(p1,p2)
        p1 = montoMinimo + 'raizCuadrada'(montoMaximo - montoMinimo)
        p2 = montoMinimo + 0.0175*(montoMaximo-montoMinimo)
    */
    const p1 = montoMinimo + Math.sqrt(montoMaximo - montoMinimo);
    const p2 = montoMinimo + 0.0175 * (montoMaximo -  montoMinimo);
    const lineaCreditoOptima = Math.max(p1,p2);
    return {
        montoMinimo,
        montoMaximo,
        lineaCreditoOptima
    }
}

//Pruebas:
const fechaInicio = new Date(2019,1,15);
const consulta = calculoMotor('D', fechaInicio, 'm');
console.log(consulta)