import { Github, Linkedin, Mail, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  const techBadges = ['Python', 'FastAPI', 'Node.js', 'MongoDB', 'PyTorch', 'AI'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9] as [number, number, number, number]
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 py-32">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/20 via-transparent to-transparent" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-violet-600/30 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 -right-1/4 w-[700px] h-[700px] bg-cyan-500/20 rounded-full blur-[120px]"
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8B5CF610_1px,transparent_1px),linear-gradient(to_bottom,#8B5CF610_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto relative z-10 text-center"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-cyan-500/10 border border-violet-500/20 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-violet-400" />
            <span className="text-sm font-medium bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Available for New Opportunities
            </span>
          </motion.div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="mb-6 bg-gradient-to-br from-white via-violet-100 to-violet-300 bg-clip-text text-transparent leading-tight"
          style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 800, letterSpacing: '-0.02em' }}
        >
          AI & Backend Developer
        </motion.h1>

        <motion.div variants={itemVariants} className="mb-4">
          <h2
            className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, letterSpacing: '-0.01em' }}
          >
            SABIHA JAHAN
          </h2>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="mb-12 mx-auto max-w-3xl text-slate-300 leading-relaxed"
          style={{ fontSize: '1.25rem', fontWeight: 400 }}
        >
          Building scalable backend systems and AI-powered applications that transform ideas into production-ready solutions
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center mb-14">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 60px -15px rgba(139, 92, 246, 0.5)' }}
            whileTap={{ scale: 0.98 }}
            className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 font-semibold text-white shadow-lg shadow-violet-500/30 transition-all flex items-center gap-2"
          >
            View Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 rounded-2xl border-2 border-violet-500/30 bg-violet-500/5 font-semibold hover:bg-violet-500/10 backdrop-blur-sm transition-all flex items-center gap-2"
          >
            <Mail className="w-5 h-5" />
            Contact Me
          </motion.a>
        </motion.div>

        <motion.div variants={itemVariants} className="flex gap-5 justify-center mb-16">
          {[
            { icon: Github, href: 'https://github.com/sabihamishu', color: 'hover:text-violet-400' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/sabiha-jahan-mishu', color: 'hover:text-cyan-400' },
            { icon: Mail, href: 'mailto:mishuforwork@gmail.com', color: 'hover:text-violet-400' }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm transition-colors ${social.color}`}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto"
        >
          {techBadges.map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              whileHover={{ y: -4, scale: 1.05 }}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-md hover:border-violet-500/30 transition-all cursor-default font-medium"
            >
              {tech}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-violet-400/30 rounded-full"
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 40 - 20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          style={{
            left: `${10 + i * 15}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
        />
      ))}
    </section>
  );
}
