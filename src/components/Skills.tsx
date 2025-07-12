import React from 'react';
import { Code, Database, Globe, Terminal, Wrench, Zap, Star, TrendingUp } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['C++', 'C', 'JavaScript', 'TypeScript'],
      gradient: 'from-blue-500 via-purple-500 to-indigo-600'
    },
    {
      title: 'Frontend Development',
      icon: Globe,
      skills: ['React.js', 'Next.js', 'Tailwind CSS', 'HTML5/CSS3'],
      gradient: 'from-green-400 via-blue-500 to-purple-600'
    },
    {
      title: 'Backend & APIs',
      icon: Terminal,
      skills: ['Node.js', 'Express.js', 'Postman'],
      gradient: 'from-orange-400 via-red-500 to-pink-600'
    },
    {
      title: 'Database & Storage',
      icon: Database,
      skills: ['MongoDB', 'MongoDB Atlas', 'Supabase'],
      gradient: 'from-purple-400 via-pink-500 to-red-500'
    },
    {
      title: 'Development Tools',
      icon: Wrench,
      skills: ['Git', 'Shadcn UI',],
      gradient: 'from-gray-400 via-gray-600 to-slate-700'
    },
    {
      title: 'Modern Technologies',
      icon: Zap,
      skills: ['Clerk', 'Arcjet', 'Inngest'],
      gradient: 'from-yellow-400 via-orange-500 to-red-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/30 to-transparent"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
              "linear-gradient(45deg, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
              "linear-gradient(45deg, rgba(59, 130, 246, 0.1) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-purple-600/30 to-transparent"
          animate={{
            background: [
              "linear-gradient(225deg, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
              "linear-gradient(225deg, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
              "linear-gradient(225deg, rgba(147, 51, 234, 0.1) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
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
          <motion.div 
            className="inline-flex items-center justify-center p-2 bg-blue-600/10 rounded-full mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <Star className="text-blue-500 mr-2" size={24} />
            <span className="text-blue-400 font-semibold">Technical Expertise</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills & Technologies</h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-500 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive showcase of my technical skills across various technologies
          </p>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants as Variants}
              className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-700/50 hover:border-blue-500/30"
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <motion.div 
                  className={`p-3 rounded-xl bg-gradient-to-r ${category.gradient} shadow-lg`}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <category.icon className="text-white" size={24} />
                </motion.div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {category.title}
                  </h3>
                  <div className="flex items-center mt-1">
                    <TrendingUp className="text-blue-500 mr-1" size={14} />
                    <span className="text-sm text-gray-400">
                      {category.skills.length} Technologies
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={skillVariants}
                    className="group/skill relative"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-center">
                      <motion.div 
                        className="w-2 h-2 bg-blue-500 rounded-full mr-3"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          delay: skillIndex * 0.2 
                        }}
                      />
                      <span className="text-white font-medium group-hover/skill:text-blue-400 transition-colors duration-200">
                        {skill}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Hover Effect Overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />

              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 rounded-2xl border border-blue-500/20"
                initial={{ opacity: 0 }}
                whileHover={{ 
                  opacity: 1,
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)"
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Summary */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-700/50">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { number: "15+", label: "Technologies Mastered", color: "text-blue-500" },
                { number: "3+", label: "Years of Learning", color: "text-purple-500" },
                { number: "10+", label: "Projects Completed", color: "text-green-500" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className={`text-3xl font-bold ${stat.color} mb-2`}
                    animate={{ 
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      delay: index * 0.5 
                    }}
                  >
                    {stat.number}
                  </motion.div>
                  <p className="text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;