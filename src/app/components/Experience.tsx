import { motion } from 'motion/react';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

export function Experience() {
  const responsibilities = [
    'Backend development using Node.js, Express.js, MongoDB, MySQL',
    'REST API development and integration',
    'AI backend services using Python & FastAPI',
    'Scalable web application architecture design',
    'Team collaboration and cross-functional API integration'
  ];

  return (
    <section id="experience" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/10 via-transparent to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20"
          >
            <span className="text-sm font-semibold text-violet-400">EXPERIENCE</span>
          </motion.div>

          <h2
            className="mb-6 bg-gradient-to-br from-white via-violet-200 to-violet-400 bg-clip-text text-transparent leading-tight"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 800, letterSpacing: '-0.02em' }}
          >
            Professional Journey
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative pl-12">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-500 via-purple-500 to-transparent" />

            {/* Timeline dot */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="absolute left-3 top-8 w-7 h-7 rounded-full bg-gradient-to-br from-violet-500 to-purple-500 shadow-lg shadow-violet-500/50 flex items-center justify-center"
            >
              <div className="w-3 h-3 rounded-full bg-white" />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.01 }}
              className="p-10 rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-violet-500/30 transition-all duration-500 shadow-2xl"
            >
              <div className="flex flex-wrap items-start justify-between gap-6 mb-8">
                <div className="flex-1 min-w-[280px]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center shadow-lg shadow-violet-500/30">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white" style={{ fontSize: '1.75rem', letterSpacing: '-0.01em' }}>
                        AI & Backend Developer
                      </h3>
                    </div>
                  </div>
                  <p className="text-cyan-400 font-semibold mb-2" style={{ fontSize: '1.25rem' }}>
                    Beup Tech Agency || A Concern of Betopia Group 
                  </p>
                </div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/30 backdrop-blur-sm"
                >
                  <Calendar className="w-5 h-5 text-violet-400" />
                  <span className="font-semibold text-slate-300">March 2026 – Present</span>
                </motion.div>
              </div>

              <div className="space-y-4 mt-8">
                {responsibilities.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-4 group"
                  >
                    <CheckCircle2 className="w-5 h-5 text-violet-400 mt-0.5 flex-shrink-0 group-hover:text-cyan-400 transition-colors" />
                    <p className="text-slate-300 leading-relaxed" style={{ fontSize: '1rem' }}>
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
