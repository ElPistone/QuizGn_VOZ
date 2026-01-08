// fichier d'entrée
import { gererQuestion } from "./script.js";
import { nomApplication, questions, state } from "./config.js";

function demarrerQuiz() {
    state.score = 0;
    alert(`Bienvenue sur ${nomApplication} !\nLe quiz va commencer.`);
    gererQuestion();
    const finalMsg = `Quiz terminé\n\nScore final: ${state.score} / ${questions.length * 10}\n\nVoulez-vous recommencer ?`;
    if (confirm(finalMsg)) {
        demarrerQuiz();
    } else {
        alert("Merci d'avoir joué !");
    }
}
// Expose la fonction au scope global pour que le bouton onclick puisse l'appeler
window.demarrerQuiz = demarrerQuiz;