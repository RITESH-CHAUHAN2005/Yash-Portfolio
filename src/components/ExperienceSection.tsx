import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";
import experienceBg from "@/assets/Experience.png";

const experiences = [
  {
    company: "Simulanis",
    role: "3D Animator",
    duration: "Dec 2022 – Apr 2023",
    tasks: ["3D character animation", "Educational 3D content creation", "Interactive learning modules", "3D rigging"],
  },
  {
    company: "Adda247",
    role: "3D Animator & Designer",
    duration: "Apr 2023 – Nov 2023",
    tasks: ["Social media creatives", "Promotional graphics", "Educational video editing", "Marketing motion visuals"],
  },
  {
    company: "Abhiwan Technology",
    role: "3D Animator & Designer",
    duration: "Nov 2023 – Mar 2024",
    tasks: ["Gaming UI creatives", "In-game banners", "Gameplay trailers", "Promotional visuals"],
  },
  {
    company: "Intotheverse",
    role: "3D Animator & Designer",
    duration: "Apr 2024 – Present",
    tasks: ["Game posters", "Social media creatives", "Cinematic trailers", "Marketing reels"],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 relative" ref={ref}>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${experienceBg})` }}
      />
      <div className="absolute inset-0 bg-white/30" />

      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#C8A96A]/5 rounded-full blur-[120px]" />
      <div className="container px-6 relative z-10">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <p className="text-[#C8A96A] font-body text-sm tracking-[0.2em] uppercase mb-4">Career</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#1C1C1C]">
            Work <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <motion.div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#C8A96A] via-[#E5E2DC] to-transparent md:-translate-x-px"
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
          />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              className={`relative flex items-start gap-8 mb-16 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.2, duration: 0.6 }}
            >
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-[#C8A96A] shadow-lg" style={{ boxShadow: "0 0 20px rgba(200, 169, 106, 0.4)", transform: "translate(-50%, 0)" }} />

              {/* Card */}
              <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-0" : "md:pl-0"}`}>
                <div className="glass-card p-6 rounded-xl hover:border-[#C8A96A]/30 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <Briefcase className="w-5 h-5 text-[#C8A96A]" />
                    <span className="text-xs text-[#9A9A9A] font-body">{exp.duration}</span>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-[#1C1C1C]">{exp.company}</h3>
                  <p className="text-[#C8A96A] text-sm font-body mb-4">{exp.role}</p>
                  <ul className="space-y-2">
                    {exp.tasks.map((task) => (
                      <li key={task} className="text-[#6B6B6B] text-sm font-body flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#C8A96A]" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
