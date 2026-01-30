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

// Service options for dropdown
export const serviceOptions = [
  { value: 'consultatie', label: 'Consultație dentară' },
  { value: 'detartraj', label: 'Detartraj profesional' },
  { value: 'facete', label: 'Fațete ceramice' },
  { value: 'albire', label: 'Albire profesională' },
  { value: 'implant', label: 'Implant dentar' },
  { value: 'invisalign', label: 'Invisalign' },
  { value: 'pedodontie', label: 'Stomatologie pediatrică' },
] as const;

// Ensure the schema accepts these exact values
export const appointmentFormSchema = z.object({
  fullName: z.string().min(3, 'Numele trebuie să aibă cel puțin 3 caractere'),
  email: z.string().email('Email invalid'),
  phone: z.string().regex(/^(\+40|0)7[0-9]{8}$/, 'Număr de telefon invalid'),
  service: z.enum(serviceOptions.map(opt => opt.value) as [string, ...string[]]),
  preferredDate: z.string().min(1, 'Vă rugăm selectați o dată'),
  preferredTime: z.string().min(1, 'Vă rugăm selectați ora'),
  message: z.string().optional(),
});

// Type inference from schema
export type AppointmentFormData = z.infer<typeof appointmentFormSchema>;

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
