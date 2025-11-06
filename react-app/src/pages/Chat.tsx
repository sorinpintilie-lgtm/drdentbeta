import { motion } from 'framer-motion';
import { MessageCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Chat Page Component
 * Embedded ThinkStack AI chatbot
 */
function Chat() {
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
          className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
          style={{ height: 'calc(100vh - 280px)', minHeight: '500px' }}
        >
          <iframe
            src="https://app.thinkstack.ai/bot/index.html?chatbot_id=690c5edc150513420cc90cdd&type=inline"
            title="Dr.Dent Chat Assistant"
            className="w-full h-full"
            style={{ border: 'none' }}
            allow="microphone"
          />
        </motion.div>

        {/* Help Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-center"
        >
          <p className="text-sm text-gray-600">
            Asistentul nostru virtual este disponibil 24/7 pentru a răspunde întrebărilor tale.
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Pentru urgențe, sună la{' '}
            <a href="tel:+40213449317" className="text-primary-600 font-semibold hover:underline">
              +40 21 344 9317
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Chat;