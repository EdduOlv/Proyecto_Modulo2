function validarNumero(numero) {
   if (isNaN(numero) || numero == "") {
        return true;
   } else {
        return false;
   };
   
};
function validarEnunciado(enunciado) {
    if (enunciado == "") {
        return true;
   } else {
        return false;
   };
}
function opcionesValidas(opcion1,opcion2,opcion3) {
    if (opcion1 == "" || opcion2 == "" || opcion3 == "" ) {
        return true;
    } else {
        return false;
    }
}
function validarOpciones (voto,indice) {
   if (preguntas[indice].opciones.includes(voto)) {
        return false;
    } else {
        return true;
    };
};

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
};
const generarParticipante = (name, age, gender, country) => {
    return {
      name,
      age,
      gender,
      country,
      
    };
};  

function contarVotos(arr) {
    return arr.reduce((ocurrencias, elemento) => {
        return { ...ocurrencias, [elemento]: (ocurrencias[elemento] || 0) + 1 };
    }, {});
};

function soloOpciones(participantes) {
    return participantes.map(participante => participante.votos).flat();
};

const participantes = [];
const preguntas = [];

let personas = prompt("Cuantas personas participan")
while (validarNumero(personas)) {
    alert("Introduce una opcion valida");
    personas = prompt("¿Cuantas personas participaran en la votacion?");
    validarNumero(personas);
};

let preguntasAHacer = prompt("Numero de preguntas a hacer") 
while (validarNumero(preguntasAHacer)) {
    alert("Introduce una opcion valida");
    preguntasAHacer = prompt("Numero de preguntas a hacer");
    validarNumero(preguntasAHacer);
};

for (let i = 1; i <= parseInt(personas) + parseInt(preguntasAHacer); i++) {

    if (i <= personas ) {
        let name = prompt("Nombre del participante "+ i);
        let age = prompt("Edad del participante "+ i);
        let gender = prompt("Genero del participante "+ i);
        let country = prompt("Pais del participante "+ i);
        participantes.push(generarParticipante(name,age,gender,country));
    };
    
    if (i > personas && i <= parseInt(personas) + parseInt(preguntasAHacer)) {
        let pregunta = prompt("Enunciado de lapregunta "+ (i-personas));
        while (validarEnunciado(pregunta)) {
            alert("El enunciado no puede estar vacio");
            pregunta = prompt("Enunciado de lapregunta "+ (i-personas));
            validarEnunciado(pregunta);
        }
        let opcion1 = prompt("Opcion 1");
        let opcion2 = prompt("Opcion 2");
        let opcion3 = prompt("Opcion 3");
        while (opcionesValidas(opcion1,opcion2,opcion3)) {
            alert("Ninguna de las opciones puede estar vacia")
            opcion1 = prompt("Opcion 1");
            opcion2 = prompt("Opcion 2");
            opcion3 = prompt("Opcion 3");
            opcionesValidas(opcion1,opcion2,opcion3);
        }   
        preguntas.push(generarPregunta(pregunta,recopilarVotos(opcion1,opcion2,opcion3)));
    }
}
console.log(participantes+ " sin votar");
console.log(preguntas);
for (let i = 0; i < participantes.length; i++) {
    let votosPush = [];
    for (let j = 0; j < preguntas.length; j++) {
        alert("Encuesta participante " + (i + 1) )
        alert(preguntas[j].pregunta.toUpperCase());
        let votoEntrada = prompt(preguntas[j].opciones.join(' - '));
        while (validarOpciones(votoEntrada,j)) {
            alert("Introduce una opcion valida");
            votoEntrada = prompt(preguntas[j].opciones.join(' - '))
            validarOpciones(votoEntrada,j)
        }
        votosPush.push(votoEntrada);
    }
    participantes[i].votos = votosPush;
}

console.log(participantes+ " con voto")
console.log(contarVotos(soloOpciones(participantes)))








