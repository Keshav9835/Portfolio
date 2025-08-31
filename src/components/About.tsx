import React from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { motion, Variants } from "framer-motion";

/**
 * Redesigned About section
 * - Keeps the original dark / blue colour palette
 * - Preserves the "About Me" heading + decorative line
 * - Modern grid‑based layout with better alignment & spacing
 * - Subtle Framer‑Motion entrance animations
 * - Adjusted for better height balance between columns
 */
const About: React.FC = () => {
  const education = [
    {
      year: "2022-2026",
      degree: "B.Tech in Electronics and Communication Engineering",
      institution: "NIT Jamshedpur",
      score: "CGPA: 8.18",
      location: "Jamshedpur, Jharkhand",
    },
    {
      year: "2019-2021",
      degree: "Higher Secondary Education (CBSE)",
      institution: "DAV Kapildev Public School",
      score: "91%",
      location: "Ranchi, Jharkhand",
    },
    {
      year: "2008-2019",
      degree: "Secondary Education (CBSE)",
      institution: "Jharkhand Public School",
      score: "91%",
      location: "Baliyapur, Jharkhand",
    },
  ];

  // Framer Motion variants
  const card = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <section id="about" className="py-24 bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            About Me
          </h2>
          {/* decorative underline – unchanged */}
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded"></div>
        </div>

        {/* Main Grid - Adjusted for better balance */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left column: Story & Motivation (span 7) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* Story */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={card as Variants}
              custom={0}
              className="bg-gray-800/80 backdrop-blur-md p-8 rounded-2xl shadow-lg ring-1 ring-gray-700/40"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">My Story</h3>
              <p className="leading-relaxed mb-4">
                I'm a <strong>final‑year B.Tech student in Electronics & Communication Engineering at NIT Jamshedpur</strong>, driven by a fascination with how elegant code can turn complex ideas into real‑world solutions. Over the last four years I've solved <strong>300 + data‑structure &amp; algorithm challenges</strong> and shipped several full‑stack projects—experience that has honed both my analytical thinking and my craftsmanship.
              </p>
              <p className="leading-relaxed mb-4">
                As a self‑motivated learner I thrive on rapidly mastering new technologies. My current toolkit centres on <strong>TypeScript, React / Next.js, Node.js and SQL/NoSQL backends</strong>, with hands‑on exposure to Supabase, Clerk, Arcjet, and modern DevOps workflows. Whether prototyping solo or collaborating in agile teams, I prioritise clean architecture, rigorous testing, and clear communication.
              </p>
              <p className="leading-relaxed">
                I'm now seeking an <strong>entry‑level Software Development Engineer role</strong> where I can contribute to high‑impact products, learn from seasoned mentors, and keep pushing the boundaries of what software can deliver. When I'm not coding you'll find me dissecting tech blogs, experimenting with AI APIs, or mentoring peers through their first LeetCode hurdles.
              </p>
            </motion.div>

            {/* Drives */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={card as Variants}
              custom={1}
              className="bg-gray-800/80 backdrop-blur-md p-8 rounded-2xl shadow-lg ring-1 ring-gray-700/40"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">What Drives Me</h3>
              <ul className="space-y-3 list-disc list-inside marker:text-blue-600">
                <li>Building solutions that make a difference</li>
                <li>Continuous learning and growth</li>
                <li>Clean, efficient, and maintainable code</li>
                <li>Collaboration and knowledge sharing</li>
              </ul>
            </motion.div>
          </div>

          {/* Right column: Timeline (span 5) - Now with sticky positioning */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-8">
              <motion.h3
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
                viewport={{ once: true }}
                className="text-2xl font-semibold text-white mb-10"
              >
                Education
              </motion.h3>

              {/* Education items */}
              <div className="space-y-0">
                {education.map((item, i) => (
                  <motion.div
                    key={item.year}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={card as Variants}
                    custom={i + 3}
                    className="relative pb-10 pl-8 last:pb-0 border-l-2 border-blue-600/60 before:absolute before:-left-2 before:top-0 before:w-4 before:h-4 before:bg-blue-600 before:rounded-full before:shadow-md"
                  >
                    <div className="bg-gray-800/80 p-6 rounded-2xl shadow-lg ring-1 ring-gray-700/40">
                      <div className="flex items-center mb-2 text-blue-400 font-semibold">
                        <GraduationCap size={20} className="mr-2" /> {item.year}
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-2">{item.degree}</h4>
                      <p className="mb-4">{item.institution}</p>
                      <div className="flex items-center justify-between text-sm text-gray-400">
                        <span className="flex items-center">
                          <Calendar size={16} className="mr-1" /> {item.score}
                        </span>
                        <span className="flex items-center">
                          <MapPin size={16} className="mr-1" /> {item.location}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
