import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Send, MapPin, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Note: The user didn't provide a Service ID, using the default 'default_service'
    // They provided Template ID: template_sh47ze9 and Public Key: hP-vAxjMX9SpXvIZ_
    emailjs
      .sendForm(
        'service_qxv58b2',
        'template_sh47ze9',
        formRef.current!,
        'hP-vAxjMX9SpXvIZ_'
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSuccess(true);
          formRef.current?.reset();
        },
        (error) => {
          console.log(error.text);
          alert('Failed to send the message, please try again.');
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mishuforwork@gmail.com',
      href: 'mailto:mishuforwork@gmail.com',
      gradient: 'from-violet-500 to-purple-500'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/sabiha-jahan-mishu',
      href: 'https://www.linkedin.com/in/sabiha-jahan-mishu',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/sabihamishu',
      href: 'https://github.com/sabihamishu',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/20 via-transparent to-transparent" />

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
            <span className="text-sm font-semibold text-violet-400">GET IN TOUCH</span>
          </motion.div>

          <h2
            className="mb-6 bg-gradient-to-br from-white via-violet-200 to-violet-400 bg-clip-text text-transparent leading-tight"
            style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.02em' }}
          >
            Let's Build Something Amazing Together
          </h2>

          <p
            className="max-w-3xl mx-auto text-slate-300 leading-relaxed"
            style={{ fontSize: '1.125rem' }}
          >
            I'm always open to discussing new opportunities, innovative projects, or collaborations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((contact, index) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-violet-500/30 transition-all duration-500 overflow-hidden"
            >
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${contact.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-14 h-14 mb-4 rounded-2xl bg-gradient-to-br ${contact.gradient} flex items-center justify-center shadow-lg`}
                >
                  <contact.icon className="w-6 h-6 text-white" />
                </motion.div>

                <h3 className="mb-2 font-bold text-white" style={{ fontSize: '1.125rem' }}>
                  {contact.label}
                </h3>

                <p className="text-cyan-400 font-medium break-all" style={{ fontSize: '0.9375rem' }}>
                  {contact.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto p-10 rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-sm relative overflow-hidden"
        >
          {isSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#0f172a]/95 backdrop-blur-md rounded-3xl"
            >
              <CheckCircle className="w-20 h-20 text-emerald-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
              <p className="text-slate-300 text-center max-w-md px-6">
                Your message has been sent successfully. I will get back to you as soon as possible.
              </p>
              <button
                onClick={() => setIsSuccess(false)}
                className="mt-8 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors text-white font-medium"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : null}

          <h3 className="mb-8 font-bold text-white text-center" style={{ fontSize: '1.75rem', letterSpacing: '-0.01em' }}>
            Send a Message
          </h3>

          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-3 font-semibold text-slate-300" style={{ fontSize: '0.9375rem' }}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-violet-500/50 focus:bg-white/10 outline-none transition-all text-white placeholder-slate-500 backdrop-blur-sm"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block mb-3 font-semibold text-slate-300" style={{ fontSize: '0.9375rem' }}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-violet-500/50 focus:bg-white/10 outline-none transition-all text-white placeholder-slate-500 backdrop-blur-sm"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block mb-3 font-semibold text-slate-300" style={{ fontSize: '0.9375rem' }}>
                Message
              </label>
              <textarea
                name="message"
                required
                rows={6}
                className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-violet-500/50 focus:bg-white/10 outline-none transition-all resize-none text-white placeholder-slate-500 backdrop-blur-sm"
                placeholder="Tell me about your project or opportunity..."
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02, boxShadow: '0 20px 60px -15px rgba(139, 92, 246, 0.5)' }}
              whileTap={{ scale: 0.98 }}
              className={`w-full px-8 py-5 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 font-bold text-white shadow-lg shadow-violet-500/30 transition-all flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              style={{ fontSize: '1.0625rem' }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              {!isSubmitting && <Send className="w-5 h-5" />}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
