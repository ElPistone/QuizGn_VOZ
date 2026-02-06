// fichier pour les fonctions: rendu DOM, gestion des choix et progression
import { questions, state } from "./config.js";

let currentIndex = 0;

function resetUI() {
    const quizSection = document.getElementById('quizSection');
    const result = document.getElementById('result');
    quizSection.style.display = 'none';
    result.style.display = 'none';
}

function renderQuestion(index) {
    // Vérifier qu'il y a des questions
    if (!questions || questions.length === 0) {
        document.getElementById('questionText').textContent = "Aucune question disponible";
        return;
    }
    
    const q = questions[index];
    document.getElementById('questionNumber').textContent = `Question ${index + 1} / ${questions.length}`;
    document.getElementById('questionText').textContent = q.question;

    const choicesList = document.getElementById('choicesList');
    choicesList.innerHTML = '';
    
    // Lettres pour les choix
    const letters = ['A', 'B', 'C', 'D'];
    
    // Créer un conteneur de colonnes Bulma
    const columnsContainer = document.createElement('div');
    columnsContainer.className = 'columns is-multiline';
    
    q.choix.forEach((c, i) => {
        // Créer une colonne pour chaque choix (6 colonnes par ligne = 2 par ligne)
        const column = document.createElement('div');
        column.className = 'column is-6';
        
        const btn = document.createElement('button');
        btn.className = 'button choice-button is-fullwidth is-rounded';
        btn.dataset.index = i;
        btn.addEventListener('click', onChoiceClick);
        
        // Structure avec lettre et texte
        btn.innerHTML = `
            <span class="icon-text">
                <span class="icon">
                    <span class="choice-letter">${letters[i]}</span>
                </span>
                <span>${c}</span>
            </span>
        `;
        
        column.appendChild(btn);
        columnsContainer.appendChild(column);
    });
    
    choicesList.appendChild(columnsContainer);

    document.getElementById('anecdote').style.display = 'none';
    document.getElementById('anecdote').textContent = '';
    document.getElementById('nextBtn').style.display = 'none';

    const progress = Math.round(((index) / questions.length) * 100);
    document.getElementById('progressBar').value = progress;
}

function onChoiceClick(e) {
    const btn = e.currentTarget;
    const selected = Number(btn.dataset.index);
    const q = questions[currentIndex];

    const buttons = document.querySelectorAll('#choicesList .choice-button');
    buttons.forEach(b => b.disabled = true);

    const correctIndex = q.bonneReponse;
    
    // Ajouter les classes correct/incorrect
    if (selected === correctIndex) {
        state.score += 10;
        btn.classList.add('correct');
    } else {
        btn.classList.add('incorrect');
        // Trouver et colorer la bonne réponse
        const correctBtn = Array.from(buttons).find(b => Number(b.dataset.index) === correctIndex);
        if (correctBtn) {
            correctBtn.classList.add('correct');
        }
    }

    const anecdoteBox = document.getElementById('anecdote');
    anecdoteBox.textContent = q.anecdote || '';
    anecdoteBox.style.display = 'block';

    const nextBtn = document.getElementById('nextBtn');
    nextBtn.style.display = 'inline-block';
}

function showResult() {
    const result = document.getElementById('result');
    result.innerHTML = `
        <div class="box">
            <h3 class="title is-4">Quiz terminé</h3>
            <p class="subtitle is-5">Score final: <strong>${state.score}</strong> / ${questions.length * 10}</p>
            <div class="buttons is-centered mt-3">
                <button id="restartBtn" class="button is-link">Recommencer</button>
            </div>
        </div>
    `;
    result.style.display = 'block';
    document.getElementById('quizSection').style.display = 'none';

    document.getElementById('restartBtn').addEventListener('click', () => {
        demarrerQuiz();
    });
}

export function gererQuestion() {
    // Vérification renforcée
    if (!questions || questions.length === 0) {
        alert('Aucune question disponible. Veuillez recharger la page.');
        return;
    }

    currentIndex = 0;
    state.score = 0;
    
    // Cacher la section règles et montrer le quiz
    document.getElementById('rulesSection').style.display = 'none';
    document.getElementById('quizSection').style.display = 'block';
    
    renderQuestion(currentIndex);

    const nextBtn = document.getElementById('nextBtn');
    nextBtn.onclick = () => {
        currentIndex += 1;
        if (currentIndex >= questions.length) {
            showResult();
            return;
        }
        renderQuestion(currentIndex);
    };
}

export function demarrerQuiz() {
    // Réinitialiser l'état
    state.score = 0;
    currentIndex = 0;
    
    // Cacher les règles, montrer le quiz, cacher le résultat
    document.getElementById('rulesSection').style.display = 'none';
    document.getElementById('quizSection').style.display = 'block';
    document.getElementById('result').style.display = 'none';
    
    // Démarrer avec la première question
    gererQuestion();
}