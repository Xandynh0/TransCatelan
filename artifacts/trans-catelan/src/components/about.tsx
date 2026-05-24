import { motion } from "framer-motion";
import { Shield, Clock, MapPin } from "lucide-react";

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="sobre" className="py-24 md:py-32 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Nossa História</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight">
                Forjados na estrada, unidos pela tradição
              </h3>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Sediada em Luís Eduardo Magalhães, no coração agrícola da Bahia, a Trans Catelan nasceu com um propósito: entregar confiança.
              </p>
              <p>
                Ao longo de <strong className="text-foreground">45 anos</strong>, construímos mais que uma transportadora. Construímos uma família de profissionais apaixonados pelo trecho, dedicados a conectar as riquezas do nosso país, de ponta a ponta.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-border">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Segurança</h4>
                  <p className="text-sm text-muted-foreground">Frota revisada e rastreada em tempo real.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Abrangência</h4>
                  <p className="text-sm text-muted-foreground">Rotas sólidas do Nordeste ao Sul do país.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-xl overflow-hidden relative shadow-2xl">
              <img 
                src={import.meta.env.BASE_URL + "fleet.jpg"} 
                alt="Trans Catelan Fleet" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/95 backdrop-blur rounded-lg p-6 shadow-xl border-l-4 border-primary">
                  <div className="flex items-center gap-4 mb-2">
                    <Clock className="w-8 h-8 text-primary" />
                    <span className="text-4xl font-black text-foreground">45</span>
                  </div>
                  <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
                    Anos de Experiência
                  </p>
                </div>
              </div>
            </div>
            
            {/* Decorative background element */}
            <div className="absolute -top-6 -right-6 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
