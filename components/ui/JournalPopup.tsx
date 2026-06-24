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
    // In a real app this would submit to the backend then redirect.
    window.open("https://facebook.com/groups/sovereign-identity", "_blank");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-full max-w-lg p-6 md:p-10 bg-neutral border border-secondary/20 shadow-2xl rounded-sm"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-secondary/60 hover:text-primary transition-colors"
              aria-label="Close"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            <div className="text-center space-y-6">
              <div className="space-y-2">
                <p className="font-body text-label uppercase tracking-[0.16em] text-tertiary">
                  The Official Publication
                </p>
                <h2 className="font-display text-[2rem] leading-tight font-medium text-primary">
                  Get The Sovereign Identity Journal™ — Free.
                </h2>
              </div>
              
              <p className="font-body text-body text-secondary max-w-sm mx-auto">
                A publication for high-capacity individuals returning to themselves.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 pt-4 text-left">
                <div className="space-y-4">
                  <input 
                    type="text" 
                    required 
                    placeholder="Your Name" 
                    className="w-full px-4 py-3 bg-surface border border-secondary/20 text-primary placeholder:text-secondary/40 focus:outline-none focus:border-tertiary rounded-sm font-body"
                  />
                  <input 
                    type="email" 
                    required 
                    placeholder="Your Email" 
                    className="w-full px-4 py-3 bg-surface border border-secondary/20 text-primary placeholder:text-secondary/40 focus:outline-none focus:border-tertiary rounded-sm font-body"
                  />
                </div>
                <ButtonPrimary type="submit" className="w-full justify-center">
                  Subscribe & Enter Community
                </ButtonPrimary>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
