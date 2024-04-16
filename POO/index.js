class Persona {
    constructor(name,age,sexo,pais){
        this.name = name;
        this.age = age;
        this.sexo = sexo;
        this.pais = pais;
    }
    inscribirse (){
        let personas = prompt("¿Cuantas personas participaran en la votacion?");
        while (isNaN(personas) || personas == "") {
            alert("Introduce un numero valido");
            personas = prompt("¿Cuantas personas participaran en la votacion?");
        };
        for (let i = 1; i <=personas;i++) {
            let name = prompt("Nombre del participante "+ i);
            let age = prompt("Edad del participante "+ i);
            let sexo = prompt("Sexo del participante "+ i);
            let pais = prompt("Pais del participante "+ i);
            while (name == "" || age == "" || sexo == "" || pais == "") {
                alert("Ningun dato puede estar vacio");
                name = prompt("Nombre del participante "+ i);
                age = prompt("Edad del participante "+ i);
                sexo = prompt("Sexo del participante "+ i);
                pais = prompt("Pais del participante "+ i);
            };
            participantes.push(new Participante(name,age,sexo,pais));
        };
    };
};

class Participante extends Persona{
    constructor(name,age,sexo,pais,votos){
        super(name,age,sexo,pais);
        this.votos = votos;
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
                votosPush.push(votoEntrada);
            };
            participantes[i].votos = votosPush;
        };
    };
};

class Pregunta {
    constructor(pregunta,opciones){
        this.pregunta = pregunta;
        this.opciones = opciones ;
    };

    preguntas (){
        let question = prompt("¿Cuantas preguntas quiere hacer?");
        while (isNaN(question) || question == "") {
            alert("Introduce un numero valido");
            question = prompt("¿Cuantas preguntas quiere hacer?");
        };
        for (let i = 1; i <=question;i++) {
            let opciones = [];
            let pregunta = prompt("Enunciado de la pregunta "+ i);
            while (pregunta == "") {
                alert("El enunciado no puede estar vacio");
                pregunta = prompt("Enunciado de la pregunta "+ i);
            };
            let opcion1 = prompt("Opcion 1");
            let opcion2 = prompt("Opcion 2");
            let opcion3 = prompt("Opcion 3");
            while (opcion1 == "" || opcion2 == "" || opcion3 == "") {
                alert("Ninguna de las opciones puede estar vacia")
                opcion1 = prompt("Opcion 1");
                opcion2 = prompt("Opcion 2");
                opcion3 = prompt("Opcion 3");
            };
            opciones.push(opcion1,opcion2,opcion3);
            preguntas.push(new Pregunta(pregunta,opciones));
        };
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
          participantes.forEach((_,index) => {
            switch ((participantes[index].votos[i])) {
              case eleccion1:
                cantidad1++;
                break;
              case eleccion2:
                cantidad2++;
                break;
              case eleccion3:
                cantidad3++;
                break;
              default:
                break;
            };
          });  
          resultados.push(new Resultado(enunciado,eleccion1,cantidad1,eleccion2,cantidad2,eleccion3,cantidad3));
        };
    };
};

class Administracion {
    iniciarPlanilla (){
        const participante0 = new Participante();
        participante0.inscribirse();
    };

    iniciarPreguntas (){
        const pregunta0 = new Pregunta ();
        pregunta0.preguntas();
    };

    iniciarVotacion (){
        const participante0 = new Participante();
        participante0.votar();
    };

    iniciarResultados (){
        const result0 = new Resultado();
        result0.resultados();
    };
    
    mostrarResultados (){
        resultados.forEach(resultado => {
            console.log("==================================");
            console.log("Enunciado: " + resultado.enunciado);
            console.log("alternativa1: " + resultado.alternativa1.eleccion1 + " fue de " + resultado.alternativa1.cantidad1 + " votos");
            console.log("alternativa2: " + resultado.alternativa2.eleccion2 + " fue de " + resultado.alternativa2.cantidad2 + " votos");
            console.log("alternativa3: " + resultado.alternativa3.eleccion3 + " fue de " + resultado.alternativa3.cantidad3 + " votos");
            console.log("==================================");
        });
    };
};


const preguntas = [];
const participantes = [];
const resultados = [];
const admin = new Administracion();
admin.iniciarPlanilla();
admin.iniciarPreguntas();
admin.iniciarVotacion();
admin.iniciarResultados();
admin.mostrarResultados();
