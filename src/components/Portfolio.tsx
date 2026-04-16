import { motion } from "motion/react";
import { ThumbnailCarousel } from "./ThumbnailCarousel";

export function Portfolio() {
  return (
    <section id="work" className="py-16 md:py-24 overflow-hidden relative">
      {/* Texture Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <div className="flex flex-col items-center gap-8 md:gap-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4 px-4"
        >
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Selected Works</h2>
          <p className="text-white/40 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase">Premium Thumbnails</p>
        </motion.div>

        <div className="w-full">
          <ThumbnailCarousel />
        </div>
      </div>
    </section>
  );
}
