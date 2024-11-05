import nodemailer from "nodemailer";

export const transporterConfig = nodemailer.createTransport({
  service: 'gmail',
  host: process.env.EMAIL_HOST,
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.EMAIL_SENDER,
    pass: process.env.EMAIL_PASSWORD,
  },
});