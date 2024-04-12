function validarNumero(numero) {
   if (isNaN(numero) || numero == "") {
    return true
   } else {
    return false    
   }
   
}
const participantes = []
const preguntas = []

function validarOpciones (voto,indice) {
   
   if (preguntas[indice].opciones.includes(voto)) {
        return false
    } else {
        return true
    }
}

function soloOpciones(preguntas) {
    return preguntas.reduce((acumulador, pregunta) => {
        acumulador.push(pregunta.opciones);
        return acumulador
    },[])
}   

const recopilarVotos = (...votos) => {
    return votos.reduce((arregloAcumulador, votos) => {
      return [...arregloAcumulador, votos];
    }, []);
};

const generarPregunta = (pregunta,opciones) =>{
    return {
        pregunta,
        opciones,
    };
}
const generarParticipante = (name, edad, sexo, pais) => {
    return {
      name,
      edad,
      sexo,
      pais,
      
    };
};  

function funcionIteracion(tamaño1,tamaño2) {
    return Array.from({ length: tamaño1 + tamaño2 });
}

const personas = 1
const preguntasAHacer = 1  

while (validarNumero(personas)) {
    console.log(validarNumero(personas));
    alert("Introduce una opcion valida")
    personas = prompt("¿Cuantas personas participaran en la votacion?");
    validarNumero(personas)
}


for (let i = 1; i <= (personas+preguntasAHacer); i++) {

    if (i <= personas ) {
        let name = "nombre"
        let age = "age"
        let sexo = "sexo"
        let pais = "pais"
        participantes.push(generarParticipante(name,age,sexo,pais))
        console.log(participantes);
    }
    
    if ((i > personas) && i <=(personas+preguntasAHacer) ) {
        let pregunta = "numeros"
        let opcion1 = "1"
        let opcion2 = "2"
        let opcion3 = "3"
        preguntas.push(generarPregunta(pregunta,recopilarVotos(opcion1,opcion2,opcion3)))
        console.log(preguntas);
    }
}
// preguntas.push([4,5,6])
console.log(preguntas);
for (let i = 0; i < participantes.length; i++) {
    let votosPush = []
    for (let j = 0; j < preguntas.length; j++) {
        console.log(j);
        let votoEntrada = "a"
        console.log((preguntas[j].opciones));
        console.log(validarOpciones(votoEntrada,j));
        while (validarOpciones(votoEntrada,j)) {
            console.log("Una o mas opciones que elegiste no es valida, vuelve a votar");
            votoEntrada = "1"
            validarOpciones(votoEntrada,j)
        }
        votosPush.push(votoEntrada)
    }
    participantes[i].votos = votosPush
    console.log(participantes[i]);
}








  
console.log(preguntas);
todasLasOpciones = (soloOpciones(preguntasxd));
console.log(todasLasOpciones[0]);
console.log(soloOpciones(preguntas));

  
 
  

// ARREGLO DE PARTICIPANTES[0].votos = recopilarVotos(name,age,sexo,pais) IMPORTANTE
















