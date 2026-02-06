# 🧠 Mini Quiz – Culture Générale

Un **mini jeu de quiz interactif** développé en **JavaScript vanilla**, axé sur la **culture générale de la Guinée**.  
Les questions portent sur plusieurs thèmes comme **l’histoire, la géographie, la culture** et bien d’autres.

> ⚠️ Projet en cours — Version 1 (V1)

---

## ✨ Fonctionnalités
- Questions de culture générale par Niveau 
- Gestion des choix de réponses
- Progression dynamique dans le quiz afin de débloquer un mot (statut)
- Interface simple et responsive grâce à **Bulma CSS**

---

## 🎯 Objectif
Tester et enrichir les connaissances de l’utilisateur sur la Guinée à travers un quiz ludique et interactif.

---

## 🗂️ Structure du projet


- ├── index.html
- ├── js/
- │ ├── config.js # Configuration et données du quiz
- │ ├── main.js # Point d’entrée de l’application
- │ └── script.js # Logique du jeu (DOM, choix, progression)
- ├── style/
- │ └── style.css # Styles (Bulma + personnalisations)


---

## Description des fichiers

### `index.html`
- Point d’entrée de l’application
- Structure HTML volontairement minimaliste (avec la version 1)
- Sert de base pour l’évolution du projet

### `js/config.js`
- Contient les configurations générales
- Stocke les questions du quiz
- Définit les thèmes (histoire, géographie, culture, etc.)

### `js/main.js`
- Initialise le quiz
- Lance la logique principale de l’application

### `js/script.js`
- Rendu dynamique du DOM
- Gestion des réponses utilisateur
- Suivi de la progression dans le quiz

### `style/style.css`
- Mise en forme de l’interface
- Utilisation principale de **Bulma CSS**
- Styles personnalisés pour le jeu

---

## 🛠️ Technologies utilisées
- HTML5
- CSS3
- **Bulma CSS**
- JavaScript (Vanilla)

---

## 🚧 Évolutions prévues
- Ajout de nouveaux mots à débloquer
- Plus de questions et de thèmes
- Amélioration de l’UI/UX grâce à la migration vers REACT.JS
- Animation et feedback visuel

---

## ▶️ Lancer le projet
1. Cliquer sur ce lien https://elpistone.github.io/QuizGn_VOZ/
2. Cliquer sur « Commencer ».

## 🔧 Vérifications rapides
- Vérifier que `js/config.js` contient des objets `questions` (avec `anecdote` si souhaité).

---
