import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import homeBack from "@/assets/home back.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={homeBack}
        alt="Home background"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-white/10" />
      {/* Text shadow/glow effect */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.3) 0%, transparent 70%)'
      }} />

      <div className="container relative z-10 text-center px-6">
        <motion.h1
          className="font-brand font-extrabold mb-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-[#1C1C1C]"
          style={{
            textShadow: '0 2px 10px rgba(255,255,255,0.8), 0 0 30px rgba(200,169,106,0.3)',
            WebkitTextStroke: '0.5px rgba(255,255,255,0.5)'
          }}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Yash Chauhan
        </motion.h1>

        <motion.p
          className="text-xl sm:text-2xl md:text-3xl text-[#3A3A3A] font-heading font-medium mb-8"
          style={{
            textShadow: '0 1px 8px rgba(255,255,255,0.7)'
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Graphic Designer & Video Editor
        </motion.p>

        <motion.p
          className="text-[#6B6B6B] text-base sm:text-lg max-w-xl mx-auto mb-12 font-body font-medium"
          style={{
            textShadow: '0 1px 6px rgba(255,255,255,0.6)'
          }}
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
            className="px-8 py-4 rounded-xl bg-[#C8A96A] text-white font-heading font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#B89655]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Portfolio
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-4 rounded-xl border border-[#D6D3CD] text-[#1C1C1C] font-heading font-semibold text-lg transition-all duration-300 hover:bg-[#F0EEE9] hover:border-[#C8A96A]"
            whileHover={{ scale: 1.05 }}
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
