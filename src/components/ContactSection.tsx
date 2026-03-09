import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Linkedin } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 relative" ref={ref}>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-radial" />
      
      <motion.div className="absolute top-20 left-20 w-32 h-32 border border-primary/10 rounded-full" animate={{ y: [-10, 10, -10] }} transition={{ duration: 6, repeat: Infinity }} />
      <motion.div className="absolute bottom-20 right-20 w-20 h-20 border border-accent/10 rounded-lg" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />

      <div className="container px-6 relative z-10">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-4">Get in Touch</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            Let's <span className="text-gradient">Connect</span>
          </h2>
        </motion.div>

        <motion.div
          className="max-w-lg mx-auto glass-card rounded-2xl p-10 glow-primary"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="space-y-6">
            <motion.a
              href="mailto:cyash8340@gmail.com"
              className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 text-foreground hover:bg-primary/10 transition-colors group"
              whileHover={{ x: 8 }}
            >
              <Mail className="w-6 h-6 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground font-body">Email</p>
                <p className="font-body font-medium">cyash8340@gmail.com</p>
              </div>
            </motion.a>

            <motion.div
              className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50"
              whileHover={{ x: 8 }}
            >
              <MapPin className="w-6 h-6 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground font-body">Location</p>
                <p className="font-body font-medium text-foreground">Delhi, India</p>
              </div>
            </motion.div>

            <motion.a
              href="https://www.linkedin.com/in/yash-chauhan-a263a5215/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 text-foreground hover:bg-primary/10 transition-colors"
              whileHover={{ x: 8, scale: 1.02 }}
            >
              <Linkedin className="w-6 h-6 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground font-body">LinkedIn</p>
                <p className="font-body font-medium">Connect with me</p>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
