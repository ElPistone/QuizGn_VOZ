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
 * @parameter question - Le texte de la question
 * @parameter choix - Les choix de réponses possibles
 * @parameter bonneReponse - L'index de la bonne réponse dans le tableau des choix
 */
async function chargerQuestions() {
  try {
    // Chemin relatif vers votre fichier JSON
    const reponse = await fetch('data/questions.json');
    
    if (!reponse.ok) {
      throw new Error(`Erreur HTTP: ${reponse.status}`);
    }
    
    // Convertir la réponse en tableau
    const donnees = await reponse.json();
    
    // Vérifier et stocker dans un tableau
    let tableauQuestions = [];
    
    if (Array.isArray(donnees)) {
      tableauQuestions = donnees;
    } else if (typeof donnees === 'object') {
      // Si c'est un objet unique, le mettre dans un tableau
      tableauQuestions = [donnees];
    }    
    return tableauQuestions;
    
  } catch (erreur) {
    console.error('Erreur de chargement:', erreur);
    return [];
  }
}
export const questions = await chargerQuestions()