const perguntas = [
    {
        pergunta: "O que é um desenvolvedor front-end?",
        respostas: [
            "Um desenvolvedor que trabalha na parte do servidor de um aplicativo",
            "Um desenvolvedor que trabalha na interface do usuário de um aplicativo",
            "Um desenvolvedor que trabalha na segurança de um aplicativo",
        ],
        correta: 1
    },
    {
        pergunta: "Qual linguagem de marcação é fundamental para um desenvolvedor front-end?",
        respostas: [
            "Java",
            "HTML",
            "Python",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a principal função do CSS para um desenvolvedor front-end?",
        respostas: [
            "Manipulação de banco de dados",
            "Estilização e formatação de elementos HTML",
            "Lógica de programação",
        ],
        correta: 1
    },
    {
        pergunta: "Qual linguagem de programação é frequentemente utilizada para interatividade do lado do cliente em desenvolvimento front-end?",
        respostas: [
            "Ruby",
            "JavaScript",
            "C++",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a função do framework React no desenvolvimento front-end?",
        respostas: [
            "Gerenciamento de banco de dados",
            "Criação de interfaces de usuário interativas",
            "Análise de dados",
        ],
        correta: 1
    },
    {
        pergunta: "O que significa a sigla 'UI' no contexto do desenvolvimento front-end?",
        respostas: [
            "União Internacional",
            "Interface de Usuário",
            "Instruções Universais",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a função do Bootstrap no desenvolvimento front-end?",
        respostas: [
            "Animação de elementos HTML",
            "Padronização de código JavaScript",
            "Facilitar o desenvolvimento de interfaces responsivas",
        ],
        correta: 2
    },
    {
        pergunta: "Qual ferramenta é usada para o controle de versão de código no desenvolvimento front-end?",
        respostas: [
            "Git",
            "Apache",
            "Node.js",
        ],
        correta: 0
    },
    {
        pergunta: "O que é um 'bug' no contexto do desenvolvimento front-end?",
        respostas: [
            "Um inseto presente no código fonte",
            "Uma falha no sistema operacional",
            "Um problema ou erro no código de um programa",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a importância da acessibilidade no desenvolvimento front-end?",
        respostas: [
            "Não tem importância",
            "É importante apenas para alguns tipos específicos de aplicativos",
            "É importante para garantir que todos os usuários possam acessar e usar um aplicativo",
        ],
        correta: 2
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