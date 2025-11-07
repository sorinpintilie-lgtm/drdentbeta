import { z } from 'zod';

// Romanian phone number validation regex
// Accepts formats: +40 XXX XXX XXX, +40XXXXXXXXX, 07XX XXX XXX, 07XXXXXXXX
const romanianPhoneRegex = /^(\+40|0040|0)[1-9]\d{8}$/;

// Custom error messages in Romanian
const errorMessages = {
  required: 'Acest câmp este obligatoriu',
  invalidEmail: 'Adresa de email nu este validă',
  invalidPhone: 'Numărul de telefon nu este valid (ex: +40 XXX XXX XXX)',
  minLength: (min: number) => `Minim ${min} caractere`,
  maxLength: (max: number) => `Maxim ${max} caractere`,
};

// Appointment form validation schema
export const appointmentFormSchema = z.object({
  fullName: z
    .string()
    .min(1, errorMessages.required)
    .min(3, errorMessages.minLength(3))
    .max(100, errorMessages.maxLength(100))
    .regex(/^[a-zA-ZăâîșțĂÂÎȘȚ\s-]+$/, 'Numele poate conține doar litere, spații și cratime'),
  
  email: z
    .string()
    .min(1, errorMessages.required)
    .email(errorMessages.invalidEmail)
    .max(100, errorMessages.maxLength(100)),
  
  phone: z
    .string()
    .min(1, errorMessages.required)
    .regex(romanianPhoneRegex, errorMessages.invalidPhone)
    .transform((val) => val.replace(/\s/g, '')), // Remove spaces for storage
  
  service: z
    .string()
    .min(1, 'Vă rugăm să selectați un serviciu'),
  
  preferredDate: z
    .string()
    .min(1, errorMessages.required)
    .refine((date) => {
      const selectedDate = new Date(date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return selectedDate >= today;
    }, 'Data trebuie să fie în viitor'),
  
  preferredTime: z
    .string()
    .min(1, errorMessages.required),
  
  message: z
    .string()
    .max(500, errorMessages.maxLength(500))
    .optional(),
});

// Type inference from schema
export type AppointmentFormData = z.infer<typeof appointmentFormSchema>;

// Service options for the dropdown
export const serviceOptions = [
  { value: '', label: 'Selectează serviciul dorit' },
  { value: 'consultatie-generala', label: 'Consultație Generală' },
  { value: 'igienizare', label: 'Igienizare Dentară' },
  { value: 'albire', label: 'Albire Dentară' },
  { value: 'implant', label: 'Implant Dentar' },
  { value: 'ortodontie', label: 'Ortodonție' },
  { value: 'estetica', label: 'Stomatologie Estetică' },
  { value: 'urgenta', label: 'Urgență Dentară' },
];

// Time slot options
export const timeSlotOptions = [
  { value: '', label: 'Selectează ora' },
  { value: '09:00', label: '09:00' },
  { value: '10:00', label: '10:00' },
  { value: '11:00', label: '11:00' },
  { value: '12:00', label: '12:00' },
  { value: '13:00', label: '13:00' },
  { value: '14:00', label: '14:00' },
  { value: '15:00', label: '15:00' },
  { value: '16:00', label: '16:00' },
  { value: '17:00', label: '17:00' },
  { value: '18:00', label: '18:00' },
];

// Helper function to format phone number for display
export const formatPhoneNumber = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.startsWith('40')) {
    return `+${cleaned.slice(0, 2)} ${cleaned.slice(2, 5)} ${cleaned.slice(5, 8)} ${cleaned.slice(8)}`;
  }
  if (cleaned.startsWith('0')) {
    return `${cleaned.slice(0, 4)} ${cleaned.slice(4, 7)} ${cleaned.slice(7)}`;
  }
  return phone;
};
