import { motion } from 'motion/react';
import { Users, Brain } from 'lucide-react';

export function ExtraCurricular() {
  const communities = [
    {
      name: 'BUBT IT Club',
      role: 'Active Member',
      description: 'Participating in tech workshops, hackathons, and collaborative projects to build innovative solutions',
      icon: Users,
      gradient: 'from-violet-500 to-purple-500'
    },
    {
      name: 'BUBT AI Community',
      role: 'Core Member',
      description: 'Contributing to AI research initiatives, knowledge sharing sessions, and community growth',
      icon: Brain,
      gradient: 'from-cyan-500 to-blue-500'
    }
  ];

  return (
    <section id="extracurricular" className="py-32 px-6 relative">
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
            <span className="text-sm font-semibold text-violet-400">COMMUNITY</span>
          </motion.div>

          <h2
            className="mb-6 bg-gradient-to-br from-white via-violet-200 to-violet-400 bg-clip-text text-transparent leading-tight"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 800, letterSpacing: '-0.02em' }}
          >
            Community Engagement
          </h2>

          <p
            className="max-w-3xl mx-auto text-slate-300 leading-relaxed"
            style={{ fontSize: '1.125rem' }}
          >
            Active participation in tech communities and collaborative learning
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {communities.map((community, index) => (
            <motion.div
              key={community.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative p-10 rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-violet-500/30 transition-all duration-500 overflow-hidden"
            >
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${community.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.15 }}
                  transition={{ duration: 0.8 }}
                  className={`w-20 h-20 mb-6 rounded-3xl bg-gradient-to-br ${community.gradient} flex items-center justify-center shadow-2xl`}
                >
                  <community.icon className="w-10 h-10 text-white" />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-block px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/30 mb-4"
                >
                  <span className="text-violet-400 font-bold" style={{ fontSize: '0.875rem' }}>
                    {community.role}
                  </span>
                </motion.div>

                <h3 className="mb-4 font-bold text-white leading-tight" style={{ fontSize: '1.75rem', letterSpacing: '-0.01em' }}>
                  {community.name}
                </h3>

                <p className="text-slate-400 leading-relaxed" style={{ fontSize: '1rem' }}>
                  {community.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
