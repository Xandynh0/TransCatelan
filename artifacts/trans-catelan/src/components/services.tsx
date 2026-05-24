import { motion } from "framer-motion";
import { Truck, Settings, Disc, Wheat } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export function Services() {
  const services = [
    {
      title: "Transporte de Cargas",
      description: "Transporte rodoviário intermunicipal, interestadual e internacional. Soluções logísticas para grandes volumes com pontualidade.",
      icon: Truck,
      image: "fleet.jpg"
    },
    {
      title: "Peças e Acessórios",
      description: "Comércio de peças e acessórios para veículos pesados. Qualidade e durabilidade para manter sua frota sempre rodando.",
      icon: Settings,
      image: "parts.jpg"
    },
    {
      title: "Pneumáticos",
      description: "Especialistas em comércio de pneus. Oferecemos as melhores marcas para garantir aderência e segurança no trecho.",
      icon: Disc,
      image: "tires.jpg"
    },
    {
      title: "Soja e Algodão",
      description: "Comércio atacadista de grãos. Forte atuação no agronegócio baiano, escoando as safras de soja e algodão.",
      icon: Wheat,
      image: "soy-field.jpg"
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-primary uppercase tracking-widest mb-2"
          >
            Nossas Soluções
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-foreground"
          >
            Excelência em cada etapa da jornada
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="overflow-hidden h-full group hover:shadow-lg transition-all duration-300 border-border/50">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/20 transition-colors duration-300" />
                  <img 
                    src={import.meta.env.BASE_URL + service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 z-20 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-serif">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
