import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 300 };
  const translateX = useSpring(mouseX, springConfig);
  const translateY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const moveX = (clientX - window.innerWidth / 2) / 20;
      const moveY = (clientY - window.innerHeight / 2) / 20;
      mouseX.set(moveX);
      mouseY.set(moveY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, scale: 1.5, filter: "blur(20px)" },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for "slam-in" feel
      },
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-black">
      {/* Texture Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Background Glow - Animated & Parallax */}
      <motion.div 
        style={{ 
          x: translateX, 
          y: translateY,
          translateX: "-50%",
          translateY: "-50%"
        }}
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute top-1/2 left-1/2 w-[1000px] h-[1000px] bg-[#B34B3D] blur-[160px] rounded-full pointer-events-none z-0" 
      />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-10 text-center space-y-10 px-4"
      >
        <motion.div variants={itemVariants} className="flex justify-center">
          <Badge variant="outline" className="bg-black/50 border-white/10 text-[#4ADE80] px-5 py-1.5 rounded-full flex items-center gap-2 text-[10px] font-bold tracking-[0.2em]">
            <span className="w-2 h-2 bg-[#4ADE80] rounded-full animate-pulse shadow-[0_0_8px_#4ADE80]" />
            OPEN FOR PROJECTS
          </Badge>
        </motion.div>

        <div className="space-y-2">
          <motion.h1 
            variants={headingVariants}
            className="text-[16vw] sm:text-[12vw] md:text-[10vw] font-black leading-[0.8] tracking-tighter uppercase"
          >
            <span className="text-white [text-shadow:0_0_30px_rgba(255,255,255,0.3)]">High-</span>
            <span className="text-red-600 [text-shadow:0_0_40px_rgba(220,38,38,0.6)]">Impact</span>
            <br />
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="block mt-2 text-transparent bg-clip-text bg-gradient-to-b from-white/40 to-white/5 [-webkit-text-stroke:1px_rgba(255,255,255,0.1)] hover:[-webkit-text-stroke:1px_rgba(179,75,61,0.5)] transition-all duration-700 cursor-default drop-shadow-[0_0_15px_rgba(255,255,255,0.05)]"
            >
              VISUALS
            </motion.span>
          </motion.h1>
        </div>

        <motion.p 
          variants={itemVariants}
          className="max-w-xl mx-auto text-white/40 text-base md:text-xl font-medium tracking-tight leading-relaxed px-4"
        >
          Crafting premium thumbnails and cinematic video edits for creators who demand excellence.
        </motion.p>

        <motion.div variants={itemVariants} className="pt-4">
          <div className="w-1 h-12 bg-gradient-to-b from-[#B34B3D] to-transparent mx-auto rounded-full opacity-50" />
        </motion.div>
      </motion.div>

      {/* Decorative dot from image */}
      <motion.div 
        animate={{ 
          opacity: [0.2, 0.8, 0.2],
          scale: [1, 1.5, 1],
        }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute left-[20%] top-[65%] w-1.5 h-1.5 bg-[#B34B3D] rounded-full blur-[2px] z-20"
      />
    </section>
  );
}
