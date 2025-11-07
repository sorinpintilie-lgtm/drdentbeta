import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowLeft, Phone, Mail, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Chat Page Component
 * Embedded ThinkStack AI chatbot with fallback options
 */
function Chat() {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    // Show fallback after 5 seconds if iframe doesn't load
    const timer = setTimeout(() => {
      if (!iframeLoaded) {
        setShowFallback(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [iframeLoaded]);

  return (
    <div className="min-h-screen pt-16 pb-20 md:pb-8 bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Înapoi"
            >
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <div className="flex items-center gap-3">
              <MessageCircle className="w-8 h-8" />
              <div>
                <h1 className="text-2xl md:text-3xl font-heading font-bold">
                  Chat Asistent Virtual
                </h1>
                <p className="text-sm md:text-base text-white/90">
                  Întreabă-ne orice despre serviciile noastre
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Container */}
      <div className="container mx-auto px-4 py-6 md:py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 relative"
          style={{ height: 'calc(100vh - 280px)', minHeight: '500px' }}
        >
          {/* Loading indicator */}
          {!iframeLoaded && !showFallback && (
            <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
                <p className="text-gray-600">Se încarcă chat-ul...</p>
              </div>
            </div>
          )}

          {/* Fallback message */}
          {showFallback && (
            <div className="absolute inset-0 flex items-center justify-center bg-white z-10 p-6">
              <div className="text-center max-w-md">
                <AlertCircle className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Chat-ul nu se poate încărca
                </h3>
                <p className="text-gray-600 mb-6">
                  Ne pare rău, dar chat-ul nu poate fi încărcat momentan. Te rugăm să ne contactezi direct:
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+40726530591"
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                  >
                    <Phone className="w-5 h-5" />
                    Sună: +40 21 344 9317
                  </a>
                  <a
                    href="mailto:programare@drdent.ro"
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 border-2 border-primary-500 text-primary-600 rounded-xl font-semibold hover:bg-primary-50 transition-all"
                  >
                    <Mail className="w-5 h-5" />
                    Email: programare@drdent.ro
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Iframe */}
          <iframe
            src="https://app.thinkstack.ai/bot/index.html?chatbot_id=690c5edc150513420cc90cdd&type=inline"
            title="Dr.Dent Chat Assistant"
            className="w-full h-full"
            style={{ border: 'none' }}
            allow="microphone"
            onLoad={() => setIframeLoaded(true)}
            onError={() => setShowFallback(true)}
          />
        </motion.div>

        {/* Help Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-center space-y-2"
        >
          <p className="text-sm text-gray-600">
            Asistentul nostru virtual este disponibil 24/7 pentru a răspunde întrebărilor tale despre serviciile Dr.Dent.
          </p>
          <p className="text-sm text-gray-600">
            Toate informațiile despre prețuri și servicii sunt actualizate conform{' '}
            <a href="https://www.drdent.ro" target="_blank" rel="noopener noreferrer" className="text-primary-600 font-semibold hover:underline">
              www.drdent.ro
            </a>
          </p>
          <p className="text-sm text-gray-600">
            Pentru urgențe, sună la{' '}
            <a href="tel:+40726530591" className="text-primary-600 font-semibold hover:underline">
              +40 21 344 9317
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Chat;
