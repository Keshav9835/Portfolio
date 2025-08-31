import React, { useState } from "react";
import {
  ExternalLink,
  Github,
  Sparkles,
  Shield,
  Scan,
  BarChart3,
  X,
  Calendar,
  Users,
  Code,
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface Project {
  title: string;
  description: string;
  features: string[];
  techStack: string[];
  image: string;
  github: string;
  demo: string;
  featured: boolean;
  icons: any[];
  detailedDescription?: string;
  challenges?: string[];
  learnings?: string[];
  timeline?: string;
  teamSize?: string;
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "TrackFi - AI Finance Tracker",
      description:
        "A comprehensive AI-powered finance tracking application that helps users manage their income, expenses, and financial goals with intelligent insights.",
      detailedDescription:
        "TrackFi is a cutting-edge finance tracking application that leverages artificial intelligence to provide users with intelligent insights into their financial habits. The application features a modern, intuitive interface built with Next.js and TypeScript, ensuring type safety and optimal performance.",
      features: [
        "Track income and expenses with smart categorization",
        "AI-powered financial reports and insights",
        "Receipt scanner using advanced AI technology",
        "Secure user authentication and data protection",
        "Real-time financial analytics and visualizations",
      ],
      challenges: [
        "Implementing secure AI-powered receipt scanning",
        "Creating real-time financial analytics dashboard",
        "Ensuring data security and user privacy",
        "Optimizing performance for large datasets",
      ],
      learnings: [
        "Advanced Next.js patterns and optimization techniques",
        "AI integration and API management",
        "Database design for financial applications",
        "Security best practices for sensitive data",
      ],
      techStack: [
        "Next.js",
        "TypeScript",
        "Supabase",
        "Shadcn",
        "Clerk",
        "Arcjet",
        "Tailwind CSS",
      ],
      image:
        "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/Keshav9835/welth",
      demo: "https://trackfi-jet.vercel.app/",
      featured: true,
      icons: [Sparkles, Shield, Scan, BarChart3],
      timeline: "3 months",
      teamSize: "Solo Project",
    },
    {
      title: "Imagine – Text to Image Generator",
      description:
        "A full-stack MERN application that generates AI-powered images from text prompts with secure authentication and credit-based usage.",
      detailedDescription:
        "Imagine is an AI-powered text-to-image generator built on the MERN stack. Users can register, log in, and securely manage their accounts with JWT-based authentication. The app features a responsive React.js and Tailwind CSS interface for a seamless user experience. A credit-based subscription system powered by Razorpay allows users to purchase credits and generate images. The platform is deployed on Vercel (frontend) and Render (backend) for scalability and reliable performance.",
      features: [
        "Generate AI-powered images from text prompts",
        "Secure JWT-based authentication for user registration and login",
        "Modern, responsive UI built with React.js and Tailwind CSS",
        "Subscription and credit system integrated with Razorpay",
        "Deployed with Vercel (frontend) and Render (backend)",
      ],
      challenges: [
        "Integrating Razorpay payment gateway for credit system",
        "Managing authentication and authorization with JWT",
        "Handling API requests efficiently for image generation",
        "Designing a responsive and visually appealing UI",
      ],
      learnings: [
        "Payment integration with Razorpay",
        "Implementing JWT authentication in MERN applications",
        "Best practices for deploying frontend and backend separately",
        "Advanced UI design with Tailwind CSS",
      ],
      techStack: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "Razorpay",
      ],
      image:
        "https://i.postimg.cc/PfFybXCC/ImgText.png",
      github: "https://github.com/Keshav9835",
      demo: "https://imagine-dun.vercel.app/",
      featured: true,
      icons: [],
      teamSize: "Solo Project",
    },
    {
      title: "Currency Converter",
      description:
        "A real-time currency converter application with live exchange rates and intuitive user interface.",
      detailedDescription:
        "A responsive currency converter application that provides real-time exchange rates for multiple currencies. Built with modern web technologies, it offers a clean and intuitive interface for quick currency conversions.",
      features: [
        "Real-time exchange rates from reliable APIs",
        "Support for 150+ currencies worldwide",
        "Historical exchange rate charts",
        "Responsive design for all devices",
        "Offline mode with cached rates",
      ],
      challenges: [
        "Handling API rate limits efficiently",
        "Implementing offline functionality",
        "Creating smooth animations and transitions",
        "Ensuring accuracy of financial calculations",
      ],
      learnings: [
        "Working with external APIs and error handling",
        "Implementing caching strategies",
        "Creating responsive and accessible UI",
        "Financial data handling best practices",
      ],
      techStack: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Exchange Rate API",
        "Chart.js",
      ],
      image:
        "https://images.pexels.com/photos/3483098/pexels-photo-3483098.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/Keshav9835",
      demo: "https://keshavb-9835.github.io/Currency-Converter/",
      featured: false,
      icons: [],
      teamSize: "Solo Project",
    },
  ];

  const openModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "unset";
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gray-900 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <motion.div
            className="w-20 h-1 bg-blue-600 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore some of my recent work that demonstrates my skills in
            full-stack development and problem-solving
          </p>
        </motion.div>

        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants as Variants}
              className={`bg-gray-800 rounded-lg shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl cursor-pointer ${
                project.featured ? "ring-2 ring-blue-600" : ""
              }`}
              whileHover={{
                y: -5,
                transition: { duration: 0.3 },
              }}
              onClick={() => openModal(project)}
            >
              {project.featured && (
                <motion.div
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 text-sm font-semibold"
                  initial={{ x: -100 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  ⭐ Featured Project
                </motion.div>
              )}

              <div
                className={`grid ${
                  project.featured ? "lg:grid-cols-2" : "md:grid-cols-2"
                } gap-8 p-8`}
              >
                {/* Project Image */}
                <div className="order-2 lg:order-1">
                  <div className="relative group">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover rounded-lg"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-black bg-opacity-40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                      whileHover={{ opacity: 1 }}
                    >
                      <motion.div
                        className="text-white text-lg font-semibold"
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        Click to view details
                      </motion.div>
                    </motion.div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="order-1 lg:order-2 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">
                      Tech Stack:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-blue-600 hover:text-white transition-colors duration-200"
                          whileHover={{ scale: 1.05 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                      
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Projects */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://github.com/Keshav9835"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} className="mr-2" />
            View More Projects on GitHub
          </motion.a>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-all duration-200"
                >
                  <X size={24} />
                </button>
                {selectedProject.featured && (
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    ⭐ Featured
                  </div>
                )}
              </div>

              {/* Modal Content */}
              <div className="p-8 space-y-8">
                {/* Title and Description */}
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    {selectedProject.title}
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {selectedProject.detailedDescription}
                  </p>
                </div>

                {/* Project Info */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <Calendar className="text-blue-500" size={20} />
                    <div>
                      <p className="text-gray-400 text-sm">Timeline</p>
                      <p className="text-white font-semibold">
                        {selectedProject.timeline}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="text-blue-500" size={20} />
                    <div>
                      <p className="text-gray-400 text-sm">Team Size</p>
                      <p className="text-white font-semibold">
                        {selectedProject.teamSize}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Key Features
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {selectedProject.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Challenges */}
                {selectedProject.challenges && (
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      Challenges Overcome
                    </h3>
                    <div className="space-y-3">
                      {selectedProject.challenges.map((challenge, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-300">{challenge}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Learnings */}
                {selectedProject.learnings && (
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      Key Learnings
                    </h3>
                    <div className="space-y-3">
                      {selectedProject.learnings.map((learning, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-300">{learning}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Stack */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg border border-gray-700"
                      >
                        <Code size={16} className="inline mr-2" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 pt-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200 flex-1 justify-center"
                  >
                    <Github size={20} className="mr-2" />
                    View Source Code
                  </a>
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 flex-1 justify-center"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
