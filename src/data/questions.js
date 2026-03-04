// Questions data converted from CSV
// Categories: Principes et valeurs, Système politique, Droits et devoirs, Histoire et Géo, Vie en société
// Levels: csp (CSP1 + CSP2), cr (CR.csv), nat (NAT.csv), sit (Situations du quotidien)

export const examTypes = [
    {
        id: 'csp',
        name: 'CSP',
        fullName: 'Carte de Séjour Pluriannuelle',
        level: 'Standard',
        description: 'Niveau de base pour la carte de séjour pluriannuelle',
        color: 'republic-blue',
        icon: '📋',
        questionCount: 40,
        passThreshold: 32,
        levels: ['csp'] // Only CSP1 questions
    },
    {
        id: 'cr',
        name: 'CR',
        fullName: 'Carte de Résident',
        level: 'Avancé',
        description: 'Niveau avancé pour la carte de résident',
        color: 'republic-gold',
        icon: '🏅',
        questionCount: 40,
        passThreshold: 32,
        levels: ['csp', 'cr'] // CSP1 + CSP2 questions
    },
    {
        id: 'nat',
        name: 'NAT',
        fullName: 'Naturalisation',
        level: 'Expert',
        description: 'Niveau expert pour la naturalisation française',
        color: 'republic-red',
        icon: '🇫🇷',
        questionCount: 40,
        passThreshold: 32,
        levels: ['csp', 'cr', 'nat'] // All questions
    }

]

export const categories = [
    {
        id: 'principes',
        name: 'Principes et valeurs',
        icon: 'bonnet',
        color: 'republic-blue',
        description: 'Liberté, égalité, fraternité et laïcité'
    },
    {
        id: 'politique',
        name: 'Système politique',
        icon: 'institution',
        color: 'republic-red',
        description: 'Institutions, pouvoirs et élections'
    },
    {
        id: 'droits',
        name: 'Droits et devoirs',
        icon: 'balance',
        color: 'republic-gold',
        description: 'Lois, justice et citoyenneté'
    },
    {
        id: 'histoire',
        name: 'Histoire et Géo',
        icon: 'livre',
        color: 'republic-blue',
        description: 'Histoire de France et géographie'
    },
    {
        id: 'societe',
        name: 'Vie en société',
        icon: 'poignee',
        color: 'republic-red',
        description: 'Vie quotidienne et services publics'
    }
]

export const questions = [
    // ========== CSP1 — Questions de base (niveau CSP) ==========
    { id: 1, categoryId: 'principes', level: 'csp', type: 'connaissance', question: "À quoi correspond la date du 14 juillet ?", options: ["La fin de la guerre", "La fête nationale", "L'élection du Président"], correctAnswer: 1 },
    { id: 2, categoryId: 'principes', level: 'csp', type: 'connaissance', question: "Quel est l'un des symboles de la République française ?", options: ["Le drapeau tricolore", "Le lion", "L'aigle"], correctAnswer: 0 },
    { id: 3, categoryId: 'principes', level: 'csp', type: 'connaissance', question: "Le principe d'égalité signifie que :", options: ["Chacun fait ce qu'il veut", "La loi est la même pour tous", "Tout est gratuit"], correctAnswer: 1 },
    { id: 4, categoryId: 'principes', level: 'csp', type: 'connaissance', question: "\"Liberté, égalité, fraternité\", c'est :", options: ["Un poème", "La devise de la République", "Une chanson"], correctAnswer: 1 },
    { id: 5, categoryId: 'principes', level: 'csp', type: 'connaissance', question: "A-t-on le droit d'insulter quelqu'un pour sa différence ?", options: ["Oui", "Non, c'est un délit", "Seulement si c'est vrai"], correctAnswer: 1 },
    { id: 6, categoryId: 'principes', level: 'csp', type: 'connaissance', question: "Certains métiers peuvent-ils être réservés aux hommes ?", options: ["Oui", "Non, tous sont mixtes", "Seulement dans l'armée"], correctAnswer: 1 },
    { id: 7, categoryId: 'principes', level: 'csp', type: 'connaissance', question: "De quand date la Constitution de la Ve République ?", options: ["1789", "1945", "1958"], correctAnswer: 2 },
    { id: 8, categoryId: 'principes', level: 'csp', type: 'connaissance', question: "Le régime de la France est :", options: ["Une monarchie", "Une République", "Un Empire"], correctAnswer: 1 },
    { id: 9, categoryId: 'principes', level: 'csp', type: 'connaissance', question: "Lequel de ces symboles représente officiellement la République ?", options: ["Marianne", "Le lys", "Le château"], correctAnswer: 0 },
    { id: 10, categoryId: 'principes', level: 'csp', type: 'connaissance', question: "Où peut-on voir la devise de la République ?", options: ["Sur les mairies", "Sur les cinémas", "Dans les gares"], correctAnswer: 0 },
    { id: 11, categoryId: 'principes', level: 'csp', type: 'connaissance', question: "Qu'est-ce que l'égalité ?", options: ["Le même salaire", "Les mêmes droits et devoirs", "Le même nom"], correctAnswer: 1 },
    { id: 12, categoryId: 'principes', level: 'csp', type: 'connaissance', question: "Que signifie la liberté ?", options: ["Faire tout ce qu'on veut", "Ne pas payer d'impôts", "Pouvoir agir sans nuire à autrui"], correctAnswer: 2 },
    { id: 13, categoryId: 'principes', level: 'csp', type: 'connaissance', question: "Que signifie le mot \"fraternité\" ?", options: ["La solidarité", "La force", "La famille uniquement"], correctAnswer: 0 },
    { id: 14, categoryId: 'principes', level: 'csp', type: 'connaissance', question: "Quel animal est un symbole de la France ?", options: ["Le coq", "L'ours", "Le loup"], correctAnswer: 0 },
    { id: 15, categoryId: 'principes', level: 'csp', type: 'connaissance', question: "Quel est l'un des rôles des associations ?", options: ["Faire la loi", "Agir pour l'intérêt général", "Remplacer la police"], correctAnswer: 1 },
    { id: 16, categoryId: 'principes', level: 'csp', type: 'connaissance', question: "Quel est le nom de l'hymne national ?", options: ["La Marseillaise", "Le Chant des Partisans", "La Parisienne"], correctAnswer: 0 },
    { id: 17, categoryId: 'principes', level: 'csp', type: 'connaissance', question: "Quel symbole est tricolore ?", options: ["La Marianne", "Le drapeau français", "Le coq"], correctAnswer: 1 },
    { id: 18, categoryId: 'principes', level: 'csp', type: 'connaissance', question: "Quelle est la date de la fête nationale française ?", options: ["1er mai", "14 juillet", "11 novembre"], correctAnswer: 1 },
    { id: 19, categoryId: 'principes', level: 'csp', type: 'connaissance', question: "Quelle est la devise de la République française ?", options: ["Paix et Travail", "Liberté Égalité Fraternité", "Justice et Patrie"], correctAnswer: 1 },
    { id: 20, categoryId: 'principes', level: 'csp', type: 'connaissance', question: "Quelle est la langue officielle de la République ?", options: ["L'anglais", "Le français", "Toutes les langues"], correctAnswer: 1 },
    { id: 21, categoryId: 'principes', level: 'csp', type: 'connaissance', question: "Quelle liberté permet à chacun d'exprimer ses idées ?", options: ["Liberté de circulation", "Liberté d'expression", "Liberté d'association"], correctAnswer: 1 },
    { id: 22, categoryId: 'principes', level: 'csp', type: 'connaissance', question: "Quelles sont les couleurs du drapeau français ?", options: ["Bleu blanc rouge", "Vert blanc rouge", "Noir jaune rouge"], correctAnswer: 0 },
    { id: 23, categoryId: 'principes', level: 'csp', type: 'connaissance', question: "Qu'est-ce que la Marseillaise ?", options: ["Un opéra", "L'hymne national", "Une danse"], correctAnswer: 1 },
    { id: 24, categoryId: 'principes', level: 'csp', type: 'connaissance', question: "Que se passe-t-il sur les Champs Élysées le 14 juillet ?", options: ["Un concert de rock", "Un défilé militaire", "Une course de vélo"], correctAnswer: 1 },
    { id: 25, categoryId: 'principes', level: 'csp', type: 'connaissance', question: "Qui est Marianne ?", options: ["Une ancienne reine", "L'allégorie de la République", "Une sainte"], correctAnswer: 1 },
    { id: 26, categoryId: 'principes', level: 'csp', type: 'connaissance', question: "Une personne peut-elle changer librement de religion ?", options: ["Non", "Oui", "Seulement les citoyens"], correctAnswer: 1 },
    { id: 27, categoryId: 'principes', level: 'csp', type: 'connaissance', question: "\"La France est une République indivisible, ..., démocratique et sociale\"", options: ["laïque", "royale", "militaire"], correctAnswer: 0 },
    { id: 28, categoryId: 'principes', level: 'csp', type: 'connaissance', question: "En quelle année la séparation des Églises et de l'État ?", options: ["1789", "1905", "1945"], correctAnswer: 1 },
    { id: 29, categoryId: 'principes', level: 'csp', type: 'connaissance', question: "Que permet le principe de laïcité ?", options: ["L'athéisme obligatoire", "La liberté de conscience", "Le choix des profs"], correctAnswer: 1 },
    { id: 30, categoryId: 'principes', level: 'csp', type: 'connaissance', question: "Pourquoi la laïcité doit être respectée à l'école ?", options: ["Pour la neutralité", "Pour punir les élèves", "Pour faire des économies"], correctAnswer: 0 },
    { id: 31, categoryId: 'principes', level: 'csp', type: 'connaissance', question: "Un enfant peut-il refuser l'école pour motif religieux ?", options: ["Oui", "Non, l'école est obligatoire", "Seulement le vendredi"], correctAnswer: 1 },

    // Système politique
    { id: 32, categoryId: 'politique', level: 'csp', type: 'connaissance', question: "Qui nomme le Premier ministre ?", options: ["Le peuple", "Le Président", "Le Sénat"], correctAnswer: 1, courseId: 'institutions#president', explanation: "Le Président de la République nomme le Premier ministre et met fin à ses fonctions." },
    { id: 33, categoryId: 'politique', level: 'csp', type: 'connaissance', question: "Le Parlement est composé :", options: ["Des ministres", "De l'Assemblée et du Sénat", "Des maires"], correctAnswer: 1, courseId: 'institutions#parlement', explanation: "Le Parlement vote les lois et comprend l'Assemblée nationale (députés) et le Sénat (sénateurs)." },
    { id: 34, categoryId: 'politique', level: 'csp', type: 'connaissance', question: "Qu'est-ce que le pouvoir exécutif ?", options: ["Voter les lois", "Appliquer les lois", "Rendre la justice"], correctAnswer: 1, courseId: 'institutions#separation-pouvoirs', explanation: "Le pouvoir exécutif, assuré par le Président et le Gouvernement, est chargé d'appliquer les lois et de conduire la politique de la Nation." },
    { id: 35, categoryId: 'politique', level: 'csp', type: 'connaissance', question: "A-t-on le droit de ne pas respecter une loi ?", options: ["Oui si on l'aime pas", "Non, nul n'est censé l'ignorer", "Oui si on est riche"], correctAnswer: 1, courseId: 'droits#droits-citoyen', explanation: "« Nul n'est censé ignorer la loi ». La loi garantit le vivre-ensemble et s'applique à tous." },
    { id: 36, categoryId: 'politique', level: 'csp', type: 'connaissance', question: "Qui doit respecter la loi ?", options: ["Seulement les citoyens", "Tout le monde", "Seulement les élus"], correctAnswer: 1, courseId: 'droits#droits-citoyen', explanation: "La loi est la même pour tous en France, du plus riche au plus modeste, du citoyen commun à l'élu." },
    { id: 37, categoryId: 'politique', level: 'csp', type: 'connaissance', question: "Quel pouvoir détient un juge ?", options: ["Législatif", "Judiciaire", "Exécutif"], correctAnswer: 1, courseId: 'institutions#separation-pouvoirs', explanation: "Le pouvoir judiciaire veille au respect des lois et sanctionne leur non-respect. Il est indépendant." },
    { id: 38, categoryId: 'politique', level: 'csp', type: 'connaissance', question: "Qui est élu lors des législatives ?", options: ["Le Président", "Les députés", "Le Maire"], correctAnswer: 1 },
    { id: 39, categoryId: 'politique', level: 'csp', type: 'connaissance', question: "Combien de députés à l'Assemblée nationale ?", options: ["300", "577", "600"], correctAnswer: 1 },
    { id: 40, categoryId: 'politique', level: 'csp', type: 'connaissance', question: "Qui est élu lors des municipales ?", options: ["Le Président", "Le conseil municipal/Maire", "Le Député"], correctAnswer: 1 },
    { id: 41, categoryId: 'politique', level: 'csp', type: 'connaissance', question: "À partir de quel âge a-t-on le droit de voter ?", options: ["16 ans", "18 ans", "21 ans"], correctAnswer: 1 },
    { id: 42, categoryId: 'politique', level: 'csp', type: 'connaissance', question: "Durée du mandat du Président ?", options: ["4 ans", "5 ans", "7 ans"], correctAnswer: 1 },
    { id: 43, categoryId: 'politique', level: 'csp', type: 'connaissance', question: "Durée du mandat des députés ?", options: ["5 ans", "6 ans", "3 ans"], correctAnswer: 0 },
    { id: 44, categoryId: 'politique', level: 'csp', type: 'connaissance', question: "Durée du mandat des sénateurs ?", options: ["5 ans", "6 ans", "9 ans"], correctAnswer: 1 },
    { id: 45, categoryId: 'politique', level: 'csp', type: 'connaissance', question: "Condition nécessaire pour voter ?", options: ["Être propriétaire", "Être de nationalité française", "Avoir un emploi"], correctAnswer: 1 },
    { id: 46, categoryId: 'politique', level: 'csp', type: 'connaissance', question: "Que signifie « suffrage universel » ?", options: ["Tout le monde peut voter", "Seuls les hommes votent", "Seuls les riches votent"], correctAnswer: 0 },
    { id: 47, categoryId: 'politique', level: 'csp', type: 'connaissance', question: "Quels sont les trois pouvoirs ?", options: ["Police Justice Armée", "Législatif Exécutif Judiciaire", "Mairie Région État"], correctAnswer: 1 },
    { id: 48, categoryId: 'politique', level: 'csp', type: 'connaissance', question: "Qui possède le pouvoir législatif ?", options: ["Le Parlement", "Le Président", "Les tribunaux"], correctAnswer: 0 },
    { id: 49, categoryId: 'politique', level: 'csp', type: 'connaissance', question: "Qui vote les lois ?", options: ["Le Gouvernement", "Le Parlement", "Le Préfet"], correctAnswer: 1 },
    { id: 50, categoryId: 'politique', level: 'csp', type: 'connaissance', question: "Combien de départements en France ?", options: ["95", "101", "110"], correctAnswer: 1 },
    { id: 51, categoryId: 'politique', level: 'csp', type: 'connaissance', question: "Qui représente l'État dans le département ?", options: ["Le Maire", "Le Préfet", "Le Député"], correctAnswer: 1 },
    { id: 52, categoryId: 'politique', level: 'csp', type: 'connaissance', question: "Qui dirige la commune ?", options: ["Le Maire", "Le Gouverneur", "Le Préfet"], correctAnswer: 0 },
    { id: 53, categoryId: 'politique', level: 'csp', type: 'connaissance', question: "Le Président a-t-il tous les pouvoirs ?", options: ["Oui", "Non, les pouvoirs sont séparés", "Seulement en été"], correctAnswer: 1 },
    { id: 54, categoryId: 'politique', level: 'csp', type: 'connaissance', question: "Quel pays est fondateur de l'UE ?", options: ["Royaume-Uni", "France", "Espagne"], correctAnswer: 1 },
    { id: 55, categoryId: 'politique', level: 'csp', type: 'connaissance', question: "Quelle est la monnaie en France ?", options: ["Le Franc", "L'Euro", "La Peseta"], correctAnswer: 1 },

    // Droits et devoirs
    { id: 56, categoryId: 'droits', level: 'csp', type: 'connaissance', question: "Comment s'appelle le texte des droits et devoirs ?", options: ["Le Code de la route", "La Charte des droits et devoirs", "Le Journal Officiel"], correctAnswer: 1 },
    { id: 57, categoryId: 'droits', level: 'csp', type: 'connaissance', question: "Date de la Déclaration des droits de l'homme ?", options: ["1789", "1848", "1958"], correctAnswer: 0 },
    { id: 58, categoryId: 'droits', level: 'csp', type: 'connaissance', question: "Une femme peut avorter :", options: ["Non", "Oui", "Seulement si mariée"], correctAnswer: 1 },
    { id: 59, categoryId: 'droits', level: 'csp', type: 'connaissance', question: "La peine de mort est :", options: ["Autorisée", "Abolie", "Rare"], correctAnswer: 1 },
    { id: 60, categoryId: 'droits', level: 'csp', type: 'connaissance', question: "Est-il légal d'être marié à plusieurs personnes ?", options: ["Oui", "Non", "Oui si étranger"], correctAnswer: 1 },
    { id: 61, categoryId: 'droits', level: 'csp', type: 'connaissance', question: "Jeter une bouteille dans la rue est :", options: ["Une infraction", "Autorisé", "Un geste citoyen"], correctAnswer: 0 },
    { id: 62, categoryId: 'droits', level: 'csp', type: 'connaissance', question: "Que doit faire une personne en cas d'accident ?", options: ["Partir", "Porter secours si possible", "Prendre une photo"], correctAnswer: 1 },
    { id: 63, categoryId: 'droits', level: 'csp', type: 'connaissance', question: "Quel est le rôle de la police ?", options: ["Écrire des livres", "Maintenir l'ordre et la loi", "Vendre des timbres"], correctAnswer: 1 },
    { id: 64, categoryId: 'droits', level: 'csp', type: 'connaissance', question: "Quelle est l'infraction la plus grave ?", options: ["La contravention", "Le délit", "Le crime"], correctAnswer: 2 },

    // Histoire et Géo
    { id: 65, categoryId: 'histoire', level: 'csp', type: 'connaissance', question: "En quelle année a débuté la Révolution française ?", options: ["1789", "1804", "1914"], correctAnswer: 0, courseId: 'histoire#revolution', explanation: "La Révolution commence en 1789 avec des événements clés comme la prise de la Bastille ou la lecture de la Déclaration des Droits de l'Homme." },
    { id: 66, categoryId: 'histoire', level: 'csp', type: 'connaissance', question: "Qui était Napoléon Ier ?", options: ["Un peintre", "L'Empereur des Français", "Un roi de France"], correctAnswer: 1, explanation: "Général vainqueur pendant la Révolution, Napoléon Bonaparte devient Empereur des Français en 1804." },
    { id: 67, categoryId: 'histoire', level: 'csp', type: 'connaissance', question: "Dans quelle République est-on aujourd'hui ?", options: ["La IIIe", "La IVe", "La Ve"], correctAnswer: 2, courseId: 'histoire#revolution', explanation: "La Cinquième République a été fondée en 1958 par le Général de Gaulle." },
    { id: 68, categoryId: 'histoire', level: 'csp', type: 'connaissance', question: "Qui a rendu l'école gratuite et laïque ?", options: ["Victor Hugo", "Jules Ferry", "Napoléon"], correctAnswer: 1, courseId: 'vie#ecole', explanation: "Les lois de Jules Ferry en 1881-1882 rendent l'école primaire gratuite, laïque et obligatoire." },
    { id: 69, categoryId: 'histoire', level: 'csp', type: 'connaissance', question: "Quand a eu lieu la 1ère Guerre mondiale ?", options: ["1914-1918", "1939-1945", "1911-1913"], correctAnswer: 0, courseId: 'histoire#guerres', explanation: "La Première Guerre mondiale oppose les poilus français et leurs alliés aux Allemands entre 1914 et 1918." },
    { id: 70, categoryId: 'histoire', level: 'csp', type: 'connaissance', question: "Date de l'abolition définitive de l'esclavage ?", options: ["1789", "1848", "1905"], correctAnswer: 1, explanation: "Sous l'impulsion de Victor Schoelcher, la Deuxième République abolit définitivement l'esclavage en 1848." },
    { id: 71, categoryId: 'histoire', level: 'csp', type: 'connaissance', question: "Qui a fondé la Ve République ?", options: ["François Mitterrand", "Charles de Gaulle", "Jean Jaurès"], correctAnswer: 1, courseId: 'histoire#guerres', explanation: "Charles De Gaulle, figure de la Résistance, fait adopter une nouvelle Constitution en 1958 qui fonde la Ve République." },
    { id: 72, categoryId: 'histoire', level: 'csp', type: 'connaissance', question: "Quelle est la capitale de la France ?", options: ["Marseille", "Lyon", "Paris"], correctAnswer: 2, courseId: 'histoire#geographie', explanation: "Paris est la capitale politique (siège du Gouvernement) et la plus grande ville du pays." },
    { id: 73, categoryId: 'histoire', level: 'csp', type: 'connaissance', question: "Combien de régions en France métropolitaine ?", options: ["10", "13", "22"], correctAnswer: 1, courseId: 'histoire#geographie', explanation: "Depuis la réforme de 2016, la France métropolitaine compte 13 régions (et 5 en outre-mer)." },
    { id: 74, categoryId: 'histoire', level: 'csp', type: 'connaissance', question: "Qui était Molière ?", options: ["Un roi", "Un auteur de théâtre", "Un général"], correctAnswer: 1, explanation: "Jean-Baptiste Poquelin, dit Molière, est l'un des plus grands dramaturges et acteurs français du 17e siècle." },
    { id: 75, categoryId: 'histoire', level: 'csp', type: 'connaissance', question: "Qui était Joséphine Baker ?", options: ["Une chanteuse et résistante", "Une reine", "Une espionne ennemie"], correctAnswer: 0, explanation: "Chanteuse américaine naturalisée française, résistante pendant la Seconde Guerre mondiale, entrée au Panthéon en 2021." },

    // Vie en société
    { id: 76, categoryId: 'societe', level: 'csp', type: 'connaissance', question: "Numéro d'urgence SAMU ?", options: ["15", "17", "18"], correctAnswer: 0 },
    { id: 77, categoryId: 'societe', level: 'csp', type: 'connaissance', question: "Numéro d'urgence Pompiers ?", options: ["15", "17", "18"], correctAnswer: 2 },
    { id: 78, categoryId: 'societe', level: 'csp', type: 'connaissance', question: "Qu'est-ce que le SMIC ?", options: ["Une assurance", "Le salaire minimum", "Un impôt"], correctAnswer: 1 },
    { id: 79, categoryId: 'societe', level: 'csp', type: 'connaissance', question: "Durée légale du travail par semaine ?", options: ["35h", "39h", "40h"], correctAnswer: 0 },
    { id: 80, categoryId: 'societe', level: 'csp', type: 'connaissance', question: "À quoi sert la carte Vitale ?", options: ["Payer le train", "Remboursement des soins", "Voter"], correctAnswer: 1 },
    { id: 81, categoryId: 'societe', level: 'csp', type: 'connaissance', question: "Jusqu'à quel âge l'école est obligatoire ?", options: ["14 ans", "16 ans", "18 ans"], correctAnswer: 1 },

    // ========== CSP2 — Nouvelles questions (niveau CSP) ==========

    // Principes et valeurs (CSP2)
    { id: 82, categoryId: 'principes', level: 'csp', type: 'connaissance', question: "Lequel de ces symboles représente officiellement la République française ?", options: ["Le drapeau et Marianne", "Le chêne", "La couronne"], correctAnswer: 0 },
    { id: 83, categoryId: 'principes', level: 'csp', type: 'connaissance', question: "Quelles sont les couleurs du drapeau français ?", options: ["Bleu, Blanc, Rouge", "Rouge, Blanc, Vert", "Bleu, Jaune, Rouge"], correctAnswer: 0 },
    { id: 84, categoryId: 'principes', level: 'csp', type: 'connaissance', question: "Quelle proposition est correcte concernant la liberté d'expression ?", options: ["Elle est absolue", "Elle s'exerce dans le respect de la loi", "Elle n'existe pas"], correctAnswer: 1 },
    { id: 85, categoryId: 'principes', level: 'csp', type: 'connaissance', question: "Quelle est la place de la langue française ?", options: ["Langue officielle de la République", "Langue facultative", "Langue secondaire"], correctAnswer: 0 },
    { id: 86, categoryId: 'principes', level: 'csp', type: 'connaissance', question: "Que permet le principe de laïcité ?", options: ["Pratiquer sa religion librement", "Interdire les religions", "L'obligation de croire"], correctAnswer: 0 },
    { id: 87, categoryId: 'principes', level: 'csp', type: 'connaissance', question: "Quel droit est garanti par la laïcité ?", options: ["Liberté de conscience", "Droit de ne pas aller à l'école", "Droit d'insulter"], correctAnswer: 0 },

    // Système politique (CSP2)
    { id: 88, categoryId: 'politique', level: 'csp', type: 'connaissance', question: "Quel est le rôle de l'autorité judiciaire ?", options: ["Voter les lois", "Protéger les libertés et appliquer la loi", "Diriger la police"], correctAnswer: 1 },
    { id: 89, categoryId: 'politique', level: 'csp', type: 'connaissance', question: "Que se passe-t-il si un ministre ne respecte pas la loi ?", options: ["Rien", "Il peut être poursuivi en justice", "Il est nommé Président"], correctAnswer: 1 },
    { id: 90, categoryId: 'politique', level: 'csp', type: 'connaissance', question: "Quand sont élus les sénateurs ?", options: ["Tous les 6 ans (suffrage indirect)", "Tous les 5 ans", "Chaque année"], correctAnswer: 0 },
    { id: 91, categoryId: 'politique', level: 'csp', type: 'connaissance', question: "Qui est élu lors des élections présidentielles ?", options: ["Le Premier ministre", "Le Président de la République", "Les députés"], correctAnswer: 1 },
    { id: 92, categoryId: 'politique', level: 'csp', type: 'connaissance', question: "Qui peut voter aux élections en France ?", options: ["Les citoyens français majeurs", "Tous les résidents", "Seulement les propriétaires"], correctAnswer: 0 },
    { id: 93, categoryId: 'politique', level: 'csp', type: 'connaissance', question: "Quel est le rôle des députés ?", options: ["Représenter les citoyens et voter la loi", "Rendre la justice", "Commander l'armée"], correctAnswer: 0 },
    { id: 94, categoryId: 'politique', level: 'csp', type: 'connaissance', question: "Qui sanctionne l'auteur d'un vol ?", options: ["Le Maire", "Le juge (autorité judiciaire)", "Le Préfet"], correctAnswer: 1 },
    { id: 95, categoryId: 'politique', level: 'csp', type: 'connaissance', question: "Qui réside au palais de l'Élysée ?", options: ["Le Président de la République", "Le Premier ministre", "Le Ministre de l'Intérieur"], correctAnswer: 0 },
    { id: 96, categoryId: 'politique', level: 'csp', type: 'connaissance', question: "Qui est le préfet ?", options: ["Le représentant de l'État dans le département", "L'élu de la mairie", "Le chef de la police"], correctAnswer: 0 },
    { id: 97, categoryId: 'politique', level: 'csp', type: 'connaissance', question: "Quel est le rôle du Parlement ?", options: ["Voter la loi et contrôler le Gouvernement", "Nommer le Président", "Diriger les entreprises"], correctAnswer: 0 },
    { id: 98, categoryId: 'politique', level: 'csp', type: 'connaissance', question: "Quel État n'est pas membre de l'Union européenne ?", options: ["Allemagne", "Suisse", "Italie"], correctAnswer: 1 },
    { id: 99, categoryId: 'politique', level: 'csp', type: 'connaissance', question: "À quelle fréquence les élections européennes ont-elles lieu ?", options: ["Tous les 5 ans", "Tous les 10 ans", "Tous les 3 ans"], correctAnswer: 0 },

    // Droits et devoirs (CSP2)
    { id: 100, categoryId: 'droits', level: 'csp', type: 'connaissance', question: "Lequel de ces droits est un droit fondamental ?", options: ["Droit de voter", "Droit de voler", "Droit de ne pas payer"], correctAnswer: 0 },
    { id: 101, categoryId: 'droits', level: 'csp', type: 'connaissance', question: "Quelle liberté permet de ne pas avoir de religion ?", options: ["La laïcité", "La fraternité", "L'égalité"], correctAnswer: 0 },
    { id: 102, categoryId: 'droits', level: 'csp', type: 'connaissance', question: "Est-il toujours possible de divorcer ?", options: ["Oui", "Non", "Seulement si l'un est d'accord"], correctAnswer: 0 },
    { id: 103, categoryId: 'droits', level: 'csp', type: 'connaissance', question: "Pourquoi les libertés peuvent-elles être limitées ?", options: ["Pour l'ordre public et le droit d'autrui", "Pour le plaisir du gouvernement", "Elles ne sont jamais limitées"], correctAnswer: 0 },
    { id: 104, categoryId: 'droits', level: 'csp', type: 'connaissance', question: "Que risque une personne qui ne respecte pas la loi ?", options: ["Une amende ou une peine de prison", "Rien du tout", "Une simple lettre"], correctAnswer: 0 },
    { id: 105, categoryId: 'droits', level: 'csp', type: 'connaissance', question: "Qu'est-ce qu'une infraction ?", options: ["Un acte interdit par la loi", "Une bonne action", "Un droit"], correctAnswer: 0 },
    { id: 106, categoryId: 'droits', level: 'csp', type: 'connaissance', question: "En quoi consiste la traite des êtres humains ?", options: ["L'exploitation d'une personne par la force", "Un échange culturel", "Une aide sociale"], correctAnswer: 0 },

    // Histoire et Géo (CSP2)
    { id: 107, categoryId: 'histoire', level: 'csp', type: 'connaissance', question: "Qu'est-ce que la Shoah ?", options: ["L'extermination des Juifs par les nazis", "Une fête nationale", "Une bataille célèbre"], correctAnswer: 0 },
    { id: 108, categoryId: 'histoire', level: 'csp', type: 'connaissance', question: "Quel pays a été colonisé par la France ?", options: ["L'Algérie", "L'Espagne", "La Suède"], correctAnswer: 0 },
    { id: 109, categoryId: 'histoire', level: 'csp', type: 'connaissance', question: "Qui était le premier Président de la Ve République ?", options: ["Charles de Gaulle", "Valéry Giscard d'Estaing", "Georges Pompidou"], correctAnswer: 0 },
    { id: 110, categoryId: 'histoire', level: 'csp', type: 'connaissance', question: "Pourquoi l'année 1958 est-elle importante ?", options: ["Création de la Ve République", "Fin de la 1ère guerre", "Découverte de l'Amérique"], correctAnswer: 0 },
    { id: 111, categoryId: 'histoire', level: 'csp', type: 'connaissance', question: "Quel océan borde la côte ouest française ?", options: ["L'Atlantique", "Le Pacifique", "L'Indien"], correctAnswer: 0 },
    { id: 112, categoryId: 'histoire', level: 'csp', type: 'connaissance', question: "Quelle ville est située au bord de la Méditerranée ?", options: ["Marseille", "Lille", "Strasbourg"], correctAnswer: 0 },
    { id: 113, categoryId: 'histoire', level: 'csp', type: 'connaissance', question: "Quelle chaîne de montagnes sépare la France et l'Italie ?", options: ["Les Alpes", "Les Pyrénées", "Le Jura"], correctAnswer: 0 },
    { id: 114, categoryId: 'histoire', level: 'csp', type: 'connaissance', question: "Qui était Charles Baudelaire ?", options: ["Un poète célèbre", "Un général", "Un roi"], correctAnswer: 0 },
    { id: 115, categoryId: 'histoire', level: 'csp', type: 'connaissance', question: "Qui était George Sand ?", options: ["Une femme écrivain", "Un explorateur", "Un peintre"], correctAnswer: 0 },
    { id: 116, categoryId: 'histoire', level: 'csp', type: 'connaissance', question: "Qui était Simone de Beauvoir ?", options: ["Une philosophe et féministe", "Une reine", "Une chanteuse"], correctAnswer: 0 },
    { id: 117, categoryId: 'histoire', level: 'csp', type: 'connaissance', question: "Qui était Albert Camus ?", options: ["Un écrivain (Prix Nobel)", "Un footballeur", "Un scientifique"], correctAnswer: 0 },
    { id: 118, categoryId: 'histoire', level: 'csp', type: 'connaissance', question: "Qui était Paul Cézanne ?", options: ["Un peintre", "Un musicien", "Un juge"], correctAnswer: 0 },
    { id: 119, categoryId: 'histoire', level: 'csp', type: 'connaissance', question: "Qu'est-ce que le Louvre ?", options: ["Un musée célèbre", "Une église", "Une montagne"], correctAnswer: 0 },

    // Vie en société (CSP2)
    { id: 120, categoryId: 'societe', level: 'csp', type: 'connaissance', question: "Après le permis, que faut-il pour conduire ?", options: ["Une assurance et la carte grise", "Juste le permis", "Rien de plus"], correctAnswer: 0 },
    { id: 121, categoryId: 'societe', level: 'csp', type: 'connaissance', question: "À quelle condition un mariage est reconnu ?", options: ["S'il est célébré par un officier d'état civil", "S'il est religieux", "S'il y a une grande fête"], correctAnswer: 0 },
    { id: 122, categoryId: 'societe', level: 'csp', type: 'connaissance', question: "Quand déclarer un enfant à la mairie ?", options: ["Dans les jours suivant la naissance", "Après 1 an", "Au moment de l'école"], correctAnswer: 0 },
    { id: 123, categoryId: 'societe', level: 'csp', type: 'connaissance', question: "Le travail non déclaré est :", options: ["Interdit et puni par la loi", "Autorisé", "Encouragé"], correctAnswer: 0 },
    { id: 124, categoryId: 'societe', level: 'csp', type: 'connaissance', question: "Quelle est la démarche pour chercher un emploi ?", options: ["S'inscrire à France Travail", "Appeler la mairie", "Ne rien faire"], correctAnswer: 0 },
    { id: 125, categoryId: 'societe', level: 'csp', type: 'connaissance', question: "Qui est aidé par France Travail ?", options: ["Les demandeurs d'emploi", "Les enfants", "Les retraités"], correctAnswer: 0 },
    { id: 126, categoryId: 'societe', level: 'csp', type: 'connaissance', question: "À partir de quel âge un mineur peut-il travailler ?", options: ["16 ans (avec exceptions)", "10 ans", "12 ans"], correctAnswer: 0 },
    { id: 127, categoryId: 'societe', level: 'csp', type: 'connaissance', question: "En cas de problème de santé non urgent, qui voir ?", options: ["Son médecin traitant", "Les urgences", "La police"], correctAnswer: 0 },
    { id: 128, categoryId: 'societe', level: 'csp', type: 'connaissance', question: "Quel est le rôle du médecin traitant ?", options: ["Soigner et orienter le patient", "Vendre des médicaments", "Diriger l'hôpital"], correctAnswer: 0 },
    { id: 129, categoryId: 'societe', level: 'csp', type: 'connaissance', question: "À quoi sert une mutuelle santé ?", options: ["Compléter les remboursements de la Sécurité sociale", "Remplacer la carte Vitale", "Payer le loyer"], correctAnswer: 0 },
    { id: 130, categoryId: 'societe', level: 'csp', type: 'connaissance', question: "L'autorité parentale prévoit l'obligation :", options: ["De protéger, nourrir et éduquer l'enfant", "De faire travailler l'enfant", "De ne pas scolariser l'enfant"], correctAnswer: 0 },
    { id: 131, categoryId: 'societe', level: 'csp', type: 'connaissance', question: "Quel diplôme obtient-on à la fin du lycée ?", options: ["Le Baccalauréat", "Le Brevet", "La Licence"], correctAnswer: 0 },
    { id: 132, categoryId: 'societe', level: 'csp', type: 'connaissance', question: "Dans quel établissement va-t-on après l'élémentaire ?", options: ["Au collège", "À l'université", "À la crèche"], correctAnswer: 0 },

    // ========== CR — Questions spécifiques Carte de Résident ==========

    // Principes et valeurs (CR)
    { id: 133, categoryId: 'principes', level: 'cr', type: 'connaissance', question: "Parmi les propositions suivantes, laquelle constitue une participation citoyenne ?", options: ["Voter aux élections", "Faire ses courses", "Regarder la météo"], correctAnswer: 0 },
    { id: 134, categoryId: 'principes', level: 'cr', type: 'connaissance', question: "Que garantit la liberté d'expression ?", options: ["Le droit de tout dire sans limite", "Le droit d'exprimer ses idées dans le respect de la loi", "L'obligation de se taire"], correctAnswer: 1 },
    { id: 135, categoryId: 'principes', level: 'cr', type: 'connaissance', question: "À quoi sert un titre de séjour ?", options: ["À voyager gratuitement", "À résider et travailler légalement", "À remplacer le passeport"], correctAnswer: 1 },
    { id: 136, categoryId: 'principes', level: 'cr', type: 'connaissance', question: "Sur quel site internet peut-on retrouver le symbole de la République ?", options: ["elysee.fr", "google.fr", "amazon.fr"], correctAnswer: 0 },
    { id: 137, categoryId: 'principes', level: 'cr', type: 'connaissance', question: "Complétez la Marseillaise : \"Aux armes […] ! Formez vos bataillons\"", options: ["citoyens", "soldats", "amis"], correctAnswer: 0 },
    { id: 138, categoryId: 'principes', level: 'cr', type: 'connaissance', question: "Complétez la Marseillaise : \"Allons enfants de la patrie […]\"", options: ["le jour de gloire est arrivé", "le soleil se lève", "la paix est là"], correctAnswer: 0 },
    { id: 139, categoryId: 'principes', level: 'cr', type: 'connaissance', question: "En tant que parent, peut-on refuser les cours de sport mixtes pour son enfant ?", options: ["Oui", "Non, l'école est laïque et les programmes obligatoires", "Seulement au collège"], correctAnswer: 1 },
    { id: 140, categoryId: 'principes', level: 'cr', type: 'connaissance', question: "La répudiation de sa femme est :", options: ["Autorisée", "Interdite en France", "Un choix personnel"], correctAnswer: 1 },
    { id: 141, categoryId: 'principes', level: 'cr', type: 'connaissance', question: "Les impôts permettent de financer les dépenses publiques. C'est :", options: ["Une contribution obligatoire", "Un don facultatif", "Une épargne personnelle"], correctAnswer: 0 },
    { id: 142, categoryId: 'principes', level: 'cr', type: 'connaissance', question: "À l'école publique, qui peut porter des signes religieux très visibles ?", options: ["Les enseignants", "Les élèves", "Personne"], correctAnswer: 2 },
    { id: 143, categoryId: 'principes', level: 'cr', type: 'connaissance', question: "Que peut faire un usager du service public dans une mairie ?", options: ["Voter et faire ses papiers", "Vendre des objets", "Dormir"], correctAnswer: 0 },
    { id: 144, categoryId: 'principes', level: 'cr', type: 'connaissance', question: "La laïcité impose-t-elle aux agents publics d'être neutres ?", options: ["Oui, strictement", "Non, c'est libre", "Seulement le week-end"], correctAnswer: 0 },

    // Système politique (CR)
    { id: 145, categoryId: 'politique', level: 'cr', type: 'connaissance', question: "Qu'est-ce que l'État de droit ?", options: ["Le droit du plus fort", "Un système où tout le monde est soumis à la loi", "Un État sans juge"], correctAnswer: 1 },
    { id: 146, categoryId: 'politique', level: 'cr', type: 'connaissance', question: "La loi est l'expression de :", options: ["La volonté générale", "La volonté du Président", "La volonté des riches"], correctAnswer: 0 },
    { id: 147, categoryId: 'politique', level: 'cr', type: 'connaissance', question: "Une personne peut-elle voter à la place d'une autre ?", options: ["Oui librement", "Non, sauf procuration officielle", "Seulement pour sa famille"], correctAnswer: 1 },
    { id: 148, categoryId: 'politique', level: 'cr', type: 'connaissance', question: "Est-ce que le vote est obligatoire en France ?", options: ["Oui", "Non, c'est un droit et un devoir civique", "Seulement pour les fonctionnaires"], correctAnswer: 1 },
    { id: 149, categoryId: 'politique', level: 'cr', type: 'connaissance', question: "À la fin de son mandat, le Président peut-il décider de rester au pouvoir ?", options: ["Oui", "Non, il doit y avoir des élections", "Seulement en cas de guerre"], correctAnswer: 1 },
    { id: 150, categoryId: 'politique', level: 'cr', type: 'connaissance', question: "Qu'est-ce que l'Hôtel de Matignon ?", options: ["Le siège de l'Assemblée", "La résidence du Premier ministre", "Un hôpital"], correctAnswer: 1 },
    { id: 151, categoryId: 'politique', level: 'cr', type: 'connaissance', question: "Quel est le rôle du Défenseur des droits ?", options: ["Défendre les citoyens contre les erreurs de l'administration", "Défendre le Gouvernement", "Défendre les banques"], correctAnswer: 0 },
    { id: 152, categoryId: 'politique', level: 'cr', type: 'connaissance', question: "Quel traité concerne la construction de l'Union européenne ?", options: ["Le traité de Maastricht", "Le traité de Versailles", "Le traité de Verdun"], correctAnswer: 0 },
    { id: 153, categoryId: 'politique', level: 'cr', type: 'connaissance', question: "Quel est l'hymne de l'Union européenne ?", options: ["L'Ode à la joie", "La Marseillaise", "L'hymne à l'amour"], correctAnswer: 0 },
    { id: 154, categoryId: 'politique', level: 'cr', type: 'connaissance', question: "Où est le siège de la Commission européenne ?", options: ["Strasbourg", "Bruxelles", "Luxembourg"], correctAnswer: 1 },

    // Droits et devoirs (CR)
    { id: 155, categoryId: 'droits', level: 'cr', type: 'connaissance', question: "À quelle liberté la PMA fait-elle référence ?", options: ["Liberté de circulation", "Liberté de fonder une famille", "Liberté de culte"], correctAnswer: 1 },
    { id: 156, categoryId: 'droits', level: 'cr', type: 'connaissance', question: "Au nom de quoi l'État peut-il restreindre certains droits ?", options: ["L'ordre public", "L'intérêt personnel du Président", "Le hasard"], correctAnswer: 0 },
    { id: 157, categoryId: 'droits', level: 'cr', type: 'connaissance', question: "Que prévoit la Charte de l'environnement ?", options: ["Le droit de polluer", "Le droit de vivre dans un environnement équilibré", "Rien d'obligatoire"], correctAnswer: 1 },
    { id: 158, categoryId: 'droits', level: 'cr', type: 'connaissance', question: "Que signifie la dignité humaine ?", options: ["Le respect de la personne en toutes circonstances", "Avoir beaucoup d'argent", "Être célèbre"], correctAnswer: 0 },
    { id: 159, categoryId: 'droits', level: 'cr', type: 'connaissance', question: "Que signifie le droit de manifester ?", options: ["Le droit d'exprimer son mécontentement collectivement", "Le droit de casser", "Le droit de bloquer sans limite"], correctAnswer: 0 },
    { id: 160, categoryId: 'droits', level: 'cr', type: 'connaissance', question: "Concernant les réseaux sociaux, quelle proposition est correcte ?", options: ["On peut tout dire sans risque", "La loi s'y applique aussi (haine interdite)", "C'est une zone sans loi"], correctAnswer: 1 },
    { id: 161, categoryId: 'droits', level: 'cr', type: 'connaissance', question: "Quel exemple illustre une limitation de liberté pour l'intérêt général ?", options: ["Le code de la route", "L'interdiction de lire", "L'obligation de manger"], correctAnswer: 0 },

    // Histoire et Géo (CR)
    { id: 162, categoryId: 'histoire', level: 'cr', type: 'connaissance', question: "Quel était le surnom de Louis XIV ?", options: ["Le Roi-Soleil", "Le Hardi", "Le Bien-Aimé"], correctAnswer: 0 },
    { id: 163, categoryId: 'histoire', level: 'cr', type: 'connaissance', question: "De quand date l'appel à la résistance du général de Gaulle ?", options: ["18 juin 1940", "11 novembre 1918", "8 mai 1945"], correctAnswer: 0 },
    { id: 164, categoryId: 'histoire', level: 'cr', type: 'connaissance', question: "Quelle est la première étape de la construction européenne en 1951 ?", options: ["La CECA", "L'Euro", "L'espace Schengen"], correctAnswer: 0 },
    { id: 165, categoryId: 'histoire', level: 'cr', type: 'connaissance', question: "Quel régime politique a été mis en place en 1792 ?", options: ["La Ière République", "Le Premier Empire", "La Monarchie"], correctAnswer: 0 },
    { id: 166, categoryId: 'histoire', level: 'cr', type: 'connaissance', question: "Quelle organisation internationale a été créée en 1945 ?", options: ["L'ONU", "L'Union Européenne", "L'OTAN"], correctAnswer: 0 },
    { id: 167, categoryId: 'histoire', level: 'cr', type: 'connaissance', question: "Que fête-t-on le 8 mai ?", options: ["La victoire de 1945", "La fin de la 1ère guerre", "La fête du travail"], correctAnswer: 0 },
    { id: 168, categoryId: 'histoire', level: 'cr', type: 'connaissance', question: "Quelle est la population approximative de la France en 2025 ?", options: ["50 millions", "68 millions", "80 millions"], correctAnswer: 1 },
    { id: 169, categoryId: 'histoire', level: 'cr', type: 'connaissance', question: "Combien de personnes parlent français dans le monde ?", options: ["100 millions", "Environ 320 millions", "1 milliard"], correctAnswer: 1 },
    { id: 170, categoryId: 'histoire', level: 'cr', type: 'connaissance', question: "Qui était Marguerite Yourcenar ?", options: ["Une grande écrivaine", "Une reine", "Une chanteuse"], correctAnswer: 0 },

    // Vie en société (CR)
    { id: 171, categoryId: 'societe', level: 'cr', type: 'connaissance', question: "Quel mariage est reconnu par l'État ?", options: ["Le mariage civil (à la mairie)", "Le mariage religieux", "Le mariage coutumier"], correctAnswer: 0 },
    { id: 172, categoryId: 'societe', level: 'cr', type: 'connaissance', question: "En cas de divorce, qui exerce l'autorité parentale ?", options: ["Le père uniquement", "La mère uniquement", "Les deux parents (sauf décision du juge)"], correctAnswer: 2 },
    { id: 173, categoryId: 'societe', level: 'cr', type: 'connaissance', question: "Quelle aide permet d'avoir un avocat gratuitement ?", options: ["L'aide juridictionnelle", "Le RSA", "La prime d'activité"], correctAnswer: 0 },
    { id: 174, categoryId: 'societe', level: 'cr', type: 'connaissance', question: "À qui est accessible la contraception ?", options: ["À toutes les femmes", "Seulement aux femmes mariées", "Seulement aux majeures"], correctAnswer: 0 },
    { id: 175, categoryId: 'societe', level: 'cr', type: 'connaissance', question: "Qu'est-ce que le principe de confidentialité en santé ?", options: ["Le secret médical", "L'obligation de tout dire", "Le partage des données sur internet"], correctAnswer: 0 },
    { id: 176, categoryId: 'societe', level: 'cr', type: 'connaissance', question: "Quelles sont les affaires traitées par les Prud'hommes ?", options: ["Les litiges liés au contrat de travail", "Les vols", "Les divorces"], correctAnswer: 0 },
    { id: 177, categoryId: 'societe', level: 'cr', type: 'connaissance', question: "Des parents ne respectent pas l'obligation d'instruction. Ils risquent :", options: ["Rien", "Une amende et une peine de prison", "Un simple avertissement"], correctAnswer: 1 },
    { id: 178, categoryId: 'societe', level: 'cr', type: 'connaissance', question: "Comment s'appelle l'enfant en situation de handicap à l'école ?", options: ["Il est inclus (élève à besoins éducatifs particuliers)", "Il ne peut pas aller à l'école", "Il reste chez lui"], correctAnswer: 0 },

    // ========== NAT — Questions spécifiques Naturalisation ==========

    // Principes et valeurs (NAT)
    { id: 179, categoryId: 'principes', level: 'nat', type: 'connaissance', question: "En quelle année la France a-t-elle adopté la Déclaration des Droits de l'Homme ?", options: ["1789", "1804", "1945"], correctAnswer: 0 },
    { id: 180, categoryId: 'principes', level: 'nat', type: 'connaissance', question: "Qu'est-ce que le principe de \"Fraternité\" implique concrètement ?", options: ["L'obligation de voter", "La solidarité nationale (impôts, protection sociale)", "L'obéissance au chef"], correctAnswer: 1 },
    { id: 181, categoryId: 'principes', level: 'nat', type: 'connaissance', question: "La loi sur la laïcité de 2004 interdit dans les écoles publiques :", options: ["Les discussions religieuses", "Le port de signes religieux ostensibles", "La prière privée"], correctAnswer: 1 },
    { id: 182, categoryId: 'principes', level: 'nat', type: 'connaissance', question: "Qui a écrit la \"Déclaration des droits de la femme et de la citoyenne\" en 1791 ?", options: ["Olympe de Gouges", "Simone Veil", "Louise Michel"], correctAnswer: 0 },

    // Système politique (NAT)
    { id: 183, categoryId: 'politique', level: 'nat', type: 'connaissance', question: "Quel est le rôle du Conseil Constitutionnel ?", options: ["Voter le budget", "Vérifier la conformité des lois à la Constitution", "Juger les crimes graves"], correctAnswer: 1 },
    { id: 184, categoryId: 'politique', level: 'nat', type: 'connaissance', question: "Comment appelle-t-on le texte de loi avant qu'il ne soit voté par le Parlement ?", options: ["Un décret", "Un projet ou une proposition de loi", "Un arrêté"], correctAnswer: 1 },
    { id: 185, categoryId: 'politique', level: 'nat', type: 'connaissance', question: "Qui peut saisir le Défenseur des Droits ?", options: ["Seulement les citoyens français", "Toute personne s'estimant lésée par une administration", "Seulement le Président"], correctAnswer: 1 },
    { id: 186, categoryId: 'politique', level: 'nat', type: 'connaissance', question: "Quel organe peut renverser le Gouvernement par une motion de censure ?", options: ["Le Sénat", "L'Assemblée nationale", "Le Conseil d'État"], correctAnswer: 1 },
    { id: 187, categoryId: 'politique', level: 'nat', type: 'connaissance', question: "Qu'est-ce que la \"navette parlementaire\" ?", options: ["Le bus des députés", "Le va-et-vient d'un texte entre l'Assemblée et le Sénat", "Le voyage officiel du Président"], correctAnswer: 1 },

    // Histoire (NAT)
    { id: 188, categoryId: 'histoire', level: 'nat', type: 'connaissance', question: "Quel roi a instauré l'Édit de Nantes pour mettre fin aux guerres de religion ?", options: ["Louis XIV", "Henri IV", "François Ier"], correctAnswer: 1 },
    { id: 189, categoryId: 'histoire', level: 'nat', type: 'connaissance', question: "Qui était Jean Moulin ?", options: ["Un ministre de Napoléon", "Le chef du Conseil National de la Résistance", "Un écrivain du Moyen-Âge"], correctAnswer: 1 },
    { id: 190, categoryId: 'histoire', level: 'nat', type: 'connaissance', question: "Quelle bataille célèbre de 1916 a marqué la Première Guerre mondiale ?", options: ["La bataille de la Marne", "La bataille de Verdun", "La bataille de Waterloo"], correctAnswer: 1 },
    { id: 191, categoryId: 'histoire', level: 'nat', type: 'connaissance', question: "Qu'appelle-t-on les \"Trente Glorieuses\" ?", options: ["Les 30 victoires de Napoléon", "La période de forte croissance entre 1945 et 1975", "Les 30 premiers jours de la Révolution"], correctAnswer: 1 },
    { id: 192, categoryId: 'histoire', level: 'nat', type: 'connaissance', question: "Qui a instauré le Code Civil en 1804 ?", options: ["Louis XVI", "Napoléon Bonaparte", "Charles de Gaulle"], correctAnswer: 1 },

    // Culture (NAT → histoire)
    { id: 193, categoryId: 'histoire', level: 'nat', type: 'connaissance', question: "Qui a écrit \"Les Misérables\" ?", options: ["Gustave Flaubert", "Victor Hugo", "Émile Zola"], correctAnswer: 1 },
    { id: 194, categoryId: 'histoire', level: 'nat', type: 'connaissance', question: "Quel courant artistique a été fondé par Claude Monet ?", options: ["Le surréalisme", "L'impressionnisme", "Le cubisme"], correctAnswer: 1 },
    { id: 195, categoryId: 'histoire', level: 'nat', type: 'connaissance', question: "Qui a découvert le vaccin contre la rage ?", options: ["Marie Curie", "Louis Pasteur", "Antoine Lavoisier"], correctAnswer: 1 },
    { id: 196, categoryId: 'histoire', level: 'nat', type: 'connaissance', question: "Quelle philosophe a écrit \"Le Deuxième Sexe\" ?", options: ["Françoise Sagan", "Simone de Beauvoir", "George Sand"], correctAnswer: 1 },

    // Géographie (NAT → histoire)
    { id: 197, categoryId: 'histoire', level: 'nat', type: 'connaissance', question: "Quel est le point culminant de la France et de l'Europe occidentale ?", options: ["Le Puy de Sancy", "Le Mont Blanc", "Le Mont Ventoux"], correctAnswer: 1 },
    { id: 198, categoryId: 'histoire', level: 'nat', type: 'connaissance', question: "Citez un territoire français situé dans le Pacifique :", options: ["La Réunion", "La Nouvelle-Calédonie", "La Guadeloupe"], correctAnswer: 1 },

    // Vie en société (NAT)
    { id: 199, categoryId: 'societe', level: 'nat', type: 'connaissance', question: "Qu'est-ce que la \"jurisprudence\" ?", options: ["Une nouvelle loi", "L'ensemble des décisions de justice qui servent de référence", "Un diplôme de droit"], correctAnswer: 1 },
    { id: 200, categoryId: 'societe', level: 'nat', type: 'connaissance', question: "En France, quel est l'organisme qui gère les retraites de base ?", options: ["La CAF", "L'Assurance Retraite (CNAV)", "Le Trésor Public"], correctAnswer: 1 },

    // ========== SIT — Questions situationnelles (présentes dans TOUS les examens) ==========
    { id: 201, categoryId: 'societe', level: 'sit', type: 'situation', question: "Votre enfant est malade et a besoin d'aller chez le médecin. Que faites-vous en premier ?", options: ["Vous allez directement aux urgences", "Vous appelez votre médecin traitant pour un rendez-vous", "Vous attendez que ça passe"], correctAnswer: 1 },
    { id: 202, categoryId: 'droits', level: 'sit', type: 'situation', question: "Vous êtes victime d'une discrimination à l'embauche. Que pouvez-vous faire ?", options: ["Ne rien faire, c'est normal", "Saisir le Défenseur des droits ou porter plainte", "Accepter la situation"], correctAnswer: 1 },
    { id: 203, categoryId: 'societe', level: 'sit', type: 'situation', question: "Votre voisin fait des travaux bruyants la nuit. Quelle est la première démarche ?", options: ["Appeler la police immédiatement", "Discuter calmement avec lui, puis contacter le syndic si besoin", "Faire pareil pour lui montrer"], correctAnswer: 1 },
    { id: 204, categoryId: 'societe', level: 'sit', type: 'situation', question: "Vous perdez votre emploi. Quelle est la bonne démarche ?", options: ["Attendre que le travail vienne à vous", "Vous inscrire à France Travail dans les meilleurs délais", "Travailler au noir"], correctAnswer: 1 },
    { id: 205, categoryId: 'societe', level: 'sit', type: 'situation', question: "À l'école, votre enfant est victime de harcèlement. Que faites-vous ?", options: ["Lui dire de se battre", "En parler au directeur de l'établissement et si besoin contacter les autorités", "Changer l'enfant d'école sans rien dire"], correctAnswer: 1 },
    { id: 206, categoryId: 'droits', level: 'sit', type: 'situation', question: "Vous êtes arrêté par la police. Quel est votre droit fondamental ?", options: ["Vous pouvez refuser de vous identifier", "Vous avez le droit de connaître les raisons de votre arrestation et d'avoir un avocat", "Vous devez répondre à toutes les questions immédiatement"], correctAnswer: 1 },
    { id: 207, categoryId: 'societe', level: 'sit', type: 'situation', question: "Vous recevez un courrier de la préfecture vous demandant de renouveler votre titre de séjour. Que faites-vous ?", options: ["Vous l'ignorez", "Vous prenez rendez-vous en préfecture avant l'expiration de votre titre", "Vous attendez que votre titre expire pour agir"], correctAnswer: 1 },
    { id: 208, categoryId: 'societe', level: 'sit', type: 'situation', question: "Vous trouvez dans la rue un portefeuille avec de l'argent. Que devez-vous faire ?", options: ["Le garder, c'est votre chance", "Le déposer au commissariat ou à la mairie", "Laisser le portefeuille sur place"], correctAnswer: 1 },
    { id: 209, categoryId: 'societe', level: 'sit', type: 'situation', question: "Vous êtes témoin d'un accident de la route avec des blessés. Que faites-vous ?", options: ["Vous passez votre chemin pour ne pas vous impliquer", "Vous appelez le 15 (SAMU) ou le 18 (pompiers) et portez assistance si possible", "Vous prenez des photos pour les réseaux sociaux"], correctAnswer: 1 },
    { id: 210, categoryId: 'droits', level: 'sit', type: 'situation', question: "Votre propriétaire refuse de vous rendre votre caution sans raison valable. Que faites-vous ?", options: ["Accepter la situation", "Envoyer une mise en demeure et saisir la commission de conciliation ou le tribunal", "Endommager l'appartement en représailles"], correctAnswer: 1 },
    { id: 211, categoryId: 'societe', level: 'sit', type: 'situation', question: "Vous souhaitez faire une demande de logement social. Quelle est la première étape ?", options: ["Contacter directement un propriétaire privé", "Déposer une demande en ligne sur le portail national ou à la mairie", "Attendre que la mairie vous contacte"], correctAnswer: 1 },
    { id: 212, categoryId: 'droits', level: 'sit', type: 'situation', question: "Votre employeur ne vous a pas payé votre salaire du mois. Que faites-vous ?", options: ["Arrêter de travailler immédiatement sans rien dire", "Envoyer une lettre de mise en demeure et saisir le Conseil de prud'hommes si besoin", "Accepter et attendre"], correctAnswer: 1 },
    { id: 213, categoryId: 'societe', level: 'sit', type: 'situation', question: "Votre enfant en âge scolaire refuse d'aller à l'école. En tant que parent, quelle est votre obligation ?", options: ["Respecter sa volonté", "L'y obliger, car la scolarisation est obligatoire jusqu'à 16 ans", "Le changer d'école uniquement"], correctAnswer: 1 },
    { id: 214, categoryId: 'societe', level: 'sit', type: 'situation', question: "Vous souhaitez créer une association. Quelle démarche effectuez-vous ?", options: ["Un dépôt de la déclaration en préfecture (loi 1901)", "Un dépôt au tribunal de commerce", "Une inscription sur les impôts"], correctAnswer: 0 },
    { id: 215, categoryId: 'droits', level: 'sit', type: 'situation', question: "Vous êtes convoqué au tribunal. Vous n'avez pas les moyens de payer un avocat. Que pouvez-vous faire ?", options: ["Y aller sans avocat et vous défendre seul obligatoirement", "Demander l'aide juridictionnelle (avocat pris en charge par l'État)", "Ignorer la convocation"], correctAnswer: 1 },
    { id: 216, categoryId: 'societe', level: 'sit', type: 'situation', question: "Vous venez d'avoir un enfant. Dans quel délai devez-vous le déclarer à la mairie ?", options: ["Dans les 5 jours suivant la naissance", "Dans les 6 mois", "Avant l'entrée à l'école"], correctAnswer: 0 },
    { id: 217, categoryId: 'societe', level: 'sit', type: 'situation', question: "Dans un service public, un agent refuse de vous aider à cause de votre origine. C'est :", options: ["Légal, il peut choisir ses usagers", "Illégal : une discrimination sur l'origine est un délit", "Légal, si le service est complet"], correctAnswer: 1 },
    { id: 218, categoryId: 'principes', level: 'sit', type: 'situation', question: "Lors d'un repas d'intégration au travail, votre manager vous demande votre religion. Que dites-vous ?", options: ["Vous répondez obligatoirement", "Vous pouvez refuser car c'est une information privée, non obligatoire à divulguer", "Vous devez mentir pour éviter des problèmes"], correctAnswer: 1 },
    { id: 219, categoryId: 'droits', level: 'sit', type: 'situation', question: "Un commerçant vous propose de payer en liquide pour éviter la TVA. Vous acceptez. Vous êtes :", options: ["Dans votre bon droit, vous économisez de l'argent", "Complice d'une fraude fiscale (travail non déclaré)", "Protégé car c'est le commerçant qui est responsable"], correctAnswer: 1 },
    { id: 220, categoryId: 'societe', level: 'sit', type: 'situation', question: "Vous souhaitez vous inscrire sur les listes électorales pour la première fois. Que faites-vous ?", options: ["Rien, l'inscription est automatique à 18 ans si vous êtes Français", "Vous inscrivez en mairie ou sur service-public.fr avant le 31 décembre", "Vous vous inscrivez le jour de l'élection"], correctAnswer: 0 },
]

/**
 * Fisher-Yates in-place shuffle (RFC gold standard).
 * Replaces the less uniform .sort(() => Math.random() - 0.5).
 */
export function shuffle(arr) {
    const a = [...arr]
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]]
    }
    return a
}

/**
 * Pick `n` items from `pool` prioritising IDs NOT in `viewedIds`.
 * If unseen items are not enough to fill `n`, complete with seen items.
 * Returns exactly Math.min(n, pool.length) items.
 */
function pickWithPriority(pool, n, viewedIds = []) {
    const viewedSet = new Set(viewedIds)
    const unseen = pool.filter(q => !viewedSet.has(q.id))
    const seen = pool.filter(q => viewedSet.has(q.id))

    const shuffledUnseen = shuffle(unseen)
    const shuffledSeen = shuffle(seen)

    const picked = [
        ...shuffledUnseen.slice(0, n),
        ...shuffledSeen.slice(0, Math.max(0, n - shuffledUnseen.length))
    ]
    return picked.slice(0, n)
}

/**
 * Build an exam set with anti-doublon logic.
 *
 * Exam mode (examTypeId provided, no categoryId):
 *   32 priority-picked from main pool + 8 priority-picked from SIT pool.
 *
 * Category mode: simple priority-pick from category pool.
 *
 * Fallback: priority-pick from all questions.
 *
 * @param {number}   count          - number of questions requested
 * @param {string|null} categoryId  - optional category filter
 * @param {string|null} examTypeId  - optional exam type filter
 * @param {number[]} questionsVues  - IDs already seen (from localStorage)
 * @returns {Object[]}             - array of question objects
 */
export function getRandomQuestions(count = 40, categoryId = null, examTypeId = null, questionsVues = []) {
    // Category mode
    if (categoryId) {
        const pool = getQuestionsByCategory(categoryId, examTypeId)
        return shuffle(pickWithPriority(pool, Math.min(count, pool.length), questionsVues))
    }

    // Exam mode: official 32 + 8 SIT structure
    if (examTypeId) {
        const examType = getExamTypeById(examTypeId)
        if (examType) {
            const mainPool = questions.filter(q => examType.levels.includes(q.level) && q.level !== 'sit')
            const sitPool = questions.filter(q => q.level === 'sit')

            const mainSelected = pickWithPriority(mainPool, 32, questionsVues)
            const sitSelected = pickWithPriority(sitPool, Math.min(8, sitPool.length), questionsVues)

            return shuffle([...mainSelected, ...sitSelected])
        }
    }

    // Fallback: all questions
    const pool = [...questions]
    return shuffle(pickWithPriority(pool, Math.min(count, pool.length), questionsVues))
}

export function getQuestionsByCategory(catId, examTypeId = null) {
    let pool = questions.filter(q => q.categoryId === catId)
    if (examTypeId) {
        const examType = getExamTypeById(examTypeId)
        if (examType) pool = pool.filter(q => examType.levels.includes(q.level))
    }
    return pool
}

/**
 * Build a quiz from a specific set of question IDs (used for weak-points mode).
 */
export function getQuestionsByIds(ids) {
    if (!ids || ids.length === 0) return []
    const idSet = new Set(ids)
    return questions.filter(q => idSet.has(q.id))
}

export function getCategoryById(categoryId) {
    return categories.find(c => c.id === categoryId)
}

export function getExamTypeById(examTypeId) {
    return examTypes.find(e => e.id === examTypeId)
}

export function getQuestionCountForExamType(examTypeId) {
    const examType = getExamTypeById(examTypeId)
    if (!examType) return questions.length
    // Count only main pool questions (not SIT — always added separately)
    return questions.filter(q => examType.levels.includes(q.level) && q.level !== 'sit').length
}