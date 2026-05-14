import { motion } from 'motion/react';
import { GraduationCap, Award, Star } from 'lucide-react';

export function Education() {
  const education = [
    {
      degree: 'B.Sc. in Computer Science & Engineering',
      institution: 'Bangladesh University of Business & Technology (BUBT)',
      period: '2022 - 2026',
      cgpa: '3.83/4.00',
      icon: GraduationCap,
      gradient: 'from-violet-500 to-purple-500'
    },
    {
      degree: 'Diploma in Engineering',
      institution: 'Dhaka Mohila Polytechnic Institute',
      period: '2017 - 2021',
      cgpa: '3.72/4.00',
      icon: Award,
      gradient: 'from-cyan-500 to-blue-500'
    }
  ];

  return (
    <section id="education" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-violet-900/10 via-transparent to-transparent" />

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
            <span className="text-sm font-semibold text-violet-400">EDUCATION</span>
          </motion.div>

          <h2
            className="mb-6 bg-gradient-to-br from-white via-violet-200 to-violet-400 bg-clip-text text-transparent leading-tight"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 800, letterSpacing: '-0.02em' }}
          >
            Academic Excellence
          </h2>

          <p
            className="max-w-3xl mx-auto text-slate-300 leading-relaxed"
            style={{ fontSize: '1.125rem' }}
          >
            Strong foundation in computer science and engineering
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-violet-500/30 transition-all duration-500 overflow-hidden"
            >
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${edu.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

              <div className="relative z-10 flex flex-wrap items-start gap-6">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${edu.gradient} flex items-center justify-center shadow-xl flex-shrink-0`}
                >
                  <edu.icon className="w-8 h-8 text-white" />
                </motion.div>

                <div className="flex-1 min-w-[240px]">
                  <h3 className="mb-2 font-bold text-white leading-tight" style={{ fontSize: '1.5rem', letterSpacing: '-0.01em' }}>
                    {edu.degree}
                  </h3>
                  <p className="mb-3 text-cyan-400 font-semibold" style={{ fontSize: '1.125rem' }}>
                    {edu.institution}
                  </p>
                  <p className="text-slate-400" style={{ fontSize: '1rem' }}>
                    {edu.period}
                  </p>
                </div>

                <div className="flex flex-col gap-2 ml-auto">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`px-6 py-3 rounded-2xl bg-gradient-to-br ${edu.gradient} shadow-lg`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Star className="w-4 h-4 text-white fill-white" />
                      <span className="text-xs font-bold text-white uppercase tracking-wider">CGPA</span>
                    </div>
                    <p className="font-bold text-white text-center" style={{ fontSize: '1.5rem' }}>
                      {edu.cgpa}
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
