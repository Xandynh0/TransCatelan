import { motion } from "framer-motion";
import { Instagram, MapPin, Phone, Mail, FileText } from "lucide-react";
import { Button } from "./ui/button";

export function Contact() {
  return (
    <section id="contato" className="py-24 relative overflow-hidden bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Fale Conosco</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold mb-8">
              Prontos para carregar o seu negócio
            </h3>
            <p className="text-secondary-foreground/80 text-lg mb-10 max-w-md">
              Entre em contato com nossa equipe. Estamos à disposição para entender sua necessidade e oferecer a melhor solução logística.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-secondary-foreground/60 uppercase tracking-wider mb-1">Telefone</h4>
                  <p className="text-xl font-medium">(77) 3628-2196</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-secondary-foreground/60 uppercase tracking-wider mb-1">E-mail</h4>
                  <a href="mailto:TRANSPORTES@CATELAN.AGR.BR" className="text-lg font-medium hover:text-primary transition-colors break-all">
                    TRANSPORTES@CATELAN.AGR.BR
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-secondary-foreground/60 uppercase tracking-wider mb-1">Endereço</h4>
                  <p className="text-lg font-medium">
                    Rua Burle Marx, N° 3160<br />
                    Luís Eduardo Magalhães – BA<br />
                    CEP 47858-004
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-secondary-foreground/60 uppercase tracking-wider mb-1">CNPJ</h4>
                  <p className="text-lg font-medium">08.211.163/0001-25</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-secondary-foreground/10">
              <a 
                href="https://www.instagram.com/luizcatelan/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-lg font-medium hover:text-primary transition-colors group"
              >
                <span className="w-10 h-10 bg-secondary-foreground/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Instagram className="w-5 h-5" />
                </span>
                Siga Luiz Catelan no Instagram
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl"
          >
            <h3 className="text-2xl font-serif font-bold text-foreground mb-6">Envie uma mensagem</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">Nome completo</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full h-12 px-4 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                  placeholder="Seu nome"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">E-mail</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full h-12 px-4 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                  placeholder="seu@email.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-foreground">Telefone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full h-12 px-4 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                  placeholder="(00) 00000-0000"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">Mensagem</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full p-4 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none"
                  placeholder="Como podemos ajudar?"
                />
              </div>
              <Button size="lg" className="w-full text-lg h-14" type="submit">
                Enviar Mensagem
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
