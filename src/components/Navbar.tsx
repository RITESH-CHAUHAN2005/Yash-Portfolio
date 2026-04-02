import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 border-0 border-b border-white/60 bg-white/45 backdrop-blur-md"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container px-6 flex items-center justify-between h-16">
        <a href="#hero" className="font-brand font-semibold text-lg tracking-wide text-slate-800 hover:text-primary transition-colors">Yash Chauhan</a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-body text-slate-700 hover:text-slate-900 transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-3">
          <button className="text-slate-800" onClick={() => setOpen(!open)}>
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div className="md:hidden bg-white/85 backdrop-blur-md border-t border-white/70 p-6 space-y-4" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="block text-sm font-body text-slate-700 hover:text-slate-900 transition-colors">
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
