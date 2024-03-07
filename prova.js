const chamadaDeAlunos = [];

// Aluno 1
const aluno1 = {
    nome: "Kayky",
    idade: 16,
    materias: [
        {
            nome: "Tecnologias em Inteligência Artificial",
            presenca: 75,
            nota: 10
        },
        {
            nome: "Programação para Dispositivos Móveis",
            presenca: 90,
            nota: 10
        }
    ],
    numeroChamada: 1221
};
chamadaDeAlunos.push(aluno1);

// Aluno 2
const aluno2 = {
    nome: "Ana",
    idade: 17,
    materias: [
        {
            nome: "BD1",
            presenca: 100,
            nota: 10
        },
        {
            nome: "Programação para Dispositivos Móveis",
            presenca: 90,
            nota: 7.5
        }
    ],
    numeroChamada: 1222
};
chamadaDeAlunos.push(aluno2);

// Aluno 3
const aluno3 = {
    nome: "Matheus",
    idade: 20,
    materias: [
        {
            nome: "Tecnologias em Inteligência Artificial",
            presenca: 79,
            nota: 8.5
        },
        {
            nome: "Programação para Dispositivos Móveis",
            presenca: 60,
            nota: 6.5
        }
    ],
    numeroChamada: 1223
};
chamadaDeAlunos.push(aluno3);

// Aluno 4
const aluno4 = {
    nome: "Jorge",
    idade: 19,
    materias: [
        {
            nome: "Tecnologias em Inteligência Artificial",
            presenca: 100,
            nota: 10
        },
        {
            nome: "Programação para Dispositivos Móveis",
            presenca: 79,
            nota: 10
        }
    ],
    numeroChamada: 1224
};
chamadaDeAlunos.push(aluno4);

// Aluno 5
const aluno5 = {
    nome: "Richard",
    idade: 18,
    materias: [
        {
            nome: "BD2",
            presenca: 74,
            nota: 10
        },
        {
            nome: "BD1",
            presenca: 90,
            nota: 7
        }
    ],
    numeroChamada: 1225
};


console.log(`Seu nome é: ${aluno1.nome} e sua nota é: ${aluno1.nota}`)
console.log(`Seu nome é: ${aluno2.nome} e sua nota é: ${aluno2.nota}`)
console.log(`Seu nome é: ${aluno3.nome} e sua nota é: ${aluno3.nota}`)
console.log(`Seu nome é: ${aluno4.nome} e sua nota é: ${aluno4.nota}`)
console.log(`Seu nome é: ${aluno5.nome} e sua nota é: ${aluno5.nota}`)


//Mostrar se foi aprovado
function PassouDeAno(nota) {
if (nota >= 7) {
    chamadaDeAlunos.push(aluno1);
}
}
console.log("Voce passou " +aluno1.nome);

function passouDeAno(nota) {
if (nota >= 7) {
    chamadaDeAlunos.push(aluno2);
}
}
console.log("Voce passou " +aluno2.nome);

function passouDeAno(nota) {
if (nota >= 7) {
    chamadaDeAlunos.push(aluno3);
}
}
console.log("Voce passou " +aluno3.nome);

function passouDeAno(nota) {
if (nota >= 7) {
    chamadaDeAlunos.push(aluno4);
}
}
console.log("Voce passou " +aluno4.nome);

function passouDeAno(nota) {
if (nota >= 7) {
    chamadaDeAlunos.push(aluno5);
}
}
console.log("Voce passou " +aluno5.nome);


function presencaAno(presenca) {

 if (presenca>=75 && passouDeAno >=7 ) {
  chamadaDeAlunos.push(aluno3);
 }
    console.log("Voce passou " + aluno3.nome)
}

//Mostrar os 3 que tiveram a maior nota
function maiorNota(nota){
    if(nota>9){
        console.log("Voce teve a maior nota" + chamadaDeAlunos.nome)
    }
}

//Mostrar os 3 que tiveram a menor nota
function menorNota(nota){
    if(nota<6.5){
        console.log("Voce teve a menor nota" + chamadaDeAlunos.nome)
    }
}