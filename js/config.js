// Fichier qui contient les configurations et les données du quiz

/**
 * @description Nom de l'application
 */
export const nomApplication = "QuizGn"

/**
 * État partagé de l'application (score mutable)
 */
export const state = {
    score: 0
}

/**
 * @description Tableau contenant les questions du quiz
 */
export let questions = [];

/**
 * Fonction pour charger les questions
 */
export async function chargerQuestions() {
  try {
    const reponse = await fetch('./data/questions.json');
    
    if (!reponse.ok) {
      throw new Error(`Erreur HTTP: ${reponse.status}`);
    }
    
    const donnees = await reponse.json();
    
    if (Array.isArray(donnees)) {
      questions = donnees;
    } else if (typeof donnees === 'object') {
      questions = [donnees];
    } else {
      questions = [];
    }
    
    console.log(`${questions.length} questions chargées`);
    return questions;
    
  } catch (erreur) {
    console.error('Erreur de chargement:', erreur);
    // Questions de secours si le JSON ne charge pas
    questions = [
      {
        "question": "Question test (le JSON n'a pas chargé)",
        "choix": ["Choix 1", "Choix 2", "Choix 3", "Choix 4"],
        "bonneReponse": 0,
        "anecdote": "Le fichier questions.json n'a pas pu être chargé."
      }
    ];
    return questions;
  }
}