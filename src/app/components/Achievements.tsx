import { motion } from 'motion/react';
import { Trophy, Award, Users } from 'lucide-react';

export function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      title: 'Winner',
      event: 'AI-Reinventing Campus Connect Workshop',
      organizer: 'Infinix AI & Google Cloud',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Award,
      title: 'Runner-up',
      event: 'Research Poster Presentation',
      organizer: 'AI Mode Conference',
      gradient: 'from-slate-400 to-slate-600'
    },
    {
      icon: Users,
      title: 'Volunteer',
      event: 'ICPC Asia Dhaka Regional Contest',
      organizer: 'ACM ICPC',
      gradient: 'from-violet-500 to-purple-500'
    }
  ];

  return (
    <section id="achievements" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
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
            <span className="text-sm font-semibold text-violet-400">ACHIEVEMENTS</span>
          </motion.div>

          <h2
            className="mb-6 bg-gradient-to-br from-white via-violet-200 to-violet-400 bg-clip-text text-transparent leading-tight"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 800, letterSpacing: '-0.02em' }}
          >
            Recognition & Impact
          </h2>

          <p
            className="max-w-3xl mx-auto text-slate-300 leading-relaxed"
            style={{ fontSize: '1.125rem' }}
          >
            Contributing to the tech community and achieving excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.event}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-violet-500/30 transition-all duration-500 overflow-hidden"
            >
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${achievement.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

              <div className="relative z-10">
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${achievement.gradient} p-0.5 shadow-xl`}
                >
                  <div className="w-full h-full rounded-2xl bg-slate-900 flex items-center justify-center">
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 mb-4"
                >
                  <span className={`bg-gradient-to-r ${achievement.gradient} bg-clip-text text-transparent font-bold`} style={{ fontSize: '0.875rem' }}>
                    {achievement.title}
                  </span>
                </motion.div>

                <h3 className="mb-3 font-bold text-white leading-snug" style={{ fontSize: '1.25rem', letterSpacing: '-0.01em' }}>
                  {achievement.event}
                </h3>

                <p className="text-slate-400" style={{ fontSize: '0.9375rem' }}>
                  {achievement.organizer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
