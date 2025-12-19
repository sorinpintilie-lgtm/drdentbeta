import { motion } from 'framer-motion';
import {
  Smile, Sparkles, Shield, Gem, Circle, Palette, Anchor, Crown, Bone,
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

  const serviceCategories = [
    {
      category: 'Consultatie',
      color: 'from-blue-500 to-blue-600',
      icon: <Smile className="w-6 h-6" />,
      services: [
        {
          icon: <Smile className="w-8 h-8" />,
          title: 'Consultație',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
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
          title: 'Extractie dinte monoradicular',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '250 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Extractie dinte pluriradicular',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '300 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Extractie molar de minte superior erupt',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '350 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Extractie molar de minte inferior erupt',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '400 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Extractie dinte inclus intraosos(odontectomie)(include sutura)',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '600 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Chiuretaj perimplant',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '250 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Decapusonare',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '200 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Extractie dinte parodontotic(mobil)/rest radicular',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '200 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Tratament abces parodontotic',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '150 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Gingivectomie',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '150 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Chistectomie',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '600 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Tratament alveolita',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '150 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Rezectie apicala dinte monoradicular',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '500 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Rezectie apicala dinte pluriradicular',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '600 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Descoperire canin/premolar in scop ortodontic',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '450 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Implant dentar',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '500 EUR',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Sinus lift intern',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '200 EUR',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Sinus lift extern',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '800 EUR',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Un flacon bio oss',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '100 EUR',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Membrana',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '150 EUR',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Grefa de os autolog',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '800 EUR',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Extractie cu alveolotomie/separatie interradiculara',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '500 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Frenectomie',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
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
          title: 'Obturatie de canal pluriradicular 3 canale/+',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '300 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Reconstituire cu pivot fibra de sticla',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '350 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Tratament devitalizant',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '100 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Retratament endodontic pluriradicular 3 canale',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '500 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Retratament endodontic pluriradicular 2 canale',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '450 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Retratament endodontic dinte monoradicular',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '400 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Tratament endodontic pluriradicular 3 canale ( fara obturatie )',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '350 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Tratament endodontic pluriradicular 2 canale ( fara obturatie )',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '300 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Tratament endodontic dinte monoradicular ( fara obturatie )',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '250 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Tratament de urgenta (pansament calmant/drenaj/tratamnet pericoronarita etc)',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '150 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Refacere perete in vederea tratamentului endodontic',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '200 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Indepartare pivot/dentatus',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '200 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Obturatie de canal monoradicular/un canal',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '200 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Obturatie de canal biradicular 2 canale',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
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
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '250 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Albire dentara acasa (gutiere incluse)',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '1200 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Albire dinte devital',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '250 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Albire dentara in cabinet + acasa (gutiere incluse)',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '1500 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Albire dentara in cabinet',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
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
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '1500 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Aparat fix partial',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '1000 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Aparat fix metalic',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '2800 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Consultatie Ortodontie',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '100 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Control aparat fix /per arcada',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '100 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Retainer colat',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '450 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Gutiera de contentie',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '550 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Gutiera acrilica pentru inaltare ocluzala',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '250 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Ortoimplant',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '500 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Disjunctor si masca faciala',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '1400 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Aparat miofunctional',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '800 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Aparat fix safir',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '4000 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Aparat fix metalic semifizionomic ICONIX',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
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
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '1100 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Tunelizare',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '400 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Indepartare imobilizare',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '100 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Imobilizare 4-5 dinti',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '500 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Imobilizare cu fibra (per sextant)',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '500 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Chiuretaj camp inchis per arcada',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '1200 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Tratament antiinflamator gingivita (per arcada)',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '100 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Igienizare pacient parodontopat',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '400 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Parodontometrie',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '200 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Chiuretaj parodontal in camp inchis dinte pluriradicular',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '200 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Gingivectomie (per dinte)',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '150 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Tratament biostimulant neypulpin (5 sedinte)',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '800 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Chiuretaj parodontal in camp inchis dinte monoradicular',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '150 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Chiuretaj parodontal in camp deschis',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
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
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '200 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Obturatie de canal dinte monoradicular temporar',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '100 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Obturatie coronara compozit pe dinti temporari',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '250 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Pulpectomie vitala dinte pluriradicular temporar',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '200 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Extractie dinte temporar mobil (fara anestezie)',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '150 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Extractie dinte temporar fara mobilitate (cu anestezie)',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '200 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Pulpectomie vitala dinte monoradicular temporar',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '150 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Obturatie coronara ionomer de sticla',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '250 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Obturatie de canal dinte pluriradicular temporar',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
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
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '350 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Fluorizare (per arcada)',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '150 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Air flow',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '150 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Detaratraj + periaj (ambele arcade)',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '250 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Periaj',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '100 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Detartraj',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '200 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Gutiera fluorizare',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '100 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Pachet igienizare (detartraj, periaj, air-flow)',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '300 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Sigilare dentara clasica',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
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
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '400 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Onlay/Inlay ceramica/zirconiu',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '700 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Aplicare capa de vindecare',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '100 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Cimentare(per dinte)',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '50 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Plasa metalica proteze',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '500 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Proteza Kemeny',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '400 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Proteza cu capse pe 4 implanturi',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '13000 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Proteza cu capse pe 2 implanturi',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '9000 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Schimb teflon proteza capse',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '200 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Proteza pe sisteme multiunit ( 4 implanturi ) dinti zirconiu',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '24000 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Coroana provizorie in cabinet',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '100 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Proteza pe sisteme multiunit (5 implanturi) dinti zirconiu',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '24500 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Adaugare dinte/croset pe proteza',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '200 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Ablatie lucrare veche',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '50 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Capsa proteza',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '1000 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Captusire proteza',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '250 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Proteza scheletata pe capse (pretul NU include contravaloarea capsei de 500 lei)',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '2000 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Cimentare provizorie(per dinte)',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '30 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Proteza elastica',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '2000 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Captusire molosil',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '150 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Coroana zirconiu pe implant',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '390 EUR',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Reconstructie corono - radiculara metalica',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '200 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Wax-up',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '100 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Fatete dentare',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '2000 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Coroana Emax (ceramica presata)',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '1700 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Coroana integral zirconiu',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '1500 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Coroana metalo-ceramica',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '900 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Reconstructie cu pivot fibra de sticla',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '350 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Reparatie proteza',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '300 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Reconstructie corono - radiculara zirconiu',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '400 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Coroana provizorie in laborator (PMMA)',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '300 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Coroana metalica',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '350 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Proteza pe sisteme multiunit (6 implanturi), dinti zirconiu',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '25000 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Coroana semifizionomica metalo-ceramica',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '600 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Proteza pe sisteme multiunit ( 4 implanturi) dinti acrilat',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '16000 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Proteza mobila acrilica',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '1500 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Proteza pe sisteme multiunit ( 5 implanturi ) dinti acrilat',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '17000 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Proteza pe sisteme multiunit ( 4 implanturi ) dinti acrilat',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '18000 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Proteza cu capse pe 3 implanturi',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '11000 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Coroana pe implant dentar - metalo-ceramica',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '350 EUR',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Proteza pe sisteme multiunit ( 6 implanturi) dinti acrilat',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
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
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '350 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Fatetare directa in cabinet rasina compozit',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '500 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Obturatie coronara frontala compozit',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
          price: '370 RON',
          duration: 'Variază',
          popular: false
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: 'Tratament desensibilizant (per dinte)',
          description: 'Description to be added',
          detailedDescription: 'Detailed description to be added',
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
                        className="bg-white rounded-xl p-4 shadow-md border border-gray-100 h-full"
                      >
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
                          {service.title}
                        </h3>
                        
                        <p className="text-xs text-gray-600 mb-3 line-clamp-2 leading-relaxed">
                          {service.description}
                        </p>
                        
                        <div className="flex items-center justify-between text-xs mb-2">
                          <span className="flex items-center gap-1 text-gray-500">
                            <Clock className="w-3 h-3" />
                            {service.duration}
                          </span>
                          <span className="font-bold text-primary-600">
                            {service.price}
                          </span>
                        </div>
                        
                        <button 
                          onClick={() => openServiceModal(service)}
                          className="w-full flex items-center justify-center gap-1 px-3 py-2 bg-primary-50 text-primary-600 rounded-lg font-semibold text-xs hover:bg-primary-100 transition-colors"
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
                      className="bg-white rounded-xl p-5 shadow-md border border-gray-100 hover:shadow-xl transition-all"
                    >
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
                        {service.title}
                      </h3>
                      
                      <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm mb-3">
                        <span className="flex items-center gap-1 text-gray-500">
                          <Clock className="w-4 h-4" />
                          {service.duration}
                        </span>
                        <span className="font-bold text-primary-600">
                          {service.price}
                        </span>
                      </div>
                      
                      <button 
                        onClick={() => openServiceModal(service)}
                        className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-primary-50 text-primary-600 rounded-lg font-semibold text-sm hover:bg-primary-100 transition-colors"
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
              Programează o consultație (100 lei) și discutăm despre nevoile dumneavoastră.
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
