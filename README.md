🚗 AutoPark — Gestion d’un parc automobile

AutoPark est une application web de gestion de parc automobile développée en JavaScript Vanilla ES6+. Elle permet à une agence fictive de location de voitures, Atlas Auto, de gérer ses véhicules, de suivre leur disponibilité et de visualiser les indicateurs clés de son parc automobile.

Le projet a été réalisé dans le cadre de la formation Développeur Web et Web Mobile.

📋 Présentation du projet

AutoPark est une application web composée de deux interfaces complémentaires :

Gestion du parc (voitures.html) : permet de consulter, ajouter, modifier, supprimer, rechercher, filtrer et trier les véhicules.
Dashboard (index.html) : permet de visualiser les statistiques globales du parc automobile à travers des indicateurs dynamiques.

L'application fonctionne entièrement côté client, sans backend ni base de données. Les informations sont sauvegardées localement grâce à localStorage.

🎯 Objectifs du projet
Développer une application web interactive avec JavaScript ES6+.
Manipuler le DOM et gérer les événements utilisateur.
Implémenter les opérations CRUD (Create, Read, Update, Delete).
Valider les données saisies dans les formulaires.
Mettre en place un système de recherche, de filtrage et de tri.
Organiser le code avec les modules JavaScript ES6.
Assurer la persistance des données avec localStorage.
Concevoir un dashboard responsive et dynamique.
✨ Fonctionnalités
🚘 Gestion des véhicules
Affichage dynamique des voitures dans un tableau HTML.
Ajout d'un nouveau véhicule.
Modification des informations d'un véhicule existant.
Suppression avec confirmation.
Génération automatique d'un identifiant unique.
Gestion des catégories : Citadine, Berline et SUV.
Gestion des statuts : Disponible, Louée et En maintenance.
🔍 Recherche, filtrage et tri
Recherche instantanée par marque, modèle ou immatriculation.
Recherche insensible à la casse.
Filtrage par catégorie.
Filtrage par statut.
Tri des véhicules par prix journalier croissant ou décroissant.
Combinaison simultanée des différents critères.
Réinitialisation des filtres.
✅ Validation des formulaires
Vérification des champs obligatoires.
Refus des champs contenant uniquement des espaces.
Vérification d'un prix strictement positif.
Vérification de l'unicité des immatriculations.
Détection des doublons sans tenir compte des espaces autour et de la casse.
Affichage des messages d'erreur à proximité des champs concernés.
Réinitialisation du formulaire après un ajout réussi.
Gestion du mode modification avec possibilité d'annulation.
💾 Persistance des données
Sauvegarde automatique après chaque ajout, modification ou suppression.
Utilisation de localStorage.
Récupération des données au chargement de l'application.
Conservation des données après actualisation de la page.
Gestion correcte d'un parc volontairement vide.
📊 Dashboard

Le tableau de bord affiche quatre indicateurs calculés dynamiquement :

Total des véhicules : nombre total de voitures enregistrées.
Disponibles : nombre de voitures disponibles à la location.
Louées : nombre de voitures actuellement louées.
En maintenance : nombre de voitures en maintenance.

Les statistiques sont actualisées à chaque ouverture ou rechargement du dashboard.

🛠️ Technologies utilisées
Technologie	Utilisation
HTML5	Structure et sémantique des pages
CSS3	Mise en forme et responsive design
JavaScript ES6+	Logique et interactions dynamiques
DOM	Manipulation des éléments HTML
ES6 Modules	Organisation du code avec import/export
localStorage	Sauvegarde locale des données
JSON	Sérialisation et désérialisation des données
Git	Gestion des versions
GitHub	Hébergement du code source
Jira	Organisation et suivi des tâches

Contraintes techniques :

JavaScript Vanilla uniquement.
Aucun framework JavaScript.
Aucun backend.
Aucune base de données.
Aucune API externe.
📁 Structure du projet
text
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


Remarque : cette arborescence est indicative et doit être adaptée à la structure réelle du dépôt.

⚙️ Installation et lancement
1. Cloner le dépôt
bash
git clone https://github.com/VOTRE-USERNAME/AutoPark.git

2. Accéder au projet
bash
cd AutoPark

3. Lancer un serveur local

L'application utilise les modules JavaScript ES6. Il est donc nécessaire de passer par un serveur local plutôt que d'ouvrir directement les fichiers HTML.

Avec Visual Studio Code :

Installer l'extension Live Server.
Ouvrir le dossier du projet dans VS Code.
Faire un clic droit sur index.html.
Sélectionner Open with Live Server.

L'application sera accessible à une adresse locale similaire à :

text
http://127.0.0.1:5500/index.html


La page de gestion du parc sera accessible via :

text
http://127.0.0.1:5500/voitures.html

🚀 Utilisation
Ouvrir le dashboard pour consulter les statistiques du parc automobile.
Accéder à la page de gestion des véhicules.
Ajouter un véhicule à l'aide du formulaire.
Modifier ou supprimer un véhicule depuis le tableau.
Utiliser la barre de recherche pour retrouver rapidement une voiture.
Appliquer des filtres par catégorie et par statut.
Trier les véhicules selon leur prix journalier.
Actualiser la page pour vérifier la conservation des données.
🧠 Concepts JavaScript exploités

Le projet met en pratique plusieurs concepts fondamentaux de JavaScript moderne :

Fonctions fléchées (Arrow Functions).
Template literals.
Déstructuration (Destructuring).
Spread et Rest operators.
Manipulation du DOM.
Gestion des événements avec addEventListener().
Prévention du comportement par défaut avec preventDefault().
Méthodes de tableaux : map(), filter(), find(), some() et reduce().
Modules ES6 : import et export.
Stockage local : localStorage.
Conversion des données : JSON.stringify() et JSON.parse().
📱 Responsive Design

L'interface est conçue pour s'adapter aux différents formats d'écran :

Desktop : affichage complet des tableaux et des statistiques.
Tablette : adaptation des espaces et des composants.
Mobile : interface simplifiée et adaptée aux petits écrans.
🧪 Tests et vérifications

Les principaux scénarios à vérifier sont :

Ajouter un véhicule avec des données valides.
Refuser les champs obligatoires vides ou contenant uniquement des espaces.
Refuser un prix nul ou négatif.
Empêcher l'ajout d'une immatriculation en doublon.
Modifier un véhicule sans changer son identifiant.
Annuler une modification.
Supprimer un véhicule après confirmation.
Conserver un véhicule si la suppression est annulée.
Tester la recherche par marque, modèle et immatriculation.
Combiner recherche, filtres et tri.
Vérifier les messages lorsque le parc est vide ou qu'aucun résultat ne correspond.
Vérifier la persistance après actualisation.
Vérifier la cohérence des quatre indicateurs du dashboard.
Tester l'affichage sur mobile, tablette et desktop.
Vérifier l'absence d'erreurs dans la console du navigateur.
🌐 Liens du projet
GitHub : Lien vers le dépôt AutoPark
Application déployée : À compléter après déploiement.
Jira : À compléter avec le lien du tableau de suivi.
👨‍💻 Auteur

Ahmed Bentaj Hamyani

Projet réalisé individuellement dans le cadre de la formation :

Développeur Web et Web Mobile — 2026

Date de lancement : 26 octobre 2026
Date de livraison : 30 octobre 2026
📄 Licence

Ce projet est réalisé dans un cadre pédagogique. Il est destiné à l'apprentissage et à la mise en pratique des technologies du développement web front-end.

⭐ AutoPark — Simplifier la gestion du parc automobile avec JavaScript.