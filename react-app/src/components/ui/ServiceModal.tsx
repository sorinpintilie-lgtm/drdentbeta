import React, { useEffect } from 'react';
import { X, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    description: string;
    detailedDescription?: string;
    icon: React.ReactNode;
    price?: string;
    duration?: string;
    popular?: boolean;
  } | null;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ isOpen, onClose, service }) => {
  if (!service) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pt-8 sm:pt-16 md:pt-24 pb-16 lg:pb-8">
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
            className="relative bg-white rounded-2xl shadow-2xl max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
            onScroll={(e) => {
              const target = e.target as HTMLElement;
              target.style.setProperty('-webkit-scrollbar', 'none');
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h2 className="text-2xl font-heading font-bold text-gray-900">
                      {service.title}
                    </h2>
                    {service.popular && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold">
                        <Star className="w-3 h-3 fill-current" />
                        Popular
                      </span>
                    )}
                  </div>
                  {service.price && (
                    <div className="text-sm text-gray-600">
                      <span className="font-semibold text-primary-600">
                        {service.price}
                      </span>
                    </div>
                  )}
                </div>
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
              <p className="text-gray-700 leading-relaxed text-base mb-4">
                {service.description}
              </p>
              {service.detailedDescription && (
                <div className="bg-primary-50 p-4 rounded-lg">
                  <p className="text-gray-700 leading-relaxed text-base">
                    {service.detailedDescription}
                  </p>
                </div>
              )}
            </div>
            
            {/* Footer */}
            <div className="p-6 border-t border-gray-100 bg-gray-50">
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={onClose}
                  className="px-6 py-3 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-colors"
                >
                  Inapoi
                </button>
                <a
                  href="tel:+40726530591"
                  className="px-6 py-3 border-2 border-primary-600 text-primary-600 rounded-xl font-semibold hover:bg-primary-50 transition-colors text-center"
                >
                  Programează consultație
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};