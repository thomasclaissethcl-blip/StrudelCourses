# Strudel Lab 1.0

Strudel Lab est un module micro learning statique pour apprendre Strudel par la pratique.

## Contenu

Le module contient :

- un tronc commun pour les bases de Strudel,
- un parcours composition générative,
- un parcours minimaliste,
- un parcours urban beat,
- un parcours ambient,
- un parcours techno, house et trance,
- un parcours glitch et broken beats,
- un parcours théorie musicale appliquée,
- un parcours IDM,
- des projets finaux,
- un glossaire,
- un atelier libre,
- une progression locale avec badges.

## Utilisation

Ouvrez `index.html` dans un navigateur moderne.

Le module fonctionne localement pour la navigation, les consignes, les corrections, les badges et la sauvegarde de progression. Pour écouter le code, utilisez les boutons `Charger dans Strudel` ou `Ouvrir dans un onglet`. Ces boutons chargent le REPL Strudel officiel à partir du code présent dans la zone de pratique.

## Fichiers

- `index.html` contient la structure de l'application.
- `style.css` contient l'interface responsive.
- `app.js` gère la navigation, la progression, les badges, le glossaire, l'atelier et l'intégration Strudel par URL.
- `lessons.js` contient les branches, les leçons, les corrections, les projets et le glossaire.
- `README.md` décrit le module.

## Sauvegarde

La progression est sauvegardée dans `localStorage`. Elle reste liée au navigateur utilisé. Le bouton `Réinitialiser` efface cette progression locale.

## Intégration Strudel

Cette version utilise des liens longs vers le REPL Strudel. Le code est encodé dans l'URL et chargé dans le REPL externe. Cette approche évite d'imposer un serveur ou un bundler.

## Licence et vigilance

Strudel est un logiciel libre sous licence AGPL-3.0. Si vous publiez ce module avec une intégration Strudel, vérifiez les obligations applicables à votre mode de diffusion. Cette version ne modifie pas Strudel. Elle charge le REPL externe et fournit des contenus pédagogiques autour de Strudel.

## Limites connues

L'audio dépend du navigateur et du REPL Strudel externe. Certains navigateurs bloquent l'audio tant que l'utilisateur n'a pas interagi avec la page. Les exercices qui chargent des samples distants nécessitent une connexion internet.

## Version

Version 1.0, générée comme première version complète exploitable.
