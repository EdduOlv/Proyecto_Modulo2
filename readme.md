![UDD logo](https://github.com/EdduOlv/Proyecto-_Modulo1/assets/156525513/2c9572c9-af59-4edd-a716-f23cc96296b4)


# Proyecto Modulo 2 Sistema de Votacion

Proyecto realizado en Javascript, el fin es el desarrollo de un algoritmo que represente un sistema de votacion creado por el usuario. El algoritmo tiene que considerar los siguientes requerimientos:



## Requerimientos del proyecto

 - Permitir a los usuarios crear encuestas con opciones de respuesta.
 - Permitir a los usuarios votar en las encuestas.
 - Mostrar los resultados de las encuestas en tiempo real.
 - Almacenar los datos de las encuestas y los votos en una variable.
 - Implementar la solución utilizando programación orientada a objetos (POO) o programación funcional (PF).

 ## Mi proyecto

Mi algoritmo está pensado un sistema de votacion en el que se puede escojer la cantidad de participantes y la cantidad de preguntas a realizar, cada una de las preguntas tiene un enunciado y tres alternativas que igualmente pueden ser elegidas por el usuario. Las alternativas elegidas por cada participante pasan a ser parte de la informacion del mismo, esta condicion permite hacer el conteo final de votos y desplegar los resultados al final del algoritmo.

# Funcionamiento de la solucion de programacion otientada a objetos (POO)

## Proposito de cada clase

Dentro del algoritmo existen 5 clases que dividen el proceso del programa en 5 secciones.

 - Inscripcion
 - Preguntas
 - Votacion
 - Resultados
 - Mostrar resultados

 ## Inscripcion

Clase Persona
 -
 
 - Esta clase añade un metodo llamado inscribirse que sera utilizado en la erencia a la clase Participante.
 - El funcionamiento del metodo inscribirse contempla la posibilidad de errores y prebiene que el usuario ingrese valores que compliquen el funcionamiento del algoritmo.
 - Finalmente el metodo crea una nueva intancia de participante que el cual hereda dicho metodo y datos del constructor de la clase persona, esta nueva instancia es almacenada
 en un arreglo que contendra a cada objeto Participante, considero necesario el uso de push dado que la cantidad de participantes es dinamica y puede pueden ser los que el usuaro quiera.

 ```
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
```
 ## Preguntas

 Clase Pregunta

 - Esta clase añade un metodo llamado preguntas que sera utilizado para crear las preguntas
 - El funcionamiento del metodo preguntas contempla la posibilidad de errores y prebiene que el usuario ingrese valores que compliquen el funcionamiento del algoritmo impidiendo la
 existencia de un enunciado vacio o alternativas vacias.
 - Finalmente el metodo crea una nueva intancia de Pregunta, esta nueva instancia es almacenada en un arreglo que contendra a cada objeto Pregunta, considero necesario el uso de push dado que la cantidad de preguntas es dinamica y puede pueden ser los que el usuaro quiera.

 ```
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
```
## Votacion

Clase Participante


 - Esta clase hereda las caracteristicas dela clase persona y su metodo inscribirse el cual es usado para generar nuevas instancias de si mimsma.
 - Añade un metodo llamado votar que sera utilizado para añadir el voto a cada elemento del arrelo Participantes en cada iteracion.
 - El funcionamiento del metodo votar contempla la posibilidad de errores y prebiene que el usuario ingrese valores que no existan dentro de cada elemento del arreglo preguntas,
 impidiendole avanzar hasta que ingrese una alternativa existente.

```
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
```
 ## Resultados

Clase resultados
 -
 - Esta clase contiene la estructura de cada resultado por pregunta, almacenando el enunciado y cada alternativa con sus correspondientes cantidades de votos.
 - Añade un metodo llamado resultados, el cual repasa el arreglo de preguntas almacenando el enunciado y alternativas de cada elemento inicializando las cantidades de votos en 0.
 posteriormente repasa el arreglo de participantes, distingiendo cada caso segun su eleccion y sumando 1 a dicha eleccion en su resultado.
 - Finalmente el metodo crea una nueva intancia de Resultado, esta nueva instancia es almacenada en un arreglo que contendra a cada objeto Resultado, considero necesario el uso de push dado que la cantidad de resultados es dinamica y varian segun la cantidad de preguntas.

 ```
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
          preguntas[i].opciones.forEach((index) => {
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
```
## Administracion y resultados

Clase Administracion
 -
 - Esta clase no contiene una estructura como tal, su lavor es representar mediante metodos la administracion de las demas clases como lo haria la gestion de un meson de una votacion.
 - iniciarPlantilla crea un "participante0" que sera el que inicie el metodo inscribirse de su clase.
 - iniciarPreguntas crea un "pregunta0" que sera el que inicie el metodo preguntas de su clase.
 - iniciarVotacion crea un "participante0" que sera el que inicie el metodo votar de su clase.
 - iniciarResultados crea un "result0" que sera el que inicie el metodo resultados de su clase.
 - mostrarResultados recorre el arreglo de resultados y en cada iteracion genera la tabla de resultados de cada pregunta.

   
 ```
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
```
## Constantes globales y iniciar metodos

 -
 - Constantes principales y inicio de los metodos de Administracion mediente la nueva instancia de admin dando inicio al algotrimo
 ```
const preguntas = [];
const participantes = [];
const resultados = [];
const admin = new Administracion();
admin.iniciarPlanilla();
admin.iniciarPreguntas();
admin.iniciarVotacion();
admin.iniciarResultados();
admin.mostrarResultados();

 ```


### Notas:
- El uso de prompt puede no ser la forma mas adecuada de hacer ingreso de datos, pero considerando las limitaciones del proyecto y el hecho que aun no iniciamos como tal el modulo
 de HTML, me parece el recurso indicado para dar una interaccion minima al algoritmo.


Gracias por leer las notas.