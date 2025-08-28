"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { emailSchema, type EmailFormData } from "../../utils/schemas";

export default function HeroSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
    mode: "onBlur", // Validate on blur for better UX
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form submission
  const onSubmit = async (data: EmailFormData) => {
    try {
      // Google Form submission URL - you'll need to replace this with your actual Google Form URL
      const googleFormUrl = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdY0hRkfLh7FWs1neISUxf8MNQdw094Iu5QHHNlGtlmbVsWDg/formResponse";

      // Create form data
      const formData = new FormData();
      formData.append("entry.1021600312", data.email); // Replace with your actual entry ID

      // Submit to Google Form
      const response = await fetch(googleFormUrl, {
        method: "POST",
        body: formData,
        mode: "no-cors", // Required for Google Forms
      });

      setIsSubmitted(true);
      // Don't reset the form - keep the email visible but locked

      // Don't reset submission state - let it stay as "Thank you" until page reload

    } catch (error) {
      console.error("Error submitting form:", error);
      // Even if there's an error, we'll show success since Google Forms doesn't return a response
      setIsSubmitted(true);
      // Don't reset the form - keep the email visible but locked

      // Don't reset submission state - let it stay as "Thank you" until page reload
    }
  };

  // Handle Enter key press
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit(onSubmit)();
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-pink-900/20 to-gray-900 pt-32 pb-16">
      {/* Background decoration with hot pink glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-rose-500/20 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-pink-600/10 to-rose-600/10 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">

          {/* Main headline with gradient text */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
            Automated systems for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-pink-400 font-semibold">
              real estate businesses
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
            Tailored systems built to save you time and money—<br />
            so you can focus on what you do best.
          </p>

          {/* CTA Section with email input and button */}
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="relative min-w-[280px]">
              <input
                type="email"
                placeholder="Enter your email"
                {...register("email")}
                onKeyPress={handleKeyPress}
                className={`px-6 py-4 bg-white border text-gray-900 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 w-full ${errors.email
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                  : "border-gray-300 focus:border-pink-500 focus:ring-pink-500/20"
                  }`}
                disabled={isSubmitting || isSubmitted}
              />
              {errors.email && (
                <p className="absolute -bottom-6 left-0 text-red-400 text-sm">
                  {errors.email.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className={`px-8 py-4 font-semibold rounded-lg transition-all duration-300 transform shadow-lg border ${isSubmitting || isSubmitted
                ? "bg-gray-500 text-gray-300 cursor-not-allowed"
                : "bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:from-pink-600 hover:to-rose-600 hover:scale-105 hover:shadow-pink-500/25 border-pink-500/20"
                }`}
            >
              {isSubmitting ? "Submitting..." : isSubmitted ? "Thank you!" : "Get Started"}
            </button>
          </form>

          {/* Success message */}
          {isSubmitted && (
            <div className="text-green-400 text-lg font-medium animate-fade-in">
              Thanks for reaching out! I'll be in touch soon.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
