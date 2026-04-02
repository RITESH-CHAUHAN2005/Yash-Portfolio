import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import work1 from "@/assets/portfolio/work-1.png";
import work4 from "@/assets/portfolio/work-4.png";
import work9 from "@/assets/portfolio/work-9.jpg";
import workBg from "@/assets/Work.png";

const featured = [
  { img: work1, title: "Amber-E-Delhi Campaign", desc: "Luxury brand visual storytelling" },
  { img: work4, title: "Bikanervala Cinematic Ad", desc: "Dynamic product photography" },
  { img: work9, title: "HyGear Ophilia Launch", desc: "Futuristic product design" },
];

const FeaturedWork = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 relative overflow-hidden" ref={ref}>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
        style={{ backgroundImage: `url(${workBg})` }}
      />
      <div className="absolute inset-0 bg-white/25" />

      <div className="container px-6">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <p className="text-[#C8A96A] font-body text-sm tracking-[0.2em] uppercase mb-4">Highlights</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#1C1C1C]">
            Featured <span className="text-gradient">Work</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {featured.map((item, i) => (
            <motion.div
              key={item.title}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
              whileHover={{ y: -8 }}
            >
              <div className="absolute inset-0 rounded-2xl p-px bg-gradient-to-br from-[#C8A96A]/50 to-[#E5E2DC]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0" />
              <div className="relative rounded-2xl overflow-hidden bg-card m-px">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <motion.h3 className="text-xl font-heading font-bold text-[#1C1C1C]" initial={{ x: -10 }} whileInView={{ x: 0 }}>
                    {item.title}
                  </motion.h3>
                  <p className="text-[#6B6B6B] font-body text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
