import React, { useState } from 'react';

interface CommunityPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const CommunityPopup: React.FC<CommunityPopupProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [errors, setErrors] = useState<{ email?: string; mobile?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateMobile = (mobile: string) => {
    // Checks for exactly 10 digits
    return /^\d{10}$/.test(mobile);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { email?: string; mobile?: string } = {};

    if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!validateMobile(mobile)) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLScQYmvbrLtY8kRPc0BJnGO5wrV6x5aZofy_Suw74AXcKKJe1w/formResponse";
    const ENTRY_NAME = "entry.454204948";
    const ENTRY_EMAIL = "entry.1514794716";
    const ENTRY_MOBILE = "entry.59306763";

    const formData = new FormData();
    formData.append(ENTRY_NAME, name);
    formData.append(ENTRY_EMAIL, email);
    formData.append(ENTRY_MOBILE, mobile);

    try {
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formData
      });
      
      setIsSubmitted(true);
      
      // Close popup automatically after seeing success message
      setTimeout(() => {
        onClose();
        // Reset form for next time (if any)
        setTimeout(() => {
            setIsSubmitted(false);
            setName('');
            setEmail('');
            setMobile('');
        }, 500); 
      }, 3000);

    } catch (error) {
      console.error("Form submission error:", error);
      // In a real app, set a global error state here
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-ink/20 backdrop-blur-sm transition-opacity duration-500"
        onClick={onClose}
      ></div>

      {/* Modal Card */}
      <div className="relative bg-paper w-full max-w-md p-8 md:p-12 shadow-2xl border border-ink/10 transform transition-all duration-500 animate-[float_6s_ease-in-out_infinite]">
        {/* Paper Texture Overlay for consistency */}
        <div className="absolute inset-0 bg-paper-texture opacity-50 pointer-events-none mix-blend-multiply"></div>
        
        {/* Content */}
        <div className="relative z-10 min-h-[400px] flex flex-col justify-center">
            <button 
                onClick={onClose}
                className="absolute -top-4 -right-4 md:-top-6 md:-right-6 text-ink/40 hover:text-alta transition-colors font-serif text-2xl p-2 z-50"
                aria-label="Close"
            >
            &times;
            </button>

            {isSubmitted ? (
                <div className="text-center animate-pulse">
                    <span className="font-hand text-4xl text-alta block mb-4">Thank you</span>
                    <h2 className="text-2xl font-serif italic text-ink mb-2">Welcome to the family.</h2>
                    <p className="text-xs uppercase tracking-widest opacity-50 mt-4">We'll be in touch soon.</p>
                </div>
            ) : (
                <>
                    <div className="text-center mb-10">
                        <span className="font-hand text-2xl text-alta block mb-2 transform -rotate-2">Write with us</span>
                        <h2 className="text-3xl md:text-4xl font-serif italic text-ink tracking-tight">Join the Community</h2>
                        <div className="h-[1px] w-16 bg-ink mx-auto mt-6 opacity-20"></div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="group">
                            <input 
                            type="text" 
                            placeholder="Your Name" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            disabled={isSubmitting}
                            className="w-full bg-transparent border-b border-ink/20 py-3 text-ink placeholder:text-ink/40 font-serif text-lg outline-none focus:border-alta transition-colors disabled:opacity-50"
                            required 
                            />
                        </div>
                        <div className="group relative">
                            <input 
                            type="email" 
                            placeholder="Email Address" 
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                if (errors.email) setErrors({...errors, email: undefined});
                            }}
                            disabled={isSubmitting}
                            className={`w-full bg-transparent border-b py-3 text-ink placeholder:text-ink/40 font-serif text-lg outline-none transition-colors disabled:opacity-50 ${errors.email ? 'border-red-800/60' : 'border-ink/20 focus:border-alta'}`}
                            required 
                            />
                            {errors.email && (
                                <span className="absolute right-0 bottom-3 text-[10px] text-red-800 tracking-widest uppercase opacity-80">{errors.email}</span>
                            )}
                        </div>
                        <div className="group relative">
                            <input 
                            type="tel" 
                            placeholder="Mobile Number" 
                            value={mobile}
                            onChange={(e) => {
                                // Allow only numbers to be typed
                                const val = e.target.value.replace(/\D/g, '');
                                setMobile(val);
                                if (errors.mobile) setErrors({...errors, mobile: undefined});
                            }}
                            disabled={isSubmitting}
                            maxLength={10}
                            className={`w-full bg-transparent border-b py-3 text-ink placeholder:text-ink/40 font-serif text-lg outline-none transition-colors disabled:opacity-50 ${errors.mobile ? 'border-red-800/60' : 'border-ink/20 focus:border-alta'}`}
                            required 
                            />
                            {errors.mobile && (
                                <span className="absolute right-0 bottom-3 text-[10px] text-red-800 tracking-widest uppercase opacity-80">{errors.mobile}</span>
                            )}
                        </div>

                        <div className="pt-4">
                            <button 
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-ink text-paper py-4 text-xs uppercase tracking-[0.25em] hover:bg-alta transition-colors duration-300 shadow-md disabled:opacity-70 disabled:cursor-wait"
                            >
                            {isSubmitting ? 'Joining...' : 'Join Now'}
                            </button>
                        </div>
                    </form>
                    
                    <p className="text-center text-[10px] text-ink/40 uppercase tracking-widest mt-6">
                        No spam, just stories.
                    </p>
                </>
            )}
        </div>
      </div>
    </div>
  );
};

export default CommunityPopup;
