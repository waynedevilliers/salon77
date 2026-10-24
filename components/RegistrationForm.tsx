'use client';

import { useState } from 'react';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    address: '',
    email: '',
    phone: '',
    squareMeters: '',
    description: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Handle form submission (send to email or API)
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4" style={{ color: '#C9A961' }}>
          Anmeldung erhalten!
        </h2>
        <p className="text-lg" style={{ color: '#666666' }}>
          Vielen Dank für deine Anmeldung. Wir werden dich in Kürze kontaktieren.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-8" style={{ color: '#C9A961' }}>
        Anmeldung Klein-Montmartre
      </h2>

      <div className="space-y-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-semibold mb-2" style={{ color: '#2c2c2c' }}>
            Vorname
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2"
            style={{ focusRingColor: '#B9BCB5' }}
          />
        </div>

        {/* Surname */}
        <div>
          <label className="block text-sm font-semibold mb-2" style={{ color: '#2c2c2c' }}>
            Nachname
          </label>
          <input
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2"
          />
        </div>

        {/* Address */}
        <div>
          <label className="block text-sm font-semibold mb-2" style={{ color: '#2c2c2c' }}>
            Adresse
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold mb-2" style={{ color: '#2c2c2c' }}>
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-semibold mb-2" style={{ color: '#2c2c2c' }}>
            Handy / Telefon
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2"
          />
        </div>

        {/* Square Meters */}
        <div>
          <label className="block text-sm font-semibold mb-2" style={{ color: '#2c2c2c' }}>
            Benötigte Fläche (Quadratmeter)
          </label>
          <input
            type="number"
            name="squareMeters"
            value={formData.squareMeters}
            onChange={handleChange}
            required
            min="1"
            step="0.5"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-semibold mb-2" style={{ color: '#2c2c2c' }}>
            Was möchtest du präsentieren oder verkaufen?
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 rounded-md font-semibold text-white transition-all"
          style={{ backgroundColor: '#B9BCB5' }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          Anmeldung absenden
        </button>
      </div>
    </form>
  );
}
