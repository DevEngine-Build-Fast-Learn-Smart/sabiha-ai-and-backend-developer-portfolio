import { motion } from 'motion/react';
import { Brain, Server, Database, Code, Wrench, FileCode } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      skills: ['PyTorch', 'OpenCV', 'Transformers', 'CNN', 'Deep Learning', 'NLP'],
      gradient: 'from-violet-500 to-purple-500'
    },
    {
      icon: Server,
      title: 'Backend Development',
      skills: ['Node.js', 'Express.js', 'FastAPI', 'Django', 'REST API'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Database,
      title: 'Databases',
      skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis'],
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Code,
      title: 'Programming Languages',
      skills: ['Python', 'JavaScript', 'Java', 'C/C++'],
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Wrench,
      title: 'Libraries & Tools',
      skills: ['Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'FAISS'],
      gradient: 'from-violet-500 to-cyan-500'
    },
    {
      icon: FileCode,
      title: 'Web Technologies',
      skills: ['HTML', 'CSS', 'React', 'Tailwind CSS'],
      gradient: 'from-pink-500 to-violet-500'
    }
  ];

  return (
    <section id="skills" className="py-32 px-6 relative">
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
            <span className="text-sm font-semibold text-violet-400">SKILLS & EXPERTISE</span>
          </motion.div>

          <h2
            className="mb-6 bg-gradient-to-br from-white via-violet-200 to-violet-400 bg-clip-text text-transparent leading-tight"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 800, letterSpacing: '-0.02em' }}
          >
            Technical Arsenal
          </h2>

          <p
            className="max-w-3xl mx-auto text-slate-300 leading-relaxed"
            style={{ fontSize: '1.125rem' }}
          >
            A comprehensive toolkit for building modern AI and backend solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group p-8 rounded-3xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-violet-500/30 transition-all duration-500"
            >
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

              <div className="flex items-center gap-4 mb-6 relative z-10">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg`}
                >
                  <category.icon className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="font-bold text-white" style={{ fontSize: '1.125rem' }}>
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 hover:border-violet-500/30 hover:bg-white/10 transition-all cursor-default font-medium text-slate-300"
                    style={{ fontSize: '0.875rem' }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
