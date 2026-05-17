window.COURSE = {
  "meta": {
    "id": "strudel-lab",
    "title": "Strudel Lab",
    "version": "1.4",
    "language": "fr",
    "description": "Module micro learning pour apprendre Strudel par la pratique. Cette version enrichit les explications, contextualise les indices et ajoute des repères syntaxiques, des étapes de manipulation et des questions d’écoute.",
    "strudelIntegration": "Le module ouvre les patterns dans le REPL Strudel via une URL longue. Les exemples à samples déclarent explicitement la banque Dirt-Samples avec une URL raw GitHub stable. Les exemples utilisent setcpm(bpm/4) quand un cycle représente quatre temps.",
    "technicalWarnings": [
      "Les exemples qui utilisent bd, sd, hh, cp ou des breaks commencent par samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json'). Ne supprimez pas cette ligne.",
      "Strudel charge ensuite les fichiers audio à la demande. Le premier passage peut encore être silencieux quelques instants pendant le téléchargement du sample.",
      "Strudel raisonne en cycles. Pour obtenir un ressenti BPM sur un cycle de quatre temps, utiliser setcpm(BPM/4).",
      "Le bouton Charger dans Strudel ouvre le REPL intégré. Il faut ensuite lancer la lecture dans Strudel, ou ouvrir le code dans un onglet complet."
    ],
    "pedagogicalChanges": [
      "Indices contextualisés par leçon, au lieu de messages génériques.",
      "Ajout d’une explication développée pour relier syntaxe, geste musical et résultat sonore.",
      "Ajout d’un repère syntaxique court pour identifier la partie du code à manipuler.",
      "Ajout d’une méthode de pratique en trois temps pour chaque exercice.",
      "Ajout d’une question d’écoute et d’un défi optionnel pour renforcer la pratique."
    ]
  },
  "branches": [
    {
      "id": "tronc_commun",
      "title": "Tronc commun",
      "role": "Acquérir les bases communes à tous les styles.",
      "unlockCondition": "Accessible dès le départ",
      "finalProject": "Créer un premier live set simple avec rythme, nappe et variation.",
      "chapters": [
        {
          "id": "tc_00",
          "title": "Démarrage audio et tempo",
          "learningGoal": "Vérifier que le son fonctionne et comprendre la convention BPM utilisée dans le module.",
          "lessons": [
            {
              "id": "tc_00_01",
              "title": "Tester le moteur audio sans sample",
              "concepts": [
                "synthèse",
                "audio",
                "lecture"
              ],
              "exerciseType": "modifier_code",
              "estimatedDuration": "3 à 5 min",
              "learningGoal": "Vérifier que le REPL Strudel produit bien du son avec un synthé, sans dépendre du chargement de samples.",
              "concept": "Cette première leçon sert uniquement à vérifier la chaîne audio. On utilise un synthé sine, car il ne dépend d’aucun fichier externe. Si ce code ne produit aucun son dans l’onglet Strudel complet, le problème vient probablement du navigateur, de l’autorisation audio ou du bouton Play, pas des samples.",
              "starterCode": "setcpm(60/4)\n// 60 BPM perçu, 4 temps par cycle\n\nnote(\"c3 e3 g3 c4\").s(\"sine\").attack(.01).release(.7).gain(.5)",
              "task": "Lancez le code dans Strudel. Remplacez sine par triangle, puis écoutez la différence.",
              "hintLevel1": "Ouvrez le code dans un onglet Strudel complet, puis cliquez sur Play dans Strudel. Ne testez pas d’abord dans l’iframe.",
              "hintLevel2": "Remplacez uniquement sine par triangle. Si vous changez aussi le tempo ou les notes, vous ne saurez plus ce qui produit la différence.",
              "solution": "setcpm(60/4)\n// 60 BPM perçu, 4 temps par cycle\n\nnote(\"c3 e3 g3 c4\").s(\"triangle\").attack(.01).release(.7).gain(.5)",
              "whatToListenFor": "Vous devez entendre quatre notes régulières, assez douces, avec une attaque nette. La version triangle doit sembler légèrement plus riche que la version sine.",
              "commonMistake": "Croire que le bouton du module lance le son. Il ouvre ou charge le code. La lecture audio se lance ensuite dans Strudel.",
              "summary": "À ce stade, vous devez savoir utiliser synthèse, audio dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le module utilise setcpm(BPM/4) quand un cycle représente quatre temps.",
              "sourceRefs": [
                "docs_synths",
                "docs_cycles"
              ],
              "syntaxFocus": "setcpm(60/4) fixe une pulsation lente. note(\"c3 e3 g3 c4\") joue quatre hauteurs successives. .s(\"sine\") choisit un son très simple. .attack(.01) rend l’entrée immédiate pour que le test soit audible rapidement.",
              "whyItMatters": "Cette compétence reviendra dans tous les parcours : beats, ambient, glitch, techno, minimalisme et IDM.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Essayez square après triangle, puis revenez à sine. Classez les trois timbres du plus doux au plus anguleux.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise principalement le synthé interne de Strudel. Il permet de tester l’audio sans dépendre d’une banque de samples."
            },
            {
              "id": "tc_00_02",
              "title": "Comprendre BPM et cycles",
              "concepts": [
                "setcpm",
                "cycle",
                "bpm"
              ],
              "exerciseType": "comparer_patterns",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Comprendre pourquoi un code à 120 BPM s’écrit souvent setcpm(120/4) dans ce module.",
              "concept": "Cette leçon clarifie la différence entre BPM perçu et cycles par minute. Dans Strudel, le cycle est l’unité de base. Si vous décidez qu’un cycle correspond à une mesure de quatre temps, vous devez diviser le BPM par quatre dans setcpm. C’est pour cette raison que 120 BPM s’écrit ici setcpm(120/4).",
              "starterCode": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(120/4)\n// 120 BPM perçu, 4 temps par cycle\n\ns(\"bd bd bd bd\")",
              "task": "Remplacez bd bd bd bd par bd ~ sd ~, puis écoutez le changement de sensation sans changer setcpm.",
              "hintLevel1": "Ne remplacez pas setcpm(120/4) par setcpm(120). Ce serait beaucoup trop rapide pour la convention du module.",
              "hintLevel2": "Gardez le tempo et remplacez seulement le contenu de s(\"...\") par bd ~ sd ~.",
              "solution": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(120/4)\n// 120 BPM perçu, 4 temps par cycle\n\ns(\"bd ~ sd ~\")",
              "whatToListenFor": "Écoutez le retour du motif au début du cycle. L’enjeu est de sentir quand la boucle recommence.",
              "commonMistake": "Confondre le nombre d’événements avec la durée totale conduit à des tempos perçus incohérents.",
              "summary": "À ce stade, vous devez savoir utiliser setcpm, cycle dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Formule utilisée ici : setcpm(bpm / 4).",
              "sourceRefs": [
                "docs_cycles"
              ],
              "syntaxFocus": "setcpm(120/4) signifie : 120 battements perçus par minute, avec quatre temps dans un cycle. Le motif s(\"bd bd bd bd\") place ensuite quatre événements dans ce cycle.",
              "whyItMatters": "Cette compétence reviendra dans tous les parcours : beats, ambient, glitch, techno, minimalisme et IDM.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Testez setcpm(120/2) puis setcpm(120/4) avec le même motif et décrivez ce qui change dans votre perception du tempo.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise des samples. Conservez la ligne samples(...) au début du code, puis lancez la lecture dans Strudel. Le premier chargement peut demander quelques secondes."
            }
          ]
        },
        {
          "id": "tc_01",
          "title": "Premiers sons",
          "learningGoal": "Produire et modifier ses premiers samples.",
          "lessons": [
            {
              "id": "tc_01_01",
              "title": "Charger les samples et remplacer un son",
              "concepts": [
                "sample",
                "fonction s",
                "événement"
              ],
              "exerciseType": "modifier_code",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Charger explicitement la banque Dirt-Samples, déclencher une grosse caisse, puis la remplacer par une caisse claire.",
              "concept": "Cette leçon distingue deux lignes qui jouent des rôles différents. samples(...) prépare la bibliothèque audio. s(\"bd*4\") décrit ensuite le motif musical. Quand vous remplacez bd par sd, vous changez le son joué sans changer la structure rythmique.",
              "starterCode": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(100/4)\n// 100 BPM perçu, 4 temps par cycle\n\ns(\"bd*4\")",
              "task": "Remplacez la grosse caisse par une caisse claire. Gardez la ligne samples(...) et le tempo inchangés.",
              "hintLevel1": "La ligne à modifier est la dernière. La ligne samples(...) doit rester exactement en place.",
              "hintLevel2": "Dans s(\"bd*4\"), remplacez bd par sd. Ne touchez pas à *4.",
              "solution": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(100/4)\n// 100 BPM perçu, 4 temps par cycle\n\ns(\"sd*4\")",
              "whatToListenFor": "Écoutez d’abord si le son se déclenche, puis concentrez-vous sur la couleur du sample et sur la régularité des attaques.",
              "commonMistake": "Supprimer la ligne samples(...) ou modifier le tempo en même temps que le sample rend le diagnostic plus difficile.",
              "summary": "À ce stade, vous devez savoir utiliser sample, fonction s dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": "bd*4 signifie que le sample bd est répété quatre fois dans le cycle. Pour remplacer le sample, changez le nom bd, mais gardez *4.",
              "whyItMatters": "Cette compétence reviendra dans tous les parcours : beats, ambient, glitch, techno, minimalisme et IDM.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Après sd, essayez hh*4 puis cp*4. Vous devez entendre que le rythme reste identique, mais que la couleur change.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise des samples. Conservez la ligne samples(...) au début du code, puis lancez la lecture dans Strudel. Le premier chargement peut demander quelques secondes."
            },
            {
              "id": "tc_01_02",
              "title": "Enchaîner deux sons",
              "concepts": [
                "séquence",
                "cycle"
              ],
              "exerciseType": "modifier_code",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Transformez le motif pour jouer une grosse caisse puis une caisse claire.",
              "concept": "Cette leçon fait partie du socle. Le but n’est pas encore de composer librement, mais de relier un signe de syntaxe à un résultat audible. Un cycle est l’unité de temps centrale de Strudel. Les événements placés entre guillemets se répartissent dans ce cycle. Ajouter des événements ne rallonge pas automatiquement la boucle. Cela densifie ce qui se passe dans le même cadre temporel.",
              "starterCode": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(90/4)\n// 90 BPM perçu, 4 temps par cycle\n\ns(\"bd bd bd bd\")",
              "task": "Transformez le motif pour jouer une grosse caisse puis une caisse claire.",
              "hintLevel1": "Gardez setcpm inchangé et modifiez uniquement le nombre ou l’ordre des événements dans les guillemets.",
              "hintLevel2": "Comparez une version à deux événements et une version à quatre événements. Le cadre temporel reste le même, mais les attaques changent de place.",
              "solution": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(90/4)\n// 90 BPM perçu, 4 temps par cycle\n\ns(\"bd sd bd sd\")",
              "whatToListenFor": "Écoutez le retour du motif au début du cycle. L’enjeu est de sentir quand la boucle recommence.",
              "commonMistake": "Confondre le nombre d’événements avec la durée totale conduit à des tempos perçus incohérents.",
              "summary": "À ce stade, vous devez savoir utiliser séquence, cycle dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": "Les espaces séparent les événements. Dans s(\"bd sd bd sd\"), quatre événements se partagent le cycle. setcpm(BPM/4) fixe ici la vitesse perçue quand le cycle représente quatre temps.",
              "whyItMatters": "Cette compétence reviendra dans tous les parcours : beats, ambient, glitch, techno, minimalisme et IDM.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Écrivez une version avec deux événements, puis une autre avec huit événements, sans toucher à setcpm.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise des samples. Conservez la ligne samples(...) au début du code, puis lancez la lecture dans Strudel. Le premier chargement peut demander quelques secondes."
            },
            {
              "id": "tc_01_03",
              "title": "Ajouter des silences",
              "concepts": [
                "silence",
                "tilde",
                "rythme"
              ],
              "exerciseType": "completer_code",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Ajoutez un silence entre les sons pour faire respirer le motif.",
              "concept": "Cette leçon fait partie du socle. Le but n’est pas encore de composer librement, mais de relier un signe de syntaxe à un résultat audible. Le symbole ~ représente un silence. Il prend une place dans le cycle, comme un son, mais ne déclenche rien. En pratique, le silence sert à créer de l’air, à rendre un beat lisible et à éviter que chaque position du cycle soit remplie.",
              "starterCode": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(90/4)\n// 90 BPM perçu, 4 temps par cycle\n\ns(\"bd sd bd sd\")",
              "task": "Ajoutez un silence entre les sons pour faire respirer le motif.",
              "hintLevel1": "Insérez ~ à l’endroit où vous voulez laisser une position vide.",
              "hintLevel2": "Ne supprimez pas les espaces. Ils aident à voir les positions du cycle.",
              "solution": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(90/4)\n// 90 BPM perçu, 4 temps par cycle\n\ns(\"bd ~ sd ~\")",
              "whatToListenFor": "Écoutez la respiration du motif. Le silence doit rendre la séquence plus claire, pas seulement plus pauvre.",
              "commonMistake": "Enlever un son sans le remplacer par ~ modifie la répartition temporelle des événements restants.",
              "summary": "À ce stade, vous devez savoir utiliser silence, tilde dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": "Dans s(\"bd ~ sd ~\"), les positions 2 et 4 sont occupées par des silences. Le caractère ~ doit rester à l’intérieur des guillemets.",
              "whyItMatters": "Cette compétence reviendra dans tous les parcours : beats, ambient, glitch, techno, minimalisme et IDM.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Créez une version très espacée, puis une version dense, en gardant le même nombre de positions visibles.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise des samples. Conservez la ligne samples(...) au début du code, puis lancez la lecture dans Strudel. Le premier chargement peut demander quelques secondes."
            }
          ]
        },
        {
          "id": "tc_02",
          "title": "Cycles et mini-notation",
          "learningGoal": "Comprendre la logique de cycle et l'écriture compacte.",
          "lessons": [
            {
              "id": "tc_02_01",
              "title": "Comprendre le cycle",
              "concepts": [
                "cycle",
                "répartition"
              ],
              "exerciseType": "comparer_patterns",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Ajoutez deux sons et observez si la boucle devient plus longue ou plus dense.",
              "concept": "Cette leçon fait partie du socle. Le but n’est pas encore de composer librement, mais de relier un signe de syntaxe à un résultat audible. Un cycle est l’unité de temps centrale de Strudel. Les événements placés entre guillemets se répartissent dans ce cycle. Ajouter des événements ne rallonge pas automatiquement la boucle. Cela densifie ce qui se passe dans le même cadre temporel.",
              "starterCode": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(100/4)\n// 100 BPM perçu, 4 temps par cycle\n\ns(\"bd sd\")",
              "task": "Ajoutez deux sons et observez si la boucle devient plus longue ou plus dense.",
              "hintLevel1": "Gardez setcpm inchangé et modifiez uniquement le nombre ou l’ordre des événements dans les guillemets.",
              "hintLevel2": "Comparez une version à deux événements et une version à quatre événements. Le cadre temporel reste le même, mais les attaques changent de place.",
              "solution": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(100/4)\n// 100 BPM perçu, 4 temps par cycle\n\ns(\"bd sd cp hh\")",
              "whatToListenFor": "Écoutez le retour du motif au début du cycle. L’enjeu est de sentir quand la boucle recommence.",
              "commonMistake": "Confondre le nombre d’événements avec la durée totale conduit à des tempos perçus incohérents.",
              "summary": "À ce stade, vous devez savoir utiliser cycle, répartition dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": "Les espaces séparent les événements. Dans s(\"bd sd bd sd\"), quatre événements se partagent le cycle. setcpm(BPM/4) fixe ici la vitesse perçue quand le cycle représente quatre temps.",
              "whyItMatters": "Cette compétence reviendra dans tous les parcours : beats, ambient, glitch, techno, minimalisme et IDM.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Écrivez une version avec deux événements, puis une autre avec huit événements, sans toucher à setcpm.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise des samples. Conservez la ligne samples(...) au début du code, puis lancez la lecture dans Strudel. Le premier chargement peut demander quelques secondes."
            },
            {
              "id": "tc_02_02",
              "title": "Ralentir",
              "concepts": [
                "slow",
                "temps"
              ],
              "exerciseType": "modifier_code",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Ralentissez le motif pour qu'il s'étale sur deux cycles.",
              "concept": "Cette leçon fait partie du socle. Le but n’est pas encore de composer librement, mais de relier un signe de syntaxe à un résultat audible. .slow(n) étire un pattern sur plusieurs cycles. Le tempo global ne change pas. C’est seulement cette couche qui prend plus de temps pour accomplir son motif complet. Ce principe est très utile pour les nappes, les progressions lentes et les boucles polymétriques.",
              "starterCode": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(100/4)\n// 100 BPM perçu, 4 temps par cycle\n\ns(\"bd sd cp hh\")",
              "task": "Ralentissez le motif pour qu'il s'étale sur deux cycles.",
              "hintLevel1": "Ajoutez .slow(2) après le pattern, sans changer le contenu entre guillemets.",
              "hintLevel2": "Si le motif disparaît trop longtemps, réduisez la valeur. Si la variation reste trop rapide, augmentez-la.",
              "solution": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(100/4)\n// 100 BPM perçu, 4 temps par cycle\n\ns(\"bd sd cp hh\").slow(2)",
              "whatToListenFor": "Écoutez combien de cycles sont nécessaires pour entendre le motif complet revenir à son début.",
              "commonMistake": "Changer setcpm pour ralentir une seule couche ralentit tout le morceau. Utilisez .slow() quand vous voulez cibler un pattern précis.",
              "summary": "À ce stade, vous devez savoir utiliser slow, temps dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": "Ajoutez .slow(2), .slow(4) ou .slow(8) à la fin du pattern que vous voulez étirer. La transformation s’applique à ce qui se trouve juste avant elle.",
              "whyItMatters": "Cette compétence reviendra dans tous les parcours : beats, ambient, glitch, techno, minimalisme et IDM.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Essayez .slow(2), puis .slow(4). Notez à partir de quelle valeur le motif commence à devenir une texture.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise des samples. Conservez la ligne samples(...) au début du code, puis lancez la lecture dans Strudel. Le premier chargement peut demander quelques secondes."
            },
            {
              "id": "tc_02_03",
              "title": "Accélérer",
              "concepts": [
                "fast",
                "densité"
              ],
              "exerciseType": "modifier_code",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Faites jouer le charley quatre fois plus vite.",
              "concept": "Cette leçon fait partie du socle. Le but n’est pas encore de composer librement, mais de relier un signe de syntaxe à un résultat audible. .fast(n) et l’opérateur * augmentent la densité d’un motif dans le cycle. Le résultat n’est pas seulement plus rapide. Il occupe davantage de positions et peut devenir une pulsation, un tremblement ou une micro-texture.",
              "starterCode": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(100/4)\n// 100 BPM perçu, 4 temps par cycle\n\ns(\"hh\")",
              "task": "Faites jouer le charley quatre fois plus vite.",
              "hintLevel1": "Augmentez la valeur après l’étoile pour créer plus d’attaques dans le même cycle.",
              "hintLevel2": "Pour un charley régulier, commencez par hh*8, puis comparez avec hh*16.",
              "solution": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(100/4)\n// 100 BPM perçu, 4 temps par cycle\n\ns(\"hh*8\").gain(.25)",
              "whatToListenFor": "Écoutez la densité, pas seulement la vitesse. Le motif doit servir le groove plutôt que saturer l’espace.",
              "commonMistake": "Multiplier tous les éléments rend vite le beat confus. Densifiez d’abord les hats, pas le kick et la snare.",
              "summary": "À ce stade, vous devez savoir utiliser fast, densité dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": "s(\"hh*8\") signifie que le sample hh est répété huit fois dans le cycle. On peut aussi écrire .fast(2) après un pattern existant.",
              "whyItMatters": "Cette compétence reviendra dans tous les parcours : beats, ambient, glitch, techno, minimalisme et IDM.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Créez trois versions du même motif avec *4, *8 et *16, puis gardez celle qui laisse le plus de place au reste.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise des samples. Conservez la ligne samples(...) au début du code, puis lancez la lecture dans Strudel. Le premier chargement peut demander quelques secondes."
            },
            {
              "id": "tc_02_04",
              "title": "Répéter avec étoile",
              "concepts": [
                "répétition",
                "multiplication"
              ],
              "exerciseType": "completer_code",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Réécrivez le motif pour jouer huit hats par cycle.",
              "concept": "Cette leçon fait partie du socle. Le but n’est pas encore de composer librement, mais de relier un signe de syntaxe à un résultat audible. .fast(n) et l’opérateur * augmentent la densité d’un motif dans le cycle. Le résultat n’est pas seulement plus rapide. Il occupe davantage de positions et peut devenir une pulsation, un tremblement ou une micro-texture.",
              "starterCode": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(96/4)\n// 96 BPM perçu, 4 temps par cycle\n\ns(\"hh\")",
              "task": "Réécrivez le motif pour jouer huit hats par cycle.",
              "hintLevel1": "Augmentez la valeur après l’étoile pour créer plus d’attaques dans le même cycle.",
              "hintLevel2": "Pour un charley régulier, commencez par hh*8, puis comparez avec hh*16.",
              "solution": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(96/4)\n// 96 BPM perçu, 4 temps par cycle\n\ns(\"hh*8\")",
              "whatToListenFor": "Écoutez la densité, pas seulement la vitesse. Le motif doit servir le groove plutôt que saturer l’espace.",
              "commonMistake": "Multiplier tous les éléments rend vite le beat confus. Densifiez d’abord les hats, pas le kick et la snare.",
              "summary": "À ce stade, vous devez savoir utiliser répétition, multiplication dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": "s(\"hh*8\") signifie que le sample hh est répété huit fois dans le cycle. On peut aussi écrire .fast(2) après un pattern existant.",
              "whyItMatters": "Cette compétence reviendra dans tous les parcours : beats, ambient, glitch, techno, minimalisme et IDM.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Créez trois versions du même motif avec *4, *8 et *16, puis gardez celle qui laisse le plus de place au reste.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise des samples. Conservez la ligne samples(...) au début du code, puis lancez la lecture dans Strudel. Le premier chargement peut demander quelques secondes."
            }
          ]
        },
        {
          "id": "tc_03",
          "title": "Couches et organisation",
          "learningGoal": "Construire un pattern lisible en plusieurs couches.",
          "lessons": [
            {
              "id": "tc_03_01",
              "title": "Superposer avec la virgule",
              "concepts": [
                "superposition",
                "couches"
              ],
              "exerciseType": "lire_code",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Écoutez le pattern et repérez les deux couches simultanées.",
              "concept": "Cette leçon fait partie du socle. Le but n’est pas encore de composer librement, mais de relier un signe de syntaxe à un résultat audible. stack() sert à organiser plusieurs patterns en couches. Chaque ligne peut avoir son propre rôle musical : ancrage, pulsation, texture, mélodie ou accident. Cette organisation rend le code plus lisible et prépare le travail de live coding.",
              "starterCode": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(96/4)\n// 96 BPM perçu, 4 temps par cycle\n\ns(\"bd ~ sd ~, hh*8\")",
              "task": "Écoutez le pattern et repérez les deux couches simultanées.",
              "hintLevel1": "Placez chaque couche sur sa propre ligne dans stack(...).",
              "hintLevel2": "Gardez une couche pour le kick et la snare, une autre pour les hats, puis ajoutez la texture seulement après.",
              "solution": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(96/4)\n// 96 BPM perçu, 4 temps par cycle\n\ns(\"bd ~ sd ~, hh*8\")",
              "whatToListenFor": "Écoutez séparément le rôle de chaque couche. Si vous ne pouvez pas nommer ce qu’elle apporte, elle est peut-être inutile.",
              "commonMistake": "Empiler trop de couches trop tôt masque les problèmes. Commencez avec deux couches bien équilibrées.",
              "summary": "À ce stade, vous devez savoir utiliser superposition, couches dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": "Dans stack(a, b, c), chaque élément séparé par une virgule est joué en même temps. Les parenthèses délimitent l’ensemble de la superposition.",
              "whyItMatters": "Cette compétence reviendra dans tous les parcours : beats, ambient, glitch, techno, minimalisme et IDM.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Coupez mentalement une couche à la fois et vérifiez que le morceau reste compréhensible.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise des samples. Conservez la ligne samples(...) au début du code, puis lancez la lecture dans Strudel. Le premier chargement peut demander quelques secondes."
            },
            {
              "id": "tc_03_02",
              "title": "Superposer avec stack",
              "concepts": [
                "stack",
                "arrangement"
              ],
              "exerciseType": "completer_code",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Ajoutez une couche de clap discrète.",
              "concept": "Cette leçon fait partie du socle. Le but n’est pas encore de composer librement, mais de relier un signe de syntaxe à un résultat audible. stack() sert à organiser plusieurs patterns en couches. Chaque ligne peut avoir son propre rôle musical : ancrage, pulsation, texture, mélodie ou accident. Cette organisation rend le code plus lisible et prépare le travail de live coding.",
              "starterCode": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(96/4)\n// 96 BPM perçu, 4 temps par cycle\n\nstack(\n  s(\"bd ~ sd ~\"),\n  s(\"hh*8\").gain(.25)\n)",
              "task": "Ajoutez une couche de clap discrète.",
              "hintLevel1": "Placez chaque couche sur sa propre ligne dans stack(...).",
              "hintLevel2": "Gardez une couche pour le kick et la snare, une autre pour les hats, puis ajoutez la texture seulement après.",
              "solution": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(96/4)\n// 96 BPM perçu, 4 temps par cycle\n\nstack(\n  s(\"bd ~ sd ~\").gain(.75),\n  s(\"hh*8\").gain(.25)\n)",
              "whatToListenFor": "Écoutez séparément le rôle de chaque couche. Si vous ne pouvez pas nommer ce qu’elle apporte, elle est peut-être inutile.",
              "commonMistake": "Empiler trop de couches trop tôt masque les problèmes. Commencez avec deux couches bien équilibrées.",
              "summary": "À ce stade, vous devez savoir utiliser stack, arrangement dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": "Dans stack(a, b, c), chaque élément séparé par une virgule est joué en même temps. Les parenthèses délimitent l’ensemble de la superposition.",
              "whyItMatters": "Cette compétence reviendra dans tous les parcours : beats, ambient, glitch, techno, minimalisme et IDM.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Coupez mentalement une couche à la fois et vérifiez que le morceau reste compréhensible.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise des samples. Conservez la ligne samples(...) au début du code, puis lancez la lecture dans Strudel. Le premier chargement peut demander quelques secondes."
            },
            {
              "id": "tc_03_03",
              "title": "Équilibrer les volumes",
              "concepts": [
                "gain",
                "mixage"
              ],
              "exerciseType": "modifier_code",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Baissez les hats pour qu'ils soutiennent le beat.",
              "concept": "Cette leçon fait partie du socle. Le but n’est pas encore de composer librement, mais de relier un signe de syntaxe à un résultat audible. .gain() règle le niveau sonore d’un pattern. Dans Strudel, le mixage commence très tôt, car une couche trop forte peut masquer les autres et donner l’impression que le code ne fonctionne pas correctement.",
              "starterCode": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(96/4)\n// 96 BPM perçu, 4 temps par cycle\n\nstack(\n  s(\"bd ~ sd ~\").gain(.7),\n  s(\"hh*8\").gain(.8)\n)",
              "task": "Baissez les hats pour qu'ils soutiennent le beat.",
              "hintLevel1": "Réduisez d’abord les hats et les textures. Gardez le kick ou la basse comme point de repère.",
              "hintLevel2": "Essayez .gain(.15), .gain(.3) et .gain(.6) sur la même couche pour entendre l’écart.",
              "solution": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(96/4)\n// 96 BPM perçu, 4 temps par cycle\n\nstack(\n  s(\"bd ~ sd ~\").gain(.7),\n  s(\"hh*8\").gain(.25)\n)",
              "whatToListenFor": "Écoutez si une couche domine trop. Un bon équilibre permet d’identifier chaque rôle sans effort.",
              "commonMistake": "Augmenter tous les gains peut provoquer un résultat agressif ou brouillon. Baissez les couches secondaires avant de monter le volume général.",
              "summary": "À ce stade, vous devez savoir utiliser gain, mixage dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": "Une valeur comme .gain(.25) baisse fortement le volume. Une valeur proche de .7 rend la couche plus présente. Appliquez gain à chaque couche plutôt qu’à tout le stack si vous voulez équilibrer finement.",
              "whyItMatters": "Cette compétence reviendra dans tous les parcours : beats, ambient, glitch, techno, minimalisme et IDM.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Faites une version où les hats sont trop forts, puis corrigez-la pour comprendre le seuil acceptable.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise des samples. Conservez la ligne samples(...) au début du code, puis lancez la lecture dans Strudel. Le premier chargement peut demander quelques secondes."
            }
          ]
        },
        {
          "id": "tc_04",
          "title": "Notes et synthèse",
          "learningGoal": "Jouer des notes et choisir un timbre.",
          "lessons": [
            {
              "id": "tc_04_01",
              "title": "Jouer des notes",
              "concepts": [
                "note",
                "hauteur",
                "octave"
              ],
              "exerciseType": "modifier_code",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Ajoutez une quatrième note pour créer une couleur plus ouverte.",
              "concept": "Cette leçon fait partie du socle. Le but n’est pas encore de composer librement, mais de relier un signe de syntaxe à un résultat audible. note(\"...\") joue des hauteurs musicales. Une note comme c3 indique un nom de note et un registre. Plus le nombre d’octave est élevé, plus le son est aigu. Les notes peuvent former une mélodie si elles sont successives, ou un accord si elles sont regroupées entre crochets avec des virgules.",
              "starterCode": "setcpm(76/4)\n// 76 BPM perçu, 4 temps par cycle\n\nnote(\"c3 e3 g3 c4\").s(\"triangle\")",
              "task": "Ajoutez une quatrième note pour créer une couleur plus ouverte.",
              "hintLevel1": "Modifiez le nom ou l’octave d’une seule note pour entendre précisément son effet.",
              "hintLevel2": "Pour un accord, vérifiez la présence des crochets et des virgules : [c3,e3,g3].",
              "solution": "setcpm(76/4)\n// 76 BPM perçu, 4 temps par cycle\n\nnote(\"c3 eb3 g3 c4\").s(\"triangle\")",
              "whatToListenFor": "Distinguez une succession de notes d’un accord simultané. Ce sont deux gestes de composition différents.",
              "commonMistake": "Oublier les virgules dans un accord transforme souvent l’écriture en séquence, ce qui change totalement le résultat musical.",
              "summary": "À ce stade, vous devez savoir utiliser note, hauteur dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": "note(\"c3 e3 g3\") joue une séquence. note(\"[c3,e3,g3]\") joue les trois notes ensemble. La fonction .s(\"sine\") choisit ensuite le timbre.",
              "whyItMatters": "Cette compétence reviendra dans tous les parcours : beats, ambient, glitch, techno, minimalisme et IDM.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Écrivez la même matière en version mélodie, puis en version accord, et comparez la sensation d’espace.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise principalement le synthé interne de Strudel. Il permet de tester l’audio sans dépendre d’une banque de samples."
            },
            {
              "id": "tc_04_02",
              "title": "Choisir un timbre",
              "concepts": [
                "sine",
                "triangle",
                "sawtooth"
              ],
              "exerciseType": "comparer_patterns",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Remplacez sine par sawtooth et comparez le timbre.",
              "concept": "Cette leçon fait partie du socle. Le but n’est pas encore de composer librement, mais de relier un signe de syntaxe à un résultat audible. Le timbre correspond à la couleur du son. En synthèse simple, sine est doux et pur, triangle reste doux mais un peu plus riche, sawtooth est plus brillant et square plus anguleux. Le choix du timbre influence fortement le style obtenu.",
              "starterCode": "setcpm(96/4)\n// 96 BPM perçu, 4 temps par cycle\n\nnote(\"c3 e3 g3\").s(\"sine\")",
              "task": "Remplacez sine par sawtooth et comparez le timbre.",
              "hintLevel1": "Ne changez que le mot entre guillemets dans .s(...).",
              "hintLevel2": "Comparez sine et sawtooth à volume identique pour entendre la différence de richesse harmonique.",
              "solution": "setcpm(96/4)\n// 96 BPM perçu, 4 temps par cycle\n\nnote(\"c3 e3 g3\").s(\"sawtooth\")",
              "whatToListenFor": "Écoutez l’épaisseur du son, sa douceur et sa capacité à rester au premier plan ou en arrière-plan.",
              "commonMistake": "Changer le timbre et le filtre en même temps rend difficile l’identification de ce qui produit la différence.",
              "summary": "À ce stade, vous devez savoir utiliser sine, triangle dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": "La couleur sonore se règle ici avec .s(\"sine\"), .s(\"triangle\"), .s(\"sawtooth\") ou .s(\"square\").",
              "whyItMatters": "Cette compétence reviendra dans tous les parcours : beats, ambient, glitch, techno, minimalisme et IDM.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Choisissez le timbre le plus adapté à une nappe, puis celui qui conviendrait mieux à une basse.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise principalement le synthé interne de Strudel. Il permet de tester l’audio sans dépendre d’une banque de samples."
            },
            {
              "id": "tc_04_03",
              "title": "Créer une note longue",
              "concepts": [
                "attack",
                "release",
                "enveloppe"
              ],
              "exerciseType": "modifier_code",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Rendez les notes plus progressives et plus longues.",
              "concept": "Cette leçon fait partie du socle. Le but n’est pas encore de composer librement, mais de relier un signe de syntaxe à un résultat audible. note(\"...\") joue des hauteurs musicales. Une note comme c3 indique un nom de note et un registre. Plus le nombre d’octave est élevé, plus le son est aigu. Les notes peuvent former une mélodie si elles sont successives, ou un accord si elles sont regroupées entre crochets avec des virgules.",
              "starterCode": "setcpm(76/4)\n// 76 BPM perçu, 4 temps par cycle\n\nnote(\"[c3,e3,g3]\").s(\"sine\")",
              "task": "Rendez les notes plus progressives et plus longues.",
              "hintLevel1": "Modifiez le nom ou l’octave d’une seule note pour entendre précisément son effet.",
              "hintLevel2": "Pour un accord, vérifiez la présence des crochets et des virgules : [c3,e3,g3].",
              "solution": "setcpm(76/4)\n// 76 BPM perçu, 4 temps par cycle\n\nnote(\"[c3,e3,g3]\").s(\"sine\").attack(1).release(3).gain(.35)",
              "whatToListenFor": "Distinguez une succession de notes d’un accord simultané. Ce sont deux gestes de composition différents.",
              "commonMistake": "Oublier les virgules dans un accord transforme souvent l’écriture en séquence, ce qui change totalement le résultat musical.",
              "summary": "À ce stade, vous devez savoir utiliser attack, release dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": "note(\"c3 e3 g3\") joue une séquence. note(\"[c3,e3,g3]\") joue les trois notes ensemble. La fonction .s(\"sine\") choisit ensuite le timbre.",
              "whyItMatters": "Cette compétence reviendra dans tous les parcours : beats, ambient, glitch, techno, minimalisme et IDM.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Écrivez la même matière en version mélodie, puis en version accord, et comparez la sensation d’espace.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise principalement le synthé interne de Strudel. Il permet de tester l’audio sans dépendre d’une banque de samples."
            }
          ]
        },
        {
          "id": "tc_05",
          "title": "Effets de base",
          "learningGoal": "Transformer le son avec des effets simples.",
          "lessons": [
            {
              "id": "tc_05_01",
              "title": "Reverb",
              "concepts": [
                "room",
                "espace"
              ],
              "exerciseType": "modifier_code",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Ajoutez une sensation d'espace au son.",
              "concept": "Cette leçon fait partie du socle. Le but n’est pas encore de composer librement, mais de relier un signe de syntaxe à un résultat audible. .room() ajoute une impression d’espace. Une faible valeur suggère une pièce discrète. Une valeur élevée donne une sensation de profondeur, utile pour l’ambient, mais potentiellement floue sur des batteries rapides.",
              "starterCode": "setcpm(96/4)\n// 96 BPM perçu, 4 temps par cycle\n\nnote(\"c3 e3 g3\").s(\"sine\").gain(.3)",
              "task": "Ajoutez une sensation d'espace au son.",
              "hintLevel1": "Ajoutez room sur une couche mélodique ou une nappe avant de l’ajouter sur la batterie.",
              "hintLevel2": "Comparez .room(.2) et .room(.9) sur le même code, sans changer le gain.",
              "solution": "setcpm(96/4)\n// 96 BPM perçu, 4 temps par cycle\n\nnote(\"c3 e3 g3\").s(\"sine\").room(.7).gain(.3)",
              "whatToListenFor": "Écoutez la distance apparente du son et la queue de réverbération après chaque note.",
              "commonMistake": "Trop de reverb sur toutes les couches rend le groove imprécis. Gardez souvent le kick plus sec que la texture.",
              "summary": "À ce stade, vous devez savoir utiliser room, espace dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": "Utilisez .room(.2) pour un espace léger, .room(.7) pour une profondeur marquée et .room(.9) pour une nappe très réverbérée.",
              "whyItMatters": "Cette compétence reviendra dans tous les parcours : beats, ambient, glitch, techno, minimalisme et IDM.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Créez une version sèche, puis une version très spatiale, et choisissez celle qui reste la plus lisible.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise principalement le synthé interne de Strudel. Il permet de tester l’audio sans dépendre d’une banque de samples."
            },
            {
              "id": "tc_05_02",
              "title": "Delay",
              "concepts": [
                "delay",
                "écho"
              ],
              "exerciseType": "modifier_code",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Ajoutez un écho modéré à la phrase.",
              "concept": "Cette leçon fait partie du socle. Le but n’est pas encore de composer librement, mais de relier un signe de syntaxe à un résultat audible. .delay() ajoute des répétitions du son. Utilisé doucement, il crée de la profondeur. Utilisé sur des fragments courts, il peut produire une sensation glitch ou IDM.",
              "starterCode": "setcpm(96/4)\n// 96 BPM perçu, 4 temps par cycle\n\nnote(\"c4 e4 g4\").s(\"triangle\").gain(.25)",
              "task": "Ajoutez un écho modéré à la phrase.",
              "hintLevel1": "Ajoutez le delay sur une seule couche pour entendre clairement son effet.",
              "hintLevel2": "Baissez le gain si le delay rend le motif trop chargé.",
              "solution": "setcpm(96/4)\n// 96 BPM perçu, 4 temps par cycle\n\nnote(\"c4 e4 g4\").s(\"triangle\").delay(.25).delaytime(.5).gain(.25)",
              "whatToListenFor": "Écoutez les répétitions après l’attaque initiale. Elles doivent enrichir le motif sans brouiller le cycle.",
              "commonMistake": "Mettre beaucoup de delay sur un motif déjà dense crée vite une masse confuse.",
              "summary": "À ce stade, vous devez savoir utiliser delay, écho dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": ".delay(.25) règle la quantité d’écho. .delaytime(.5) règle l’espacement entre les répétitions quand il est précisé.",
              "whyItMatters": "Cette compétence reviendra dans tous les parcours : beats, ambient, glitch, techno, minimalisme et IDM.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Essayez le même delay sur une mélodie lente puis sur des hats rapides. Comparez l’effet musical.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise principalement le synthé interne de Strudel. Il permet de tester l’audio sans dépendre d’une banque de samples."
            },
            {
              "id": "tc_05_03",
              "title": "Filtre passe-bas",
              "concepts": [
                "lpf",
                "cutoff",
                "filtre"
              ],
              "exerciseType": "comparer_patterns",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Ajoutez un filtre passe-bas pour adoucir le son.",
              "concept": "Cette leçon fait partie du socle. Le but n’est pas encore de composer librement, mais de relier un signe de syntaxe à un résultat audible. Un filtre passe-bas laisse passer les fréquences graves et atténue les aigus. Avec .lpf(), on peut assombrir un son riche, créer une montée progressive ou rendre une texture plus douce.",
              "starterCode": "setcpm(96/4)\n// 96 BPM perçu, 4 temps par cycle\n\nnote(\"c2 c3 c4\").s(\"sawtooth\").gain(.25)",
              "task": "Ajoutez un filtre passe-bas pour adoucir le son.",
              "hintLevel1": "Diminuez la valeur de lpf pour assombrir le son. Augmentez-la pour l’ouvrir.",
              "hintLevel2": "Sur un sawtooth, le filtre est particulièrement audible, car le son de départ contient beaucoup d’aigus.",
              "solution": "setcpm(96/4)\n// 96 BPM perçu, 4 temps par cycle\n\nnote(\"c2 c3 c4\").s(\"sawtooth\").lpf(800).gain(.25)",
              "whatToListenFor": "Écoutez l’ouverture et la fermeture des aigus. Le filtre change la couleur sans nécessairement changer les notes.",
              "commonMistake": "Tester un filtre sur un sine très pur peut rendre l’effet difficile à percevoir. Utilisez plutôt sawtooth pour apprendre.",
              "summary": "À ce stade, vous devez savoir utiliser lpf, cutoff dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": ".lpf(800) fixe une fréquence de coupure. .lpf(\"<400 700 1200 600>\") transforme cette fréquence en pattern évolutif.",
              "whyItMatters": "Cette compétence reviendra dans tous les parcours : beats, ambient, glitch, techno, minimalisme et IDM.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Programmez une version sombre, une version ouverte et une version qui alterne entre les deux.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise principalement le synthé interne de Strudel. Il permet de tester l’audio sans dépendre d’une banque de samples."
            }
          ]
        },
        {
          "id": "tc_06",
          "title": "Rythmes multiples",
          "learningGoal": "Introduire polyrythmie, polymétrie et décalages.",
          "lessons": [
            {
              "id": "tc_06_01",
              "title": "Trois contre quatre",
              "concepts": [
                "polyrythmie",
                "euclid"
              ],
              "exerciseType": "comparer_patterns",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Écoutez comment trois frappes et quatre frappes cohabitent.",
              "concept": "Cette leçon fait partie du socle. Le but n’est pas encore de composer librement, mais de relier un signe de syntaxe à un résultat audible. La polyrythmie superpose plusieurs répartitions rythmiques. Un motif peut placer trois attaques dans le même cadre où un autre en place quatre. L’intérêt n’est pas de compliquer gratuitement le beat, mais de créer une tension entre plusieurs manières de découper le temps.",
              "starterCode": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(96/4)\n// 96 BPM perçu, 4 temps par cycle\n\nstack(\n  s(\"bd(3,8)\"),\n  s(\"hh(4,8)\").gain(.3)\n)",
              "task": "Écoutez comment trois frappes et quatre frappes cohabitent.",
              "hintLevel1": "Gardez une couche simple, puis modifiez seulement le nombre de pulses de l’autre couche.",
              "hintLevel2": "Comparez (3,8), (4,8) et (5,8) pour entendre comment la répartition change.",
              "solution": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(96/4)\n// 96 BPM perçu, 4 temps par cycle\n\nstack(\n  s(\"bd(3,8)\").gain(.7),\n  s(\"hh(4,8)\").gain(.25)\n)",
              "whatToListenFor": "Écoutez le point où les couches semblent se rejoindre, puis l’endroit où elles se contredisent.",
              "commonMistake": "Ajouter trop de sons différents masque la relation rythmique. Utilisez des sons contrastés et peu nombreux.",
              "summary": "À ce stade, vous devez savoir utiliser polyrythmie, euclid dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": "La forme bd(3,8) signifie que trois attaques sont réparties sur huit positions. Un troisième nombre, comme bd(3,8,1), décale la répartition.",
              "whyItMatters": "Cette compétence reviendra dans tous les parcours : beats, ambient, glitch, techno, minimalisme et IDM.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Créez une version stable avec 4 contre 4, puis une version instable avec 3 contre 4.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise des samples. Conservez la ligne samples(...) au début du code, puis lancez la lecture dans Strudel. Le premier chargement peut demander quelques secondes."
            },
            {
              "id": "tc_06_02",
              "title": "Rotation",
              "concepts": [
                "rotation",
                "décalage"
              ],
              "exerciseType": "modifier_code",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Décalez la couche de hats avec une rotation.",
              "concept": "Cette leçon fait partie du socle. Le but n’est pas encore de composer librement, mais de relier un signe de syntaxe à un résultat audible. Un cycle est l’unité de temps centrale de Strudel. Les événements placés entre guillemets se répartissent dans ce cycle. Ajouter des événements ne rallonge pas automatiquement la boucle. Cela densifie ce qui se passe dans le même cadre temporel.",
              "starterCode": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(96/4)\n// 96 BPM perçu, 4 temps par cycle\n\nstack(\n  s(\"bd(3,8)\"),\n  s(\"hh(4,8)\").gain(.3)\n)",
              "task": "Décalez la couche de hats avec une rotation.",
              "hintLevel1": "Gardez setcpm inchangé et modifiez uniquement le nombre ou l’ordre des événements dans les guillemets.",
              "hintLevel2": "Comparez une version à deux événements et une version à quatre événements. Le cadre temporel reste le même, mais les attaques changent de place.",
              "solution": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(96/4)\n// 96 BPM perçu, 4 temps par cycle\n\nstack(\n  s(\"bd(3,8)\").gain(.7),\n  s(\"hh(4,8,1)\").gain(.25)\n)",
              "whatToListenFor": "Écoutez le retour du motif au début du cycle. L’enjeu est de sentir quand la boucle recommence.",
              "commonMistake": "Confondre le nombre d’événements avec la durée totale conduit à des tempos perçus incohérents.",
              "summary": "À ce stade, vous devez savoir utiliser rotation, décalage dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": "Les espaces séparent les événements. Dans s(\"bd sd bd sd\"), quatre événements se partagent le cycle. setcpm(BPM/4) fixe ici la vitesse perçue quand le cycle représente quatre temps.",
              "whyItMatters": "Cette compétence reviendra dans tous les parcours : beats, ambient, glitch, techno, minimalisme et IDM.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Écrivez une version avec deux événements, puis une autre avec huit événements, sans toucher à setcpm.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise des samples. Conservez la ligne samples(...) au début du code, puis lancez la lecture dans Strudel. Le premier chargement peut demander quelques secondes."
            },
            {
              "id": "tc_06_03",
              "title": "Longueurs différentes",
              "concepts": [
                "polymétrie",
                "réalignement"
              ],
              "exerciseType": "comparer_patterns",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Écoutez comment deux boucles de longueur différente se réalignent.",
              "concept": "Cette leçon fait partie du socle. Le but n’est pas encore de composer librement, mais de relier un signe de syntaxe à un résultat audible. La polymétrie superpose des motifs de longueurs différentes. Contrairement à une simple polyrythmie, les phrases ne reviennent pas au même endroit à chaque cycle. Elles se réalignent après plusieurs répétitions, ce qui crée une évolution lente sans changer constamment le code.",
              "starterCode": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(96/4)\n// 96 BPM perçu, 4 temps par cycle\n\nstack(\n  s(\"bd ~ sd\").slow(3),\n  s(\"hh ~ hh ~\").slow(4).gain(.3)\n)",
              "task": "Écoutez comment deux boucles de longueur différente se réalignent.",
              "hintLevel1": "Donnez à chaque couche une longueur différente, puis laissez tourner assez longtemps pour entendre le réalignement.",
              "hintLevel2": "Évitez les valeurs trop grandes au début. Essayez d’abord 3 et 4.",
              "solution": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(96/4)\n// 96 BPM perçu, 4 temps par cycle\n\nstack(\n  s(\"bd ~ sd\").slow(3).gain(.7),\n  s(\"hh ~ hh ~\").slow(4).gain(.25)\n)",
              "whatToListenFor": "Écoutez comment la relation entre les deux motifs change sans que vous ajoutiez de notes.",
              "commonMistake": "Arrêter trop vite empêche d’entendre l’effet. La polymétrie demande une écoute sur plusieurs cycles.",
              "summary": "À ce stade, vous devez savoir utiliser polymétrie, réalignement dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": "Deux motifs peuvent être étirés différemment avec .slow(3) et .slow(4). Ils conservent chacun leur logique, mais leur point de rencontre se déplace.",
              "whyItMatters": "Cette compétence reviendra dans tous les parcours : beats, ambient, glitch, techno, minimalisme et IDM.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Créez une paire de boucles de longueurs 3 et 5, puis comparez avec 3 et 4.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise des samples. Conservez la ligne samples(...) au début du code, puis lancez la lecture dans Strudel. Le premier chargement peut demander quelques secondes."
            }
          ]
        },
        {
          "id": "tc_07",
          "title": "Premier live set",
          "learningGoal": "Assembler les bases dans une mini-performance.",
          "lessons": [
            {
              "id": "tc_07_01",
              "title": "État minimal",
              "concepts": [
                "état",
                "stabilité"
              ],
              "exerciseType": "composer_contraintes",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Préparez une boucle stable de deux ou trois couches.",
              "concept": "Cette leçon fait partie du socle. Le but n’est pas encore de composer librement, mais de relier un signe de syntaxe à un résultat audible. La forme organise la musique dans le temps. En live coding, on peut penser en états : minimal, développé, fragmenté, reconstruit. Chaque état doit être assez stable pour être reconnu, puis assez modifiable pour créer une progression.",
              "starterCode": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(96/4)\n// 96 BPM perçu, 4 temps par cycle\n\nstack(\n  s(\"bd ~ sd ~\"),\n  s(\"hh*8\").gain(.25)\n)",
              "task": "Préparez une boucle stable de deux ou trois couches.",
              "hintLevel1": "Préparez d’abord deux états contrastés plutôt qu’un seul code très complexe.",
              "hintLevel2": "La transition peut être simple : ajouter une couche, retirer le kick, ouvrir un filtre ou rendre les hats plus irréguliers.",
              "solution": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(96/4)\n// 96 BPM perçu, 4 temps par cycle\n\nstack(\n  s(\"bd ~ sd ~\").gain(.7),\n  s(\"hh*8\").gain(.25),\n  note(\"c3 eb3 g3\").s(\"sine\").slow(4).gain(.2)\n)",
              "whatToListenFor": "Écoutez si l’évolution raconte quelque chose : installation, tension, rupture, retour.",
              "commonMistake": "Un état trop chargé laisse peu de marge pour la suite de la performance.",
              "summary": "À ce stade, vous devez savoir utiliser état, stabilité dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": "Un même stack peut servir de base à plusieurs états. Vous pouvez ajouter une couche, changer un filtre, augmenter la densité ou introduire une transformation conditionnelle.",
              "whyItMatters": "Cette compétence reviendra dans tous les parcours : beats, ambient, glitch, techno, minimalisme et IDM.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Construisez trois versions du même code : sobre, dense, puis déconstruite.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise des samples. Conservez la ligne samples(...) au début du code, puis lancez la lecture dans Strudel. Le premier chargement peut demander quelques secondes."
            },
            {
              "id": "tc_07_02",
              "title": "État développé",
              "concepts": [
                "densification",
                "couche"
              ],
              "exerciseType": "composer_contraintes",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Ajoutez une couche sans remplacer tout le motif.",
              "concept": "Cette leçon fait partie du socle. Le but n’est pas encore de composer librement, mais de relier un signe de syntaxe à un résultat audible. La forme organise la musique dans le temps. En live coding, on peut penser en états : minimal, développé, fragmenté, reconstruit. Chaque état doit être assez stable pour être reconnu, puis assez modifiable pour créer une progression.",
              "starterCode": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(96/4)\n// 96 BPM perçu, 4 temps par cycle\n\nstack(\n  s(\"bd ~ sd ~\"),\n  s(\"hh*8\").gain(.25),\n  note(\"c3 e3 g3\").s(\"sine\").slow(4).gain(.3)\n)",
              "task": "Ajoutez une couche sans remplacer tout le motif.",
              "hintLevel1": "Préparez d’abord deux états contrastés plutôt qu’un seul code très complexe.",
              "hintLevel2": "La transition peut être simple : ajouter une couche, retirer le kick, ouvrir un filtre ou rendre les hats plus irréguliers.",
              "solution": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(96/4)\n// 96 BPM perçu, 4 temps par cycle\n\nstack(\n  s(\"bd ~ sd ~\").gain(.7),\n  s(\"hh*8\").gain(.25),\n  s(\"~ cp ~ cp\").gain(.25),\n  note(\"c3 e3 g3\").s(\"sine\").slow(4).room(.5).gain(.25)\n)",
              "whatToListenFor": "Écoutez si l’évolution raconte quelque chose : installation, tension, rupture, retour.",
              "commonMistake": "Un état trop chargé laisse peu de marge pour la suite de la performance.",
              "summary": "À ce stade, vous devez savoir utiliser densification, couche dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": "Un même stack peut servir de base à plusieurs états. Vous pouvez ajouter une couche, changer un filtre, augmenter la densité ou introduire une transformation conditionnelle.",
              "whyItMatters": "Cette compétence reviendra dans tous les parcours : beats, ambient, glitch, techno, minimalisme et IDM.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Construisez trois versions du même code : sobre, dense, puis déconstruite.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise des samples. Conservez la ligne samples(...) au début du code, puis lancez la lecture dans Strudel. Le premier chargement peut demander quelques secondes."
            },
            {
              "id": "tc_07_03",
              "title": "Variation",
              "concepts": [
                "variation",
                "performance"
              ],
              "exerciseType": "mini_performance",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Préparez une variation plus instable pour un court passage.",
              "concept": "Cette leçon fait partie du socle. Le but n’est pas encore de composer librement, mais de relier un signe de syntaxe à un résultat audible. La forme organise la musique dans le temps. En live coding, on peut penser en états : minimal, développé, fragmenté, reconstruit. Chaque état doit être assez stable pour être reconnu, puis assez modifiable pour créer une progression.",
              "starterCode": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(96/4)\n// 96 BPM perçu, 4 temps par cycle\n\nstack(\n  s(\"bd ~ sd ~\"),\n  s(\"hh*8\").gain(.25).degradeBy(.2),\n  note(\"c3 e3 g3\").s(\"sine\").slow(4).room(.6).gain(.3)\n)",
              "task": "Préparez une variation plus instable pour un court passage.",
              "hintLevel1": "Préparez d’abord deux états contrastés plutôt qu’un seul code très complexe.",
              "hintLevel2": "La transition peut être simple : ajouter une couche, retirer le kick, ouvrir un filtre ou rendre les hats plus irréguliers.",
              "solution": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(96/4)\n// 96 BPM perçu, 4 temps par cycle\n\nstack(\n  s(\"bd ~ sd ~\").gain(.7),\n  s(\"hh*16\").gain(.18).degradeBy(.35),\n  note(\"c3 e3 g3\").s(\"sine\").slow(4).room(.6).gain(.3)\n)",
              "whatToListenFor": "Écoutez si l’évolution raconte quelque chose : installation, tension, rupture, retour.",
              "commonMistake": "Un état trop chargé laisse peu de marge pour la suite de la performance.",
              "summary": "À ce stade, vous devez savoir utiliser variation, performance dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": "Un même stack peut servir de base à plusieurs états. Vous pouvez ajouter une couche, changer un filtre, augmenter la densité ou introduire une transformation conditionnelle.",
              "whyItMatters": "Cette compétence reviendra dans tous les parcours : beats, ambient, glitch, techno, minimalisme et IDM.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Construisez trois versions du même code : sobre, dense, puis déconstruite.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise des samples. Conservez la ligne samples(...) au début du code, puis lancez la lecture dans Strudel. Le premier chargement peut demander quelques secondes."
            }
          ]
        }
      ]
    },
    {
      "id": "composition_generative",
      "title": "Composition générative",
      "role": "Composer avec règles, hasard, probabilités et conditions.",
      "unlockCondition": "Recommandé après les effets de base",
      "finalProject": "Créer un système musical semi-autonome avec ancrage stable et variations contrôlées.",
      "chapters": [
        {
          "id": "gen_01",
          "title": "Hasard contrôlé",
          "learningGoal": "Utiliser le hasard sans perdre l'intention musicale.",
          "lessons": [
            {
              "id": "gen_01_01",
              "title": "Retirer des événements",
              "concepts": [
                "degradeBy",
                "probabilité"
              ],
              "exerciseType": "modifier_code",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Retirez aléatoirement une partie des hats.",
              "concept": "Dans cette branche, vous apprenez à écrire des règles plutôt que des événements entièrement fixes. Le résultat doit varier tout en restant cadré. .degradeBy(x) retire des événements selon une probabilité. Avec une faible valeur, la variation reste discrète. Avec une valeur élevée, le motif se fragmente. C’est une technique utile pour humaniser des hats, alléger une texture ou créer du glitch contrôlé.",
              "starterCode": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(84/4)\n// 84 BPM perçu, 4 temps par cycle\n\ns(\"hh*16\").gain(.2)",
              "task": "Retirez aléatoirement une partie des hats.",
              "hintLevel1": "Commencez avec une valeur basse, par exemple .degradeBy(.15).",
              "hintLevel2": "Appliquez d’abord degradeBy aux hats ou aux micro-fragments, pas au kick principal.",
              "solution": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(84/4)\n// 84 BPM perçu, 4 temps par cycle\n\ns(\"hh*16\").gain(.2).degradeBy(.3)",
              "whatToListenFor": "Écoutez si la disparition des événements crée de la respiration ou si elle détruit le groove.",
              "commonMistake": "Une valeur trop haute sur une couche structurante rend le motif instable et difficile à suivre.",
              "summary": "À ce stade, vous devez savoir utiliser degradeBy, probabilité dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": ".degradeBy(.2) signifie qu’environ 20 pour cent des événements peuvent disparaître. La valeur doit rester entre 0 et 1.",
              "whyItMatters": "Elle permet de produire des variations sans devoir écrire manuellement chaque événement.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Comparez .degradeBy(.1), .degradeBy(.4) et .degradeBy(.7) sur le même motif.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise des samples. Conservez la ligne samples(...) au début du code, puis lancez la lecture dans Strudel. Le premier chargement peut demander quelques secondes."
            },
            {
              "id": "gen_01_02",
              "title": "Transformer parfois",
              "concepts": [
                "sometimes",
                "transformation"
              ],
              "exerciseType": "modifier_code",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Faites parfois jouer les hats plus lentement.",
              "concept": "Dans cette branche, vous apprenez à écrire des règles plutôt que des événements entièrement fixes. Le résultat doit varier tout en restant cadré. .sometimes() applique une transformation seulement une partie du temps. Cela permet de créer des accidents musicaux sans réécrire tout le motif. L’intérêt est de choisir une transformation qui reste cohérente avec le style visé.",
              "starterCode": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(84/4)\n// 84 BPM perçu, 4 temps par cycle\n\ns(\"hh*16\").gain(.18)",
              "task": "Faites parfois jouer les hats plus lentement.",
              "hintLevel1": "Repérez la transformation placée après la flèche =>.",
              "hintLevel2": "Essayez d’abord une transformation simple comme speed, puis une transformation plus radicale comme rev ou speed(\"-1\").",
              "solution": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(84/4)\n// 84 BPM perçu, 4 temps par cycle\n\ns(\"hh*16\").gain(.18).sometimes(x => x.speed(\".5\"))",
              "whatToListenFor": "Écoutez les moments d’écart par rapport au motif normal. Ils doivent surprendre sans faire perdre le fil.",
              "commonMistake": "Empiler plusieurs sometimes dès le départ rend les causes impossibles à entendre.",
              "summary": "À ce stade, vous devez savoir utiliser sometimes, transformation dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": "La forme .sometimes(x => x.speed(\".5\")) signifie : parfois, prends le pattern x et applique-lui speed.",
              "whyItMatters": "Elle permet de produire des variations sans devoir écrire manuellement chaque événement.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Gardez le même motif et changez uniquement la transformation appliquée parfois.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise des samples. Conservez la ligne samples(...) au début du code, puis lancez la lecture dans Strudel. Le premier chargement peut demander quelques secondes."
            },
            {
              "id": "gen_01_03",
              "title": "Choisir une valeur",
              "concepts": [
                "choose",
                "timbre"
              ],
              "exerciseType": "modifier_code",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Faites varier le timbre entre sine et triangle.",
              "concept": "Dans cette branche, vous apprenez à écrire des règles plutôt que des événements entièrement fixes. Le résultat doit varier tout en restant cadré. Le timbre correspond à la couleur du son. En synthèse simple, sine est doux et pur, triangle reste doux mais un peu plus riche, sawtooth est plus brillant et square plus anguleux. Le choix du timbre influence fortement le style obtenu.",
              "starterCode": "setcpm(84/4)\n// 84 BPM perçu, 4 temps par cycle\n\nnote(\"c3 eb3 g3 bb3\").slow(4).gain(.3)",
              "task": "Faites varier le timbre entre sine et triangle.",
              "hintLevel1": "Ne changez que le mot entre guillemets dans .s(...).",
              "hintLevel2": "Comparez sine et sawtooth à volume identique pour entendre la différence de richesse harmonique.",
              "solution": "setcpm(84/4)\n// 84 BPM perçu, 4 temps par cycle\n\nnote(\"c3 eb3 g3 bb3\").s(choose(\"sine\", \"triangle\")).slow(4).gain(.3)",
              "whatToListenFor": "Écoutez l’épaisseur du son, sa douceur et sa capacité à rester au premier plan ou en arrière-plan.",
              "commonMistake": "Changer le timbre et le filtre en même temps rend difficile l’identification de ce qui produit la différence.",
              "summary": "À ce stade, vous devez savoir utiliser choose, timbre dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": "La couleur sonore se règle ici avec .s(\"sine\"), .s(\"triangle\"), .s(\"sawtooth\") ou .s(\"square\").",
              "whyItMatters": "Elle permet de produire des variations sans devoir écrire manuellement chaque événement.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Choisissez le timbre le plus adapté à une nappe, puis celui qui conviendrait mieux à une basse.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise principalement le synthé interne de Strudel. Il permet de tester l’audio sans dépendre d’une banque de samples."
            }
          ]
        },
        {
          "id": "gen_02",
          "title": "Conditions et cycles",
          "learningGoal": "Appliquer des transformations selon des règles temporelles.",
          "lessons": [
            {
              "id": "gen_02_01",
              "title": "Fin de phrase",
              "concepts": [
                "lastOf",
                "phrase"
              ],
              "exerciseType": "modifier_code",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Inversez le motif à la fin d'un groupe de quatre cycles.",
              "concept": "Dans cette branche, vous apprenez à écrire des règles plutôt que des événements entièrement fixes. Le résultat doit varier tout en restant cadré. note(\"...\") joue des hauteurs musicales. Une note comme c3 indique un nom de note et un registre. Plus le nombre d’octave est élevé, plus le son est aigu. Les notes peuvent former une mélodie si elles sont successives, ou un accord si elles sont regroupées entre crochets avec des virgules.",
              "starterCode": "setcpm(84/4)\n// 84 BPM perçu, 4 temps par cycle\n\nnote(\"c3 d3 e3 g3\").s(\"triangle\")",
              "task": "Inversez le motif à la fin d'un groupe de quatre cycles.",
              "hintLevel1": "Modifiez le nom ou l’octave d’une seule note pour entendre précisément son effet.",
              "hintLevel2": "Pour un accord, vérifiez la présence des crochets et des virgules : [c3,e3,g3].",
              "solution": "setcpm(84/4)\n// 84 BPM perçu, 4 temps par cycle\n\nnote(\"c3 d3 e3 g3\").lastOf(4, x => x.rev()).s(\"triangle\")",
              "whatToListenFor": "Distinguez une succession de notes d’un accord simultané. Ce sont deux gestes de composition différents.",
              "commonMistake": "Oublier les virgules dans un accord transforme souvent l’écriture en séquence, ce qui change totalement le résultat musical.",
              "summary": "À ce stade, vous devez savoir utiliser lastOf, phrase dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": "note(\"c3 e3 g3\") joue une séquence. note(\"[c3,e3,g3]\") joue les trois notes ensemble. La fonction .s(\"sine\") choisit ensuite le timbre.",
              "whyItMatters": "Elle permet de produire des variations sans devoir écrire manuellement chaque événement.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Écrivez la même matière en version mélodie, puis en version accord, et comparez la sensation d’espace.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise principalement le synthé interne de Strudel. Il permet de tester l’audio sans dépendre d’une banque de samples."
            },
            {
              "id": "gen_02_02",
              "title": "Condition binaire",
              "concepts": [
                "when",
                "condition"
              ],
              "exerciseType": "lire_code",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Repérez quand la transformation se produit.",
              "concept": "Dans cette branche, vous apprenez à écrire des règles plutôt que des événements entièrement fixes. Le résultat doit varier tout en restant cadré. Les modificateurs conditionnels appliquent une transformation à certains cycles ou à certaines parties d’un motif. Ils servent à créer des phrases, des fins de cycle, des réponses et des variations prévisibles, contrairement au hasard pur.",
              "starterCode": "setcpm(84/4)\n// 84 BPM perçu, 4 temps par cycle\n\nnote(\"c3 eb3 g3\").when(\"<0 1>/2\", x => x.sub(\"5\")).s(\"sine\")",
              "task": "Repérez quand la transformation se produit.",
              "hintLevel1": "Identifiez d’abord quand la transformation doit arriver : fin de phrase, un cycle sur deux, ou zone du motif.",
              "hintLevel2": "Laissez tourner plusieurs cycles. Certaines conditions ne s’entendent pas immédiatement au premier passage.",
              "solution": "setcpm(84/4)\n// 84 BPM perçu, 4 temps par cycle\n\nnote(\"c3 eb3 g3\").when(\"<0 1>/2\", x => x.sub(\"5\")).s(\"sine\")",
              "whatToListenFor": "Écoutez si la variation crée une phrase reconnaissable plutôt qu’un accident isolé.",
              "commonMistake": "Conclure trop vite que rien ne se passe. Les conditions agissent parfois seulement après plusieurs cycles.",
              "summary": "À ce stade, vous devez savoir utiliser when, condition dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": "lastOf(4, x => x.rev()) applique la transformation au dernier cycle d’un groupe de quatre. when(\"<0 1>/2\", ...) dépend d’un pattern binaire. chunk découpe un motif en parties.",
              "whyItMatters": "Elle permet de produire des variations sans devoir écrire manuellement chaque événement.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Transformez une variation aléatoire en variation prévisible avec lastOf.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise principalement le synthé interne de Strudel. Il permet de tester l’audio sans dépendre d’une banque de samples."
            },
            {
              "id": "gen_02_03",
              "title": "Variation locale",
              "concepts": [
                "chunk",
                "variation locale"
              ],
              "exerciseType": "modifier_code",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Inversez une portion du pattern à chaque cycle.",
              "concept": "Dans cette branche, vous apprenez à écrire des règles plutôt que des événements entièrement fixes. Le résultat doit varier tout en restant cadré. Les modificateurs conditionnels appliquent une transformation à certains cycles ou à certaines parties d’un motif. Ils servent à créer des phrases, des fins de cycle, des réponses et des variations prévisibles, contrairement au hasard pur.",
              "starterCode": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(84/4)\n// 84 BPM perçu, 4 temps par cycle\n\ns(\"bd sd hh cp\")",
              "task": "Inversez une portion du pattern à chaque cycle.",
              "hintLevel1": "Identifiez d’abord quand la transformation doit arriver : fin de phrase, un cycle sur deux, ou zone du motif.",
              "hintLevel2": "Laissez tourner plusieurs cycles. Certaines conditions ne s’entendent pas immédiatement au premier passage.",
              "solution": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(84/4)\n// 84 BPM perçu, 4 temps par cycle\n\ns(\"bd sd hh cp\").chunk(4, x => x.rev())",
              "whatToListenFor": "Écoutez si la variation crée une phrase reconnaissable plutôt qu’un accident isolé.",
              "commonMistake": "Conclure trop vite que rien ne se passe. Les conditions agissent parfois seulement après plusieurs cycles.",
              "summary": "À ce stade, vous devez savoir utiliser chunk, variation locale dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": "lastOf(4, x => x.rev()) applique la transformation au dernier cycle d’un groupe de quatre. when(\"<0 1>/2\", ...) dépend d’un pattern binaire. chunk découpe un motif en parties.",
              "whyItMatters": "Elle permet de produire des variations sans devoir écrire manuellement chaque événement.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Transformez une variation aléatoire en variation prévisible avec lastOf.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise des samples. Conservez la ligne samples(...) au début du code, puis lancez la lecture dans Strudel. Le premier chargement peut demander quelques secondes."
            }
          ]
        },
        {
          "id": "gen_03",
          "title": "Signaux et modulation",
          "learningGoal": "Faire évoluer des paramètres par des signaux.",
          "lessons": [
            {
              "id": "gen_03_01",
              "title": "Filtre vivant",
              "concepts": [
                "perlin",
                "range",
                "cutoff"
              ],
              "exerciseType": "modifier_code",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Faites bouger le filtre de manière lente et fluide.",
              "concept": "Dans cette branche, vous apprenez à écrire des règles plutôt que des événements entièrement fixes. Le résultat doit varier tout en restant cadré. La composition générative consiste à écrire des règles plutôt qu’une suite entièrement fixe d’événements. Le hasard reste encadré par vos choix : sons autorisés, probabilités, gamme, tempo, densité et transformations possibles.",
              "starterCode": "setcpm(60/4)\n// 60 BPM perçu, 4 temps par cycle\n\nnote(\"c3 eb3 g3 bb3\").s(\"sawtooth\").gain(.25)",
              "task": "Faites bouger le filtre de manière lente et fluide.",
              "hintLevel1": "Stabilisez une couche avant de rendre une autre couche aléatoire.",
              "hintLevel2": "Réduisez les probabilités si le motif devient méconnaissable.",
              "solution": "setcpm(60/4)\n// 60 BPM perçu, 4 temps par cycle\n\nnote(\"c3 eb3 g3 bb3\").s(\"sawtooth\").cutoff(perlin.range(400, 2000)).gain(.25)",
              "whatToListenFor": "Écoutez si le pattern change tout en gardant une identité. C’est le critère principal d’un bon système génératif.",
              "commonMistake": "Rendre tous les paramètres aléatoires produit souvent un résultat sans direction. Gardez au moins un ancrage stable.",
              "summary": "À ce stade, vous devez savoir utiliser perlin, range dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": "Les fonctions comme degradeBy(), sometimes(), choose(), irand() et perlin permettent de produire des variations. Elles doivent rester attachées à une intention musicale.",
              "whyItMatters": "Elle permet de produire des variations sans devoir écrire manuellement chaque événement.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Identifiez une couche fixe, une couche variable et une couche de texture.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise principalement le synthé interne de Strudel. Il permet de tester l’audio sans dépendre d’une banque de samples."
            },
            {
              "id": "gen_03_02",
              "title": "Notes contraintes",
              "concepts": [
                "irand",
                "scale",
                "gamme"
              ],
              "exerciseType": "comparer_patterns",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Écoutez une mélodie aléatoire contrainte à une gamme.",
              "concept": "Dans cette branche, vous apprenez à écrire des règles plutôt que des événements entièrement fixes. Le résultat doit varier tout en restant cadré. note(\"...\") joue des hauteurs musicales. Une note comme c3 indique un nom de note et un registre. Plus le nombre d’octave est élevé, plus le son est aigu. Les notes peuvent former une mélodie si elles sont successives, ou un accord si elles sont regroupées entre crochets avec des virgules.",
              "starterCode": "setcpm(60/4)\n// 60 BPM perçu, 4 temps par cycle\n\nn(irand(8)).scale(\"C:minor\").s(\"triangle\").gain(.25)",
              "task": "Écoutez une mélodie aléatoire contrainte à une gamme.",
              "hintLevel1": "Modifiez le nom ou l’octave d’une seule note pour entendre précisément son effet.",
              "hintLevel2": "Pour un accord, vérifiez la présence des crochets et des virgules : [c3,e3,g3].",
              "solution": "setcpm(60/4)\n// 60 BPM perçu, 4 temps par cycle\n\nn(irand(8)).scale(\"C:minor\").s(\"triangle\").gain(.25)",
              "whatToListenFor": "Distinguez une succession de notes d’un accord simultané. Ce sont deux gestes de composition différents.",
              "commonMistake": "Oublier les virgules dans un accord transforme souvent l’écriture en séquence, ce qui change totalement le résultat musical.",
              "summary": "À ce stade, vous devez savoir utiliser irand, scale dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": "note(\"c3 e3 g3\") joue une séquence. note(\"[c3,e3,g3]\") joue les trois notes ensemble. La fonction .s(\"sine\") choisit ensuite le timbre.",
              "whyItMatters": "Elle permet de produire des variations sans devoir écrire manuellement chaque événement.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Écrivez la même matière en version mélodie, puis en version accord, et comparez la sensation d’espace.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise principalement le synthé interne de Strudel. Il permet de tester l’audio sans dépendre d’une banque de samples."
            },
            {
              "id": "gen_03_03",
              "title": "Texture autonome",
              "concepts": [
                "génératif",
                "texture"
              ],
              "exerciseType": "composer_contraintes",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Créez une texture qui change sans perdre son identité.",
              "concept": "Dans cette branche, vous apprenez à écrire des règles plutôt que des événements entièrement fixes. Le résultat doit varier tout en restant cadré. La composition générative consiste à écrire des règles plutôt qu’une suite entièrement fixe d’événements. Le hasard reste encadré par vos choix : sons autorisés, probabilités, gamme, tempo, densité et transformations possibles.",
              "starterCode": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(60/4)\n// 60 BPM perçu, 4 temps par cycle\n\nstack(\n  n(irand(8)).scale(\"C:minor\").s(\"sine\").slow(4).room(.8).gain(.2),\n  s(\"hh*8\").degradeBy(.5).gain(.1)\n)",
              "task": "Créez une texture qui change sans perdre son identité.",
              "hintLevel1": "Stabilisez une couche avant de rendre une autre couche aléatoire.",
              "hintLevel2": "Réduisez les probabilités si le motif devient méconnaissable.",
              "solution": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(60/4)\n// 60 BPM perçu, 4 temps par cycle\n\nstack(\n  note(\"c2\").s(\"sine\").slow(8).gain(.2),\n  n(irand(8)).scale(\"C:minor\").s(\"sine\").slow(4).room(.8).gain(.18),\n  s(\"hh*8\").degradeBy(.5).gain(.08)\n)",
              "whatToListenFor": "Écoutez si le pattern change tout en gardant une identité. C’est le critère principal d’un bon système génératif.",
              "commonMistake": "Rendre tous les paramètres aléatoires produit souvent un résultat sans direction. Gardez au moins un ancrage stable.",
              "summary": "À ce stade, vous devez savoir utiliser génératif, texture dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": "Les fonctions comme degradeBy(), sometimes(), choose(), irand() et perlin permettent de produire des variations. Elles doivent rester attachées à une intention musicale.",
              "whyItMatters": "Elle permet de produire des variations sans devoir écrire manuellement chaque événement.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Identifiez une couche fixe, une couche variable et une couche de texture.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise des samples. Conservez la ligne samples(...) au début du code, puis lancez la lecture dans Strudel. Le premier chargement peut demander quelques secondes."
            }
          ]
        }
      ]
    },
    {
      "id": "minimaliste",
      "title": "Minimaliste",
      "role": "Travailler boucles, répétition, phasing et micro-variations.",
      "unlockCondition": "Recommandé après le tronc commun",
      "finalProject": "Composer une pièce minimaliste courte avec boucles, décalage et évolution timbrique.",
      "chapters": [
        {
          "id": "min_01",
          "title": "Boucles simples",
          "learningGoal": "Créer une matière musicale à partir d'un motif court.",
          "lessons": [
            {
              "id": "min_01_01",
              "title": "Boucle de notes",
              "concepts": [
                "boucle",
                "motif"
              ],
              "exerciseType": "modifier_code",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Modifiez une seule note et écoutez l'effet sur la boucle.",
              "concept": "Ici, la progression vient de petites différences répétées longtemps. L’écoute doit porter sur les micro-écarts et les réalignements. note(\"...\") joue des hauteurs musicales. Une note comme c3 indique un nom de note et un registre. Plus le nombre d’octave est élevé, plus le son est aigu. Les notes peuvent former une mélodie si elles sont successives, ou un accord si elles sont regroupées entre crochets avec des virgules.",
              "starterCode": "setcpm(72/4)\n// 72 BPM perçu, 4 temps par cycle\n\nnote(\"c4 e4 g4 e4\").s(\"sine\").gain(.35)",
              "task": "Modifiez une seule note et écoutez l'effet sur la boucle.",
              "hintLevel1": "Modifiez le nom ou l’octave d’une seule note pour entendre précisément son effet.",
              "hintLevel2": "Pour un accord, vérifiez la présence des crochets et des virgules : [c3,e3,g3].",
              "solution": "setcpm(72/4)\n// 72 BPM perçu, 4 temps par cycle\n\nnote(\"c4 e4 a4 e4\").s(\"sine\").gain(.35)",
              "whatToListenFor": "Distinguez une succession de notes d’un accord simultané. Ce sont deux gestes de composition différents.",
              "commonMistake": "Oublier les virgules dans un accord transforme souvent l’écriture en séquence, ce qui change totalement le résultat musical.",
              "summary": "À ce stade, vous devez savoir utiliser boucle, motif dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": "note(\"c3 e3 g3\") joue une séquence. note(\"[c3,e3,g3]\") joue les trois notes ensemble. La fonction .s(\"sine\") choisit ensuite le timbre.",
              "whyItMatters": "Elle montre comment obtenir une évolution musicale à partir de très peu de matière.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Écrivez la même matière en version mélodie, puis en version accord, et comparez la sensation d’espace.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise principalement le synthé interne de Strudel. Il permet de tester l’audio sans dépendre d’une banque de samples."
            },
            {
              "id": "min_01_02",
              "title": "Variation de timbre",
              "concepts": [
                "filtre",
                "micro-variation"
              ],
              "exerciseType": "modifier_code",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Faites évoluer le motif par le filtre plutôt que par les notes.",
              "concept": "Ici, la progression vient de petites différences répétées longtemps. L’écoute doit porter sur les micro-écarts et les réalignements. Le timbre correspond à la couleur du son. En synthèse simple, sine est doux et pur, triangle reste doux mais un peu plus riche, sawtooth est plus brillant et square plus anguleux. Le choix du timbre influence fortement le style obtenu.",
              "starterCode": "setcpm(72/4)\n// 72 BPM perçu, 4 temps par cycle\n\nnote(\"c4 e4 g4 e4\").s(\"sine\").gain(.35)",
              "task": "Faites évoluer le motif par le filtre plutôt que par les notes.",
              "hintLevel1": "Ne changez que le mot entre guillemets dans .s(...).",
              "hintLevel2": "Comparez sine et sawtooth à volume identique pour entendre la différence de richesse harmonique.",
              "solution": "setcpm(72/4)\n// 72 BPM perçu, 4 temps par cycle\n\nnote(\"c4 e4 g4 e4\").s(\"sine\").lpf(\"<600 900 1200 800>\").gain(.35)",
              "whatToListenFor": "Écoutez l’épaisseur du son, sa douceur et sa capacité à rester au premier plan ou en arrière-plan.",
              "commonMistake": "Changer le timbre et le filtre en même temps rend difficile l’identification de ce qui produit la différence.",
              "summary": "À ce stade, vous devez savoir utiliser filtre, micro-variation dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": "La couleur sonore se règle ici avec .s(\"sine\"), .s(\"triangle\"), .s(\"sawtooth\") ou .s(\"square\").",
              "whyItMatters": "Elle montre comment obtenir une évolution musicale à partir de très peu de matière.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Choisissez le timbre le plus adapté à une nappe, puis celui qui conviendrait mieux à une basse.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise principalement le synthé interne de Strudel. Il permet de tester l’audio sans dépendre d’une banque de samples."
            }
          ]
        },
        {
          "id": "min_02",
          "title": "Phasing",
          "learningGoal": "Créer un décalage progressif entre deux motifs.",
          "lessons": [
            {
              "id": "min_02_01",
              "title": "Doubler un motif",
              "concepts": [
                "doublage",
                "superposition"
              ],
              "exerciseType": "modifier_code",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Ajoutez une deuxième version du même motif avec un timbre différent.",
              "concept": "Ici, la progression vient de petites différences répétées longtemps. L’écoute doit porter sur les micro-écarts et les réalignements. La musique minimaliste travaille souvent avec peu d’éléments, répétés longtemps, puis modifiés par petits écarts. Dans Strudel, cette logique se traduit bien par des boucles courtes, des filtres lents, des décalages et des longueurs différentes.",
              "starterCode": "setcpm(72/4)\n// 72 BPM perçu, 4 temps par cycle\n\nnote(\"c4 e4 g4 e4\").s(\"sine\").gain(.3)",
              "task": "Ajoutez une deuxième version du même motif avec un timbre différent.",
              "hintLevel1": "N’ajoutez pas une nouvelle couche tout de suite. Faites d’abord évoluer le motif existant.",
              "hintLevel2": "Cherchez une variation perceptible mais lente, plutôt qu’un changement spectaculaire.",
              "solution": "setcpm(72/4)\n// 72 BPM perçu, 4 temps par cycle\n\nstack(\n  note(\"c4 e4 g4 e4\").s(\"sine\").gain(.3),\n  note(\"c4 e4 g4 e4\").s(\"triangle\").gain(.22)\n)",
              "whatToListenFor": "Écoutez la différence entre répétition mécanique et répétition qui évolue par micro-déplacement.",
              "commonMistake": "Ajouter trop d’événements empêche d’entendre les micro-variations.",
              "summary": "À ce stade, vous devez savoir utiliser doublage, superposition dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": "Une boucle minimale peut être une simple suite de notes à laquelle on ajoute slow, room, lpf ou un léger décalage.",
              "whyItMatters": "Elle montre comment obtenir une évolution musicale à partir de très peu de matière.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Gardez quatre notes maximum et créez l’évolution uniquement avec timbre, espace ou décalage.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise principalement le synthé interne de Strudel. Il permet de tester l’audio sans dépendre d’une banque de samples."
            },
            {
              "id": "min_02_02",
              "title": "Décalage lent",
              "concepts": [
                "phasing",
                "dérive"
              ],
              "exerciseType": "comparer_patterns",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Écoutez la dérive entre les deux motifs.",
              "concept": "Ici, la progression vient de petites différences répétées longtemps. L’écoute doit porter sur les micro-écarts et les réalignements. La polymétrie superpose des motifs de longueurs différentes. Contrairement à une simple polyrythmie, les phrases ne reviennent pas au même endroit à chaque cycle. Elles se réalignent après plusieurs répétitions, ce qui crée une évolution lente sans changer constamment le code.",
              "starterCode": "setcpm(72/4)\n// 72 BPM perçu, 4 temps par cycle\n\nstack(\n  note(\"c4 e4 g4 e4\").s(\"sine\").gain(.3),\n  note(\"c4 e4 g4 e4\").s(\"triangle\").slow(1.01).gain(.22)\n)",
              "task": "Écoutez la dérive entre les deux motifs.",
              "hintLevel1": "Donnez à chaque couche une longueur différente, puis laissez tourner assez longtemps pour entendre le réalignement.",
              "hintLevel2": "Évitez les valeurs trop grandes au début. Essayez d’abord 3 et 4.",
              "solution": "setcpm(72/4)\n// 72 BPM perçu, 4 temps par cycle\n\nstack(\n  note(\"c4 e4 g4 e4\").s(\"sine\").gain(.3),\n  note(\"c4 e4 g4 e4\").s(\"triangle\").slow(1.01).gain(.22)\n)",
              "whatToListenFor": "Écoutez comment la relation entre les deux motifs change sans que vous ajoutiez de notes.",
              "commonMistake": "Arrêter trop vite empêche d’entendre l’effet. La polymétrie demande une écoute sur plusieurs cycles.",
              "summary": "À ce stade, vous devez savoir utiliser phasing, dérive dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": "Deux motifs peuvent être étirés différemment avec .slow(3) et .slow(4). Ils conservent chacun leur logique, mais leur point de rencontre se déplace.",
              "whyItMatters": "Elle montre comment obtenir une évolution musicale à partir de très peu de matière.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Créez une paire de boucles de longueurs 3 et 5, puis comparez avec 3 et 4.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise principalement le synthé interne de Strudel. Il permet de tester l’audio sans dépendre d’une banque de samples."
            }
          ]
        },
        {
          "id": "min_03",
          "title": "Polymétrie lente",
          "learningGoal": "Superposer des boucles de longueurs différentes.",
          "lessons": [
            {
              "id": "min_03_01",
              "title": "Deux longueurs",
              "concepts": [
                "polymétrie",
                "réalignement"
              ],
              "exerciseType": "comparer_patterns",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Écoutez comment les deux lignes se croisent différemment.",
              "concept": "Ici, la progression vient de petites différences répétées longtemps. L’écoute doit porter sur les micro-écarts et les réalignements. La polymétrie superpose des motifs de longueurs différentes. Contrairement à une simple polyrythmie, les phrases ne reviennent pas au même endroit à chaque cycle. Elles se réalignent après plusieurs répétitions, ce qui crée une évolution lente sans changer constamment le code.",
              "starterCode": "setcpm(72/4)\n// 72 BPM perçu, 4 temps par cycle\n\nstack(\n  note(\"c4 e4 g4\").s(\"sine\").slow(3),\n  note(\"g4 a4 c5 e5\").s(\"triangle\").slow(4).gain(.25)\n)",
              "task": "Écoutez comment les deux lignes se croisent différemment.",
              "hintLevel1": "Donnez à chaque couche une longueur différente, puis laissez tourner assez longtemps pour entendre le réalignement.",
              "hintLevel2": "Évitez les valeurs trop grandes au début. Essayez d’abord 3 et 4.",
              "solution": "setcpm(72/4)\n// 72 BPM perçu, 4 temps par cycle\n\nstack(\n  note(\"c4 e4 g4\").s(\"sine\").slow(3).gain(.28),\n  note(\"g4 a4 c5 e5\").s(\"triangle\").slow(4).gain(.2)\n)",
              "whatToListenFor": "Écoutez comment la relation entre les deux motifs change sans que vous ajoutiez de notes.",
              "commonMistake": "Arrêter trop vite empêche d’entendre l’effet. La polymétrie demande une écoute sur plusieurs cycles.",
              "summary": "À ce stade, vous devez savoir utiliser polymétrie, réalignement dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": "Deux motifs peuvent être étirés différemment avec .slow(3) et .slow(4). Ils conservent chacun leur logique, mais leur point de rencontre se déplace.",
              "whyItMatters": "Elle montre comment obtenir une évolution musicale à partir de très peu de matière.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Créez une paire de boucles de longueurs 3 et 5, puis comparez avec 3 et 4.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise principalement le synthé interne de Strudel. Il permet de tester l’audio sans dépendre d’une banque de samples."
            },
            {
              "id": "min_03_02",
              "title": "Pièce minimale",
              "concepts": [
                "forme",
                "évolution lente"
              ],
              "exerciseType": "mini_performance",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Ajoutez une troisième couche très discrète pour compléter la pièce.",
              "concept": "Ici, la progression vient de petites différences répétées longtemps. L’écoute doit porter sur les micro-écarts et les réalignements. La musique minimaliste travaille souvent avec peu d’éléments, répétés longtemps, puis modifiés par petits écarts. Dans Strudel, cette logique se traduit bien par des boucles courtes, des filtres lents, des décalages et des longueurs différentes.",
              "starterCode": "setcpm(72/4)\n// 72 BPM perçu, 4 temps par cycle\n\nstack(\n  note(\"c4 e4 g4\").s(\"sine\").slow(3).room(.5).gain(.25),\n  note(\"g4 a4 c5 e5\").s(\"triangle\").slow(4).delay(.2).gain(.18)\n)",
              "task": "Ajoutez une troisième couche très discrète pour compléter la pièce.",
              "hintLevel1": "N’ajoutez pas une nouvelle couche tout de suite. Faites d’abord évoluer le motif existant.",
              "hintLevel2": "Cherchez une variation perceptible mais lente, plutôt qu’un changement spectaculaire.",
              "solution": "setcpm(72/4)\n// 72 BPM perçu, 4 temps par cycle\n\nstack(\n  note(\"c2\").s(\"sine\").slow(8).gain(.18),\n  note(\"c4 e4 g4\").s(\"sine\").slow(3).room(.5).gain(.25),\n  note(\"g4 a4 c5 e5\").s(\"triangle\").slow(4).delay(.2).gain(.18)\n)",
              "whatToListenFor": "Écoutez la différence entre répétition mécanique et répétition qui évolue par micro-déplacement.",
              "commonMistake": "Ajouter trop d’événements empêche d’entendre les micro-variations.",
              "summary": "À ce stade, vous devez savoir utiliser forme, évolution lente dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": "Une boucle minimale peut être une simple suite de notes à laquelle on ajoute slow, room, lpf ou un léger décalage.",
              "whyItMatters": "Elle montre comment obtenir une évolution musicale à partir de très peu de matière.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Gardez quatre notes maximum et créez l’évolution uniquement avec timbre, espace ou décalage.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise principalement le synthé interne de Strudel. Il permet de tester l’audio sans dépendre d’une banque de samples."
            }
          ]
        }
      ]
    },
    {
      "id": "urban_beat",
      "title": "Urban beat",
      "role": "Programmer des beats hip-hop, trap, lo-fi et des samples.",
      "unlockCondition": "Recommandé après le tronc commun",
      "finalProject": "Produire trois beats courts : boom bap, trap et lo-fi.",
      "chapters": [
        {
          "id": "urb_01",
          "title": "Fondations hip-hop",
          "learningGoal": "Construire un beat kick, snare et hats.",
          "lessons": [
            {
              "id": "urb_01_01",
              "title": "Kick et snare",
              "concepts": [
                "backbeat",
                "kick",
                "snare"
              ],
              "exerciseType": "modifier_code",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Déplacez une grosse caisse pour rendre le beat moins carré.",
              "concept": "Dans cette branche, la priorité est le groove. Chaque couche doit avoir une fonction rythmique immédiatement identifiable. Un beat urbain repose souvent sur une hiérarchie claire : le kick donne l’appui grave, la snare ou le clap marque la réponse, les hats remplissent la subdivision. La difficulté consiste à donner du mouvement sans saturer tous les espaces.",
              "starterCode": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(80/4)\n// 80 BPM perçu, 4 temps par cycle\n\nstack(\n  s(\"bd ~ ~ bd\"),\n  s(\"~ sd ~ sd\")\n)",
              "task": "Déplacez une grosse caisse pour rendre le beat moins carré.",
              "hintLevel1": "Commencez par kick et snare avant d’ajouter les hats.",
              "hintLevel2": "Si le beat devient chargé, baissez le gain des hats ou retirez quelques événements.",
              "solution": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(80/4)\n// 80 BPM perçu, 4 temps par cycle\n\nstack(\n  s(\"bd ~ bd ~\").gain(.7),\n  s(\"~ sd ~ sd\").gain(.55)\n)",
              "whatToListenFor": "Écoutez l’équilibre entre l’appui grave, la réponse de snare et le mouvement des hats.",
              "commonMistake": "Densifier les hats sans baisser leur volume peut donner un beat agressif et peu lisible.",
              "summary": "À ce stade, vous devez savoir utiliser backbeat, kick dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": "Utilisez stack() pour séparer kick, snare et hats. Les hats peuvent être densifiés avec *8, *16 ou des crochets pour les rolls.",
              "whyItMatters": "Elle aide à construire un beat qui reste lisible même quand les détails se multiplient.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Créez une version sobre et une version avec rolls, puis choisissez celle qui groove le mieux.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise des samples. Conservez la ligne samples(...) au début du code, puis lancez la lecture dans Strudel. Le premier chargement peut demander quelques secondes."
            },
            {
              "id": "urb_01_02",
              "title": "Ajouter des hats",
              "concepts": [
                "hats",
                "pulsation"
              ],
              "exerciseType": "completer_code",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Ajoutez une couche de hats réguliers et discrets.",
              "concept": "Dans cette branche, la priorité est le groove. Chaque couche doit avoir une fonction rythmique immédiatement identifiable. Un beat urbain repose souvent sur une hiérarchie claire : le kick donne l’appui grave, la snare ou le clap marque la réponse, les hats remplissent la subdivision. La difficulté consiste à donner du mouvement sans saturer tous les espaces.",
              "starterCode": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(80/4)\n// 80 BPM perçu, 4 temps par cycle\n\nstack(\n  s(\"bd ~ ~ bd\"),\n  s(\"~ sd ~ sd\")\n)",
              "task": "Ajoutez une couche de hats réguliers et discrets.",
              "hintLevel1": "Commencez par kick et snare avant d’ajouter les hats.",
              "hintLevel2": "Si le beat devient chargé, baissez le gain des hats ou retirez quelques événements.",
              "solution": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(80/4)\n// 80 BPM perçu, 4 temps par cycle\n\nstack(\n  s(\"bd ~ ~ bd\").gain(.7),\n  s(\"~ sd ~ sd\").gain(.55),\n  s(\"hh*8\").gain(.22)\n)",
              "whatToListenFor": "Écoutez l’équilibre entre l’appui grave, la réponse de snare et le mouvement des hats.",
              "commonMistake": "Densifier les hats sans baisser leur volume peut donner un beat agressif et peu lisible.",
              "summary": "À ce stade, vous devez savoir utiliser hats, pulsation dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": "Utilisez stack() pour séparer kick, snare et hats. Les hats peuvent être densifiés avec *8, *16 ou des crochets pour les rolls.",
              "whyItMatters": "Elle aide à construire un beat qui reste lisible même quand les détails se multiplient.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Créez une version sobre et une version avec rolls, puis choisissez celle qui groove le mieux.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise des samples. Conservez la ligne samples(...) au début du code, puis lancez la lecture dans Strudel. Le premier chargement peut demander quelques secondes."
            }
          ]
        },
        {
          "id": "urb_02",
          "title": "Charleys trap",
          "learningGoal": "Programmer des hats rapides et des rolls.",
          "lessons": [
            {
              "id": "urb_02_01",
              "title": "Hats rapides",
              "concepts": [
                "subdivision",
                "trap"
              ],
              "exerciseType": "modifier_code",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Doublez la densité des hats.",
              "concept": "Dans cette branche, la priorité est le groove. Chaque couche doit avoir une fonction rythmique immédiatement identifiable. Un beat urbain repose souvent sur une hiérarchie claire : le kick donne l’appui grave, la snare ou le clap marque la réponse, les hats remplissent la subdivision. La difficulté consiste à donner du mouvement sans saturer tous les espaces.",
              "starterCode": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(70/4)\n// 70 BPM perçu, 4 temps par cycle\n\ns(\"hh*8\").gain(.18)",
              "task": "Doublez la densité des hats.",
              "hintLevel1": "Commencez par kick et snare avant d’ajouter les hats.",
              "hintLevel2": "Si le beat devient chargé, baissez le gain des hats ou retirez quelques événements.",
              "solution": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(70/4)\n// 70 BPM perçu, 4 temps par cycle\n\ns(\"hh*16\").gain(.18)",
              "whatToListenFor": "Écoutez l’équilibre entre l’appui grave, la réponse de snare et le mouvement des hats.",
              "commonMistake": "Densifier les hats sans baisser leur volume peut donner un beat agressif et peu lisible.",
              "summary": "À ce stade, vous devez savoir utiliser subdivision, trap dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": "Utilisez stack() pour séparer kick, snare et hats. Les hats peuvent être densifiés avec *8, *16 ou des crochets pour les rolls.",
              "whyItMatters": "Elle aide à construire un beat qui reste lisible même quand les détails se multiplient.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Créez une version sobre et une version avec rolls, puis choisissez celle qui groove le mieux.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise des samples. Conservez la ligne samples(...) au début du code, puis lancez la lecture dans Strudel. Le premier chargement peut demander quelques secondes."
            },
            {
              "id": "urb_02_02",
              "title": "Rolls",
              "concepts": [
                "roll",
                "crochets"
              ],
              "exerciseType": "completer_code",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Ajoutez un roll local de quatre hats rapides.",
              "concept": "Dans cette branche, la priorité est le groove. Chaque couche doit avoir une fonction rythmique immédiatement identifiable. Un beat urbain repose souvent sur une hiérarchie claire : le kick donne l’appui grave, la snare ou le clap marque la réponse, les hats remplissent la subdivision. La difficulté consiste à donner du mouvement sans saturer tous les espaces.",
              "starterCode": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(70/4)\n// 70 BPM perçu, 4 temps par cycle\n\ns(\"hh*8 ~ hh*8\").gain(.18)",
              "task": "Ajoutez un roll local de quatre hats rapides.",
              "hintLevel1": "Commencez par kick et snare avant d’ajouter les hats.",
              "hintLevel2": "Si le beat devient chargé, baissez le gain des hats ou retirez quelques événements.",
              "solution": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(70/4)\n// 70 BPM perçu, 4 temps par cycle\n\ns(\"hh*8 [hh hh hh hh] hh*8\").gain(.18)",
              "whatToListenFor": "Écoutez l’équilibre entre l’appui grave, la réponse de snare et le mouvement des hats.",
              "commonMistake": "Densifier les hats sans baisser leur volume peut donner un beat agressif et peu lisible.",
              "summary": "À ce stade, vous devez savoir utiliser roll, crochets dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": "Utilisez stack() pour séparer kick, snare et hats. Les hats peuvent être densifiés avec *8, *16 ou des crochets pour les rolls.",
              "whyItMatters": "Elle aide à construire un beat qui reste lisible même quand les détails se multiplient.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Créez une version sobre et une version avec rolls, puis choisissez celle qui groove le mieux.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise des samples. Conservez la ligne samples(...) au début du code, puis lancez la lecture dans Strudel. Le premier chargement peut demander quelques secondes."
            }
          ]
        },
        {
          "id": "urb_03",
          "title": "Samples et lo-fi",
          "learningGoal": "Introduire des samples comme matière musicale.",
          "lessons": [
            {
              "id": "urb_03_01",
              "title": "Varier un sample",
              "concepts": [
                "sample",
                "speed"
              ],
              "exerciseType": "modifier_code",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Faites varier la vitesse de lecture du clap.",
              "concept": "Dans cette branche, la priorité est le groove. Chaque couche doit avoir une fonction rythmique immédiatement identifiable. Un beat urbain repose souvent sur une hiérarchie claire : le kick donne l’appui grave, la snare ou le clap marque la réponse, les hats remplissent la subdivision. La difficulté consiste à donner du mouvement sans saturer tous les espaces.",
              "starterCode": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(74/4)\n// 74 BPM perçu, 4 temps par cycle\n\ns(\"cp ~ [cp cp] ~\")",
              "task": "Faites varier la vitesse de lecture du clap.",
              "hintLevel1": "Commencez par kick et snare avant d’ajouter les hats.",
              "hintLevel2": "Si le beat devient chargé, baissez le gain des hats ou retirez quelques événements.",
              "solution": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(74/4)\n// 74 BPM perçu, 4 temps par cycle\n\ns(\"cp ~ [cp cp] ~\").speed(\"<1 .8 1.2>\")",
              "whatToListenFor": "Écoutez l’équilibre entre l’appui grave, la réponse de snare et le mouvement des hats.",
              "commonMistake": "Densifier les hats sans baisser leur volume peut donner un beat agressif et peu lisible.",
              "summary": "À ce stade, vous devez savoir utiliser sample, speed dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": "Utilisez stack() pour séparer kick, snare et hats. Les hats peuvent être densifiés avec *8, *16 ou des crochets pour les rolls.",
              "whyItMatters": "Elle aide à construire un beat qui reste lisible même quand les détails se multiplient.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Créez une version sobre et une version avec rolls, puis choisissez celle qui groove le mieux.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise des samples. Conservez la ligne samples(...) au début du code, puis lancez la lecture dans Strudel. Le premier chargement peut demander quelques secondes."
            },
            {
              "id": "urb_03_02",
              "title": "Beat lo-fi",
              "concepts": [
                "lo-fi",
                "tempo lent"
              ],
              "exerciseType": "mini_performance",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Ajoutez une petite couleur harmonique lente au beat.",
              "concept": "Dans cette branche, la priorité est le groove. Chaque couche doit avoir une fonction rythmique immédiatement identifiable. Un beat urbain repose souvent sur une hiérarchie claire : le kick donne l’appui grave, la snare ou le clap marque la réponse, les hats remplissent la subdivision. La difficulté consiste à donner du mouvement sans saturer tous les espaces.",
              "starterCode": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(72/4)\n// 72 BPM perçu, 4 temps par cycle\n\nstack(\n  s(\"bd ~ ~ bd\"),\n  s(\"~ sd ~ sd\"),\n  s(\"hh*8\").gain(.14).degradeBy(.15)\n)",
              "task": "Ajoutez une petite couleur harmonique lente au beat.",
              "hintLevel1": "Commencez par kick et snare avant d’ajouter les hats.",
              "hintLevel2": "Si le beat devient chargé, baissez le gain des hats ou retirez quelques événements.",
              "solution": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(72/4)\n// 72 BPM perçu, 4 temps par cycle\n\nstack(\n  s(\"bd ~ ~ bd\").gain(.65),\n  s(\"~ sd ~ sd\").gain(.5),\n  s(\"hh*8\").gain(.14).degradeBy(.15),\n  note(\"c3 eb3 g3 bb3\").s(\"triangle\").slow(4).lpf(900).gain(.18)\n)",
              "whatToListenFor": "Écoutez l’équilibre entre l’appui grave, la réponse de snare et le mouvement des hats.",
              "commonMistake": "Densifier les hats sans baisser leur volume peut donner un beat agressif et peu lisible.",
              "summary": "À ce stade, vous devez savoir utiliser lo-fi, tempo lent dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": "Utilisez stack() pour séparer kick, snare et hats. Les hats peuvent être densifiés avec *8, *16 ou des crochets pour les rolls.",
              "whyItMatters": "Elle aide à construire un beat qui reste lisible même quand les détails se multiplient.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Créez une version sobre et une version avec rolls, puis choisissez celle qui groove le mieux.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise des samples. Conservez la ligne samples(...) au début du code, puis lancez la lecture dans Strudel. Le premier chargement peut demander quelques secondes."
            }
          ]
        }
      ]
    },
    {
      "id": "ambient",
      "title": "Ambient",
      "role": "Créer des textures lentes, des nappes et des beats calmes.",
      "unlockCondition": "Recommandé après le tronc commun",
      "finalProject": "Composer une pièce ambient avec nappe, texture, filtre et pulsation discrète.",
      "chapters": [
        {
          "id": "amb_01",
          "title": "Nappes",
          "learningGoal": "Programmer des sons longs et spatiaux.",
          "lessons": [
            {
              "id": "amb_01_01",
              "title": "Nappe simple",
              "concepts": [
                "sine",
                "slow",
                "enveloppe"
              ],
              "exerciseType": "modifier_code",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Rendez la nappe plus douce avec attack et release.",
              "concept": "Dans cette branche, la priorité est la durée, l’espace et la couleur sonore. Le silence et la lenteur font partie de la composition. .slow(n) étire un pattern sur plusieurs cycles. Le tempo global ne change pas. C’est seulement cette couche qui prend plus de temps pour accomplir son motif complet. Ce principe est très utile pour les nappes, les progressions lentes et les boucles polymétriques.",
              "starterCode": "setcpm(52/4)\n// 52 BPM perçu, 4 temps par cycle\n\nnote(\"[c3,eb3,g3,bb3]\").s(\"sine\").slow(8).gain(.3)",
              "task": "Rendez la nappe plus douce avec attack et release.",
              "hintLevel1": "Ajoutez .slow(2) après le pattern, sans changer le contenu entre guillemets.",
              "hintLevel2": "Si le motif disparaît trop longtemps, réduisez la valeur. Si la variation reste trop rapide, augmentez-la.",
              "solution": "setcpm(52/4)\n// 52 BPM perçu, 4 temps par cycle\n\nnote(\"[c3,eb3,g3,bb3]\").s(\"sine\").slow(8).attack(3).release(6).gain(.3)",
              "whatToListenFor": "Écoutez combien de cycles sont nécessaires pour entendre le motif complet revenir à son début.",
              "commonMistake": "Changer setcpm pour ralentir une seule couche ralentit tout le morceau. Utilisez .slow() quand vous voulez cibler un pattern précis.",
              "summary": "À ce stade, vous devez savoir utiliser sine, slow dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": "Ajoutez .slow(2), .slow(4) ou .slow(8) à la fin du pattern que vous voulez étirer. La transformation s’applique à ce qui se trouve juste avant elle.",
              "whyItMatters": "Elle permet de créer une texture qui évolue sans remplir tout l’espace sonore.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Essayez .slow(2), puis .slow(4). Notez à partir de quelle valeur le motif commence à devenir une texture.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise principalement le synthé interne de Strudel. Il permet de tester l’audio sans dépendre d’une banque de samples."
            },
            {
              "id": "amb_01_02",
              "title": "Espace",
              "concepts": [
                "room",
                "delay"
              ],
              "exerciseType": "modifier_code",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Ajoutez une sensation d'espace profond.",
              "concept": "Dans cette branche, la priorité est la durée, l’espace et la couleur sonore. Le silence et la lenteur font partie de la composition. .room() ajoute une impression d’espace. Une faible valeur suggère une pièce discrète. Une valeur élevée donne une sensation de profondeur, utile pour l’ambient, mais potentiellement floue sur des batteries rapides.",
              "starterCode": "setcpm(52/4)\n// 52 BPM perçu, 4 temps par cycle\n\nnote(\"[c3,eb3,g3,bb3]\").s(\"sine\").slow(8).attack(3).release(6).gain(.3)",
              "task": "Ajoutez une sensation d'espace profond.",
              "hintLevel1": "Ajoutez room sur une couche mélodique ou une nappe avant de l’ajouter sur la batterie.",
              "hintLevel2": "Comparez .room(.2) et .room(.9) sur le même code, sans changer le gain.",
              "solution": "setcpm(52/4)\n// 52 BPM perçu, 4 temps par cycle\n\nnote(\"[c3,eb3,g3,bb3]\").s(\"sine\").slow(8).attack(3).release(6).room(.9).delay(.2).delaytime(.5).gain(.25)",
              "whatToListenFor": "Écoutez la distance apparente du son et la queue de réverbération après chaque note.",
              "commonMistake": "Trop de reverb sur toutes les couches rend le groove imprécis. Gardez souvent le kick plus sec que la texture.",
              "summary": "À ce stade, vous devez savoir utiliser room, delay dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": "Utilisez .room(.2) pour un espace léger, .room(.7) pour une profondeur marquée et .room(.9) pour une nappe très réverbérée.",
              "whyItMatters": "Elle permet de créer une texture qui évolue sans remplir tout l’espace sonore.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Créez une version sèche, puis une version très spatiale, et choisissez celle qui reste la plus lisible.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise principalement le synthé interne de Strudel. Il permet de tester l’audio sans dépendre d’une banque de samples."
            }
          ]
        },
        {
          "id": "amb_02",
          "title": "Timbres et filtres",
          "learningGoal": "Sculpter une texture.",
          "lessons": [
            {
              "id": "amb_02_01",
              "title": "Son riche filtré",
              "concepts": [
                "sawtooth",
                "lpf"
              ],
              "exerciseType": "comparer_patterns",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Ajoutez un filtre pour rendre le sawtooth plus doux.",
              "concept": "Dans cette branche, la priorité est la durée, l’espace et la couleur sonore. Le silence et la lenteur font partie de la composition. Le timbre correspond à la couleur du son. En synthèse simple, sine est doux et pur, triangle reste doux mais un peu plus riche, sawtooth est plus brillant et square plus anguleux. Le choix du timbre influence fortement le style obtenu.",
              "starterCode": "setcpm(52/4)\n// 52 BPM perçu, 4 temps par cycle\n\nnote(\"[c3,eb3,g3,bb3]\").s(\"sawtooth\").slow(8).gain(.22)",
              "task": "Ajoutez un filtre pour rendre le sawtooth plus doux.",
              "hintLevel1": "Ne changez que le mot entre guillemets dans .s(...).",
              "hintLevel2": "Comparez sine et sawtooth à volume identique pour entendre la différence de richesse harmonique.",
              "solution": "setcpm(52/4)\n// 52 BPM perçu, 4 temps par cycle\n\nnote(\"[c3,eb3,g3,bb3]\").s(\"sawtooth\").slow(8).lpf(700).room(.8).gain(.22)",
              "whatToListenFor": "Écoutez l’épaisseur du son, sa douceur et sa capacité à rester au premier plan ou en arrière-plan.",
              "commonMistake": "Changer le timbre et le filtre en même temps rend difficile l’identification de ce qui produit la différence.",
              "summary": "À ce stade, vous devez savoir utiliser sawtooth, lpf dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": "La couleur sonore se règle ici avec .s(\"sine\"), .s(\"triangle\"), .s(\"sawtooth\") ou .s(\"square\").",
              "whyItMatters": "Elle permet de créer une texture qui évolue sans remplir tout l’espace sonore.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Choisissez le timbre le plus adapté à une nappe, puis celui qui conviendrait mieux à une basse.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise principalement le synthé interne de Strudel. Il permet de tester l’audio sans dépendre d’une banque de samples."
            },
            {
              "id": "amb_02_02",
              "title": "Filtre évolutif",
              "concepts": [
                "paramètre pattern",
                "mouvement"
              ],
              "exerciseType": "modifier_code",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Faites varier lentement la fréquence du filtre.",
              "concept": "Dans cette branche, la priorité est la durée, l’espace et la couleur sonore. Le silence et la lenteur font partie de la composition. Un filtre passe-bas laisse passer les fréquences graves et atténue les aigus. Avec .lpf(), on peut assombrir un son riche, créer une montée progressive ou rendre une texture plus douce.",
              "starterCode": "setcpm(52/4)\n// 52 BPM perçu, 4 temps par cycle\n\nnote(\"[c3,eb3,g3,bb3]\").s(\"sawtooth\").slow(8).lpf(700).room(.8).gain(.22)",
              "task": "Faites varier lentement la fréquence du filtre.",
              "hintLevel1": "Diminuez la valeur de lpf pour assombrir le son. Augmentez-la pour l’ouvrir.",
              "hintLevel2": "Sur un sawtooth, le filtre est particulièrement audible, car le son de départ contient beaucoup d’aigus.",
              "solution": "setcpm(52/4)\n// 52 BPM perçu, 4 temps par cycle\n\nnote(\"[c3,eb3,g3,bb3]\").s(\"sawtooth\").slow(8).lpf(\"<400 700 1200 600>\").room(.8).gain(.22)",
              "whatToListenFor": "Écoutez l’ouverture et la fermeture des aigus. Le filtre change la couleur sans nécessairement changer les notes.",
              "commonMistake": "Tester un filtre sur un sine très pur peut rendre l’effet difficile à percevoir. Utilisez plutôt sawtooth pour apprendre.",
              "summary": "À ce stade, vous devez savoir utiliser paramètre pattern, mouvement dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": ".lpf(800) fixe une fréquence de coupure. .lpf(\"<400 700 1200 600>\") transforme cette fréquence en pattern évolutif.",
              "whyItMatters": "Elle permet de créer une texture qui évolue sans remplir tout l’espace sonore.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Programmez une version sombre, une version ouverte et une version qui alterne entre les deux.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise principalement le synthé interne de Strudel. Il permet de tester l’audio sans dépendre d’une banque de samples."
            }
          ]
        },
        {
          "id": "amb_03",
          "title": "Ambient beat",
          "learningGoal": "Ajouter une pulsation discrète.",
          "lessons": [
            {
              "id": "amb_03_01",
              "title": "Kick espacé",
              "concepts": [
                "pulsation lente",
                "kick"
              ],
              "exerciseType": "completer_code",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Ajoutez un kick rare sous la nappe.",
              "concept": "Dans cette branche, la priorité est la durée, l’espace et la couleur sonore. Le silence et la lenteur font partie de la composition. L’ambient privilégie la durée, l’espace, le timbre et l’évolution lente. Le code doit laisser respirer les sons. Les notes longues, les attaques progressives, la reverb, le delay et les filtres sont plus importants qu’une densité élevée d’événements.",
              "starterCode": "setcpm(52/4)\n// 52 BPM perçu, 4 temps par cycle\n\nnote(\"[c3,eb3,g3,bb3]\").s(\"sine\").slow(8).room(.9).gain(.25)",
              "task": "Ajoutez un kick rare sous la nappe.",
              "hintLevel1": "Ralentissez la couche harmonique avant d’ajouter un beat.",
              "hintLevel2": "Baissez le gain des éléments rythmiques pour qu’ils soutiennent la texture sans la dominer.",
              "solution": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(52/4)\n// 52 BPM perçu, 4 temps par cycle\n\nstack(\n  note(\"[c3,eb3,g3,bb3]\").s(\"sine\").slow(8).room(.9).gain(.25),\n  s(\"bd ~ ~ ~\").gain(.25)\n)",
              "whatToListenFor": "Écoutez la continuité entre les sons, la profondeur de l’espace et la lenteur de l’évolution.",
              "commonMistake": "Ajouter trop de notes courtes transforme vite une nappe en mélodie active.",
              "summary": "À ce stade, vous devez savoir utiliser pulsation lente, kick dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": "Combinez souvent .slow(), .attack(), .release(), .room(), .delay() et .gain() sur des notes ou des accords.",
              "whyItMatters": "Elle permet de créer une texture qui évolue sans remplir tout l’espace sonore.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Créez une version sans beat, puis ajoutez une pulsation discrète sans changer la nappe.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise des samples. Conservez la ligne samples(...) au début du code, puis lancez la lecture dans Strudel. Le premier chargement peut demander quelques secondes."
            },
            {
              "id": "amb_03_02",
              "title": "Hats aériens",
              "concepts": [
                "hats discrets",
                "degradeBy"
              ],
              "exerciseType": "modifier_code",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Ajoutez des hats discrets et partiellement aléatoires.",
              "concept": "Dans cette branche, la priorité est la durée, l’espace et la couleur sonore. Le silence et la lenteur font partie de la composition. .degradeBy(x) retire des événements selon une probabilité. Avec une faible valeur, la variation reste discrète. Avec une valeur élevée, le motif se fragmente. C’est une technique utile pour humaniser des hats, alléger une texture ou créer du glitch contrôlé.",
              "starterCode": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(52/4)\n// 52 BPM perçu, 4 temps par cycle\n\nstack(\n  note(\"[c3,eb3,g3,bb3]\").s(\"sine\").slow(8).room(.9).gain(.25),\n  s(\"bd ~ ~ ~\").gain(.25)\n)",
              "task": "Ajoutez des hats discrets et partiellement aléatoires.",
              "hintLevel1": "Commencez avec une valeur basse, par exemple .degradeBy(.15).",
              "hintLevel2": "Appliquez d’abord degradeBy aux hats ou aux micro-fragments, pas au kick principal.",
              "solution": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(52/4)\n// 52 BPM perçu, 4 temps par cycle\n\nstack(\n  note(\"[c3,eb3,g3,bb3]\").s(\"sine\").slow(8).room(.9).gain(.25),\n  s(\"bd ~ ~ ~\").gain(.25),\n  s(\"~ hh ~ hh\").gain(.12).degradeBy(.2).room(.5)\n)",
              "whatToListenFor": "Écoutez si la disparition des événements crée de la respiration ou si elle détruit le groove.",
              "commonMistake": "Une valeur trop haute sur une couche structurante rend le motif instable et difficile à suivre.",
              "summary": "À ce stade, vous devez savoir utiliser hats discrets, degradeBy dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": ".degradeBy(.2) signifie qu’environ 20 pour cent des événements peuvent disparaître. La valeur doit rester entre 0 et 1.",
              "whyItMatters": "Elle permet de créer une texture qui évolue sans remplir tout l’espace sonore.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Comparez .degradeBy(.1), .degradeBy(.4) et .degradeBy(.7) sur le même motif.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise des samples. Conservez la ligne samples(...) au début du code, puis lancez la lecture dans Strudel. Le premier chargement peut demander quelques secondes."
            }
          ]
        }
      ]
    },
    {
      "id": "techno_house_trance",
      "title": "Techno, house et trance",
      "role": "Travailler le 4 to the floor, les basslines, les filtres et la tension.",
      "unlockCondition": "Recommandé après le tronc commun",
      "finalProject": "Créer une boucle dancefloor avec kick, hat, basse, stab et variation de filtre.",
      "chapters": [
        {
          "id": "dnc_01",
          "title": "4 to the floor",
          "learningGoal": "Programmer une base dancefloor régulière.",
          "lessons": [
            {
              "id": "dnc_01_01",
              "title": "Kick régulier",
              "concepts": [
                "4 to the floor",
                "kick"
              ],
              "exerciseType": "modifier_code",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Changez le tempo sans modifier la structure du kick.",
              "concept": "Dans cette branche, la régularité est un matériau. Les variations doivent renforcer la tension sans affaiblir l’appui du beat. Les styles 4 to the floor reposent sur une régularité assumée. Le kick sert de colonne vertébrale, le hat offbeat crée l’élan, la basse et les stabs ajoutent tension et identité. Les variations portent souvent sur le filtre, la densité et l’entrée ou la sortie des couches.",
              "starterCode": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(120/4)\n// 120 BPM perçu, 4 temps par cycle\n\ns(\"bd*4\").gain(.7)",
              "task": "Changez le tempo sans modifier la structure du kick.",
              "hintLevel1": "Gardez le kick simple et régulier. Ajoutez ensuite seulement le hat offbeat.",
              "hintLevel2": "Faites évoluer le filtre de la basse pour créer de la tension sans changer le rythme.",
              "solution": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(124/4)\n// 124 BPM perçu, 4 temps par cycle\n\ns(\"bd*4\").gain(.7)",
              "whatToListenFor": "Écoutez la stabilité du kick et la sensation d’avancée créée par le contretemps.",
              "commonMistake": "Complexifier le kick trop tôt fait perdre l’énergie dancefloor.",
              "summary": "À ce stade, vous devez savoir utiliser 4 to the floor, kick dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": "s(\"bd*4\") donne quatre kicks dans le cycle. s(\"~ hh ~ hh\") place les hats sur les contretemps. Une bassline peut être écrite avec note(...).s(\"sawtooth\").lpf(...).",
              "whyItMatters": "Elle aide à maintenir l’énergie tout en préparant des montées, des breaks et des reprises.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Préparez une version fermée du filtre, puis une version ouverte pour simuler une montée.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise des samples. Conservez la ligne samples(...) au début du code, puis lancez la lecture dans Strudel. Le premier chargement peut demander quelques secondes."
            },
            {
              "id": "dnc_01_02",
              "title": "Hat offbeat",
              "concepts": [
                "offbeat",
                "contretemps"
              ],
              "exerciseType": "completer_code",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Ajoutez un hat sur les contretemps.",
              "concept": "Dans cette branche, la régularité est un matériau. Les variations doivent renforcer la tension sans affaiblir l’appui du beat. Les styles 4 to the floor reposent sur une régularité assumée. Le kick sert de colonne vertébrale, le hat offbeat crée l’élan, la basse et les stabs ajoutent tension et identité. Les variations portent souvent sur le filtre, la densité et l’entrée ou la sortie des couches.",
              "starterCode": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(120/4)\n// 120 BPM perçu, 4 temps par cycle\n\ns(\"bd*4\").gain(.7)",
              "task": "Ajoutez un hat sur les contretemps.",
              "hintLevel1": "Gardez le kick simple et régulier. Ajoutez ensuite seulement le hat offbeat.",
              "hintLevel2": "Faites évoluer le filtre de la basse pour créer de la tension sans changer le rythme.",
              "solution": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(120/4)\n// 120 BPM perçu, 4 temps par cycle\n\nstack(\n  s(\"bd*4\").gain(.7),\n  s(\"~ hh ~ hh\").gain(.25)\n)",
              "whatToListenFor": "Écoutez la stabilité du kick et la sensation d’avancée créée par le contretemps.",
              "commonMistake": "Complexifier le kick trop tôt fait perdre l’énergie dancefloor.",
              "summary": "À ce stade, vous devez savoir utiliser offbeat, contretemps dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": "s(\"bd*4\") donne quatre kicks dans le cycle. s(\"~ hh ~ hh\") place les hats sur les contretemps. Une bassline peut être écrite avec note(...).s(\"sawtooth\").lpf(...).",
              "whyItMatters": "Elle aide à maintenir l’énergie tout en préparant des montées, des breaks et des reprises.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Préparez une version fermée du filtre, puis une version ouverte pour simuler une montée.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise des samples. Conservez la ligne samples(...) au début du code, puis lancez la lecture dans Strudel. Le premier chargement peut demander quelques secondes."
            }
          ]
        },
        {
          "id": "dnc_02",
          "title": "Bassline et stabs",
          "learningGoal": "Construire une base harmonique et rythmique.",
          "lessons": [
            {
              "id": "dnc_02_01",
              "title": "Bassline",
              "concepts": [
                "bassline",
                "filtre"
              ],
              "exerciseType": "modifier_code",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Filtrez la basse pour la rendre plus ronde.",
              "concept": "Dans cette branche, la régularité est un matériau. Les variations doivent renforcer la tension sans affaiblir l’appui du beat. Un filtre passe-bas laisse passer les fréquences graves et atténue les aigus. Avec .lpf(), on peut assombrir un son riche, créer une montée progressive ou rendre une texture plus douce.",
              "starterCode": "setcpm(124/4)\n// 124 BPM perçu, 4 temps par cycle\n\nnote(\"c2 ~ c2 eb2\").s(\"sawtooth\").gain(.3)",
              "task": "Filtrez la basse pour la rendre plus ronde.",
              "hintLevel1": "Diminuez la valeur de lpf pour assombrir le son. Augmentez-la pour l’ouvrir.",
              "hintLevel2": "Sur un sawtooth, le filtre est particulièrement audible, car le son de départ contient beaucoup d’aigus.",
              "solution": "setcpm(124/4)\n// 124 BPM perçu, 4 temps par cycle\n\nnote(\"c2 ~ c2 eb2\").s(\"sawtooth\").lpf(500).gain(.3)",
              "whatToListenFor": "Écoutez l’ouverture et la fermeture des aigus. Le filtre change la couleur sans nécessairement changer les notes.",
              "commonMistake": "Tester un filtre sur un sine très pur peut rendre l’effet difficile à percevoir. Utilisez plutôt sawtooth pour apprendre.",
              "summary": "À ce stade, vous devez savoir utiliser bassline, filtre dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": ".lpf(800) fixe une fréquence de coupure. .lpf(\"<400 700 1200 600>\") transforme cette fréquence en pattern évolutif.",
              "whyItMatters": "Elle aide à maintenir l’énergie tout en préparant des montées, des breaks et des reprises.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Programmez une version sombre, une version ouverte et une version qui alterne entre les deux.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise principalement le synthé interne de Strudel. Il permet de tester l’audio sans dépendre d’une banque de samples."
            },
            {
              "id": "dnc_02_02",
              "title": "Stab filtré",
              "concepts": [
                "stab",
                "accord court"
              ],
              "exerciseType": "modifier_code",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Rendez l'accord plus court et filtré.",
              "concept": "Dans cette branche, la régularité est un matériau. Les variations doivent renforcer la tension sans affaiblir l’appui du beat. note(\"...\") joue des hauteurs musicales. Une note comme c3 indique un nom de note et un registre. Plus le nombre d’octave est élevé, plus le son est aigu. Les notes peuvent former une mélodie si elles sont successives, ou un accord si elles sont regroupées entre crochets avec des virgules.",
              "starterCode": "setcpm(124/4)\n// 124 BPM perçu, 4 temps par cycle\n\nnote(\"c4 eb4 g4\").s(\"sawtooth\").gain(.22)",
              "task": "Rendez l'accord plus court et filtré.",
              "hintLevel1": "Modifiez le nom ou l’octave d’une seule note pour entendre précisément son effet.",
              "hintLevel2": "Pour un accord, vérifiez la présence des crochets et des virgules : [c3,e3,g3].",
              "solution": "setcpm(124/4)\n// 124 BPM perçu, 4 temps par cycle\n\nnote(\"c4 eb4 g4\").s(\"sawtooth\").lpf(900).release(.2).gain(.22)",
              "whatToListenFor": "Distinguez une succession de notes d’un accord simultané. Ce sont deux gestes de composition différents.",
              "commonMistake": "Oublier les virgules dans un accord transforme souvent l’écriture en séquence, ce qui change totalement le résultat musical.",
              "summary": "À ce stade, vous devez savoir utiliser stab, accord court dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": "note(\"c3 e3 g3\") joue une séquence. note(\"[c3,e3,g3]\") joue les trois notes ensemble. La fonction .s(\"sine\") choisit ensuite le timbre.",
              "whyItMatters": "Elle aide à maintenir l’énergie tout en préparant des montées, des breaks et des reprises.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Écrivez la même matière en version mélodie, puis en version accord, et comparez la sensation d’espace.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise principalement le synthé interne de Strudel. Il permet de tester l’audio sans dépendre d’une banque de samples."
            }
          ]
        },
        {
          "id": "dnc_03",
          "title": "Montées et tension",
          "learningGoal": "Créer une évolution progressive.",
          "lessons": [
            {
              "id": "dnc_03_01",
              "title": "Ouvrir un filtre",
              "concepts": [
                "filtre",
                "tension"
              ],
              "exerciseType": "comparer_patterns",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Remplacez le filtre fixe par une progression de valeurs.",
              "concept": "Dans cette branche, la régularité est un matériau. Les variations doivent renforcer la tension sans affaiblir l’appui du beat. Un filtre passe-bas laisse passer les fréquences graves et atténue les aigus. Avec .lpf(), on peut assombrir un son riche, créer une montée progressive ou rendre une texture plus douce.",
              "starterCode": "setcpm(124/4)\n// 124 BPM perçu, 4 temps par cycle\n\nnote(\"c2 ~ c2 eb2\").s(\"sawtooth\").lpf(300).gain(.3)",
              "task": "Remplacez le filtre fixe par une progression de valeurs.",
              "hintLevel1": "Diminuez la valeur de lpf pour assombrir le son. Augmentez-la pour l’ouvrir.",
              "hintLevel2": "Sur un sawtooth, le filtre est particulièrement audible, car le son de départ contient beaucoup d’aigus.",
              "solution": "setcpm(124/4)\n// 124 BPM perçu, 4 temps par cycle\n\nnote(\"c2 ~ c2 eb2\").s(\"sawtooth\").lpf(\"<300 500 800 1200>\").gain(.3)",
              "whatToListenFor": "Écoutez l’ouverture et la fermeture des aigus. Le filtre change la couleur sans nécessairement changer les notes.",
              "commonMistake": "Tester un filtre sur un sine très pur peut rendre l’effet difficile à percevoir. Utilisez plutôt sawtooth pour apprendre.",
              "summary": "À ce stade, vous devez savoir utiliser filtre, tension dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": ".lpf(800) fixe une fréquence de coupure. .lpf(\"<400 700 1200 600>\") transforme cette fréquence en pattern évolutif.",
              "whyItMatters": "Elle aide à maintenir l’énergie tout en préparant des montées, des breaks et des reprises.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Programmez une version sombre, une version ouverte et une version qui alterne entre les deux.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise principalement le synthé interne de Strudel. Il permet de tester l’audio sans dépendre d’une banque de samples."
            },
            {
              "id": "dnc_03_02",
              "title": "Break et reprise",
              "concepts": [
                "forme",
                "break",
                "reprise"
              ],
              "exerciseType": "mini_performance",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Préparez une version sans kick pour créer un break.",
              "concept": "Dans cette branche, la régularité est un matériau. Les variations doivent renforcer la tension sans affaiblir l’appui du beat. Les styles 4 to the floor reposent sur une régularité assumée. Le kick sert de colonne vertébrale, le hat offbeat crée l’élan, la basse et les stabs ajoutent tension et identité. Les variations portent souvent sur le filtre, la densité et l’entrée ou la sortie des couches.",
              "starterCode": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(124/4)\n// 124 BPM perçu, 4 temps par cycle\n\nstack(\n  s(\"bd*4\").gain(.7),\n  s(\"~ hh ~ hh\").gain(.25),\n  note(\"c2 ~ c2 eb2\").s(\"sawtooth\").lpf(\"<400 700 1200 900>\").gain(.3)\n)",
              "task": "Préparez une version sans kick pour créer un break.",
              "hintLevel1": "Gardez le kick simple et régulier. Ajoutez ensuite seulement le hat offbeat.",
              "hintLevel2": "Faites évoluer le filtre de la basse pour créer de la tension sans changer le rythme.",
              "solution": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(124/4)\n// 124 BPM perçu, 4 temps par cycle\n\nstack(\n  // s(\"bd*4\").gain(.7),\n  s(\"~ hh ~ hh\").gain(.25),\n  note(\"c2 ~ c2 eb2\").s(\"sawtooth\").lpf(\"<400 700 1200 900>\").gain(.3)\n)",
              "whatToListenFor": "Écoutez la stabilité du kick et la sensation d’avancée créée par le contretemps.",
              "commonMistake": "Complexifier le kick trop tôt fait perdre l’énergie dancefloor.",
              "summary": "À ce stade, vous devez savoir utiliser forme, break dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": "s(\"bd*4\") donne quatre kicks dans le cycle. s(\"~ hh ~ hh\") place les hats sur les contretemps. Une bassline peut être écrite avec note(...).s(\"sawtooth\").lpf(...).",
              "whyItMatters": "Elle aide à maintenir l’énergie tout en préparant des montées, des breaks et des reprises.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Préparez une version fermée du filtre, puis une version ouverte pour simuler une montée.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise des samples. Conservez la ligne samples(...) au début du code, puis lancez la lecture dans Strudel. Le premier chargement peut demander quelques secondes."
            }
          ]
        }
      ]
    },
    {
      "id": "glitch_broken_beats",
      "title": "Glitch et broken beats",
      "role": "Programmer des rythmes fragmentés, des accidents et des breaks découpés.",
      "unlockCondition": "Recommandé après le tronc commun",
      "finalProject": "Créer un beat glitch avec ancrage stable, couche instable et micro-fragments.",
      "chapters": [
        {
          "id": "gbb_01",
          "title": "Rythmes cassés",
          "learningGoal": "Casser la régularité sans perdre le groove.",
          "lessons": [
            {
              "id": "gbb_01_01",
              "title": "Crochets",
              "concepts": [
                "subdivision",
                "crochets"
              ],
              "exerciseType": "modifier_code",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Ajoutez une couche de hats pour mieux sentir le groove.",
              "concept": "Dans cette branche, les accidents doivent rester contrôlés. Un élément stable doit permettre à l’oreille de suivre le morceau. Le glitch travaille avec des fragments, des coupures, des inversions et des irrégularités. Pour rester musical, il doit conserver un repère : une pulsation, une basse, une texture stable ou une phrase reconnaissable.",
              "starterCode": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(92/4)\n// 92 BPM perçu, 4 temps par cycle\n\ns(\"[bd ~] [~ sd] [bd bd] [~ sd]\").gain(.6)",
              "task": "Ajoutez une couche de hats pour mieux sentir le groove.",
              "hintLevel1": "Gardez un ancrage stable avant d’ajouter les accidents.",
              "hintLevel2": "Appliquez les transformations glitch à une couche secondaire plutôt qu’à tout le stack.",
              "solution": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(92/4)\n// 92 BPM perçu, 4 temps par cycle\n\ns(\"[bd ~] [~ sd] [bd bd] [~ sd], hh*8\").gain(.55)",
              "whatToListenFor": "Écoutez la tension entre stabilité et accident. Le beat doit rester identifiable malgré les fragments.",
              "commonMistake": "Glitcher toutes les couches en même temps rend le résultat aléatoire et peu contrôlable.",
              "summary": "À ce stade, vous devez savoir utiliser subdivision, crochets dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": "Les crochets créent des subdivisions locales. speed(\"-1\") inverse la lecture d’un sample. degradeBy() retire certains événements. slice() permet de recomposer un break.",
              "whyItMatters": "Elle sert à créer de l’instabilité sans perdre complètement le groove.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Créez une version lisible, puis augmentez progressivement le niveau d’accident jusqu’au seuil de rupture.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise des samples. Conservez la ligne samples(...) au début du code, puis lancez la lecture dans Strudel. Le premier chargement peut demander quelques secondes."
            },
            {
              "id": "gbb_01_02",
              "title": "Densité locale",
              "concepts": [
                "micro-subdivision",
                "hats"
              ],
              "exerciseType": "completer_code",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Remplacez les hats réguliers par des hats plus irréguliers.",
              "concept": "Dans cette branche, les accidents doivent rester contrôlés. Un élément stable doit permettre à l’oreille de suivre le morceau. .fast(n) et l’opérateur * augmentent la densité d’un motif dans le cycle. Le résultat n’est pas seulement plus rapide. Il occupe davantage de positions et peut devenir une pulsation, un tremblement ou une micro-texture.",
              "starterCode": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(92/4)\n// 92 BPM perçu, 4 temps par cycle\n\ns(\"[bd ~] [~ sd] [bd bd] [~ sd], hh*8\").gain(.5)",
              "task": "Remplacez les hats réguliers par des hats plus irréguliers.",
              "hintLevel1": "Augmentez la valeur après l’étoile pour créer plus d’attaques dans le même cycle.",
              "hintLevel2": "Pour un charley régulier, commencez par hh*8, puis comparez avec hh*16.",
              "solution": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(92/4)\n// 92 BPM perçu, 4 temps par cycle\n\ns(\"[bd ~] [~ sd] [bd bd] [~ sd], [hh ~ hh hh]*2\").gain(.5)",
              "whatToListenFor": "Écoutez la densité, pas seulement la vitesse. Le motif doit servir le groove plutôt que saturer l’espace.",
              "commonMistake": "Multiplier tous les éléments rend vite le beat confus. Densifiez d’abord les hats, pas le kick et la snare.",
              "summary": "À ce stade, vous devez savoir utiliser micro-subdivision, hats dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": "s(\"hh*8\") signifie que le sample hh est répété huit fois dans le cycle. On peut aussi écrire .fast(2) après un pattern existant.",
              "whyItMatters": "Elle sert à créer de l’instabilité sans perdre complètement le groove.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Créez trois versions du même motif avec *4, *8 et *16, puis gardez celle qui laisse le plus de place au reste.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise des samples. Conservez la ligne samples(...) au début du code, puis lancez la lecture dans Strudel. Le premier chargement peut demander quelques secondes."
            }
          ]
        },
        {
          "id": "gbb_02",
          "title": "Glitch contrôlé",
          "learningGoal": "Introduire des accidents sonores maîtrisés.",
          "lessons": [
            {
              "id": "gbb_02_01",
              "title": "Fragmenter",
              "concepts": [
                "degradeBy",
                "hasard"
              ],
              "exerciseType": "modifier_code",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Supprimez aléatoirement une partie des hats.",
              "concept": "Dans cette branche, les accidents doivent rester contrôlés. Un élément stable doit permettre à l’oreille de suivre le morceau. .degradeBy(x) retire des événements selon une probabilité. Avec une faible valeur, la variation reste discrète. Avec une valeur élevée, le motif se fragmente. C’est une technique utile pour humaniser des hats, alléger une texture ou créer du glitch contrôlé.",
              "starterCode": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(92/4)\n// 92 BPM perçu, 4 temps par cycle\n\ns(\"hh*16\").gain(.18)",
              "task": "Supprimez aléatoirement une partie des hats.",
              "hintLevel1": "Commencez avec une valeur basse, par exemple .degradeBy(.15).",
              "hintLevel2": "Appliquez d’abord degradeBy aux hats ou aux micro-fragments, pas au kick principal.",
              "solution": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(92/4)\n// 92 BPM perçu, 4 temps par cycle\n\ns(\"hh*16\").gain(.18).degradeBy(.35)",
              "whatToListenFor": "Écoutez si la disparition des événements crée de la respiration ou si elle détruit le groove.",
              "commonMistake": "Une valeur trop haute sur une couche structurante rend le motif instable et difficile à suivre.",
              "summary": "À ce stade, vous devez savoir utiliser degradeBy, hasard dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": ".degradeBy(.2) signifie qu’environ 20 pour cent des événements peuvent disparaître. La valeur doit rester entre 0 et 1.",
              "whyItMatters": "Elle sert à créer de l’instabilité sans perdre complètement le groove.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Comparez .degradeBy(.1), .degradeBy(.4) et .degradeBy(.7) sur le même motif.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise des samples. Conservez la ligne samples(...) au début du code, puis lancez la lecture dans Strudel. Le premier chargement peut demander quelques secondes."
            },
            {
              "id": "gbb_02_02",
              "title": "Vitesse et reverse",
              "concepts": [
                "speed",
                "reverse"
              ],
              "exerciseType": "modifier_code",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Faites varier la vitesse avec une valeur négative pour inverser certains sons.",
              "concept": "Dans cette branche, les accidents doivent rester contrôlés. Un élément stable doit permettre à l’oreille de suivre le morceau. Le glitch travaille avec des fragments, des coupures, des inversions et des irrégularités. Pour rester musical, il doit conserver un repère : une pulsation, une basse, une texture stable ou une phrase reconnaissable.",
              "starterCode": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(92/4)\n// 92 BPM perçu, 4 temps par cycle\n\ns(\"hh*16\").gain(.18).degradeBy(.25)",
              "task": "Faites varier la vitesse avec une valeur négative pour inverser certains sons.",
              "hintLevel1": "Gardez un ancrage stable avant d’ajouter les accidents.",
              "hintLevel2": "Appliquez les transformations glitch à une couche secondaire plutôt qu’à tout le stack.",
              "solution": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(92/4)\n// 92 BPM perçu, 4 temps par cycle\n\ns(\"hh*16\").gain(.18).speed(\"<1 2 .5 -1>\").degradeBy(.25)",
              "whatToListenFor": "Écoutez la tension entre stabilité et accident. Le beat doit rester identifiable malgré les fragments.",
              "commonMistake": "Glitcher toutes les couches en même temps rend le résultat aléatoire et peu contrôlable.",
              "summary": "À ce stade, vous devez savoir utiliser speed, reverse dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": "Les crochets créent des subdivisions locales. speed(\"-1\") inverse la lecture d’un sample. degradeBy() retire certains événements. slice() permet de recomposer un break.",
              "whyItMatters": "Elle sert à créer de l’instabilité sans perdre complètement le groove.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Créez une version lisible, puis augmentez progressivement le niveau d’accident jusqu’au seuil de rupture.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise des samples. Conservez la ligne samples(...) au début du code, puis lancez la lecture dans Strudel. Le premier chargement peut demander quelques secondes."
            }
          ]
        },
        {
          "id": "gbb_03",
          "title": "Breaks découpés",
          "learningGoal": "Réorganiser un breakbeat par slices.",
          "lessons": [
            {
              "id": "gbb_03_01",
              "title": "Découper",
              "concepts": [
                "slice",
                "break",
                "sample"
              ],
              "exerciseType": "modifier_code",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Écoutez le break rejoué tranche par tranche.",
              "concept": "Un break est un enregistrement rythmique que l’on peut découper. Avec slice, Strudel divise le sample en tranches numérotées. Rejouer 0 1 2 3 4 5 6 7 revient à lire les tranches dans l’ordre, ce qui sert de point de référence avant de les réorganiser.",
              "starterCode": "setcpm(92/4)\n// 92 BPM perçu, 4 temps par cycle\n\nsamples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\ns(\"breaks125\").fit().slice(8, \"0 1 2 3 4 5 6 7\").gain(.7)",
              "task": "Écoutez le break rejoué tranche par tranche.",
              "hintLevel1": "Ne modifiez pas le nombre 8 au début. Il indique le nombre de tranches.",
              "hintLevel2": "Écoutez d’abord l’ordre naturel 0 1 2 3 4 5 6 7 avant d’essayer une version recomposée.",
              "solution": "setcpm(92/4)\n// 92 BPM perçu, 4 temps par cycle\n\nsamples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\ns(\"breaks125\").fit().slice(8, \"0 1 2 3 4 5 6 7\").gain(.7)",
              "whatToListenFor": "Écoutez si le break reste fluide ou s’il devient volontairement heurté.",
              "commonMistake": "Modifier à la fois le nombre de slices, l’ordre et la vitesse rend le résultat difficile à comprendre.",
              "summary": "À ce stade, vous devez savoir utiliser slice, break dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": ".fit() adapte le break à la durée de l’événement. .slice(8, \"0 1 2 3 4 5 6 7\") découpe le break en huit parties et les rejoue dans l’ordre.",
              "whyItMatters": "Elle sert à créer de l’instabilité sans perdre complètement le groove.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Remplacez seulement le dernier 7 par 0 et écoutez si la fin du break boucle autrement.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise des samples. Conservez la ligne samples(...) au début du code, puis lancez la lecture dans Strudel. Le premier chargement peut demander quelques secondes."
            },
            {
              "id": "gbb_03_02",
              "title": "Réordonner",
              "concepts": [
                "resequence",
                "glitch"
              ],
              "exerciseType": "modifier_code",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Réorganisez quelques tranches pour créer un break plus accidenté.",
              "concept": "Réordonner un break consiste à traiter le sample comme une matière découpable. Les nombres ne sont pas des notes, mais des indices de tranches. Les crochets permettent de compresser plusieurs tranches dans une même position, ce qui produit des répétitions rapides ou des bégaiements.",
              "starterCode": "setcpm(92/4)\n// 92 BPM perçu, 4 temps par cycle\n\nsamples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\ns(\"breaks125\").fit().slice(8, \"0 1 2 3 4 5 6 7\").gain(.7)",
              "task": "Réorganisez quelques tranches pour créer un break plus accidenté.",
              "hintLevel1": "Changez un seul groupe de tranches à la fois. Commencez par [2 2].",
              "hintLevel2": "Si le break devient illisible, revenez à 0 1 2 3 4 5 6 7, puis ajoutez une seule altération.",
              "solution": "setcpm(92/4)\n// 92 BPM perçu, 4 temps par cycle\n\nsamples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\ns(\"breaks125\").fit().slice(8, \"0 1 [2 2] 3 <4 7> 5 [6 0] 7\").gain(.7)",
              "whatToListenFor": "Écoutez si le break reste fluide ou s’il devient volontairement heurté.",
              "commonMistake": "Modifier à la fois le nombre de slices, l’ordre et la vitesse rend le résultat difficile à comprendre.",
              "summary": "À ce stade, vous devez savoir utiliser resequence, glitch dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": "Dans .slice(8, \"0 1 [2 2] 3 <4 7> 5 [6 0] 7\"), [2 2] répète rapidement la tranche 2. <4 7> alterne entre deux possibilités sur plusieurs cycles.",
              "whyItMatters": "Elle sert à créer de l’instabilité sans perdre complètement le groove.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Créez une version qui ne change que deux tranches par rapport à l’ordre naturel.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise des samples. Conservez la ligne samples(...) au début du code, puis lancez la lecture dans Strudel. Le premier chargement peut demander quelques secondes."
            }
          ]
        },
        {
          "id": "gbb_04",
          "title": "Polyrythmie glitch",
          "learningGoal": "Créer un groove instable par répartitions asymétriques.",
          "lessons": [
            {
              "id": "gbb_04_01",
              "title": "Euclidiens superposés",
              "concepts": [
                "euclid",
                "polyrythmie"
              ],
              "exerciseType": "comparer_patterns",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Écoutez la relation entre les trois répartitions.",
              "concept": "Dans cette branche, les accidents doivent rester contrôlés. Un élément stable doit permettre à l’oreille de suivre le morceau. La polyrythmie superpose plusieurs répartitions rythmiques. Un motif peut placer trois attaques dans le même cadre où un autre en place quatre. L’intérêt n’est pas de compliquer gratuitement le beat, mais de créer une tension entre plusieurs manières de découper le temps.",
              "starterCode": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(92/4)\n// 92 BPM perçu, 4 temps par cycle\n\nstack(\n  s(\"bd(5,16)\").gain(.7),\n  s(\"sd(3,8,2)\").gain(.45),\n  s(\"hh(7,16)\").gain(.18)\n)",
              "task": "Écoutez la relation entre les trois répartitions.",
              "hintLevel1": "Gardez une couche simple, puis modifiez seulement le nombre de pulses de l’autre couche.",
              "hintLevel2": "Comparez (3,8), (4,8) et (5,8) pour entendre comment la répartition change.",
              "solution": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(92/4)\n// 92 BPM perçu, 4 temps par cycle\n\nstack(\n  s(\"bd(5,16)\").gain(.7),\n  s(\"sd(3,8,2)\").gain(.45),\n  s(\"hh(7,16)\").gain(.18)\n)",
              "whatToListenFor": "Écoutez le point où les couches semblent se rejoindre, puis l’endroit où elles se contredisent.",
              "commonMistake": "Ajouter trop de sons différents masque la relation rythmique. Utilisez des sons contrastés et peu nombreux.",
              "summary": "À ce stade, vous devez savoir utiliser euclid, polyrythmie dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": "La forme bd(3,8) signifie que trois attaques sont réparties sur huit positions. Un troisième nombre, comme bd(3,8,1), décale la répartition.",
              "whyItMatters": "Elle sert à créer de l’instabilité sans perdre complètement le groove.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Créez une version stable avec 4 contre 4, puis une version instable avec 3 contre 4.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise des samples. Conservez la ligne samples(...) au début du code, puis lancez la lecture dans Strudel. Le premier chargement peut demander quelques secondes."
            }
          ]
        }
      ]
    },
    {
      "id": "theorie",
      "title": "Théorie musicale appliquée",
      "role": "Donner des repères sur notes, accords, progressions, mélodies, rythmes et forme.",
      "unlockCondition": "Accessible après les notes et la synthèse",
      "finalProject": "Composer une mini-pièce avec progression harmonique, mélodie et forme simple.",
      "chapters": [
        {
          "id": "thr_01",
          "title": "Notes et registres",
          "learningGoal": "Comprendre les noms de notes et les octaves.",
          "lessons": [
            {
              "id": "thr_01_01",
              "title": "c3, c4, c5",
              "concepts": [
                "note",
                "octave"
              ],
              "exerciseType": "comparer_patterns",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Écoutez la différence de registre entre les trois notes.",
              "concept": "La théorie est traitée comme un outil pratique. Chaque notion doit être immédiatement testée dans Strudel. La théorie musicale appliquée sert ici à mieux choisir les sons, pas à écrire une analyse formelle. Les notions de registre, accord, progression, phrase et forme deviennent immédiatement manipulables dans le code.",
              "starterCode": "setcpm(76/4)\n// 76 BPM perçu, 4 temps par cycle\n\nnote(\"c3 c4 c5\").s(\"sine\")",
              "task": "Écoutez la différence de registre entre les trois notes.",
              "hintLevel1": "Changez une seule note ou une seule octave pour entendre l’impact musical de la modification.",
              "hintLevel2": "Comparez deux versions proches, par exemple mineur et majeur, avant de composer librement.",
              "solution": "setcpm(76/4)\n// 76 BPM perçu, 4 temps par cycle\n\nnote(\"c3 c4 c5\").s(\"sine\")",
              "whatToListenFor": "Écoutez la couleur, la tension et la résolution plutôt que seulement la justesse technique.",
              "commonMistake": "Changer trop de notes à la fois empêche d’identifier la fonction de chaque note dans l’accord ou la phrase.",
              "summary": "À ce stade, vous devez savoir utiliser note, octave dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": "Les notes s’écrivent avec leur nom et leur octave. Les accords utilisent souvent des notes simultanées entre crochets. Les progressions peuvent être représentées par des motifs lents.",
              "whyItMatters": "Elle transforme une notion musicale en geste concret de programmation.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Produisez deux couleurs différentes avec presque le même code.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise principalement le synthé interne de Strudel. Il permet de tester l’audio sans dépendre d’une banque de samples."
            }
          ]
        },
        {
          "id": "thr_02",
          "title": "Accords",
          "learningGoal": "Construire des couleurs harmoniques simples.",
          "lessons": [
            {
              "id": "thr_02_01",
              "title": "Mineur",
              "concepts": [
                "accord",
                "mineur"
              ],
              "exerciseType": "comparer_patterns",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Écoutez la couleur de cet accord mineur.",
              "concept": "La théorie est traitée comme un outil pratique. Chaque notion doit être immédiatement testée dans Strudel. La théorie musicale appliquée sert ici à mieux choisir les sons, pas à écrire une analyse formelle. Les notions de registre, accord, progression, phrase et forme deviennent immédiatement manipulables dans le code.",
              "starterCode": "setcpm(76/4)\n// 76 BPM perçu, 4 temps par cycle\n\nnote(\"[c3,eb3,g3]\").s(\"sine\").slow(4)",
              "task": "Écoutez la couleur de cet accord mineur.",
              "hintLevel1": "Changez une seule note ou une seule octave pour entendre l’impact musical de la modification.",
              "hintLevel2": "Comparez deux versions proches, par exemple mineur et majeur, avant de composer librement.",
              "solution": "setcpm(76/4)\n// 76 BPM perçu, 4 temps par cycle\n\nnote(\"[c3,eb3,g3]\").s(\"sine\").slow(4)",
              "whatToListenFor": "Écoutez la couleur, la tension et la résolution plutôt que seulement la justesse technique.",
              "commonMistake": "Changer trop de notes à la fois empêche d’identifier la fonction de chaque note dans l’accord ou la phrase.",
              "summary": "À ce stade, vous devez savoir utiliser accord, mineur dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": "Les notes s’écrivent avec leur nom et leur octave. Les accords utilisent souvent des notes simultanées entre crochets. Les progressions peuvent être représentées par des motifs lents.",
              "whyItMatters": "Elle transforme une notion musicale en geste concret de programmation.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Produisez deux couleurs différentes avec presque le même code.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise principalement le synthé interne de Strudel. Il permet de tester l’audio sans dépendre d’une banque de samples."
            },
            {
              "id": "thr_02_02",
              "title": "Majeur",
              "concepts": [
                "accord",
                "majeur"
              ],
              "exerciseType": "comparer_patterns",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Comparez cette couleur avec l'accord mineur précédent.",
              "concept": "La théorie est traitée comme un outil pratique. Chaque notion doit être immédiatement testée dans Strudel. La théorie musicale appliquée sert ici à mieux choisir les sons, pas à écrire une analyse formelle. Les notions de registre, accord, progression, phrase et forme deviennent immédiatement manipulables dans le code.",
              "starterCode": "setcpm(76/4)\n// 76 BPM perçu, 4 temps par cycle\n\nnote(\"[c3,e3,g3]\").s(\"sine\").slow(4)",
              "task": "Comparez cette couleur avec l'accord mineur précédent.",
              "hintLevel1": "Changez une seule note ou une seule octave pour entendre l’impact musical de la modification.",
              "hintLevel2": "Comparez deux versions proches, par exemple mineur et majeur, avant de composer librement.",
              "solution": "setcpm(76/4)\n// 76 BPM perçu, 4 temps par cycle\n\nnote(\"[c3,e3,g3]\").s(\"sine\").slow(4)",
              "whatToListenFor": "Écoutez la couleur, la tension et la résolution plutôt que seulement la justesse technique.",
              "commonMistake": "Changer trop de notes à la fois empêche d’identifier la fonction de chaque note dans l’accord ou la phrase.",
              "summary": "À ce stade, vous devez savoir utiliser accord, majeur dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": "Les notes s’écrivent avec leur nom et leur octave. Les accords utilisent souvent des notes simultanées entre crochets. Les progressions peuvent être représentées par des motifs lents.",
              "whyItMatters": "Elle transforme une notion musicale en geste concret de programmation.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Produisez deux couleurs différentes avec presque le même code.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise principalement le synthé interne de Strudel. Il permet de tester l’audio sans dépendre d’une banque de samples."
            }
          ]
        },
        {
          "id": "thr_03",
          "title": "Progressions",
          "learningGoal": "Enchaîner plusieurs accords pour créer un mouvement.",
          "lessons": [
            {
              "id": "thr_03_01",
              "title": "Progression simple",
              "concepts": [
                "progression",
                "accords"
              ],
              "exerciseType": "modifier_code",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Ajoutez une deuxième couleur en alternance avec un autre accord.",
              "concept": "La théorie est traitée comme un outil pratique. Chaque notion doit être immédiatement testée dans Strudel. La théorie musicale appliquée sert ici à mieux choisir les sons, pas à écrire une analyse formelle. Les notions de registre, accord, progression, phrase et forme deviennent immédiatement manipulables dans le code.",
              "starterCode": "setcpm(76/4)\n// 76 BPM perçu, 4 temps par cycle\n\nnote(\"[c3,eb3,g3,bb3]\").s(\"sine\").slow(4).room(.7)",
              "task": "Ajoutez une deuxième couleur en alternance avec un autre accord.",
              "hintLevel1": "Changez une seule note ou une seule octave pour entendre l’impact musical de la modification.",
              "hintLevel2": "Comparez deux versions proches, par exemple mineur et majeur, avant de composer librement.",
              "solution": "setcpm(76/4)\n// 76 BPM perçu, 4 temps par cycle\n\nnote(\"<c3 eb3 g3 bb3 f3 ab3 c4 eb4>\").s(\"sine\").slow(4).room(.7).gain(.25)",
              "whatToListenFor": "Écoutez la couleur, la tension et la résolution plutôt que seulement la justesse technique.",
              "commonMistake": "Changer trop de notes à la fois empêche d’identifier la fonction de chaque note dans l’accord ou la phrase.",
              "summary": "À ce stade, vous devez savoir utiliser progression, accords dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": "Les notes s’écrivent avec leur nom et leur octave. Les accords utilisent souvent des notes simultanées entre crochets. Les progressions peuvent être représentées par des motifs lents.",
              "whyItMatters": "Elle transforme une notion musicale en geste concret de programmation.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Produisez deux couleurs différentes avec presque le même code.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise principalement le synthé interne de Strudel. Il permet de tester l’audio sans dépendre d’une banque de samples."
            }
          ]
        },
        {
          "id": "thr_04",
          "title": "Mélodies",
          "learningGoal": "Créer une phrase mélodique et la varier.",
          "lessons": [
            {
              "id": "thr_04_01",
              "title": "Phrase courte",
              "concepts": [
                "mélodie",
                "phrase"
              ],
              "exerciseType": "modifier_code",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Transformez la phrase pour qu'elle finisse sur c5.",
              "concept": "La théorie est traitée comme un outil pratique. Chaque notion doit être immédiatement testée dans Strudel. La théorie musicale appliquée sert ici à mieux choisir les sons, pas à écrire une analyse formelle. Les notions de registre, accord, progression, phrase et forme deviennent immédiatement manipulables dans le code.",
              "starterCode": "setcpm(76/4)\n// 76 BPM perçu, 4 temps par cycle\n\nnote(\"c4 eb4 g4 bb4\").s(\"triangle\").gain(.25)",
              "task": "Transformez la phrase pour qu'elle finisse sur c5.",
              "hintLevel1": "Changez une seule note ou une seule octave pour entendre l’impact musical de la modification.",
              "hintLevel2": "Comparez deux versions proches, par exemple mineur et majeur, avant de composer librement.",
              "solution": "setcpm(76/4)\n// 76 BPM perçu, 4 temps par cycle\n\nnote(\"c4 eb4 g4 c5\").s(\"triangle\").gain(.25)",
              "whatToListenFor": "Écoutez la couleur, la tension et la résolution plutôt que seulement la justesse technique.",
              "commonMistake": "Changer trop de notes à la fois empêche d’identifier la fonction de chaque note dans l’accord ou la phrase.",
              "summary": "À ce stade, vous devez savoir utiliser mélodie, phrase dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": "Les notes s’écrivent avec leur nom et leur octave. Les accords utilisent souvent des notes simultanées entre crochets. Les progressions peuvent être représentées par des motifs lents.",
              "whyItMatters": "Elle transforme une notion musicale en geste concret de programmation.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Produisez deux couleurs différentes avec presque le même code.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise principalement le synthé interne de Strudel. Il permet de tester l’audio sans dépendre d’une banque de samples."
            },
            {
              "id": "thr_04_02",
              "title": "Variation de phrase",
              "concepts": [
                "variation",
                "reverse"
              ],
              "exerciseType": "modifier_code",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Ajoutez une inversion en fin de phrase.",
              "concept": "La théorie est traitée comme un outil pratique. Chaque notion doit être immédiatement testée dans Strudel. La théorie musicale appliquée sert ici à mieux choisir les sons, pas à écrire une analyse formelle. Les notions de registre, accord, progression, phrase et forme deviennent immédiatement manipulables dans le code.",
              "starterCode": "setcpm(76/4)\n// 76 BPM perçu, 4 temps par cycle\n\nnote(\"c4 eb4 g4 bb4\").s(\"triangle\").gain(.25)",
              "task": "Ajoutez une inversion en fin de phrase.",
              "hintLevel1": "Changez une seule note ou une seule octave pour entendre l’impact musical de la modification.",
              "hintLevel2": "Comparez deux versions proches, par exemple mineur et majeur, avant de composer librement.",
              "solution": "setcpm(76/4)\n// 76 BPM perçu, 4 temps par cycle\n\nnote(\"c4 eb4 g4 bb4\").lastOf(4, x => x.rev()).s(\"triangle\").gain(.25)",
              "whatToListenFor": "Écoutez la couleur, la tension et la résolution plutôt que seulement la justesse technique.",
              "commonMistake": "Changer trop de notes à la fois empêche d’identifier la fonction de chaque note dans l’accord ou la phrase.",
              "summary": "À ce stade, vous devez savoir utiliser variation, reverse dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": "Les notes s’écrivent avec leur nom et leur octave. Les accords utilisent souvent des notes simultanées entre crochets. Les progressions peuvent être représentées par des motifs lents.",
              "whyItMatters": "Elle transforme une notion musicale en geste concret de programmation.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Produisez deux couleurs différentes avec presque le même code.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise principalement le synthé interne de Strudel. Il permet de tester l’audio sans dépendre d’une banque de samples."
            }
          ]
        },
        {
          "id": "thr_05",
          "title": "Rythme",
          "learningGoal": "Comprendre pulsation, subdivision, contretemps, syncope, polyrythmie et polymétrie.",
          "lessons": [
            {
              "id": "thr_05_01",
              "title": "Pulsation et subdivision",
              "concepts": [
                "pulsation",
                "subdivision"
              ],
              "exerciseType": "comparer_patterns",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Écoutez les trois niveaux de vitesse.",
              "concept": "La théorie est traitée comme un outil pratique. Chaque notion doit être immédiatement testée dans Strudel. Un cycle est l’unité de temps centrale de Strudel. Les événements placés entre guillemets se répartissent dans ce cycle. Ajouter des événements ne rallonge pas automatiquement la boucle. Cela densifie ce qui se passe dans le même cadre temporel.",
              "starterCode": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(96/4)\n// 96 BPM perçu, 4 temps par cycle\n\nstack(\n  s(\"bd*4\"),\n  s(\"hh*8\").gain(.25),\n  s(\"cp*16\").gain(.12)\n)",
              "task": "Écoutez les trois niveaux de vitesse.",
              "hintLevel1": "Gardez setcpm inchangé et modifiez uniquement le nombre ou l’ordre des événements dans les guillemets.",
              "hintLevel2": "Comparez une version à deux événements et une version à quatre événements. Le cadre temporel reste le même, mais les attaques changent de place.",
              "solution": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(96/4)\n// 96 BPM perçu, 4 temps par cycle\n\nstack(\n  s(\"bd*4\").gain(.65),\n  s(\"hh*8\").gain(.25),\n  s(\"cp*16\").gain(.12)\n)",
              "whatToListenFor": "Écoutez le retour du motif au début du cycle. L’enjeu est de sentir quand la boucle recommence.",
              "commonMistake": "Confondre le nombre d’événements avec la durée totale conduit à des tempos perçus incohérents.",
              "summary": "À ce stade, vous devez savoir utiliser pulsation, subdivision dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": "Les espaces séparent les événements. Dans s(\"bd sd bd sd\"), quatre événements se partagent le cycle. setcpm(BPM/4) fixe ici la vitesse perçue quand le cycle représente quatre temps.",
              "whyItMatters": "Elle transforme une notion musicale en geste concret de programmation.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Écrivez une version avec deux événements, puis une autre avec huit événements, sans toucher à setcpm.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise des samples. Conservez la ligne samples(...) au début du code, puis lancez la lecture dans Strudel. Le premier chargement peut demander quelques secondes."
            },
            {
              "id": "thr_05_02",
              "title": "Contretemps",
              "concepts": [
                "offbeat",
                "contretemps"
              ],
              "exerciseType": "comparer_patterns",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Écoutez comment le hat pousse entre les kicks.",
              "concept": "La théorie est traitée comme un outil pratique. Chaque notion doit être immédiatement testée dans Strudel. Un cycle est l’unité de temps centrale de Strudel. Les événements placés entre guillemets se répartissent dans ce cycle. Ajouter des événements ne rallonge pas automatiquement la boucle. Cela densifie ce qui se passe dans le même cadre temporel.",
              "starterCode": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(96/4)\n// 96 BPM perçu, 4 temps par cycle\n\nstack(\n  s(\"bd*4\"),\n  s(\"~ hh ~ hh\").gain(.25)\n)",
              "task": "Écoutez comment le hat pousse entre les kicks.",
              "hintLevel1": "Gardez setcpm inchangé et modifiez uniquement le nombre ou l’ordre des événements dans les guillemets.",
              "hintLevel2": "Comparez une version à deux événements et une version à quatre événements. Le cadre temporel reste le même, mais les attaques changent de place.",
              "solution": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(96/4)\n// 96 BPM perçu, 4 temps par cycle\n\nstack(\n  s(\"bd*4\").gain(.65),\n  s(\"~ hh ~ hh\").gain(.25)\n)",
              "whatToListenFor": "Écoutez le retour du motif au début du cycle. L’enjeu est de sentir quand la boucle recommence.",
              "commonMistake": "Confondre le nombre d’événements avec la durée totale conduit à des tempos perçus incohérents.",
              "summary": "À ce stade, vous devez savoir utiliser offbeat, contretemps dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": "Les espaces séparent les événements. Dans s(\"bd sd bd sd\"), quatre événements se partagent le cycle. setcpm(BPM/4) fixe ici la vitesse perçue quand le cycle représente quatre temps.",
              "whyItMatters": "Elle transforme une notion musicale en geste concret de programmation.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Écrivez une version avec deux événements, puis une autre avec huit événements, sans toucher à setcpm.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise des samples. Conservez la ligne samples(...) au début du code, puis lancez la lecture dans Strudel. Le premier chargement peut demander quelques secondes."
            },
            {
              "id": "thr_05_03",
              "title": "Polyrythmie",
              "concepts": [
                "polyrythmie",
                "3 contre 4"
              ],
              "exerciseType": "comparer_patterns",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Écoutez deux répartitions dans le même cadre.",
              "concept": "La théorie est traitée comme un outil pratique. Chaque notion doit être immédiatement testée dans Strudel. La polyrythmie superpose plusieurs répartitions rythmiques. Un motif peut placer trois attaques dans le même cadre où un autre en place quatre. L’intérêt n’est pas de compliquer gratuitement le beat, mais de créer une tension entre plusieurs manières de découper le temps.",
              "starterCode": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(96/4)\n// 96 BPM perçu, 4 temps par cycle\n\nstack(\n  s(\"bd(3,8)\"),\n  s(\"hh(4,8)\").gain(.25)\n)",
              "task": "Écoutez deux répartitions dans le même cadre.",
              "hintLevel1": "Gardez une couche simple, puis modifiez seulement le nombre de pulses de l’autre couche.",
              "hintLevel2": "Comparez (3,8), (4,8) et (5,8) pour entendre comment la répartition change.",
              "solution": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(96/4)\n// 96 BPM perçu, 4 temps par cycle\n\nstack(\n  s(\"bd(3,8)\").gain(.7),\n  s(\"hh(4,8)\").gain(.25)\n)",
              "whatToListenFor": "Écoutez le point où les couches semblent se rejoindre, puis l’endroit où elles se contredisent.",
              "commonMistake": "Ajouter trop de sons différents masque la relation rythmique. Utilisez des sons contrastés et peu nombreux.",
              "summary": "À ce stade, vous devez savoir utiliser polyrythmie, 3 contre 4 dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": "La forme bd(3,8) signifie que trois attaques sont réparties sur huit positions. Un troisième nombre, comme bd(3,8,1), décale la répartition.",
              "whyItMatters": "Elle transforme une notion musicale en geste concret de programmation.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Créez une version stable avec 4 contre 4, puis une version instable avec 3 contre 4.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise des samples. Conservez la ligne samples(...) au début du code, puis lancez la lecture dans Strudel. Le premier chargement peut demander quelques secondes."
            },
            {
              "id": "thr_05_04",
              "title": "Polymétrie",
              "concepts": [
                "polymétrie",
                "longueurs"
              ],
              "exerciseType": "comparer_patterns",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Écoutez les réalignements progressifs.",
              "concept": "La théorie est traitée comme un outil pratique. Chaque notion doit être immédiatement testée dans Strudel. La polymétrie superpose des motifs de longueurs différentes. Contrairement à une simple polyrythmie, les phrases ne reviennent pas au même endroit à chaque cycle. Elles se réalignent après plusieurs répétitions, ce qui crée une évolution lente sans changer constamment le code.",
              "starterCode": "setcpm(96/4)\n// 96 BPM perçu, 4 temps par cycle\n\nstack(\n  note(\"c4 e4 g4\").slow(3).s(\"sine\"),\n  note(\"g4 a4 c5 e5\").slow(4).s(\"triangle\").gain(.25)\n)",
              "task": "Écoutez les réalignements progressifs.",
              "hintLevel1": "Donnez à chaque couche une longueur différente, puis laissez tourner assez longtemps pour entendre le réalignement.",
              "hintLevel2": "Évitez les valeurs trop grandes au début. Essayez d’abord 3 et 4.",
              "solution": "setcpm(96/4)\n// 96 BPM perçu, 4 temps par cycle\n\nstack(\n  note(\"c4 e4 g4\").slow(3).s(\"sine\").gain(.25),\n  note(\"g4 a4 c5 e5\").slow(4).s(\"triangle\").gain(.18)\n)",
              "whatToListenFor": "Écoutez comment la relation entre les deux motifs change sans que vous ajoutiez de notes.",
              "commonMistake": "Arrêter trop vite empêche d’entendre l’effet. La polymétrie demande une écoute sur plusieurs cycles.",
              "summary": "À ce stade, vous devez savoir utiliser polymétrie, longueurs dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": "Deux motifs peuvent être étirés différemment avec .slow(3) et .slow(4). Ils conservent chacun leur logique, mais leur point de rencontre se déplace.",
              "whyItMatters": "Elle transforme une notion musicale en geste concret de programmation.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Créez une paire de boucles de longueurs 3 et 5, puis comparez avec 3 et 4.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise principalement le synthé interne de Strudel. Il permet de tester l’audio sans dépendre d’une banque de samples."
            }
          ]
        },
        {
          "id": "thr_06",
          "title": "Forme",
          "learningGoal": "Organiser une pièce en états successifs.",
          "lessons": [
            {
              "id": "thr_06_01",
              "title": "États successifs",
              "concepts": [
                "forme",
                "arrangement"
              ],
              "exerciseType": "mini_performance",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Préparez une introduction, un développement et un retrait.",
              "concept": "La théorie est traitée comme un outil pratique. Chaque notion doit être immédiatement testée dans Strudel. stack() sert à organiser plusieurs patterns en couches. Chaque ligne peut avoir son propre rôle musical : ancrage, pulsation, texture, mélodie ou accident. Cette organisation rend le code plus lisible et prépare le travail de live coding.",
              "starterCode": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(76/4)\n// 76 BPM perçu, 4 temps par cycle\n\nstack(\n  note(\"c3 eb3 g3 bb3\").s(\"sine\").slow(8).room(.8).gain(.25),\n  s(\"bd ~ ~ ~\").gain(.25)\n)",
              "task": "Préparez une introduction, un développement et un retrait.",
              "hintLevel1": "Placez chaque couche sur sa propre ligne dans stack(...).",
              "hintLevel2": "Gardez une couche pour le kick et la snare, une autre pour les hats, puis ajoutez la texture seulement après.",
              "solution": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(76/4)\n// 76 BPM perçu, 4 temps par cycle\n\nstack(\n  note(\"c3 eb3 g3 bb3\").s(\"sine\").slow(8).room(.8).gain(.25),\n  s(\"bd ~ ~ ~\").gain(.25),\n  s(\"~ hh ~ hh\").gain(.12).degradeBy(.2)\n)",
              "whatToListenFor": "Écoutez séparément le rôle de chaque couche. Si vous ne pouvez pas nommer ce qu’elle apporte, elle est peut-être inutile.",
              "commonMistake": "Empiler trop de couches trop tôt masque les problèmes. Commencez avec deux couches bien équilibrées.",
              "summary": "À ce stade, vous devez savoir utiliser forme, arrangement dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": "Dans stack(a, b, c), chaque élément séparé par une virgule est joué en même temps. Les parenthèses délimitent l’ensemble de la superposition.",
              "whyItMatters": "Elle transforme une notion musicale en geste concret de programmation.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Coupez mentalement une couche à la fois et vérifiez que le morceau reste compréhensible.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise des samples. Conservez la ligne samples(...) au début du code, puis lancez la lecture dans Strudel. Le premier chargement peut demander quelques secondes."
            }
          ]
        }
      ]
    },
    {
      "id": "idm",
      "title": "IDM",
      "role": "Mélanger ambient, glitch, broken beats, théorie, génération et performance.",
      "unlockCondition": "Recommandé après ambient, glitch et composition générative",
      "finalProject": "Composer une pièce IDM courte avec texture, break, fragmentation, variation générative et reconstruction.",
      "chapters": [
        {
          "id": "idm_01",
          "title": "Textures et rythmes fragmentés",
          "learningGoal": "Faire cohabiter matière lente et beat instable.",
          "lessons": [
            {
              "id": "idm_01_01",
              "title": "Stable et instable",
              "concepts": [
                "contraste",
                "instabilité"
              ],
              "exerciseType": "modifier_code",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Ajoutez une variation de vitesse uniquement sur les hats.",
              "concept": "Cette branche combine plusieurs techniques. Le défi consiste à organiser le contraste plutôt qu’à accumuler des effets. Le glitch travaille avec des fragments, des coupures, des inversions et des irrégularités. Pour rester musical, il doit conserver un repère : une pulsation, une basse, une texture stable ou une phrase reconnaissable.",
              "starterCode": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(88/4)\n// 88 BPM perçu, 4 temps par cycle\n\nstack(\n  note(\"[c3,eb3,g3,bb3]\").s(\"sine\").slow(8).room(.8).gain(.25),\n  s(\"bd(3,8)\").gain(.6),\n  s(\"hh*16\").gain(.15).degradeBy(.4)\n)",
              "task": "Ajoutez une variation de vitesse uniquement sur les hats.",
              "hintLevel1": "Gardez un ancrage stable avant d’ajouter les accidents.",
              "hintLevel2": "Appliquez les transformations glitch à une couche secondaire plutôt qu’à tout le stack.",
              "solution": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(88/4)\n// 88 BPM perçu, 4 temps par cycle\n\nstack(\n  note(\"[c3,eb3,g3,bb3]\").s(\"sine\").slow(8).room(.8).gain(.25),\n  s(\"bd(3,8)\").gain(.6),\n  s(\"hh*16\").speed(\"<1 .5 2 -1>\").gain(.15).degradeBy(.4)\n)",
              "whatToListenFor": "Écoutez la tension entre stabilité et accident. Le beat doit rester identifiable malgré les fragments.",
              "commonMistake": "Glitcher toutes les couches en même temps rend le résultat aléatoire et peu contrôlable.",
              "summary": "À ce stade, vous devez savoir utiliser contraste, instabilité dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": "Les crochets créent des subdivisions locales. speed(\"-1\") inverse la lecture d’un sample. degradeBy() retire certains événements. slice() permet de recomposer un break.",
              "whyItMatters": "Elle participe à la combinaison entre structure, texture et accident contrôlé.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Créez une version lisible, puis augmentez progressivement le niveau d’accident jusqu’au seuil de rupture.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise des samples. Conservez la ligne samples(...) au début du code, puis lancez la lecture dans Strudel. Le premier chargement peut demander quelques secondes."
            }
          ]
        },
        {
          "id": "idm_02",
          "title": "Mélodie fragile",
          "learningGoal": "Ajouter une phrase mélodique discrète et irrégulière.",
          "lessons": [
            {
              "id": "idm_02_01",
              "title": "Phrase et delay",
              "concepts": [
                "mélodie",
                "delay"
              ],
              "exerciseType": "modifier_code",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Ajoutez un delay et une reverb pour placer la phrase en arrière-plan.",
              "concept": "Cette branche combine plusieurs techniques. Le défi consiste à organiser le contraste plutôt qu’à accumuler des effets. note(\"...\") joue des hauteurs musicales. Une note comme c3 indique un nom de note et un registre. Plus le nombre d’octave est élevé, plus le son est aigu. Les notes peuvent former une mélodie si elles sont successives, ou un accord si elles sont regroupées entre crochets avec des virgules.",
              "starterCode": "setcpm(86/4)\n// 86 BPM perçu, 4 temps par cycle\n\nnote(\"c5 eb5 g5 bb5\").s(\"triangle\").slow(3).gain(.18)",
              "task": "Ajoutez un delay et une reverb pour placer la phrase en arrière-plan.",
              "hintLevel1": "Modifiez le nom ou l’octave d’une seule note pour entendre précisément son effet.",
              "hintLevel2": "Pour un accord, vérifiez la présence des crochets et des virgules : [c3,e3,g3].",
              "solution": "setcpm(86/4)\n// 86 BPM perçu, 4 temps par cycle\n\nnote(\"c5 eb5 g5 bb5\").s(\"triangle\").slow(3).delay(.25).room(.7).gain(.18)",
              "whatToListenFor": "Distinguez une succession de notes d’un accord simultané. Ce sont deux gestes de composition différents.",
              "commonMistake": "Oublier les virgules dans un accord transforme souvent l’écriture en séquence, ce qui change totalement le résultat musical.",
              "summary": "À ce stade, vous devez savoir utiliser mélodie, delay dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": "note(\"c3 e3 g3\") joue une séquence. note(\"[c3,e3,g3]\") joue les trois notes ensemble. La fonction .s(\"sine\") choisit ensuite le timbre.",
              "whyItMatters": "Elle participe à la combinaison entre structure, texture et accident contrôlé.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Écrivez la même matière en version mélodie, puis en version accord, et comparez la sensation d’espace.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise principalement le synthé interne de Strudel. Il permet de tester l’audio sans dépendre d’une banque de samples."
            }
          ]
        },
        {
          "id": "idm_03",
          "title": "Break et recomposition",
          "learningGoal": "Intégrer un break découpé dans une pièce hybride.",
          "lessons": [
            {
              "id": "idm_03_01",
              "title": "Break contrôlé",
              "concepts": [
                "break",
                "slice",
                "sometimes"
              ],
              "exerciseType": "modifier_code",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Ajoutez une inversion occasionnelle et une légère suppression d'événements.",
              "concept": "Cette branche combine plusieurs techniques. Le défi consiste à organiser le contraste plutôt qu’à accumuler des effets. .sometimes() applique une transformation seulement une partie du temps. Cela permet de créer des accidents musicaux sans réécrire tout le motif. L’intérêt est de choisir une transformation qui reste cohérente avec le style visé.",
              "starterCode": "setcpm(86/4)\n// 86 BPM perçu, 4 temps par cycle\n\nsamples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\ns(\"breaks125\").fit().slice(8, \"0 1 [2 2] 3 <4 7> 5 [6 0] 7\").gain(.55)",
              "task": "Ajoutez une inversion occasionnelle et une légère suppression d'événements.",
              "hintLevel1": "Repérez la transformation placée après la flèche =>.",
              "hintLevel2": "Essayez d’abord une transformation simple comme speed, puis une transformation plus radicale comme rev ou speed(\"-1\").",
              "solution": "setcpm(86/4)\n// 86 BPM perçu, 4 temps par cycle\n\nsamples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\ns(\"breaks125\").fit().slice(8, \"0 1 [2 2] 3 <4 7> 5 [6 0] 7\").sometimes(x => x.speed(\"-1\")).degradeBy(.1).gain(.55)",
              "whatToListenFor": "Écoutez les moments d’écart par rapport au motif normal. Ils doivent surprendre sans faire perdre le fil.",
              "commonMistake": "Empiler plusieurs sometimes dès le départ rend les causes impossibles à entendre.",
              "summary": "À ce stade, vous devez savoir utiliser break, slice dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": "La forme .sometimes(x => x.speed(\".5\")) signifie : parfois, prends le pattern x et applique-lui speed.",
              "whyItMatters": "Elle participe à la combinaison entre structure, texture et accident contrôlé.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Gardez le même motif et changez uniquement la transformation appliquée parfois.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise des samples. Conservez la ligne samples(...) au début du code, puis lancez la lecture dans Strudel. Le premier chargement peut demander quelques secondes."
            }
          ]
        },
        {
          "id": "idm_04",
          "title": "Forme IDM",
          "learningGoal": "Passer d'un état à un autre en live.",
          "lessons": [
            {
              "id": "idm_04_01",
              "title": "Exposition, fragmentation, reconstruction",
              "concepts": [
                "forme",
                "live coding"
              ],
              "exerciseType": "mini_performance",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Préparez trois versions : exposition, fragmentation, reconstruction.",
              "concept": "Cette leçon assemble plusieurs logiques : texture lente, rythme asymétrique, hats instables et forme en états. L’enjeu n’est pas de tout rendre complexe. Il faut organiser un contraste entre une couche qui stabilise l’écoute et des couches qui fragmentent le temps.",
              "starterCode": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(86/4)\n// 86 BPM perçu, 4 temps par cycle\n\nstack(\n  note(\"[c3,eb3,g3,bb3]\").s(\"sine\").slow(8).room(.85).gain(.25),\n  s(\"bd(5,16)\").gain(.55),\n  s(\"hh(7,16)\").speed(\"<1 .5 2 -1>\").degradeBy(.25).gain(.15),\n  note(\"c5 eb5 g5\").s(\"triangle\").slow(3).delay(.2).gain(.18)\n)",
              "task": "Préparez trois versions : exposition, fragmentation, reconstruction.",
              "hintLevel1": "Identifiez d’abord la couche stable. Ici, c’est la nappe lente.",
              "hintLevel2": "Pour créer une reconstruction, réduisez temporairement degradeBy ou remplacez speed(\"<1 .5 2 -1>\") par speed(\"1\").",
              "solution": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(86/4)\n// 86 BPM perçu, 4 temps par cycle\n\nstack(\n  note(\"[c3,eb3,g3,bb3]\").s(\"sine\").slow(8).room(.85).gain(.25),\n  s(\"bd(5,16)\").gain(.55),\n  s(\"hh(7,16)\").speed(\"<1 .5 2 -1>\").degradeBy(.25).gain(.15),\n  note(\"c5 eb5 g5\").s(\"triangle\").slow(3).delay(.2).gain(.18)\n)",
              "whatToListenFor": "Écoutez si l’évolution raconte quelque chose : installation, tension, rupture, retour.",
              "commonMistake": "Un état trop chargé laisse peu de marge pour la suite de la performance.",
              "summary": "À ce stade, vous devez savoir utiliser forme, live coding dans un pattern simple et entendre son effet musical.",
              "tempoNote": "Le code utilise setcpm(BPM/4), car les exercices de cette version considèrent généralement un cycle comme une mesure de quatre temps.",
              "sourceRefs": [
                "docs_cycles",
                "docs_samples"
              ],
              "syntaxFocus": "Le stack contient une nappe lente, un kick euclidien, une couche de hats transformée par speed et degradeBy, puis une mélodie lente. Chaque ligne doit garder un rôle clair.",
              "whyItMatters": "Elle participe à la combinaison entre structure, texture et accident contrôlé.",
              "guidedSteps": [
                "Lancez le code de départ sans le modifier et écoutez au moins deux cycles complets.",
                "Appliquez uniquement la modification demandée dans la consigne, sans changer le tempo ni les autres couches.",
                "Comparez votre version avec la correction, puis expliquez en une phrase ce qui a changé dans le son."
              ],
              "listeningQuestion": "Après modification, le changement principal concerne-t-il le temps, le timbre, la densité, l’espace ou la hauteur ? Justifiez votre réponse à partir de ce que vous entendez.",
              "microChallenge": "Préparez trois états du même code : texture seule, beat fragmenté, puis reconstruction plus stable.",
              "selfCheck": [
                "Je peux identifier la ligne du code qui produit le changement attendu.",
                "Je peux décrire l’effet sonore sans seulement relire le code.",
                "Je peux revenir au code de départ si ma modification rend le résultat confus."
              ],
              "technicalReminder": "Ce code utilise des samples. Conservez la ligne samples(...) au début du code, puis lancez la lecture dans Strudel. Le premier chargement peut demander quelques secondes."
            }
          ]
        }
      ]
    }
  ],
  "projects": [
    {
      "id": "pf_01",
      "title": "Mini-performance ambient",
      "learningGoal": "Composer une pièce lente, spatiale et évolutive.",
      "deliverable": "Un code Strudel avec nappe, mouvement de filtre, élément mélodique et pulsation discrète.",
      "starterCode": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(52/4)\n// 52 BPM perçu, 4 temps par cycle\n\nstack(\n  note(\"[c3,eb3,g3,bb3]\").s(\"sine\").slow(8).room(.9).gain(.25),\n  note(\"g4 bb4 c5 eb5\").s(\"triangle\").slow(6).delay(.25).gain(.16),\n  s(\"bd ~ ~ ~\").gain(.22),\n  s(\"~ hh ~ hh\").gain(.1).degradeBy(.2)\n)",
      "technicalChecklist": [
        "Le code contient setcpm(BPM/4) si le cycle représente quatre temps.",
        "La ligne samples(...) est présente dès qu’un pattern utilise bd, sd, hh, cp ou un break.",
        "Chaque couche a un rôle musical nommé : ancrage, pulsation, texture, mélodie, accident ou transition.",
        "Les volumes sont équilibrés avec gain, surtout pour les hats, textures et delays.",
        "Le résultat reste compréhensible après plusieurs cycles, même avec des variations."
      ],
      "compositionBrief": "Construisez une pièce qui avance lentement. La nappe doit installer l’espace, la mélodie doit rester rare et la pulsation doit soutenir sans dominer.",
      "guidedSteps": [
        "Lancez la nappe seule et réglez son gain avant d’ajouter les autres couches.",
        "Ajoutez la mélodie puis vérifiez qu’elle ne remplit pas tout l’espace.",
        "Ajoutez le kick et les hats en dernier, avec un volume très bas."
      ],
      "listeningCriteria": [
        "La pièce reste lente.",
        "La reverb ne brouille pas tout.",
        "La pulsation est perceptible mais discrète."
      ]
    },
    {
      "id": "pf_02",
      "title": "Mini-performance beat",
      "learningGoal": "Composer un beat urbain avec variation de hats et sample.",
      "deliverable": "Un code Strudel avec kick, snare, hats, variation et sample transformé.",
      "starterCode": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(78/4)\n// 78 BPM perçu, 4 temps par cycle\n\nstack(\n  s(\"bd ~ ~ bd\").gain(.7),\n  s(\"~ sd ~ sd\").gain(.5),\n  s(\"hh*8 [hh hh hh hh] hh*8\").gain(.16),\n  s(\"cp ~ [cp cp] ~\").speed(\"<1 .8 1.2>\").gain(.25)\n)",
      "technicalChecklist": [
        "Le code contient setcpm(BPM/4) si le cycle représente quatre temps.",
        "La ligne samples(...) est présente dès qu’un pattern utilise bd, sd, hh, cp ou un break.",
        "Chaque couche a un rôle musical nommé : ancrage, pulsation, texture, mélodie, accident ou transition.",
        "Les volumes sont équilibrés avec gain, surtout pour les hats, textures et delays.",
        "Le résultat reste compréhensible après plusieurs cycles, même avec des variations."
      ],
      "compositionBrief": "Construisez un beat qui groove avant d’être décoré. Le kick et la snare doivent fonctionner seuls, puis les hats et le sample ajoutent du mouvement.",
      "guidedSteps": [
        "Écoutez d’abord seulement kick et snare.",
        "Ajoutez les hats et baissez-les si le groove devient agressif.",
        "Ajoutez le sample transformé comme réponse ou accent, pas comme bruit permanent."
      ],
      "listeningCriteria": [
        "Le kick et la snare restent lisibles.",
        "Les rolls ne saturent pas le beat.",
        "Le sample ajoute une identité sonore."
      ]
    },
    {
      "id": "pf_03",
      "title": "Mini-performance dancefloor",
      "learningGoal": "Composer une boucle techno, house ou trance avec tension progressive.",
      "deliverable": "Un code Strudel avec kick 4 to the floor, bassline, hat offbeat, stab et filtre évolutif.",
      "starterCode": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nsetcpm(124/4)\n// 124 BPM perçu, 4 temps par cycle\n\nstack(\n  s(\"bd*4\").gain(.7),\n  s(\"~ hh ~ hh\").gain(.25),\n  note(\"c2 ~ c2 eb2\").s(\"sawtooth\").lpf(\"<300 500 800 1200>\").gain(.3),\n  note(\"c4 eb4 g4\").s(\"sawtooth\").lpf(900).release(.2).gain(.18)\n)",
      "technicalChecklist": [
        "Le code contient setcpm(BPM/4) si le cycle représente quatre temps.",
        "La ligne samples(...) est présente dès qu’un pattern utilise bd, sd, hh, cp ou un break.",
        "Chaque couche a un rôle musical nommé : ancrage, pulsation, texture, mélodie, accident ou transition.",
        "Les volumes sont équilibrés avec gain, surtout pour les hats, textures et delays.",
        "Le résultat reste compréhensible après plusieurs cycles, même avec des variations."
      ],
      "compositionBrief": "Construisez une boucle régulière qui peut servir de base dancefloor. La tension vient de l’ouverture du filtre et de l’entrée progressive des couches.",
      "guidedSteps": [
        "Vérifiez que le kick seul donne une pulsation stable.",
        "Ajoutez le hat offbeat pour créer l’élan.",
        "Ajoutez la basse et le stab, puis faites évoluer le filtre."
      ],
      "listeningCriteria": [
        "Le kick reste régulier.",
        "Le contretemps donne de l’élan.",
        "Le filtre crée une progression perceptible."
      ]
    },
    {
      "id": "pf_04",
      "title": "Mini-performance glitch IDM",
      "learningGoal": "Composer une pièce hybride avec texture, break découpé, variations génératives et reconstruction.",
      "deliverable": "Un code Strudel avec texture ambient, break glitch, polyrythmie et variations conditionnelles.",
      "starterCode": "setcpm(86/4)\n// 86 BPM perçu, 4 temps par cycle\n\nsamples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nstack(\n  note(\"[c3,eb3,g3,bb3]\").s(\"sine\").slow(8).room(.85).gain(.22),\n  s(\"breaks125\").fit().slice(8, \"0 1 [2 2] 3 <4 7> 5 [6 0] 7\").sometimes(x => x.speed(\"-1\")).degradeBy(.1).gain(.45),\n  s(\"bd(5,16)\").gain(.45),\n  s(\"hh(7,16)\").speed(\"<1 .5 2 -1>\").degradeBy(.25).gain(.12)\n)",
      "technicalChecklist": [
        "Le code contient setcpm(BPM/4) si le cycle représente quatre temps.",
        "La ligne samples(...) est présente dès qu’un pattern utilise bd, sd, hh, cp ou un break.",
        "Chaque couche a un rôle musical nommé : ancrage, pulsation, texture, mélodie, accident ou transition.",
        "Les volumes sont équilibrés avec gain, surtout pour les hats, textures et delays.",
        "Le résultat reste compréhensible après plusieurs cycles, même avec des variations."
      ],
      "compositionBrief": "Construisez une pièce hybride. Une couche doit stabiliser l’écoute, tandis que les breaks, hats et variations créent la fragmentation.",
      "guidedSteps": [
        "Écoutez la texture seule pour vérifier qu’elle peut porter le morceau.",
        "Ajoutez le break découpé sans le rendre immédiatement trop aléatoire.",
        "Ajoutez les couches glitch puis préparez une version plus stable pour la reconstruction."
      ],
      "listeningCriteria": [
        "La texture reste identifiable.",
        "Le break est fragmenté mais lisible.",
        "La pièce peut passer d’un état instable à un état plus reconstruit."
      ]
    }
  ],
  "glossary": [
    {
      "term": "Pattern",
      "definition": "Motif musical décrit par du code et transformable par des fonctions.",
      "example": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\ns(\"bd ~ sd ~\")"
    },
    {
      "term": "Cycle",
      "definition": "Unité temporelle de base dans laquelle les événements sont répartis.",
      "example": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\ns(\"bd sd cp hh\")"
    },
    {
      "term": "Mini-notation",
      "definition": "Syntaxe compacte utilisée entre guillemets pour écrire rythmes, notes, silences, répétitions et subdivisions.",
      "example": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\ns(\"bd ~ sd ~, hh*8\")"
    },
    {
      "term": "Sample",
      "definition": "Son enregistré utilisé comme matériau musical.",
      "example": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\ns(\"bd sd hh\")"
    },
    {
      "term": "Synthèse",
      "definition": "Production directe d'un son par une forme d'onde comme sine, triangle, sawtooth ou square.",
      "example": "note(\"c3 eb3 g3\").s(\"sine\")"
    },
    {
      "term": "Couche",
      "definition": "Pattern superposé à d'autres patterns dans un arrangement.",
      "example": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nstack(s(\"bd\"), s(\"hh*8\"))"
    },
    {
      "term": "Polyrythmie",
      "definition": "Coexistence de plusieurs divisions rythmiques dans un même cadre temporel.",
      "example": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nstack(s(\"bd(3,8)\"), s(\"hh(4,8)\"))"
    },
    {
      "term": "Polymétrie",
      "definition": "Superposition de motifs de longueurs différentes qui se réalignent après plusieurs répétitions.",
      "example": "stack(note(\"c4 e4 g4\").slow(3), note(\"g4 a4 c5 e5\").slow(4))"
    },
    {
      "term": "Phasing",
      "definition": "Décalage progressif entre deux motifs identiques ou proches.",
      "example": "stack(note(\"c4 e4 g4 e4\"), note(\"c4 e4 g4 e4\").slow(1.01))"
    },
    {
      "term": "Génératif",
      "definition": "Mode de composition dans lequel le musicien définit des règles et laisse le système produire des variations contrôlées.",
      "example": "n(irand(8)).scale(\"C:minor\")"
    },
    {
      "term": "Glitch",
      "definition": "Esthétique fondée sur accidents sonores, coupures, fragments, inversions ou instabilités maîtrisées.",
      "example": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\ns(\"hh*16\").speed(\"<1 2 .5 -1>\").degradeBy(.25)"
    },
    {
      "term": "IDM",
      "definition": "Approche électronique hybride combinant textures, rythmes fragmentés, sound design, variations algorithmiques et formes non linéaires.",
      "example": "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')\n\nstack(note(\"c3 eb3 g3\").slow(8), s(\"bd(5,16)\"), s(\"hh(7,16)\").degradeBy(.25))"
    }
  ],
  "badges": [
    {
      "id": "premier_pattern",
      "title": "Premier pattern",
      "description": "Valider une première leçon.",
      "rule": "completed >= 1"
    },
    {
      "id": "maitrise_du_cycle",
      "title": "Maîtrise du cycle",
      "description": "Terminer le chapitre Cycles et mini-notation.",
      "rule": "chapter tc_02"
    },
    {
      "id": "architecte_de_couches",
      "title": "Architecte de couches",
      "description": "Terminer le chapitre Couches et organisation.",
      "rule": "chapter tc_03"
    },
    {
      "id": "sculpteur_de_timbre",
      "title": "Sculpteur de timbre",
      "description": "Terminer les effets de base.",
      "rule": "chapter tc_05"
    },
    {
      "id": "generatif",
      "title": "Génératif",
      "description": "Terminer la branche Composition générative.",
      "rule": "branch composition_generative"
    },
    {
      "id": "ambientiste",
      "title": "Ambientiste",
      "description": "Terminer la branche Ambient.",
      "rule": "branch ambient"
    },
    {
      "id": "beatmaker",
      "title": "Beatmaker",
      "description": "Terminer la branche Urban beat.",
      "rule": "branch urban_beat"
    },
    {
      "id": "glitcheur",
      "title": "Glitcheur",
      "description": "Terminer la branche Glitch et broken beats.",
      "rule": "branch glitch_broken_beats"
    },
    {
      "id": "live_coder",
      "title": "Live coder",
      "description": "Terminer au moins quarante leçons.",
      "rule": "completed >= 40"
    }
  ],
  "sources": [
    {
      "id": "docs_samples",
      "label": "Strudel Samples",
      "note": "Samples par défaut, lazy loading, banques de sons, URL raw strudel.json et chargement GitHub."
    },
    {
      "id": "docs_cycles",
      "label": "Strudel Cycles and BPM",
      "note": "Différence entre BPM, CPS, CPM et formule setcpm(bpm/bpc)."
    },
    {
      "id": "docs_time",
      "label": "Strudel Time Modifiers",
      "note": "slow, fast, euclid et rotations rythmiques."
    },
    {
      "id": "docs_random",
      "label": "Strudel Random Modifiers",
      "note": "degradeBy, sometimes, choose, wchoose et variantes probabilistes."
    },
    {
      "id": "docs_conditions",
      "label": "Strudel Conditional Modifiers",
      "note": "lastOf, when, chunk, mask, pick et transformations conditionnelles."
    },
    {
      "id": "docs_synths",
      "label": "Strudel Synths",
      "note": "Formes d’onde, bruit, synthèse et paramètres de timbre."
    }
  ],
  "references": [
    {
      "id": "docs_cycles",
      "title": "Strudel, cycles and BPM",
      "url": "https://strudel.cc/understand/cycles/"
    },
    {
      "id": "docs_samples",
      "title": "Strudel, samples",
      "url": "https://strudel.cc/learn/samples/"
    },
    {
      "id": "docs_mini_notation",
      "title": "Strudel, mini-notation",
      "url": "https://strudel.cc/learn/mini-notation/"
    },
    {
      "id": "docs_time_modifiers",
      "title": "Strudel, time modifiers",
      "url": "https://strudel.cc/learn/time-modifiers/"
    },
    {
      "id": "docs_random_modifiers",
      "title": "Strudel, random modifiers",
      "url": "https://strudel.cc/learn/random-modifiers/"
    },
    {
      "id": "docs_conditional_modifiers",
      "title": "Strudel, conditional modifiers",
      "url": "https://strudel.cc/learn/conditional-modifiers/"
    },
    {
      "id": "docs_effects",
      "title": "Strudel, effects",
      "url": "https://strudel.cc/learn/effects/"
    },
    {
      "id": "docs_tonal",
      "title": "Strudel, tonal functions",
      "url": "https://strudel.cc/learn/tonal/"
    }
  ]
};
