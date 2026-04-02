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

        <div className="relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0 justify-between">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-[#C8A96A]/30 via-[#E5E2DC]/30 to-[#C8A96A]/30" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              className="relative flex-1 flex flex-col items-center text-center z-10"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.2, duration: 0.5 }}
            >
              <motion.div
                className="w-20 h-20 rounded-2xl glass-card flex items-center justify-center mb-4"
                whileHover={{ scale: 1.1, boxShadow: "0 0 40px -10px rgba(200, 169, 106, 0.4)" }}
              >
                <step.icon className="w-8 h-8 text-[#C8A96A]" />
              </motion.div>
              <span className="text-xs text-[#9A9A9A] font-body mb-1">0{i + 1}</span>
              <h3 className="font-heading font-bold text-[#1C1C1C] text-lg">{step.title}</h3>
              <p className="text-[#6B6B6B] text-sm font-body mt-1 max-w-[180px]">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
