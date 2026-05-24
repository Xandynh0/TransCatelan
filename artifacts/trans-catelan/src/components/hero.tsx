import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden">
      {/* Background Image with Parallax feel */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-10" />
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          src={import.meta.env.BASE_URL + "hero-bg.jpg"}
          alt="Truck on open road at golden hour"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-sm font-medium mb-6 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            45 Anos de Estrada
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-[1.05] tracking-tight mb-6"
          >
            Confiança que percorre o <span className="text-primary italic pr-2">Brasil</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-2xl text-gray-200 max-w-2xl font-light leading-relaxed mb-10"
          >
            Uma tradição familiar passada de geração a geração. Movimentando o progresso do Nordeste ao Sul, com a solidez de quem conhece cada quilômetro.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="xl" className="text-lg rounded-full px-8 gap-2 h-14" onClick={() => document.querySelector('#servicos')?.scrollIntoView({behavior: 'smooth'})}>
              Nossos Serviços
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button size="xl" variant="outline" className="text-lg rounded-full px-8 h-14 bg-white/10 text-white border-white/20 hover:bg-white/20 hover:text-white backdrop-blur-sm" onClick={() => document.querySelector('#contato')?.scrollIntoView({behavior: 'smooth'})}>
              Fale Conosco
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-white/60 text-xs font-medium uppercase tracking-widest">Role para baixo</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}
