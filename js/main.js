// fichier d'entrée
import { gererQuestion, demarrerQuiz } from "./script.js";
import { nomApplication, chargerQuestions } from "./config.js";

document.addEventListener('DOMContentLoaded', async () => {
    const startBtn = document.getElementById('startBtn');
    
    if (startBtn) {
        // Charger les questions d'abord
        await chargerQuestions();
        
        startBtn.addEventListener('click', () => {
            console.log(`Bienvenue sur ${nomApplication} !`);
            demarrerQuiz();
        });
    }
    
    // Expose pour compatibilité
    window.demarrerQuiz = demarrerQuiz;
});