const perguntas = [
    {
        pergunta: "Qual é o significado de 'Karate-Do'?",
        respostas: [
            "Caminho da mão vazia",
            "Caminho do guerreiro",
            "Caminho da mente tranquila",
        ],
        correta: 0
    },
    {
        pergunta: "Quem é o fundador do Karatê Shotokan?",
        respostas: [
            "Gichin Funakoshi",
            "Mas Oyama",
            "Hironori Ohtsuka",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o principal objetivo do Karatê Shotokan?",
        respostas: [
            "Ganhar competições",
            "Desenvolver o espírito de luta",
            "Autodefesa e aprimoramento pessoal",
        ],
        correta: 2
    },
    {
        pergunta: "Em que país o Karatê Shotokan foi desenvolvido?",
        respostas: [
            "China",
            "Japão",
            "Coreia",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a característica distintiva do Karatê Shotokan?",
        respostas: [
            "Uso extensivo de chutes altos",
            "Uso predominante de técnicas de projeção",
            "Posturas profundas e movimentos poderosos",
        ],
        correta: 2
    },
    {
        pergunta: "O que é um kata no contexto do Karatê Shotokan?",
        respostas: [
            "Uma competição de sparring",
            "Uma forma pré-arranjada de movimentos",
            "Uma técnica de meditação",
        ],
        correta: 1
    },
    {
        pergunta: "Quais são os princípios fundamentais do Karatê Shotokan?",
        respostas: [
            "Força e agressão",
            "Velocidade e flexibilidade",
            "Postura, respiração e concentração",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o nome dado ao grito emitido durante um golpe no Karatê Shotokan?",
        respostas: [
            "Kiai",
            "Kumite",
            "Sensei",
        ],
        correta: 0
    },
    {
        pergunta: "O que é um dojo no contexto do Karatê Shotokan?",
        respostas: [
            "Um torneio de artes marciais",
            "Uma técnica de defesa pessoal",
            "Um local de treinamento",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o símbolo do Karatê Shotokan?",
        respostas: [
            "Dragão",
            "Tigre",
            "Grifo",
        ],
        correta: 1
    },
];

const quiz = document.querySelector('#quiz');
const template = document.querySelector('template');

const corretas = new Set();
const totalDePerguntas = perguntas.length;
const mostrarTotal = document.querySelector('#acertos span');
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;

// loop ou laço de repetição
for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true);
    quizItem.querySelector('h3').textContent = item.pergunta;

    for (let respostas of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true);
        dt.querySelector('span').textContent = respostas;
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item));
        dt.querySelector('input').value = item.respostas.indexOf(respostas);
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta;

            corretas.delete(item);
            if (estaCorreta) {
                corretas.add(item)
            }

            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;
        }

        quizItem.querySelector('dl').appendChild(dt);
    }

    quizItem.querySelector('dl dt').remove();

    // coloca a pergunta na tela
    quiz.appendChild(quizItem);
};