export interface Instructor {
  name: string;
  specialty: string;
  /** Biography text. Shown on the detail page when present. */
  bio?: string;
  /** Personal website of the instructor, opened in a new tab. */
  website?: string;
}

export const instructors: Instructor[] = [
  {
    name: 'Andrea Kneis',
    specialty: 'Gesang',
    bio: 'Andrea Kneis unterrichtet Tanz seit 1994 und hat eine sozialpädagogische Ausbildung. Ihr Schwerpunkt liegt in der Tanzimprovisation und in verschiedenen Arten von Körperarbeit, wobei auch die zeitgenössische Tanztechnik eine wichtige Grundlage bildet. Seit der Ausbildung bei der amerikanischen Tänzerin Keriac bildet sie sich ständig bei international renommierten Lehrern weiter.',
    website: 'http://andreakneis.de/',
  },
  {
    name: 'Asami Krisan',
    specialty: 'Ballett',
    bio: 'Asami Krisan, geboren in Japan, begann ihre Ballettausbildung in ihrer Heimatstadt in Nagoya. Die weitere Ausbildung führte sie nach Canne und Paris in Frankreich. Bevor ihr Beruf sie nach Deutschland brachte, tanzte sie in verschiedenen Kompanien in Japan. Ihr erstes Engagement in Deutschland führte sie an die „Bühnen der Landeshauptstadt Kiel“. Es folgten die „Oper Bonn“ und die „Komische Oper“ in Berlin. Während ihrer zwanzigjährigen Bühnentätigkeit tanzte sie ein breitgefächertes Repertoire im klassischen wie modernen Ballett, dazu gehörten Hauptrollen aus Schwanensee, Dornröschen, Coppelia und Giselle. Durch die Zusammenarbeit mit zahlreichen Choreografen wie Youri Vamos, Heinz Weitz, Tom Schilling, Samuel Wuersten, Jan Linkens, J. Ullrich, A. Siegert, C. Gelabert, Lionel Hoche, Tom Simons, Birgit Scherzer, Gonzalo Galguera u.v.m, machte sie ausgeprägte Erfahrungen im klassischen sowie zeitgenössischen Tanz.\n\nSeit Jahren unterrichtet sie klassisches Ballett in Japan und in Deutschland. Ihre professionellen Erfahrungen und Kompetenzen möchte sie gerne weitergeben.',
  },
  {
    name: 'Hsiu-Yun Lu',
    specialty: 'Zeitgenössischer Tanz, Taiji, Kindertanz',
    bio: 'Ausbildung in klassischem Ballett und Modern Dance an der National Taiwan University of Arts. Weiterbildung in Tanzimprovisation (D. Rudko), Contact Improvisation (Paxton, Simson), Release Technik (S. Klein, T. Brown), Zeitgenössischem Tanz (J. Clarke), Taiji Dao Yin (Meister Hsiung Wei), Pilates Methode (Frances Carty-Melis). Tanzpädagogisches Studium in London und Köln. Tanzwissenschaftliches Studium Berlin. Langjährige Vipassana Meditationserfahrung.\n\nEhemaliges Mitglied des Cloud Gate Dance Theatre of Taiwan, Dance Forum Taipei, Nai-Ni Chen Dance Company (New York).\n\nLangjährige pädagogische Erfahrung in Taipei, Köln, Würzburg, Berlin.',
  },
  {
    name: 'Mercedes Sebald Arguisuelas',
    specialty: 'Flamenco',
    bio: 'Mercedes Sebald Arguisuelas ist gebürtige Spanierin (Navarrés, Valencia) und in Würzburg aufgewachsen. Sie studierte Romanistik (Würzburg, Salamanca, Coimbra) und bildete sich in spanischer Folklore (Escuela Bolera, Danza Española, Jotas, Flamenco) bei legendären Altmeistern aus, unter anderem bei „Amor de Dios“ in Madrid. Regelmäßige Tanz-Fortbildungen in Sevilla. 2001 Choreografie-Auftrag für das Mainfranken Theater (Oper „Carmen“). 2002 Solo-Tänzerin auf Nordamerikas größter Folklore-Expo „Folklorama“ im „Spanish Pavilion“ in Winnipeg, Kanada. Zahlreiche regionale und überregionale Tanzauftritte.\n\nSeit 1999 ist sie aktives Mitglied der Würzburger Künstlerinitiative „Salon 77“. Sie unterrichtet spanische Folklore und entwickelte Projekte wie die Internationalen Tanztage in Würzburg. 2008 erhielt sie eine zertifizierte Fortbildung in BWL, Management, Marketing und Vertrieb. Sie arbeitet freiberuflich als Übersetzerin, Eventmanagerin und Tänzerin und war jahrelang Dozentin für spanische Sprache, Kultur und Folklore. 2009 erhielt sie die Kulturmedaille der Stadt Würzburg.\n\nTechnikklassen (A–F): Ein Warm-up und eine intensive Körperarbeit halten Körper und Geist fit. Fuß-, Arm- und Handtechnik sowie Palmas (Klatschen) werden zu verschiedenen Flamencostilen trainiert. Konzentration, Koordination, Balance und Rhythmusgefühl werden gefördert. Für alle Niveaus und jedes Alter.\n\nChoreografie-Klassen (AmV/M/F): Die wichtigsten Flamencostile (Palos), teils mit Live-Gitarre. Die Struktur des Tanzes wird erklärt, um eine sinngebende Körpersprache, natürliche Mimik und das Verständnis für Gesangs- und Gitarrenbegleitung aufzubauen.\n\nSevillanas – andalusische Folklore (Paartanz): Ein südspanischer Paartanz im 3/4-Takt mit vier Strophen (Coplas). Anfänger können sofort mittanzen. Ein Tanzpartner ist nicht nötig, getanzt wird als Frau und Mann oder als zwei Frauen.\n\nRegelmäßige Workshops (Frühjahr, Sommer, Herbst) sowie Einzel- und Gruppenunterricht für jede Altersstufe, auch auf Anfrage.',
  },
  { name: 'Michael Röthlein', specialty: 'Taiko' },
  { name: 'Norbert Schmelz', specialty: 'Fotografie' },
  { name: 'Robert Collomb', specialty: 'Gitarrenunterricht' },
  { name: 'Simon Ort', specialty: 'Bass' },
  { name: 'Stefanie Koch', specialty: 'Akkordeon' },
];
