import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";

import work1 from "@/assets/portfolio/work-1.png";
import work2 from "@/assets/portfolio/work-2.png";
import work3 from "@/assets/portfolio/work-3.png";
import work4 from "@/assets/portfolio/work-4.png";
import work5 from "@/assets/portfolio/work-5.png";
import work6 from "@/assets/portfolio/work-6.png";
import work7 from "@/assets/portfolio/work-7.png";
import work8 from "@/assets/portfolio/work-8.png";
import work9 from "@/assets/portfolio/work-9.jpg";
import work10 from "@/assets/portfolio/work-10.jpg";

const projects = [
  { img: work1, title: "Amber-E-Delhi Perfume", category: "Marketing Creatives", desc: "Luxury perfume brand campaign with Mughal-inspired visual storytelling." },
  { img: work2, title: "Bikanervala Chips Packaging", category: "Graphic Design", desc: "Complete packaging design for brown rice chips product line." },
  { img: work3, title: "Pasta House Social Post", category: "Social Media Creatives", desc: "Eye-catching food promotion creative for Italian restaurant chain." },
  { img: work4, title: "Bikanervala Campaign", category: "Marketing Creatives", desc: "Dynamic product advertisement with cinematic spice explosion visuals." },
  { img: work5, title: "Nature's Essence Campaign", category: "Social Media Creatives", desc: "Fresh and vibrant skincare product promotion for summer campaign." },
  { img: work6, title: "Nikon Z9 Product Ad", category: "Marketing Creatives", desc: "High-impact camera product advertisement with dynamic water effects." },
  { img: work7, title: "Nature's Essence Face Wash", category: "Social Media Creatives", desc: "Clean, natural skincare promotion targeting young audience." },
  { img: work8, title: "Naturals Shilajit Lineup", category: "Graphic Design", desc: "Product range showcase with Himalayan mountain backdrop." },
  { img: work9, title: "HyGear Ophilia Shoe", category: "Gaming Visuals", desc: "Futuristic shoe product ad with DNA-inspired visual effects." },
  { img: work10, title: "HyGear Calista Sneaker", category: "Gaming Visuals", desc: "Cyberpunk-style sneaker ad with neon rain city aesthetic." },
];

const categories = ["All", "Graphic Design", "Social Media Creatives", "Marketing Creatives", "Gaming Visuals"];

const PortfolioSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<typeof projects[0] | null>(null);

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="py-32 relative" ref={ref}>
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="container px-6 relative z-10">
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-4">Works</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            Portfolio <span className="text-gradient">Showcase</span>
          </h2>
        </motion.div>

        {/* Filter */}
        <motion.div className="flex flex-wrap gap-3 justify-center mb-12" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-body transition-all ${
                filter === cat ? "bg-primary text-primary-foreground glow-primary" : "glass-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid - cleaner 3-column masonry */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                className="relative group cursor-pointer rounded-xl overflow-hidden break-inside-avoid"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                onClick={() => setSelected(project)}
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-xs text-primary font-body uppercase tracking-wider">{project.category}</span>
                  <h3 className="text-lg font-heading font-bold text-foreground">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-xl p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full glass-card rounded-2xl overflow-hidden"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setSelected(null)} className="absolute top-4 right-4 z-10 w-10 h-10 glass-card rounded-full flex items-center justify-center text-foreground hover:text-primary transition-colors">
                <X className="w-5 h-5" />
              </button>
              <img src={selected.img} alt={selected.title} className="w-full max-h-[60vh] object-cover" />
              <div className="p-8">
                <span className="text-primary text-xs uppercase tracking-[0.2em] font-body">{selected.category}</span>
                <h3 className="text-3xl font-heading font-bold text-foreground mt-2 mb-3">{selected.title}</h3>
                <p className="text-muted-foreground font-body text-lg">{selected.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;
