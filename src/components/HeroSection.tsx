import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient">
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/10 blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      {/* Floating shapes */}
      <motion.div
        className="absolute top-20 right-20 w-20 h-20 border border-primary/20 rounded-lg"
        animate={{ rotate: 360, y: [-10, 10, -10] }}
        transition={{ rotate: { duration: 20, repeat: Infinity }, y: { duration: 4, repeat: Infinity } }}
      />
      <motion.div
        className="absolute bottom-32 left-20 w-16 h-16 border border-accent/20 rounded-full"
        animate={{ rotate: -360, y: [10, -10, 10] }}
        transition={{ rotate: { duration: 15, repeat: Infinity }, y: { duration: 5, repeat: Infinity } }}
      />
      <motion.div
        className="absolute top-1/3 right-1/3 w-2 h-2 bg-primary/40 rounded-full"
        animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <div className="container relative z-10 text-center px-6">
        <motion.h1
          className="font-heading font-extrabold mb-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-gradient"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Yash Chauhan
        </motion.h1>

        <motion.p
          className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-heading font-medium mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Graphic Designer & Video Editor
        </motion.p>

        <motion.p
          className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto mb-12 font-body"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          Crafting visuals that elevate brands and captivate audiences.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <motion.a
            href="#portfolio"
            className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-heading font-semibold text-lg glow-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Portfolio
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-4 rounded-lg border border-glass-border text-foreground font-heading font-semibold text-lg glass-card"
            whileHover={{ scale: 1.05, borderColor: "hsl(270 60% 55% / 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            Contact
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
