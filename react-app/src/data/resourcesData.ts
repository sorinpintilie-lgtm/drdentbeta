import { BookOpen, ShieldCheck, Stethoscope } from 'lucide-react';

export type ResourceCategoryKey = 'ghiduri' | 'educatie' | 'tratamente';

export interface ResourceFaq {
  question: string;
  answer: string;
}

export interface ResourceSection {
  heading: string;
  paragraphs: string[];
}

export interface ResourceArticle {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  category: ResourceCategoryKey;
  categoryTitle: string;
  seoTitle: string;
  metaDescription: string;
  seoKeywords: string[];
  readTime: string;
  lastUpdated: string;
  content: ResourceSection[];
  faq?: ResourceFaq[];
  related?: string[];
  primaryRoute?: string;
  primaryRouteLabel?: string;
}

export interface ResourceCategoryMeta {
  title: string;
  icon: typeof BookOpen;
  intro: string;
}

export const resourceCategoryMeta: Record<ResourceCategoryKey, ResourceCategoryMeta> = {
  ghiduri: {
    title: 'Ghiduri de îngrijire',
    icon: ShieldCheck,
    intro: 'Recomandări practice pentru pregătirea tratamentelor și îngrijirea după proceduri stomatologice.',
  },
  educatie: {
    title: 'Educație dentară',
    icon: BookOpen,
    intro: 'Articole explicative despre prevenție, sănătate orală și probleme dentare frecvente.',
  },
  tratamente: {
    title: 'Tratemente și soluții',
    icon: Stethoscope,
    intro: 'Resurse cu intenție puternică de căutare pentru pacienții care caută tratamente, prețuri și pași clari.',
  },
};

export const resourcesData: ResourceArticle[] = [
  {
    slug: 'inainte-de-tratament',
    title: 'Înainte de tratament',
    description: 'Pregătiți-vă pentru vizita la dentist cu acest ghid complet și aflați ce informații este bine să aveți la consultație.',
    excerpt: 'Ce trebuie să știți înainte de consultație, investigații și proceduri stomatologice.',
    category: 'ghiduri',
    categoryTitle: resourceCategoryMeta.ghiduri.title,
    seoTitle: 'Înainte de tratament stomatologic: cum te pregătești | DrDent',
    metaDescription: 'Află cum te pregătești pentru un tratament stomatologic, ce informații să comunici medicului și ce recomandări sunt utile înainte de consultație.',
    seoKeywords: ['inainte de tratament stomatologic', 'pregatire consultatie dentist', 'ce faci inainte de tratament dentar'],
    readTime: '4 min',
    lastUpdated: '2026-03-16',
    content: [
      {
        heading: 'Ce se întâmplă la prima evaluare',
        paragraphs: [
          'Vizita la medicul stomatolog începe cu o evaluare atentă a stării de sănătate orală. În această etapă, medicul analizează dinții, gingiile și mucoasa orală și, dacă este necesar, poate recomanda investigații suplimentare precum radiografii sau fotografii intraorale.',
          'Scopul este stabilirea unui diagnostic corect și a unui plan de tratament clar, adaptat nevoilor pacientului.',
        ],
      },
      {
        heading: 'Ce informații trebuie comunicate medicului',
        paragraphs: [
          'Este important să menționați orice afecțiune generală, tratament medicamentos, alergii cunoscute sau experiențe neplăcute avute la proceduri anterioare. Aceste detalii ajută echipa medicală să aleagă cea mai sigură abordare.',
          'Comunicarea deschisă despre simptome, sensibilitate, anxietate sau obiective estetice face consultația mai eficientă și mai bine orientată.',
        ],
      },
      {
        heading: 'Cum vă pregătiți înainte de programare',
        paragraphs: [
          'Înainte de tratament, este recomandată o igienă orală corectă și respectarea indicațiilor primite la programare. În funcție de procedură, medicul vă poate spune dacă trebuie evitate alimentele, fumatul sau anumite medicamente.',
          'O bună pregătire crește confortul pacientului și contribuie la desfășurarea eficientă a tratamentului.',
        ],
      },
    ],
    related: ['dupa-extractie-dentara', 'dupa-implant-dentar'],
  },
  {
    slug: 'dupa-extractie-dentara',
    title: 'După extracție dentară',
    description: 'Instrucțiuni clare pentru îngrijirea post-extracție și o vindecare cât mai bună.',
    excerpt: 'Recomandări utile după extracție: sângerare, alimentație, igienă și semnale de alarmă.',
    category: 'ghiduri',
    categoryTitle: resourceCategoryMeta.ghiduri.title,
    seoTitle: 'După extracție dentară: recomandări și recuperare | DrDent',
    metaDescription: 'Vezi ce este recomandat după extracția dentară, cum reduci disconfortul și când trebuie să revii la medicul stomatolog.',
    seoKeywords: ['dupa extractie dentara', 'recomandari dupa extractie', 'recuperare dupa extractie masea'],
    readTime: '4 min',
    lastUpdated: '2026-03-16',
    content: [
      {
        heading: 'Primele ore după extracție',
        paragraphs: [
          'După o extracție dentară, este normal să apară ușoare dureri, inflamații sau sângerări minore. În primele ore, este bine să evitați clătirea energică a gurii și consumul de băuturi foarte fierbinți.',
          'Respectarea indicațiilor primite în cabinet ajută la protejarea cheagului format și susține vindecarea normală.',
        ],
      },
      {
        heading: 'Ce să evitați',
        paragraphs: [
          'În primele 24 de ore se recomandă evitarea fumatului, alcoolului, efortului fizic intens și a alimentelor dure sau foarte fierbinți.',
          'Dacă simțiți disconfort, puteți urma recomandările medicului privind tratamentul medicamentos și alimentația.',
        ],
      },
      {
        heading: 'Când este nevoie de control',
        paragraphs: [
          'Dacă durerea devine accentuată, sângerarea persistă sau apare febră, este important să luați legătura cu medicul stomatolog.',
          'Un control la timp ajută la prevenirea complicațiilor și la o recuperare fără probleme.',
        ],
      },
    ],
    related: ['inainte-de-tratament', 'maseaua-de-minte'],
  },
  {
    slug: 'dupa-implant-dentar',
    title: 'După implant dentar',
    description: 'Ghid practic pentru perioada postoperatorie și menținerea unui implant dentar sănătos.',
    excerpt: 'Cum îngrijești zona implantului, ce e normal după intervenție și cum susții osteointegrarea.',
    category: 'ghiduri',
    categoryTitle: resourceCategoryMeta.ghiduri.title,
    seoTitle: 'După implant dentar: îngrijire și recuperare | DrDent',
    metaDescription: 'Află ce recomandări sunt utile după implant dentar, cum decurge perioada de vindecare și când trebuie făcut controlul.',
    seoKeywords: ['dupa implant dentar', 'ingrijire implant dentar', 'vindecare dupa implant'],
    readTime: '4 min',
    lastUpdated: '2026-03-16',
    content: [
      {
        heading: 'Perioada de vindecare',
        paragraphs: [
          'Implantul dentar este o procedură sigură și predictibilă, însă succesul său depinde și de perioada postoperatorie. După inserarea implantului urmează etapa de osteointegrare, în care implantul se stabilizează în os.',
          'Este important să urmați cu atenție recomandările privind igiena, alimentația și controalele periodice.',
        ],
      },
      {
        heading: 'Igienă și alimentație',
        paragraphs: [
          'Menținerea unei igiene orale corecte, dar delicate, este esențială. Zona implantului trebuie curățată conform indicațiilor medicului, fără traumatizare inutilă.',
          'În primele zile pot fi recomandate alimente moi și evitarea masticației pe partea tratată.',
        ],
      },
      {
        heading: 'Monitorizare și controale',
        paragraphs: [
          'Controalele periodice permit verificarea vindecării și adaptarea planului protetic atunci când este nevoie.',
          'Respectarea recomandărilor postoperatorii contribuie la stabilitatea implantului și la un rezultat estetic și funcțional pe termen lung.',
        ],
      },
    ],
    related: ['implanturile-dentare-explicate', 'implant-dentar-bucuresti'],
  },
  {
    slug: 'ingrijirea-coroanelor-facetelor',
    title: 'Îngrijirea coroanelor și fațetelor',
    description: 'Sfaturi utile pentru păstrarea restaurărilor estetice în stare foarte bună.',
    excerpt: 'Cum întreții coroanele și fațetele pentru a le păstra aspectul și durabilitatea.',
    category: 'ghiduri',
    categoryTitle: resourceCategoryMeta.ghiduri.title,
    seoTitle: 'Îngrijirea coroanelor și fațetelor dentare | DrDent',
    metaDescription: 'Vezi cum se întrețin corect coroanele și fațetele dentare și ce obiceiuri trebuie evitate pentru rezultate de durată.',
    seoKeywords: ['ingrijirea coroanelor dentare', 'ingrijirea fatetelor', 'cum intretii fatetele dentare'],
    readTime: '4 min',
    lastUpdated: '2026-03-16',
    content: [
      {
        heading: 'Igienă zilnică',
        paragraphs: [
          'Coroanele și fațetele dentare necesită o îngrijire corectă pentru a-și păstra aspectul și funcționalitatea. Chiar dacă materialele folosite sunt rezistente, dinții naturali și gingiile din jur au nevoie de atenție constantă.',
          'Periajul de două ori pe zi și utilizarea mijloacelor auxiliare de igienă recomandate de medic sunt esențiale.',
        ],
      },
      {
        heading: 'Obiceiuri de evitat',
        paragraphs: [
          'Este recomandat să evitați mușcarea obiectelor dure, deschiderea ambalajelor cu dinții și scrâșnirea dinților fără protecție adecvată.',
          'Aceste obiceiuri pot compromite restaurările și pot scurta durata lor de viață.',
        ],
      },
    ],
    related: ['albirea-dentara-optiuni-rezultate', 'ingrijire-zilnica-orala'],
  },
  {
    slug: 'ingrijire-zilnica-orala',
    title: 'Îngrijire zilnică orală',
    description: 'Rutina de bază pentru sănătatea orală pe termen lung.',
    excerpt: 'Periaj, ață dentară, controale periodice și recomandări simple pentru prevenție.',
    category: 'ghiduri',
    categoryTitle: resourceCategoryMeta.ghiduri.title,
    seoTitle: 'Îngrijire zilnică orală: rutină corectă pentru dinți și gingii | DrDent',
    metaDescription: 'Află cum arată o rutină corectă de îngrijire orală și ce pași sunt importanți pentru prevenirea cariilor și inflamațiilor gingivale.',
    seoKeywords: ['ingrijire zilnica orala', 'rutina igiena orala', 'cum te speli corect pe dinti'],
    readTime: '3 min',
    lastUpdated: '2026-03-16',
    content: [
      {
        heading: 'Pașii de bază',
        paragraphs: [
          'Igiena orală zilnică reprezintă fundamentul sănătății dentare. Ea include periaj corect de cel puțin două ori pe zi, utilizarea aței dentare și, la nevoie, a apei de gură sau altor produse recomandate de medic.',
          'Tehnica este la fel de importantă ca frecvența. Un periaj corect ajută la îndepărtarea plăcii bacteriene și reduce riscul apariției cariilor.',
        ],
      },
      {
        heading: 'De ce contează controalele regulate',
        paragraphs: [
          'Chiar și atunci când igiena orală este bună, controalele periodice rămân importante. Multe probleme dentare pot evolua fără simptome evidente în fazele incipiente.',
          'Prevenția este mai simplă, mai confortabilă și de obicei mai puțin costisitoare decât tratamentele tardive.',
        ],
      },
    ],
    related: ['intelegerea-cariilor-dentare', 'boala-parodontala'],
  },
  {
    slug: 'ingrijirea-protezelor-dentare',
    title: 'Îngrijirea protezelor dentare',
    description: 'Recomandări simple pentru curățarea, depozitarea și întreținerea protezelor.',
    excerpt: 'Cum păstrezi protezele curate, confortabile și funcționale zi de zi.',
    category: 'ghiduri',
    categoryTitle: resourceCategoryMeta.ghiduri.title,
    seoTitle: 'Îngrijirea protezelor dentare: recomandări utile | DrDent',
    metaDescription: 'Vezi cum se întrețin corect protezele dentare, ce produse pot fi folosite și când este recomandat controlul stomatologic.',
    seoKeywords: ['ingrijirea protezelor dentare', 'cum cureti proteza dentara', 'intretinere proteze'],
    readTime: '3 min',
    lastUpdated: '2026-03-16',
    content: [
      {
        heading: 'Curățare și depozitare',
        paragraphs: [
          'Protezele dentare necesită o îngrijire atentă pentru a rămâne confortabile și funcționale. Este recomandată curățarea zilnică cu produse adecvate și clătirea după fiecare masă.',
          'Pe timpul nopții, protezele pot fi îndepărtate conform recomandării medicului pentru a permite mucoasei orale să se refacă.',
        ],
      },
      {
        heading: 'Când este necesară ajustarea',
        paragraphs: [
          'Dacă apar zone de presiune, instabilitate sau disconfort la masticație, este recomandat un control stomatologic.',
          'O proteză bine întreținută contribuie la confort, masticație eficientă și o stare generală mai bună.',
        ],
      },
    ],
    related: ['ingrijire-zilnica-orala'],
  },
  {
    slug: 'intelegerea-cariilor-dentare',
    title: 'Înțelegerea cariilor dentare',
    description: 'Cum se formează cariile, de ce apar și ce poți face pentru prevenție.',
    excerpt: 'Un ghid clar despre cauzele cariilor, prevenție și tratament la timp.',
    category: 'educatie',
    categoryTitle: resourceCategoryMeta.educatie.title,
    seoTitle: 'Carii dentare: cauze, prevenție și tratament | DrDent',
    metaDescription: 'Află cum apar cariile dentare, ce factori le favorizează și de ce tratamentul timpuriu ajută la păstrarea dintelui natural.',
    seoKeywords: ['carii dentare', 'cum apar cariile', 'tratament carii'],
    readTime: '4 min',
    lastUpdated: '2026-03-16',
    content: [
      {
        heading: 'Cum apar cariile',
        paragraphs: [
          'Cariile dentare apar ca urmare a acumulării plăcii bacteriene și a expunerii frecvente la zaharuri fermentabile. Acizii produși de bacterii atacă smalțul și favorizează apariția leziunilor.',
          'În fazele incipiente, cariile pot trece neobservate, motiv pentru care controalele regulate sunt importante.',
        ],
      },
      {
        heading: 'Prevenție și tratament',
        paragraphs: [
          'Igiena orală corectă, alimentația echilibrată și evaluările periodice reduc riscul de carii.',
          'Atunci când sunt tratate la timp, cariile pot fi rezolvate minim invaziv și cu șanse mai bune de păstrare a dintelui natural.',
        ],
      },
    ],
    related: ['durere-de-masea', 'ingrijire-zilnica-orala'],
  },
  {
    slug: 'boala-parodontala',
    title: 'Boala parodontală',
    description: 'Ghid despre simptome, cauze și importanța tratamentului precoce pentru gingii și osul de susținere.',
    excerpt: 'Semne, riscuri și tratament pentru boala parodontală.',
    category: 'educatie',
    categoryTitle: resourceCategoryMeta.educatie.title,
    seoTitle: 'Boala parodontală: simptome, cauze și tratament | DrDent',
    metaDescription: 'Vezi care sunt semnele bolii parodontale și de ce diagnosticul precoce este important pentru menținerea dinților pe termen lung.',
    seoKeywords: ['boala parodontala', 'simptome parodontoza', 'tratament gingii'],
    readTime: '4 min',
    lastUpdated: '2026-03-16',
    content: [
      {
        heading: 'Primele semne',
        paragraphs: [
          'Boala parodontală afectează gingiile și structurile de susținere ale dinților. Printre semnele frecvente se numără sângerarea gingiilor, inflamația, respirația neplăcută și sensibilitatea.',
          'În stadii avansate, pot apărea retracția gingivală și mobilitatea dentară.',
        ],
      },
      {
        heading: 'De ce tratamentul precoce contează',
        paragraphs: [
          'Boala parodontală poate evolua fără durere accentuată, ceea ce întârzie uneori prezentarea la medic.',
          'Tratamentul precoce ajută la controlul inflamației și la protejarea țesuturilor care susțin dinții.',
        ],
      },
    ],
    related: ['gingii-care-sangereaza', 'ingrijire-zilnica-orala'],
  },
  {
    slug: 'implanturile-dentare-explicate',
    title: 'Implanturile dentare explicate',
    description: 'Un articol introductiv despre rolul, beneficiile și îngrijirea implanturilor dentare.',
    excerpt: 'Ce este un implant dentar și ce trebuie să știi înainte de a lua o decizie.',
    category: 'educatie',
    categoryTitle: resourceCategoryMeta.educatie.title,
    seoTitle: 'Implanturi dentare explicate: beneficii și etape | DrDent',
    metaDescription: 'Află pe scurt cum funcționează implanturile dentare, care sunt beneficiile și ce implică îngrijirea lor.',
    seoKeywords: ['implanturi dentare', 'ce este implantul dentar', 'beneficii implant dentar'],
    readTime: '4 min',
    lastUpdated: '2026-03-16',
    content: [
      {
        heading: 'Ce este implantul dentar',
        paragraphs: [
          'Implantul dentar este o soluție modernă pentru înlocuirea dinților lipsă, oferind stabilitate și un aspect apropiat de cel natural.',
          'Tratamentul presupune integrarea implantului în os și realizarea restaurării protetice potrivite.',
        ],
      },
      {
        heading: 'De ce este o soluție populară',
        paragraphs: [
          'Implanturile nu necesită șlefuirea dinților vecini și pot reda confortul la masticație și zâmbetul.',
          'Îngrijirea corectă și controalele regulate contribuie la durabilitatea rezultatului.',
        ],
      },
    ],
    related: ['implant-dentar-bucuresti', 'dupa-implant-dentar'],
  },
  {
    slug: 'albirea-dentara-optiuni-rezultate',
    title: 'Albirea dentară: opțiuni și rezultate',
    description: 'Metode de albire dentară și criterii care te ajută să alegi varianta potrivită.',
    excerpt: 'Ce opțiuni există pentru albire și la ce rezultate te poți aștepta.',
    category: 'educatie',
    categoryTitle: resourceCategoryMeta.educatie.title,
    seoTitle: 'Albirea dentară: opțiuni, siguranță și rezultate | DrDent',
    metaDescription: 'Află ce variante de albire dentară există și de ce evaluarea profesională este importantă înainte de tratament.',
    seoKeywords: ['albire dentara', 'optiuni albire dentara', 'rezultate albire dentara'],
    readTime: '4 min',
    lastUpdated: '2026-03-16',
    content: [
      {
        heading: 'Ce trebuie evaluat înainte',
        paragraphs: [
          'Albirea dentară este o procedură estetică frecvent solicitată, însă nu orice discolorare are aceeași cauză sau răspunde identic la tratament.',
          'De aceea, evaluarea profesională este utilă pentru a alege metoda potrivită și pentru a exclude probleme care trebuie tratate înainte.',
        ],
      },
      {
        heading: 'Rezultatele depind de mai mulți factori',
        paragraphs: [
          'Structura dintelui, obiceiurile alimentare și istoricul stomatologic influențează rezultatul final.',
          'Procedurile realizate corect și monitorizate de medic oferă mai multă siguranță și predictibilitate.',
        ],
      },
    ],
    related: ['ingrijirea-coroanelor-fatetelor'],
  },
  {
    slug: 'sanatatea-orala-la-copii',
    title: 'Sănătatea orală la copii',
    description: 'Ghid pentru părinți despre prevenție, igienă și primele controale stomatologice.',
    excerpt: 'Cum susții sănătatea orală a copilului de la primii dinți până la adolescență.',
    category: 'educatie',
    categoryTitle: resourceCategoryMeta.educatie.title,
    seoTitle: 'Sănătatea orală la copii: prevenție și controale | DrDent',
    metaDescription: 'Află ce contează în îngrijirea dentară a copiilor, de la primii dinți până la obiceiuri sănătoase pe termen lung.',
    seoKeywords: ['sanatatea orala la copii', 'ingrijire dentara copii', 'preventie carii copii'],
    readTime: '4 min',
    lastUpdated: '2026-03-16',
    primaryRoute: '/stomatologie-pediatrica',
    primaryRouteLabel: 'Vezi stomatologia pediatrică',
    content: [
      {
        heading: 'Rolul prevenției',
        paragraphs: [
          'Sănătatea orală a copiilor începe încă din primii ani de viață. Dinții temporari au un rol important în masticație, vorbire și ghidarea corectă a erupției dentiției permanente.',
          'Educația privind igiena orală și alimentația echilibrată trebuie începută devreme.',
        ],
      },
      {
        heading: 'Vizitele regulate la stomatolog',
        paragraphs: [
          'Controalele regulate permit depistarea timpurie a problemelor și îi ajută pe cei mici să se obișnuiască într-un mod pozitiv cu mediul stomatologic.',
          'O experiență bună în cabinet contribuie la reducerea anxietății pe termen lung.',
        ],
      },
    ],
    related: ['intelegerea-cariilor-dentare'],
  },
  {
    slug: 'implant-dentar-bucuresti',
    title: 'Implant dentar în București: preț, etape, vindecare și când ai nevoie',
    description: 'Află când este recomandat implantul dentar, cum decurge tratamentul și ce factori pot influența costul final.',
    excerpt: 'Un ghid complet despre implantul dentar în București: indicații, etape, recuperare și întrebări frecvente.',
    category: 'tratamente',
    categoryTitle: resourceCategoryMeta.tratamente.title,
    seoTitle: 'Implant dentar în București: preț, etape și vindecare | DrDent',
    metaDescription: 'Implant dentar în București: vezi când este recomandat, care sunt etapele tratamentului, cum decurge vindecarea și ce influențează prețul.',
    seoKeywords: ['implant dentar bucuresti', 'pret implant dentar bucuresti', 'etape implant dentar', 'vindecare dupa implant dentar'],
    readTime: '8 min',
    lastUpdated: '2026-03-16',
    primaryRoute: '/servicii',
    primaryRouteLabel: 'Vezi serviciile DrDent',
    content: [
      {
        heading: 'Când este recomandat implantul dentar',
        paragraphs: [
          'Implantul dentar este una dintre cele mai moderne și stabile soluții pentru înlocuirea unui dinte lipsă sau a mai multor dinți lipsă. Este luat în calcul atunci când pacientul dorește o variantă fixă, funcțională și estetică, fără a compromite dinții vecini prin șlefuire inutilă.',
          'În practică, implantul dentar poate fi recomandat după pierderea unui dinte din cauza cariei, a unei fracturi, a bolii parodontale sau a unei extracții. Medicul stabilește indicația după evaluarea clinică și radiologică, pentru a verifica volumul de os disponibil, starea gingiilor și contextul general al cazului.',
          'Pentru pacienții care caută un implant dentar în București, cea mai importantă etapă este consultația inițială. O decizie corectă se ia doar după analizarea structurii osoase, a ocluziei și a istoricului medical.',
        ],
      },
      {
        heading: 'Cum decurge tratamentul pas cu pas',
        paragraphs: [
          'Tratamentul cu implant dentar începe de obicei cu consultația, investigațiile imagistice și planificarea. În această etapă, medicul explică dacă este nevoie doar de inserarea implantului sau și de proceduri suplimentare, precum adiție osoasă, sinus lift ori tratament parodontal prealabil.',
          'Urmează etapa chirurgicală, în care implantul este inserat în os. După această intervenție, începe perioada de vindecare și osteointegrare. Durata ei variază de la caz la caz și depinde de zona tratată, de calitatea osului și de respectarea indicațiilor postoperatorii.',
          'După integrarea implantului, se trece la partea protetică: bontul protetic și coroana dentară. În această etapă contează nu doar funcția, ci și estetica, în special în zona frontală.',
        ],
      },
      {
        heading: 'Cât durează vindecarea după implant dentar',
        paragraphs: [
          'Una dintre cele mai frecvente întrebări este legată de perioada de vindecare. În general, primele zile sunt dedicate recuperării postoperatorii imediate, când pot apărea ușoare inflamații sau sensibilitate. Pe termen mediu și lung, importantă este osteointegrarea, adică fixarea biologică a implantului în os.',
          'Vindecarea nu este identică la toți pacienții. Fumatul, igiena orală deficitară, bruxismul, afecțiunile gingivale active sau nerespectarea indicațiilor postoperatorii pot influența negativ evoluția.',
          'Controalele periodice și igiena riguroasă sunt esențiale pentru succesul implantului. Pacientul trebuie să înțeleagă faptul că implantul dentar nu înseamnă doar inserarea unui șurub dentar, ci un tratament complet care trebuie monitorizat corect.',
        ],
      },
      {
        heading: 'Ce poate influența prețul unui implant dentar în București',
        paragraphs: [
          'Prețul final al unui implant dentar în București poate varia în funcție de complexitatea cazului, materialele folosite și etapele incluse în planul de tratament. Uneori se vorbește doar despre prețul implantului propriu-zis, însă costul total poate include și consultația, investigațiile, procedura chirurgicală, bontul protetic și coroana.',
          'În plus, anumite cazuri necesită proceduri suplimentare precum adiție de os, tratamente decontaminante sau managementul țesuturilor moi. De aceea, o estimare realistă se poate face doar după consultație.',
          'Pentru pacient, este util să înțeleagă nu doar costul, ci și ce este inclus în plan: etapele, controalele, materialele și recomandările de întreținere pe termen lung.',
        ],
      },
      {
        heading: 'Ce trebuie să faci după tratament',
        paragraphs: [
          'După inserarea implantului, igiena orală atentă și prezentarea la controale sunt obligatorii. În primele zile pot exista recomandări legate de alimentație, de evitarea efortului intens și de limitarea presiunii în zona tratată.',
          'Pe termen lung, implantul dentar are nevoie de întreținere la fel de serioasă ca dinții naturali. Periajul corect, mijloacele auxiliare de igienă și controalele regulate ajută la menținerea rezultatului funcțional și estetic.',
          'Dacă aveți semne precum mobilitate, disconfort persistent, sângerare gingivală în jurul implantului sau dificultate la masticație, este indicat să cereți un control cât mai repede.',
        ],
      },
    ],
    faq: [
      {
        question: 'Cât durează un implant dentar?',
        answer: 'Durata de viață a unui implant dentar depinde de igiena orală, controalele periodice, calitatea tratamentului și obiceiurile pacientului. Cu întreținere corectă, rezultatul poate fi foarte stabil pe termen lung.',
      },
      {
        question: 'Este dureroasă procedura de implant dentar?',
        answer: 'Inserarea implantului se realizează cu anestezie, iar nivelul de disconfort diferă de la pacient la pacient. În mod obișnuit, disconfortul postoperator este controlabil dacă sunt respectate recomandările medicului.',
      },
      {
        question: 'Se poate face implant imediat după extracție?',
        answer: 'În unele cazuri, da. Decizia depinde de starea osului, de tipul dintelui extras, de prezența infecției și de evaluarea clinică și imagistică.',
      },
    ],
    related: ['dupa-implant-dentar', 'implanturile-dentare-explicate', 'maseaua-de-minte'],
  },
  {
    slug: 'aparat-dentar-bucuresti',
    title: 'Aparat dentar în București: tipuri, prețuri, durată și cum alegi varianta potrivită',
    description: 'Un ghid clar despre aparatul dentar: când este recomandat, ce tipuri există și ce influențează alegerea tratamentului ortodontic.',
    excerpt: 'Tot ce trebuie să știi despre aparat dentar în București: tipuri, durată, costuri și criterii de alegere.',
    category: 'tratamente',
    categoryTitle: resourceCategoryMeta.tratamente.title,
    seoTitle: 'Aparat dentar în București: tipuri, prețuri și durată | DrDent',
    metaDescription: 'Aparat dentar în București: vezi ce tipuri există, cât poate dura tratamentul și ce factori influențează costul și alegerea aparatului.',
    seoKeywords: ['aparat dentar bucuresti', 'pret aparat dentar bucuresti', 'tipuri aparat dentar', 'durata tratament ortodontic'],
    readTime: '8 min',
    lastUpdated: '2026-03-16',
    primaryRoute: '/servicii',
    primaryRouteLabel: 'Vezi serviciile ortodontice',
    content: [
      {
        heading: 'Când este recomandat aparatul dentar',
        paragraphs: [
          'Aparatul dentar este recomandat atunci când dinții nu sunt aliniați corect, când mușcătura este dezechilibrată sau când spațiile și înghesuirile afectează atât estetica, cât și funcția. Tratamentul ortodontic nu este doar despre aspectul zâmbetului, ci și despre igienizare mai ușoară, distribuirea corectă a forțelor și protejarea dinților pe termen lung.',
          'Mulți pacienți caută aparat dentar în București pentru motive estetice, însă consultația ortodontică poate evidenția și motive funcționale: ocluzie incorectă, migrarea dinților, poziții care favorizează uzura sau dificultatea în igienizare.',
          'Tratamentul poate fi recomandat atât adolescenților, cât și adulților. Important este ca planul să fie personalizat în funcție de vârstă, obiectiv și particularitățile cazului.',
        ],
      },
      {
        heading: 'Ce tipuri de aparat dentar există',
        paragraphs: [
          'În linii mari, pacienții aleg între variante metalice, estetice și alte soluții moderne adaptate nevoilor clinice și preferințelor vizuale. Aparatul dentar metalic rămâne una dintre cele mai folosite opțiuni datorită eficienței și controlului bun asupra mișcărilor dentare.',
          'Aparatele dentare ceramice sau din safir sunt preferate de pacienții care doresc o prezență vizuală mai discretă. În anumite situații, medicul poate discuta și despre variante aproape invizibile, dacă acestea sunt potrivite clinic.',
          'Alegerea nu trebuie făcută doar în funcție de aspect. Contează complexitatea cazului, disciplina pacientului, durata estimată și recomandarea ortodontului.',
        ],
      },
      {
        heading: 'Cât durează tratamentul ortodontic',
        paragraphs: [
          'Durata tratamentului diferă în funcție de severitatea înghesuirii, tipul mușcăturii, vârsta pacientului și complianța la recomandări. Unele cazuri simple pot avea un parcurs mai scurt, în timp ce cazurile complexe necesită planificare și monitorizare îndelungată.',
          'Controalele regulate sunt importante pentru ajustări și pentru menținerea direcției corecte a tratamentului. În plus, după încheierea tratamentului activ, etapa de contenție este esențială pentru stabilitatea rezultatului.',
          'Pacienții trebuie să știe că un aparat dentar nu înseamnă doar montaj, ci un proces complet care include diagnostic, activări, reevaluări și retenție.',
        ],
      },
      {
        heading: 'Ce poate influența costul unui aparat dentar în București',
        paragraphs: [
          'Costul tratamentului ortodontic depinde de tipul aparatului, de durata estimată și de complexitatea cazului. Uneori sunt necesare investigații suplimentare, igienizare profesională, tratamente dentare înainte de montaj sau alte etape complementare.',
          'Din acest motiv, este util ca pacientul să ceară o estimare clară după consultație, cu prezentarea etapelor și a costurilor asociate pe parcurs.',
          'În mod practic, alegerea aparatului trebuie să țină cont de echilibrul dintre obiectivul estetic, eficiența clinică și buget.',
        ],
      },
      {
        heading: 'Cum alegi varianta potrivită',
        paragraphs: [
          'Varianta potrivită se alege după consult ortodontic și discuție deschisă despre obiective. Pentru unii pacienți, prioritară este discreția estetică. Pentru alții, rezistența, eficiența sau predictibilitatea contează mai mult.',
          'Un plan bun ține cont și de stilul de viață al pacientului, de disponibilitatea pentru controale regulate și de capacitatea de a menține o igienă foarte bună în timpul tratamentului.',
          'Dacă analiza este corect făcută de la început, șansele de a obține un rezultat stabil și armonios cresc semnificativ.',
        ],
      },
    ],
    faq: [
      {
        question: 'La ce vârstă se poate purta aparat dentar?',
        answer: 'Tratamentul ortodontic poate fi recomandat atât copiilor, cât și adulților, în funcție de diagnosticul stabilit la consultație.',
      },
      {
        question: 'Se poate monta aparat dentar dacă am lucrări dentare?',
        answer: 'În multe cazuri, da, dar este necesară o evaluare atentă a stării dinților, gingiilor și lucrărilor existente.',
      },
      {
        question: 'Cât de des sunt necesare controalele?',
        answer: 'Frecvența controalelor depinde de tipul aparatului și de planul de tratament, însă monitorizarea regulată este esențială.',
      },
    ],
    related: ['ingrijire-zilnica-orala', 'sanatatea-orala-la-copii'],
  },
  {
    slug: 'durere-de-masea',
    title: 'Durere de măsea: cauze, ce poți face acasă și când trebuie să ajungi urgent la dentist',
    description: 'Un articol util pentru pacienții care caută rapid răspunsuri atunci când apare durerea de măsea.',
    excerpt: 'De la sensibilitate la urgență stomatologică: ce poate însemna durerea de măsea și când trebuie evaluată.',
    category: 'tratamente',
    categoryTitle: resourceCategoryMeta.tratamente.title,
    seoTitle: 'Durere de măsea: cauze, ce faci și când mergi la dentist | DrDent',
    metaDescription: 'Află care sunt cauzele durerii de măsea, ce poți face temporar acasă și când trebuie să mergi urgent la medicul stomatolog.',
    seoKeywords: ['durere de masea', 'ce faci cand te doare maseaua', 'durere masea noaptea', 'urgenta stomatologica bucuresti'],
    readTime: '7 min',
    lastUpdated: '2026-03-16',
    primaryRoute: '/servicii',
    primaryRouteLabel: 'Vezi serviciile de urgență',
    content: [
      {
        heading: 'De ce apare durerea de măsea',
        paragraphs: [
          'Durerea de măsea poate avea multiple cauze: carie profundă, inflamație a nervului dentar, infecție, fisură dentară, lucrare compromisă, erupție dificilă a măselei de minte sau probleme gingivale. Intensitatea durerii nu indică întotdeauna singură gravitatea, dar este un semnal clar că zona trebuie evaluată.',
          'Unii pacienți resimt durere ascuțită la rece sau dulce, alții o presiune constantă, pulsații sau durere care iradiază către ureche, mandibulă ori cap. Tiparul simptomelor îl ajută pe medic să orienteze diagnosticul, dar nu înlocuiește consultația.',
          'Când durerea de măsea apare noaptea sau se agravează progresiv, de obicei există deja o problemă dentară sau inflamatorie care nu ar trebui amânată.',
        ],
      },
      {
        heading: 'Ce poți face temporar acasă',
        paragraphs: [
          'Acasă, obiectivul este doar controlul temporar al disconfortului, nu tratarea cauzei. Puteți evita alimentele foarte reci, foarte fierbinți sau dure și este bine să păstrați o igienă blândă, dar corectă, pentru a nu lăsa resturi alimentare în zona dureroasă.',
          'În funcție de recomandările medicale generale pe care le puteți urma în mod sigur, un calmant uzual poate ajuta temporar. Totuși, automedicația nu trebuie să înlocuiască prezentarea la stomatolog.',
          'Aplicarea unor soluții improvizate direct pe dinte sau gingie poate irita suplimentar țesuturile și nu rezolvă infecția sau inflamația.',
        ],
      },
      {
        heading: 'Ce să nu faci',
        paragraphs: [
          'Nu ignorați durerea care se repetă, nu aplicați substanțe agresive pe dinte și nu amânați consultația doar pentru că durerea a cedat temporar. Uneori, calmarea simptomelor poate fi urmată de o agravare bruscă a infecției.',
          'De asemenea, nu este recomandat să folosiți antibiotice fără indicație. Ele nu sunt soluția universală pentru durerea de măsea și pot întârzia diagnosticul corect.',
          'Ceea ce tratează cu adevărat problema este identificarea cauzei: carie, infecție, fractură, afectare pulpară sau altă complicație.',
        ],
      },
      {
        heading: 'Când trebuie să mergi urgent la dentist',
        paragraphs: [
          'Durerea intensă, umflătura, febra, dificultatea la masticație, sensibilitatea accentuată la atingere sau apariția unui gust neplăcut în gură sunt semne care justifică evaluarea rapidă.',
          'Dacă durerea de măsea este însoțită de inflamație mare sau de dificultate la deschiderea gurii, situația poate necesita atenție promptă.',
          'În București, mulți pacienți caută întâi informații online înainte de a se programa. Totuși, atunci când durerea persistă, consultul stomatologic este pasul care face diferența între un tratament simplu și o complicație mai dificilă.',
        ],
      },
      {
        heading: 'Ce tratamente poate recomanda medicul',
        paragraphs: [
          'Tratamentul depinde de cauză. Uneori este suficientă o obturație dacă leziunea este depistată la timp. În alte situații, poate fi necesar un tratament de canal, refacerea unei lucrări, managementul unei infecții sau chiar extracția dacă dintele nu mai poate fi salvat.',
          'Scopul consultației este nu doar calmarea durerii, ci și păstrarea pe cât posibil a dintelui și a funcției.',
          'Cu cât pacientul ajunge mai devreme la medic, cu atât cresc șansele unui tratament mai simplu și mai conservator.',
        ],
      },
    ],
    faq: [
      {
        question: 'Durerea de măsea poate trece singură?',
        answer: 'Uneori simptomul se poate diminua temporar, dar cauza rămâne. De aceea este important consultul stomatologic, mai ales dacă durerea revine.',
      },
      {
        question: 'Când este durerea de măsea o urgență?',
        answer: 'Durerea severă, umflătura, febra, secrețiile sau dificultatea la masticație și deschiderea gurii sunt semne care justifică evaluarea rapidă.',
      },
      {
        question: 'Pot lua antibiotic pentru durerea de măsea?',
        answer: 'Nu fără recomandarea medicului. Antibioticul nu este soluția standard pentru orice durere dentară și nu înlocuiește tratamentul cauzei.',
      },
    ],
    related: ['maseaua-de-minte', 'intelegerea-cariilor-dentare', 'gingii-care-sangereaza'],
  },
  {
    slug: 'maseaua-de-minte',
    title: 'Măseaua de minte: când trebuie scoasă, simptome, riscuri și recuperare',
    description: 'Ghid pentru pacienții care au dureri, inflamație sau întrebări despre extracția măselei de minte.',
    excerpt: 'Când se recomandă extracția măselei de minte și cum decurge recuperarea.',
    category: 'tratamente',
    categoryTitle: resourceCategoryMeta.tratamente.title,
    seoTitle: 'Măseaua de minte: când se scoate și cum te recuperezi | DrDent',
    metaDescription: 'Vezi când trebuie scoasă măseaua de minte, ce simptome pot apărea și ce recomandări sunt utile după extracție.',
    seoKeywords: ['cand se scoate maseaua de minte', 'extractie masea de minte bucuresti', 'durere masea de minte', 'recuperare dupa extractie masea de minte'],
    readTime: '7 min',
    lastUpdated: '2026-03-16',
    primaryRoute: '/servicii',
    primaryRouteLabel: 'Vezi serviciile de chirurgie orală',
    content: [
      {
        heading: 'Ce este măseaua de minte și de ce poate crea probleme',
        paragraphs: [
          'Măseaua de minte este ultimul molar care erupe, de obicei la vârsta adultă tânără. În multe cazuri, spațiul disponibil pe arcadă este insuficient, iar erupția poate fi incompletă, dificilă sau într-o poziție nefavorabilă.',
          'De aici pot apărea durere, presiune, inflamație gingivală, dificultăți de igienizare sau episoade repetate de infecție locală.',
          'Nu orice măsea de minte trebuie extrasă, dar cele simptomatice sau cu risc crescut de complicații au nevoie de evaluare stomatologică.',
        ],
      },
      {
        heading: 'Semne că trebuie evaluată',
        paragraphs: [
          'Semnele frecvente includ durere în spatele arcadei, umflare, dificultate la deschiderea gurii, disconfort la masticație, inflamație gingivală sau episoade repetate de pericoronarită.',
          'Uneori, măseaua de minte poate afecta și dintele vecin, favorizând carii, retenție de resturi alimentare sau resorbție locală.',
          'Radiografia și consultul clinic ajută la stabilirea poziției dintelui și la aprecierea riscurilor asociate.',
        ],
      },
      {
        heading: 'Când se recomandă extracția',
        paragraphs: [
          'Extracția este luată în calcul atunci când măseaua de minte provoacă durere, inflamație, infecții repetate, afectarea dintelui vecin, imposibilitate de igienizare sau alte complicații. În unele cazuri, indicația poate exista și profilactic, dacă medicul anticipează probleme viitoare clare.',
          'Decizia se ia în funcție de poziția dintelui, de simptome, de relația cu structurile anatomice și de starea generală a pacientului.',
          'Pentru pacienții care caută informații despre extracția măselei de minte în București, important este să înțeleagă că planul trebuie individualizat, nu decis doar pe baza durerii resimțite temporar.',
        ],
      },
      {
        heading: 'Cum decurge recuperarea',
        paragraphs: [
          'După extracție, recuperarea diferă de la caz la caz. În primele zile pot exista inflamație, sensibilitate și un disconfort moderat. Respectarea recomandărilor privind alimentația, igiena și repausul local este esențială.',
          'Fumatul, clătirea energică și alimentele foarte fierbinți pot întârzia vindecarea sau pot irita zona tratată.',
          'Dacă apar dureri accentuate după câteva zile, febră, sângerare persistentă sau inflamație care se agravează, este indicat un control.',
        ],
      },
      {
        heading: 'Ce este util să știi înainte de programare',
        paragraphs: [
          'Consultația este momentul în care se stabilește dacă măseaua de minte trebuie monitorizată sau extrasă. Investigațiile imagistice și examenul clinic permit o planificare corectă și reduc riscul surprizelor intraoperatorii.',
          'Pacientul trebuie să primească explicații clare despre complexitatea intervenției, pașii de recuperare și semnele care impun reevaluare.',
          'Atunci când decizia este luată corect și recomandările sunt respectate, recuperarea este de obicei previzibilă.',
        ],
      },
    ],
    faq: [
      {
        question: 'Toate măselele de minte trebuie scoase?',
        answer: 'Nu. Extracția este recomandată în funcție de poziția dintelui, simptome, igienizare și riscul de complicații.',
      },
      {
        question: 'Cât durează recuperarea după extracția măselei de minte?',
        answer: 'Recuperarea diferă de la caz la caz, însă primele zile sunt cele mai sensibile. Respectarea indicațiilor postoperatorii este foarte importantă.',
      },
      {
        question: 'Este normal să doară măseaua de minte când erupe?',
        answer: 'Poate exista disconfort la erupție, dar durerea persistentă, inflamația sau dificultatea la masticație justifică evaluarea medicală.',
      },
    ],
    related: ['dupa-extractie-dentara', 'durere-de-masea'],
  },
  {
    slug: 'gingii-care-sangereaza',
    title: 'Gingiile sângerează? Cauze, gingivită, parodontoză și ce tratamente există',
    description: 'Un articol esențial pentru pacienții care observă sângerări gingivale la periaj sau spontan.',
    excerpt: 'De ce sângerează gingiile, ce poate ascunde acest simptom și când este indicat consultul stomatologic.',
    category: 'tratamente',
    categoryTitle: resourceCategoryMeta.tratamente.title,
    seoTitle: 'Gingii care sângerează: cauze și tratament | DrDent',
    metaDescription: 'Află de ce sângerează gingiile, care este diferența dintre gingivită și parodontoză și ce opțiuni de tratament există.',
    seoKeywords: ['gingii care sangereaza', 'sangerari gingivale', 'gingivita tratament', 'parodontoza simptome'],
    readTime: '7 min',
    lastUpdated: '2026-03-16',
    primaryRoute: '/servicii',
    primaryRouteLabel: 'Vezi tratamentele parodontale',
    content: [
      {
        heading: 'Este normal să sângereze gingiile?',
        paragraphs: [
          'Sângerarea gingiilor nu ar trebui considerată normală, chiar dacă mulți pacienți o observă doar la periaj și o ignoră. De cele mai multe ori, ea este un semn de inflamație locală produsă de placa bacteriană, tartru sau igienizare incorectă.',
          'În unele situații, sângerarea poate fi însoțită de gingii roșii, sensibile, umflate sau de respirație neplăcută. Aceste semne indică faptul că țesuturile gingivale au nevoie de evaluare și tratament.',
          'Ignorată pe termen lung, inflamația gingivală poate evolua și poate afecta structurile de susținere ale dinților.',
        ],
      },
      {
        heading: 'Cele mai frecvente cauze',
        paragraphs: [
          'Cauzele frecvente includ placa bacteriană, tartrul, igiena orală deficitară, tehnica incorectă de periaj, fumatul și anumite dezechilibre generale. Uneori, sângerarea apare și în jurul lucrărilor protetice sau al dinților greu de curățat.',
          'Pacienții observă adesea simptomul la periaj sau la folosirea aței dentare. Faptul că gingia sângerează nu înseamnă că trebuie evitată igienizarea, ci că trebuie evaluată și făcută corect.',
          'Cu cât cauza este identificată mai devreme, cu atât tratamentul este mai simplu.',
        ],
      },
      {
        heading: 'Diferența dintre gingivită și parodontoză',
        paragraphs: [
          'Gingivita este inflamația gingiei și poate fi reversibilă dacă este tratată la timp. Parodontoza sau boala parodontală implică afectarea țesuturilor și a osului care susțin dintele, fiind o problemă mai complexă.',
          'Practic, gingivita este un semnal de alarmă. Dacă este ignorată, în anumite cazuri poate evolua către forme mai severe de afectare parodontală.',
          'De aceea, pacienții care caută informații despre gingii care sângerează ar trebui să înțeleagă că nu este vorba doar de un disconfort minor, ci de un simptom relevant clinic.',
        ],
      },
      {
        heading: 'Ce tratamente există',
        paragraphs: [
          'Tratamentul depinde de cauză și de stadiul problemei. Poate include igienizare profesională, detartraj, air-flow, instrucțiuni personalizate de igienă și reevaluare. În cazurile mai avansate, planul poate include tratamente parodontale specifice.',
          'Scopul este reducerea inflamației, controlul plăcii bacteriene și stabilizarea țesuturilor.',
          'Pacientul are și un rol important: igiena de acasă, controalele regulate și respectarea recomandărilor primite în cabinet influențează direct evoluția.',
        ],
      },
      {
        heading: 'Când trebuie să te programezi',
        paragraphs: [
          'Dacă sângerarea este repetată, apare spontan, este însoțită de sensibilitate, respirație neplăcută sau retracție gingivală, este indicat un consult stomatologic.',
          'În București, mulți pacienți caută întâi online informații despre gingivită sau parodontoză, însă diferența reală o face evaluarea clinică. Un diagnostic corect permite tratamentul potrivit și poate preveni pierderea suportului dentar.',
          'Cu intervenție la timp, multe probleme gingivale pot fi controlate eficient.',
        ],
      },
    ],
    faq: [
      {
        question: 'De ce îmi sângerează gingiile la periaj?',
        answer: 'Cel mai frecvent, cauza este inflamația gingivală produsă de placa bacteriană și tartru, dar este importantă evaluarea medicală pentru confirmare.',
      },
      {
        question: 'Sângerarea gingiilor înseamnă automat parodontoză?',
        answer: 'Nu automat. Poate fi gingivită sau altă problemă locală, dar simptomul nu trebuie ignorat pentru că poate evolua.',
      },
      {
        question: 'Se vindecă gingivita?',
        answer: 'În multe situații, da, dacă este depistată la timp și tratată corect, împreună cu o igienă orală bună.',
      },
    ],
    related: ['boala-parodontala', 'ingrijire-zilnica-orala', 'durere-de-masea'],
  },
];

export function getResource(slug: string) {
  return resourcesData.find((resource) => resource.slug === slug);
}

export function getRelatedResources(slugs: string[] = []) {
  return resourcesData.filter((resource) => slugs.includes(resource.slug));
}

export function groupResourcesByCategory() {
  return Object.entries(resourceCategoryMeta).map(([categoryKey, meta]) => ({
    category: categoryKey as ResourceCategoryKey,
    title: meta.title,
    icon: meta.icon,
    intro: meta.intro,
    resources: resourcesData.filter((resource) => resource.category === categoryKey),
  }));
}
