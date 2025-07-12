import React, { useState, useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  MessageCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";

/* ------------------------------------------------------------- */
/* 1.  ⚙️  EmailJS env vars (put these in .env.local)             */
/* ------------------------------------------------------------- */
const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID!;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY!;

/* ------------------------------------------------------------- */
/* 2.  Component                                                 */
/* ------------------------------------------------------------- */
const Contact: React.FC = () => {
  /* Form state */
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  /* Ref so EmailJS can read raw form */
  const formRef = useRef<HTMLFormElement>(null);

  /* Handlers */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    try {
      setLoading(true);
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setSent(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      alert("Oops! Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  /* Data for the left column */
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "keshavmve2003@gmail.com",
      href: "mailto:keshavmve2003@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 98357 35397",
      href: "tel:+919835735397",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Jamshedpur, Jharkhand",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Keshav9835",
      color: "hover:text-gray-400",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/keshav-barnawal-4aabb8272",
      color: "hover:text-blue-400",
    },
    {
      icon: Mail,
      href: "mailto:keshavmve2003@gmail.com",
      color: "hover:text-blue-400",
    },
  ];

  /* ----------------------------------------------------------- */
  /* 3.  JSX                                                     */
  /* ----------------------------------------------------------- */
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* -------- Header -------- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I&apos;m open to collaboration, learning opportunities, or just a
            good tech talk. Let&apos;s connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* ===================================================== */}
          {/*  Left column — your provided markup                   */}
          {/* ===================================================== */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Let&apos;s Start a Conversation
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Whether you&apos;re looking for a passionate developer to join
                your team, have a project in mind, or simply want to discuss the
                latest in tech, I&apos;d love to hear from you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{item.label}</p>
                    <a
                      href={item.href}
                      className="text-white hover:text-blue-400 transition-colors duration-200"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-gray-800">
              <h4 className="text-lg font-semibold text-white mb-4">
                Connect with me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((s, idx) => (
                  <a
                    key={idx}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-gray-900 rounded-lg text-gray-400 ${s.color} transition-all duration-200 hover:transform hover:-translate-y-1`}
                  >
                    <s.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quote */}
            <div className="bg-gray-900 p-6 rounded-lg">
              <MessageCircle className="text-blue-600 mb-4" size={24} />
              <p className="text-gray-300 italic">
                &quot;The best way to predict the future is to create it. Let&apos;s
                build something amazing together!&quot;
              </p>
            </div>
          </div>

          {/* ===================================================== */}
          {/*  Right column — EmailJS form                          */}
          {/* ===================================================== */}
          <div className="bg-gray-900 p-8 rounded-lg shadow-xl">
            {sent ? (
              <div className="text-center text-green-500 text-xl font-semibold">
                Thank you for reaching out! I’ll get back to you as soon as possible.
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Send a Message
                </h3>

                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* Name + Email */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                      placeholder="What's this about?"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell me about your project, idea, or just say hello..."
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    {loading ? (
                      "Sending…"
                    ) : (
                      <>
                        <Send size={20} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
