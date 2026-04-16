import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <motion.nav 
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 py-4 md:py-6 transition-all duration-500",
        isScrolled ? "bg-black/80 backdrop-blur-xl py-3 md:py-4 border-b border-white/10" : "bg-transparent"
      )}
    >
      <motion.div variants={itemVariants} className="flex items-center gap-2 group cursor-pointer">
        <motion.div 
          whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
          className="w-8 h-8 md:w-10 md:h-10 bg-white/10 rounded-full flex items-center justify-center overflow-hidden border border-white/10 transition-transform"
        >
          <img 
            src="https://i.ibb.co/5x4TxjKg/AP-TEAM-LOGO-V001.png" 
            alt="Amrit Productions Logo" 
            className="w-full h-full object-contain p-1"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <span className="font-bold tracking-tighter text-sm md:text-xl transition-colors group-hover:text-red-600 truncate max-w-[120px] md:max-w-none">AMRIT CHAUHAN</span>
      </motion.div>

      <motion.div variants={itemVariants} className="hidden md:flex items-center gap-10 text-[11px] font-bold tracking-[0.2em] uppercase">
        {["Work", "About"].map((item) => (
          <a 
            key={item}
            href={`#${item.toLowerCase()}`} 
            className="relative opacity-50 hover:opacity-100 transition-opacity group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-red-600 transition-all group-hover:w-full" />
          </a>
        ))}
      </motion.div>

      <motion.div variants={itemVariants} className="flex items-center gap-2 md:gap-4">
        <button className="p-2 opacity-50 hover:opacity-100 transition-opacity hover:rotate-12 transition-transform hidden sm:block">
          <Sun className="w-4 h-4 md:w-5 md:h-5" />
        </button>
        <motion.a 
          href="https://call.whatsapp.com/voice/YNMk0LIODRQg53C50q3qYn" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button className="bg-red-600 hover:bg-red-700 text-white rounded-full px-4 md:px-8 py-4 md:py-6 h-auto font-bold uppercase tracking-widest text-[8px] md:text-[10px] cursor-pointer shadow-[0_0_25px_rgba(220,38,38,0.5)] hover:shadow-[0_0_40px_rgba(220,38,38,0.8)] transition-all animate-pulse-subtle">
            Contact Me
          </Button>
        </motion.a>
      </motion.div>
    </motion.nav>
  );
}
