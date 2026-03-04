// Simulateur d'entretien de naturalisation
// Questions ouvertes typiques posées lors des entretiens de naturalisation française

export const questionsEntretien = [
    {
        id: 1,
        categorie: 'Motivation',
        icon: 'heart',
        question: "Pourquoi souhaitez-vous devenir citoyen(ne) français(e) ?",
        conseil: "Soyez sincère et personnel. L'administration cherche un attachement réel aux valeurs républicaines, pas une formule apprise par cœur.",
        pointsCles: [
            "Attachement aux valeurs de la République (liberté, égalité, fraternité, laïcité)",
            "Projet de vie ancré en France (famille, travail, liens sociaux)",
            "Intégration réussie et durable (durée de résidence, langue maîtrisée)",
            "Désir de pleinement participer à la vie civique et démocratique",
            "Sentiment d'appartenance à la communauté nationale"
        ]
    },
    {
        id: 2,
        categorie: 'Valeurs',
        icon: 'scale',
        question: "Qu'est-ce que la laïcité pour vous, et comment la vivez-vous au quotidien ?",
        conseil: "Montrez que vous comprenez la distinction entre la foi personnelle (privée) et la vie publique neutre. Donnez des exemples concrets.",
        pointsCles: [
            "Séparation de l'Église et de l'État (loi de 1905)",
            "Respect de toutes les croyances, sans en imposer aucune dans l'espace public",
            "Neutralité des agents et services publics",
            "Liberté de conscience : chacun peut croire ou ne pas croire",
            "Respect de la laïcité à l'école et dans les institutions"
        ]
    },
    {
        id: 3,
        categorie: 'Intégration',
        icon: 'users',
        question: "Décrivez votre parcours depuis votre arrivée en France.",
        conseil: "Valorisez votre intégration linguistique, professionnelle et sociale. Les efforts concrets comptent davantage que le temps écoulé.",
        pointsCles: [
            "Apprentissage et maîtrise de la langue française (niveau B1 minimum requis)",
            "Insertion professionnelle (emploi, formation, auto-entreprise…)",
            "Vie de famille et liens sociaux en France",
            "Participation à la vie locale (associations, quartier, école des enfants)",
            "Adhésion et respect des lois et valeurs françaises"
        ]
    },
    {
        id: 4,
        categorie: 'Institutions',
        icon: 'landmark',
        question: "Pouvez-vous me citer les principales institutions de la République française et leurs rôles ?",
        conseil: "Concentrez-vous sur les 3 pouvoirs. Ne paniquez pas si vous oubliez un détail, l'essentiel est de montrer que vous comprenez le fonctionnement démocratique.",
        pointsCles: [
            "Pouvoir exécutif : Président de la République (élu pour 5 ans) + Premier ministre + Gouvernement",
            "Pouvoir législatif : Parlement = Assemblée nationale (577 députés) + Sénat (348 sénateurs)",
            "Pouvoir judiciaire : tribunaux, cours d'appel, Cour de cassation — garantit l'application de la loi",
            "Conseil Constitutionnel : vérifie la conformité des lois à la Constitution",
            "Séparation des pouvoirs pour garantir l'État de droit"
        ]
    },
    {
        id: 5,
        categorie: 'Histoire',
        icon: 'book-open',
        question: "Que représente le 14 juillet pour vous ?",
        conseil: "Rattachez la date à la Révolution française et à ses valeurs. Montrez que vous connaissez aussi la tradition contemporaine (défilé militaire).",
        pointsCles: [
            "Date symbolique de la prise de la Bastille (1789) et du début de la Révolution française",
            "Naissance des valeurs républicaines : liberté, égalité, fraternité",
            "Fête nationale depuis 1880 — célébration de la République",
            "Défilé militaire sur les Champs-Élysées, feux d'artifice dans toute la France",
            "Symbole de l'unité nationale et de la souveraineté du peuple"
        ]
    },
    {
        id: 6,
        categorie: 'Droits & Devoirs',
        icon: 'shield',
        question: "Quels sont, selon vous, les principaux devoirs d'un citoyen français ?",
        conseil: "Equilibrez les droits et les devoirs : la citoyenneté implique une réciprocité entre l'individu et la collectivité nationale.",
        pointsCles: [
            "Respecter les lois de la République",
            "Payer ses impôts (financer les services publics communs)",
            "Participer à la vie démocratique : voter et s'informer",
            "Défense de la patrie si nécessaire (journée défense et citoyenneté)",
            "Respecter et protéger l'environnement (Charte de l'environnement)"
        ]
    },
    {
        id: 7,
        categorie: 'Égalité',
        icon: 'users',
        question: "Comment comprenez-vous le principe d'égalité entre les femmes et les hommes ?",
        conseil: "L'égalité homme-femme est un principe constitutionnel fort en France. Montrez que vous l'intégrez dans votre vie quotidienne.",
        pointsCles: [
            "Principe constitutionnel : égalité de droits, de devoirs et d'opportunités",
            "Égalité salariale pour un travail identique",
            "Partage des responsabilités parentales et familiales",
            "Refus de toute discrimination sexiste dans le cadre professionnel et personnel",
            "La loi punit les violences conjugales et le harcèlement sexuel"
        ]
    },
    {
        id: 8,
        categorie: 'Société',
        icon: 'school',
        question: "Quelle est l'importance de l'école dans la République française ?",
        conseil: "L'école républicaine est un pilier fondamental. Mentionnez l'obligation scolaire, la laïcité à l'école et le rôle émancipateur de l'éducation.",
        pointsCles: [
            "École obligatoire de 3 à 16 ans — droit fondamental de l'enfant",
            "École gratuite et laïque dans les établissements publics",
            "Lieu d'apprentissage de la citoyenneté et des valeurs républicaines",
            "Égalité des chances : mêmes programmes pour tous les élèves",
            "Jules Ferry (1881-1882) : fondateur de l'école publique laïque et gratuite"
        ]
    },
    {
        id: 9,
        categorie: 'Identité',
        icon: 'flag',
        question: "Que représentent pour vous les symboles de la République (drapeau, Marseillaise, Marianne) ?",
        conseil: "Allez au-delà de la description physique. Reliez chaque symbole à une valeur ou à un moment de l'histoire nationale.",
        pointsCles: [
            "Drapeau tricolore (bleu-blanc-rouge) : né de la Révolution, symbole de l'unité nationale",
            "La Marseillaise : hymne national (1792), chant de liberté et de résistance",
            "Marianne : allégorie féminine de la République, incarne la liberté et la raison",
            "Le coq gaulois : symbole de la vigilance et de la ténacité française",
            "La devise « Liberté, Égalité, Fraternité » présente sur les bâtiments publics"
        ]
    },
    {
        id: 10,
        categorie: 'Europe',
        icon: 'globe',
        question: "Quelle est votre vision de la place de la France dans l'Union européenne ?",
        conseil: "Montrez que vous comprenez que la France est un pays fondateur de l'UE et qu'être français implique aussi une dimension européenne.",
        pointsCles: [
            "La France est un pays fondateur de la construction européenne (CECA 1951, Traité de Rome 1957)",
            "L'UE permet la paix et la coopération économique entre pays membres",
            "L'euro est la monnaie commune de la zone euro",
            "Les citoyens français peuvent vivre, travailler et étudier librement dans l'UE",
            "La France joue un rôle de premier plan dans les décisions politiques européennes"
        ]
    },
    {
        id: 11,
        categorie: 'Motivation',
        icon: 'heart',
        question: "Avez-vous rencontré des difficultés dans votre parcours d'intégration ? Comment les avez-vous surmontées ?",
        conseil: "Soyez honnête. Les difficultés surmontées montrent votre résilience et votre engagement. Ne dévalorisez pas votre parcours.",
        pointsCles: [
            "La barrière de la langue et les efforts pour l'apprendre et la pratiquer",
            "Les démarches administratives (titre de séjour, reconnaissance de diplômes…)",
            "L'adaptation culturelle et la construction d'un réseau social en France",
            "La participation à des cours, associations, formations pour progresser",
            "Le soutien de la famille, des amis ou des institutions françaises (CAF, Pôle Emploi, associations…)"
        ]
    },
    {
        id: 12,
        categorie: 'Civisme',
        icon: 'vote',
        question: "Si vous devenez Français(e), allez-vous voter ? Pourquoi est-ce important ?",
        conseil: "L'agent cherche à savoir si vous comprenez que les droits civiques impliquent une responsabilité citoyenne active.",
        pointsCles: [
            "Le droit de vote est un droit fondamental acquis avec la naturalisation",
            "Voter est un acte civique qui permet d'influencer les décisions politiques",
            "L'abstention affaiblit la démocratie représentative",
            "Participer aux élections locales, nationales et européennes",
            "Possibilité de s'engager dans la vie politique, associative ou syndicale"
        ]
    },
    {
        id: 13,
        categorie: 'Valeurs',
        icon: 'scale',
        question: "Comment habitez-vous la notion de fraternité au quotidien ?",
        conseil: "Donnez des exemples concrets de solidarité : aide aux voisins, bénévolat, participation associative… La fraternité se vit, elle ne se déclame pas.",
        pointsCles: [
            "Solidarité concrète : aide aux personnes âgées, isolées, en difficulté dans le quartier",
            "Bénévolat associatif (aide alimentaire, appui scolaire, accueil de réfugiés…)",
            "Cotisations sociales : expression collective de la fraternité nationale",
            "Respect et bienveillance envers les personnes d'origines et de cultures différentes",
            "Application du principe « aider son prochain » dans la vie professionnelle et personnelle"
        ]
    },
    {
        id: 14,
        categorie: 'Droits & Devoirs',
        icon: 'shield',
        question: "Un ami vous demande d'effectuer des travaux chez lui sans le déclarer. Comment réagissez-vous ?",
        conseil: "Cette question teste votre rapport à la légalité et votre compréhension des devoirs civiques (impôts, travail déclaré). Soyez direct et sans ambiguïté.",
        pointsCles: [
            "Le travail non déclaré est illégal — il s'agit de travail au noir",
            "Il prive l'État de cotisations sociales qui financent les services communs",
            "Il prive le travailleur de droits (assurance maladie, retraite, chômage)",
            "Je refuserais poliment en expliquant les risques légaux",
            "Je proposerais une alternative légale (contrat de travail, auto-entrepreneur…)"
        ]
    },
    {
        id: 15,
        categorie: 'Avenir',
        icon: 'star',
        question: "Quel est votre projet de vie en France pour les prochaines années ?",
        conseil: "Montrez un ancrage durable et concret en France : travail, famille, projets. L'administration veut s'assurer que votre demande n'est pas uniquement administrative.",
        pointsCles: [
            "Continuité ou évolution professionnelle en France",
            "Investissement dans l'éducation des enfants (scolarisation en France)",
            "Participation à la vie locale et associative",
            "Contribution fiscale et sociale (impôts, cotisations)",
            "Transmission des valeurs républicaines à sa famille et son entourage"
        ]
    }
]

export const categoriesEntretien = ['Toutes', 'Motivation', 'Valeurs', 'Intégration', 'Institutions', 'Histoire', 'Droits & Devoirs', 'Égalité', 'Société', 'Identité', 'Europe', 'Civisme', 'Avenir']
