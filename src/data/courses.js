export const courses = [
    {
        id: 'principes',
        title: 'Principes et Valeurs',
        icon: 'star',
        color: 'republic-blue',
        description: "Les fondements de la République française : devise, symboles et valeurs essentielles.",
        chapters: [
            {
                id: 'valeurs-fondamentales',
                title: 'Les valeurs fondamentales de la République',
                content: `
          <p>La France est une République <mark>indivisible, laïque, démocratique et sociale</mark>. Ces quatre principes sont inscrits dans la Constitution de <mark>1958</mark>.</p>
          <ul class="list-disc pl-5 my-4 space-y-2">
            <li><strong>Indivisible</strong> : La loi est la même pour tous sur tout le territoire national. Aucune partie du peuple ne peut s'attribuer l'exercice de la souveraineté.</li>
            <li><strong>Démocratique</strong> : Le pouvoir appartient au peuple ("gouvernement du peuple, par le peuple et pour le peuple"). Les citoyens élisent leurs représentants.</li>
            <li><strong>Sociale</strong> : La République protège les plus fragiles (santé, chômage, retraite) et garantit la cohésion nationale grâce à la solidarité.</li>
          </ul>
        `
            },
            {
                id: 'laicite',
                title: 'La Laïcité en France',
                content: `
          <p>La <mark>laïcité</mark> est un principe fondamental garanti par la <mark>loi de 1905</mark> sur la séparation des Églises et de l'État.</p>
          <p class="mt-4">Elle garantit la <strong>liberté de conscience</strong> et la <strong>liberté de culte</strong> : chacun est libre de croire ou de ne pas croire, de changer de religion, et de pratiquer la religion de son choix dans le respect de l'ordre public.</p>
          <p class="mt-4">En contrepartie, l'État est <strong>neutre</strong> : la République ne reconnaît, ne salarie ni ne subventionne aucun culte. L'espace public et les services publics (comme l'école publique) doivent rester neutres sur le plan religieux.</p>
        `
            },
            {
                id: 'symboles',
                title: 'Les Symboles de la République',
                content: `
          <ul class="list-disc pl-5 my-4 space-y-3">
            <li>Le <strong>Drapeau tricolore</strong> : <mark>Bleu, Blanc, Rouge</mark>. Emblème national, né pendant la Révolution française. Le bleu et le rouge sont les couleurs de Paris, le blanc celle du roi.</li>
            <li>La <strong>Devise</strong> : <mark>Liberté, Égalité, Fraternité</mark>. Elle figure sur les bâtiments publics et les pièces de monnaie.</li>
            <li>La <strong>Marseillaise</strong> : L'hymne national, composé par <mark>Rouget de Lisle</mark> en <mark>1792</mark> à l'origine pour l'Armée du Rhin.</li>
            <li><strong>Marianne</strong> : L'allégorie de la République, coiffée du <mark>bonnet phrygien</mark> (symbole de la liberté acquise par les esclaves affranchis à Rome).</li>
            <li>Le <strong>14 Juillet</strong> : La <mark>Fête nationale</mark>, commémorant la prise de la Bastille (1789) et la Fête de la Fédération (1790).</li>
          </ul>
        `
            }
        ]
    },
    {
        id: 'institutions',
        title: 'Système Institutionnel',
        icon: 'landmark',
        color: 'republic-gold',
        description: "Le fonctionnement de l'État français, la Constitution et les pouvoirs publics.",
        chapters: [
            {
                id: 'separation-pouvoirs',
                title: 'La séparation des pouvoirs',
                content: `
          <p>Pour garantir la démocratie et éviter la dictature, le pouvoir de l'État est séparé en trois branches indépendantes :</p>
          <ul class="list-disc pl-5 my-4 space-y-2">
            <li>Le <mark>pouvoir exécutif</mark> : Il fait appliquer les lois et conduit la politique de la Nation. Il est détenu par le <strong>Président de la République</strong> et le <strong>Gouvernement</strong> (Premier ministre et ministres).</li>
            <li>Le <mark>pouvoir législatif</mark> : Il vote les lois et contrôle le gouvernement. Il appartient au <strong>Parlement</strong>.</li>
            <li>Le <mark>pouvoir judiciaire</mark> : Il veille au respect des lois et sanctionne leur non-respect. Il est exercé par les <strong>tribunaux et les juges</strong>.</li>
          </ul>
        `
            },
            {
                id: 'president',
                title: 'Le Président de la République',
                content: `
          <p>Le Président est le <strong>chef de l'État</strong> et le chef des armées. Il veille au respect de la Constitution.</p>
          <p class="mt-4">Il est élu au <mark>suffrage universel direct</mark> par tous les citoyens français, pour un mandat de <mark>5 ans (le quinquennat)</mark>.</p>
          <p class="mt-4">Il réside au <mark>Palais de l'Élysée</mark>. Il nomme le Premier ministre qui, à son tour, forme le gouvernement.</p>
        `
            },
            {
                id: 'parlement',
                title: 'Le Parlement',
                content: `
          <p>Le Parlement vote les lois et se compose de deux chambres :</p>
          <ul class="list-disc pl-5 my-4 space-y-2">
            <li>L'<mark>Assemblée nationale</mark> : Composée de 577 <strong>députés</strong> élus pour 5 ans par les citoyens. Elle siège au Palais Bourbon. C'est elle qui a le dernier mot lors du vote d'une loi en cas de désaccord avec le Sénat.</li>
            <li>Le <mark>Sénat</mark> : Composé de 348 <strong>sénateurs</strong> élus au suffrage indirect (par les maires, conseillers régionaux/départementaux, etc.) pour 6 ans. Il siège au Palais du Luxembourg.</li>
          </ul>
        `
            }
        ]
    },
    {
        id: 'droits',
        title: 'Droits et Devoirs',
        icon: 'scale',
        color: 'green',
        description: "Vos droits en tant que citoyen et vos obligations envers la société.",
        chapters: [
            {
                id: 'egalite',
                title: "L'égalité Hommes-Femmes",
                content: `
          <p>En France, <mark>les femmes et les hommes ont exactement les mêmes droits</mark>. C'est un principe inscrit dans la Constitution.</p>
          <p class="mt-4">Elles ont le droit de :</p>
          <ul class="list-disc pl-5 my-2 space-y-1">
            <li>Voter et être élues (depuis <mark>1944</mark>)</li>
            <li>Travailler, de choisir leur profession et de recevoir le <strong>même salaire</strong> à travail égal</li>
            <li>Ouvrir un compte bancaire sans l'autorisation de leur mari (depuis 1965)</li>
            <li>Exercer l'<strong>autorité parentale</strong> conjointe sur les enfants</li>
          </ul>
          <p class="mt-4">Les violences faites aux femmes sont des délits ou des crimes lourdement punis par la loi.</p>
        `
            },
            {
                id: 'droits-citoyen',
                title: 'Les devoirs du Citoyen',
                content: `
          <p>Être citoyen français donne des droits (vote, protection consulaire, éligibilité), mais implique aussi des <mark>devoirs stricts</mark> pour faire vivre la société :</p>
          <ul class="list-disc pl-5 my-4 space-y-2">
            <li><strong>Le respect de la loi</strong> : Personne n'est au-dessus des lois de la République.</li>
            <li><strong>Le paiement de l'impôt</strong> : Chaque citoyen participe au financement des services publics (écoles, hôpitaux, routes) selon ses moyens de façon solidaire.</li>
            <li><strong>La fraternité</strong> : Porter secours à une personne en danger est une obligation légale.</li>
            <li><strong>La formation citoyenne</strong> : Participer à la Journée Défense et Citoyenneté (JDC) et au recensement de 16 à 25 ans.</li>
          </ul>
        `
            }
        ]
    },
    {
        id: 'histoire',
        title: 'Histoire et Culture',
        icon: 'book-open',
        color: 'republic-red',
        description: "Les grands événements et personnages qui ont façonné la France.",
        chapters: [
            {
                id: 'revolution',
                title: 'La Révolution Française',
                content: `
          <p>La Révolution française, commencée en <mark>1789</mark> avec la prise de la Bastille (le 14 juillet), marque la <strong>fin de la monarchie absolue</strong> et des privilèges.</p>
          <p class="mt-4">C'est la naissance de nombreux principes modernes :</p>
          <ul class="list-disc pl-5 my-2 space-y-1">
            <li>La <mark>Déclaration des Droits de l'Homme et du Citoyen (DDHC)</mark> adoptée le 26 août 1789, affirmant que "Les hommes naissent et demeurent libres et égaux en droits".</li>
            <li>La création des départements, pour unifier le territoire.</li>
            <li>La naissance de la devise Liberté, Égalité, Fraternité.</li>
          </ul>
        `
            },
            {
                id: 'guerres',
                title: 'Les Guerres Mondiales',
                content: `
          <p>Le XXème siècle a été marqué par deux conflits majeurs :</p>
          <ul class="list-disc pl-5 my-4 space-y-2">
            <li><strong>La Première Guerre mondiale (<mark>1914 - 1918</mark>)</strong> : Conflit très meurtrier, symbole des "Poilus" dans les tranchées de Verdun (1916). Elle s'achève par l'armistice du <mark>11 novembre</mark> 1918.</li>
            <li><strong>La Seconde Guerre mondiale (<mark>1939 - 1945</mark>)</strong> : La France est occupée par l'Allemagne nazie. Le Général de Gaulle lance l'<mark>Appel du 18 juin 1940</mark> depuis Londres pour organiser la Résistance. La France est libérée avec l'aide des Alliés (Débarquement du 6 juin 1944). Elle s'achève en Europe le <mark>8 mai 1945</mark>.</li>
          </ul>
        `
            },
            {
                id: 'geographie',
                title: 'La Géographie de la France',
                content: `
          <p>La France métropolitaine se situe en Europe de l'Ouest. Elle est souvent appelée "l'Hexagone" en raison de sa forme.</p>
          <ul class="list-disc pl-5 my-4 space-y-2">
            <li><strong>Fleuves majeurs</strong> : La Seine (traverse Paris), la Loire (le plus long), le Rhône, la Garonne et le Rhin (frontière avec l'Allemagne).</li>
            <li><strong>Massifs montagneux</strong> : Les Alpes (où se trouve le Mont Blanc), les Pyrénées (frontière espagnole), le Massif central, le Jura, les Vosges.</li>
            <li><strong>L'Outre-mer (DROM-COM)</strong> : Des territoires situés hors d'Europe (ex: Guadeloupe, Martinique, Guyane, La Réunion, Mayotte, Nouvelle-Calédonie, Polynésie française). Ils font partie intégrante de la République.</li>
          </ul>
        `
            }
        ]
    },
    {
        id: 'vie',
        title: 'Vie en Société',
        icon: 'users',
        color: 'republic-blue',
        description: "Information pratique, santé, éducation et fonctionnement sociétal.",
        chapters: [
            {
                id: 'ecole',
                title: "L'École en France",
                content: `
          <p>L'école publique repose sur de grands principes initiés notamment par les lois de <mark>Jules Ferry</mark> (années 1880) :</p>
          <ul class="list-disc pl-5 my-4 space-y-2">
            <li><strong>L'Obligation scolaire</strong> : L'instruction est <mark>obligatoire de 3 à 16 ans</mark> pour tous les enfants, français ou étrangers.</li>
            <li><strong>La Gratuité</strong> : L'enseignement dispensé dans les écoles publiques est gratuit.</li>
            <li><strong>La Laïcité</strong> : L'enseignement public est laïque. Le port de signes religieux ostentatoires y est interdit par la loi de 2004 pour protéger la liberté de conscience des élèves.</li>
          </ul>
        `
            },
            {
                id: 'sante',
                title: 'Santé et Solidarité',
                content: `
          <p>La France dispose d'un système de protection sociale solidaire pour protéger la population contre les risques de la vie :</p>
          <ul class="list-disc pl-5 my-4 space-y-2">
            <li>La <strong>Sécurité Sociale</strong> (créée en <mark>1945</mark>) : Elle assure contre la maladie, les accidents du travail, aide à financer la famille, et garantit une retraite.</li>
            <li>La <strong>Carte Vitale</strong> : C'est la carte d'assurance maladie qui facilite le remboursement des soins (médecin, médicaments). Elle doit être mise à jour régulièrement.</li>
          </ul>
          <p class="mt-4"><strong>Numéros d'urgence gratuits</strong> (à connaître) :</p>
          <ul class="list-disc pl-5 my-2 space-y-1 text-sm font-semibold">
            <li>15 : Le SAMU (urgence médicale)</li>
            <li>17 : Police ou Gendarmerie</li>
            <li>18 : Sapeurs-Pompiers</li>
            <li>112 : Le numéro d'urgence européen (valable partout dans l'UE)</li>
          </ul>
        `
            }
        ]
    }
]
