# Strudel Lab 1.2

Module micro learning statique pour apprendre Strudel par la pratique.

## Démarrage

Dézippez le dossier, puis ouvrez `index.html` dans un navigateur moderne.

Le module fonctionne localement pour la navigation, les consignes, les corrections, le glossaire, les badges et la progression. L'audio est exécuté dans le REPL Strudel, ouvert dans un iframe ou dans un nouvel onglet.

## Correction importante de la version 1.2

Tous les exercices qui utilisent des samples déclarent explicitement la banque Dirt-Samples avec :

```js
samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')
```

Cette ligne ne doit pas être supprimée dans les exercices rythmiques. Elle évite de dépendre du comportement implicite du REPL Strudel pour les samples par défaut.

Strudel charge ensuite les fichiers audio à la demande. Il peut donc rester un court silence au premier passage, le temps que le navigateur télécharge le sample. Relancez la lecture après quelques secondes si nécessaire.

## Tempo

Le module utilise la convention suivante : lorsqu'un cycle représente quatre temps, un tempo de 120 BPM s'écrit :

```js
setcpm(120/4)
```

Cela évite de confondre BPM perçu et cycles par minute.

## Fichiers

- `index.html` : structure de l'application.
- `style.css` : interface visuelle.
- `lessons.js` : contenus pédagogiques, exercices, corrections, projets et glossaire.
- `app.js` : navigation, progression, diagnostics et liens vers Strudel.

## Usage pédagogique

La progression part du tronc commun, puis ouvre vers composition générative, minimalisme, urban beat, ambient, techno, glitch, théorie et IDM.

Chaque leçon contient un objectif, une notion, une consigne, deux indices, une correction, un point d'écoute et une synthèse.
