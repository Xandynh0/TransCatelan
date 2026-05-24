import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Stats() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="relative py-32 overflow-hidden bg-black text-white">
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0 opacity-40"
      >
        <img 
          src={import.meta.env.BASE_URL + "tires.jpg"} 
          alt="Truck tires background" 
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-black/60 mix-blend-multiply" />
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
              A força que não para.
            </h2>
            <p className="text-xl md:text-2xl text-white/80 font-light mb-12">
              Do pneu que toca o asfalto ao grão que alimenta o mundo, a Trans Catelan é a engrenagem que faz o Brasil girar.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/20 pt-8 border-t border-white/20">
              <div className="py-4 md:py-0 md:px-6">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">45+</div>
                <div className="text-sm uppercase tracking-widest text-white/60 font-bold">Anos de Tradição</div>
              </div>
              <div className="py-4 md:py-0 md:px-6">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">Sul</div>
                <div className="text-sm uppercase tracking-widest text-white/60 font-bold">Ao Nordeste</div>
              </div>
              <div className="py-4 md:py-0 md:px-6">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm uppercase tracking-widest text-white/60 font-bold">Compromisso</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
