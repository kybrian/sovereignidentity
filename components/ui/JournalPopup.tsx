"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ButtonPrimary } from "./ButtonPrimary";

export function JournalPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Check if user already saw or closed it (for a real app we'd use localStorage)
      const hasSeen = sessionStorage.getItem("journal-popup-seen");
      if (!hasSeen) {
        setIsOpen(true);
      }
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("journal-popup-seen", "true");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission and redirect
    handleClose();
    // Redirect to the success page instead of opening Facebook right away
    window.location.href = "/contact/success";
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="relative w-full max-w-lg p-8 md:p-12 bg-neutral border-2 border-tertiary shadow-2xl rounded-sm overflow-hidden"
          >
            {/* Cinematic Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-neutral via-neutral to-tertiary/10 pointer-events-none" />

            <button
              onClick={handleClose}
              className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 bg-surface border border-tertiary/30 text-primary hover:text-tertiary hover:border-tertiary transition-colors duration-200 rounded-full z-10"
              aria-label="Close"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            <div className="relative z-10 text-center space-y-6">
              <div className="space-y-2 pr-4">
                <p className="font-body text-label uppercase tracking-[0.16em] text-tertiary">
                  The Sovereign Identity Journal™
                </p>
                <h2 className="font-display text-[1.75rem] md:text-[2rem] leading-tight font-medium text-primary">
                  The Official Publication of The House
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 pt-4 text-left">
                <div className="space-y-4">
                  <input 
                    type="email" 
                    required 
                    placeholder="Enter Your Email" 
                    className="w-full px-4 py-3 bg-surface border border-tertiary/30 text-primary placeholder:text-secondary/40 focus:outline-none focus:border-tertiary rounded-sm font-body"
                  />
                </div>
                <ButtonPrimary type="submit" className="w-full justify-center">
                  Get the Journal
                </ButtonPrimary>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
