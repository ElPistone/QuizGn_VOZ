# Mini-quiz

# Étape 12 – Anecdotes

## 🎯 Objectif
Ajouter des anecdotes/explanations liées aux questions du mini-quiz pour enrichir le feedback après chaque réponse.

## ✅ Ce qui a été ajouté
- Possibilité d'associer une courte `anecdote` ou `explication` à chaque objet question.
- Le README est adapté pour décrire le format attendu et comment l'utiliser.

## 🛠️ Tâches effectuées dans ce projet
- Activation des modules ES : `index.html` utilise maintenant `<script type="module" src="./js/main.js"></script>`.
- `js/main.js` : initialise `state.score` et expose `demarrerQuiz` sur `window` pour le bouton.
- `js/config.js` : centralisation du score dans `export const state = { score: 0 }`.
- `js/script.js` : corrections (construction des prompts, validation des réponses, incrémentation de `state.score`, affichage des anecdotes si présentes).
- README mis à jour pour `10-Fonctions` et nouveau README créé pour `11-Foreach`.

Ces changements rendent le mini-quiz exécutable en navigateur et facilitent l'ajout d'anecdotes par question.

## 📁 Format attendu pour une question
Ajoutez une propriété `anecdote` (chaîne) optionnelle :

```js
{
	question: "Quel est... ?",
	choix: ["A","B","C"],
	bonneReponse: 0,
	anecdote: "Brève anecdote ou explication utile après la réponse."
}
```

## ➜ Comment tester
1. Vérifier que `js/config.js` contient des objets `questions` (avec `anecdote` si souhaité).
2.  Cliquer sur ce lien https://elpistone.github.io/QuizGn_VOZ/
```
3. Cliquer sur « Lancer le quiz ».

## 🔧 Vérifications rapides
- Les imports utilisent l'extension `.js` et évitent les boucles d'import.
- Le score est partagé via `state.score` et remis à zéro au démarrage du quiz.

---


