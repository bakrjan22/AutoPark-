# 🚗 AutoPark — Gestion d’un parc automobile

AutoPark est une application web de gestion de parc automobile développée en JavaScript Vanilla ES6+. Elle permet à une agence fictive de location de voitures, Atlas Auto, de gérer ses véhicules, de suivre leur disponibilité et de visualiser les indicateurs clés de son parc automobile.

Le projet a été réalisé dans le cadre de la formation Développeur Web et Web Mobile.

---

## 📋 Présentation du projet

AutoPark est une application web composée de deux interfaces complémentaires :
- **Gestion du parc (`voitures.html`)** : permet de consulter, ajouter, modifier, supprimer, rechercher, filtrer et trier les véhicules.
- **Dashboard (`index.html`)** : permet de visualiser les statistiques globales du parc automobile à travers des indicateurs dynamiques.

L'application fonctionne entièrement côté client, sans backend ni base de données. Les informations sont sauvegardées localement grâce à `localStorage`.

---

## 🎯 Objectifs du projet

- Développer une application web interactive avec JavaScript ES6+.
- Manipuler le DOM et gérer les événements utilisateur.
- Implémenter les opérations CRUD (Create, Read, Update, Delete).
- Valider les données saisies dans les formulaires.
- Mettre en place un système de recherche, de filtrage et de tri.
- Organiser le code avec les modules JavaScript ES6.
- Assurer la persistance des données avec `localStorage`.
- Concevoir un dashboard responsive et dynamique.

---

## ✨ Fonctionnalités

### 🚘 Gestion des véhicules
- Affichage dynamique des voitures dans un tableau HTML.
- Ajout d'un nouveau véhicule.
- Modification des informations d'un véhicule existant.
- Suppression avec confirmation.
- Génération automatique d'un identifiant unique.
- Gestion des catégories : **Citadine**, **Berline** et **SUV**.
- Gestion des statuts : **Disponible**, **Louée** et **En maintenance**.

### 🔍 Recherche, filtrage et tri
- Recherche instantanée par marque, modèle ou immatriculation (insensible à la casse).
- Filtrage par catégorie.
- Filtrage par statut.
- Tri des véhicules par prix journalier (croissant ou décroissant).
- Combinaison simultanée des différents critères.
- Réinitialisation des filtres en un clic.

### ✅ Validation des formulaires
- Vérification des champs obligatoires (refus des champs vides ou contenant uniquement des espaces).
- Vérification d'un prix strictement positif.
- Vérification de l'unicité des immatriculations (détection des doublons sans tenir compte de la casse et des espaces).
- Affichage des messages d'erreur à proximité des champs concernés.
- Réinitialisation du formulaire après un ajout réussi et gestion du mode modification avec option d'annulation.

### 💾 Persistance des données
- Sauvegarde automatique après chaque ajout, modification ou suppression via `localStorage`.
- Récupération et affichage des données au chargement de l'application.
- Conservation des données après actualisation de la page.

### 📊 Dashboard
Le tableau de bord affiche quatre indicateurs calculés dynamiquement :
- **Total des véhicules** : nombre total de voitures enregistrées.
- **Disponibles** : nombre de voitures disponibles à la location.
- **Louées** : nombre de voitures actuellement louées.
- **En maintenance** : nombre de voitures en maintenance.

---

## 🛠️ Technologies utilisées

| Technologie | Utilisation |
| :--- | :--- |
| **HTML5** | Structure et sémantique des pages |
| **CSS3** | Mise en forme et responsive design |
| **JavaScript (ES6+)** | Logique et interactions dynamiques |
| **DOM** | Manipulation des éléments HTML |
| **ES6 Modules** | Organisation du code avec `import`/`export` |
| **localStorage** | Sauvegarde locale des données |
| **JSON** | Sérialisation et désérialisation des données |
| **Git & GitHub** | Gestion des versions et hébergement |
| **Jira** | Organisation et suivi des tâches |

*Contraintes techniques respectées : JavaScript Vanilla uniquement, aucun framework, aucun backend, aucune base de données, aucune API externe.*

---

Site : <a href="https://bakrjan22.github.io/AutoPark-/">site web</a>



## 📁 Structure du projet

```text
AutoPark/
│
├── index.html                 # Dashboard
├── voitures.html              # Gestion du parc automobile
│
├── assets/
│   └── css/
│       ├── style.css          # Styles de gestion du parc
│       └── dashboard.css      # Styles du dashboard
│
├── js/
│   ├── main.js                # Initialisation de la gestion du parc
│   ├── dashboard.js           # Logique du dashboard
│   ├── data.js                # Données initiales et gestion des véhicules
│   ├── storage.js             # Gestion du localStorage
│   └── utils.js               # Fonctions utilitaires communes
│
└── README.md                  # Documentation du projet