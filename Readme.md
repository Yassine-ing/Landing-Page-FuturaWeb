# Projet Landing Page - FuturaWeb

Ce projet a été réalisé dans le cadre du module de développement web. Il s'agit d'une landing page complète et responsive pour une startup fictive nommée "FuturaWeb".


## 🛠️ Technologies et Architecture
- **HTML5** sémantique
- **CSS3** (Flexbox, Media Queries, Animations, `prefers-reduced-motion`)
- **JavaScript (ES6 Modules)** : L'architecture a été pensée de manière modulaire pour séparer les responsabilités (navigation, modal, carrousel, formulaire, animations).
- **Données** : Utilisation de `setInterval` pour le carrousel et de données fictives.
- **Persistance** : Utilisation de `localStorage` pour mémoriser la fermeture de la modale.
- **Accessibilité** : Attributs `aria-label`, `aria-expanded`, gestion du focus.

## ✨ Fonctionnalités 
- **Menu dynamique** : Apparition/disparition au défilement (scroll) et menu burger sur mobile.
- **Carrousel de témoignages** : Défilement automatique (toutes les 5s) et manuel avec transitions fluides.
- **Validation avancée du formulaire** : Vérification en temps réel des champs (nom, email, message) avec messages d'erreur visuels.
- **Modal Call-to-Action** : Pop-up qui s'ouvre après 3 secondes. Sa fermeture est mémorisée avec `localStorage`.
- **Animations au scroll (Bonus)** : Effet de "reveal" sur les cartes Services et Équipe.

## Comment lancer le projet
Pour des raisons de sécurité liées aux modules JavaScript (`import`/`export`), le projet doit être lancé via un serveur local.
1. Ouvrir le dossier du projet dans **Visual Studio Code**.
2. Installer l'extension **Live Server**.
3. Faire un clic droit sur `index.html` et cliquer sur **"Open with Live Server"**.