/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Portfolio } from "./components/Portfolio";
import { CustomCursor } from "./components/CustomCursor";
import { motion } from "motion/react";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#B34B3D] selection:text-white font-sans scroll-smooth">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        
        {/* About / Footer Section */}
        <section id="about" className="py-24 px-8 border-t border-white/5 relative overflow-hidden">
          {/* Texture Overlay */}
          <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
          
          {/* Subtle background animation for about section */}
          <motion.div 
            animate={{ 
              opacity: [0.03, 0.08, 0.03],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#B34B3D] blur-[120px] rounded-full pointer-events-none -z-10"
          />
          
          <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-5xl"
            >
              <img 
                src="https://i.ibb.co/fz3dCYSC/Portfolio-v004.jpg" 
                alt="Amrit Chauhan Portfolio" 
                className="w-full h-auto rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(179,75,61,0.1)]"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-3xl space-y-6"
            >
              <div className="space-y-2">
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter">
                  <span className="text-red-600">Amrit</span> <span className="text-white">Chauhan</span>
                </h2>
                <p className="text-white font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs">
                  Visual Architect & Creative Director
                </p>
              </div>
              
              <p className="text-white/60 text-base md:text-xl leading-relaxed font-medium px-4">
                With a deep focus on high-conversion visual storytelling, Amrit specializes in crafting premium digital assets for elite creators. Every edit and thumbnail is engineered to maximize impact, blending cinematic aesthetics with data-driven design principles.
              </p>

              <div className="pt-6 flex flex-wrap justify-center gap-4 md:gap-8 text-[8px] md:text-[10px] font-bold tracking-[0.2em] uppercase text-white/30">
                <div className="flex flex-col items-center gap-1 md:gap-2">
                  <span className="text-white text-sm md:text-base">2 Years</span>
                  <span>Experience</span>
                </div>
                <div className="w-px h-8 bg-white/10 hidden sm:block" />
                <div className="flex flex-col items-center gap-1 md:gap-2">
                  <span className="text-white text-sm md:text-base">100+ Projects</span>
                  <span>Delivered</span>
                </div>
                <div className="w-px h-8 bg-white/10 hidden sm:block" />
                <div className="flex flex-col items-center gap-1 md:gap-2">
                  <span className="text-white text-sm md:text-base">Global</span>
                  <span>Clientele</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <footer className="py-12 px-8 border-t border-white/5 text-center">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/20"
          >
            © 2026 AMRIT CHAUHAN STUDIO • ALL RIGHTS RESERVED
          </motion.p>
        </footer>
      </main>
    </div>
  );
}

