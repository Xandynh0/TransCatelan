import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t-4 border-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
          
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="bg-white p-2 rounded inline-block">
              <img 
                src={import.meta.env.BASE_URL + "logo.jpg"} 
                alt="Trans Catelan Logo" 
                className="h-12 object-contain"
              />
            </div>
            <p className="text-white/70 max-w-xs text-center md:text-left mt-4 text-sm leading-relaxed">
              Confiança que percorre o Brasil. 45 anos de tradição transportando o progresso do Nordeste ao Sul.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 text-center md:text-left">
            <div>
              <h4 className="font-bold mb-4 uppercase tracking-wider text-sm text-white/90">Navegação</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="#sobre" className="hover:text-primary transition-colors">Sobre Nós</a></li>
                <li><a href="#servicos" className="hover:text-primary transition-colors">Serviços</a></li>
                <li><a href="#contato" className="hover:text-primary transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 uppercase tracking-wider text-sm text-white/90">Atuação</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li>Transporte Rodoviário</li>
                <li>Peças e Acessórios</li>
                <li>Pneumáticos</li>
                <li>Grãos (Soja e Algodão)</li>
              </ul>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>© {new Date().getFullYear()} Trans Catelan. Todos os direitos reservados.</p>
          <p>Luís Eduardo Magalhães, Bahia, Brasil</p>
        </div>
      </div>
    </footer>
  );
}
