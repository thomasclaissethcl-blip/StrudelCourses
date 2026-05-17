# Strudel Lab 1.1

Strudel Lab est un module micro learning statique pour apprendre Strudel par la pratique.

## Corrections de la version 1.1

Cette version corrige les deux principaux problèmes constatés dans la version 1.0.

D'abord, les exemples n'utilisent plus `.cpm(...)`. Les patterns utilisent désormais `setcpm(BPM/4)` quand le cycle est traité comme une mesure de quatre temps. Cette convention évite que les projets finaux soient joués quatre fois trop vite.

Ensuite, le module explique explicitement le comportement des samples. Les samples par défaut comme `bd`, `sd`, `hh` et `cp` sont disponibles dans Strudel, mais les fichiers audio sont chargés à la demande. Le premier passage peut donc être silencieux. Le module commence désormais par un test audio synthétique, qui ne dépend pas du chargement de samples.

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
- une aide audio et tempo,
- un atelier libre,
- une progression locale avec badges.

## Utilisation

Ouvrez `index.html` dans un navigateur moderne.

Le module fonctionne localement pour la navigation, les consignes, les corrections, les badges et la sauvegarde de progression. Pour écouter le code, utilisez les boutons `Charger dans Strudel` ou `Ouvrir dans un onglet`. Ces boutons chargent le REPL Strudel officiel à partir du code présent dans la zone de pratique.

Dans le REPL Strudel, il faut ensuite lancer la lecture avec le bouton Play. Si un sample ne sonne pas immédiatement, attendez quelques secondes puis relancez la lecture.

## Convention de tempo

Strudel raisonne en cycles par minute. Dans ce module, la plupart des exercices considèrent qu'un cycle correspond à quatre temps. La règle pratique est donc :

```js
setcpm(BPM / 4)
```

Exemple pour un ressenti à 120 BPM :

```js
setcpm(120/4)

s("bd ~ sd ~").bank("RolandTR808")
```

## Samples

Les samples de base sont disponibles par défaut dans Strudel. Les banques explicites comme `RolandTR808` ou `RolandTR909` sont utilisées dans plusieurs exercices pour stabiliser l'écoute.

Les breaks issus de Dirt nécessitent cette déclaration :

```js
samples('github:tidalcycles/dirt-samples')
```

## Fichiers

- `index.html` contient la structure de l'application.
- `style.css` contient l'interface responsive.
- `app.js` gère la navigation, la progression, les badges, le glossaire, l'atelier, l'aide et l'intégration Strudel par URL.
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

Version 1.1, révision technique et pédagogique de la première version complète.
