import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Palette, Film, Layers, Monitor, Sparkles, Image, Share2, Eye, Zap, Trophy, Flame, Star, Cpu } from "lucide-react";
import skillsBg from "@/assets/Skills.png";

const skills = [
  {
    name: "Graphic Design",
    icon: Palette,
    level: 95,
    description: "High-converting social media creatives, brand identity design, UI/UX-focused layouts",
    tools: ["Photoshop", "Illustrator", "Figma"],
    projects: "200+",
    keyPoints: ["High-converting social media creatives (ads, posts, thumbnails)", "Brand identity design (logos, color systems, typography)", "UI/UX-focused layouts for modern websites"]
  },
  {
    name: "Video Editing",
    icon: Film,
    level: 90,
    description: "Short-form content, storytelling-based editing, motion graphics & transitions",
    tools: ["Premiere Pro", "Final Cut", "DaVinci"],
    projects: "150+",
    keyPoints: ["Short-form content (Reels, Shorts, TikTok-style edits)", "Storytelling-based editing with retention hooks", "Motion graphics & transitions for engaging visuals"]
  },
  {
    name: "Adobe Photoshop",
    icon: Layers,
    level: 92,
    description: "Expert image manipulation, digital artistry, retouching & compositing",
    tools: ["Retouching", "Compositing", "Digital Art"],
    projects: "300+",
    keyPoints: ["Professional image manipulation", "Advanced retouching & compositing", "Digital art & design"]
  },
  {
    name: "Premiere Pro",
    icon: Monitor,
    level: 88,
    description: "Professional video editing, color grading, motion graphics integration",
    tools: ["Color Grading", "Motion Graphics", "Audio Sync"],
    projects: "180+",
    keyPoints: ["Professional color grading", "Motion graphics integration", "Audio synchronization & mixing"]
  },
  {
    name: "After Effects",
    icon: Sparkles,
    level: 85,
    description: "Dynamic motion graphics, visual effects, animation sequences",
    tools: ["Animation", "VFX", "Motion Design"],
    projects: "120+",
    keyPoints: ["Dynamic motion graphics", "Professional visual effects", "Animation sequences & keyframing"]
  },
  {
    name: "Thumbnail Design",
    icon: Image,
    level: 93,
    description: "Eye-catching thumbnails optimized for social media algorithms",
    tools: ["YouTube", "Instagram", "Social Media"],
    projects: "500+",
    keyPoints: ["YouTube thumbnail optimization", "Click-through rate optimization", "Platform-specific design"]
  },
  {
    name: "Social Media Content",
    icon: Share2,
    level: 90,
    description: "Viral-worthy content creation for all major social platforms",
    tools: ["Instagram", "TikTok", "LinkedIn"],
    projects: "350+",
    keyPoints: ["Cross-platform content strategy", "Viral content creation", "Audience engagement optimization"]
  },
  {
    name: "Brand Visuals",
    icon: Eye,
    level: 87,
    description: "Consistent brand identity, visual guidelines, brand system design",
    tools: ["Logos", "Brand Guides", "Identity"],
    projects: "80+",
    keyPoints: ["Logo design & brand identity", "Visual style guides", "Consistent brand systems"]
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeSkill, setActiveSkill] = useState<number | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  return (
    <section id="skills" className="py-32 relative overflow-hidden" ref={ref}>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${skillsBg})` }}
      />
      <div className="absolute inset-0 bg-white/30" />

      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C8A96A]/5 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#C8A96A]/5 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      {/* Interactive floating particles - optimized */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            top: `${25 + i * 20}%`,
            left: `${15 + i * 25}%`,
          }}
          className="absolute w-2 h-2 bg-[#C8A96A]/30 rounded-full will-change-transform"
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
                className="absolute -inset-1 rounded-2xl bg-black/20 blur-xl transition-opacity duration-500"
                animate={{
                  opacity: activeSkill === i ? 0.35 : hoveredSkill === i ? 0.2 : 0,
                }}
              />

              {/* Card */}
              <motion.div
                className="relative p-6 rounded-2xl overflow-hidden bg-white/70 border border-[#E5E2DC]/50 backdrop-blur-md"
                animate={{
                  scale: activeSkill === i ? 1.01 : 1,
                  height: activeSkill === i ? "auto" : undefined,
                }}
                transition={{ type: "spring", stiffness: 180, damping: 24 }}
              >
                {/* Animated gradient background */}
                <motion.div
                  className="absolute inset-0 bg-[#C8A96A]/5 transition-opacity duration-500"
                  animate={{
                    opacity: activeSkill === i ? 1 : 0,
                  }}
                />

                {/* Ripple effect on click */}
                {activeSkill === i && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-black/10"
                    initial={{ scale: 0, opacity: 0.5 }}
                    animate={{ scale: 2, opacity: 0 }}
                    transition={{ duration: 0.6 }}
                  />
                )}

                {/* Icon with animated ring */}
                <div className="relative mb-6 flex items-center justify-between">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-2xl bg-[#C8A96A]/20 blur-md opacity-50" />
                    <motion.div
                      className="relative w-16 h-16 rounded-2xl bg-[#1C1C1C] flex items-center justify-center shadow-lg will-change-transform"
                      whileHover={{ scale: 1.05 }}
                      animate={{
                        rotate: activeSkill === i ? 8 : 0,
                      }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
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
                        className="text-foreground"
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

                <div className="relative h-2 bg-[#E5E2DC] rounded-full overflow-hidden backdrop-blur-sm mb-4">
                  <motion.div
                    className="absolute inset-y-0 left-0 rounded-full bg-[#C8A96A] shadow-sm"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ delay: 0.5 + i * 0.1, duration: 1.5, ease: "easeOut" }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
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
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 border-t border-glass-border/30 space-y-4">
                    {/* Description */}
                    <p className="text-sm text-muted-foreground font-body leading-relaxed">
                      {skill.description}
                    </p>

                    {/* Key Points */}
                    {skill.keyPoints && (
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Zap className="w-4 h-4 text-[#C8A96A]" />
                          <span className="text-xs font-heading font-semibold text-[#1C1C1C] uppercase tracking-wider">Key Points</span>
                        </div>
                        <ul className="space-y-1">
                          {skill.keyPoints.map((point, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.05 }}
                              className="text-xs text-muted-foreground font-body flex items-start gap-2"
                            >
                              <span className="text-foreground mt-1 flex-shrink-0">•</span>
                              <span>{point}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Tools */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Zap className="w-4 h-4 text-[#C8A96A]" />
                        <span className="text-xs font-heading font-semibold text-[#1C1C1C] uppercase tracking-wider">Tools</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skill.tools.map((tool, idx) => (
                          <motion.span
                            key={tool}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            className="px-3 py-1 rounded-full bg-[#1C1C1C] text-white text-xs font-body font-medium border border-[#3A3A3A]"
                          >
                            {tool}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Projects count */}
                    <div className="flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-foreground" />
                      <span className="text-xs font-body text-muted-foreground">
                        <span className="font-bold text-foreground">{skill.projects}</span> Projects Completed
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Decorative corner element */}
                <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-black/10 blur-2xl opacity-0 group-hover:opacity-20 transition-all duration-500" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground/50 text-sm font-body tracking-[0.3em] uppercase">
             Click any skill card to explore details
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
