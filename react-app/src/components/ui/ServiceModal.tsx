import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    description: string;
    detailedDescription?: string;
    icon: React.ReactNode;
  } | null;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ isOpen, onClose, service }) => {
  if (!service) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white">
                  {service.icon}
                </div>
                <h2 className="text-2xl font-heading font-bold text-gray-900">
                  {service.title}
                </h2>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            
            {/* Content */}
            <div className="p-6">
              <p className="text-gray-700 leading-relaxed text-base">
                {service.detailedDescription || service.description}
              </p>
            </div>
            
            {/* Footer */}
            <div className="p-6 border-t border-gray-100 bg-gray-50">
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={onClose}
                  className="px-6 py-3 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-colors"
                >
                  Înțeleg
                </button>
                <a
                  href="tel:+40726530591"
                  className="px-6 py-3 border-2 border-primary-600 text-primary-600 rounded-xl font-semibold hover:bg-primary-50 transition-colors text-center"
                >
                  Programează Consultație
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};