import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Palette, Film, Layers, Monitor, Sparkles, Image, Share2, Eye, Zap, Trophy, Target } from "lucide-react";

const skills = [
  {
    name: "Graphic Design",
    icon: Palette,
    level: 95,
    color: "from-purple-500 to-pink-500",
    description: "Creating stunning visuals that tell compelling stories",
    tools: ["Photoshop", "Illustrator", "Figma"],
    projects: "200+"
  },
  {
    name: "Video Editing",
    icon: Film,
    level: 90,
    color: "from-blue-500 to-cyan-500",
    description: "Crafting engaging video content that captivates audiences",
    tools: ["Premiere Pro", "Final Cut", "DaVinci"],
    projects: "150+"
  },
  {
    name: "Adobe Photoshop",
    icon: Layers,
    level: 92,
    color: "from-indigo-500 to-purple-500",
    description: "Expert image manipulation and digital artistry",
    tools: ["Retouching", "Compositing", "Digital Art"],
    projects: "300+"
  },
  {
    name: "Premiere Pro",
    icon: Monitor,
    level: 88,
    color: "from-cyan-500 to-teal-500",
    description: "Professional video editing and color grading",
    tools: ["Color Grading", "Motion Graphics", "Audio Sync"],
    projects: "180+"
  },
  {
    name: "After Effects",
    icon: Sparkles,
    level: 85,
    color: "from-violet-500 to-purple-500",
    description: "Dynamic motion graphics and visual effects",
    tools: ["Animation", "VFX", "Motion Design"],
    projects: "120+"
  },
  {
    name: "Thumbnail Design",
    icon: Image,
    level: 93,
    color: "from-pink-500 to-rose-500",
    description: "Eye-catching thumbnails that boost click-through rates",
    tools: ["YouTube", "Instagram", "Social Media"],
    projects: "500+"
  },
  {
    name: "Social Media",
    icon: Share2,
    level: 90,
    color: "from-teal-500 to-emerald-500",
    description: "Viral-worthy content for all social platforms",
    tools: ["Instagram", "Facebook", "LinkedIn"],
    projects: "350+"
  },
  {
    name: "Brand Visuals",
    icon: Eye,
    level: 87,
    color: "from-amber-500 to-orange-500",
    description: "Building consistent and memorable brand identities",
    tools: ["Logos", "Brand Guides", "Identity"],
    projects: "80+"
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeSkill, setActiveSkill] = useState<number | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  return (
    <section id="skills" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      {/* Interactive floating particles - optimized */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary/30 rounded-full will-change-transform"
          style={{
            top: `${25 + i * 20}%`,
            left: `${15 + i * 25}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="container px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 text-primary font-body text-sm tracking-[0.2em] uppercase backdrop-blur-sm">
              ⚡ Expertise Arsenal
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-4">
            Click to <span className="text-gradient">Explore Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            Interactive showcase of my creative toolkit
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: 50, rotateX: 45 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.7, type: "spring" }}
              onClick={() => setActiveSkill(activeSkill === i ? null : i)}
              onMouseEnter={() => setHoveredSkill(i)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {/* Enhanced glow effect */}
              <motion.div
                className={`absolute -inset-1 bg-gradient-to-r ${skill.color} rounded-2xl blur-xl transition-opacity duration-500`}
                animate={{
                  opacity: activeSkill === i ? 0.6 : hoveredSkill === i ? 0.3 : 0,
                }}
              />

              {/* Card */}
              <motion.div
                className="relative glass-card p-6 rounded-2xl backdrop-blur-xl border-glass-border/40 overflow-hidden"
                animate={{
                  scale: activeSkill === i ? 1.02 : 1,
                  height: activeSkill === i ? "auto" : undefined,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                {/* Animated gradient background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.color} transition-opacity duration-500`}
                  animate={{
                    opacity: activeSkill === i ? 0.1 : 0,
                  }}
                />

                {/* Ripple effect on click */}
                {activeSkill === i && (
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-2xl`}
                    initial={{ scale: 0, opacity: 0.5 }}
                    animate={{ scale: 2, opacity: 0 }}
                    transition={{ duration: 0.6 }}
                  />
                )}

                {/* Icon with animated ring */}
                <div className="relative mb-6 flex items-center justify-between">
                  <div className="relative">
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.color} blur-md opacity-50`} />
                    <motion.div
                      className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-lg will-change-transform`}
                      whileHover={{ scale: 1.05 }}
                      animate={{
                        rotate: activeSkill === i ? 360 : 0,
                      }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      <skill.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                    </motion.div>
                  </div>

                  {/* Click indicator */}
                  <div className={`text-muted-foreground transition-opacity duration-300 ${hoveredSkill === i ? 'opacity-100' : 'opacity-50'}`}>
                    {activeSkill === i ? (
                      <motion.div
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 180 }}
                        transition={{ duration: 0.3 }}
                        className="text-primary"
                      >
                        ✕
                      </motion.div>
                    ) : (
                      <span className="text-2xl">→</span>
                    )}
                  </div>
                </div>

                {/* Skill name */}
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                  {skill.name}
                </h3>

                {/* Progress bar */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-body text-muted-foreground tracking-wider uppercase">Mastery</span>
                  <span className="text-sm font-heading font-bold text-foreground">{skill.level}%</span>
                </div>

                <div className="relative h-2 bg-muted/30 rounded-full overflow-hidden backdrop-blur-sm mb-4">
                  <motion.div
                    className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r ${skill.color} shadow-lg`}
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ delay: 0.5 + i * 0.1, duration: 1.5, ease: "easeOut" }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3, repeatDelay: 1 }}
                    />
                  </motion.div>
                </div>

                {/* Expandable content */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: activeSkill === i ? "auto" : 0,
                    opacity: activeSkill === i ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 border-t border-glass-border/30 space-y-4">
                    {/* Description */}
                    <p className="text-sm text-muted-foreground font-body leading-relaxed">
                      {skill.description}
                    </p>

                    {/* Tools */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Zap className="w-4 h-4 text-primary" />
                        <span className="text-xs font-heading font-semibold text-foreground uppercase tracking-wider">Tools</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skill.tools.map((tool, idx) => (
                          <motion.span
                            key={tool}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            className={`px-3 py-1 rounded-full bg-gradient-to-r ${skill.color} text-white text-xs font-body font-medium`}
                          >
                            {tool}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Projects count */}
                    <div className="flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-accent" />
                      <span className="text-xs font-body text-muted-foreground">
                        <span className="font-bold text-foreground">{skill.projects}</span> Projects Completed
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Decorative corner element */}
                <div className={`absolute top-4 right-4 w-20 h-20 rounded-full bg-gradient-to-br ${skill.color} blur-2xl opacity-0 group-hover:opacity-20 transition-all duration-500`} />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Interactive stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
        >
          {[
            { icon: Target, label: "Success Rate", value: "98%", color: "from-green-500 to-emerald-500" },
            { icon: Zap, label: "Avg Turnaround", value: "24hrs", color: "from-yellow-500 to-orange-500" },
            { icon: Trophy, label: "Happy Clients", value: "100+", color: "from-blue-500 to-purple-500" },
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              className="glass-card p-6 rounded-2xl text-center group cursor-pointer relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.4 + idx * 0.1 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              <stat.icon className={`w-8 h-8 mx-auto mb-3 bg-gradient-to-r ${stat.color} text-transparent bg-clip-text`} strokeWidth={1.5} />
              <div className={`text-3xl font-heading font-bold mb-1 bg-gradient-to-r ${stat.color} text-transparent bg-clip-text`}>
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-body">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground/50 text-sm font-body tracking-[0.3em] uppercase">
            💡 Click any skill card to explore details
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
