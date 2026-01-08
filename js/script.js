// fichier pour les fonctions
import { questions, state } from "./config.js";

function afficherQuestion(index) {
    let promptText = `Question ${index + 1} / ${questions.length}:\n${questions[index].question}\n\n`;

    // Utilisation de forEach pour afficher les choix
    questions[index].choix.forEach((choix, i) => promptText += `${ i + 1}. ${choix}\n`);

    promptText += `\nEntrez le numéro de votre réponse (1-${questions[index].choix.length}) :`;
    return promptText;
}

function checkAnswer(userInput, question) {
    const userAnswer = parseInt(userInput, 10) - 1;
    if (Number.isNaN(userAnswer) || userAnswer < 0 || userAnswer >= question.choix.length) {
        return false;
    }
    if (userAnswer === question.bonneReponse) {
        state.score += 10;
        alert('✅ Bonne réponse;\n \n Anecdote : \n' + question.anecdote);
    } else {
        alert(`❌ Mauvaise réponse\nLa réponse correcte était : ${question.choix[question.bonneReponse]}`);
    }
    return true;
}

export function gererQuestion() {
    let quizInterrompu = false;
    
    questions.forEach((question, index) => {
        if (quizInterrompu) return; // Sort de cette itération
        
        let promptText = afficherQuestion(index);

        while (true) {
            const input = prompt(promptText);
            if (input === null) {
                alert(`Quiz interrompu. Score actuel : ${state.score} / ${questions.length * 10}`);
                quizInterrompu = true;
                return; // Sort du forEach
            }
            if (checkAnswer(input, question)) break;
            alert('Entrée invalide — veuillez entrer un numéro correspondant à un choix.');
        }
    });
}

