window.COURSE = {
  "meta": {
    "id": "strudel-lab",
    "title": "Strudel Lab",
    "version": "1.0",
    "language": "fr",
    "description": "Module micro learning pour apprendre Strudel par la pratique, du tronc commun aux parcours ambient, beat, glitch et IDM.",
    "strudelIntegration": "Le module charge les patterns dans le REPL Strudel via une URL longue. Le code reste lisible et copiable dans l'application."
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
          "id": "tc_01",
          "title": "Premiers sons",
          "learningGoal": "Produire et modifier ses premiers samples.",
          "lessons": [
            {
              "id": "tc_01_01",
              "title": "Jouer un sample",
              "concepts": [
                "sample",
                "fonction s",
                "événement"
              ],
              "exerciseType": "modifier_code",
              "estimatedDuration": "5 à 8 min",
              "learningGoal": "Remplacez la grosse caisse par une caisse claire, puis écoutez la différence.",
              "concept": "Cet exercice travaille sample, fonction s, événement. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "s(\"bd\")",
              "task": "Remplacez la grosse caisse par une caisse claire, puis écoutez la différence.",
              "hintLevel1": "Le nom du sample se place entre les guillemets.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "s(\"sd\")",
              "whatToListenFor": "Vous devez entendre un seul son par cycle.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "Vous savez déclencher un sample par son nom."
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
              "concept": "Cet exercice travaille séquence, cycle. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "s(\"bd\")",
              "task": "Transformez le motif pour jouer une grosse caisse puis une caisse claire.",
              "hintLevel1": "Ajoutez le deuxième nom de sample dans les mêmes guillemets.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "s(\"bd sd\")",
              "whatToListenFor": "Deux événements doivent être répartis dans le cycle.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "Une chaîne de samples décrit une séquence."
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
              "concept": "Cet exercice travaille silence, tilde, rythme. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "s(\"bd sd\")",
              "task": "Ajoutez un silence entre les sons pour faire respirer le motif.",
              "hintLevel1": "Le symbole ~ indique un silence.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "s(\"bd ~ sd ~\")",
              "whatToListenFor": "Le motif doit être moins serré et plus lisible.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "Le silence occupe une place musicale dans le cycle."
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
              "concept": "Cet exercice travaille cycle, répartition. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "s(\"bd sd\")",
              "task": "Ajoutez deux sons et observez si la boucle devient plus longue ou plus dense.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "s(\"bd sd cp hh\")",
              "whatToListenFor": "La boucle garde son cadre temporel, mais contient plus d'événements.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "Strudel répartit les événements dans un cycle."
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
              "concept": "Cet exercice travaille slow, temps. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "s(\"bd sd cp hh\")",
              "task": "Ralentissez le motif pour qu'il s'étale sur deux cycles.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "s(\"bd sd cp hh\").slow(2)",
              "whatToListenFor": "Le motif complet met plus de temps à revenir.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "slow transforme la durée du pattern."
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
              "concept": "Cet exercice travaille fast, densité. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "s(\"hh\")",
              "task": "Faites jouer le charley quatre fois plus vite.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "s(\"hh\").fast(4)",
              "whatToListenFor": "Le charley doit devenir une pulsation rapide.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "fast augmente la densité temporelle."
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
              "concept": "Cet exercice travaille répétition, multiplication. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "s(\"hh\")",
              "task": "Réécrivez le motif pour jouer huit hats par cycle.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "s(\"hh*8\")",
              "whatToListenFor": "Vous devez entendre huit hats réguliers.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "L'étoile compacte les répétitions dans la mini-notation."
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
              "concept": "Cet exercice travaille superposition, couches. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "s(\"bd ~ sd ~, hh*8\")",
              "task": "Écoutez le pattern et repérez les deux couches simultanées.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "s(\"bd ~ sd ~, hh*8\")",
              "whatToListenFor": "Kick et snare doivent coexister avec une couche de hats.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "La virgule permet une superposition dans une même chaîne."
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
              "concept": "Cet exercice travaille stack, arrangement. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "stack(\n  s(\"bd ~ sd ~\"),\n  s(\"hh*8\")\n)",
              "task": "Ajoutez une couche de clap discrète.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "stack(\n  s(\"bd ~ sd ~\"),\n  s(\"hh*8\").gain(.25),\n  s(\"~ cp ~ cp\").gain(.3)\n)",
              "whatToListenFor": "Le clap doit renforcer la boucle sans la dominer.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "stack rend les arrangements plus lisibles."
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
              "concept": "Cet exercice travaille gain, mixage. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "stack(\n  s(\"bd ~ sd ~\").gain(.7),\n  s(\"hh*8\").gain(.8)\n)",
              "task": "Baissez les hats pour qu'ils soutiennent le beat.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "stack(\n  s(\"bd ~ sd ~\").gain(.7),\n  s(\"hh*8\").gain(.25)\n)",
              "whatToListenFor": "Les hats doivent rester en arrière-plan.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "Le mixage commence par le réglage de gain."
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
              "concept": "Cet exercice travaille note, hauteur, octave. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "note(\"c3 e3 g3\")",
              "task": "Ajoutez une quatrième note pour créer une couleur plus ouverte.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "note(\"c3 e3 g3 bb3\")",
              "whatToListenFor": "Vous devez entendre des hauteurs musicales, pas des percussions.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "note sert à programmer des hauteurs."
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
              "concept": "Cet exercice travaille sine, triangle, sawtooth. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "note(\"c3 e3 g3\").s(\"sine\")",
              "task": "Remplacez sine par sawtooth et comparez le timbre.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "note(\"c3 e3 g3\").s(\"sawtooth\")",
              "whatToListenFor": "sawtooth doit être plus brillant que sine.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "Le timbre change la matière sans changer les notes."
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
              "concept": "Cet exercice travaille attack, release, enveloppe. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "note(\"c3 e3 g3\").s(\"sine\")",
              "task": "Rendez les notes plus progressives et plus longues.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "note(\"c3 e3 g3\").s(\"sine\").attack(1).release(3)",
              "whatToListenFor": "Le son doit entrer doucement et se prolonger.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "L'enveloppe définit l'apparition et la disparition du son."
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
              "concept": "Cet exercice travaille room, espace. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "note(\"c3 e3 g3\").s(\"sine\").gain(.3)",
              "task": "Ajoutez une sensation d'espace au son.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "note(\"c3 e3 g3\").s(\"sine\").room(.7).gain(.3)",
              "whatToListenFor": "Le son doit paraître plus large.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "room ajoute une réverbération."
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
              "concept": "Cet exercice travaille delay, écho. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "note(\"c4 e4 g4\").s(\"triangle\").gain(.25)",
              "task": "Ajoutez un écho modéré à la phrase.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "note(\"c4 e4 g4\").s(\"triangle\").delay(.25).delaytime(.5).gain(.25)",
              "whatToListenFor": "Vous devez entendre des répétitions après les notes.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "Le delay crée du mouvement à partir d'une phrase simple."
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
              "concept": "Cet exercice travaille lpf, cutoff, filtre. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "note(\"c2 c3 c4\").s(\"sawtooth\").gain(.25)",
              "task": "Ajoutez un filtre passe-bas pour adoucir le son.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "note(\"c2 c3 c4\").s(\"sawtooth\").lpf(800).gain(.25)",
              "whatToListenFor": "Le son doit devenir moins brillant.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "lpf sculpte un timbre en retirant des aigus."
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
              "concept": "Cet exercice travaille polyrythmie, euclid. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "stack(\n  s(\"bd(3,8)\"),\n  s(\"hh(4,8)\").gain(.3)\n)",
              "task": "Écoutez comment trois frappes et quatre frappes cohabitent.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "stack(\n  s(\"bd(3,8)\").gain(.7),\n  s(\"hh(4,8)\").gain(.25)\n)",
              "whatToListenFor": "Les couches ne découpent pas le temps de la même manière.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "La polyrythmie fait coexister plusieurs découpes du temps."
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
              "concept": "Cet exercice travaille rotation, décalage. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "stack(\n  s(\"bd(3,8)\"),\n  s(\"hh(4,8)\").gain(.3)\n)",
              "task": "Décalez la couche de hats avec une rotation.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "stack(\n  s(\"bd(3,8)\").gain(.7),\n  s(\"hh(4,8,1)\").gain(.25)\n)",
              "whatToListenFor": "Le groove doit se déplacer sans changer la densité.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "La rotation déplace le point de départ d'une répartition."
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
              "concept": "Cet exercice travaille polymétrie, réalignement. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "stack(\n  s(\"bd ~ sd\").slow(3),\n  s(\"hh ~ hh ~\").slow(4).gain(.3)\n)",
              "task": "Écoutez comment deux boucles de longueur différente se réalignent.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "stack(\n  s(\"bd ~ sd\").slow(3).gain(.7),\n  s(\"hh ~ hh ~\").slow(4).gain(.25)\n)",
              "whatToListenFor": "Les appuis se déplacent progressivement.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "La polymétrie superpose des longueurs de phrase différentes."
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
              "concept": "Cet exercice travaille état, stabilité. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "stack(\n  s(\"bd ~ sd ~\"),\n  s(\"hh*8\").gain(.25)\n)",
              "task": "Préparez une boucle stable de deux ou trois couches.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "stack(\n  s(\"bd ~ sd ~\").gain(.7),\n  s(\"hh*8\").gain(.25),\n  note(\"c3 eb3 g3\").s(\"sine\").slow(4).gain(.2)\n)",
              "whatToListenFor": "La boucle doit pouvoir tourner longtemps sans fatiguer.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "Un live set commence par un état stable."
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
              "concept": "Cet exercice travaille densification, couche. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "stack(\n  s(\"bd ~ sd ~\"),\n  s(\"hh*8\").gain(.25),\n  note(\"c3 e3 g3\").s(\"sine\").slow(4).gain(.3)\n)",
              "task": "Ajoutez une couche sans remplacer tout le motif.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "stack(\n  s(\"bd ~ sd ~\").gain(.7),\n  s(\"hh*8\").gain(.25),\n  s(\"~ cp ~ cp\").gain(.25),\n  note(\"c3 e3 g3\").s(\"sine\").slow(4).room(.5).gain(.25)\n)",
              "whatToListenFor": "Le développement doit rester relié à l'état initial.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "Développer signifie transformer un état, pas repartir de zéro."
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
              "concept": "Cet exercice travaille variation, performance. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "stack(\n  s(\"bd ~ sd ~\"),\n  s(\"hh*8\").gain(.25).degradeBy(.2),\n  note(\"c3 e3 g3\").s(\"sine\").slow(4).room(.6).gain(.3)\n)",
              "task": "Préparez une variation plus instable pour un court passage.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "stack(\n  s(\"bd ~ sd ~\").gain(.7),\n  s(\"hh*16\").gain(.18).degradeBy(.35),\n  note(\"c3 e3 g3\").s(\"sine\").slow(4).room(.6).gain(.3)\n)",
              "whatToListenFor": "La variation doit apporter du mouvement sans perdre la base.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "Une performance alterne stabilité et variation."
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
              "concept": "Cet exercice travaille degradeBy, probabilité. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "s(\"hh*16\").gain(.2)",
              "task": "Retirez aléatoirement une partie des hats.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "s(\"hh*16\").gain(.2).degradeBy(.3)",
              "whatToListenFor": "Les hats doivent rester présents, mais moins mécaniques.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "Le hasard devient musical quand son intensité est dosée."
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
              "concept": "Cet exercice travaille sometimes, transformation. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "s(\"hh*16\").gain(.18)",
              "task": "Faites parfois jouer les hats plus lentement.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "s(\"hh*16\").gain(.18).sometimes(x => x.speed(\".5\"))",
              "whatToListenFor": "Certains passages doivent sonner comme de courts ralentissements.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "sometimes crée des accidents contrôlés."
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
              "concept": "Cet exercice travaille choose, timbre. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "note(\"c3 eb3 g3 bb3\").slow(4).gain(.3)",
              "task": "Faites varier le timbre entre sine et triangle.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "note(\"c3 eb3 g3 bb3\").s(choose(\"sine\", \"triangle\")).slow(4).gain(.3)",
              "whatToListenFor": "La nappe garde ses notes, mais le timbre peut changer.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "Un choix aléatoire peut rester contraint."
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
              "concept": "Cet exercice travaille lastOf, phrase. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "note(\"c3 d3 e3 g3\").s(\"triangle\")",
              "task": "Inversez le motif à la fin d'un groupe de quatre cycles.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "note(\"c3 d3 e3 g3\").lastOf(4, x => x.rev()).s(\"triangle\")",
              "whatToListenFor": "Le motif doit se retourner uniquement en fin de phrase.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "Les conditions donnent une forme aux boucles."
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
              "concept": "Cet exercice travaille when, condition. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "note(\"c3 eb3 g3\").when(\"<0 1>/2\", x => x.sub(\"5\")).s(\"sine\")",
              "task": "Repérez quand la transformation se produit.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "note(\"c3 eb3 g3\").when(\"<0 1>/2\", x => x.sub(\"5\")).s(\"sine\")",
              "whatToListenFor": "Vous devez entendre une alternance entre motif original et motif transposé.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "Une condition peut piloter une transformation musicale."
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
              "concept": "Cet exercice travaille chunk, variation locale. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "s(\"bd sd hh cp\")",
              "task": "Inversez une portion du pattern à chaque cycle.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "s(\"bd sd hh cp\").chunk(4, x => x.rev())",
              "whatToListenFor": "La variation doit se déplacer localement dans le motif.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "Une variation locale garde l'identité globale du motif."
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
              "concept": "Cet exercice travaille perlin, range, cutoff. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "note(\"c3 eb3 g3 bb3\").s(\"sawtooth\").gain(.25)",
              "task": "Faites bouger le filtre de manière lente et fluide.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "note(\"c3 eb3 g3 bb3\").s(\"sawtooth\").cutoff(perlin.range(400, 2000)).gain(.25)",
              "whatToListenFor": "Le timbre doit évoluer sans saut trop sec.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "Un signal peut piloter un paramètre sonore."
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
              "concept": "Cet exercice travaille irand, scale, gamme. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "n(irand(8)).scale(\"C:minor\").s(\"triangle\").gain(.25)",
              "task": "Écoutez une mélodie aléatoire contrainte à une gamme.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "n(irand(8)).scale(\"C:minor\").s(\"triangle\").gain(.25)",
              "whatToListenFor": "La mélodie varie, mais reste cohérente.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "La génération mélodique gagne à être limitée par une gamme."
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
              "concept": "Cet exercice travaille génératif, texture. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "stack(\n  n(irand(8)).scale(\"C:minor\").s(\"sine\").slow(4).room(.8).gain(.2),\n  s(\"hh*8\").degradeBy(.5).gain(.1)\n)",
              "task": "Créez une texture qui change sans perdre son identité.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "stack(\n  note(\"c2\").s(\"sine\").slow(8).gain(.2),\n  n(irand(8)).scale(\"C:minor\").s(\"sine\").slow(4).room(.8).gain(.18),\n  s(\"hh*8\").degradeBy(.5).gain(.08)\n)",
              "whatToListenFor": "L'ensemble doit sembler vivant, mais pas chaotique.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "Composer génératif consiste à définir un cadre d'évolution."
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
              "concept": "Cet exercice travaille boucle, motif. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "note(\"c4 e4 g4 e4\").s(\"sine\").gain(.35)",
              "task": "Modifiez une seule note et écoutez l'effet sur la boucle.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "note(\"c4 e4 a4 e4\").s(\"sine\").gain(.35)",
              "whatToListenFor": "Une petite modification doit changer la couleur sans casser la boucle.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "Une boucle minimale doit être assez simple pour être mémorisée."
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
              "concept": "Cet exercice travaille filtre, micro-variation. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "note(\"c4 e4 g4 e4\").s(\"sine\").gain(.35)",
              "task": "Faites évoluer le motif par le filtre plutôt que par les notes.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "note(\"c4 e4 g4 e4\").s(\"sine\").lpf(\"<600 900 1200 800>\").gain(.35)",
              "whatToListenFor": "Le motif reste identique, mais la couleur bouge.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "Une micro-variation peut suffire à créer une évolution."
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
              "concept": "Cet exercice travaille doublage, superposition. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "note(\"c4 e4 g4 e4\").s(\"sine\").gain(.3)",
              "task": "Ajoutez une deuxième version du même motif avec un timbre différent.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "stack(\n  note(\"c4 e4 g4 e4\").s(\"sine\").gain(.3),\n  note(\"c4 e4 g4 e4\").s(\"triangle\").gain(.22)\n)",
              "whatToListenFor": "Les deux lignes doivent fusionner sans être identiques.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "Le phasing commence souvent par deux motifs proches."
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
              "concept": "Cet exercice travaille phasing, dérive. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "stack(\n  note(\"c4 e4 g4 e4\").s(\"sine\").gain(.3),\n  note(\"c4 e4 g4 e4\").s(\"triangle\").slow(1.01).gain(.22)\n)",
              "task": "Écoutez la dérive entre les deux motifs.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "stack(\n  note(\"c4 e4 g4 e4\").s(\"sine\").gain(.3),\n  note(\"c4 e4 g4 e4\").s(\"triangle\").slow(1.01).gain(.22)\n)",
              "whatToListenFor": "Les attaques se déplacent lentement les unes par rapport aux autres.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "Le phasing crée une évolution à partir d'un écart minime."
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
              "concept": "Cet exercice travaille polymétrie, réalignement. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "stack(\n  note(\"c4 e4 g4\").s(\"sine\").slow(3),\n  note(\"g4 a4 c5 e5\").s(\"triangle\").slow(4).gain(.25)\n)",
              "task": "Écoutez comment les deux lignes se croisent différemment.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "stack(\n  note(\"c4 e4 g4\").s(\"sine\").slow(3).gain(.28),\n  note(\"g4 a4 c5 e5\").s(\"triangle\").slow(4).gain(.2)\n)",
              "whatToListenFor": "Le point de rencontre des notes change progressivement.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "Des boucles de longueurs différentes créent une forme progressive."
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
              "concept": "Cet exercice travaille forme, évolution lente. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "stack(\n  note(\"c4 e4 g4\").s(\"sine\").slow(3).room(.5).gain(.25),\n  note(\"g4 a4 c5 e5\").s(\"triangle\").slow(4).delay(.2).gain(.18)\n)",
              "task": "Ajoutez une troisième couche très discrète pour compléter la pièce.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "stack(\n  note(\"c2\").s(\"sine\").slow(8).gain(.18),\n  note(\"c4 e4 g4\").s(\"sine\").slow(3).room(.5).gain(.25),\n  note(\"g4 a4 c5 e5\").s(\"triangle\").slow(4).delay(.2).gain(.18)\n)",
              "whatToListenFor": "La pièce doit évoluer sans rupture nette.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "La musique minimaliste peut se construire par superposition lente."
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
              "concept": "Cet exercice travaille backbeat, kick, snare. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "stack(\n  s(\"bd ~ ~ bd\"),\n  s(\"~ sd ~ sd\")\n).cpm(80)",
              "task": "Déplacez une grosse caisse pour rendre le beat moins carré.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "stack(\n  s(\"bd ~ bd ~\").gain(.7),\n  s(\"~ sd ~ sd\").gain(.55)\n).cpm(80)",
              "whatToListenFor": "Le beat reste hip-hop, mais le placement du kick change le groove.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "Kick et snare donnent l'ossature du beat."
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
              "concept": "Cet exercice travaille hats, pulsation. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "stack(\n  s(\"bd ~ ~ bd\"),\n  s(\"~ sd ~ sd\")\n).cpm(80)",
              "task": "Ajoutez une couche de hats réguliers et discrets.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "stack(\n  s(\"bd ~ ~ bd\").gain(.7),\n  s(\"~ sd ~ sd\").gain(.55),\n  s(\"hh*8\").gain(.22)\n).cpm(80)",
              "whatToListenFor": "Les hats doivent stabiliser le groove sans dominer.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "Les hats donnent une grille de lecture au beat."
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
              "concept": "Cet exercice travaille subdivision, trap. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "s(\"hh*8\").gain(.18)",
              "task": "Doublez la densité des hats.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "s(\"hh*16\").gain(.18)",
              "whatToListenFor": "La pulsation devient plus nerveuse.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "Les hats trap reposent souvent sur une densité élevée."
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
              "concept": "Cet exercice travaille roll, crochets. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "s(\"hh*8 ~ hh*8\").gain(.18)",
              "task": "Ajoutez un roll local de quatre hats rapides.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "s(\"hh*8 [hh hh hh hh] hh*8\").gain(.18)",
              "whatToListenFor": "Le roll doit apparaître comme un détail rapide.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "Un roll est une densification localisée."
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
              "concept": "Cet exercice travaille sample, speed. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "s(\"cp ~ [cp cp] ~\")",
              "task": "Faites varier la vitesse de lecture du clap.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "s(\"cp ~ [cp cp] ~\").speed(\"<1 .8 1.2>\")",
              "whatToListenFor": "Le clap doit changer légèrement de couleur.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "speed transforme un sample sans changer son nom."
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
              "concept": "Cet exercice travaille lo-fi, tempo lent. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "stack(\n  s(\"bd ~ ~ bd\"),\n  s(\"~ sd ~ sd\"),\n  s(\"hh*8\").gain(.14).degradeBy(.15)\n).cpm(72)",
              "task": "Ajoutez une petite couleur harmonique lente au beat.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "stack(\n  s(\"bd ~ ~ bd\").gain(.65),\n  s(\"~ sd ~ sd\").gain(.5),\n  s(\"hh*8\").gain(.14).degradeBy(.15),\n  note(\"c3 eb3 g3 bb3\").s(\"triangle\").slow(4).lpf(900).gain(.18)\n).cpm(72)",
              "whatToListenFor": "Le résultat doit être détendu et légèrement instable.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "Un beat lo-fi gagne souvent à rester sobre."
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
              "concept": "Cet exercice travaille sine, slow, enveloppe. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "note(\"c3 eb3 g3 bb3\").s(\"sine\").slow(8).gain(.3)",
              "task": "Rendez la nappe plus douce avec attack et release.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "note(\"c3 eb3 g3 bb3\").s(\"sine\").slow(8).attack(3).release(6).gain(.3)",
              "whatToListenFor": "Le son doit apparaître et disparaître lentement.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "Une nappe combine durée, timbre et enveloppe."
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
              "concept": "Cet exercice travaille room, delay. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "note(\"c3 eb3 g3 bb3\").s(\"sine\").slow(8).attack(3).release(6).gain(.3)",
              "task": "Ajoutez une sensation d'espace profond.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "note(\"c3 eb3 g3 bb3\").s(\"sine\").slow(8).attack(3).release(6).room(.9).delay(.2).delaytime(.5).gain(.25)",
              "whatToListenFor": "La nappe doit s'étendre et laisser une traîne.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "L'ambient travaille beaucoup l'espace sonore."
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
              "concept": "Cet exercice travaille sawtooth, lpf. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "note(\"c3 eb3 g3 bb3\").s(\"sawtooth\").slow(8).gain(.22)",
              "task": "Ajoutez un filtre pour rendre le sawtooth plus doux.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "note(\"c3 eb3 g3 bb3\").s(\"sawtooth\").slow(8).lpf(700).room(.8).gain(.22)",
              "whatToListenFor": "Le son doit rester riche, mais moins agressif.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "Un son riche peut devenir ambient grâce au filtrage."
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
              "concept": "Cet exercice travaille paramètre pattern, mouvement. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "note(\"c3 eb3 g3 bb3\").s(\"sawtooth\").slow(8).lpf(700).room(.8).gain(.22)",
              "task": "Faites varier lentement la fréquence du filtre.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "note(\"c3 eb3 g3 bb3\").s(\"sawtooth\").slow(8).lpf(\"<400 700 1200 600>\").room(.8).gain(.22)",
              "whatToListenFor": "La texture doit s'ouvrir et se refermer doucement.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "Les paramètres peuvent devenir des motifs."
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
              "concept": "Cet exercice travaille pulsation lente, kick. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "note(\"c3 eb3 g3 bb3\").s(\"sine\").slow(8).room(.9).gain(.25)",
              "task": "Ajoutez un kick rare sous la nappe.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "stack(\n  note(\"c3 eb3 g3 bb3\").s(\"sine\").slow(8).room(.9).gain(.25),\n  s(\"bd ~ ~ ~\").gain(.25)\n).cpm(52)",
              "whatToListenFor": "Le kick doit être un repère, pas un beat dominant.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "Une pulsation minimale peut soutenir une texture."
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
              "concept": "Cet exercice travaille hats discrets, degradeBy. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "stack(\n  note(\"c3 eb3 g3 bb3\").s(\"sine\").slow(8).room(.9).gain(.25),\n  s(\"bd ~ ~ ~\").gain(.25)\n).cpm(52)",
              "task": "Ajoutez des hats discrets et partiellement aléatoires.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "stack(\n  note(\"c3 eb3 g3 bb3\").s(\"sine\").slow(8).room(.9).gain(.25),\n  s(\"bd ~ ~ ~\").gain(.25),\n  s(\"~ hh ~ hh\").gain(.12).degradeBy(.2).room(.5)\n).cpm(52)",
              "whatToListenFor": "Les hats doivent ressembler à une présence légère.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "L'ambient beat équilibre ancrage et espace."
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
              "concept": "Cet exercice travaille 4 to the floor, kick. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "s(\"bd*4\").gain(.7).cpm(120)",
              "task": "Changez le tempo sans modifier la structure du kick.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "s(\"bd*4\").gain(.7).cpm(124)",
              "whatToListenFor": "Le kick doit rester régulier et stable.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "Le 4 to the floor repose sur un kick régulier."
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
              "concept": "Cet exercice travaille offbeat, contretemps. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "s(\"bd*4\").gain(.7).cpm(120)",
              "task": "Ajoutez un hat sur les contretemps.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "stack(\n  s(\"bd*4\").gain(.7),\n  s(\"~ hh ~ hh\").gain(.25)\n).cpm(120)",
              "whatToListenFor": "Le hat doit donner une poussée entre les kicks.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "L'offbeat donne beaucoup d'énergie à la house et à la techno."
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
              "concept": "Cet exercice travaille bassline, filtre. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "note(\"c2 ~ c2 eb2\").s(\"sawtooth\").gain(.3)",
              "task": "Filtrez la basse pour la rendre plus ronde.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "note(\"c2 ~ c2 eb2\").s(\"sawtooth\").lpf(500).gain(.3)",
              "whatToListenFor": "La basse doit être présente mais moins brillante.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "Une bassline simple peut porter toute une boucle."
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
              "concept": "Cet exercice travaille stab, accord court. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "note(\"c4 eb4 g4\").s(\"sawtooth\").gain(.22)",
              "task": "Rendez l'accord plus court et filtré.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "note(\"c4 eb4 g4\").s(\"sawtooth\").lpf(900).release(.2).gain(.22)",
              "whatToListenFor": "Le stab doit être bref et rythmique.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "Le stab est un accent harmonique court."
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
              "concept": "Cet exercice travaille filtre, tension. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "note(\"c2 ~ c2 eb2\").s(\"sawtooth\").lpf(300).gain(.3)",
              "task": "Remplacez le filtre fixe par une progression de valeurs.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "note(\"c2 ~ c2 eb2\").s(\"sawtooth\").lpf(\"<300 500 800 1200>\").gain(.3)",
              "whatToListenFor": "La basse doit devenir progressivement plus brillante.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "La tension peut venir d'un paramètre qui évolue."
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
              "concept": "Cet exercice travaille forme, break, reprise. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "stack(\n  s(\"bd*4\").gain(.7),\n  s(\"~ hh ~ hh\").gain(.25),\n  note(\"c2 ~ c2 eb2\").s(\"sawtooth\").lpf(\"<400 700 1200 900>\").gain(.3)\n).cpm(124)",
              "task": "Préparez une version sans kick pour créer un break.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "stack(\n  // s(\"bd*4\").gain(.7),\n  s(\"~ hh ~ hh\").gain(.25),\n  note(\"c2 ~ c2 eb2\").s(\"sawtooth\").lpf(\"<400 700 1200 900>\").gain(.3)\n).cpm(124)",
              "whatToListenFor": "Sans kick, l'énergie baisse. Le retour du kick crée la reprise.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "Un break fonctionne par retrait autant que par ajout."
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
              "concept": "Cet exercice travaille subdivision, crochets. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "s(\"[bd ~] [~ sd] [bd bd] [~ sd]\").gain(.6)",
              "task": "Ajoutez une couche de hats pour mieux sentir le groove.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "s(\"[bd ~] [~ sd] [bd bd] [~ sd], hh*8\").gain(.55)",
              "whatToListenFor": "Le beat doit sembler cassé mais lisible.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "Un broken beat garde souvent un repère stable."
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
              "concept": "Cet exercice travaille micro-subdivision, hats. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "s(\"[bd ~] [~ sd] [bd bd] [~ sd], hh*8\").gain(.5)",
              "task": "Remplacez les hats réguliers par des hats plus irréguliers.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "s(\"[bd ~] [~ sd] [bd bd] [~ sd], [hh ~ hh hh]*2\").gain(.5)",
              "whatToListenFor": "Les hats doivent produire des détails internes.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "Le détail rythmique peut être localisé dans une couche."
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
              "concept": "Cet exercice travaille degradeBy, hasard. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "s(\"hh*16\").gain(.18)",
              "task": "Supprimez aléatoirement une partie des hats.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "s(\"hh*16\").gain(.18).degradeBy(.35)",
              "whatToListenFor": "La couche doit devenir trouée sans disparaître.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "Le glitch contrôlé laisse des repères."
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
              "concept": "Cet exercice travaille speed, reverse. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "s(\"hh*16\").gain(.18).degradeBy(.25)",
              "task": "Faites varier la vitesse avec une valeur négative pour inverser certains sons.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "s(\"hh*16\").gain(.18).speed(\"<1 2 .5 -1>\").degradeBy(.25)",
              "whatToListenFor": "Certains hats doivent changer de hauteur ou se retourner.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "speed transforme la lecture d'un sample."
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
              "concept": "Cet exercice travaille slice, break, sample. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "samples('github:tidalcycles/dirt-samples')\n\ns(\"breaks125\").fit().slice(8, \"0 1 2 3 4 5 6 7\").gain(.7)",
              "task": "Écoutez le break rejoué tranche par tranche.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "samples('github:tidalcycles/dirt-samples')\n\ns(\"breaks125\").fit().slice(8, \"0 1 2 3 4 5 6 7\").gain(.7)",
              "whatToListenFor": "Le break doit sonner proche de son ordre original.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "Un break peut devenir un matériau recomposable."
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
              "concept": "Cet exercice travaille resequence, glitch. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "samples('github:tidalcycles/dirt-samples')\n\ns(\"breaks125\").fit().slice(8, \"0 1 2 3 4 5 6 7\").gain(.7)",
              "task": "Réorganisez quelques tranches pour créer un break plus accidenté.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "samples('github:tidalcycles/dirt-samples')\n\ns(\"breaks125\").fit().slice(8, \"0 1 [2 2] 3 <4 7> 5 [6 0] 7\").gain(.7)",
              "whatToListenFor": "Le break doit être reconnaissable mais recomposé.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "Le glitch efficace modifie une structure encore perceptible."
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
              "concept": "Cet exercice travaille euclid, polyrythmie. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "stack(\n  s(\"bd(5,16)\").gain(.7),\n  s(\"sd(3,8,2)\").gain(.45),\n  s(\"hh(7,16)\").gain(.18)\n).cpm(92)",
              "task": "Écoutez la relation entre les trois répartitions.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "stack(\n  s(\"bd(5,16)\").gain(.7),\n  s(\"sd(3,8,2)\").gain(.45),\n  s(\"hh(7,16)\").gain(.18)\n).cpm(92)",
              "whatToListenFor": "Le groove doit être asymétrique sans être aléatoire.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "Les rythmes euclidiens sont utiles pour les grooves instables."
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
              "concept": "Cet exercice travaille note, octave. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "note(\"c3 c4 c5\").s(\"sine\")",
              "task": "Écoutez la différence de registre entre les trois notes.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "note(\"c3 c4 c5\").s(\"sine\")",
              "whatToListenFor": "Les trois notes portent le même nom, mais pas le même registre.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "L'octave situe une note dans le grave ou l'aigu."
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
              "concept": "Cet exercice travaille accord, mineur. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "note(\"c3 eb3 g3\").s(\"sine\").slow(4)",
              "task": "Écoutez la couleur de cet accord mineur.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "note(\"c3 eb3 g3\").s(\"sine\").slow(4)",
              "whatToListenFor": "La couleur doit paraître plutôt sombre ou introspective.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "Un accord est une couleur harmonique."
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
              "concept": "Cet exercice travaille accord, majeur. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "note(\"c3 e3 g3\").s(\"sine\").slow(4)",
              "task": "Comparez cette couleur avec l'accord mineur précédent.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "note(\"c3 e3 g3\").s(\"sine\").slow(4)",
              "whatToListenFor": "La couleur doit paraître plus ouverte que le mineur.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "Une seule note peut changer la couleur d'un accord."
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
              "concept": "Cet exercice travaille progression, accords. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "note(\"c3 eb3 g3 bb3\").s(\"sine\").slow(4).room(.7)",
              "task": "Ajoutez une deuxième couleur en alternance avec un autre accord.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "note(\"<c3 eb3 g3 bb3 f3 ab3 c4 eb4>\").s(\"sine\").slow(4).room(.7).gain(.25)",
              "whatToListenFor": "La progression doit donner une sensation de déplacement harmonique.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "Une progression est un déplacement entre plusieurs couleurs."
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
              "concept": "Cet exercice travaille mélodie, phrase. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "note(\"c4 eb4 g4 bb4\").s(\"triangle\").gain(.25)",
              "task": "Transformez la phrase pour qu'elle finisse sur c5.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "note(\"c4 eb4 g4 c5\").s(\"triangle\").gain(.25)",
              "whatToListenFor": "La phrase doit sembler monter vers une résolution.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "Une mélodie est aussi une direction."
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
              "concept": "Cet exercice travaille variation, reverse. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "note(\"c4 eb4 g4 bb4\").s(\"triangle\").gain(.25)",
              "task": "Ajoutez une inversion en fin de phrase.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "note(\"c4 eb4 g4 bb4\").lastOf(4, x => x.rev()).s(\"triangle\").gain(.25)",
              "whatToListenFor": "La phrase doit garder son identité et varier périodiquement.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "Une bonne variation conserve un lien avec le motif initial."
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
              "concept": "Cet exercice travaille pulsation, subdivision. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "stack(\n  s(\"bd*4\"),\n  s(\"hh*8\").gain(.25),\n  s(\"cp*16\").gain(.12)\n)",
              "task": "Écoutez les trois niveaux de vitesse.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "stack(\n  s(\"bd*4\").gain(.65),\n  s(\"hh*8\").gain(.25),\n  s(\"cp*16\").gain(.12)\n)",
              "whatToListenFor": "Vous devez entendre une grille rythmique à plusieurs niveaux.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "La subdivision découpe une pulsation en valeurs plus fines."
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
              "concept": "Cet exercice travaille offbeat, contretemps. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "stack(\n  s(\"bd*4\"),\n  s(\"~ hh ~ hh\").gain(.25)\n)",
              "task": "Écoutez comment le hat pousse entre les kicks.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "stack(\n  s(\"bd*4\").gain(.65),\n  s(\"~ hh ~ hh\").gain(.25)\n)",
              "whatToListenFor": "Le contretemps doit créer une sensation de rebond.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "Le contretemps est un appui entre les appuis principaux."
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
              "concept": "Cet exercice travaille polyrythmie, 3 contre 4. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "stack(\n  s(\"bd(3,8)\"),\n  s(\"hh(4,8)\").gain(.25)\n)",
              "task": "Écoutez deux répartitions dans le même cadre.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "stack(\n  s(\"bd(3,8)\").gain(.7),\n  s(\"hh(4,8)\").gain(.25)\n)",
              "whatToListenFor": "Le rapport entre 3 et 4 doit être perceptible.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "La polyrythmie superpose plusieurs découpes du temps."
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
              "concept": "Cet exercice travaille polymétrie, longueurs. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "stack(\n  note(\"c4 e4 g4\").slow(3).s(\"sine\"),\n  note(\"g4 a4 c5 e5\").slow(4).s(\"triangle\").gain(.25)\n)",
              "task": "Écoutez les réalignements progressifs.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "stack(\n  note(\"c4 e4 g4\").slow(3).s(\"sine\").gain(.25),\n  note(\"g4 a4 c5 e5\").slow(4).s(\"triangle\").gain(.18)\n)",
              "whatToListenFor": "Les notes ne se rencontrent pas toujours de la même manière.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "La polymétrie superpose des longueurs de phrase différentes."
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
              "concept": "Cet exercice travaille forme, arrangement. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "stack(\n  note(\"c3 eb3 g3 bb3\").s(\"sine\").slow(8).room(.8).gain(.25),\n  s(\"bd ~ ~ ~\").gain(.25)\n)",
              "task": "Préparez une introduction, un développement et un retrait.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "stack(\n  note(\"c3 eb3 g3 bb3\").s(\"sine\").slow(8).room(.8).gain(.25),\n  s(\"bd ~ ~ ~\").gain(.25),\n  s(\"~ hh ~ hh\").gain(.12).degradeBy(.2)\n)",
              "whatToListenFor": "La pièce doit pouvoir évoluer par étapes simples.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "La forme organise les transformations dans le temps."
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
              "concept": "Cet exercice travaille contraste, instabilité. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "stack(\n  note(\"c3 eb3 g3 bb3\").s(\"sine\").slow(8).room(.8).gain(.25),\n  s(\"bd(3,8)\").gain(.6),\n  s(\"hh*16\").gain(.15).degradeBy(.4)\n).cpm(88)",
              "task": "Ajoutez une variation de vitesse uniquement sur les hats.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "stack(\n  note(\"c3 eb3 g3 bb3\").s(\"sine\").slow(8).room(.8).gain(.25),\n  s(\"bd(3,8)\").gain(.6),\n  s(\"hh*16\").speed(\"<1 .5 2 -1>\").gain(.15).degradeBy(.4)\n).cpm(88)",
              "whatToListenFor": "La pièce doit combiner fond calme et détails instables.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "L'IDM peut reposer sur une tension entre stabilité et accident."
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
              "concept": "Cet exercice travaille mélodie, delay. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "note(\"c5 eb5 g5 bb5\").s(\"triangle\").slow(3).gain(.18)",
              "task": "Ajoutez un delay et une reverb pour placer la phrase en arrière-plan.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "note(\"c5 eb5 g5 bb5\").s(\"triangle\").slow(3).delay(.25).room(.7).gain(.18)",
              "whatToListenFor": "La mélodie doit flotter plutôt que dominer.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "Une phrase fragile peut donner une identité à une texture complexe."
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
              "concept": "Cet exercice travaille break, slice, sometimes. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "samples('github:tidalcycles/dirt-samples')\n\ns(\"breaks125\").fit().slice(8, \"0 1 [2 2] 3 <4 7> 5 [6 0] 7\").gain(.55)",
              "task": "Ajoutez une inversion occasionnelle et une légère suppression d'événements.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "samples('github:tidalcycles/dirt-samples')\n\ns(\"breaks125\").fit().slice(8, \"0 1 [2 2] 3 <4 7> 5 [6 0] 7\").sometimes(x => x.speed(\"-1\")).degradeBy(.1).gain(.55)",
              "whatToListenFor": "Le break doit rester lisible malgré les accidents.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "Un break IDM peut être fragmenté sans être détruit."
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
              "concept": "Cet exercice travaille forme, live coding. Le but est d'associer une modification précise du code à un effet sonore clairement identifiable.",
              "starterCode": "stack(\n  note(\"c3 eb3 g3 bb3\").s(\"sine\").slow(8).room(.85).gain(.25),\n  s(\"bd(5,16)\").gain(.55),\n  s(\"hh(7,16)\").speed(\"<1 .5 2 -1>\").degradeBy(.25).gain(.15),\n  note(\"c5 eb5 g5\").s(\"triangle\").slow(3).delay(.2).gain(.18)\n).cpm(86)",
              "task": "Préparez trois versions : exposition, fragmentation, reconstruction.",
              "hintLevel1": "Modifiez une seule partie du code, puis écoutez avant d'ajouter une autre transformation.",
              "hintLevel2": "Comparez votre version avec la correction, puis revenez à votre code pour isoler la différence.",
              "solution": "stack(\n  note(\"c3 eb3 g3 bb3\").s(\"sine\").slow(8).room(.85).gain(.25),\n  s(\"bd(5,16)\").gain(.55),\n  s(\"hh(7,16)\").speed(\"<1 .5 2 -1>\").degradeBy(.25).gain(.15),\n  note(\"c5 eb5 g5\").s(\"triangle\").slow(3).delay(.2).gain(.18)\n).cpm(86)",
              "whatToListenFor": "La pièce doit pouvoir évoluer sans rupture totale d'identité.",
              "commonMistake": "L'erreur fréquente consiste à modifier trop de paramètres à la fois. Dans Strudel, progressez par petits écarts pour comprendre l'effet de chaque fonction.",
              "summary": "L'IDM devient lisible quand la complexité est organisée."
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
      "starterCode": "stack(\n  note(\"c3 eb3 g3 bb3\").s(\"sine\").slow(8).room(.9).gain(.25),\n  note(\"g4 bb4 c5 eb5\").s(\"triangle\").slow(6).delay(.25).gain(.16),\n  s(\"bd ~ ~ ~\").gain(.22),\n  s(\"~ hh ~ hh\").gain(.1).degradeBy(.2)\n).cpm(52)"
    },
    {
      "id": "pf_02",
      "title": "Mini-performance beat",
      "learningGoal": "Composer un beat urbain avec variation de hats et sample.",
      "deliverable": "Un code Strudel avec kick, snare, hats, variation et sample transformé.",
      "starterCode": "stack(\n  s(\"bd ~ ~ bd\").gain(.7),\n  s(\"~ sd ~ sd\").gain(.5),\n  s(\"hh*8 [hh hh hh hh] hh*8\").gain(.16),\n  s(\"cp ~ [cp cp] ~\").speed(\"<1 .8 1.2>\").gain(.25)\n).cpm(78)"
    },
    {
      "id": "pf_03",
      "title": "Mini-performance dancefloor",
      "learningGoal": "Composer une boucle techno, house ou trance avec tension progressive.",
      "deliverable": "Un code Strudel avec kick 4 to the floor, bassline, hat offbeat, stab et filtre évolutif.",
      "starterCode": "stack(\n  s(\"bd*4\").gain(.7),\n  s(\"~ hh ~ hh\").gain(.25),\n  note(\"c2 ~ c2 eb2\").s(\"sawtooth\").lpf(\"<300 500 800 1200>\").gain(.3),\n  note(\"c4 eb4 g4\").s(\"sawtooth\").lpf(900).release(.2).gain(.18)\n).cpm(124)"
    },
    {
      "id": "pf_04",
      "title": "Mini-performance glitch IDM",
      "learningGoal": "Composer une pièce hybride avec texture, break découpé, variations génératives et reconstruction.",
      "deliverable": "Un code Strudel avec texture ambient, break glitch, polyrythmie et variations conditionnelles.",
      "starterCode": "samples('github:tidalcycles/dirt-samples')\n\nstack(\n  note(\"c3 eb3 g3 bb3\").s(\"sine\").slow(8).room(.85).gain(.22),\n  s(\"breaks125\").fit().slice(8, \"0 1 [2 2] 3 <4 7> 5 [6 0] 7\").sometimes(x => x.speed(\"-1\")).degradeBy(.1).gain(.45),\n  s(\"bd(5,16)\").gain(.45),\n  s(\"hh(7,16)\").speed(\"<1 .5 2 -1>\").degradeBy(.25).gain(.12)\n).cpm(86)"
    }
  ],
  "glossary": [
    {
      "term": "Pattern",
      "definition": "Motif musical décrit par du code et transformable par des fonctions.",
      "example": "s(\"bd ~ sd ~\")"
    },
    {
      "term": "Cycle",
      "definition": "Unité temporelle de base dans laquelle les événements sont répartis.",
      "example": "s(\"bd sd cp hh\")"
    },
    {
      "term": "Mini-notation",
      "definition": "Syntaxe compacte utilisée entre guillemets pour écrire rythmes, notes, silences, répétitions et subdivisions.",
      "example": "s(\"bd ~ sd ~, hh*8\")"
    },
    {
      "term": "Sample",
      "definition": "Son enregistré utilisé comme matériau musical.",
      "example": "s(\"bd sd hh\")"
    },
    {
      "term": "Synthèse",
      "definition": "Production directe d'un son par une forme d'onde comme sine, triangle, sawtooth ou square.",
      "example": "note(\"c3 eb3 g3\").s(\"sine\")"
    },
    {
      "term": "Couche",
      "definition": "Pattern superposé à d'autres patterns dans un arrangement.",
      "example": "stack(s(\"bd\"), s(\"hh*8\"))"
    },
    {
      "term": "Polyrythmie",
      "definition": "Coexistence de plusieurs divisions rythmiques dans un même cadre temporel.",
      "example": "stack(s(\"bd(3,8)\"), s(\"hh(4,8)\"))"
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
      "example": "s(\"hh*16\").speed(\"<1 2 .5 -1>\").degradeBy(.25)"
    },
    {
      "term": "IDM",
      "definition": "Approche électronique hybride combinant textures, rythmes fragmentés, sound design, variations algorithmiques et formes non linéaires.",
      "example": "stack(note(\"c3 eb3 g3\").slow(8), s(\"bd(5,16)\"), s(\"hh(7,16)\").degradeBy(.25))"
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
  ]
};
