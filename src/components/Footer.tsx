import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="py-12 border-t border-glass-border/20">
    <div className="container px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-muted-foreground text-sm font-body">© 2026 Yash Chauhan Portfolio</p>
      <motion.a
        href="https://www.linkedin.com/in/yash-chauhan-a263a5215/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors"
        whileHover={{ scale: 1.2 }}
      >
        <Linkedin className="w-5 h-5" />
      </motion.a>
    </div>
  </footer>
);

export default Footer;
