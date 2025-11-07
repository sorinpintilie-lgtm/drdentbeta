import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';
import {
  appointmentFormSchema,
  AppointmentFormData,
  serviceOptions,
  timeSlotOptions,
} from '../../utils/validation';
import {
  Input,
  Select,
  Textarea,
  DatePicker,
  FormField,
  Button,
} from '../ui';

type SubmissionStatus = 'idle' | 'loading' | 'success' | 'error';

export const AppointmentForm: React.FC = () => {
  const [submissionStatus, setSubmissionStatus] = useState<SubmissionStatus>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentFormSchema),
    mode: 'onBlur',
  });

  const onSubmit = async (data: AppointmentFormData) => {
    setSubmissionStatus('loading');

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Log form data (in production, this would be sent to an API)
      console.log('Appointment form submitted:', data);

      setSubmissionStatus('success');
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmissionStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmissionStatus('error');

      // Reset error message after 5 seconds
      setTimeout(() => {
        setSubmissionStatus('idle');
      }, 5000);
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
        {/* Full Name */}
        <FormField
          label="Nume Complet"
          error={errors.fullName?.message}
          required
          htmlFor="fullName"
        >
          <Input
            id="fullName"
            type="text"
            placeholder="Ion Popescu"
            error={!!errors.fullName}
            disabled={isSubmitting}
            autoComplete="name"
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            }
            {...register('fullName')}
          />
        </FormField>

        {/* Email */}
        <FormField
          label="Email"
          error={errors.email?.message}
          required
          htmlFor="email"
        >
          <Input
            id="email"
            type="email"
            placeholder="ion.popescu@email.com"
            error={!!errors.email}
            disabled={isSubmitting}
            autoComplete="email"
            inputMode="email"
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            }
            {...register('email')}
          />
        </FormField>

        {/* Phone */}
        <FormField
          label="Telefon"
          error={errors.phone?.message}
          required
          htmlFor="phone"
        >
          <Input
            id="phone"
            type="tel"
            placeholder="+40 XXX XXX XXX"
            error={!!errors.phone}
            disabled={isSubmitting}
            autoComplete="tel"
            inputMode="tel"
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            }
            {...register('phone')}
          />
        </FormField>

        {/* Service */}
        <FormField
          label="Serviciu Dorit"
          error={errors.service?.message}
          required
          htmlFor="service"
        >
          <Select
            id="service"
            options={serviceOptions}
            error={!!errors.service}
            disabled={isSubmitting}
            {...register('service')}
          />
        </FormField>

        {/* Date and Time - Grid layout on larger screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Preferred Date */}
          <FormField
            label="Data Preferată"
            error={errors.preferredDate?.message}
            required
            htmlFor="preferredDate"
          >
            <DatePicker
              id="preferredDate"
              error={!!errors.preferredDate}
              disabled={isSubmitting}
              {...register('preferredDate')}
            />
          </FormField>

          {/* Preferred Time */}
          <FormField
            label="Ora Preferată"
            error={errors.preferredTime?.message}
            required
            htmlFor="preferredTime"
          >
            <Select
              id="preferredTime"
              options={timeSlotOptions}
              error={!!errors.preferredTime}
              disabled={isSubmitting}
              {...register('preferredTime')}
            />
          </FormField>
        </div>

        {/* Message */}
        <FormField
          label="Mesaj (opțional)"
          error={errors.message?.message}
          htmlFor="message"
        >
          <Textarea
            id="message"
            placeholder="Detalii suplimentare despre programare..."
            error={!!errors.message}
            disabled={isSubmitting}
            rows={4}
            maxLength={500}
            {...register('message')}
          />
        </FormField>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg
                className="animate-spin h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Se trimite...
            </span>
          ) : (
            'Trimite Programarea'
          )}
        </Button>
      </form>

      {/* Success/Error Messages */}
      <AnimatePresence>
        {submissionStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg"
            role="alert"
            aria-live="polite"
          >
            <div className="flex items-start gap-3">
              <svg
                className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <h3 className="font-semibold text-green-900">Programare trimisă cu succes!</h3>
                <p className="text-sm text-green-700 mt-1">
                  Vă vom contacta în cel mai scurt timp pentru a confirma programarea.
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {submissionStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg"
            role="alert"
            aria-live="polite"
          >
            <div className="flex items-start gap-3">
              <svg
                className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <h3 className="font-semibold text-red-900">Eroare la trimiterea programării</h3>
                <p className="text-sm text-red-700 mt-1">
                  Vă rugăm să încercați din nou sau să ne contactați telefonic.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
