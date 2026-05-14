import { motion } from 'motion/react';
import { Brain, Code2, Database, Sparkles } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Passionate about building intelligent systems that solve real-world problems',
      gradient: 'from-violet-500 to-purple-500'
    },
    {
      icon: Code2,
      title: 'Backend Engineering',
      description: 'Crafting scalable and robust server-side architectures',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Database,
      title: 'Data Science',
      description: 'Transforming data into actionable insights',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Sparkles,
      title: 'Research-Driven',
      description: 'Continuously exploring cutting-edge technologies and methodologies',
      gradient: 'from-violet-500 to-cyan-500'
    }
  ];

  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20"
          >
            <span className="text-sm font-semibold text-violet-400">ABOUT ME</span>
          </motion.div>

          <h2
            className="mb-6 bg-gradient-to-br from-white via-violet-200 to-violet-400 bg-clip-text text-transparent leading-tight"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 800, letterSpacing: '-0.02em' }}
          >
            Crafting Digital Excellence
          </h2>

          <p
            className="max-w-3xl mx-auto text-slate-300 leading-relaxed"
            style={{ fontSize: '1.125rem', fontWeight: 400 }}
          >
            I'm a passionate AI & Backend Developer with a strong focus on creating intelligent,
            scalable systems that make a real impact. My work bridges cutting-edge AI research
            with production-ready backend infrastructure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-violet-500/30 transition-all duration-500"
            >
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className={`w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br ${item.gradient} p-0.5`}
              >
                <div className="w-full h-full rounded-2xl bg-slate-900 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
              </motion.div>

              <h3 className="mb-3 font-bold text-white" style={{ fontSize: '1.125rem' }}>
                {item.title}
              </h3>
              <p className="text-slate-400 leading-relaxed" style={{ fontSize: '0.9375rem' }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
