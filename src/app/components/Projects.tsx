import { motion } from 'motion/react';
import { Github, ExternalLink, Sparkles } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'KidPort App',
      description: 'AI-powered baby monitoring and recommendation platform with image-to-text, voice-to-text, behavioral analysis, and personalized recommendations',
      tags: ['Python', 'AI/ML', 'Computer Vision', 'NLP', 'FastAPI'],
      github: 'https://github.com/sabihamishu',
      demo: '#',
      gradient: 'from-violet-500 to-purple-500'
    },
    {
      title: 'Tenant Evaluation System',
      description: 'Backend platform with authentication, role-based access control (RBAC), and scalable REST APIs for property management',
      tags: ['Node.js', 'Express', 'MongoDB', 'JWT', 'RBAC'],
      github: 'https://github.com/sabihamishu',
      demo: '#',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'ToxiGuard',
      description: 'NLP toxic comment detection system using TF-IDF, Logistic Regression, and BERT for content moderation',
      tags: ['Python', 'NLP', 'BERT', 'TF-IDF', 'Machine Learning'],
      github: 'https://github.com/sabihamishu',
      demo: '#',
      gradient: 'from-pink-500 to-violet-500'
    },
    {
      title: 'PaperGPT',
      description: 'LLM-based research paper Q&A system using RAG, FAISS vector database, and semantic retrieval',
      tags: ['Python', 'LLM', 'RAG', 'FAISS', 'Transformers'],
      github: 'https://github.com/sabihamishu',
      demo: '#',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'RetailSense',
      description: 'Customer segmentation system using RFM analysis and clustering algorithms for targeted marketing',
      tags: ['Python', 'Clustering', 'Data Science', 'Pandas', 'Scikit-learn'],
      github: 'https://github.com/sabihamishu',
      demo: '#',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'SecureNodeAuth',
      description: 'Authentication REST API with JWT tokens and refresh token support for secure user sessions',
      tags: ['Node.js', 'JWT', 'Express', 'MongoDB', 'Security'],
      github: 'https://github.com/sabihamishu',
      demo: '#',
      gradient: 'from-violet-500 to-cyan-500'
    },
    {
      title: 'Food Ordering System',
      description: 'Designed a Food Ordering System with RESTful APIs, admin panel, responsive UI, and GitHub-based collaboration',
      tags: ['Full Stack Web Development', 'RESTful API', 'UI', 'Admin Panel'],
      github: 'https://github.com/sabihamishu',
      demo: '#',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Inventory Management System',
      description: 'Developed a Java-based Inventory Management System with database integration, reporting, and CSV import/export',
      tags: ['Java', 'Database', 'Reporting', 'CSV'],
      github: 'https://github.com/sabihamishu',
      demo: '#',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Encryption & Decryption Application',
      description: 'Developed a C++ console-based Encryption & Decryption application using multiple cipher techniques',
      tags: ['C++', 'Cryptography', 'Console App'],
      github: 'https://github.com/sabihamishu',
      demo: '#',
      gradient: 'from-slate-500 to-gray-500'
    }
  ];

  return (
    <section id="projects" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/10 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
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
            <span className="text-sm font-semibold text-violet-400">FEATURED WORK</span>
          </motion.div>

          <h2
            className="mb-6 bg-gradient-to-br from-white via-violet-200 to-violet-400 bg-clip-text text-transparent leading-tight"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 800, letterSpacing: '-0.02em' }}
          >
            Featured Projects
          </h2>

          <p
            className="max-w-3xl mx-auto text-slate-300 leading-relaxed"
            style={{ fontSize: '1.125rem' }}
          >
            Building innovative solutions that combine AI and scalable backend systems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className="h-full p-8 rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-violet-500/30 transition-all duration-500 relative overflow-hidden"
              >
                {/* Gradient glow on hover */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      whileHover={{ rotate: 180, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg`}
                    >
                      <Sparkles className="w-7 h-7 text-white" />
                    </motion.div>

                    <div className="flex gap-2">
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-violet-500/30 flex items-center justify-center transition-all backdrop-blur-sm"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-violet-500/30 flex items-center justify-center transition-all backdrop-blur-sm"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>

                  <h3 className="mb-4 font-bold text-white" style={{ fontSize: '1.375rem', letterSpacing: '-0.01em' }}>
                    {project.title}
                  </h3>

                  <p className="mb-6 text-slate-400 leading-relaxed" style={{ fontSize: '0.9375rem' }}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 font-medium text-slate-400 hover:text-violet-400 hover:border-violet-500/30 transition-all"
                        style={{ fontSize: '0.8125rem' }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
