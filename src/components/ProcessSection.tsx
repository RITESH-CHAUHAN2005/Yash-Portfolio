import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, PenTool, Clapperboard, Send } from "lucide-react";
import processBg from "@/assets/Process.png";

const steps = [
  { icon: Lightbulb, title: "Concept", desc: "Understanding the vision and goals" },
  { icon: PenTool, title: "Design", desc: "Crafting visual compositions" },
  { icon: Clapperboard, title: "Motion", desc: "Adding life through animation" },
  { icon: Send, title: "Final Delivery", desc: "Polished, production-ready output" },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 relative" ref={ref}>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${processBg})` }}
      />
      <div className="absolute inset-0 bg-white/25" />

      <div className="container px-6">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <p className="text-[#C8A96A] font-body text-sm tracking-[0.2em] uppercase mb-4">How I Work</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#1C1C1C]">
            Creative <span className="text-gradient">Process</span>
          </h2>
        </motion.div>

        <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0 justify-between">
          {/* Connection lines */}
          <div className="absolute left-6 top-4 bottom-4 w-px bg-gradient-to-b from-[#C8A96A]/40 via-[#E5E2DC]/40 to-[#C8A96A]/40 md:hidden" />
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-[#C8A96A]/30 via-[#E5E2DC]/30 to-[#C8A96A]/30" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              className="relative flex-1 w-full md:w-auto flex flex-row md:flex-col items-start md:items-center text-left md:text-center z-10 pl-16 md:pl-0"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.2, duration: 0.5 }}
            >
              <motion.div
                className="absolute left-0 top-0 md:static w-12 h-12 md:w-20 md:h-20 rounded-xl md:rounded-2xl glass-card flex items-center justify-center md:mb-4"
                whileHover={{ scale: 1.1, boxShadow: "0 0 40px -10px rgba(200, 169, 106, 0.4)" }}
              >
                <step.icon className="w-5 h-5 md:w-8 md:h-8 text-[#C8A96A]" />
              </motion.div>
              <div className="pt-0 md:pt-0">
                <span className="text-xs text-[#9A9A9A] font-body mb-1 block">0{i + 1}</span>
                <h3 className="font-heading font-bold text-[#1C1C1C] text-base md:text-lg">{step.title}</h3>
                <p className="text-[#6B6B6B] text-sm font-body mt-1 max-w-full md:max-w-[180px]">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
