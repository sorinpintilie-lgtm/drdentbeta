import { motion } from 'framer-motion';
import {
  Smile, Sparkles, Shield, Gem, Circle, Crown, Bone,
  Phone, Star, Award, Zap, Heart, CheckCircle, ArrowRight, Clock, Users
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
      category: 'Chirurgie Orală',
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
          description: 'Sigilarea canalului radicular după tratamentul endodontic.',
          detailedDescription: 'Procedură prin care canalele radiculare sunt sigilate după curățare și dezinfectare. Scopul este prevenirea reinfectării și menținerea dintelui funcțional.',
          price: '300 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Reconstituire cu pivot fibra de sticla',
          description: 'Consolidarea dintelui după tratamentul endodontic.',
          detailedDescription: 'Consolidarea dintelui după tratamentul de canal pentru stabilitate și rezistență.',
          price: '350 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Tratament devitalizant',
          description: 'Eliminarea nervului dentar pentru calmarea durerii.',
          detailedDescription: 'Procedură utilizată pentru calmarea durerii acute prin îndepărtarea nervului dentar afectat.',
          price: '100 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Retratament endodontic pluriradicular 3 canale',
          description: 'Refacerea tratamentului de canal anterior, eșuat.',
          detailedDescription: 'Refacerea unui tratament de canal anterior care nu a avut succes. Permite salvarea dintelui și eliminarea infecției persistente.',
          price: '500 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Retratament endodontic pluriradicular 2 canale',
          description: 'Refacerea tratamentului de canal anterior, eșuat.',
          detailedDescription: 'Refacerea unui tratament de canal anterior care nu a avut succes. Permite salvarea dintelui și eliminarea infecției persistente.',
          price: '450 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Retratament endodontic dinte monoradicular',
          description: 'Refacerea tratamentului de canal anterior, eșuat.',
          detailedDescription: 'Refacerea unui tratament de canal anterior care nu a avut succes. Permite salvarea dintelui și eliminarea infecției persistente.',
          price: '400 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Tratament endodontic pluriradicular 3 canale ( fără obturație )',
          description: 'Curățarea și modelarea canalelor multiple, fără sigilare finală.',
          detailedDescription: 'Etapă inițială a tratamentului de canal, care presupune curățarea și modelarea canalelor. Obturarea finală se realizează ulterior.',
          price: '350 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Tratament endodontic pluriradicular 2 canale ( fără obturație )',
          description: 'Curățarea și modelarea canalelor multiple, fără sigilare finală.',
          detailedDescription: 'Etapă inițială a tratamentului de canal, care presupune curățarea și modelarea canalelor. Obturarea finală se realizează ulterior.',
          price: '300 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Tratament endodontic dinte monoradicular ( fără obturație )',
          description: 'Curățarea și dezinfectarea canalului unui dinte cu o singură rădăcină.',
          detailedDescription: 'Etapă inițială a tratamentului de canal, care presupune curățarea și modelarea canalelor. Obturarea finală se realizează ulterior.',
          price: '250 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Tratament de urgență (pansament calmant/drenaj/tratament pericoronită etc)',
          description: 'Intervenție rapidă pentru calmarea durerii acute sau drenaj.',
          detailedDescription: 'Intervenție rapidă pentru calmarea durerii, drenaj sau controlul infecțiilor acute.',
          price: '150 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Refacere perete in vederea tratamentului endodontic',
          description: 'Reconstrucția dintelui pentru continuarea tratamentului de canal.',
          detailedDescription: 'Reconstrucția dintelui pentru a permite continuarea corectă a tratamentului endodontic.',
          price: '200 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Indepartare pivot/dentatus',
          description: 'Eliminarea elementelor protetice din canal.',
          detailedDescription: 'Eliminarea elementelor protetice vechi pentru acces complet la canalul radicular.',
          price: '200 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Obturatie de canal monoradicular/un canal',
          description: 'Sigilarea canalului unui dinte cu o singură rădăcină.',
          detailedDescription: 'Procedură prin care canalele radiculare sunt sigilate după curățare și dezinfectare. Scopul este prevenirea reinfectării și menținerea dintelui funcțional.',
          price: '200 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Obturatie de canal biradicular 2 canale',
          description: 'Sigilarea a două canale pentru prevenirea reinfectării.',
          detailedDescription: 'Procedură prin care canalele radiculare sunt sigilate după curățare și dezinfectare. Scopul este prevenirea reinfectării și menținerea dintelui funcțional.',
          price: '250 RON',
          duration: 'Variază',
          popular: false
        },
      ]
    },
    {
      category: 'Estetică Dentară',
      color: 'from-pink-500 to-rose-500',
      icon: <Gem className="w-6 h-6" />,
      services: [
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Aplicare bijuterie dentara',
          description: 'Procedură estetică non-invazivă.',
          detailedDescription: 'Procedură estetică non-invazivă, fără afectarea structurii dentare.',
          price: '250 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Albire dentara acasa (gutiere incluse)',
          description: 'Albire cu gutiere personalizate pentru uz la domiciliu.',
          detailedDescription: 'Procedură profesională pentru deschiderea nuanței dinților. Se realizează în siguranță și oferă un zâmbet mai luminos și uniform.',
          price: '1200 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Albire dinte devital',
          description: 'Albirea dinților tratați endodontic.',
          detailedDescription: 'Tratament special destinat dinților tratați endodontic care și-au modificat culoarea.',
          price: '250 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Albire dentara in cabinet + acasa (gutiere incluse)',
          description: 'Rezultate optime prin combinarea metodelor profesionale.',
          detailedDescription: 'Procedură profesională pentru deschiderea nuanței dinților. Se realizează în siguranță și oferă un zâmbet mai luminos și uniform.',
          price: '1500 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Albire dentara in cabinet',
          description: 'Albire profesională realizată sub supraveghere medicală.',
          detailedDescription: 'Procedură profesională pentru deschiderea nuanței dinților. Se realizează în siguranță și oferă un zâmbet mai luminos și uniform.',
          price: '1000 RON',
          duration: 'Variază',
          popular: false
        },
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
          description: 'Corectarea discrepanțelor maxilare la copii.',
          detailedDescription: 'Tratamente ortodontice\n\nCorectarea alinierii dentare și a mușcăturii prin aparate fixe sau mobile. Tratamentul îmbunătățește funcționalitatea și estetica zâmbetului.\n\nRetainer / gutiere\n\nDispozitive utilizate pentru menținerea rezultatelor obținute după tratamentul ortodontic.',
          price: '1500 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Aparat fix partial',
          description: 'Tratament ortodontic pentru o singură arcadă.',
          detailedDescription: 'Tratamente ortodontice\n\nCorectarea alinierii dentare și a mușcăturii prin aparate fixe sau mobile. Tratamentul îmbunătățește funcționalitatea și estetica zâmbetului.\n\nRetainer / gutiere\n\nDispozitive utilizate pentru menținerea rezultatelor obținute după tratamentul ortodontic.',
          price: '1000 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Aparat fix metalic',
          description: 'Corectarea alinierii dentare cu aparat clasic.',
          detailedDescription: 'Tratamente ortodontice\n\nCorectarea alinierii dentare și a mușcăturii prin aparate fixe sau mobile. Tratamentul îmbunătățește funcționalitatea și estetica zâmbetului.\n\nRetainer / gutiere\n\nDispozitive utilizate pentru menținerea rezultatelor obținute după tratamentul ortodontic.',
          price: '2800 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Consultație Ortodonție',
          description: 'Evaluare ortodontică și stabilirea planului de tratament.',
          detailedDescription: 'Tratamente ortodontice\n\nCorectarea alinierii dentare și a mușcăturii prin aparate fixe sau mobile. Tratamentul îmbunătățește funcționalitatea și estetica zâmbetului.\n\nRetainer / gutiere\n\nDispozitive utilizate pentru menținerea rezultatelor obținute după tratamentul ortodontic.',
          price: '100 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Control aparat fix /per arcada',
          description: 'Control aparat fix /per arcada',
          detailedDescription: 'Tratamente ortodontice\n\nCorectarea alinierii dentare și a mușcăturii prin aparate fixe sau mobile. Tratamentul îmbunătățește funcționalitatea și estetica zâmbetului.\n\nRetainer / gutiere\n\nDispozitive utilizate pentru menținerea rezultatelor obținute după tratamentul ortodontic.',
          price: '100 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Retainer colat',
          description: 'Menținerea poziției dinților după tratament.',
          detailedDescription: 'Tratamente ortodontice\n\nCorectarea alinierii dentare și a mușcăturii prin aparate fixe sau mobile. Tratamentul îmbunătățește funcționalitatea și estetica zâmbetului.\n\nRetainer / gutiere\n\nDispozitive utilizate pentru menținerea rezultatelor obținute după tratamentul ortodontic.',
          price: '450 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Gutiera de contentie',
          description: 'Stabilizarea rezultatului ortodontic.',
          detailedDescription: 'Tratamente ortodontice\n\nCorectarea alinierii dentare și a mușcăturii prin aparate fixe sau mobile. Tratamentul îmbunătățește funcționalitatea și estetica zâmbetului.\n\nRetainer / gutiere\n\nDispozitive utilizate pentru menținerea rezultatelor obținute după tratamentul ortodontic.',
          price: '550 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Gutiera acrilica pentru inaltare ocluzala',
          description: 'Gutiera acrilica pentru inaltare ocluzala',
          detailedDescription: 'Tratamente ortodontice\n\nCorectarea alinierii dentare și a mușcăturii prin aparate fixe sau mobile. Tratamentul îmbunătățește funcționalitatea și estetica zâmbetului.\n\nRetainer / gutiere\n\nDispozitive utilizate pentru menținerea rezultatelor obținute după tratamentul ortodontic.',
          price: '250 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Ortoimplant',
          description: 'Ortoimplant',
          detailedDescription: 'Tratamente ortodontice\n\nCorectarea alinierii dentare și a mușcăturii prin aparate fixe sau mobile. Tratamentul îmbunătățește funcționalitatea și estetica zâmbetului.\n\nRetainer / gutiere\n\nDispozitive utilizate pentru menținerea rezultatelor obținute după tratamentul ortodontic.',
          price: '500 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Disjunctor si masca faciala',
          description: 'Disjunctor si masca faciala',
          detailedDescription: 'Tratamente ortodontice\n\nCorectarea alinierii dentare și a mușcăturii prin aparate fixe sau mobile. Tratamentul îmbunătățește funcționalitatea și estetica zâmbetului.\n\nRetainer / gutiere\n\nDispozitive utilizate pentru menținerea rezultatelor obținute după tratamentul ortodontic.',
          price: '1400 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Aparat miofunctional',
          description: 'Corectarea obiceiurilor vicioase și a dezvoltării maxilare.',
          detailedDescription: 'Tratamente ortodontice\n\nCorectarea alinierii dentare și a mușcăturii prin aparate fixe sau mobile. Tratamentul îmbunătățește funcționalitatea și estetica zâmbetului.\n\nRetainer / gutiere\n\nDispozitive utilizate pentru menținerea rezultatelor obținute după tratamentul ortodontic.',
          price: '800 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Aparat fix safir',
          description: 'Aparat estetic, aproape invizibil.',
          detailedDescription: 'Tratamente ortodontice\n\nCorectarea alinierii dentare și a mușcăturii prin aparate fixe sau mobile. Tratamentul îmbunătățește funcționalitatea și estetica zâmbetului.\n\nRetainer / gutiere\n\nDispozitive utilizate pentru menținerea rezultatelor obținute după tratamentul ortodontic.',
          price: '4000 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Aparat fix metalic semifizionomic ICONIX',
          description: 'Aparat fix metalic semifizionomic ICONIX',
          detailedDescription: 'Tratamente ortodontice\n\nCorectarea alinierii dentare și a mușcăturii prin aparate fixe sau mobile. Tratamentul îmbunătățește funcționalitatea și estetica zâmbetului.\n\nRetainer / gutiere\n\nDispozitive utilizate pentru menținerea rezultatelor obținute după tratamentul ortodontic.',
          price: '3200 RON',
          duration: 'Variază',
          popular: false
        },
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
          description: 'Refacerea țesuturilor afectate de boala parodontală.',
          detailedDescription: 'Tratamente parodontale\n\nProceduri destinate tratării inflamațiilor gingivale și bolii parodontale, prevenind pierderea dinților.',
          price: '1100 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Tunelizare',
          description: 'Tunelizare',
          detailedDescription: 'Tratamente parodontale\n\nProceduri destinate tratării inflamațiilor gingivale și bolii parodontale, prevenind pierderea dinților.',
          price: '400 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Indepartare imobilizare',
          description: 'Indepartare imobilizare',
          detailedDescription: 'Tratamente parodontale\n\nProceduri destinate tratării inflamațiilor gingivale și bolii parodontale, prevenind pierderea dinților.',
          price: '100 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Imobilizare 4-5 dinti',
          description: 'Stabilizarea dinților mobili.',
          detailedDescription: 'Tratamente parodontale\n\nProceduri destinate tratării inflamațiilor gingivale și bolii parodontale, prevenind pierderea dinților.',
          price: '500 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Imobilizare cu fibra (per sextant)',
          description: 'Imobilizare cu fibra (per sextant)',
          detailedDescription: 'Tratamente parodontale\n\nProceduri destinate tratării inflamațiilor gingivale și bolii parodontale, prevenind pierderea dinților.',
          price: '500 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Chiuretaj camp inchis per arcada',
          description: 'Îndepărtarea bacteriilor de sub gingie.',
          detailedDescription: 'Tratamente parodontale\n\nProceduri destinate tratării inflamațiilor gingivale și bolii parodontale, prevenind pierderea dinților.',
          price: '1200 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Tratament antiinflamator gingivita (per arcada)',
          description: 'Tratament antiinflamator gingivita (per arcada)',
          detailedDescription: 'Tratamente parodontale\n\nProceduri destinate tratării inflamațiilor gingivale și bolii parodontale, prevenind pierderea dinților.',
          price: '100 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Igienizare pacient parodontopat',
          description: 'Curățare profesională adaptată afecțiunilor parodontale.',
          detailedDescription: 'Tratamente parodontale\n\nProceduri destinate tratării inflamațiilor gingivale și bolii parodontale, prevenind pierderea dinților.',
          price: '400 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Parodontometrie',
          description: 'Măsurarea adâncimii pungilor parodontale.',
          detailedDescription: 'Tratamente parodontale\n\nProceduri destinate tratării inflamațiilor gingivale și bolii parodontale, prevenind pierderea dinților.',
          price: '200 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Chiuretaj parodontal in camp inchis dinte pluriradicular',
          description: 'Chiuretaj parodontal in camp inchis dinte pluriradicular',
          detailedDescription: 'Tratamente parodontale\n\nProceduri destinate tratării inflamațiilor gingivale și bolii parodontale, prevenind pierderea dinților.',
          price: '200 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Gingivectomie (per dinte)',
          description: 'Gingivectomie (per dinte)',
          detailedDescription: 'Tratamente parodontale\n\nProceduri destinate tratării inflamațiilor gingivale și bolii parodontale, prevenind pierderea dinților.',
          price: '150 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Tratament biostimulant neypulpin (5 sedinte)',
          description: 'Tratament biostimulant neypulpin (5 sedinte)',
          detailedDescription: 'Tratamente parodontale\n\nProceduri destinate tratării inflamațiilor gingivale și bolii parodontale, prevenind pierderea dinților.',
          price: '800 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Chiuretaj parodontal in camp inchis dinte monoradicular',
          description: 'Chiuretaj parodontal in camp inchis dinte monoradicular',
          detailedDescription: 'Tratamente parodontale\n\nProceduri destinate tratării inflamațiilor gingivale și bolii parodontale, prevenind pierderea dinților.',
          price: '150 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Chiuretaj parodontal in camp deschis',
          description: 'Chiuretaj parodontal in camp deschis',
          detailedDescription: 'Tratamente parodontale\n\nProceduri destinate tratării inflamațiilor gingivale și bolii parodontale, prevenind pierderea dinților.',
          price: '250 RON',
          duration: 'Variază',
          popular: false
        },
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
          description: 'Protecția dinților împotriva scrâșnirii nocturne.',
          detailedDescription: 'Igienizare profesională\n\nCurățare completă a dinților pentru prevenirea cariilor și a bolilor gingivale.\n\nGutieră bruxism\n\nDispozitiv personalizat pentru protejarea dinților împotriva scrâșnirii nocturne.',
          price: '350 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Fluorizare (per arcada)',
          description: 'Fluorizare (per arcada)',
          detailedDescription: 'Igienizare profesională\n\nCurățare completă a dinților pentru prevenirea cariilor și a bolilor gingivale.\n\nGutieră bruxism\n\nDispozitiv personalizat pentru protejarea dinților împotriva scrâșnirii nocturne.',
          price: '150 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Air flow',
          description: 'Îndepărtarea petelor și plăcii bacteriene.',
          detailedDescription: 'Igienizare profesională\n\nCurățare completă a dinților pentru prevenirea cariilor și a bolilor gingivale.\n\nGutieră bruxism\n\nDispozitiv personalizat pentru protejarea dinților împotriva scrâșnirii nocturne.',
          price: '150 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Detaratraj + periaj (ambele arcade)',
          description: 'Detaratraj + periaj (ambele arcade)',
          detailedDescription: 'Igienizare profesională\n\nCurățare completă a dinților pentru prevenirea cariilor și a bolilor gingivale.\n\nGutieră bruxism\n\nDispozitiv personalizat pentru protejarea dinților împotriva scrâșnirii nocturne.',
          price: '250 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Periaj',
          description: 'Curățare dentară profesională.',
          detailedDescription: 'Igienizare profesională\n\nCurățare completă a dinților pentru prevenirea cariilor și a bolilor gingivale.\n\nGutieră bruxism\n\nDispozitiv personalizat pentru protejarea dinților împotriva scrâșnirii nocturne.',
          price: '100 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Detartraj',
          description: 'Îndepărtarea tartrului de pe suprafața dinților.',
          detailedDescription: 'Igienizare profesională\n\nCurățare completă a dinților pentru prevenirea cariilor și a bolilor gingivale.\n\nGutieră bruxism\n\nDispozitiv personalizat pentru protejarea dinților împotriva scrâșnirii nocturne.',
          price: '200 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Gutiera fluorizare',
          description: 'Gutiera fluorizare',
          detailedDescription: 'Igienizare profesională\n\nCurățare completă a dinților pentru prevenirea cariilor și a bolilor gingivale.\n\nGutieră bruxism\n\nDispozitiv personalizat pentru protejarea dinților împotriva scrâșnirii nocturne.',
          price: '100 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Pachet igienizare (detartraj, periaj, air-flow)',
          description: 'Curățare completă pentru menținerea sănătății orale.',
          detailedDescription: 'Igienizare profesională\n\nCurățare completă a dinților pentru prevenirea cariilor și a bolilor gingivale.\n\nGutieră bruxism\n\nDispozitiv personalizat pentru protejarea dinților împotriva scrâșnirii nocturne.',
          price: '300 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Sigilare dentara clasica',
          description: 'Sigilare dentara clasica',
          detailedDescription: 'Igienizare profesională\n\nCurățare completă a dinților pentru prevenirea cariilor și a bolilor gingivale.\n\nGutieră bruxism\n\nDispozitiv personalizat pentru protejarea dinților împotriva scrâșnirii nocturne.',
          price: '150 RON',
          duration: 'Variază',
          popular: false
        },
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
          description: 'Incrustatie compozit',
          detailedDescription: 'Lucrări protetice dentare\n\nRefacerea dinților lipsă sau afectați prin coroane, punți sau proteze dentare, adaptate fiecărui pacient.',
          price: '400 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Onlay/Inlay ceramica/zirconiu',
          description: 'Onlay/Inlay ceramica/zirconiu',
          detailedDescription: 'Lucrări protetice dentare\n\nRefacerea dinților lipsă sau afectați prin coroane, punți sau proteze dentare, adaptate fiecărui pacient.',
          price: '700 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Aplicare capa de vindecare',
          description: 'Aplicare capa de vindecare',
          detailedDescription: 'Lucrări protetice dentare\n\nRefacerea dinților lipsă sau afectați prin coroane, punți sau proteze dentare, adaptate fiecărui pacient.',
          price: '100 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Cimentare(per dinte)',
          description: 'Cimentare(per dinte)',
          detailedDescription: 'Lucrări protetice dentare\n\nRefacerea dinților lipsă sau afectați prin coroane, punți sau proteze dentare, adaptate fiecărui pacient.',
          price: '50 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Plasa metalica proteze',
          description: 'Plasa metalica proteze',
          detailedDescription: 'Lucrări protetice dentare\n\nRefacerea dinților lipsă sau afectați prin coroane, punți sau proteze dentare, adaptate fiecărui pacient.',
          price: '500 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Proteza Kemeny',
          description: 'Proteza Kemeny',
          detailedDescription: 'Lucrări protetice dentare\n\nRefacerea dinților lipsă sau afectați prin coroane, punți sau proteze dentare, adaptate fiecărui pacient.',
          price: '400 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Proteza cu capse pe 4 implanturi',
          description: 'Înlocuirea dinților lipsă cu soluții fixe sau mobile.',
          detailedDescription: 'Lucrări protetice dentare\n\nRefacerea dinților lipsă sau afectați prin coroane, punți sau proteze dentare, adaptate fiecărui pacient.',
          price: '13000 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Proteza cu capse pe 2 implanturi',
          description: 'Proteza cu capse pe 2 implanturi',
          detailedDescription: 'Lucrări protetice dentare\n\nRefacerea dinților lipsă sau afectați prin coroane, punți sau proteze dentare, adaptate fiecărui pacient.',
          price: '9000 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Schimb teflon proteza capse',
          description: 'Schimb teflon proteza capse',
          detailedDescription: 'Lucrări protetice dentare\n\nRefacerea dinților lipsă sau afectați prin coroane, punți sau proteze dentare, adaptate fiecărui pacient.',
          price: '200 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Proteza pe sisteme multiunit ( 4 implanturi ) dinti zirconiu',
          description: 'Proteza pe sisteme multiunit ( 4 implanturi ) dinti zirconiu',
          detailedDescription: 'Lucrări protetice dentare\n\nRefacerea dinților lipsă sau afectați prin coroane, punți sau proteze dentare, adaptate fiecărui pacient.',
          price: '24000 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Coroana provizorie in cabinet',
          description: 'Coroana provizorie in cabinet',
          detailedDescription: 'Lucrări protetice dentare\n\nRefacerea dinților lipsă sau afectați prin coroane, punți sau proteze dentare, adaptate fiecărui pacient.',
          price: '100 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Proteza pe sisteme multiunit (5 implanturi) dinti zirconiu',
          description: 'Proteza pe sisteme multiunit (5 implanturi) dinti zirconiu',
          detailedDescription: 'Lucrări protetice dentare\n\nRefacerea dinților lipsă sau afectați prin coroane, punți sau proteze dentare, adaptate fiecărui pacient.',
          price: '24500 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Adaugare dinte/croset pe proteza',
          description: 'Adaugare dinte/croset pe proteza',
          detailedDescription: 'Lucrări protetice dentare\n\nRefacerea dinților lipsă sau afectați prin coroane, punți sau proteze dentare, adaptate fiecărui pacient.',
          price: '200 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Ablatie lucrare veche',
          description: 'Ablatie lucrare veche',
          detailedDescription: 'Lucrări protetice dentare\n\nRefacerea dinților lipsă sau afectați prin coroane, punți sau proteze dentare, adaptate fiecărui pacient.',
          price: '50 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Capsa proteza',
          description: 'Capsa proteza',
          detailedDescription: 'Lucrări protetice dentare\n\nRefacerea dinților lipsă sau afectați prin coroane, punți sau proteze dentare, adaptate fiecărui pacient.',
          price: '1000 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Captusire proteza',
          description: 'Captusire proteza',
          detailedDescription: 'Lucrări protetice dentare\n\nRefacerea dinților lipsă sau afectați prin coroane, punți sau proteze dentare, adaptate fiecărui pacient.',
          price: '250 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Proteza scheletata pe capse (pretul NU include contravaloarea capsei de 500 lei)',
          description: 'Proteza scheletata pe capse (pretul NU include contravaloarea capsei de 500 lei)',
          detailedDescription: 'Lucrări protetice dentare\n\nRefacerea dinților lipsă sau afectați prin coroane, punți sau proteze dentare, adaptate fiecărui pacient.',
          price: '2000 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Cimentare provizorie(per dinte)',
          description: 'Cimentare provizorie(per dinte)',
          detailedDescription: 'Lucrări protetice dentare\n\nRefacerea dinților lipsă sau afectați prin coroane, punți sau proteze dentare, adaptate fiecărui pacient.',
          price: '30 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Proteza elastica',
          description: 'Proteza elastica',
          detailedDescription: 'Lucrări protetice dentare\n\nRefacerea dinților lipsă sau afectați prin coroane, punți sau proteze dentare, adaptate fiecărui pacient.',
          price: '2000 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Captusire molosil',
          description: 'Captusire molosil',
          detailedDescription: 'Lucrări protetice dentare\n\nRefacerea dinților lipsă sau afectați prin coroane, punți sau proteze dentare, adaptate fiecărui pacient.',
          price: '150 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Coroana zirconiu pe implant',
          description: 'Refacerea dintelui lipsă prin implant dentar.',
          detailedDescription: 'Lucrări protetice dentare\n\nRefacerea dinților lipsă sau afectați prin coroane, punți sau proteze dentare, adaptate fiecărui pacient.',
          price: '390 EUR*',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Reconstructie corono - radiculara metalica',
          description: 'Reconstructie corono - radiculara metalica',
          detailedDescription: 'Lucrări protetice dentare\n\nRefacerea dinților lipsă sau afectați prin coroane, punți sau proteze dentare, adaptate fiecărui pacient.',
          price: '200 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Wax-up',
          description: 'Wax-up',
          detailedDescription: 'Lucrări protetice dentare\n\nRefacerea dinților lipsă sau afectați prin coroane, punți sau proteze dentare, adaptate fiecărui pacient.',
          price: '100 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Fatete dentare',
          description: 'Îmbunătățirea esteticii zâmbetului.',
          detailedDescription: 'Lucrări protetice dentare\n\nRefacerea dinților lipsă sau afectați prin coroane, punți sau proteze dentare, adaptate fiecărui pacient.',
          price: '2000 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Coroana Emax (ceramică presată)',
          description: 'Coroana Emax (ceramica presata)',
          detailedDescription: 'Lucrări protetice dentare\n\nRefacerea dinților lipsă sau afectați prin coroane, punți sau proteze dentare, adaptate fiecărui pacient.',
          price: '1700 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Coroana integral zirconiu',
          description: 'Coroana integral zirconiu',
          detailedDescription: 'Lucrări protetice dentare\n\nRefacerea dinților lipsă sau afectați prin coroane, punți sau proteze dentare, adaptate fiecărui pacient.',
          price: '1500 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Coroana metalo-ceramica',
          description: 'Refacerea formei și funcției dintelui afectat.',
          detailedDescription: 'Lucrări protetice dentare\n\nRefacerea dinților lipsă sau afectați prin coroane, punți sau proteze dentare, adaptate fiecărui pacient.',
          price: '900 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Reconstructie cu pivot fibra de sticla',
          description: 'Reconstructie cu pivot fibra de sticla',
          detailedDescription: 'Lucrări protetice dentare\n\nRefacerea dinților lipsă sau afectați prin coroane, punți sau proteze dentare, adaptate fiecărui pacient.',
          price: '350 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Reparatie proteza',
          description: 'Reparatie proteza',
          detailedDescription: 'Lucrări protetice dentare\n\nRefacerea dinților lipsă sau afectați prin coroane, punți sau proteze dentare, adaptate fiecărui pacient.',
          price: '300 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Reconstructie corono - radiculara zirconiu',
          description: 'Reconstructie corono - radiculara zirconiu',
          detailedDescription: 'Lucrări protetice dentare\n\nRefacerea dinților lipsă sau afectați prin coroane, punți sau proteze dentare, adaptate fiecărui pacient.',
          price: '400 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Coroana provizorie in laborator (PMMA)',
          description: 'Coroana provizorie in laborator (PMMA)',
          detailedDescription: 'Lucrări protetice dentare\n\nRefacerea dinților lipsă sau afectați prin coroane, punți sau proteze dentare, adaptate fiecărui pacient.',
          price: '300 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Coroana metalica',
          description: 'Coroana metalica',
          detailedDescription: 'Lucrări protetice dentare\n\nRefacerea dinților lipsă sau afectați prin coroane, punți sau proteze dentare, adaptate fiecărui pacient.',
          price: '350 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Proteza pe sisteme multiunit (6 implanturi), dinti zirconiu',
          description: 'Proteza pe sisteme multiunit (6 implanturi), dinti zirconiu',
          detailedDescription: 'Lucrări protetice dentare\n\nRefacerea dinților lipsă sau afectați prin coroane, punți sau proteze dentare, adaptate fiecărui pacient.',
          price: '25000 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Coroana semifizionomica metalo-ceramica',
          description: 'Coroana semifizionomica metalo-ceramica',
          detailedDescription: 'Lucrări protetice dentare\n\nRefacerea dinților lipsă sau afectați prin coroane, punți sau proteze dentare, adaptate fiecărui pacient.',
          price: '600 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Proteza pe sisteme multiunit ( 4 implanturi) dinti acrilat',
          description: 'Proteza pe sisteme multiunit ( 4 implanturi) dinti acrilat',
          detailedDescription: 'Lucrări protetice dentare\n\nRefacerea dinților lipsă sau afectați prin coroane, punți sau proteze dentare, adaptate fiecărui pacient.',
          price: '16000 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Proteza mobila acrilica',
          description: 'Înlocuirea dinților lipsă cu soluții fixe sau mobile.',
          detailedDescription: 'Lucrări protetice dentare\n\nRefacerea dinților lipsă sau afectați prin coroane, punți sau proteze dentare, adaptate fiecărui pacient.',
          price: '1500 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Proteza pe sisteme multiunit ( 5 implanturi ) dinti acrilat',
          description: 'Proteza pe sisteme multiunit ( 5 implanturi ) dinti acrilat',
          detailedDescription: 'Lucrări protetice dentare\n\nRefacerea dinților lipsă sau afectați prin coroane, punți sau proteze dentare, adaptate fiecărui pacient.',
          price: '17000 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Proteza pe sisteme multiunit ( 4 implanturi ) dinti acrilat',
          description: 'Proteza pe sisteme multiunit ( 4 implanturi ) dinti acrilat',
          detailedDescription: 'Lucrări protetice dentare\n\nRefacerea dinților lipsă sau afectați prin coroane, punți sau proteze dentare, adaptate fiecărui pacient.',
          price: '18000 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Proteza cu capse pe 3 implanturi',
          description: 'Proteza cu capse pe 3 implanturi',
          detailedDescription: 'Lucrări protetice dentare\n\nRefacerea dinților lipsă sau afectați prin coroane, punți sau proteze dentare, adaptate fiecărui pacient.',
          price: '11000 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Coroana pe implant dentar - metalo-ceramica',
          description: 'Coroana pe implant dentar - metalo-ceramica',
          detailedDescription: 'Lucrări protetice dentare\n\nRefacerea dinților lipsă sau afectați prin coroane, punți sau proteze dentare, adaptate fiecărui pacient.',
          price: '350 EUR*',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Proteza pe sisteme multiunit ( 6 implanturi) dinti acrilat',
          description: 'Proteza pe sisteme multiunit ( 6 implanturi) dinti acrilat',
          detailedDescription: 'Lucrări protetice dentare\n\nRefacerea dinților lipsă sau afectați prin coroane, punți sau proteze dentare, adaptate fiecărui pacient.',
          price: '18000 RON',
          duration: 'Variază',
          popular: false
        },
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
          description: 'Tratamentul cariilor dentare prin obturații moderne.',
          detailedDescription: 'Tratamente conservatoare\n\nTratamentul cariilor și al afecțiunilor dentare pentru menținerea structurii naturale a dintelui.',
          price: '350 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Fatetare directa in cabinet rasina compozit',
          description: 'Corectarea esteticii dintelui cu materiale compozite.',
          detailedDescription: 'Tratamente conservatoare\n\nTratamentul cariilor și al afecțiunilor dentare pentru menținerea structurii naturale a dintelui.',
          price: '500 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Obturatie coronara frontala compozit',
          description: 'Obturatie coronara frontala compozit',
          detailedDescription: 'Tratamente conservatoare\n\nTratamentul cariilor și al afecțiunilor dentare pentru menținerea structurii naturale a dintelui.',
          price: '370 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Tratament desensibilizant (per dinte)',
          description: 'Reducerea sensibilității dentare.',
          detailedDescription: 'Tratamente conservatoare\n\nTratamentul cariilor și al afecțiunilor dentare pentru menținerea structurii naturale a dintelui.',
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
                href="tel:+40726530591"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-primary-600 rounded-xl font-semibold text-sm sm:text-base hover:shadow-2xl transition-all hover:-translate-y-1"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                Sună acum
              </a>
              
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-xl font-semibold text-sm sm:text-base hover:bg-white/20 transition-all"
              >
                Formular contact
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
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
