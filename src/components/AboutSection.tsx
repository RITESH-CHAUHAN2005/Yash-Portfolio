import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Film, Monitor, Sparkles } from "lucide-react";
import profileImg from "@/assets/Profile.png";
import aboutBg from "@/assets/Aboutus.png";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: Sparkles, company: "Simulanis", desc: "3D character animation & educational 3D content" },
    { icon: Palette, company: "Adda247", desc: "Social media creatives & educational video edits" },
    { icon: Monitor, company: "Abhiwan Technology", desc: "Gaming visuals & UI creatives" },
    { icon: Film, company: "Intotheverse", desc: "Cinematic trailers, posters & promotional content" },
  ];

  return (
    <section id="about" className="relative py-32 overflow-hidden" ref={ref}>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
        style={{ backgroundImage: `url(${aboutBg})` }}
      />
      <div className="absolute inset-0 bg-white/35" />
      <div className="absolute top-0 left-1/2 w-[600px] h-[600px] -translate-x-1/2 bg-gradient-radial opacity-50" />

      <div className="container px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Profile Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#C8A96A]/15 to-[#E5E2DC]/15 blur-2xl" />
              <div className="relative glass-card rounded-2xl overflow-hidden h-full">
                <img
                  src={profileImg}
                  alt="Yash Chauhan"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Floating icons */}
              <motion.div className="absolute -top-4 -right-4 w-12 h-12 glass-card rounded-xl flex items-center justify-center" animate={{ y: [-5, 5, -5] }} transition={{ duration: 3, repeat: Infinity }}>
                <Palette className="w-5 h-5 text-[#C8A96A]" />
              </motion.div>
              <motion.div className="absolute -bottom-4 -left-4 w-12 h-12 glass-card rounded-xl flex items-center justify-center" animate={{ y: [5, -5, 5] }} transition={{ duration: 4, repeat: Infinity }}>
                <Film className="w-5 h-5 text-[#C8A96A]" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-[#C8A96A] font-body text-sm tracking-[0.2em] uppercase mb-4">About Me</p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#1C1C1C] mb-6">
              Designing the <span className="text-gradient">Future</span>
            </h2>
            <p className="text-[#6B6B6B] text-lg leading-relaxed mb-10 font-body">
              Graphic Designer & Video Editor with experience creating digital creatives, motion graphics, social media visuals and marketing videos. I bring brands to life through compelling visual storytelling.
            </p>

            <div className="space-y-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.company}
                  className="glass-card p-4 rounded-xl flex items-start gap-4 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.15, duration: 0.5 }}
                  whileHover={{ x: 8, borderColor: "#C8A96A" }}
                >
                  <div className="w-10 h-10 rounded-lg bg-[#C8A96A]/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-[#C8A96A]" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-[#1C1C1C]">{item.company}</h4>
                    <p className="text-[#6B6B6B] text-sm font-body">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
