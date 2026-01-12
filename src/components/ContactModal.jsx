import { useState } from "react";

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact: ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:beatrizncruz@gmail.com?subject=${subject}&body=${body}`;
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-md bg-neutral-900/95 border border-white/10
                   rounded-2xl p-8 shadow-2xl animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/50 hover:text-white
                     transition-colors duration-300"
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-serif text-white mb-2">
          <span className="text-mint">/</span>get in touch
        </h2>
        <p className="text-white/50 text-sm mb-8">
          Let's create something beautiful together.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-transparent border border-white/20 rounded-full
                         px-5 py-3 text-white placeholder-white/40 text-sm
                         focus:border-mint focus:outline-none transition-colors duration-300"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-transparent border border-white/20 rounded-full
                         px-5 py-3 text-white placeholder-white/40 text-sm
                         focus:border-mint focus:outline-none transition-colors duration-300"
            />
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full bg-transparent border border-white/20 rounded-2xl
                         px-5 py-3 text-white placeholder-white/40 text-sm resize-none
                         focus:border-mint focus:outline-none transition-colors duration-300"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-mint text-neutral-900 font-medium py-3 rounded-full
                       hover:bg-white transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
