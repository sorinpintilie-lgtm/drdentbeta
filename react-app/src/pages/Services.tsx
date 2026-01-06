import { motion } from 'framer-motion';
import {
  Smile, Sparkles, Shield, Gem, Circle, Crown, Bone,
  Phone, Star, Award, Zap, Heart, CheckCircle, ArrowRight, Clock, Users, Calendar
} from 'lucide-react';
import { SwipeableCarousel } from '../components/ui/SwipeableCarousel';
import { ServiceModal } from '../components/ui/ServiceModal';
import { useState } from 'react';

/**
 * Services Page Component - Mobile-First Design
 * Optimized for 9:16 vertical phone format with infinite carousels
 */
function Services() {
  const [selectedService, setSelectedService] = useState<{
    title: string;
    description: string;
    icon: React.ReactNode;
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openServiceModal = (service: any) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeServiceModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  const formatTitle = (title: string) => {
    const index = title.indexOf('(');
    if (index === -1) return title;
    const mainTitle = title.substring(0, index);
    const details = title.substring(index);
    return (
      <>
        {mainTitle} <span className="text-sm">{details}</span>
      </>
    );
  };

  const serviceCategories = [
    {
      category: 'Consultație',
      color: 'from-blue-500 to-blue-600',
      icon: <Smile className="w-6 h-6" />,
      services: [
        {
          icon: <Smile className="w-8 h-8" />,
          title: 'Consultație',
          description: 'Evaluare clinică completă și stabilirea planului de tratament personalizat.',
          detailedDescription: 'Consultația stomatologică reprezintă primul pas în evaluarea sănătății orale. Medicul examinează dinții, gingiile și structurile de susținere, identificând eventualele afecțiuni sau riscuri. În urma consultației, pacientul primește un diagnostic clar și un plan de tratament personalizat, adaptat nevoilor și obiectivelor sale.',
          price: '100 RON',
          duration: 'Variază',
          popular: false
        },
      ]
    },
    {
      category: 'Chirurgie orală',
      color: 'from-green-500 to-emerald-600',
      icon: <Bone className="w-6 h-6" />,
      services: [
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Extracție dinte monoradicular',
          description: 'Îndepărtarea atraumatică a unui dinte cu o singură rădăcină.',
          detailedDescription: 'Procedură prin care este îndepărtat un dinte cu o singură rădăcină, afectat de carii profunde, infecții sau fracturi. Intervenția se realizează sub anestezie locală și urmărește protejarea osului și a țesuturilor înconjurătoare pentru o vindecare rapidă.',
          price: '250 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Extracție dinte pluriradicular',
          description: 'Extracția sigură a dinților cu mai multe rădăcini.',
          detailedDescription: 'Extracția unui dinte cu mai multe rădăcini necesită tehnici chirurgicale adaptate anatomiei dentare. Procedura este realizată în condiții de siguranță, cu scopul de a elimina sursa durerii sau infecției și de a preveni complicațiile ulterioare.',
          price: '300 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Extracție molar de minte superior erupt',
          description: 'Îndepărtarea molarului de minte superior complet erupt.',
          detailedDescription: 'Îndepărtarea molarului de minte superior complet erupt, atunci când acesta provoacă inflamație, durere sau dificultăți de igienizare. Intervenția este relativ simplă și permite prevenirea problemelor recurente.',
          price: '350 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Extracție molar de minte inferior erupt',
          description: 'Extracția molarului de minte inferior, adaptată anatomiei zonei.',
          detailedDescription: 'Extracția molarului de minte inferior erupt este o procedură mai complexă din cauza poziției sale. Medicul utilizează tehnici precise pentru a asigura o intervenție sigură și o recuperare corectă.',
          price: '400 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Extracție dinte inclus intraosos(odontectomie)(include sutura)',
          description: 'Îndepărtarea chirurgicală a unui dinte inclus în os.',
          detailedDescription: 'Procedură chirurgicală prin care este îndepărtat un dinte blocat în os. Intervenția include deschiderea controlată a osului și sutura finală, fiind indicată pentru prevenirea infecțiilor sau a problemelor ortodontice.',
          price: '600 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Chiuretaj perimplant',
          description: 'Curățarea și tratarea țesuturilor inflamate din jurul implantului dentar.',
          detailedDescription: 'Tratament destinat curățării țesuturilor inflamate din jurul implantului dentar. Procedura ajută la stoparea procesului inflamator și la menținerea stabilității implantului pe termen lung.',
          price: '250 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Decapusonare',
          description: 'Îndepărtarea țesutului gingival care acoperă parțial un dinte erupt.',
          detailedDescription: 'Îndepărtarea țesutului gingival care acoperă parțial un dinte în erupție. Această procedură facilitează erupția normală și previne inflamațiile locale.',
          price: '200 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Extracție dinte parodontotic(mobil)/rest radicular',
          description: 'Îndepărtarea dinților mobili sau a resturilor radiculare.',
          detailedDescription: 'Îndepărtarea dinților cu mobilitate avansată sau a resturilor radiculare rămase în os. Procedura previne infecțiile persistente și disconfortul pacientului.',
          price: '200 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Tratament abces parodontotic',
          description: 'Drenaj și tratament pentru infecțiile parodontale acute.',
          detailedDescription: 'Intervenție de urgență pentru tratarea infecțiilor parodontale acute. Include drenaj, dezinfectare și controlul inflamației pentru ameliorarea durerii.',
          price: '150 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Gingivectomie',
          description: 'Îndepărtarea excesului de țesut gingival pentru sănătate și estetică.',
          detailedDescription: 'Procedură chirurgicală prin care se îndepărtează excesul de țesut gingival. Este realizată atât din motive funcționale, cât și estetice.',
          price: '150 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Chistectomie',
          description: 'Îndepărtarea chirurgicală a chisturilor odontogene.',
          detailedDescription: 'Îndepărtarea chirurgicală a chisturilor dentare pentru prevenirea distrugerii osoase și a complicațiilor. Procedura se realizează cu protejarea structurilor anatomice adiacente.',
          price: '600 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Tratament alveolita',
          description: 'Tratamentul inflamației alveolei după extracția dentară.',
          detailedDescription: 'Tratament destinat inflamației alveolei dentare după extracție. Scopul este calmarea durerii și accelerarea procesului de vindecare.',
          price: '150 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Rezecție apicală dinte monoradicular',
          description: 'Îndepărtarea vârfului rădăcinii pentru eliminarea infecției persistente.',
          detailedDescription: 'Intervenție chirurgicală prin care se îndepărtează vârful rădăcinii unui dinte pentru eliminarea infecțiilor persistente. Procedura permite salvarea dintelui atunci când tratamentul de canal nu este suficient.',
          price: '500 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Rezecție apicală dinte pluriradicular',
          description: 'Intervenție chirurgicală pentru tratarea infecțiilor la dinții cu mai multe rădăcini.',
          detailedDescription: 'Procedură similară aplicată dinților cu mai multe rădăcini. Permite controlul infecțiilor cronice și menținerea dintelui pe arcadă.',
          price: '600 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Descoperire canin/premolar in scop ortodontic',
          description: 'Expunerea chirurgicală a dintelui pentru tracțiune ortodontică.',
          detailedDescription: 'Expunerea chirurgicală a unui dinte inclus pentru a permite tracțiunea ortodontică. Procedura facilitează alinierea corectă a dintelui.',
          price: '450 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Implant dentar',
          description: 'Înlocuirea dintelui lipsă prin inserarea unui implant din titan.',
          detailedDescription: 'Implantul dentar este o soluție modernă pentru înlocuirea dinților lipsă. Acesta se integrează în os și oferă o bază solidă pentru refacerea esteticii și funcționalității.',
          price: '500 EUR*',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Sinus lift intern',
          description: 'Augmentare osoasă minim invazivă în zona sinusului maxilar.',
          detailedDescription: 'Procedură minim invazivă de augmentare osoasă în zona sinusului maxilar, indicată atunci când volumul osos este insuficient pentru implant.',
          price: '200 EUR*',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Sinus lift extern',
          description: 'Procedură avansată de adăugare de os pentru implanturi dentare.',
          detailedDescription: 'Intervenție chirurgicală avansată pentru creșterea volumului osos în maxilarul superior, necesară în cazurile cu pierdere osoasă semnificativă.',
          price: '800 EUR*',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Un flacon bio oss',
          description: 'Material biocompatibil pentru regenerare osoasă.',
          detailedDescription: 'Material biocompatibil utilizat pentru regenerarea osoasă. Favorizează refacerea naturală a osului și stabilitatea implanturilor.',
          price: '100 EUR*',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Membrana',
          description: 'Membrană de protecție utilizată în proceduri de regenerare osoasă.',
          detailedDescription: 'Membrană utilizată pentru protejarea grefelor osoase și ghidarea regenerării tisulare.',
          price: '150 EUR*',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Grefa de os autolog',
          description: 'Recoltare și aplicare de os propriu pentru reconstrucție osoasă.',
          detailedDescription: 'Procedură care utilizează os propriu pentru reconstrucția zonelor deficitare. Asigură compatibilitate maximă și rezultate stabile.',
          price: '800 EUR*',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Extracție cu alveolotomie/separație interradiculară',
          description: 'Extracție chirurgicală a dinților cu structură complexă.',
          detailedDescription: 'Extracție chirurgicală realizată prin secționarea controlată a dintelui, indicată în cazurile complexe.',
          price: '500 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Frenectomie',
          description: 'Îndepărtarea frenului lingual sau labial.',
          detailedDescription: 'Îndepărtarea frenului labial sau lingual atunci când afectează vorbirea, masticația sau poziția dinților.',
          price: '400 RON',
          duration: 'Variază',
          popular: false
        },
      ]
    },
    {
      category: 'Endodontie',
      color: 'from-purple-500 to-pink-500',
      icon: <Zap className="w-6 h-6" />,
      services: [
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Obturație de canal pluriradicular 3 canale/+',
          description: 'Obturare finală pentru dinți cu 3+ canale, care sigilează complet spațiile interne și oprește reinfectarea.',
          detailedDescription:
            'Obturatia de canal la un dinte pluriradicular cu 3 canale sau mai multe reprezintă etapa finală a tratamentului endodontic, după ce canalele au fost curățate și dezinfectate. Scopul este închiderea etanșă a întregului sistem de canale, inclusiv ramificațiile mici, pentru a preveni pătrunderea bacteriilor și reapariția infecției.\n\nÎn această etapă, medicul usucă canalele, verifică lungimea de lucru și adaptează materialele de obturație (de regulă, conuri și ciment endodontic) pentru o sigilare cât mai precisă. La final, se recomandă restaurarea corectă a dintelui (obturație definitivă/coroană), deoarece etanșeitatea „de sus" este la fel de importantă ca obturarea canalelor. După procedură pot apărea sensibilitate ușoară la mușcătură pentru câteva zile, care se remite de obicei cu analgezice uzuale și evitarea alimentelor dure pe partea respectivă.',
          price: '300 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Reconstituire cu pivot fibra de sticla',
          description: 'Pivot estetic din fibră de sticlă care întărește un dinte „slăbit" și pregătește baza pentru coroană.',
          detailedDescription:
            'Reconstituirea cu pivot din fibră de sticlă este indicată atunci când, după tratamentul de canal, dintele a pierdut multă structură și are nevoie de sprijin intern pentru a susține o restaurare durabilă. Pivotul se fixează în canalul radicular și permite reconstruirea coroanei dentare cu materiale compozite, obținând o bază stabilă pentru obturație extinsă sau pentru coroană.\n\nAvantajele pivotului din fibră sunt elasticitatea apropiată de cea a dintelui și aspectul estetic (mai ales la dinții frontali). Procedura include pregătirea canalului, cimentarea pivotului și realizarea reconstrucției. Pentru rezultate pe termen lung, este importantă protejarea dintelui cu o restaurare corectă și verificarea contactelor ocluzale, astfel încât dintele să nu fie supraîncărcat la masticație.',
          price: '350 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Tratament devitalizant',
          description: 'Tratament care oprește durerea pulpară prin îndepărtarea vitalității nervului și pregătește dintele pentru canal.',
          detailedDescription:
            'Tratamentul devitalizant este utilizat atunci când pulpa dentară („nervul") este inflamată sever și provoacă dureri intense, mai ales la cald/rece sau spontan, inclusiv noaptea. Scopul este controlul rapid al durerii și inițierea tratamentului endodontic în condiții mai confortabile pentru pacient.\n\nÎn cadrul procedurii, medicul izolează dintele, accesează camera pulpară și aplică o medicație specifică, urmând ca în ședințele următoare să se realizeze curățarea completă a canalelor și obturarea finală. Uneori, devitalizarea se face împreună cu drenajul dacă există presiune sau exudat. Pacientul primește indicații despre ce este normal să simtă după intervenție și când trebuie să revină de urgență (durere care crește, umflătură, febră).',
          price: '100 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Retratament endodontic pluriradicular 3 canale',
          description: 'Refacerea completă a unui tratament vechi pe 3 canale, cu îndepărtarea materialelor și dezinfectare profundă.',
          detailedDescription:
            'Retratamentul endodontic la un dinte cu 3 canale este recomandat atunci când tratamentul anterior a eșuat: durere persistentă, sensibilitate la mușcătură, fistulă, leziune la rădăcină sau obturație de canal incompletă. În această procedură, medicul îndepărtează materialele vechi din canale, redeschide accesul, curăță și dezinfectează din nou sistemul endodontic.\n\nDinții pluriradiculari pot avea canale greu de găsit sau ramificații, iar retratamentul urmărește identificarea și tratarea acestora. Se folosesc soluții de irigare și tehnici care cresc șansele de sterilizare internă, apoi se realizează obturarea finală etanșă. Succesul depinde și de refacerea coronară (obturație/coroană) pentru a preveni reinfiltrarea bacteriană.',
          price: '500 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Retratament endodontic pluriradicular 2 canale',
          description: 'Reintervenție endodontică pentru dinți cu 2 canale, indicată când infecția reapare sau tratamentul vechi nu este etanș.',
          detailedDescription:
            'Retratamentul pentru un dinte cu 2 canale este o soluție de salvare atunci când există semne că tratamentul anterior nu mai funcționează: disconfort recurent, inflamație la nivelul gingiei, imagine radiologică de leziune sau infiltrații sub obturație/coroană. Medicul îndepărtează obturația veche din canale și reface curățarea și dezinfectarea.\n\nÎn multe cazuri, cauza este un canal netratat corespunzător, o obturație prea scurtă/lungă sau contaminarea din cauza unei obturații coronare deteriorate. După re-igienizare, canalele sunt obturate din nou, iar dintele este reconstruit corect. Se pot recomanda controale radiologice la câteva luni pentru a urmări vindecarea leziunii periapicale.',
          price: '450 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Retratament endodontic dinte monoradicular',
          description: 'Refacerea tratamentului de canal la dinți cu o singură rădăcină, pentru eliminarea durerii și a infecției persistente.',
          detailedDescription:
            'Retratamentul endodontic monoradicular este indicat la incisivi, canini sau anumiți premolari atunci când tratamentul inițial nu a oferit vindecare completă. Motivele frecvente includ reinfectarea printr-o obturație/coroană neetanșă, fisuri, obturație incompletă sau prezența unei infecții vechi care nu s-a remis.\n\nProcedura include redeschiderea dintelui, îndepărtarea materialului din canal, curățarea mecanică și chimică, apoi obturarea finală. Deoarece canalul este, de obicei, mai direct decât la molari, intervenția poate fi mai simplă, însă succesul depinde de calitatea dezinfectării și de sigilarea coronară corectă. După retratament, pacientul poate simți o sensibilitate ușoară la mușcătură, care se reduce progresiv.',
          price: '400 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Tratament endodontic pluriradicular 3 canale ( fără obturație )',
          description: 'Etapa de lucru pentru 3 canale: acces, curățare, modelare și medicație, fără închiderea definitivă a canalelor.',
          detailedDescription:
            'Această procedură reprezintă prima parte a tratamentului de canal pentru dinți cu 3 canale sau mai multe. În ședință se realizează accesul în dinte, identificarea canalelor, măsurarea lungimilor și curățarea lor cu instrumente endodontice, împreună cu irigare antiseptică.\n\nÎn multe situații, medicul aplică și o medicație intracanalară temporară pentru a reduce încărcătura bacteriană între ședințe, mai ales dacă există infecție sau durere accentuată. Canalul nu este obturat definitiv în această etapă, deoarece se urmărește stabilizarea simptomelor și obținerea unui mediu cât mai curat. Dintele se închide provizoriu, iar pacientul este programat pentru obturația finală sau pentru continuarea tratamentului.',
          price: '350 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Tratament endodontic pluriradicular 2 canale ( fără obturație )',
          description: 'Pregătirea celor 2 canale: dezinfectare și modelare corectă, cu închidere provizorie între ședințe.',
          detailedDescription:
            'Tratamentul endodontic pe 2 canale (fără obturație) este o etapă de lucru în care canalele sunt accesate, curățate și dezinfectate, însă nu sunt sigilate definitiv în aceeași ședință. Este indicat atunci când dintele necesită una sau mai multe vizite, fie din cauza infecției, fie din cauza anatomiei canalelor.\n\nÎn această ședință, medicul îndepărtează pulpa afectată, lărgește și modelează canalele pentru a permite o curățare eficientă, apoi folosește irigare antiseptică. La nevoie se aplică medicație intracanalară, iar dintele se sigilează provizoriu pentru a preveni contaminarea. Continuarea tratamentului include obturația finală și, în multe cazuri, o restaurare definitivă care să protejeze dintele.',
          price: '300 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Tratament endodontic dinte monoradicular ( fără obturație )',
          description: 'Curățare și dezinfectare inițială a canalului unic, cu tratament etapizat înainte de obturarea definitivă.',
          detailedDescription:
            'Tratamentul endodontic monoradicular (fără obturație) acoperă etapa de lucru în care canalul este pregătit, dar nu este închis definitiv. Se îndepărtează țesutul pulpar afectat, se curăță canalul și se realizează dezinfectarea pentru a reduce bacteriile responsabile de durere și inflamație.\n\nÎn funcție de simptomatologie, medicul poate decide să aplice o medicație intracanalară și să închidă provizoriu dintele până la următoarea vizită. Această abordare este frecventă în cazurile cu sensibilitate intensă, infecție sau când se dorește o stabilizare graduală înainte de obturația finală. Etapa următoare este sigilarea canalului și refacerea coroanei dentare pentru rezistență pe termen lung.',
          price: '250 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Tratament de urgență (pansament calmant/drenaj/tratament pericoronită etc)',
          description: 'Serviciu de urgență pentru durere acută: drenaj, calmare rapidă și stabilizare până la tratamentul complet.',
          detailedDescription:
            'Tratamentul de urgență endodontic are rolul de a opri durerea și de a controla infecția atunci când pacientul se prezintă cu simptomatologie acută: durere pulsatilă, presiune, umflătură, sensibilitate majoră la atingere sau la mușcătură. În funcție de cauză, se poate realiza drenaj (dacă există colecție), pansament calmant, deschiderea dintelui pentru reducerea presiunii sau tratamentul unei pericoronite.\n\nObiectivul nu este neapărat finalizarea completă a tratamentului de canal în aceeași vizită, ci stabilizarea situației în siguranță. Se oferă recomandări despre medicație (dacă este necesar), ce trebuie evitat în următoarele zile și când trebuie reluat tratamentul definitiv. Pacientul este programat pentru continuarea endodontică sau pentru intervenția potrivită în funcție de diagnostic.',
          price: '150 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Refacere perete in vederea tratamentului endodontic',
          description: 'Reconstrucție temporară/funcțională a dintelui pentru izolare corectă și acces sigur la canale.',
          detailedDescription:
            'Refacerea peretelui dentar înainte de tratamentul endodontic este necesară atunci când dintele este foarte distrus de carie sau fractură și nu se poate izola corect. O izolare bună (în special cu digă) este esențială pentru un tratament de canal reușit, deoarece previne contaminarea cu salivă și bacterii.\n\nProcedura presupune îndepărtarea țesutului cariat și reconstruirea unui perete lipsă cu materiale adezive, astfel încât medicul să poată lucra în siguranță în interiorul dintelui. Această etapă stabilizează dintele, reduce riscul de fractură în timpul tratamentului și permite o obturare de canal mai precisă. După finalizarea endodonției, dintele poate necesita o restaurare definitivă extinsă sau o coroană, în funcție de câtă structură a rămas.',
          price: '200 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Indepartare pivot/dentatus',
          description: 'Îndepărtarea pivotului vechi pentru a permite acces complet la canal și tratament corect al infecției.',
          detailedDescription:
            'Îndepărtarea pivotului (sau a altor elemente protetice intracanale) este necesară atunci când un dinte cu tratament vechi necesită retratament endodontic. Pivotul poate bloca accesul la canal, împiedicând curățarea și dezinfectarea corectă.\n\nProcedura se realizează cu instrumente speciale, în mod controlat, pentru a proteja rădăcina și a reduce riscul de fisuri. După îndepărtarea pivotului, medicul reevaluează canalul, elimină obturația veche și continuă cu pașii endodontici necesari. La final, dintele va avea nevoie de o reconstrucție nouă (pivot nou dacă este indicat) și de o restaurare coronară etanșă, deoarece aceasta influențează direct prognosticul pe termen lung.',
          price: '200 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Obturatie de canal monoradicular/un canal',
          description: 'Obturare definitivă a canalului unic pentru a închide etanș rădăcina și a păstra dintele funcțional.',
          detailedDescription:
            'Obturatia de canal monoradicular (un canal) este etapa prin care, după curățare și dezinfectare, canalul este sigilat complet pentru a preveni reinfectarea. Este esențial ca obturația să fie cât mai etanșă, deoarece bacteriile pot pătrunde din nou dacă există spații sau dacă restaurarea de la nivelul coroanei nu este corectă.\n\nÎn procedură, medicul usucă canalul, adaptează materialele de obturație și verifică corectitudinea sigilării. După obturație, dintele este închis provizoriu sau definitiv, în funcție de plan, iar pacientului i se explică următorul pas: o obturație finală extinsă sau o coroană, mai ales dacă dintele a fost foarte afectat. Îngrijirea corectă după tratament include evitarea alimentelor dure pe partea respectivă până la restaurarea definitivă.',
          price: '200 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Obturatie de canal biradicular 2 canale',
          description: 'Sigilare definitivă pentru 2 canale, cu focus pe etanșeitate și prevenirea recidivelor infecțioase.',
          detailedDescription:
            'Obturatia de canal biradiculară (2 canale) este etapa finală a tratamentului endodontic pentru dinți care au două canale (de exemplu, anumiți premolari sau canini cu anatomie particulară). După curățare și dezinfectare, canalele sunt umplute și sigilate pentru a bloca orice spațiu în care bacteriile ar putea rămâne sau se pot reinstala.\n\nProcedura implică controlul lungimii de lucru, uscarea canalelor, adaptarea materialului de obturație și verificarea sigilării. Particularitatea la 2 canale este menținerea unei obturări uniforme în ambele trasee, deoarece fiecare canal poate avea curbură sau ramificații. După obturație, medicul recomandă restaurarea coronară corespunzătoare și controale, mai ales dacă a existat o infecție veche, pentru a urmări vindecarea la radiografie.',
          price: '250 RON',
          duration: 'Variază',
          popular: false
        }
      ]
    },
    {
      category: 'Estetică dentară',
      color: 'from-pink-500 to-rose-500',
      icon: <Gem className="w-6 h-6" />,
      services: [
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Aplicare bijuterie dentara',
          description: 'Aplicare rapidă a unei bijuterii dentare pentru un accent discret, fără găurire și fără afectarea smalțului.',
          detailedDescription:
            'Aplicarea unei bijuterii dentare (tooth gem) este o procedură estetică minim invazivă, prin care pe suprafața dintelui se fixează un element decorativ special conceput pentru uz stomatologic. Nu implică găurire, șlefuire sau îndepărtare de smalț atunci când este realizată corect și cu materiale adezive profesionale.\n\nÎnainte de aplicare, medicul verifică dacă dintele este sănătos și fără carii, apoi curăță și usucă zona pentru o aderență bună. Se folosește un adeziv dentar și un compozit similar celui utilizat la obturații, pentru o fixare stabilă. După procedură, se recomandă evitarea alimentelor foarte dure în primele 24 de ore și igienă atentă, inclusiv periaj blând în jurul bijuteriei. Dacă se dorește îndepărtarea, aceasta se face în cabinet, în siguranță, cu lustruirea smalțului.',
          price: '250 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Albire dentara acasa (gutiere incluse)',
          description: 'Albire controlată la domiciliu cu gutiere personalizate, pentru rezultate progresive și aspect natural.',
          detailedDescription:
            'Albirea dentară acasă cu gutiere personalizate este o metodă confortabilă și predictibilă, recomandată pacienților care își doresc o schimbare treptată a nuanței dinților. Medicul ia amprente sau scanare, iar gutierele sunt realizate pe forma dinților, astfel încât gelul de albire să stea exact unde trebuie și să reducă riscul de iritații gingivale.\n\nLa livrare, pacientul primește instrucțiuni clare despre cantitatea de gel, durata purtării și numărul de zile necesare. Efectul apare progresiv, iar nuanța se poate ajusta în funcție de obiectivul estetic. Pe parcurs, pot apărea episoade de sensibilitate tranzitorie; în aceste cazuri se recomandă pauze, gel desensibilizant și pastă pentru dinți sensibili. Pentru menținerea rezultatelor, se recomandă limitarea alimentelor/băuturilor intens colorate (cafea, vin roșu, ceai negru) și o igienă riguroasă.',
          price: '1200 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Albire dinte devital',
          description: 'Albire internă pentru un dinte „întunecat" după tratament de canal, fără a modifica nuanța dinților vecini.',
          detailedDescription:
            'Albirea unui dinte devital este un tratament dedicat dinților care s-au închis la culoare după tratament endodontic (de canal). Spre deosebire de albirea clasică, care acționează pe exterior, aici se poate utiliza o tehnică de albire internă, astfel încât nuanța dintelui să se apropie de restul dinților fără a supra-albi arcada.\n\nMedicul verifică mai întâi calitatea tratamentului de canal și exclude cauze precum infiltrații sau carii. Apoi creează un acces controlat și aplică un agent de albire în interiorul dintelui, protejând rădăcina și țesuturile. Tratamentul poate necesita una sau mai multe ședințe, în funcție de gradul de discromie. La final, dintele este sigilat corect cu materiale estetice, iar pacientul primește recomandări pentru a evita re-pigmentarea și pentru a menține integritatea restaurării.',
          price: '250 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Albire dentara in cabinet + acasa (gutiere incluse)',
          description: 'Protocol complet: albire rapidă în cabinet urmată de stabilizare acasă, pentru rezultate puternice și uniforme.',
          detailedDescription:
            'Albirea combinată (în cabinet + acasă) este una dintre cele mai eficiente opțiuni atunci când se urmăresc rezultate vizibile, dar și stabilitate pe termen lung. Prima etapă se desfășoară în cabinet, unde medicul izolează gingiile și aplică un gel profesional, monitorizând reacția și sensibilitatea. Această ședință oferă, de regulă, un „boost" imediat al nuanței.\n\nA doua etapă este albirea la domiciliu cu gutiere personalizate, care ajută la uniformizarea finală și la menținerea rezultatului. Pacientul primește planul exact (zile, durată, pauze), iar nuanța se ajustează gradual până la nivelul dorit. În plus, protocolul combinat este util pentru cei cu colorații persistente (cafea, fumat) sau pentru cei care vor un rezultat mai controlat decât doar o albire în cabinet. Pentru confort, se recomandă produse desensibilizante și evitarea alimentelor intens pigmentate în zilele imediat următoare.',
          price: '1500 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Albire dentara in cabinet',
          description: 'Albire profesională cu efect rapid, realizată sub control medical și cu protecția gingiilor.',
          detailedDescription:
            'Albirea dentară în cabinet este o procedură profesională realizată într-un mediu controlat, cu materiale și tehnici care oferă rezultate rapide. Înainte de albire, medicul evaluează sănătatea orală (carii, inflamații gingivale, retracții) și stabilește dacă este nevoie de igienizare sau tratamente preliminare.\n\nÎn timpul procedurii, gingiile sunt protejate cu o barieră specială, apoi se aplică gelul de albire pe suprafața dinților. Medicul monitorizează evoluția nuanței și adaptează timpul de lucru pentru a obține un rezultat armonios. După ședință, este posibilă o sensibilitate temporară, mai ales la rece; de obicei se remite în 24–72 de ore. Pentru menținerea efectului, sunt recomandate reguli simple: „dietă albă" 24–48h (evitarea coloranților), igienă corectă și, la nevoie, sesiuni de întreținere la intervale stabilite împreună cu medicul.',
          price: '1000 RON',
          duration: 'Variază',
          popular: false
        }
      ]
    },
    {
      category: 'Ortodonție',
      color: 'from-orange-500 to-red-500',
      icon: <Award className="w-6 h-6" />,
      services: [
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Disjunctor',
          description: 'Lărgește maxilarul superior la copii și creează spațiu pentru alinierea dinților.',
          detailedDescription:
            'Disjunctorul este un aparat ortodontic folosit în special la copii pentru lărgirea maxilarului superior atunci când arcada este îngustă. Prin activări controlate, se obține o expansiune progresivă care poate corecta mușcătura încrucișată și poate crea spațiu pentru erupția sau alinierea dinților permanenți.\n\nTratamentul are, de regulă, o fază activă (expansiune) și o fază de stabilizare, în care aparatul rămâne pe loc pentru a menține rezultatul. Controalele periodice sunt importante pentru monitorizarea evoluției și pentru ajustări. Igiena atentă în jurul aparatului ajută la prevenirea inflamației gingivale.',
          price: '1500 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Aparat fix partial',
          description: 'Aparat fix montat pe o singură arcadă, în cazuri selectate și bine indicate.',
          detailedDescription:
            'Aparatul fix parțial se montează doar pe o arcadă (superioară sau inferioară) atunci când problema ortodontică permite o corecție localizată sau etapizată. Este util pentru alinierea unui grup de dinți, corectarea înghesuirilor moderate sau pregătirea pentru tratamente ulterioare.\n\nMedicul stabilește indicația în funcție de mușcătură și de raportul dintre maxilare, astfel încât rezultatul să fie stabil și funcțional. Pe parcurs sunt necesare controale periodice, iar igiena riguroasă (periaj atent și mijloace auxiliare) ajută la prevenirea cariilor și a inflamației gingivale.',
          price: '1000 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Aparat fix metalic',
          description: 'Soluția clasică și eficientă pentru aliniere dentară și corectarea mușcăturii.',
          detailedDescription:
            'Aparatul fix metalic este una dintre cele mai eficiente opțiuni pentru corectarea alinierii dinților și a mușcăturii. Este robust, predictibil și potrivit pentru o gamă largă de situații: înghesuiri dentare, spațieri, rotații și diverse probleme de ocluzie.\n\nTratamentul presupune montarea brackeților și a arcurilor ortodontice, urmate de activări periodice în cabinet pentru ghidarea mișcărilor dentare. Pentru rezultate bune și un tratament cât mai confortabil, sunt esențiale controalele regulate, igiena orală corectă și respectarea recomandărilor legate de alimentație.',
          price: '2800 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Consultație ortodonție',
          description: 'Evaluare completă și recomandări clare pentru aparatul potrivit și pașii tratamentului.',
          detailedDescription:
            'Consultația ortodontică este primul pas pentru stabilirea diagnosticului și a unui plan corect de tratament. Medicul evaluează alinierea dinților, mușcătura și dezvoltarea maxilarelor, iar la nevoie recomandă investigații suplimentare (radiografii, fotografii, amprentă/scanare) pentru o analiză completă.\n\nÎn cadrul consultației primești explicații despre opțiunile de tratament (fix, mobil, estetic), durata estimată, etapele principale și ce rezultate sunt realiste. Este momentul potrivit pentru a discuta obiectivele, confortul, igiena pe perioada aparatului și modul în care vor decurge controalele.',
          price: '100 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Control aparat fix /per arcada',
          description: 'Activare și ajustări periodice pentru progres constant și mișcări dentare controlate.',
          detailedDescription:
            'Controlul aparatului fix este vizita de întreținere în care medicul verifică evoluția tratamentului și realizează activări/ajustări (schimbare arcuri, elastice, ligaturi), astfel încât mișcările dentare să continue în siguranță și eficient.\n\nÎn cadrul controlului se urmăresc și aspecte precum igiena, eventuale iritații, brackeți dezlipiți sau disconfort la masticație. Respectarea programului de controale ajută la menținerea ritmului de tratament și poate preveni prelungirea duratei totale.',
          price: '100 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Retainer colat',
          description: 'Dispozitiv fix, discret, lipit în spatele dinților pentru a menține rezultatul obținut.',
          detailedDescription:
            'Retainerul colat este o sârmă fină fixată pe fața internă a dinților (de obicei cei frontali), menită să păstreze alinierea obținută după tratamentul ortodontic. Este una dintre cele mai sigure metode de contenție, deoarece acționează permanent fără a depinde de purtarea zilnică de către pacient.\n\nPentru a funcționa corect pe termen lung, este importantă igiena atentă (ață dentară specială/duș bucal) și verificarea periodică a lipiturilor. Dacă retainerul se dezlipește parțial, este recomandat să fie refixat cât mai repede pentru a evita mici deplasări ale dinților.',
          price: '450 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Gutiera de contentie',
          description: 'Gutieră transparentă, realizată personalizat, pentru stabilizarea rezultatului ortodontic.',
          detailedDescription:
            'Gutiera de contenție (retainer transparent) este realizată personalizat și are rolul de a menține poziția dinților după finalizarea tratamentului ortodontic. Este o opțiune confortabilă și estetică, folosită frecvent mai ales pe timpul nopții.\n\nProgramul de purtare se stabilește individual: în primele luni poate fi necesară purtare mai frecventă, apoi se continuă cu purtare de menținere. Curățarea corectă și păstrarea în cutie protejează gutiera de deformare, depuneri și fisuri.',
          price: '550 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Gutiera acrilica pentru inaltare ocluzala',
          description: 'Ajută la echilibrarea mușcăturii și poate reduce suprasolicitarea dinților și a articulației.',
          detailedDescription:
            'Gutiera acrilică pentru înălțare ocluzală este un dispozitiv rigid, realizat la laborator, folosit pentru a modifica temporar contactele dintre dinți. Poate fi recomandată în situații de dezechilibru ocluzal, bruxism, tensiuni musculare sau disconfort la nivelul articulației temporo-mandibulare.\n\nScopul este să creeze un contact mai stabil și mai controlat între arcade, reducând suprasolicitarea și protejând structurile dentare. Programul de purtare este stabilit de medic, iar controalele ajută la ajustări fine pentru confort și eficiență.',
          price: '250 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Ortoimplant',
          description: 'Mini-implant ortodontic pentru ancoraj temporar și mișcări dentare mai precise.',
          detailedDescription:
            'Ortoimplantul (mini-implant ortodontic) este un dispozitiv mic, folosit ca punct de sprijin suplimentar pentru a obține mișcări dentare mai eficiente și mai bine controlate. Este util atunci când este nevoie de un ancoraj solid, fără a "încărca" alți dinți sau fără compromisuri asupra rezultatului.\n\nInserarea se face minim invaziv, de obicei cu anestezie locală, iar după ce obiectivul ortodontic este atins, ortoimplantul se îndepărtează. Igiena locală și controalele periodice sunt importante pentru menținerea stabilității pe durata utilizării.',
          price: '500 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Disjunctor si masca faciala',
          description: 'Tratament ortopedic în creștere pentru ghidarea dezvoltării maxilarului și corectarea mușcăturii.',
          detailedDescription:
            'Disjunctorul împreună cu masca facială se utilizează în special la copii și adolescenți aflați în creștere, atunci când este nevoie de ghidarea dezvoltării maxilarelor. Disjunctorul lărgește maxilarul superior, iar masca facială poate ajuta la poziționarea lui corectă în anumite tipuri de mușcături.\n\nEficiența este maximă atunci când tratamentul este început la momentul potrivit, înainte ca dezvoltarea osoasă să se finalizeze. Necesită cooperare bună la purtare și controale regulate pentru ajustări, monitorizare și stabilizarea rezultatului.',
          price: '1400 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Aparat miofunctional',
          description: 'Ajută la corectarea obiceiurilor vicioase și la echilibrarea musculaturii oro-faciale.',
          detailedDescription:
            'Aparatul miofuncțional este recomandat mai ales la copii, pentru corectarea obiceiurilor care pot afecta poziția dinților și dezvoltarea maxilarelor: respirația orală, poziția incorectă a limbii, înghițirea atipică sau anumite parafuncții.\n\nPrin reeducarea musculaturii și ghidarea corectă a funcțiilor orale, aparatul poate contribui la o dezvoltare mai armonioasă a arcadelor și la un echilibru mai bun al mușcăturii. Rezultatele depind de consecvența purtării și de respectarea indicațiilor, iar controalele periodice ajută la adaptarea tratamentului.',
          price: '800 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Aparat fix safir',
          description: 'Aparat fix estetic, cu brackeți transparenți, mai discret în timpul tratamentului.',
          detailedDescription:
            'Aparatul fix cu brackeți din safir este o opțiune estetică pentru pacienții care doresc un tratament mai puțin vizibil. Brackeții transparenți se integrează bine pe suprafața dintelui, păstrând în același timp eficiența unui aparat fix.\n\nTratamentul include montaj, activări periodice și, la final, etapa de contenție pentru stabilizarea rezultatului. Ca la orice aparat fix, igiena riguroasă și controalele regulate sunt esențiale pentru prevenirea inflamației gingivale și pentru menținerea unui parcurs corect al tratamentului.',
          price: '4000 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Aparat fix metalic semifizionomic ICONIX',
          description: 'Brackeți metalici cu aspect estetic (auriu), un compromis bun între discreție și rezistență.',
          detailedDescription:
            'ICONIX este un aparat fix metalic semifizionomic, recunoscut pentru aspectul său mai estetic datorită culorii calde (auriu), care îl face mai puțin evident decât brackeții metalici standard. Este o soluție potrivită pentru pacienții care vor o variantă mai discretă, fără a renunța la rezistența și controlul oferite de un aparat fix metalic.\n\nTratamentul urmează etapele clasice: montaj, activări periodice și contenție. Pentru rezultate stabile, sunt importante controalele regulate, igiena atentă și respectarea recomandărilor privind alimentația (evitarea alimentelor foarte dure sau lipicioase).',
          price: '3200 RON',
          duration: 'Variază',
          popular: false
        }
      ]
    },
    {
      category: 'Parodontologie',
      color: 'from-teal-500 to-cyan-500',
      icon: <Shield className="w-6 h-6" />,
      services: [
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Tratament regenerativ boala parodontala (per dinte)',
          description: 'Tratament avansat pentru refacerea suportului dintelui și reducerea pierderii osoase locale.',
          detailedDescription:
            'Tratamentul regenerativ parodontal are ca scop refacerea țesuturilor distruse de parodontită (os, ligament parodontal și gingie). Se recomandă în special atunci când există pungi parodontale adânci și pierdere osoasă în jurul unui dinte, dar dintele are încă potențial de menținere pe arcadă.\n\nÎn cadrul ședinței se realizează o curățare minuțioasă a zonei afectate, îndepărtarea depunerilor și a țesutului inflamator, apoi se aplică materiale de regenerare (în funcție de caz) pentru a sprijini refacerea naturală a osului. După procedură, pacientul primește indicații clare pentru igienă, alimentație și controale, deoarece respectarea acestora influențează direct rezultatul.',
          price: '1100 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Tunelizare',
          description: 'Procedură pentru dinții cu furcații afectate, care facilitează igienizarea pe termen lung.',
          detailedDescription:
            'Tunelizarea este o intervenție parodontală indicată mai ales la molari, atunci când parodontita a afectat zona dintre rădăcini (furcație) și igienizarea devine dificilă. Prin remodelarea atentă a țesuturilor, medicul creează un acces mai bun sub dinte, astfel încât pacientul să poată curăța eficient zona acasă.\n\nScopul este reducerea inflamației recurente și menținerea dintelui pe arcadă cât mai mult timp. După tunelizare, pacientul primește recomandări personalizate de igienă (periuțe interdentare, ață specială, irigator), precum și program de controale pentru monitorizarea stabilității.',
          price: '400 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Indepartare imobilizare',
          description: 'Îndepărtarea atelajului dentar atunci când stabilitatea dinților a fost obținută sau se schimbă planul de tratament.',
          detailedDescription:
            'Îndepărtarea imobilizării (atelajului) se efectuează atunci când dinții au devenit suficient de stabili, când atelajul necesită înlocuire sau când este nevoie de acces pentru alte tratamente (igienizare, restaurări, ajustări ocluzale). Procedura este realizată cu atenție pentru a proteja smalțul și gingia.\n\nDupă îndepărtare, se verifică mobilitatea dinților, se evaluează mușcătura și se recomandă, dacă este necesar, o nouă variantă de stabilizare sau un protocol de întreținere parodontală. De multe ori, în aceeași vizită se poate face și o igienizare de control pentru a reduce riscul de recidivă.',
          price: '100 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Imobilizare 4-5 dinti',
          description: 'Atelaj pentru 4–5 dinți mobili, care distribuie forțele de masticație și crește confortul.',
          detailedDescription:
            'Imobilizarea a 4–5 dinți (atelajul dentar) este o soluție utilizată în parodontită atunci când un grup de dinți prezintă mobilitate. Prin conectarea controlată a dinților între ei, forțele din timpul masticației se distribuie mai uniform, ceea ce scade stresul pe fiecare dinte și reduce disconfortul.\n\nÎnainte de imobilizare, zona este evaluată clinic (gingii, mobilitate, pungile parodontale) și se stabilește dacă este necesar un tratament parodontal prealabil. După aplicare, pacientul primește instrucțiuni specifice de igienă în jurul atelajului și este programat la controale regulate pentru a monitoriza stabilitatea și sănătatea gingivală.',
          price: '500 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Imobilizare cu fibra (per sextant)',
          description: 'Stabilizare estetică cu fibră pe un sextant, utilă pentru reducerea mobilității și protecția gingiilor.',
          detailedDescription:
            'Imobilizarea cu fibră (pe sextant) este o metodă modernă și estetică de stabilizare a dinților, folosită frecvent în parodontită. Se aplică o fibră specială și materiale adezive care conectează dinții dintr-o zonă (sextant), oferind suport fără a încărca excesiv un singur dinte.\n\nProcedura este aleasă atunci când este nevoie de o soluție discretă, cu confort bun la vorbire și masticație. După aplicare, se verifică mușcătura pentru a evita contactele traumatice și se recomandă metode de curățare adaptate (periuțe interdentare, ață cu capăt rigid, irigator), deoarece igiena corectă este esențială pentru menținerea rezultatului.',
          price: '500 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Chiuretaj camp inchis per arcada',
          description: 'Curățare subgingivală pe toată arcada, fără incizii, pentru reducerea pungilor și a sângerării.',
          detailedDescription:
            'Chiuretajul parodontal în câmp închis pe arcadă este o procedură non-chirurgicală prin care se îndepărtează tartrul și biofilmul bacterian din profunzime, de sub gingie, pe întreaga arcadă. Este indicat când există pungi parodontale, sângerare la periaj, respirație neplăcută sau semne de inflamație persistentă.\n\nSe lucrează cu instrumente parodontale și, la nevoie, cu ultrasunete, pentru a curăța suprafața rădăcinii și a reduce încărcătura bacteriană. După ședință, gingia poate fi sensibilă câteva zile, iar pacientul primește recomandări de igienă, antiseptice și controale. Rezultatul se evaluează ulterior prin re-măsurarea pungilor și ajustarea planului de tratament.',
          price: '1200 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Tratament antiinflamator gingivita (per arcada)',
          description: 'Terapie locală pentru gingivită pe arcadă: scade inflamația, roșeața și sângerarea gingiilor.',
          detailedDescription:
            'Tratamentul antiinflamator pentru gingivită (per arcadă) se adresează inflamației gingivale cauzate de placă bacteriană și depuneri. Gingivita se manifestă prin sângerare la periaj, gingii umflate, sensibile și uneori miros neplăcut. Intervenția urmărește reducerea inflamației și restabilirea sănătății gingiei.\n\nProcedura include îndepărtarea factorilor iritanți (placă, tartru), curățare profesională adaptată, precum și aplicarea de soluții/geluri antiseptice sau antiinflamatoare, în funcție de necesitate. Pacientul primește un protocol simplu de igienă pentru acasă (tehnică de periaj, ață/periuțe interdentare, clătiri), iar evoluția este reevaluată la control.',
          price: '100 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Igienizare pacient parodontopat',
          description: 'Igienizare dedicată parodontitei, cu accent pe zonele subgingivale și controlul recidivei.',
          detailedDescription:
            'Igienizarea pentru pacientul parodontopat este diferită de o igienizare standard, deoarece urmărește controlul bolii pe termen lung. În parodontită, bacteriile se acumulează adânc sub gingie, iar menținerea rezultatelor depinde de ședințe regulate de întreținere.\n\nÎn cadrul vizitei se îndepărtează depunerile supra- și subgingivale, se curăță atent zonele cu pungi parodontale, iar suprafețele dentare sunt finisate pentru a reduce re-atașarea plăcii. Se reevaluează sângerarea, mobilitatea și igiena de acasă, iar pacientul primește recomandări personalizate (instrumente interdentare, frecvența controalelor, zone de atenție).',
          price: '400 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Parodontometrie',
          description: 'Măsurarea pungilor parodontale pentru diagnostic, stadializare și urmărirea evoluției tratamentului.',
          detailedDescription:
            'Parodontometria este o evaluare clinică esențială în parodontologie. Medicul măsoară adâncimea pungilor parodontale în jurul fiecărui dinte, verifică sângerarea la sondare și identifică zonele cu inflamație activă sau pierdere de atașament.\n\nAceste măsurători ajută la stabilirea severității bolii parodontale, la alegerea tratamentului potrivit (igienizare, chiuretaj, chirurgie, regenerare) și la compararea rezultatelor în timp. În urma parodontometriei, pacientul primește o explicație clară a zonelor problematice și un plan de monitorizare cu controale periodice, astfel încât boala să fie ținută sub control.',
          price: '200 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Chiuretaj parodontal in camp inchis dinte pluriradicular',
          description: 'Chiuretaj subgingival în câmp închis pentru dinți cu rădăcini multiple, cu atenție pe furcații.',
          detailedDescription:
            'Chiuretajul parodontal în câmp închis pentru dinte pluriradicular este o procedură de curățare în profunzime realizată la molari/premolari, unde anatomia este mai complexă. Dinții cu rădăcini multiple pot avea zone greu accesibile (furcații), unde placa și tartrul se acumulează ușor și mențin inflamația.\n\nProcedura presupune îndepărtarea depunerilor și a biofilmului bacterian de sub gingie, netezirea suprafeței rădăcinii și reducerea încărcăturii microbiene, fără incizii. După tratament, se recomandă igienă atentă în zona respectivă și reevaluare la control pentru a verifica scăderea sângerării și a adâncimii pungii.',
          price: '200 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Gingivectomie (per dinte)',
          description: 'Îndepărtarea excesului gingival per dinte pentru contur corect și acces mai bun la curățare.',
          detailedDescription:
            'Gingivectomia (per dinte) este o procedură prin care se îndepărtează țesutul gingival în exces din jurul unui dinte, atunci când acesta creează „pungi false", reține bacterii sau afectează estetica. Poate fi indicată în inflamații cronice, în zone cu hiperplazie gingivală sau pentru a obține o formă gingivală mai armonioasă.\n\nIntervenția se face cu control atent al sângerării și cu protejarea țesuturilor sănătoase. După gingivectomie, pacientul primește recomandări pentru îngrijire locală, evitarea traumatizării zonei și, dacă este necesar, utilizarea unor produse antiseptice. Vindecarea este monitorizată la control pentru a confirma stabilitatea țesutului gingival.',
          price: '150 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Tratament biostimulant neypulpin (5 sedinte)',
          description: 'Cura în 5 ședințe pentru stimularea vindecării gingivale și susținerea regenerării țesuturilor.',
          detailedDescription:
            'Tratamentul biostimulant neypulpin (5 ședințe) este un protocol etapizat care urmărește susținerea vindecării gingiilor și îmbunătățirea răspunsului tisular în context parodontal. Este ales în situații în care țesuturile sunt inflamate, sensibilitatea este crescută sau este nevoie de suport suplimentar în perioada de stabilizare.\n\nÎn fiecare ședință se evaluează evoluția, se curăță/controlează zona (în funcție de caz) și se aplică terapia biostimulantă conform protocolului. Beneficiile se observă, de regulă, prin reducerea disconfortului gingival și îmbunătățirea aspectului local. La finalul curei se stabilește planul de întreținere, cu recomandări precise pentru igienă și frecvența controalelor.',
          price: '800 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Chiuretaj parodontal in camp inchis dinte monoradicular',
          description: 'Curățare profundă în câmp închis pentru dinte cu o rădăcină, pentru reducerea pungii parodontale.',
          detailedDescription:
            'Chiuretajul parodontal în câmp închis pentru dinte monoradicular este o procedură non-chirurgicală de decontaminare subgingivală, recomandată atunci când inflamația persistă în jurul unui dinte cu o singură rădăcină (de exemplu incisivi, canini sau anumiți premolari). Obiectivul este reducerea bacteriilor și a inflamației din jurul rădăcinii.\n\nSe îndepărtează tartrul și placa de sub gingie, se netezește suprafața rădăcinii pentru a reduce retenția bacteriană și se urmărește scăderea sângerării. După procedură, pacientul primește indicații clare de igienă și este chemat la reevaluare pentru a verifica dacă punga s-a redus și dacă gingia s-a stabilizat.',
          price: '150 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Chiuretaj parodontal in camp deschis',
          description: 'Tratament chirurgical parodontal cu acces direct la rădăcini, indicat în cazuri avansate.',
          detailedDescription:
            'Chiuretajul parodontal în câmp deschis este o procedură chirurgicală prin care medicul creează acces direct la suprafața rădăcinilor și la țesuturile afectate, pentru o curățare mult mai eficientă decât în câmp închis. Este indicat în special în parodontita moderat-severă, când pungile sunt adânci și depunerile nu pot fi îndepărtate complet prin tehnici non-chirurgicale.\n\nÎn timpul intervenției se ridică delicat gingia, se îndepărtează depunerile și țesutul inflamator, se curăță rădăcinile și se rearanjează gingia pentru a obține o zonă mai ușor de igienizat. La final se pot aplica suturi, iar pacientul primește un plan postoperator (igienă, alimentație, medicație la nevoie) și program de controale pentru monitorizarea vindecării.',
          price: '250 RON',
          duration: 'Variază',
          popular: false
        }
      ]
    },
    {
      category: 'Pedodonție',
      color: 'from-yellow-500 to-amber-500',
      icon: <Heart className="w-6 h-6" />,
      services: [
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Sigilare dentara largita',
          description: 'Protecția dinților copiilor împotriva cariilor.',
          detailedDescription: 'Tratamente dentare pentru copii\n\nProceduri adaptate vârstei copilului, realizate într-un mediu prietenos pentru prevenție și sănătate dentară pe termen lung.',
          price: '200 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Obturatie de canal dinte monoradicular temporar',
          description: 'Obturatie de canal dinte monoradicular temporar',
          detailedDescription: 'Tratamente dentare pentru copii\n\nProceduri adaptate vârstei copilului, realizate într-un mediu prietenos pentru prevenție și sănătate dentară pe termen lung.',
          price: '100 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Obturatie coronara compozit pe dinti temporari',
          description: 'Tratamentul cariilor dentare la copii.',
          detailedDescription: 'Tratamente dentare pentru copii\n\nProceduri adaptate vârstei copilului, realizate într-un mediu prietenos pentru prevenție și sănătate dentară pe termen lung.',
          price: '250 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Pulpectomie vitala dinte pluriradicular temporar',
          description: 'Tratament al nervului dentar la dinții temporari.',
          detailedDescription: 'Tratamente dentare pentru copii\n\nProceduri adaptate vârstei copilului, realizate într-un mediu prietenos pentru prevenție și sănătate dentară pe termen lung.',
          price: '200 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Extracție dinte temporar mobil (fără anestezie)',
          description: 'Îndepărtarea dinților de lapte în condiții sigure.',
          detailedDescription: 'Tratamente dentare pentru copii\n\nProceduri adaptate vârstei copilului, realizate într-un mediu prietenos pentru prevenție și sănătate dentară pe termen lung.',
          price: '150 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Extracție dinte temporar fără mobilitate (cu anestezie)',
          description: 'Extracție dinte temporar fără mobilitate (cu anestezie)',
          detailedDescription: 'Tratamente dentare pentru copii\n\nProceduri adaptate vârstei copilului, realizate într-un mediu prietenos pentru prevenție și sănătate dentară pe termen lung.',
          price: '200 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Pulpectomie vitala dinte monoradicular temporar',
          description: 'Pulpectomie vitala dinte monoradicular temporar',
          detailedDescription: 'Tratamente dentare pentru copii\n\nProceduri adaptate vârstei copilului, realizate într-un mediu prietenos pentru prevenție și sănătate dentară pe termen lung.',
          price: '150 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Obturatie coronara ionomer de sticla',
          description: 'Obturatie coronara ionomer de sticla',
          detailedDescription: 'Tratamente dentare pentru copii\n\nProceduri adaptate vârstei copilului, realizate într-un mediu prietenos pentru prevenție și sănătate dentară pe termen lung.',
          price: '250 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Obturatie de canal dinte pluriradicular temporar',
          description: 'Obturatie de canal dinte pluriradicular temporar',
          detailedDescription: 'Tratamente dentare pentru copii\n\nProceduri adaptate vârstei copilului, realizate într-un mediu prietenos pentru prevenție și sănătate dentară pe termen lung.',
          price: '150 RON',
          duration: 'Variază',
          popular: false
        },
      ]
    },
    {
      category: 'Profilaxie Dentară',
      color: 'from-indigo-500 to-blue-500',
      icon: <Sparkles className="w-6 h-6" />,
      services: [
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Gutiera bruxism',
          description: 'Gutieră personalizată care protejează smalțul și relaxează articulația în timpul scrâșnitului nocturn.',
          detailedDescription:
            'Gutiera pentru bruxism este un dispozitiv realizat pe baza amprentelor, adaptat perfect pe dinții dumneavoastră. Rolul ei este să prevină tocirea și fisurarea dinților, sensibilitatea dentară, durerea musculară și tensiunea la nivelul articulației temporo-mandibulare (ATM) provocate de scrâșnitul sau încleștarea dinților, mai ales noaptea.\n\nÎn cadrul vizitei se evaluează mușcătura, se iau amprente (sau scanare), apoi gutiera este realizată în laborator. La predare, medicul verifică adaptarea și contactele, astfel încât să fie confortabilă și eficientă. Se recomandă purtarea conform indicațiilor (de obicei noaptea), curățarea zilnică cu apă rece/călduță și o periuță moale, evitarea apei fierbinți și depozitarea în cutie. La controalele periodice se pot face ajustări fine pe măsură ce mușcătura se stabilizează.',
          price: '350 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Fluorizare (per arcada)',
          description: 'Aplicare de fluor pe o arcadă pentru întărirea smalțului și reducerea riscului de carii.',
          detailedDescription:
            'Fluorizarea (per arcadă) este o procedură preventivă prin care se aplică local fluor sub formă de gel, spumă sau lac, cu scopul de a întări smalțul și de a crește rezistența la acizi. Este recomandată atât copiilor (mai ales în perioada erupției dentare), cât și adulților cu risc crescut de carie: sensibilitate dentară, retracții gingivale, igienă dificilă, aparat ortodontic sau carii recurente.\n\nÎnainte de aplicare, suprafața dinților este curățată și uscată. Substanța se aplică uniform pe arcada aleasă și se lasă să acționeze un interval controlat. După procedură, pacientul primește recomandări simple: evitarea alimentelor și băuturilor pentru o perioadă, amânarea periajului (în funcție de produs) și folosirea unei paste cu fluor adaptate. Fluorizarea poate fi inclusă într-un plan de profilaxie, împreună cu igienizări periodice și educație de igienă orală.',
          price: '150 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Air flow',
          description: 'Curățare cu jet de apă, aer și pulbere fină pentru îndepărtarea petelor și a plăcii din zone greu accesibile.',
          detailedDescription:
            'Air Flow este o procedură modernă de igienizare care îndepărtează petele superficiale (cafea, ceai, vin roșu, fumat) și placa bacteriană din jurul dinților, inclusiv dintre dinți și de-a lungul liniei gingivale. Spre deosebire de detartraj, care se concentrează pe tartru, Air Flow este excelent pentru curățarea delicată și uniformă a suprafețelor, oferind un aspect mai luminos imediat după ședință.\n\nProcedura folosește un jet controlat de apă și aer, împreună cu o pulbere specială, care „lustruiește" ușor suprafața dentară fără să o zgârie. Este utilă înainte de albire, înainte de tratamente estetice sau ca parte dintr-un program de întreținere. După Air Flow, dinții se simt mai netezi, iar igiena acasă devine mai eficientă. La final, medicul poate recomanda periuță, pastă și tehnici de curățare adaptate obiceiurilor pacientului.',
          price: '150 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Detaratraj + periaj (ambele arcade)',
          description: 'Îndepărtarea tartrului și finisare prin periaj profesional pe ambele arcade pentru gingii mai sănătoase.',
          detailedDescription:
            'Pachetul de detartraj + periaj (ambele arcade) este baza igienizării periodice. Detartrajul îndepărtează tartrul acumulat deasupra și, în anumite zone, ușor sub gingie, unde periajul de acasă nu poate ajunge. Tartrul este o cauză frecventă a sângerării gingivale, a inflamației și a respirației neplăcute.\n\nDupă detartraj, se realizează periajul profesional cu paste speciale, pentru a netezi suprafețele dentare și a reduce retenția plăcii bacteriene. Procedura ajută la prevenția gingivitei și susține menținerea sănătății parodontale. La final, pacientul primește recomandări personalizate: cât de des ar trebui repetată igienizarea (de obicei 4–6 luni, în funcție de caz), tehnica de periaj, ața dentară/periuțe interdentare și zonele care necesită atenție suplimentară.',
          price: '250 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Periaj',
          description: 'Periaj profesional pentru îndepărtarea plăcii și lustruirea dinților, cu accent pe confort și estetică.',
          detailedDescription:
            'Periajul profesional este o procedură de profilaxie care curăță placa bacteriană și depunerile moi de pe dinți, apoi finisează suprafețele pentru un aspect mai curat și mai uniform. Este recomandat ca întreținere, mai ales la pacienții cu sensibilitate, la cei cu lucrări protetice, aparat ortodontic sau atunci când se dorește o curățare mai blândă, fără detartraj complet.\n\nÎn timpul periajului se folosesc perii și paste profesionale, adaptate situației clinice (de exemplu paste pentru pete, paste pentru sensibilitate sau paste cu efect de lustruire). Medicul sau igienistul insistă în zonele unde placa se acumulează frecvent: pe suprafețele interne, între dinți și la limita gingiei. La final se oferă recomandări practice pentru îmbunătățirea igienei acasă, astfel încât rezultatul să se mențină cât mai mult.',
          price: '100 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Detartraj',
          description: 'Curățare profesională care elimină tartrul și scade riscul de inflamație gingivală și sângerare.',
          detailedDescription:
            'Detartrajul este procedura prin care se îndepărtează tartrul (depuneri mineralizate) de pe dinți. Tartrul nu poate fi eliminat prin periaj obișnuit și, în timp, irită gingia, favorizează gingivita și poate contribui la boala parodontală. De asemenea, este o cauză frecventă a respirației neplăcute.\n\nProcedura se realizează, de regulă, cu instrumente ultrasonice și manuale, în funcție de depuneri și sensibilitatea pacientului. Se curăță atent dinții de pe arcadă, inclusiv în zonele greu accesibile. După detartraj, gingiile pot fi ușor sensibile sau pot sângera discret 1–2 zile, mai ales dacă inflamația era prezentă. Se recomandă igienă riguroasă, periuță moale și, la nevoie, produse pentru gingii. Un control periodic ajută la prevenirea recidivei și menține gingiile sănătoase.',
          price: '200 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Gutiera fluorizare',
          description: 'Gutieră personalizată pentru aplicarea controlată a gelului cu fluor, utilă în prevenție și sensibilitate.',
          detailedDescription:
            'Gutiera pentru fluorizare este un dispozitiv realizat pe baza amprentelor, menit să ajute la aplicarea uniformă a gelului cu fluor pe suprafața dinților. Este recomandată persoanelor cu risc crescut de carii, cu sensibilitate dentară, cu retracții gingivale sau celor care au nevoie de un protocol preventiv mai intens, stabilit de medic.\n\nDupă realizarea gutierei, pacientul primește instrucțiuni clare despre cantitatea de gel, durata de purtare și frecvență (în funcție de situație). Gutierele permit o aplicare mai eficientă decât metodele clasice, deoarece mențin substanța în contact cu dinții, reducând diluarea rapidă cu salivă. Pentru rezultate bune, este importantă respectarea indicațiilor, curățarea gutierei după utilizare și depozitarea corectă în cutie, ferită de căldură.',
          price: '100 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Pachet igienizare (detartraj, periaj, air-flow)',
          description: 'Igienizare completă care combină detartraj, periaj și Air Flow pentru curățare profundă și aspect proaspăt.',
          detailedDescription:
            'Pachetul complet de igienizare (detartraj, periaj, Air Flow) este recomandat celor care vor o curățare integrală, atât pentru sănătate, cât și pentru estetică. Detartrajul elimină tartrul, Air Flow îndepărtează petele și biofilmul din zone greu accesibile, iar periajul profesional netezește și finisează suprafețele dentare.\n\nAceastă combinație ajută la reducerea inflamației gingivale, la scăderea sângerării, la împrospătarea respirației și la menținerea unui aspect mai luminos al dinților. Este foarte utilă înainte de albire, înainte de tratamente protetice/estetice sau ca rutină de întreținere la pacienți predispuși la depuneri. La final, se discută un plan personalizat: intervalul optim pentru următoarea igienizare și instrumentele potrivite pentru acasă (periuță, pastă, interdentar, irigator).',
          price: '300 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Sigilare dentara clasica',
          description: 'Sigilarea șanțurilor dentare pentru a bloca acumularea de resturi și a preveni cariile, mai ales pe molari.',
          detailedDescription:
            'Sigilarea dentară clasică este o procedură preventivă prin care se aplică un material fluid în șanțurile și fosetele dinților (de obicei molari și premolari), acolo unde periuța ajunge mai greu. Aceste zone rețin ușor resturi alimentare și bacterii, ceea ce crește riscul de carie, în special la copii și adolescenți, dar și la adulți cu predispoziție.\n\nProcedura este rapidă și nedureroasă: dintele se curăță, se izolează, se aplică un gel special pentru pregătirea smalțului, apoi se adaugă materialul de sigilare și se fotopolimerizează (se întărește cu lumină). La final se verifică mușcătura și se oferă recomandări de control periodic, deoarece sigilările pot necesita reîmprospătare în timp. Sigilarea nu înlocuiește periajul, dar reduce semnificativ riscul de carii în zonele cele mai vulnerabile.',
          price: '150 RON',
          duration: 'Variază',
          popular: false
        }
      ]
    },
    {
      category: 'Protetică Dentară',
      color: 'from-gray-500 to-slate-500',
      icon: <Crown className="w-6 h-6" />,
      services: [
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Incrustatie compozit',
          description: 'Refacere estetică a dintelui cu o incrustație din compozit, pentru zonele unde o plomba simplă nu mai rezistă.',
          detailedDescription:
            'Incrustația din compozit este o restaurare indirectă (realizată în laborator sau prin tehnici dedicate) care înlocuiește porțiunea pierdută din dinte atunci când distrucția este mai mare decât poate susține o obturație clasică. Aceasta se adaptează precis pe suprafața dintelui și ajută la refacerea contactelor dintre dinți, a anatomiei de masticație și a etanșeității.\n\nProcedura include evaluarea clinică, pregătirea dintelui, amprentă/scanare și fixarea finală cu ciment adeziv. Avantajele sunt stabilitatea mai bună, margini mai precise și o durată de viață crescută față de obturațiile întinse. La final se verifică mușcătura și se oferă recomandări pentru igienă și controale periodice.',
          price: '400 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Onlay/Inlay ceramica/zirconiu',
          description: 'Reconstrucție de precizie din ceramică sau zirconiu, care întărește dintele și păstrează cât mai mult din structura naturală.',
          detailedDescription:
            'Inlay-ul și onlay-ul sunt lucrări protetice parțiale, recomandate când caria sau fractura a afectat o zonă extinsă, dar dintele poate fi păstrat fără coroană completă. Inlay-ul reconstruiește interiorul dintelui, iar onlay-ul poate acoperi și una sau mai multe cuspizi (vârfurile de masticație), oferind protecție suplimentară.\n\nMaterialele precum ceramica sau zirconiu au rezistență ridicată și aspect natural, fiind alese în funcție de poziția dintelui, forțele de masticație și cerințele estetice. Etapele includ pregătirea dintelui, amprentare/scanare, probă și cimentare adezivă. Rezultatul urmărește o margine perfect etanșă, o mușcătură corectă și o restaurare care se integrează cromatic cu dinții vecini.',
          price: '700 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Aplicare capa de vindecare',
          description: 'Montarea capei de vindecare pe implant pentru formarea corectă a gingiei înainte de lucrarea finală.',
          detailedDescription:
            'Capa de vindecare (healing abutment) este o piesă temporară care se atașează pe implant după integrarea acestuia în os. Rolul ei este să modeleze gingia și să creeze un contur natural al țesutului moale, astfel încât viitoarea coroană sau lucrare protetică să arate și să se simtă cât mai firesc.\n\nProcedura este, de obicei, scurtă și se realizează în condiții controlate. După aplicare, pacientul primește indicații de igienă (periaj blând în zona respectivă, duș bucal unde este recomandat) și poate avea o sensibilitate ușoară câteva zile. O vindecare corectă în această etapă contribuie semnificativ la estetică și la sănătatea pe termen lung a implantului.',
          price: '100 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Cimentare(per dinte)',
          description: 'Fixarea sigură a unei coroane/incrustații pe dinte, cu verificarea mușcăturii și a contactelor dintre dinți.',
          detailedDescription:
            'Cimentarea este etapa finală prin care o lucrare protetică (coroană, inlay/onlay, fațetă în anumite cazuri) este fixată pe dintele pregătit. Înainte de cimentare, medicul verifică adaptarea marginală, contactele proximale, nuanța (dacă este cazul) și ocluzia (mușcătura), pentru ca lucrarea să nu creeze presiuni sau disconfort.\n\nSe alege tipul de ciment în funcție de lucrare și de situația clinică (ciment definitiv sau adeziv). După fixare, excesul este îndepărtat cu atenție, iar pacientul primește recomandări privind alimentația imediat după procedură și despre igienizarea corectă în jurul lucrării. O cimentare corectă crește durata de viață a restaurării și reduce riscul de infiltrații.',
          price: '50 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Plasa metalica proteze',
          description: 'Întărire discretă a protezei prin plasă metalică, pentru mai multă rezistență și risc mai mic de fisuri.',
          detailedDescription:
            'Plasa metalică este o armătură integrată în baza unei proteze, folosită pentru a crește rezistența la solicitări și pentru a reduce riscul de fracturare, mai ales la protezele extinse sau la pacienții cu forțe mari de masticație. Aceasta se încorporează în acrilat în timpul realizării sau reparației protezei.\n\nRecomandarea se face în funcție de anatomia câmpului protetic, grosimea bazei și istoricul pacientului (ex: proteze care s-au fisurat anterior). Beneficiul principal este stabilitatea structurală pe termen lung, fără a compromite confortul. După montare, se verifică adaptarea și eventualele zone de presiune, pentru ca proteza să fie purtată fără iritații.',
          price: '500 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Proteza Kemeny',
          description: 'Soluție protetică mobilă care urmărește confort sporit și stabilitate mai bună la masticație, adaptată cazului.',
          detailedDescription:
            'Proteza de tip Kemeny este o variantă de proteză mobilă utilizată în anumite situații clinice, cu scopul de a îmbunătăți confortul, stabilitatea și funcția masticatorie. Indicația exactă se stabilește după consultație, în funcție de numărul dinților lipsă, forma crestelor alveolare și particularitățile mușcăturii.\n\nProcesul include evaluare, amprente, înregistrarea relațiilor dintre maxilare și probe succesive pentru a obține o estetică și o fonetică bune. La final, proteza este ajustată pentru a evita punctele de presiune, iar pacientul primește instrucțiuni clare de acomodare (primele zile pot include ușoare disconforturi), igienă și controale de reglaj. Adaptarea corectă este esențială pentru a preveni rănile și instabilitatea.',
          price: '400 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Proteza cu capse pe 4 implanturi',
          description: 'Proteza stabilizată pe 4 implanturi, pentru o fixare fermă și o masticație mult mai sigură decât la protezele clasice.',
          detailedDescription:
            'Proteza cu capse pe 4 implanturi (overdenture) este recomandată pacienților care își doresc o proteză mobilă, dar cu stabilitate superioară. Implanturile sunt inserate în os, iar proteza se atașează prin sisteme speciale de retenție (capse/atașamente), reducând semnificativ mișcarea protezei în timpul vorbirii și masticației.\n\nTratamentul include planificare, intervenția implantologică, perioada de integrare și realizarea protezei cu sistemele de prindere. Avantajele pot include confort crescut, încredere la vorbit și posibilitatea de a consuma mai multe tipuri de alimente. Întreținerea presupune igienă zilnică atentă și controale periodice; componentele de retenție se pot uza în timp și pot necesita înlocuire pentru menținerea stabilității.',
          price: '13000 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Proteza cu capse pe 2 implanturi',
          description: 'Variantă eficientă de stabilizare a protezei pe 2 implanturi, cu îmbunătățire clară a confortului față de proteza mobilă simplă.',
          detailedDescription:
            'Proteza cu capse pe 2 implanturi este o soluție frecvent aleasă pentru mandibulă, când pacientul are probleme cu instabilitatea protezei clasice. Cele două implanturi oferă puncte de sprijin, iar proteza se fixează prin atașamente care cresc retenția, reducând alunecarea și disconfortul.\n\nPlanul de tratament este personalizat: se evaluează osul disponibil, se aleg pozițiile implanturilor, apoi se realizează proteza cu sistemul de prindere compatibil. Pacientul poate observa o îmbunătățire a vorbirii și a masticației, dar este importantă igienizarea atentă în jurul implanturilor și a componentelor de retenție. La controale, medicul verifică uzura capselor și adaptarea bazei protezei, pentru a preveni iritațiile.',
          price: '9000 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Schimb teflon proteza capse',
          description: 'Înlocuire element teflon al sistemului de capse, pentru a reda fixarea fermă a protezei pe implanturi.',
          detailedDescription:
            'În timp, elementele de retenție ale protezelor pe capse (ex: componente din teflon/nylon) se pot uza, iar proteza devine mai „slabă” sau se mișcă. Schimbul de teflon este o procedură de întreținere prin care se înlocuiește componenta uzată, astfel încât proteza să se prindă din nou corect pe atașamente.\n\nProcedura poate include verificarea integrității implanturilor și a capselor, curățarea zonei și montajul piesei noi, cu reglaje fine pentru confort. Este o etapă normală de mentenanță, care prelungește durata de viață a lucrării și menține stabilitatea la masticație. După schimb, pacientul poate simți imediat o diferență de retenție; se recomandă controale regulate pentru a preveni uzura excesivă.',
          price: '200 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Proteza pe sisteme multiunit ( 4 implanturi ) dinti zirconiu',
          description: 'Lucrare fixă pe 4 implanturi cu dinți din zirconiu, pentru un zâmbet stabil, estetic și foarte rezistent.',
          detailedDescription:
            'Proteza fixă pe sisteme multiunit pe 4 implanturi este o soluție avansată pentru reabilitări totale, în care lucrarea se înșurubează pe implanturi prin intermediul bonturilor multiunit. Dinții din zirconiu oferă rezistență ridicată și un aspect natural, fiind potriviți pentru pacienții care își doresc o lucrare fixă, fără mobilitate.\n\nTratamentul include planificare, inserarea implanturilor, realizarea unei lucrări provizorii (în multe cazuri) și apoi lucrarea finală din zirconiu. Se urmărește o mușcătură echilibrată, igienizare facilă și confort la vorbit și masticație. Întreținerea presupune igienă zilnică cu periuțe interdentare/duș bucal (conform recomandării) și controale periodice pentru verificarea șuruburilor, a gingiei și a ocluziei.',
          price: '24000 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Coroana provizorie in cabinet',
          description: 'Coroană temporară realizată rapid, pentru protecția dintelui și estetică până la lucrarea definitivă.',
          detailedDescription:
            'Coroana provizorie realizată în cabinet protejează dintele șlefuit până la finalizarea coroanei definitive. Aceasta menține forma și contactele dintre dinți, reduce sensibilitatea și ajută la păstrarea poziției gingiei, aspect important pentru un rezultat estetic final.\n\nProcedura este de obicei într-o singură ședință: se pregătește dintele, se realizează coroana temporară din material provizoriu și se ajustează mușcătura. Pacientul primește recomandări să evite alimentele foarte lipicioase sau dure pe zona respectivă și să folosească ața dentară cu atenție (scoatere laterală, nu „smulgere”). O coroană provizorie bună face tranziția către lucrarea finală mult mai confortabilă.',
          price: '100 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Proteza pe sisteme multiunit (5 implanturi) dinti zirconiu',
          description: 'Reabilitare fixă pe 5 implanturi, cu structură stabilă și dinți din zirconiu pentru durabilitate maximă.',
          detailedDescription:
            'Această lucrare fixă se sprijină pe 5 implanturi și utilizează sisteme multiunit pentru prindere precisă. Comparativ cu variantele pe 4 implanturi, poate oferi o distribuție mai bună a forțelor, în funcție de anatomie și planul de tratament. Zirconiul este ales pentru rezistență și estetică.\n\nEtapele includ diagnostic complet, inserarea implanturilor, provizorat dacă este nevoie și realizarea lucrării finale. Se acordă atenție ocluziei, foneticii și susținerii țesuturilor moi, pentru un rezultat natural. Întreținerea implică igienă atentă zilnică, controale și igienizări profesionale pentru a menține sănătatea periimplantară.',
          price: '24500 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Adaugare dinte/croset pe proteza',
          description: 'Modificare și completare a protezei prin adăugare de dinte sau croșet, pentru funcție și stabilitate mai bună.',
          detailedDescription:
            'În anumite situații (ex: extracții ulterioare, modificări ale protezei, nevoie de retenție mai bună), proteza poate fi adaptată prin adăugarea unui dinte sau a unui croșet. Procedura urmărește refacerea esteticii și a funcției masticatorii, dar și îmbunătățirea stabilității în timpul purtării.\n\nMedicul evaluează proteza existentă, ia o amprentă/înregistrare și stabilește varianta optimă de completare. După adăugare, proteza este verificată pentru puncte de presiune și pentru contactele cu dinții antagonici. Este important ca pacientul să revină la control dacă apare disconfort, pentru ajustări fine.',
          price: '200 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Ablatie lucrare veche',
          description: 'Îndepărtarea controlată a unei lucrări vechi, pentru a evalua corect dintele și a pregăti o restaurare nouă.',
          detailedDescription:
            'Ablația unei lucrări vechi (coroană/punte) se face atunci când există infiltrații, carii sub lucrare, fracturi, disconfort sau când lucrarea nu mai este adaptată corect. Medicul îndepărtează restaurarea cu instrumente specifice, cu grijă pentru a proteja dintele și țesuturile.\n\nDupă îndepărtare, se evaluează starea dintelui: integritatea structurii, prezența cariilor, starea gingiei și, dacă este cazul, tratamente necesare înainte de noua lucrare (refacere pivot, tratament endodontic etc.). Ablația corectă oferă un diagnostic real și crește șansa unui rezultat protetic durabil.',
          price: '50 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Capsa proteza',
          description: 'Montarea sau înlocuirea unei capse de retenție, pentru prindere mai fermă și confort sporit la purtare.',
          detailedDescription:
            'Capsa unei proteze este un element care contribuie la retenția și stabilitatea lucrării, în special la protezele pe implanturi sau la anumite sisteme speciale. În timp, capsele se pot uza sau pot necesita ajustare/înlocuire pentru a reda fixarea corectă.\n\nProcedura poate include verificarea componentelor existente, alegerea piesei compatibile și montajul cu reglaje fine. Scopul este ca proteza să se fixeze sigur, dar fără forțare excesivă, protejând atât implanturile, cât și structurile de sprijin. După intervenție, pacientul este sfătuit privind igiena și semnele care indică necesitatea unui control (slăbire, joc, disconfort).',
          price: '1000 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Captusire proteza',
          description: 'Rebază/reamprentare a protezei pentru o adaptare mai bună pe gingie și reducerea zonelor dureroase.',
          detailedDescription:
            'Captușirea protezei (relining) este recomandată când proteza devine „largă” din cauza modificărilor gingiei și osului în timp. Prin adăugarea unui material de recondiționare pe interiorul protezei, se îmbunătățește contactul cu câmpul protetic, crescând stabilitatea și confortul.\n\nProcedura poate fi temporară (captușire moale) sau definitivă, în funcție de situație. După captușire, se verifică mușcătura și punctele de presiune. Pacientul primește indicații de igienă (materialele pot avea cerințe speciale) și despre acomodare. O captușire corectă poate preveni rănile și reduce nevoia de adezivi pentru proteze.',
          price: '250 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Proteza scheletata pe capse (pretul NU include contravaloarea capsei de 500 lei)',
          description: 'Proteza scheletată cu sisteme de capse, pentru rezistență și retenție, cu adaptare fină la dinții/resturile prezente.',
          detailedDescription:
            'Proteza scheletată este o proteză mobilă cu structură metalică internă, concepută pentru rezistență și pentru distribuirea mai bună a forțelor. Varianta „pe capse” folosește atașamente speciale care cresc retenția și pot oferi un aspect mai estetic decât croșetele clasice, în funcție de caz.\n\nTratamentul include evaluarea dinților de sprijin, pregătiri protetice dacă sunt necesare, amprente, probe și adaptare finală. Se urmărește stabilitate la masticație, confort la vorbire și o igienizare posibilă în jurul elementelor de susținere. Prețul menționat nu include contravaloarea capsei, iar pacientul este informat clar despre componentele separate și despre întreținerea lor periodică.',
          price: '2000 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Cimentare provizorie(per dinte)',
          description: 'Fixare temporară a lucrării, utilă când este nevoie de testare, ajustări sau planificare pentru cimentare definitivă.',
          detailedDescription:
            'Cimentarea provizorie se utilizează când medicul dorește o perioadă de „test” înainte de fixarea definitivă: de exemplu, pentru a verifica confortul, mușcătura, adaptarea gingivală sau reacția pacientului la o lucrare nouă. Cimentul provizoriu permite îndepărtarea controlată a lucrării, fără a deteriora dintele.\n\nÎn timpul procedurii se verifică adaptarea și ocluzia, apoi se fixează lucrarea cu un ciment temporar. Pacientul primește recomandări privind alimentația și igiena, precum și semnele care indică necesitatea revenirii (mobilitate, disconfort, sensibilitate). Este o etapă utilă în cazuri complexe sau când se planifică intervenții ulterioare.',
          price: '30 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Proteza elastica',
          description: 'Proteza flexibilă pentru confort sporit și aspect discret, potrivită în anumite situații clinice.',
          detailedDescription:
            'Proteza elastică (flexibilă) este realizată din materiale speciale, mai maleabile decât acrilatul clasic, oferind un confort mai bun pentru unii pacienți și un aspect mai discret (elementele de retenție pot fi mai puțin vizibile). Este o opțiune utilă în cazuri selectate, în funcție de numărul dinților lipsă și de anatomia gingiei.\n\nProcesul include consult, amprentare/scanare și adaptarea finală. Medicul explică avantajele și limitele: deși poate fi confortabilă și estetică, întreținerea trebuie făcută corect, iar în unele situații nu oferă aceeași posibilitate de reparație sau ajustare ca protezele convenționale. Se recomandă controale periodice pentru verificarea stabilității și a igienei.',
          price: '2000 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Captusire molosil',
          description: 'Captușire moale cu material tip molosil, pentru reducerea iritațiilor și acomodare mai ușoară cu proteza.',
          detailedDescription:
            'Captușirea cu molosil este o rebazare cu material moale, indicată când pacientul are zone sensibile, gingie iritată sau când este nevoie de o perioadă de acomodare mai blândă. Materialul moale amortizează presiunile și poate reduce disconfortul în timpul purtării.\n\nProcedura constă în aplicarea materialului pe interiorul protezei și adaptarea lui pe câmpul protetic. Se verifică mușcătura și zonele de presiune, apoi pacientul primește indicații de igienă (materialele moi necesită curățare atentă și pot avea restricții la anumite soluții). Este, de regulă, o soluție temporară sau de etapă, până la o captușire definitivă sau o reechilibrare protetică.',
          price: '150 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Coroana zirconiu pe implant',
          description: 'Coroană din zirconiu pe implant, pentru estetică naturală și rezistență, adaptată perfect pe bontul protetic.',
          detailedDescription:
            'Coroana din zirconiu pe implant este o restaurare fixă ce înlocuiește un dinte lipsă, fiind susținută de implant printr-un bont protetic. Zirconiul este apreciat pentru rezistență și pentru aspectul apropiat de dintele natural, fiind o alegere frecventă atât în zone laterale, cât și în zone vizibile, în funcție de caz.\n\nEtapele includ amprentare/scanare pe implant, alegerea nuanței, probă (dacă este necesar) și fixarea finală (înșurubată sau cimentată, în funcție de caz). Se urmărește contur gingival armonios, contact corect cu dinții vecini și o mușcătură echilibrată. Îngrijirea presupune igienă atentă în jurul coroanei și controale periodice pentru a menține sănătatea țesuturilor periimplantare.',
          price: '390 EUR*',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Reconstructie corono - radiculara metalica',
          description: 'Refacere internă cu pivot metalic turnat, folosită când dintele este foarte distrus și are nevoie de suport solid.',
          detailedDescription:
            'Reconstrucția corono-radiculară metalică (pivot turnat) este indicată atunci când un dinte tratat endodontic a pierdut mult din țesutul coronar și nu mai poate susține singur o coroană. Pivotul se realizează după forma canalului, oferind o ancorare stabilă și o bază pentru reconstrucția coroanei clinice.\n\nProcedura include evaluarea tratamentului de canal, pregătirea canalului pentru pivot, amprentare și realizarea piesei în laborator, urmată de fixare și reconstrucție. Ulterior, de obicei se aplică o coroană protetică pentru protecție. Medicul urmărește etanșeitatea, adaptarea și distribuirea corectă a forțelor, pentru a reduce riscul de fractură.',
          price: '200 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Wax-up',
          description: 'Simulare estetică și funcțională a viitorului zâmbet, înainte de tratament, pentru a vedea forma finală a dinților.',
          detailedDescription:
            'Wax-up-ul este o etapă de planificare protetică/estetică prin care se modelează, pe un model al arcadelor, forma viitoare a dinților. Practic, este o „previzualizare” a rezultatului: proporții, lungimi, contururi, închidere de spații și ghidaj ocluzal.\n\nEste util în reabilitări extinse, fațete, coroane multiple sau cazuri în care se schimbă semnificativ estetica. Pe baza wax-up-ului se pot realiza ghiduri de preparare și mock-up (test direct în gură), astfel încât pacientul să poată evalua aspectul înainte de etapa definitivă. Această planificare reduce surprizele și crește precizia rezultatului final.',
          price: '100 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Fatete dentare',
          description: 'Fațete ceramice pentru corecții fine de formă și culoare, cu un rezultat natural și elegant.',
          detailedDescription:
            'Fațetele dentare sunt foițe subțiri, de obicei ceramice, care se aplică pe fața vizibilă a dinților pentru a îmbunătăți estetica: culoare, formă, mici spații între dinți, margini ciobite sau uzură. Indicația se stabilește după evaluarea mușcăturii, a smalțului disponibil și a obiceiurilor (ex: bruxism).\n\nProcesul include planificare (adesea wax-up/mock-up), pregătire minimă a dintelui atunci când este necesar, amprentare/scanare și cimentare adezivă. Se urmărește transparența și nuanța potrivită, plus margini fine care respectă gingia. Îngrijirea implică igienă riguroasă, evitarea folosirii dinților ca „unelte” și, la nevoie, gutieră de protecție pe timpul nopții.',
          price: '2000 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Coroana Emax (ceramică presată)',
          description: 'Coroană integral ceramică Emax, ideală pentru estetică superioară în zona vizibilă a zâmbetului.',
          detailedDescription:
            'Coroana Emax este realizată din ceramică presată (disilicat de litiu), material recunoscut pentru estetica excelentă: translucență, reflexii naturale și integrare cromatică foarte bună. Este recomandată frecvent pentru dinții frontali și premolari, unde aspectul este prioritar.\n\nEtapele includ pregătirea dintelui, amprentare/scanare, alegerea nuanței și cimentarea adezivă. În funcție de caz, se poate realiza o coroană provizorie până la finalizarea lucrării. Medicul verifică adaptarea marginală, contactele și mușcătura, pentru a obține confort și rezistență. Cu igienă corectă și controale periodice, coroana Emax poate avea o durată de viață foarte bună.',
          price: '1700 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Coroana integral zirconiu',
          description: 'Coroană din zirconiu monolitic, foarte rezistentă, potrivită pentru zone cu forțe mari de masticație.',
          detailedDescription:
            'Coroana integral zirconiu (monolitică) este aleasă pentru rezistența ridicată și stabilitatea în timp, fiind recomandată mai ales pe dinții laterali sau în situații cu forțe masticatorii crescute. Zirconiul modern poate fi și estetic, iar nuanța se adaptează pacientului, însă principalul avantaj rămâne durabilitatea.\n\nProcedura include pregătirea dintelui, amprentare/scanare, probă dacă este necesar și fixarea finală. Se acordă atenție ocluziei pentru a preveni suprasolicitarea și pentru a proteja dinții antagonici. Pacientul este sfătuit privind igienă corectă și importanța controalelor, mai ales dacă există bruxism sau lucrări multiple.',
          price: '1500 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Coroana metalo-ceramica',
          description: 'Refacerea formei și funcției dintelui afectat.',
          detailedDescription:
            'Coroana metalo-ceramică combină un suport intern metalic cu un strat exterior ceramic, oferind rezistență și funcționalitate bună. Este o opțiune utilizată de mult timp în protetică, potrivită pentru multe situații clinice, inclusiv punți dentare.\n\nEtapele includ prepararea dintelui, amprentare/scanare, realizarea unei coroane provizorii (dacă este necesar) și cimentarea finală. Se urmărește adaptarea marginală, contactele și mușcătura. În zona frontală, estetica poate fi limitată de prezența metalului (în special la retracții gingivale), motiv pentru care medicul va recomanda materialul optim în funcție de poziție și cerințe estetice.',
          price: '900 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Reconstructie cu pivot fibra de sticla',
          description: 'Consolidarea unui dinte tratat de canal cu pivot din fibră de sticlă, pentru o bază sigură înainte de coroană.',
          detailedDescription:
            'Pivotul din fibră de sticlă este utilizat pentru întărirea dinților care au trecut prin tratament endodontic și au pierdut mult țesut coronar. Avantajul principal este elasticitatea mai apropiată de cea a dentinei, ceea ce poate ajuta la distribuirea mai uniformă a forțelor și la un rezultat estetic bun (fără colorare metalică).\n\nProcedura include pregătirea canalului, cimentarea pivotului cu materiale adezive și reconstrucția coronară din compozit, creând un „stâlp” stabil pentru viitoarea coroană. Medicul verifică mușcătura și oferă recomandări pentru protecție, mai ales dacă pacientul scrâșnește dinții. De cele mai multe ori, reconstrucția este urmată de o coroană pentru protecție pe termen lung.',
          price: '350 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Reparatie proteza',
          description: 'Reparație rapidă a protezei fisurate sau rupte, cu refacerea adaptării și a confortului la purtare.',
          detailedDescription:
            'Reparația protezei este necesară în caz de fisuri, fracturi, dinți detașați sau deformări care afectează funcția și confortul. Medicul evaluează cauza (cădere, uzură, mușcătură neechilibrată, câmp protetic modificat) pentru a reduce riscul repetării.\n\nReparația poate include lipire/întărire, înlocuire de dinte, refacere de margini sau ajustări ale bazei. După reparație, proteza este probată și se verifică mușcătura și punctele de presiune. Pacientul primește recomandări de manipulare (evitarea căderilor, curățare corectă) și se poate recomanda captușire sau refacere dacă proteza nu mai este adaptată.',
          price: '300 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Reconstructie corono - radiculara zirconiu',
          description: 'Refacere protetică cu pivot/structură din zirconiu pentru stabilitate și estetică, în funcție de indicație.',
          detailedDescription:
            'Reconstrucția corono-radiculară din zirconiu este o opțiune utilizată în anumite cazuri pentru a crea un suport intern fără metal, cu avantaj estetic (în special când urmează o coroană integral ceramică). Se indică după evaluarea dintelui, a tratamentului endodontic și a cantității de țesut restant.\n\nProcedura presupune pregătirea canalului, amprentare/scanare și realizarea piesei în laborator, urmată de fixare și reconstrucție coronară. Se urmărește adaptarea precisă, etanșeitatea și compatibilitatea cu lucrarea finală. Medicul va explica când este potrivită această opțiune și cum se întreține lucrarea, pentru rezultate stabile pe termen lung.',
          price: '400 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Coroana provizorie in laborator (PMMA)',
          description: 'Coroană temporară PMMA realizată în laborator, cu precizie și estetică mai bună pentru perioade mai lungi de provizorat.',
          detailedDescription:
            'Coroana provizorie din PMMA (polimetilmetacrilat) realizată în laborator este recomandată când este nevoie de un provizorat mai rezistent și mai estetic, de exemplu în reabilitări extinse sau atunci când lucrarea finală necesită timp. Față de provizoriile rapide, aceasta poate avea o adaptare și un finisaj superior.\n\nEtapele includ amprentare/scanare, realizarea coroanei în laborator și cimentare provizorie sau definitivă, în funcție de plan. Rolul ei este să protejeze dintele, să mențină gingia într-o formă corectă și să ofere confort la masticație și vorbire. Pacientul primește recomandări de igienă și de alimentație pentru a evita deteriorarea provizoriului.',
          price: '300 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Coroana metalica',
          description: 'Coroană metalică foarte rezistentă, folosită mai ales în zonele posterioare unde primează durabilitatea.',
          detailedDescription:
            'Coroana metalică este o restaurare clasică, extrem de rezistentă, indicată frecvent pe dinții laterali sau în situații în care spațiul este limitat și este nevoie de o lucrare robustă. Avantajul major este durabilitatea, iar pregătirea dintelui poate fi, în unele cazuri, mai conservatoare decât la alte tipuri de coroane.\n\nProcedura include preparare, amprentare/scanare și cimentare. Fiind o lucrare metalică, estetica nu este prioritară, de aceea se recomandă în general pe zone nevizibile. Medicul verifică mușcătura și contactele, iar pacientul primește indicații de igienă și controale periodice, la fel ca pentru orice restaurare protetică.',
          price: '350 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Proteza pe sisteme multiunit (6 implanturi), dinti zirconiu',
          description: 'Reabilitare fixă premium pe 6 implanturi cu dinți din zirconiu, pentru stabilitate maximă și confort în masticație.',
          detailedDescription:
            'Lucrarea fixă pe 6 implanturi cu sisteme multiunit este o opțiune de top pentru edentații totale, oferind distribuție excelentă a forțelor și stabilitate crescută. Dinții din zirconiu contribuie la o estetică naturală și la rezistență pe termen lung, iar prinderea pe multiunit permite o adaptare protetică precisă.\n\nPlanul include diagnostic complet, inserarea implanturilor, provizorat (în funcție de caz) și lucrare finală. Se acordă atenție ocluziei, foneticii și susținerii țesuturilor moi, pentru un rezultat natural. Întreținerea presupune igienă atentă zilnică, controale periodice și igienizări profesionale pentru a menține sănătatea periimplantară.',
          price: '25000 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Coroana semifizionomica metalo-ceramica',
          description: 'Coroană metalo-ceramică cu estetică îmbunătățită în zona vizibilă, păstrând rezistența unei structuri metalice.',
          detailedDescription:
            'Coroana semifizionomică metalo-ceramică este o variantă în care porțiunea vizibilă primește un strat ceramic estetic, iar structura metalică oferă rezistență. Este utilă în anumite situații clinice, mai ales când se urmărește un echilibru între cost, durabilitate și aspect.\n\nProcedura include preparare, amprentare/scanare, probă și cimentare. Medicul urmărește o adaptare bună a marginii și o integrare estetică cât mai naturală, în funcție de poziția dintelui și de linia zâmbetului. Îngrijirea implică igienă corectă la marginea gingivală și controale pentru prevenirea infiltrațiilor sau a inflamațiilor.',
          price: '600 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Proteza pe sisteme multiunit ( 4 implanturi) dinti acrilat',
          description: 'Lucrare fixă pe 4 implanturi cu componentă acrilată, ușor de întreținut și de ajustat în timp, în funcție de uzură.',
          detailedDescription:
            'Proteza fixă pe 4 implanturi cu dinți acrilați este o soluție utilizată frecvent în reabilitări totale, mai ales ca variantă accesibilă sau ca etapă de tranziție către materiale premium. Sistemele multiunit permit o prindere stabilă, iar componenta acrilată poate fi avantajoasă prin greutate și ușurința reparațiilor.\n\nTratamentul include planificare, inserare implanturi, realizare lucrare provizorie (în funcție de caz) și lucrare finală. Se urmărește o mușcătură echilibrată și o estetică plăcută, cu adaptare bună pe gingie. Igiena zilnică și controalele periodice sunt importante pentru prevenirea inflamațiilor în jurul implanturilor și pentru verificarea uzurii dinților acrilați.',
          price: '16000 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Proteza mobila acrilica',
          description: 'Proteza mobilă clasică din acrilat, realizată personalizat pentru funcție, estetică și acomodare cât mai ușoară.',
          detailedDescription:
            'Proteza mobilă acrilică este o soluție pentru înlocuirea dinților lipsă, realizată din rășină acrilică și adaptată pe forma gingiei. Este indicată când nu există suficiente elemente de sprijin sau când pacientul preferă o variantă mobilă. Scopul este refacerea masticației, a vorbirii și a esteticii faciale.\n\nProcesul include amprente, probe și ajustări succesive pentru o adaptare bună. În primele zile pot apărea zone sensibile; controalele de ajustare sunt esențiale pentru confort. Pacientul primește instrucțiuni despre igienizare (periuță specială, soluții potrivite), despre purtare și despre depozitare. În timp, poate fi necesară captușire sau refacere, deoarece câmpul protetic se modifică natural.',
          price: '1500 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Proteza pe sisteme multiunit ( 5 implanturi ) dinti acrilat',
          description: 'Reabilitare fixă pe 5 implanturi cu dinți acrilați, pentru stabilitate crescută și distribuție mai bună a forțelor.',
          detailedDescription:
            'Această lucrare fixă se sprijină pe 5 implanturi și utilizează sisteme multiunit pentru prindere precisă. Comparativ cu variantele pe 4 implanturi, poate oferi o distribuție mai bună a forțelor, în funcție de anatomie și planul de tratament. Dinții acrilați sunt utilizați pentru un raport bun între cost, confort și posibilitatea de reparație.\n\nEtapele includ planificare, chirurgie implantologică, provizorat dacă este nevoie și realizarea lucrării finale. Se urmărește o mușcătură echilibrată și o estetică plăcută, cu adaptare bună pe țesuturile moi. Întreținerea implică igienă atentă zilnică și controale periodice pentru verificarea uzurii, a șuruburilor și a sănătății gingiei.',
          price: '17000 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Proteza pe sisteme multiunit ( 4 implanturi ) dinti acrilat',
          description: 'Lucrare fixă pe 4 implanturi cu componentă acrilată, ușor de întreținut și de ajustat în timp, în funcție de uzură.',
          detailedDescription:
            'Varianta cu dinți acrilați pe 4 implanturi este preferată atunci când se dorește o lucrare fixă stabilă, dar cu posibilitatea unor ajustări mai simple pe parcurs (ex: înlocuire dinți uzați, reparații). Prinderea pe multiunit facilitează adaptarea protetică și asigură o fixare sigură.\n\nSe realizează după un plan personalizat, care poate include provizorat și o etapă de „test” a mușcăturii înainte de lucrarea finală. Dinții acrilați pot necesita întreținere periodică în funcție de obiceiurile alimentare și de bruxism. Controalele sunt importante pentru a verifica ocluzia, integritatea șuruburilor și sănătatea țesuturilor periimplantare.',
          price: '18000 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Proteza cu capse pe 3 implanturi',
          description: 'Proteza mobilă cu retenție pe 3 implanturi, pentru un plus de stabilitate și echilibru față de prinderile pe 2 implanturi.',
          detailedDescription:
            'Proteza cu capse pe 3 implanturi este o soluție intermediară care poate oferi stabilitate și echilibru mai bun decât variantele pe 2 implanturi, în funcție de anatomie și de distribuția implanturilor. Atașamentele de tip capse cresc retenția, reduc alunecarea și îmbunătățesc confortul la vorbit și mâncat.\n\nTratamentul presupune planificare, inserare implanturi, integrare și realizarea protezei compatibile cu sistemul de retenție. Ca orice lucrare pe implanturi, necesită igienă atentă și controale periodice; elementele de retenție se pot uza în timp și pot necesita înlocuire pentru a menține prinderea. Pacientul primește instrucțiuni clare de curățare și de manipulare corectă a protezei.',
          price: '11000 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Coroana pe implant dentar - metalo-ceramica',
          description: 'Coroană pe implant cu structură metalică și acoperire ceramică, o opțiune solidă pentru funcție și cost eficient.',
          detailedDescription:
            'Coroana metalo-ceramică pe implant este o restaurare fixă susținută de implant, în care partea internă are un suport metalic iar exteriorul este ceramic. Este aleasă atunci când se urmărește o soluție rezistentă și accesibilă, în special în zone laterale sau în situații în care estetica maximă nu este prioritatea principală.\n\nEtapele includ amprentare/scanare pe implant, alegerea nuanței, verificarea contactelor și fixarea finală (înșurubare sau cimentare, în funcție de caz). Medicul urmărește să existe spațiu de igienizare și o mușcătură corectă, pentru a preveni suprasolicitarea implantului. Îngrijirea corectă și controalele periodice ajută la menținerea sănătății țesuturilor periimplantare.',
          price: '350 EUR*',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Proteza pe sisteme multiunit ( 6 implanturi) dinti acrilat',
          description: 'Lucrare fixă pe 6 implanturi cu dinți acrilați, pentru stabilitate ridicată și posibilitate bună de mentenanță.',
          detailedDescription:
            'Proteza fixă pe 6 implanturi cu dinți acrilați oferă o stabilitate foarte bună și o distribuție eficientă a forțelor, fiind o soluție robustă pentru reabilitări totale. Componenta acrilată poate fi avantajoasă când se dorește o lucrare mai ușoară și cu opțiuni mai simple de reparație sau înlocuire a dinților în timp.\n\nPlanul include diagnostic complet, inserarea implanturilor, provizorat dacă este necesar și realizarea lucrării finale pe multiunit. Se ajustează ocluzia pentru a proteja implanturile și dinții antagonici. Întreținerea implică igienă atentă zilnică și controale periodice pentru verificarea uzurii, a șuruburilor și a sănătății gingiei.',
          price: '18000 RON',
          duration: 'Variază',
          popular: false
        }
      ]
    },
    {
      category: 'Terapie Dentară',
      color: 'from-lime-500 to-green-500',
      icon: <Circle className="w-6 h-6" />,
      services: [
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Obturatie coronara posterioara',
          description: 'Plombă din compozit pentru măsele, refăcând forma de masticație și eliminând caria în mod conservator.',
          detailedDescription:
            'Obturatia coronară posterioară este o restaurare directă din compozit, recomandată pentru tratarea cariilor sau a micilor fracturi la dinții laterali. Scopul este îndepărtarea țesutului afectat și refacerea anatomiei de masticație, astfel încât dintele să funcționeze corect și să nu mai existe sensibilitate sau retenții alimentare.\n\nProcedura include curățarea cariei, izolarea zonei, aplicarea materialelor adezive și reconstruirea stratificată a obturației. La final se ajustează mușcătura și se finisează lucrarea pentru confort și durabilitate. O obturație corect realizată ajută la prevenirea recidivei cariei și la protejarea dintelui pe termen lung.',
          price: '350 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Fatetare directa in cabinet rasina compozit',
          description: 'Fațetare directă din compozit pentru îmbunătățirea rapidă a aspectului (formă, mici spații, ciobituri).',
          detailedDescription:
            'Fațetarea directă cu rășină compozită este o procedură estetică minim-invazivă realizată în cabinet, prin care se remodelează fața vizibilă a dintelui. Este indicată pentru corecții de formă, lungime, mici diasteme, margini ciobite sau imperfecțiuni de culoare, atunci când cazul permite o soluție conservatoare.\n\nTratamentul presupune evaluare estetică, pregătire minimă (unde este necesar), aplicarea compozitului în straturi și modelarea lui pentru un rezultat natural. Se finalizează cu finisare și lustruire, pentru luciu și suprafață netedă. Avantajele includ rezultat imediat și posibilitatea de retuș în timp, cu respectarea igienei și a controalelor periodice.',
          price: '500 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Obturatie coronara frontala compozit',
          description: 'Refacere estetică a unui dinte frontal cu compozit, adaptată nuanței și transparenței naturale.',
          detailedDescription:
            'Obturația coronară frontală din compozit este o restaurare realizată pentru dinții vizibili, unde estetica este esențială. Se indică în carii frontale, fracturi mici, zone abrazate sau când există defecte localizate care pot fi tratate conservator fără coroană.\n\nProcedura include îndepărtarea țesutului afectat, selecția nuanței potrivite, aplicarea adezivului și reconstrucția stratificată (pentru a reproduce opacitatea și transluciditatea dintelui). Se ajustează forma, marginile și contactele, apoi se realizează finisarea și lustruirea pentru un aspect natural în lumină. Rezultatul urmărește integrarea vizuală și funcțională în zâmbet.',
          price: '370 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Tratament desensibilizant (per dinte)',
          description: 'Aplicare locală pentru diminuarea sensibilității la rece, dulce sau atingere, cu efect de protecție a dentinei.',
          detailedDescription:
            'Tratamentul desensibilizant per dinte este indicat atunci când pacientul resimte durere scurtă și ascuțită la stimuli precum rece, dulce, aer sau periaj. Cauzele pot include retracții gingivale, abraziuni, eroziuni acide sau sensibilitate după anumite proceduri dentare.\n\nÎn cabinet se aplică substanțe desensibilizante care sigilează tubulii dentinari și reduc transmiterea stimulilor către nerv. Procedura este rapidă, nedureroasă și se poate repeta în funcție de răspuns. Medicul poate recomanda și măsuri complementare: pastă pentru dinți sensibili, periuță cu peri moi și evitarea alimentelor foarte acide. Scopul este confort imediat și protecție pe termen mediu.',
          price: '50 RON',
          duration: 'Variază',
          popular: false
        },
      ]
    },
  ];

  const benefits = [
    { icon: <Users className="w-5 h-5" />, text: 'Echipă specializată' },
    { icon: <Clock className="w-5 h-5" />, text: 'Program flexibil' },
    { icon: <Award className="w-5 h-5" />, text: 'Tehnologie modernă' },
  ];

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-gray-50 to-white relative z-0">
      {/* Compact Hero - Mobile Optimized */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white py-8 sm:py-12 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
        
        <div className="container mx-auto px-3 sm:px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              <Sparkles className="w-4 h-4" />
              Servicii complete
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-2 sm:mb-3">
              Serviciile noastre
            </h1>
            <p className="text-sm sm:text-base text-white/90 max-w-md mx-auto mb-4 sm:mb-6 leading-relaxed">
              Îngrijire dentară completă pentru întreaga familie
            </p>
            
            {/* Benefits Pills */}
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-xs"
                >
                  {benefit.icon}
                  <span>{benefit.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Carousels - Mobile First */}
      <section className="py-6 sm:py-8 md:py-12 bg-gray-50">
        <div className="space-y-8 sm:space-y-12">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-4">
              {/* Category Header */}
              <div className="container mx-auto px-3 sm:px-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color} text-white`}>
                    {category.icon}
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-heading font-bold text-gray-900">
                      {category.category}
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-600">
                      {category.services.length} servicii disponibile
                    </p>
                  </div>
                </div>
              </div>

              {/* Swipeable Carousel for Mobile */}
              <div className="md:hidden px-3">
                <SwipeableCarousel cardWidth={280} gap={12}>
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-white rounded-xl p-4 shadow-md border border-gray-100 h-full flex flex-col"
                      >
                        <div className="flex-grow">
                          {service.popular && (
                            <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold mb-3">
                              <Star className="w-3 h-3 fill-current" />
                              Popular
                            </div>
                          )}

                          <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${category.color} text-white mb-3`}>
                            {service.icon}
                          </div>

                          <h3 className="text-base font-bold text-gray-900 mb-2 line-clamp-1">
                            {formatTitle(service.title)}
                          </h3>

                          <p className="text-xs text-gray-600 mb-3 line-clamp-2 leading-relaxed">
                            {service.description}
                          </p>
                        </div>

                        <div className="flex items-center justify-between text-xs mb-2">
                          <span className="text-gray-500">Preț</span>
                          <span className="font-bold text-primary-600">
                            {service.price}
                          </span>
                        </div>

                        <button
                          onClick={() => openServiceModal(service)}
                          className="w-full flex items-center justify-center gap-1 px-3 py-2 bg-primary-50 text-primary-600 rounded-lg font-semibold text-xs hover:bg-primary-100 transition-colors mt-auto"
                        >
                          Detalii
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </motion.div>
                    </div>
                  ))}
                </SwipeableCarousel>
              </div>

              {/* Grid for Tablet/Desktop */}
              <div className="hidden md:block container mx-auto px-4">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={serviceIndex}
                      whileHover={{ y: -4 }}
                      className="bg-white rounded-xl p-5 shadow-md border border-gray-100 hover:shadow-xl transition-all flex flex-col"
                    >
                      <div className="flex-grow">
                        {service.popular && (
                          <div className="inline-flex items-center gap-1 px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold mb-3">
                            <Star className="w-3 h-3 fill-current" />
                            Popular
                          </div>
                        )}

                        <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${category.color} text-white mb-4`}>
                          {service.icon}
                        </div>

                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {formatTitle(service.title)}
                        </h3>

                        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-between text-sm mb-3">
                        <span className="text-gray-500">Preț</span>
                        <span className="font-bold text-primary-600">
                          {service.price}
                        </span>
                      </div>

                      <button
                        onClick={() => openServiceModal(service)}
                        className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-primary-50 text-primary-600 rounded-lg font-semibold text-sm hover:bg-primary-100 transition-colors mt-auto"
                      >
                        Detalii
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EUR Disclaimer */}
      <section className="section bg-gray-50 py-6 sm:py-8">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-sm sm:text-base text-gray-600">
              *Prețurile afișate în EUR se achită în RON, la cursul BNR din ziua plății.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Compact */}
      <section className="py-8 sm:py-12 bg-gradient-to-br from-primary-50 to-blue-50">
        <div className="container mx-auto px-3 sm:px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-center text-gray-900 mb-6 sm:mb-8">
            De ce să ne alegi?
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
            {[
              { icon: <Award className="w-6 h-6 sm:w-8 sm:h-8" />, title: '15+ Ani', subtitle: 'Experiență' },
              { icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />, title: '1000+', subtitle: 'Pacienți' },
              { icon: <Star className="w-6 h-6 sm:w-8 sm:h-8" />, title: '5.0', subtitle: 'Rating' },
              { icon: <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8" />, title: '100%', subtitle: 'Satisfacție' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-4 sm:p-6 text-center shadow-md"
              >
                <div className="inline-flex p-2 sm:p-3 rounded-lg bg-primary-100 text-primary-600 mb-2 sm:mb-3">
                  {stat.icon}
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                  {stat.title}
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  {stat.subtitle}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Mobile Optimized */}
      <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-br from-primary-500 to-primary-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />
        
        <div className="container mx-auto px-3 sm:px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              <Phone className="w-4 h-4" />
              Programare rapidă
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-3 sm:mb-4">
              Programează-te astăzi
            </h2>

            <p className="text-sm sm:text-base text-white/90 mb-6 sm:mb-8 max-w-md mx-auto leading-relaxed">
              Programează o consultație și discutăm despre nevoile dumneavoastră.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-primary-600 rounded-xl font-semibold text-sm sm:text-base hover:shadow-2xl transition-all hover:-translate-y-1"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                Detalii de contact
              </a>

              <a
                href="tel:+40726530591"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-xl font-semibold text-sm sm:text-base hover:bg-white/20 transition-all"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                Sună acum
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Modal */}
      <ServiceModal
        isOpen={isModalOpen}
        onClose={closeServiceModal}
        service={selectedService}
      />
    </div>
  );
}

export default Services;
