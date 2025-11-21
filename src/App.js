import React, { useState, useEffect } from "react";
import {
   Menu,
   X,
   Smartphone,
   Shield,
   Zap,
   CheckCircle,
   Mail,
} from "lucide-react";

const App = () => {
   const [currentPage, setCurrentPage] = useState("home");
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

   // Handle URL routing
   useEffect(() => {
      const path = window.location.pathname;
      if (path === "/contact") {
         setCurrentPage("contact");
      } else if (path === "/privacy-policy") {
         setCurrentPage("privacy");
      } else {
         setCurrentPage("home");
      }
   }, []);

   const navigateTo = (page) => {
      setCurrentPage(page);
      const paths = {
         home: "/",
         contact: "/contact",
         privacy: "/privacy-policy",
      };
      window.history.pushState({}, "", paths[page]);
      window.scrollTo(0, 0);
   };

   // Handle browser back/forward buttons
   useEffect(() => {
      const handlePopState = () => {
         const path = window.location.pathname;
         if (path === "/contact") {
            setCurrentPage("contact");
         } else if (path === "/privacy-policy") {
            setCurrentPage("privacy");
         } else {
            setCurrentPage("home");
         }
      };

      window.addEventListener("popstate", handlePopState);
      return () => window.removeEventListener("popstate", handlePopState);
   }, []);

   // Set page metadata
   useEffect(() => {
      const titles = {
         home: "OLED Burn Care - Protect & Fix Your OLED Screen",
         contact: "Contact Us - OLED Burn Care",
         privacy: "Privacy Policy - OLED Burn Care",
      };

      const descriptions = {
         home: "The ultimate Android app to prevent, detect, and fix OLED screen burn-in. Keep your display pristine with our Scan, Prevention, and Fix modes.",
         contact:
            "Get in touch with the OLED Burn Care team. We're here to help with any questions or feedback.",
         privacy:
            "Read the privacy policy for OLED Burn Care and learn how we protect your data.",
      };

      document.title = titles[currentPage];

      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
         metaDescription = document.createElement("meta");
         metaDescription.name = "description";
         document.head.appendChild(metaDescription);
      }
      metaDescription.content = descriptions[currentPage];
   }, [currentPage]);

   const NavBar = () => (
      <nav className="fixed w-full top-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-sm border-b border-[#1A1A1A]">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
               <button
                  onClick={() => navigateTo("home")}
                  className="flex items-center space-x-2"
               >
                  <Smartphone className="w-8 h-8 text-[#CDFF00]" />
                  <span className="text-xl font-bold text-white">OLED Burn Care</span>
               </button>

               <div className="hidden md:flex space-x-8">
                  <button
                     onClick={() => navigateTo("home")}
                     className={`${currentPage === "home" ? "text-[#CDFF00]" : "text-[#9CA3AF]"} hover:text-[#CDFF00] transition-colors`}
                  >
                     Home
                  </button>
                  <button
                     onClick={() => navigateTo("contact")}
                     className={`${currentPage === "contact" ? "text-[#CDFF00]" : "text-[#9CA3AF]"} hover:text-[#CDFF00] transition-colors`}
                  >
                     Contact
                  </button>
                  <button
                     onClick={() => navigateTo("privacy")}
                     className={`${currentPage === "privacy" ? "text-[#CDFF00]" : "text-[#9CA3AF]"} hover:text-[#CDFF00] transition-colors`}
                  >
                     Privacy Policy
                  </button>
               </div>

               <button
                  className="md:hidden text-white"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
               >
                  {mobileMenuOpen ? (
                     <X className="w-6 h-6" />
                  ) : (
                     <Menu className="w-6 h-6" />
                  )}
               </button>
            </div>
         </div>

         {mobileMenuOpen && (
            <div className="md:hidden bg-[#1A1A1A] border-t border-[#2A2A2A]">
               <div className="px-4 pt-2 pb-4 space-y-2">
                  <button
                     onClick={() => {
                        navigateTo("home");
                        setMobileMenuOpen(false);
                     }}
                     className="block w-full text-left py-2 text-[#9CA3AF] hover:text-[#CDFF00]"
                  >
                     Home
                  </button>
                  <button
                     onClick={() => {
                        navigateTo("contact");
                        setMobileMenuOpen(false);
                     }}
                     className="block w-full text-left py-2 text-[#9CA3AF] hover:text-[#CDFF00]"
                  >
                     Contact
                  </button>
                  <button
                     onClick={() => {
                        navigateTo("privacy");
                        setMobileMenuOpen(false);
                     }}
                     className="block w-full text-left py-2 text-[#9CA3AF] hover:text-[#CDFF00]"
                  >
                     Privacy Policy
                  </button>
               </div>
            </div>
         )}
      </nav>
   );

   const HomePage = () => (
      <div className="min-h-screen bg-[#0A0A0A]">
         {/* Hero Section */}
         <section className="pt-32 pb-20 px-4">
            <div className="max-w-7xl mx-auto text-center">
               <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                  Protect Your <span className="text-[#CDFF00]">OLED Screen</span>
               </h1>
               <p className="text-xl text-[#9CA3AF] mb-8 max-w-3xl mx-auto">
                  The ultimate solution to prevent, detect, and fix OLED screen
                  burn-in on your Android device. Keep your display pristine.
               </p>
               <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#CDFF00] text-[#0A0A0A] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#B8E600] transition-all transform hover:scale-105"
               >
                  Download on Google Play
               </a>
            </div>
         </section>

         {/* What is Screen Burn-in */}
         <section className="py-20 px-4 bg-[#1A1A1A]">
            <div className="max-w-7xl mx-auto">
               <h2 className="text-4xl font-bold text-white mb-12 text-center">
                  What is OLED Screen Burn-in?
               </h2>
               <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                     <p className="text-[#9CA3AF] text-lg mb-6">
                        OLED burn-in occurs when static images displayed for extended
                        periods leave permanent ghost images on your screen. This
                        happens because OLED pixels emit their own light and gradually
                        degrade over time.
                     </p>
                     <p className="text-[#9CA3AF] text-lg mb-6">
                        Common causes include navigation bars, status icons, keyboard
                        layouts, and any UI elements that remain stationary for long
                        periods.
                     </p>
                     <p className="text-[#CDFF00] text-lg font-semibold">
                        But don't worry – OLED Burn Care has you covered!
                     </p>
                  </div>
                  <div className="bg-[#0A0A0A] p-8 rounded-lg border border-[#2A2A2A]">
                     <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                           <CheckCircle className="w-6 h-6 text-[#CDFF00] flex-shrink-0 mt-1" />
                           <div>
                              <h4 className="text-white font-semibold mb-1">
                                 Static UI Elements
                              </h4>
                              <p className="text-[#9CA3AF] text-sm">
                                 Navigation bars and status icons
                              </p>
                           </div>
                        </div>
                        <div className="flex items-start space-x-3">
                           <CheckCircle className="w-6 h-6 text-[#CDFF00] flex-shrink-0 mt-1" />
                           <div>
                              <h4 className="text-white font-semibold mb-1">
                                 Extended Display Time
                              </h4>
                              <p className="text-[#9CA3AF] text-sm">
                                 Prolonged exposure to same content
                              </p>
                           </div>
                        </div>
                        <div className="flex items-start space-x-3">
                           <CheckCircle className="w-6 h-6 text-[#CDFF00] flex-shrink-0 mt-1" />
                           <div>
                              <h4 className="text-white font-semibold mb-1">
                                 High Brightness
                              </h4>
                              <p className="text-[#9CA3AF] text-sm">
                                 Maximum brightness accelerates wear
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Features Section */}
         <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
               <h2 className="text-4xl font-bold text-white mb-16 text-center">
                  Three Powerful Modes
               </h2>
               <div className="grid md:grid-cols-3 gap-8">
                  {/* Scan Mode */}
                  <div className="bg-[#1A1A1A] p-8 rounded-lg border border-[#2A2A2A] hover:border-[#CDFF00] transition-all">
                     <div className="bg-[#CDFF00]/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                        <Smartphone className="w-8 h-8 text-[#CDFF00]" />
                     </div>
                     <h3 className="text-2xl font-bold text-white mb-4">Scan Mode</h3>
                     <p className="text-[#9CA3AF] mb-6">
                        Display static colors across your entire screen to easily
                        identify any existing burn-in patterns or ghost images.
                     </p>
                     <ul className="space-y-3">
                        <li className="flex items-center text-[#9CA3AF]">
                           <CheckCircle className="w-5 h-5 text-[#CDFF00] mr-2" />
                           Multiple color tests
                        </li>
                        <li className="flex items-center text-[#9CA3AF]">
                           <CheckCircle className="w-5 h-5 text-[#CDFF00] mr-2" />
                           Easy burn-in detection
                        </li>
                        <li className="flex items-center text-[#9CA3AF]">
                           <CheckCircle className="w-5 h-5 text-[#CDFF00] mr-2" />
                           Full screen coverage
                        </li>
                     </ul>
                  </div>

                  {/* Prevention Mode */}
                  <div className="bg-[#1A1A1A] p-8 rounded-lg border border-[#2A2A2A] hover:border-[#CDFF00] transition-all">
                     <div className="bg-[#CDFF00]/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                        <Shield className="w-8 h-8 text-[#CDFF00]" />
                     </div>
                     <h3 className="text-2xl font-bold text-white mb-4">
                        Prevention Mode
                     </h3>
                     <p className="text-[#9CA3AF] mb-6">
                        Create custom overlays to display on top of static UI elements,
                        protecting vulnerable areas from permanent burn-in.
                     </p>
                     <ul className="space-y-3">
                        <li className="flex items-center text-[#9CA3AF]">
                           <CheckCircle className="w-5 h-5 text-[#CDFF00] mr-2" />
                           Custom overlay creation
                        </li>
                        <li className="flex items-center text-[#9CA3AF]">
                           <CheckCircle className="w-5 h-5 text-[#CDFF00] mr-2" />
                           Target specific areas
                        </li>
                        <li className="flex items-center text-[#9CA3AF]">
                           <CheckCircle className="w-5 h-5 text-[#CDFF00] mr-2" />
                           Proactive protection
                        </li>
                     </ul>
                  </div>

                  {/* Fix Mode */}
                  <div className="bg-[#1A1A1A] p-8 rounded-lg border border-[#2A2A2A] hover:border-[#CDFF00] transition-all">
                     <div className="bg-[#CDFF00]/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                        <Zap className="w-8 h-8 text-[#CDFF00]" />
                     </div>
                     <h3 className="text-2xl font-bold text-white mb-4">Fix Mode</h3>
                     <p className="text-[#9CA3AF] mb-6">
                        Display rapidly flashing colors with random pixel patterns to
                        help reduce existing burn-in and restore screen uniformity.
                     </p>
                     <ul className="space-y-3">
                        <li className="flex items-center text-[#9CA3AF]">
                           <CheckCircle className="w-5 h-5 text-[#CDFF00] mr-2" />
                           Fast color cycling
                        </li>
                        <li className="flex items-center text-[#9CA3AF]">
                           <CheckCircle className="w-5 h-5 text-[#CDFF00] mr-2" />
                           Random pixel patterns
                        </li>
                        <li className="flex items-center text-[#9CA3AF]">
                           <CheckCircle className="w-5 h-5 text-[#CDFF00] mr-2" />
                           Restore uniformity
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </section>

         {/* How It Works */}
         <section className="py-20 px-4 bg-[#1A1A1A]">
            <div className="max-w-7xl mx-auto">
               <h2 className="text-4xl font-bold text-white mb-16 text-center">
                  How It Works
               </h2>
               <div className="grid md:grid-cols-4 gap-8">
                  <div className="text-center">
                     <div className="bg-[#CDFF00] text-[#0A0A0A] w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                        1
                     </div>
                     <h4 className="text-white font-semibold mb-2">
                        Download & Install
                     </h4>
                     <p className="text-[#9CA3AF] text-sm">
                        Get OLED Burn Care from the Play Store
                     </p>
                  </div>
                  <div className="text-center">
                     <div className="bg-[#CDFF00] text-[#0A0A0A] w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                        2
                     </div>
                     <h4 className="text-white font-semibold mb-2">
                        Scan Your Screen
                     </h4>
                     <p className="text-[#9CA3AF] text-sm">
                        Use Scan Mode to detect any burn-in
                     </p>
                  </div>
                  <div className="text-center">
                     <div className="bg-[#CDFF00] text-[#0A0A0A] w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                        3
                     </div>
                     <h4 className="text-white font-semibold mb-2">Fix or Prevent</h4>
                     <p className="text-[#9CA3AF] text-sm">
                        Choose Fix Mode or Prevention Mode
                     </p>
                  </div>
                  <div className="text-center">
                     <div className="bg-[#CDFF00] text-[#0A0A0A] w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                        4
                     </div>
                     <h4 className="text-white font-semibold mb-2">
                        Enjoy Perfect Display
                     </h4>
                     <p className="text-[#9CA3AF] text-sm">
                        Keep your OLED screen in pristine condition
                     </p>
                  </div>
               </div>
            </div>
         </section>

         {/* CTA Section */}
         <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-[#1A1A1A] to-[#2A2A2A] p-12 rounded-2xl border border-[#CDFF00]/20">
               <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Protect Your Screen?
               </h2>
               <p className="text-xl text-[#9CA3AF] mb-8">
                  Join thousands of users who trust OLED Burn Care to keep their
                  displays perfect.
               </p>
               <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#CDFF00] text-[#0A0A0A] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#B8E600] transition-all transform hover:scale-105"
               >
                  Download Now - It's Free!
               </a>
            </div>
         </section>

         {/* Footer */}
         <footer className="bg-[#1A1A1A] border-t border-[#2A2A2A] py-8 px-4">
            <div className="max-w-7xl mx-auto text-center text-[#9CA3AF]">
               <p>&copy; 2024 OLED Burn Care. All rights reserved.</p>
            </div>
         </footer>
      </div>
   );

   const ContactPage = () => {
      const [localFormData, setLocalFormData] = useState({
         name: "",
         email: "",
         message: "",
      });
      const [localFormSubmitted, setLocalFormSubmitted] = useState(false);
      const [isSubmitting, setIsSubmitting] = useState(false);
      const [submitError, setSubmitError] = useState("");

      const handleLocalFormSubmit = async () => {
         if (
            !localFormData.name ||
            !localFormData.email ||
            !localFormData.message
         ) {
            setSubmitError("Please fill in all fields");
            return;
         }

         setIsSubmitting(true);
         setSubmitError("");

         try {
            // Replace with your Formspree endpoint
            const response = await fetch("https://formspree.io/f/xjkzkdpp", {
               method: "POST",
               headers: {
                  "Content-Type": "application/json",
               },
               body: JSON.stringify({
                  name: localFormData.name,
                  email: localFormData.email,
                  message: localFormData.message,
               }),
            });

            if (response.ok) {
               setLocalFormSubmitted(true);
               setTimeout(() => {
                  setLocalFormSubmitted(false);
                  setLocalFormData({ name: "", email: "", message: "" });
               }, 5000);
            } else {
               setSubmitError("Failed to send message. Please try again.");
            }
         } catch (error) {
            setSubmitError("Network error. Please check your connection.");
         } finally {
            setIsSubmitting(false);
         }
      };

      return (
         <div className="min-h-screen bg-[#0A0A0A] pt-24 px-4 pb-20">
            <div className="max-w-4xl mx-auto">
               <h1 className="text-5xl font-bold text-white mb-6 text-center">
                  Get in Touch
               </h1>
               <p className="text-xl text-[#9CA3AF] mb-12 text-center">
                  Have questions or feedback? We'd love to hear from you.
               </p>

               <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-[#1A1A1A] p-8 rounded-lg border border-[#2A2A2A]">
                     <div className="flex items-start space-x-4 mb-6">
                        <Mail className="w-6 h-6 text-[#CDFF00] flex-shrink-0 mt-1" />
                        <div>
                           <h3 className="text-white font-semibold mb-2">Email Us</h3>
                           <p className="text-[#9CA3AF]">alimakhloufj.apps@gmail.com</p>
                        </div>
                     </div>
                     <div className="flex items-start space-x-4">
                        <Smartphone className="w-6 h-6 text-[#CDFF00] flex-shrink-0 mt-1" />
                        <div>
                           <h3 className="text-white font-semibold mb-2">Support</h3>
                           <p className="text-[#9CA3AF]">
                              We typically respond within 24 hours
                           </p>
                        </div>
                     </div>
                  </div>

                  <div className="bg-[#1A1A1A] p-8 rounded-lg border border-[#2A2A2A]">
                     <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                     <ul className="space-y-3">
                        <li>
                           <a
                              href="https://play.google.com/store"
                              className="text-[#CDFF00] hover:text-[#B8E600] transition-colors"
                           >
                              Download on Google Play →
                           </a>
                        </li>
                        <li>
                           <button
                              onClick={() => navigateTo("privacy")}
                              className="text-[#CDFF00] hover:text-[#B8E600] transition-colors"
                           >
                              Privacy Policy →
                           </button>
                        </li>
                     </ul>
                  </div>
               </div>

               <div className="bg-[#1A1A1A] p-8 rounded-lg border border-[#2A2A2A]">
                  <h2 className="text-2xl font-bold text-white mb-6">
                     Send Us a Message
                  </h2>

                  {localFormSubmitted ? (
                     <div className="bg-[#CDFF00]/10 border border-[#CDFF00] rounded-lg p-6 text-center">
                        <CheckCircle className="w-12 h-12 text-[#CDFF00] mx-auto mb-4" />
                        <h3 className="text-white font-semibold text-xl mb-2">
                           Message Sent!
                        </h3>
                        <p className="text-[#9CA3AF]">
                           We'll get back to you as soon as possible.
                        </p>
                     </div>
                  ) : (
                     <div className="space-y-6">
                        {submitError && (
                           <div className="bg-red-500/10 border border-red-500 rounded-lg p-4 text-red-400">
                              {submitError}
                           </div>
                        )}

                        <div>
                           <label className="block text-white font-semibold mb-2">
                              Name
                           </label>
                           <input
                              type="text"
                              value={localFormData.name}
                              onChange={(e) =>
                                 setLocalFormData({
                                    ...localFormData,
                                    name: e.target.value,
                                 })
                              }
                              className="w-full bg-[#0A0A0A] border border-[#2A2A2A] rounded-lg px-4 py-3 text-white focus:border-[#CDFF00] focus:outline-none transition-colors"
                              placeholder="Your name"
                              disabled={isSubmitting}
                           />
                        </div>

                        <div>
                           <label className="block text-white font-semibold mb-2">
                              Email
                           </label>
                           <input
                              type="email"
                              value={localFormData.email}
                              onChange={(e) =>
                                 setLocalFormData({
                                    ...localFormData,
                                    email: e.target.value,
                                 })
                              }
                              className="w-full bg-[#0A0A0A] border border-[#2A2A2A] rounded-lg px-4 py-3 text-white focus:border-[#CDFF00] focus:outline-none transition-colors"
                              placeholder="your.email@example.com"
                              disabled={isSubmitting}
                           />
                        </div>

                        <div>
                           <label className="block text-white font-semibold mb-2">
                              Message
                           </label>
                           <textarea
                              value={localFormData.message}
                              onChange={(e) =>
                                 setLocalFormData({
                                    ...localFormData,
                                    message: e.target.value,
                                 })
                              }
                              rows="6"
                              className="w-full bg-[#0A0A0A] border border-[#2A2A2A] rounded-lg px-4 py-3 text-white focus:border-[#CDFF00] focus:outline-none transition-colors resize-none"
                              placeholder="How can we help you?"
                              disabled={isSubmitting}
                           />
                        </div>

                        <button
                           onClick={handleLocalFormSubmit}
                           disabled={isSubmitting}
                           className="w-full bg-[#CDFF00] text-[#0A0A0A] px-6 py-4 rounded-lg font-bold text-lg hover:bg-[#B8E600] transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                        >
                           {isSubmitting ? "Sending..." : "Send Message"}
                        </button>
                     </div>
                  )}
               </div>
            </div>
         </div>
      );
   };

   const PrivacyPage = () => (
      <div className="min-h-screen bg-[#0A0A0A] pt-24 px-4 pb-20">
         <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-white mb-6">Privacy Policy</h1>
            <p className="text-[#9CA3AF] mb-8">Last updated: November 21, 2025</p>

            <div className="bg-[#1A1A1A] p-8 rounded-lg border border-[#2A2A2A]">
               <div className="prose prose-invert max-w-none">
                  <div className="text-[#9CA3AF] leading-relaxed space-y-6">
                     <p>
                        This Privacy Policy describes Our policies and procedures on the
                        collection, use and disclosure of Your information when You use
                        the Service and tells You about Your privacy rights and how the
                        law protects You.
                     </p>

                     <p>
                        We use Your Personal data to provide and improve the Service. By
                        using the Service, You agree to the collection and use of
                        information in accordance with this Privacy Policy.
                     </p>

                     <h2 className="text-2xl font-bold text-[#CDFF00] mt-8 mb-4">
                        Interpretation and Definitions
                     </h2>

                     <h3 className="text-xl font-semibold text-white mt-6 mb-3">
                        Interpretation
                     </h3>
                     <p>
                        The words whose initial letters are capitalized have meanings
                        defined under the following conditions. The following
                        definitions shall have the same meaning regardless of whether
                        they appear in singular or in plural.
                     </p>

                     <h3 className="text-xl font-semibold text-white mt-6 mb-3">
                        Definitions
                     </h3>
                     <p>For the purposes of this Privacy Policy:</p>

                     <ul className="list-disc ml-6 space-y-2">
                        <li>
                           <strong className="text-white">Account</strong> means a unique
                           account created for You to access our Service or parts of our
                           Service.
                        </li>
                        <li>
                           <strong className="text-white">Affiliate</strong> means an
                           entity that controls, is controlled by, or is under common
                           control with a party, where "control" means ownership of 50%
                           or more of the shares, equity interest or other securities
                           entitled to vote for election of directors or other managing
                           authority.
                        </li>
                        <li>
                           <strong className="text-white">Application</strong> refers to
                           OLED Burn Care, the software program provided by the Company.
                        </li>
                        <li>
                           <strong className="text-white">Company</strong> (referred to
                           as either "the Company", "We", "Us" or "Our" in this
                           Agreement) refers to OLED Burn Care.
                        </li>
                        <li>
                           <strong className="text-white">Cookies</strong> are small
                           files that are placed on Your computer, mobile device or any
                           other device by a website, containing the details of Your
                           browsing history on that website among its many uses.
                        </li>
                        <li>
                           <strong className="text-white">Country</strong> refers to:
                           Palestinian Territories
                        </li>
                        <li>
                           <strong className="text-white">Device</strong> means any
                           device that can access the Service such as a computer, a cell
                           phone or a digital tablet.
                        </li>
                        <li>
                           <strong className="text-white">Personal Data</strong> is any
                           information that relates to an identified or identifiable
                           individual.
                        </li>
                        <li>
                           <strong className="text-white">Service</strong> refers to the
                           Application or the Website or both.
                        </li>
                        <li>
                           <strong className="text-white">Service Provider</strong> means
                           any natural or legal person who processes the data on behalf
                           of the Company. It refers to third-party companies or
                           individuals employed by the Company to facilitate the Service,
                           to provide the Service on behalf of the Company, to perform
                           services related to the Service or to assist the Company in
                           analyzing how the Service is used.
                        </li>
                        <li>
                           <strong className="text-white">Usage Data</strong> refers to
                           data collected automatically, either generated by the use of
                           the Service or from the Service infrastructure itself (for
                           example, the duration of a page visit).
                        </li>
                        <li>
                           <strong className="text-white">Website</strong> refers to OLED
                           Burn Care, accessible from http://www.oledburncare.com
                        </li>
                        <li>
                           <strong className="text-white">You</strong> means the
                           individual accessing or using the Service, or the company, or
                           other legal entity on behalf of which such individual is
                           accessing or using the Service, as applicable.
                        </li>
                     </ul>

                     <h2 className="text-2xl font-bold text-[#CDFF00] mt-8 mb-4">
                        Collecting and Using Your Personal Data
                     </h2>

                     <h3 className="text-xl font-semibold text-white mt-6 mb-3">
                        Types of Data Collected
                     </h3>

                     <h4 className="text-lg font-semibold text-white mt-4 mb-2">
                        Personal Data
                     </h4>
                     <p>
                        While using Our Service, We may ask You to provide Us with
                        certain personally identifiable information that can be used to
                        contact or identify You. Personally identifiable information may
                        include, but is not limited to:
                     </p>
                     <ul className="list-disc ml-6 space-y-2">
                        <li>Usage Data</li>
                     </ul>

                     <h4 className="text-lg font-semibold text-white mt-4 mb-2">
                        Usage Data
                     </h4>
                     <p>
                        Usage Data is collected automatically when using the Service.
                     </p>
                     <p>
                        Usage Data may include information such as Your Device's
                        Internet Protocol address (e.g. IP address), browser type,
                        browser version, the pages of our Service that You visit, the
                        time and date of Your visit, the time spent on those pages,
                        unique device identifiers and other diagnostic data.
                     </p>
                     <p>
                        When You access the Service by or through a mobile device, We
                        may collect certain information automatically, including, but
                        not limited to, the type of mobile device You use, Your mobile
                        device's unique ID, the IP address of Your mobile device, Your
                        mobile operating system, the type of mobile Internet browser You
                        use, unique device identifiers and other diagnostic data.
                     </p>
                     <p>
                        We may also collect information that Your browser sends whenever
                        You visit Our Service or when You access the Service by or
                        through a mobile device.
                     </p>

                     <h3 className="text-xl font-semibold text-white mt-6 mb-3">
                        Tracking Technologies and Cookies
                     </h3>
                     <p>
                        We use Cookies and similar tracking technologies to track the
                        activity on Our Service and store certain information. Tracking
                        technologies We use include beacons, tags, and scripts to
                        collect and track information and to improve and analyze Our
                        Service.
                     </p>

                     <p>The technologies We use may include:</p>
                     <ul className="list-disc ml-6 space-y-2">
                        <li>
                           <strong className="text-white">
                              Cookies or Browser Cookies.
                           </strong>{" "}
                           A cookie is a small file placed on Your Device. You can
                           instruct Your browser to refuse all Cookies or to indicate
                           when a Cookie is being sent. However, if You do not accept
                           Cookies, You may not be able to use some parts of our Service.
                        </li>
                        <li>
                           <strong className="text-white">Web Beacons.</strong> Certain
                           sections of our Service and our emails may contain small
                           electronic files known as web beacons (also referred to as
                           clear gifs, pixel tags, and single-pixel gifs) that permit the
                           Company, for example, to count users who have visited those
                           pages or opened an email and for other related website
                           statistics.
                        </li>
                     </ul>

                     <p>
                        Cookies can be "Persistent" or "Session" Cookies. Persistent
                        Cookies remain on Your personal computer or mobile device when
                        You go offline, while Session Cookies are deleted as soon as You
                        close Your web browser.
                     </p>

                     <p>
                        We use both Session and Persistent Cookies for the purposes set
                        out below:
                     </p>
                     <ul className="list-disc ml-6 space-y-3">
                        <li>
                           <strong className="text-white">
                              Necessary / Essential Cookies
                           </strong>
                           <br />
                           Type: Session Cookies
                           <br />
                           Administered by: Us
                           <br />
                           Purpose: These Cookies are essential to provide You with
                           services available through the Website and to enable You to
                           use some of its features.
                        </li>
                        <li>
                           <strong className="text-white">
                              Cookies Policy / Notice Acceptance Cookies
                           </strong>
                           <br />
                           Type: Persistent Cookies
                           <br />
                           Administered by: Us
                           <br />
                           Purpose: These Cookies identify if users have accepted the use
                           of cookies on the Website.
                        </li>
                        <li>
                           <strong className="text-white">Functionality Cookies</strong>
                           <br />
                           Type: Persistent Cookies
                           <br />
                           Administered by: Us
                           <br />
                           Purpose: These Cookies allow us to remember choices You make
                           when You use the Website.
                        </li>
                     </ul>

                     <h3 className="text-xl font-semibold text-white mt-6 mb-3">
                        Use of Your Personal Data
                     </h3>
                     <p>
                        The Company may use Personal Data for the following purposes:
                     </p>
                     <ul className="list-disc ml-6 space-y-2">
                        <li>
                           To provide and maintain our Service, including to monitor the
                           usage of our Service.
                        </li>
                        <li>
                           To manage Your Account: to manage Your registration as a user
                           of the Service.
                        </li>
                        <li>
                           For the performance of a contract: the development, compliance
                           and undertaking of the purchase contract for the products,
                           items or services You have purchased.
                        </li>
                        <li>
                           To contact You: To contact You by email, telephone calls, SMS,
                           or other equivalent forms of electronic communication.
                        </li>
                        <li>
                           To provide You with news, special offers, and general
                           information about other goods, services and events which We
                           offer.
                        </li>
                        <li>
                           To manage Your requests: To attend and manage Your requests to
                           Us.
                        </li>
                        <li>
                           For business transfers: We may use Your information to
                           evaluate or conduct a merger, divestiture, restructuring,
                           reorganization, dissolution, or other sale or transfer of some
                           or all of Our assets.
                        </li>
                        <li>
                           For other purposes: We may use Your information for other
                           purposes, such as data analysis, identifying usage trends,
                           determining the effectiveness of our promotional campaigns.
                        </li>
                     </ul>

                     <p>
                        We may share Your personal information in the following
                        situations:
                     </p>
                     <ul className="list-disc ml-6 space-y-2">
                        <li>
                           <strong className="text-white">
                              With Service Providers:
                           </strong>{" "}
                           We may share Your personal information with Service Providers
                           to monitor and analyze the use of our Service.
                        </li>
                        <li>
                           <strong className="text-white">
                              For business transfers:
                           </strong>{" "}
                           We may share or transfer Your personal information in
                           connection with, or during negotiations of, any merger, sale
                           of Company assets, financing, or acquisition.
                        </li>
                        <li>
                           <strong className="text-white">With Affiliates:</strong> We
                           may share Your information with Our affiliates, in which case
                           we will require those affiliates to honor this Privacy Policy.
                        </li>
                        <li>
                           <strong className="text-white">
                              With business partners:
                           </strong>{" "}
                           We may share Your information with Our business partners to
                           offer You certain products, services or promotions.
                        </li>
                        <li>
                           <strong className="text-white">With other users:</strong> when
                           You share personal information or otherwise interact in the
                           public areas with other users, such information may be viewed
                           by all users.
                        </li>
                        <li>
                           <strong className="text-white">With Your consent:</strong> We
                           may disclose Your personal information for any other purpose
                           with Your consent.
                        </li>
                     </ul>

                     <h3 className="text-xl font-semibold text-white mt-6 mb-3">
                        Retention of Your Personal Data
                     </h3>
                     <p>
                        The Company will retain Your Personal Data only for as long as
                        is necessary for the purposes set out in this Privacy Policy. We
                        will retain and use Your Personal Data to the extent necessary
                        to comply with our legal obligations, resolve disputes, and
                        enforce our legal agreements and policies.
                     </p>
                     <p>
                        The Company will also retain Usage Data for internal analysis
                        purposes. Usage Data is generally retained for a shorter period
                        of time, except when this data is used to strengthen the
                        security or to improve the functionality of Our Service.
                     </p>

                     <h3 className="text-xl font-semibold text-white mt-6 mb-3">
                        Transfer of Your Personal Data
                     </h3>
                     <p>
                        Your information, including Personal Data, is processed at the
                        Company's operating offices and in any other places where the
                        parties involved in the processing are located. It means that
                        this information may be transferred to — and maintained on —
                        computers located outside of Your state, province, country or
                        other governmental jurisdiction where the data protection laws
                        may differ from those from Your jurisdiction.
                     </p>
                     <p>
                        Your consent to this Privacy Policy followed by Your submission
                        of such information represents Your agreement to that transfer.
                     </p>
                     <p>
                        The Company will take all steps reasonably necessary to ensure
                        that Your data is treated securely and in accordance with this
                        Privacy Policy.
                     </p>

                     <h3 className="text-xl font-semibold text-white mt-6 mb-3">
                        Delete Your Personal Data
                     </h3>
                     <p>
                        You have the right to delete or request that We assist in
                        deleting the Personal Data that We have collected about You.
                     </p>
                     <p>
                        Our Service may give You the ability to delete certain
                        information about You from within the Service.
                     </p>
                     <p>
                        You may update, amend, or delete Your information at any time by
                        signing in to Your Account, if you have one, and visiting the
                        account settings section that allows you to manage Your personal
                        information. You may also contact Us to request access to,
                        correct, or delete any personal information that You have
                        provided to Us.
                     </p>
                     <p>
                        Please note, however, that We may need to retain certain
                        information when we have a legal obligation or lawful basis to
                        do so.
                     </p>

                     <h2 className="text-2xl font-bold text-[#CDFF00] mt-8 mb-4">
                        Disclosure of Your Personal Data
                     </h2>

                     <h3 className="text-xl font-semibold text-white mt-6 mb-3">
                        Business Transactions
                     </h3>
                     <p>
                        If the Company is involved in a merger, acquisition or asset
                        sale, Your Personal Data may be transferred. We will provide
                        notice before Your Personal Data is transferred and becomes
                        subject to a different Privacy Policy.
                     </p>

                     <h3 className="text-xl font-semibold text-white mt-6 mb-3">
                        Law Enforcement
                     </h3>
                     <p>
                        Under certain circumstances, the Company may be required to
                        disclose Your Personal Data if required to do so by law or in
                        response to valid requests by public authorities (e.g. a court
                        or a government agency).
                     </p>

                     <h3 className="text-xl font-semibold text-white mt-6 mb-3">
                        Other Legal Requirements
                     </h3>
                     <p>
                        The Company may disclose Your Personal Data in the good faith
                        belief that such action is necessary to:
                     </p>
                     <ul className="list-disc ml-6 space-y-2">
                        <li>Comply with a legal obligation</li>
                        <li>
                           Protect and defend the rights or property of the Company
                        </li>
                        <li>
                           Prevent or investigate possible wrongdoing in connection with
                           the Service
                        </li>
                        <li>
                           Protect the personal safety of Users of the Service or the
                           public
                        </li>
                        <li>Protect against legal liability</li>
                     </ul>

                     <h3 className="text-xl font-semibold text-white mt-6 mb-3">
                        Security of Your Personal Data
                     </h3>
                     <p>
                        The security of Your Personal Data is important to Us, but
                        remember that no method of transmission over the Internet, or
                        method of electronic storage is 100% secure. While We strive to
                        use commercially reasonable means to protect Your Personal Data,
                        We cannot guarantee its absolute security.
                     </p>

                     <h2 className="text-2xl font-bold text-[#CDFF00] mt-8 mb-4">
                        Children's Privacy
                     </h2>
                     <p>
                        Our Service does not address anyone under the age of 13. We do
                        not knowingly collect personally identifiable information from
                        anyone under the age of 13. If You are a parent or guardian and
                        You are aware that Your child has provided Us with Personal
                        Data, please contact Us. If We become aware that We have
                        collected Personal Data from anyone under the age of 13 without
                        verification of parental consent, We take steps to remove that
                        information from Our servers.
                     </p>
                     <p>
                        If We need to rely on consent as a legal basis for processing
                        Your information and Your country requires consent from a
                        parent, We may require Your parent's consent before We collect
                        and use that information.
                     </p>

                     <h2 className="text-2xl font-bold text-[#CDFF00] mt-8 mb-4">
                        Links to Other Websites
                     </h2>
                     <p>
                        Our Service may contain links to other websites that are not
                        operated by Us. If You click on a third party link, You will be
                        directed to that third party's site. We strongly advise You to
                        review the Privacy Policy of every site You visit.
                     </p>
                     <p>
                        We have no control over and assume no responsibility for the
                        content, privacy policies or practices of any third party sites
                        or services.
                     </p>

                     <h2 className="text-2xl font-bold text-[#CDFF00] mt-8 mb-4">
                        Changes to this Privacy Policy
                     </h2>
                     <p>
                        We may update Our Privacy Policy from time to time. We will
                        notify You of any changes by posting the new Privacy Policy on
                        this page.
                     </p>
                     <p>
                        We will let You know via email and/or a prominent notice on Our
                        Service, prior to the change becoming effective and update the
                        "Last updated" date at the top of this Privacy Policy.
                     </p>
                     <p>
                        You are advised to review this Privacy Policy periodically for
                        any changes. Changes to this Privacy Policy are effective when
                        they are posted on this page.
                     </p>

                     <h2 className="text-2xl font-bold text-[#CDFF00] mt-8 mb-4">
                        Contact Us
                     </h2>
                     <p>
                        If you have any questions about this Privacy Policy, You can
                        contact us:
                     </p>
                     <ul className="list-disc ml-6 space-y-2">
                        <li>
                           By email:{" "}
                           <a
                              href="mailto:alimakhloufj.apps@gmail.com"
                              className="text-[#CDFF00] hover:text-[#B8E600]"
                           >
                              alimakhloufj.apps@gmail.com
                           </a>
                        </li>
                        <li>
                           By visiting this page on our website:{" "}
                           <button
                              onClick={() => navigateTo("contact")}
                              className="text-[#CDFF00] hover:text-[#B8E600]"
                           >
                              http://www.oledburncare.com/contact
                           </button>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );

   return (
      <div className="min-h-screen bg-[#0A0A0A]">
         <NavBar />
         {currentPage === "home" && <HomePage />}
         {currentPage === "contact" && <ContactPage />}
         {currentPage === "privacy" && <PrivacyPage />}
      </div>
   );
};

export default App;
