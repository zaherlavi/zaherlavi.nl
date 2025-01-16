"use client";

import React, { useState } from "react";
import { Send } from "lucide-react";
import { ContactFormSchema, ContactFormType } from "@/lib/validations/contact";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormType>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<ContactFormType>>({});
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const validateForm = () => {
    console.log("FormData:", formData);
    try {
      ContactFormSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error: any) {
      const formattedErrors: Partial<ContactFormType> = {};
      error.errors.forEach((err: any) => {
        if (err.path[0]) {
          formattedErrors[err.path[0] as keyof ContactFormType] = err.message;
        }
      });
      setErrors(formattedErrors);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError("");

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("Response status:", response.status);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Response data:", data);

      if (data.success) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(data.error || "Failed to send message");
      }
    } catch (err: any) {
      console.error("Submission error:", err);
      setSubmitError(
        err.message || "Failed to send message. Please try again."
      );
      setSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClassName = `
    w-full p-4 rounded-lg 
    bg-purple-900/20
    border border-purple-400/20
    text-white 
    placeholder-gray-400
    transition-all duration-300
    hover:border-purple-400
    focus:outline-none focus:border-purple-400
  `;

  const getInputClassNames = (fieldName: keyof ContactFormType) => `
    ${inputClassName}
    ${errors[fieldName] ? "border-red-400 hover:border-red-400" : ""}
  `;

  return (
    <div className="w-full max-w-xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <div>
          <label htmlFor="name" className="block text-white mb-2 text-lg">
            Name
          </label>
          <input
            id="name"
            type="text"
            className={getInputClassNames("name")}
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
              if (errors.name) setErrors({ ...errors, name: undefined });
            }}
            placeholder="Your name"
          />
          {errors.name && (
            <p className="mt-1 text-red-400 text-sm">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-white mb-2 text-lg">
            Email
          </label>
          <input
            id="email"
            type="email"
            className={getInputClassNames("email")}
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              if (errors.email) setErrors({ ...errors, email: undefined });
            }}
            placeholder="your@email.com"
          />
          {errors.email && (
            <p className="mt-1 text-red-400 text-sm">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-white mb-2 text-lg">
            Message
          </label>
          <textarea
            id="message"
            className={`${getInputClassNames("message")} h-40 resize-none`}
            value={formData.message}
            onChange={(e) => {
              setFormData({ ...formData, message: e.target.value });
              if (errors.message) setErrors({ ...errors, message: undefined });
            }}
            placeholder="Your message..."
          />
          {errors.message && (
            <p className="mt-1 text-red-400 text-sm">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="
            w-full p-4 rounded-lg 
            bg-purple-500
            text-white text-lg font-medium
            transition-all duration-300
            hover:bg-purple-600
            flex items-center justify-center gap-2
            disabled:opacity-50 disabled:cursor-not-allowed
          "
        >
          {isSubmitting ? (
            <>
              <span className="animate-pulse">Sending...</span>
              <Send size={20} className="animate-bounce" />
            </>
          ) : (
            <>
              Send Message
              <Send size={20} />
            </>
          )}
        </button>
      </form>

      <div className="mt-6 space-y-4">
        {submitError && (
          <div className="text-red-400 text-center p-3 bg-red-400/10 rounded-lg">
            {submitError}
          </div>
        )}
        {success && (
          <div className="text-green-400 text-center p-3 bg-green-400/10 rounded-lg">
            Message sent successfully! We'll get back to you soon.
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
