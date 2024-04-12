class Participante {
    constructor(name,age,sexo,pais,votos){
       this.name = name;
       this.age = age;
       this.sexo = sexo;
       this.pais = pais;
       this.votos = votos;

    };

    inscribirse (){

        let personas = prompt("¿Cuantas personas participaran en la votacion?");
        while (isNaN(personas) || personas == "") {
            alert("Introduce una opcion valida");
            personas = prompt("¿Cuantas personas participaran en la votacion?");
        };
        for (let i = 1; i <=personas;i++) {
            let name, age, sexo, pais; // se pueden añadir propiedades si se quiere
            for (let s= 0; s<=4; s++) { // modificar la evaluacion del ciclo por cada propiedad nueva
                switch (s) {
                    case 1:
                        name = prompt("Nombre del participante "+ i);
                        break;
                    case 2:
                        age = prompt("Edad del participante "+ i);
                        break;
                    case 3:
                        sexo = prompt("Sexo del participante "+ i);
                        break;
                    case 4:
                        pais = prompt("Pais del participante "+ i);
                        participantes.push(new Participante(name,age,sexo,pais)) // esta linea tiene que estar en el case final del ultimo dato añadido
                        break;
                    default:
                };
            };
        };
    };


    votar (){
        for (let i = 0; i < participantes.length; i++) {
            let votosPush = [];
            for (let j = 0; j < preguntas.length; j++) {
                alert("Encuesta participante " + (i + 1) );
                alert(preguntas[j].pregunta.toUpperCase());
                let votoEntrada = prompt(preguntas[j].opciones.join(' - ')) ;
                while (!preguntas[j].opciones.includes(votoEntrada)) {
                    alert("Introduce una opcion valida");
                    votoEntrada = prompt(preguntas[j].opciones.join(' - '));
                };
                votosPush.push(votoEntrada)  ;
            };
            participantes[i].votos = votosPush;
            console.log(participantes[i]);;
        };
    };
};

class Pregunta {
    constructor(pregunta,opciones){
        this.pregunta = pregunta;
        this.opciones = opciones ;
    }

    preguntas (){
        let quest = prompt("¿Cuantas preguntas quiere hacer?");
        while (isNaN(quest) || quest == "") {
            alert("Introduce una opcion valida");
            quest = prompt("¿Cuantas preguntas quiere hacer?");
        };
        for (let i = 1; i <=quest;i++) {
            let pregunta,opcion1,opcion2,opcion3;
            let opciones = [];
            for (let s= 0; s<=4; s++) { // modificar la evaluacion del ciclo por cada dato nuevo
                switch (s) {
                    case 1:
                        pregunta = prompt("enunciado de la pregunta "+ i);
                        break;
                    case 2:
                        opcion1 = prompt("opcion 1");
                        break;
                    case 3:
                        opcion2 = prompt("opcion 2");
                        break;
                    case 4:
                        opcion3 = prompt("opcion 3");
                        opciones.push(opcion1,opcion2,opcion3)
                        preguntas.push(new Pregunta(pregunta,opciones)) // esta linea tiene que estar en el case final del ultimo dato añadido
                        break;
                    default:
                };
            };
        };;
    };
};

class Resultado {
    constructor(enunciado,eleccion1,cantidad1,eleccion2,cantidad2,eleccion3,cantidad3){
      this.enunciado = enunciado;
      this.alternativa1 = {eleccion1, cantidad1};
      this.alternativa2 = {eleccion2, cantidad2};
      this.alternativa3 = {eleccion3, cantidad3};
    };

    resultados(){
        const resultados = [];
        for (let i = 0; i < preguntas.length; i++) {
          let enunciado = preguntas[i].pregunta;
          let eleccion1, eleccion2, eleccion3;
          let cantidad1, cantidad2, cantidad3;
          cantidad1 = 0;
          cantidad2 = 0;
          cantidad3 = 0;
          preguntas[i].opciones.forEach((opcion, index) => {
            switch (index) {
              case 0:
                eleccion1 = (`${opcion}`);
                break;
              case 1:
                eleccion2 = (`${opcion}`);
                break;
              case 2:
                eleccion3 = (`${opcion}`);
                break;
              default:
                break;
            };
          });
          participantes.forEach((votos,index) => {
            switch ((participantes[index].votos[i])) {
              case eleccion1:
                cantidad1++
                break;
              case eleccion2:
                cantidad2++
                break;
              case eleccion3:
                cantidad3++
                break;
              default:
                break;
            }
          });  
          resultados.push(new Resultado(enunciado,eleccion1,cantidad1,eleccion2,cantidad2,eleccion3,cantidad3));
          console.log(resultados[i]);
    
    
        }
    }
}


class Inscripcion {
    constructor(pregunta,opcion1,opcion2,opcion3){
        this.pregunta = pregunta;
        this.opcion1 = opcion1;
        this.opcion2 = opcion2;
        this.opcion3 = opcion3;

    };
    iniciarPlanilla (){
        const participante0 = new Participante();
        participante0.inscribirse();
    };

    iniciarPreguntas (){
        const pregunta0 = new Pregunta ();
        pregunta0.preguntas();
    };

    iniciarVotacion (){
        const participante0 = new Participante()
        participante0.votar()
    };

    iniciarResultados (){
        const result0 = new Resultado()
        result0.resultados()
    };
};



const preguntas = [];
const participantes = [];
const inscript = new Inscripcion();
inscript.iniciarPlanilla();
inscript.iniciarPreguntas();
inscript.iniciarVotacion();
inscript.iniciarResultados();

  



