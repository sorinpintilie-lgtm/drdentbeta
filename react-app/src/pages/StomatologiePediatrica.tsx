import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  Heart, Star as StarIcon,
  Phone, Users, Sparkles, Rainbow,
  HeartHandshake, Smile, Flower
} from 'lucide-react';
import { SwipeableCarousel } from '../components/ui/SwipeableCarousel';

/**
 * Stomatologie Pediatrică - Child-Friendly Page
 * Colorful and playful design for children
 */
function StomatologiePediatrica() {
  // Game state
  const [gameActive, setGameActive] = useState(false);
  const [toothFairyPosition, setToothFairyPosition] = useState({ x: 0, y: 0 });
  const [showCongratulations, setShowCongratulations] = useState(false);
  const [gameScore, setGameScore] = useState(0);
  const [showLearningPopup, setShowLearningPopup] = useState(false);

  // Random positions for tooth fairy to hide
  const possiblePositions = [
    { x: 10, y: 20 }, { x: 70, y: 15 }, { x: 20, y: 60 },
    { x: 80, y: 45 }, { x: 15, y: 80 }, { x: 85, y: 70 },
    { x: 45, y: 10 }, { x: 60, y: 75 }, { x: 25, y: 35 },
    { x: 75, y: 55 }, { x: 30, y: 90 }, { x: 90, y: 25 }
  ];

  const startGame = () => {
    setGameActive(true);
    setShowCongratulations(false);
    
    // Randomly position the tooth fairy
    const randomPosition = possiblePositions[Math.floor(Math.random() * possiblePositions.length)];
    setToothFairyPosition(randomPosition);
  };

  const findToothFairy = () => {
    setGameScore((prev: number) => prev + 1);
    setShowCongratulations(true);
    
    // Generate new tooth position after celebration
    setTimeout(() => {
      setShowCongratulations(false);
      
      // New random position for next round
      const newPosition = possiblePositions[Math.floor(Math.random() * possiblePositions.length)];
      setToothFairyPosition(newPosition);
    }, 2000);
  };

  const childFriendlyServices = [
    {
      title: 'Prima vizită la doctor',
      description: 'O întâlnire prietenoasă pentru a ne cunoaște și a ne juca puțin!',
      icon: <Heart className="w-8 h-8" />,
      color: 'from-pink-400 to-pink-500',
      image: '/images/children/fata.png'
    },
    {
      title: 'Curățare cu periuța magică',
      description: 'Învățăm să ne spălăm dințișorii ca un adevărat campion!',
      icon: <Smile className="w-8 h-8" />,
      color: 'from-green-400 to-green-500',
      image: '/images/children/iepuras.png'
    },
    {
      title: 'Sigilare cu flori colorate',
      description: 'Pune flori magice pe dințișori să îi protejăm de carii!',
      icon: <Flower className="w-8 h-8" />,
      color: 'from-yellow-400 to-orange-400',
      image: '/images/children/floare roz.png'
    },
    {
      title: 'Tratament fără durere',
      description: 'Folosim formule blânde și tehnici speciale pentru copii',
      icon: <HeartHandshake className="w-8 h-8" />,
      color: 'from-blue-400 to-purple-400',
      image: '/images/children/inima.png'
    },
  ];

  const floatingElements = [
    { src: '/images/children/soare test .png', size: 'w-16 h-16', top: '10%', left: '5%', delay: 0 },
    { src: '/images/children/curcubeu peste nori.png', size: 'w-20 h-20', top: '15%', right: '10%', delay: 1 },
    { src: '/images/children/fluture.png', size: 'w-12 h-12', top: '30%', left: '8%', delay: 2 },
    { src: '/images/children/unicorn.png', size: 'w-16 h-16', top: '60%', right: '15%', delay: 3 },
    { src: '/images/children/balon cu aer cald.png', size: 'w-14 h-14', top: '75%', left: '10%', delay: 4 },
    { src: '/images/children/floare albastra.png', size: 'w-12 h-12', top: '45%', right: '5%', delay: 5 },
    { src: '/images/children/inghetata.png', size: 'w-14 h-14', top: '80%', right: '8%', delay: 6 },
  ];

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-yellow-50 via-pink-50 to-blue-50 relative overflow-hidden">
      {/* Floating Background Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className={`fixed ${element.size} object-contain opacity-20 pointer-events-none z-0`}
          style={{ top: element.top, left: element.left, right: element.right }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 4 + element.delay,
            repeat: Infinity,
            ease: "easeInOut",
            delay: element.delay
          }}
        >
          <img 
            src={element.src} 
            alt="floating decoration" 
            className="w-full h-full object-contain filter drop-shadow-lg"
          />
        </motion.div>
      ))}

      {/* Hero Section - Super Colorful */}
      <section className="relative py-8 sm:py-12 bg-gradient-to-br from-yellow-300 via-pink-300 to-blue-300 text-white overflow-hidden">
        {/* Decorative clouds and sun */}
        <div className="absolute top-0 left-0 w-full h-full">
          <motion.div 
            className="absolute top-4 left-4 w-12 h-12 bg-white/20 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div 
            className="absolute top-8 right-8 w-8 h-8 bg-white/15 rounded-full"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-4 left-1/4 w-6 h-6 bg-white/10 rounded-full"
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Cute badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
              <StarIcon className="w-4 h-4" />
              Pentru copii
            </div>
            
            {/* Rainbow title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4 text-white">
              Stomatologie pediatrică
            </h1>
            
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-6 leading-relaxed">
              Zâmbetele celor mici merită cea mai bună îngrijire!<br />
              Transformăm vizita la dentist într-o experiență plăcută și distractivă!
            </p>
            
            {/* Cute action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.button
                onClick={startGame}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white text-pink-500 rounded-full font-semibold text-sm hover:shadow-lg transition-all"
              >
                Vreau să mă joc!
              </motion.button>
              <motion.button
                onClick={() => setShowLearningPopup(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white/20 backdrop-blur-sm border-2 border-white text-white rounded-full font-semibold text-sm hover:bg-white/30 transition-all"
                disabled={gameActive}
              >
                Vreau să învăț!
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tooth Fairy Game Overlay */}
      {gameActive && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-3xl p-8 max-w-md mx-4 text-center relative overflow-hidden"
          >
            {/* Game background decorations */}
            <div className="absolute inset-0 opacity-10">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-4 h-4 bg-pink-300 rounded-full"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{
                    duration: 2 + i * 0.2,
                    repeat: Infinity,
                    delay: i * 0.1
                  }}
                />
              ))}
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Găsește Zana Măseluța!
              </h3>
              <p className="text-gray-600 mb-6">
                Găsește și apasă pe Zana Măseluța să îți dai seama!
              </p>

              {/* Game area */}
              <div className="relative w-80 h-60 mx-auto mb-6 bg-gradient-to-b from-sky-200 via-sky-100 to-green-100 rounded-2xl border-4 border-yellow-300 overflow-hidden">
                {/* Actual scene layout - TOP LAYER (hides the zanamaseluta) */}
                <div className="absolute top-0 left-0 w-full h-full">
                  {/* SKY SECTION - Clouds floating in the sky */}
                  <div className="absolute top-2 left-2 z-30">
                    <img
                      src="/images/scene/fluffy-cloud.png"
                      alt="Fluffy Cloud"
                      className="w-18 h-12 object-contain drop-shadow-lg opacity-90"
                    />
                  </div>
                  
                  <div className="absolute top-1 right-4 z-30">
                    <img
                      src="/images/scene/fluffy-cloud.png"
                      alt="Fluffy Cloud"
                      className="w-16 h-10 object-contain drop-shadow-lg opacity-85"
                    />
                  </div>
                  
                  <div className="absolute top-4 right-16 z-30">
                    <img
                      src="/images/scene/fluffy-cloud.png"
                      alt="Fluffy Cloud"
                      className="w-14 h-9 object-contain drop-shadow-lg opacity-80"
                    />
                  </div>
                  
                  {/* Floating fluffy clouds that move */}
                  {[...Array(2)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute z-25"
                      style={{
                        top: `${8 + i * 20}%`,
                        left: `${i * 30}%`
                      }}
                      animate={{
                        x: [0, 25, 0],
                        y: [0, -8, 0]
                      }}
                      transition={{
                        duration: 8 + i,
                        repeat: Infinity,
                        delay: i * 1.5
                      }}
                    >
                      <img
                        src="/images/scene/fluffy-cloud.png"
                        alt="Floating Cloud"
                        className="w-12 h-8 object-contain drop-shadow-md opacity-75"
                      />
                    </motion.div>
                  ))}
                  
                  {/* GROUND SECTION - Trees and bushes sitting on the ground */}
                  <div className="absolute bottom-8 left-4 z-35">
                    <img
                      src="/images/scene/colored-tree-icon-isolated-on-square-white-background-simple-flat-outlined-cartoon-icon-drawing-with-nature-botanical-theme-free-vector-removebg-preview.png"
                      alt="Tree on ground"
                      className="w-16 h-20 object-contain drop-shadow-lg"
                    />
                  </div>
                  
                  <div className="absolute bottom-6 right-6 z-35">
                    <img
                      src="/images/scene/bush-cartoon.png"
                      alt="Bush on ground"
                      className="w-14 h-10 object-contain drop-shadow-lg"
                    />
                  </div>
                  
                  <div className="absolute bottom-4 left-16 z-35">
                    <img
                      src="/images/scene/bush-cartoon.png"
                      alt="Bush on ground"
                      className="w-12 h-9 object-contain drop-shadow-lg"
                    />
                  </div>
                  
                  <div className="absolute bottom-10 right-20 z-35">
                    <img
                      src="/images/scene/colored-tree-icon-isolated-on-square-white-background-simple-flat-outlined-cartoon-icon-drawing-with-nature-botanical-theme-free-vector-removebg-preview.png"
                      alt="Tree on ground"
                      className="w-14 h-18 object-contain drop-shadow-lg"
                    />
                  </div>
                  
                  {/* Giraffe sitting on the ground */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-35">
                    <img
                      src="/images/scene/giraffe-cartoon-roughen-filled-outline-icon-free-vector-removebg-preview.png"
                      alt="Giraffe sitting on ground"
                      className="w-10 h-14 object-contain drop-shadow-lg opacity-90"
                    />
                  </div>
                  
                  {/* Ground line */}
                  <div className="absolute bottom-0 left-0 w-full h-12 z-35 bg-gradient-to-t from-green-300/60 to-green-200/30" />
                  
                  {/* Small grass details on ground */}
                  <div className="absolute bottom-2 left-0 w-full z-36">
                    {[...Array(15)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute bottom-0 w-0.5 h-2 bg-green-400/50"
                        style={{
                          left: `${i * 6.5}%`,
                          height: `${1 + (i % 2)}px`
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Clickable Zanamaseluta - HIDDEN LAYER (behind everything) */}
                <motion.div
                  className="absolute cursor-pointer group z-5"
                  style={{
                    left: `${toothFairyPosition.x}%`,
                    top: `${toothFairyPosition.y}%`
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={findToothFairy}
                >
                  <motion.div
                    animate={{
                      y: [0, -6, 0],
                      rotate: [0, 2, -2, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity
                    }}
                    className="relative"
                  >
                    {/* Zanamaseluta image - very subtle when hidden */}
                    <div className="w-12 h-12 relative opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                      <img
                        src="/images/zanamaseluta/zanamaseluta.png"
                        alt="Zana Măseluța"
                        className="w-full h-full object-contain drop-shadow-sm"
                      />
                      
                      {/* Subtle sparkles around the image when hovered */}
                      <motion.div
                        className="absolute -top-1 -right-1 w-2 h-2 opacity-0 group-hover:opacity-70 transition-opacity"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.5, 0.8, 0.5]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity
                        }}
                      >
                        <Sparkles className="w-2 h-2 text-yellow-500" />
                      </motion.div>
                    </div>
                  </motion.div>
                  
                  {/* Hidden tooltip - only appears when very close */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-purple-600 text-white text-xs px-2 py-1 rounded-full whitespace-nowrap z-40 shadow-lg">
                    Aici sunt!
                  </div>
                </motion.div>
                
                {/* Small decorative elements - floating in sky */}
                <div className="absolute top-6 left-8 w-1.5 h-1.5 bg-yellow-300/30 rounded-full z-20" />
                <div className="absolute top-12 right-12 w-1 h-1 bg-pink-300/30 rounded-full z-20" />
                <div className="absolute top-8 left-20 w-1.5 h-1.5 bg-blue-300/30 rounded-full z-20" />
                <div className="absolute top-10 right-8 w-1 h-1 bg-purple-300/30 rounded-full z-20" />
              </div>

              {showCongratulations && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="bg-gradient-to-r from-green-400 to-blue-400 text-white p-4 rounded-2xl mb-4"
                >
                  <h4 className="text-xl font-bold mb-2">Felicitări!</h4>
                  <p className="text-sm">
                    Ai găsit Zana Măseluța! Ești un campion!<br />
                    Scorul tău: {gameScore} puncte! Următoarea zană se ascunde...
                  </p>
                </motion.div>
              )}

              <motion.button
                onClick={() => setGameActive(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gray-400 hover:bg-gray-500 text-white rounded-full font-semibold transition-colors"
              >
                Ies din joc
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Learning Popup */}
      {showLearningPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0, y: 50 }}
            className="bg-gradient-to-br from-yellow-100 via-pink-100 to-blue-100 rounded-3xl p-6 sm:p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto relative"
          >
            {/* Decorative floating elements */}
            <div className="absolute top-4 right-4 w-8 h-8 bg-yellow-300/30 rounded-full animate-bounce" />
            <div className="absolute top-12 left-4 w-6 h-6 bg-pink-300/30 rounded-full animate-pulse" />
            <div className="absolute bottom-6 right-8 w-4 h-4 bg-blue-300/30 rounded-full animate-ping" />
            
            <div className="relative z-10 text-center">
              {/* Cute header with images */}
              <div className="mb-6">
                <div className="flex justify-center items-center gap-3 mb-4">
                  <img
                     src="/images/children/iepuras.png"
                    alt="Cute bunny"
                    className="w-12 h-12 object-contain"
                  />
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    Periuța Magică!
                  </h3>
                  <img
                     src="/images/children/inima.png"
                    alt="Heart"
                    className="w-12 h-12 object-contain"
                  />
                </div>
              </div>

              {/* Main content with cute images */}
              <div className="space-y-4 text-left">
                <div className="flex items-start gap-3">
                  <img
                     src="/images/children/fata.png"
                    alt="Happy girl"
                    className="w-10 h-10 object-contain flex-shrink-0 mt-1"
                  />
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">
                      De ce e bine să ne spălăm pe dinți în fiecare zi?
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Știi de ce dinții tăi au nevoie de periuță și pastă în fiecare zi? Pentru că, atunci când mănânci, rămân mici bucățele de mâncare care se ascund între dinți. Dacă nu le spălăm, vin niște „monstruleti” mici, numiți bacterii, care fac găurele în dinți și pot să-i doară.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <img
                     src="/images/children/unicorn.png"
                    alt="Unicorn"
                    className="w-10 h-10 object-contain flex-shrink-0 mt-1"
                  />
                  <div>
                    <p className="text-gray-700 leading-relaxed">
                      Când te speli pe dinți dimineața și seara, îi ajuți să fie curați, tari și strălucitori. Așa poți zâmbi cât vrei, fără frică de carii!
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <img
                     src="/images/children/fluture.png"
                    alt="Butterfly"
                    className="w-10 h-10 object-contain flex-shrink-0 mt-1"
                  />
                  <div>
                    <p className="text-gray-700 leading-relaxed">
                      Și mai e ceva: dinții curați înseamnă și respirație proaspătă, iar periajul zilnic e ca un supereroi care te apără în fiecare zi.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <img
                     src="/images/children/curcubeu peste nori.png"
                    alt="Rainbow"
                    className="w-10 h-10 object-contain flex-shrink-0 mt-1"
                  />
                  <div>
                    <p className="text-gray-700 leading-relaxed font-bold">
                      Așa că... ia periuța, pune puțină pastă și fă spumă! Zâmbetul tău merită!
                    </p>
                  </div>
                </div>
              </div>

              {/* Fun decorative elements */}
              <div className="flex justify-center items-center gap-4 my-6">
                <motion.div
                  className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Smile className="w-6 h-6 text-white" />
                </motion.div>
                <motion.div
                  className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Sparkles className="w-6 h-6 text-white" />
                </motion.div>
                <motion.div
                  className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-400 rounded-full flex items-center justify-center"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity }}
                >
                  <Heart className="w-6 h-6 text-white" />
                </motion.div>
              </div>

              {/* Close button */}
              <motion.button
                onClick={() => setShowLearningPopup(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-full font-bold text-lg hover:shadow-lg transition-all"
              >
                Mulțumesc! Vreau să mă spăl pe dinți!
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Real Photos Showcase Section */}
      <section className="py-8 sm:py-12 bg-white relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Ne pasă de cei mici și avem grijă de zâmbetele lor!
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              La Dr. Dent, grija începe cu zâmbetul copilului.
            </p>
          </motion.div>

          {/* Photo Gallery - Mobile First */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {[
              {
                src: '/images/doctor-orthodontist-playing-with-the-boy-in-the-de-2025-10-15-18-19-30-utc.jpg',
                alt: 'Doctor jucându-se cu un băiețel',
                title: 'Joacă și învățare',
                description: 'Transformăm consultația într-o aventură distractivă!'
              },
              {
                src: '/images/female-dentist-shows-a-boy-on-a-mock-up-how-to-bru-2025-02-16-18-23-20-utc.jpg',
                alt: 'Doctorița învață un băiețel cum să-și spele dinții',
                title: 'Educație dentară',
                description: 'Învățăm să avem grijă de dințișorii noștri!'
              },
              {
                src: '/images/woman-doctor-is-giving-hi-five-to-little-girl-afte-2025-01-09-01-53-21-utc.jpg',
                alt: 'Doctorița face high-five cu o fetița',
                title: 'Celebrăm succesul',
                description: 'Fiecare vizită este o victorie împreună!'
              }
            ].map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-heading font-bold text-lg sm:text-xl mb-1">
                      {photo.title}
                    </h3>
                    <p className="text-white/90 text-sm">
                      {photo.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Why We Love Kids Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              De ce ingrijire specială pentru copii?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Echipa noastră are răbdare și vorbește pe limba copiilor!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Our Team Loves Kids */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-2xl p-6 text-center"
            >
              <div className="w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                Echipa noastră are răbdare
              </h3>
              <p className="text-gray-700">
                Vorbim pe limba copiilor și îi ajutăm să înțeleagă cât de important este să aibă grijă de dințișorii lor.
              </p>
            </motion.div>

            {/* Gentle Techniques */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-6 text-center"
            >
              <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                Tehnici blânde
              </h3>
              <p className="text-gray-700">
                Folosim materiale sigure și o abordare jucăușă, astfel încât fiecare interventie să fie o aventură frumoasă.
              </p>
            </motion.div>

            {/* Fun Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-6 text-center"
            >
              <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                Experiență distractivă
              </h3>
              <p className="text-gray-700">
                Nu este un motiv de stres, ci o oportunitate de a învăța și de a se distra!
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Carousel - Mobile First */}
      <section className="py-8 sm:py-12 bg-gradient-to-b from-yellow-50 to-pink-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Serviciile noastre
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fie că e vorba de sigilări dentare, tratamente pentru carii de lapte sau simple controale de rutină
            </p>
          </motion.div>

          {/* Mobile Carousel */}
          <div className="mt-8">
            <SwipeableCarousel gap={15}>
              {childFriendlyServices.map((service, index) => (
                <div key={index} className="bg-white/90 p-6 rounded-3xl shadow-xl relative overflow-hidden">
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-yellow-200 to-pink-200 rounded-bl-3xl" />
                  
                  {/* Service image */}
                  <div className="relative z-10 mb-4">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-16 h-16 object-contain mx-auto"
                    />
                  </div>
                  
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.color} text-white mb-4`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 text-center leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </SwipeableCarousel>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
            {childFriendlyServices.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 shadow-lg border-4 border-yellow-200 hover:border-pink-300 transition-all relative overflow-hidden"
              >
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-yellow-200 to-pink-200 rounded-bl-3xl" />
                <motion.div 
                  className="absolute top-2 left-2 w-3 h-3 bg-pink-300 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                
                {/* Service image */}
                <div className="relative z-10 mb-4">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-20 h-20 object-contain mx-auto"
                  />
                </div>
                
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} text-white mb-4`}>
                  {service.icon}
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">
                  {service.title}
                </h3>
                
                <p className="text-sm text-gray-600 text-center leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-8 sm:py-12 bg-white relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >

            
            <div className="bg-gradient-to-r from-yellow-100 via-pink-100 to-blue-100 rounded-2xl p-6 sm:p-8 mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Vino cu cel mic la o consultație — pleacă fericit, cu zâmbetul larg și o surpriză! 🎁
              </p>
              
              <div className="flex justify-center items-center gap-4 text-2xl">
                <span>🌈</span>
                <span>🦷</span>
                <span>⭐</span>
                <span>🎈</span>
                <span>🌸</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Prevention Focus Section */}
      <section className="py-8 sm:py-12 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Punem accent pe prevenție
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Formăm obiceiuri sănătoase pentru viitor
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: 'Învățăm prin joacă',
                description: 'Transformăm periajul dinților într-o activitate distractivă',
                icon: 'joc',
                color: 'from-purple-400 to-pink-400'
              },
              {
                title: 'Vizite distractive',
                description: 'Fiecare vizită este o aventură nouă cu surprize',
                icon: 'cadou',
                color: 'from-yellow-400 to-orange-400'
              },
              {
                title: 'Rezultate pe termen lung',
                description: 'Construim obiceiuri sănătoase pentru o dezvoltare armonioasă',
                icon: 'plantă',
                color: 'from-green-400 to-blue-400'
              },
              {
                title: 'Sprijin pentru părinți',
                description: 'Sfaturi pentru îngrijirea acasă',
                icon: 'familie',
                color: 'from-pink-400 to-red-400'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border-2 border-yellow-200 hover:border-pink-300 transition-all"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.color} text-white mb-4`}>
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-heading font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fun CTA Section */}
      <section className="py-8 sm:py-12 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 text-white relative overflow-hidden">
        {/* Fun floating elements */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-8 h-8 bg-white/20 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.7, 0.3],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                delay: i * 0.5
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
              <Rainbow className="w-4 h-4" />
              Hai să ne jucăm!
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-4">
              Gata pentru o aventură dentară?
            </h2>
            
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Detalii de contact și transformăm experiența într-un moment special!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:+40213449317"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-pink-500 rounded-full font-bold text-lg hover:shadow-2xl transition-all"
              >
                <Phone className="w-5 h-5" />
                Sună acum!
              </motion.a>
              
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default StomatologiePediatrica;