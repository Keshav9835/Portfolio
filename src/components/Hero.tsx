import React, { useState } from "react";
import { ArrowRight, Download, Github, Linkedin, Mail, CheckCircle, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadStatus, setDownloadStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const scrollToProjects = () =>
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });

  const handleDownloadCV = async () => {
    setIsDownloading(true);
    setDownloadStatus('idle');

    try {
      // Create download link
      const link = document.createElement('a');
      link.href = '/resume.pdf'; // Update this path to match your file name in public folder
      link.download = 'Keshav_Barnawal_CV.pdf'; // Name for the downloaded file
      link.target = '_blank';
      
      // Add to DOM, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Simulate download time for better UX
      await new Promise(resolve => setTimeout(resolve, 800));
      
      setDownloadStatus('success');
      
      // Reset status after 2 seconds
      setTimeout(() => setDownloadStatus('idle'), 2000);
      
    } catch (error) {
      console.error('Download failed:', error);
      setDownloadStatus('error');
      
      // Reset status after 3 seconds
      setTimeout(() => setDownloadStatus('idle'), 3000);
    } finally {
      setIsDownloading(false);
    }
  };

  const getDownloadButtonContent = () => {
    if (isDownloading) {
      return (
        <>
          <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent mr-2"></div>
          Downloading...
        </>
      );
    }

    if (downloadStatus === 'success') {
      return (
        <>
          <CheckCircle size={18} className="mr-2" />
          Downloaded!
        </>
      );
    }

    if (downloadStatus === 'error') {
      return (
        <>
          <AlertCircle size={18} className="mr-2" />
          Try Again
        </>
      );
    }

    return (
      <>
        <Download className="mr-2" size={18} />
        Download CV
      </>
    );
  };

  const getDownloadButtonStyles = () => {
    if (downloadStatus === 'success') {
      return 'border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white';
    }
    
    if (downloadStatus === 'error') {
      return 'border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white';
    }
    
    return 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white';
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center relative overflow-hidden"
    >
      {/* ---------- Animated blobs (hide on <sm) ---------- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
        <motion.div
          className="absolute top-1/4 left-1/4 w-56 h-56 bg-blue-600/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.5, 0.2] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-48 h-48 bg-purple-600/10 rounded-full blur-3xl"
          animate={{ x: [-50, 50, -50], y: [-30, 30, -30], opacity: [0.2, 0.4, 0.2] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* ================= Left ================= */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              Hi, I&#39;m{" "}
              <br />
              <span className="block sm:inline text-blue-500">
                Keshav Barnawal
              </span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Passionate about solving real‑world problems with{" "}
              <span className="text-blue-400 font-semibold">
                clean & efficient code
              </span>
            </motion.p>

            <motion.p
              className="text-base sm:text-lg md:text-2xl text-gray-400 mb-10 md:mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
            >
              B.Tech  • Aspiring SDE • DSA enthusiast • Full‑stack
              developer
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start mb-10 md:mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                onClick={scrollToProjects}
                className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-lg font-semibold flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Projects <ArrowRight className="ml-2" size={18} />
              </motion.button>

              <motion.button
                onClick={handleDownloadCV}
                disabled={isDownloading}
                className={`
                  ${getDownloadButtonStyles()}
                  px-7 py-3 rounded-lg font-semibold flex items-center justify-center transition-all
                  disabled:opacity-70 disabled:cursor-not-allowed
                  min-w-[180px]
                `}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {getDownloadButtonContent()}
              </motion.button>
            </motion.div>

            {/* Social */}
            <motion.div
              className="flex justify-center lg:justify-start gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.75 }}
            >
              {[
                { href: "https://github.com/Keshav9835", icon: Github },
                { href: "https://linkedin.com/in/keshav-barnawal-4aabb8272", icon: Linkedin },
                { href: "mailto:keshavmve2003@gmail.com", icon: Mail },
              ].map(({ href, icon: Icon }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:p-3 text-gray-400 hover:text-blue-500 transition-colors"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={22} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* ================= Right (image) ================= */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Rotating ring */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 p-0.5 sm:p-1"
                animate={{ rotate: 360 }}
                transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full bg-black" />
              </motion.div>

              {/* Photo */}
              <motion.div
                className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl ring-4 ring-blue-500/30"
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <img
                  src="https://i.postimg.cc/N0mtHksn/IMG-20250707-152854.jpg"
                  alt="Keshav Barnawal"
                  className="w-full h-full object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                />
              </motion.div>

              {/* Floating dots (hide on <sm) */}
              <motion.div
                className="hidden sm:block absolute -top-4 -right-4 w-7 h-7 bg-blue-500 rounded-full shadow-lg"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="hidden sm:block absolute -bottom-4 -left-4 w-5 h-5 bg-purple-500 rounded-full shadow-lg"
                animate={{ y: [10, -10, 10] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;