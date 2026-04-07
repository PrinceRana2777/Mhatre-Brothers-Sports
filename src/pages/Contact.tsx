import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Contact() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    requirement: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNext = () => setStep((s) => s + 1);
  const handleBack = () => setStep((s) => s - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl uppercase">
            GET IN <span className="text-primary">TOUCH</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60">
            Have a question or need a custom quote? We're here to help you gear up.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="rounded-3xl bg-surface p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin size={24} />
                </div>
                <h3 className="mb-2 text-xl font-bold">Visit Us</h3>
                <p className="text-sm text-white/60">Chandrapada Road, Opp. Arihant Jewellers, Naigaon East, Vasai-Virar, Maharashtra</p>
              </div>
              <div className="rounded-3xl bg-surface p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Phone size={24} />
                </div>
                <h3 className="mb-2 text-xl font-bold">Call Us</h3>
                <p className="text-sm text-white/60">+91 8976278477</p>
              </div>
              <div className="rounded-3xl bg-surface p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Mail size={24} />
                </div>
                <h3 className="mb-2 text-xl font-bold">Email Us</h3>
                <p className="text-sm text-white/60">info@mhatresports.com</p>
              </div>
              <div className="rounded-3xl bg-surface p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Clock size={24} />
                </div>
                <h3 className="mb-2 text-xl font-bold">Open Hours</h3>
                <p className="text-sm text-white/60">Mon - Sat: 10 AM - 9 PM<br />Sun: 10 AM - 2 PM</p>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="h-[300px] w-full overflow-hidden rounded-3xl bg-surface shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.543210987654!2d72.84321098765432!3d19.34321098765432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDIwJzM1LjYiTiA3MsKwNTAnMzUuNiJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              />
            </div>
          </motion.div>

          {/* Multi-step Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl bg-surface p-8 shadow-2xl lg:p-12"
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <div className="mb-12 flex items-center justify-between">
                    <h2 className="text-3xl font-bold uppercase tracking-tight">SEND A <span className="text-primary">MESSAGE</span></h2>
                    <div className="flex space-x-2">
                      {[1, 2, 3].map((s) => (
                        <div
                          key={s}
                          className={cn(
                            'h-2 w-8 rounded-full transition-all duration-300',
                            step >= s ? 'bg-primary' : 'bg-white/10'
                          )}
                        />
                      ))}
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    {step === 1 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                      >
                        <div>
                          <label className="mb-2 block text-sm font-bold uppercase tracking-widest text-white/40">Full Name</label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full rounded-2xl bg-background px-6 py-4 text-white outline-none ring-primary/20 transition-all focus:ring-2"
                            placeholder="John Doe"
                          />
                        </div>
                        <button
                          type="button"
                          onClick={handleNext}
                          disabled={!formData.name}
                          className="flex w-full items-center justify-center space-x-3 rounded-full bg-primary py-5 text-lg font-bold text-background transition-all hover:scale-105 disabled:opacity-50"
                        >
                          <span>NEXT STEP</span>
                          <ArrowRight size={20} />
                        </button>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                      >
                        <div>
                          <label className="mb-2 block text-sm font-bold uppercase tracking-widest text-white/40">Phone Number</label>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full rounded-2xl bg-background px-6 py-4 text-white outline-none ring-primary/20 transition-all focus:ring-2"
                            placeholder="+91 89762 78477"
                          />
                        </div>
                        <div className="flex space-x-4">
                          <button
                            type="button"
                            onClick={handleBack}
                            className="flex h-16 w-16 items-center justify-center rounded-full bg-white/5 text-white transition-colors hover:bg-white/10"
                          >
                            <ArrowLeft size={24} />
                          </button>
                          <button
                            type="button"
                            onClick={handleNext}
                            disabled={!formData.phone}
                            className="flex flex-grow items-center justify-center space-x-3 rounded-full bg-primary py-5 text-lg font-bold text-background transition-all hover:scale-105 disabled:opacity-50"
                          >
                            <span>NEXT STEP</span>
                            <ArrowRight size={20} />
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                      >
                        <div>
                          <label className="mb-2 block text-sm font-bold uppercase tracking-widest text-white/40">Your Requirement</label>
                          <textarea
                            required
                            rows={4}
                            value={formData.requirement}
                            onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                            className="w-full rounded-2xl bg-background px-6 py-4 text-white outline-none ring-primary/20 transition-all focus:ring-2"
                            placeholder="Tell us what you're looking for..."
                          />
                        </div>
                        <div className="flex space-x-4">
                          <button
                            type="button"
                            onClick={handleBack}
                            className="flex h-16 w-16 items-center justify-center rounded-full bg-white/5 text-white transition-colors hover:bg-white/10"
                          >
                            <ArrowLeft size={24} />
                          </button>
                          <button
                            type="submit"
                            disabled={!formData.requirement}
                            className="flex flex-grow items-center justify-center space-x-3 rounded-full bg-primary py-5 text-lg font-bold text-background transition-all hover:scale-105 disabled:opacity-50"
                          >
                            <span>SUBMIT MESSAGE</span>
                            <Send size={20} />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <CheckCircle size={64} />
                  </div>
                  <h2 className="mb-4 text-4xl font-bold uppercase tracking-tight">MESSAGE <span className="text-primary">SENT!</span></h2>
                  <p className="mb-10 text-lg text-white/60">Thank you, {formData.name}. We've received your requirement and will get back to you shortly.</p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setStep(1);
                      setFormData({ name: '', phone: '', requirement: '' });
                    }}
                    className="rounded-full bg-white px-8 py-4 font-bold text-background transition-transform hover:scale-105"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
