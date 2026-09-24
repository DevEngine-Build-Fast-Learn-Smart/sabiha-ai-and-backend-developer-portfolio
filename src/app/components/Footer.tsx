import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ArrowUp, Heart } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 px-6 border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-violet-900/5 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3
              className="mb-2 bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent font-bold"
              style={{ fontSize: '1.5rem', letterSpacing: '-0.01em' }}
            >
              SABIHA JAHAN
            </h3>
            <p className="text-slate-400" style={{ fontSize: '1rem' }}>
              AI & Backend Developer
            </p>
          </motion.div>

          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: 'https://github.com/sabihamishu', gradient: 'from-violet-500 to-purple-500' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/sabiha-jahan-mishu', gradient: 'from-cyan-500 to-blue-500' },
              { icon: Mail, href: 'mailto:mishuforwork@gmail.com', gradient: 'from-purple-500 to-pink-500' }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className={`group w-12 h-12 rounded-xl bg-gradient-to-br ${social.gradient} p-0.5 shadow-lg hover:shadow-xl transition-all`}
              >
                <div className="w-full h-full rounded-xl bg-slate-900 flex items-center justify-center group-hover:bg-slate-900/50 transition-all">
                  <social.icon className="w-5 h-5 text-white" />
                </div>
              </motion.a>
            ))}
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center shadow-lg shadow-violet-500/30 hover:shadow-xl hover:shadow-violet-500/40 transition-all"
          >
            <ArrowUp className="w-5 h-5 text-white" />
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/10 text-center"
        >
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="flex items-center justify-center gap-2 text-slate-400" style={{ fontSize: '0.9375rem' }}>
              © 2026 Sabiha Jahan. Built with
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
              >
                <Heart className="w-4 h-4 text-violet-400 fill-violet-400" />
              </motion.span>
              using React & Tailwind CSS
            </p>
            <p className="text-slate-500 text-sm italic">
              "Turning complex problems into elegant, scalable solutions."
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
