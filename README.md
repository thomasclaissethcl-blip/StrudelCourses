# Strudel Lab 1.4

Module micro learning statique pour apprendre Strudel par la pratique.

## Démarrage

Dézippez le dossier, puis ouvrez `index.html` dans un navigateur moderne.

Le module fonctionne localement pour la navigation, les consignes, les corrections, le glossaire, les badges et la progression. L'audio est exécuté dans le REPL Strudel, ouvert dans un iframe ou dans un nouvel onglet.

## Évolution pédagogique de la version 1.4

Cette version enrichit fortement les leçons. Chaque écran contient désormais :

- un objectif ;
- une explication développée ;
- un repère syntaxique ;
- une méthode de pratique ;
- une consigne ;
- un point d'écoute ;
- une question d'écoute ;
- un rappel technique ;
- deux indices contextualisés ;
- une correction ;
- un défi optionnel ;
- une erreur fréquente ;
- une auto-vérification ;
- une synthèse.

Les indices ne sont plus les deux mêmes messages génériques. Ils sont liés aux notions travaillées, par exemple sample, cycle, silence, stack, filtre, polyrythmie, glitch, slice, théorie, forme, etc.

## Samples

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
- `TEST_REPORT.md` : rapport de vérification de la version.

## Usage pédagogique

La progression part du tronc commun, puis ouvre vers composition générative, minimalisme, urban beat, ambient, techno, glitch, théorie et IDM.

Le module est conçu comme un support de pratique. Il ne valide pas automatiquement le son produit. L'apprenant compare son code avec la correction, écoute le résultat dans Strudel, puis valide la leçon manuellement.
