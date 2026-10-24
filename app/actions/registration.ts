'use server';

import nodemailer from 'nodemailer';

interface RegistrationData {
  name: string;
  surname: string;
  address: string;
  email: string;
  phone: string;
  squareMeters: string;
  description: string;
}

export async function submitRegistration(data: RegistrationData) {
  // Configure your email service here
  // Replace with your actual email configuration
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: process.env.EMAIL_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const emailContent = `
    <h2>Neue Klein-Montmartre Anmeldung</h2>
    <p><strong>Name:</strong> ${data.name} ${data.surname}</p>
    <p><strong>Adresse:</strong> ${data.address}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Telefon:</strong> ${data.phone}</p>
    <p><strong>Benötigte Fläche:</strong> ${data.squareMeters} m²</p>
    <p><strong>Beschreibung:</strong></p>
    <p>${data.description.replace(/\n/g, '<br>')}</p>
  `;

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.REGISTRATION_EMAIL, // The email address to receive registrations
      subject: 'Neue Klein-Montmartre Anmeldung',
      html: emailContent,
      replyTo: data.email,
    });

    return { success: true, message: 'Anmeldung erfolgreich versendet' };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, message: 'Fehler beim Versenden der Anmeldung' };
  }
}
