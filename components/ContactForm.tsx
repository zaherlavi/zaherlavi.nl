'use client';

import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    
    try {
      console.log('Form submitted:', formData);
    } catch (err) {
      setError('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      {error && (
        <div className="text-red-400 mb-4 text-center">{error}</div>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-white mb-2 text-lg">Name</label>
          <input
            type="text"
            className="w-full p-4 rounded-lg bg-purple-900/50 border border-purple-500/50 focus:border-purple-400 focus:ring-2 focus:ring-purple-400 focus:outline-none text-white"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-white mb-2 text-lg">Email</label>
          <input
            type="email"
            className="w-full p-4 rounded-lg bg-purple-900/50 border border-purple-500/50 focus:border-purple-400 focus:ring-2 focus:ring-purple-400 focus:outline-none text-white"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label className="block text-white mb-2 text-lg">Message</label>
          <textarea
            className="w-full p-4 rounded-lg bg-purple-900/50 border border-purple-500/50 focus:border-purple-400 focus:ring-2 focus:ring-purple-400 focus:outline-none text-white h-40"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            required
            placeholder="Your message..."
          />
        </div>
        <button
          type="submit"
          className="w-full p-4 rounded-lg bg-purple-600 hover:bg-purple-700 transition-colors flex items-center justify-center gap-2 text-white text-lg"
        >
          Send Message
          <Send size={20} />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;