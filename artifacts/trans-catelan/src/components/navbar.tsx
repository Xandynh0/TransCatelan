import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "./ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Frota", href: "#frota" },
    { label: "Contato", href: "#contato" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-border py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer bg-white px-2 py-1 rounded">
              <img
                src={import.meta.env.BASE_URL + "logo.jpg"}
                alt="Trans Catelan Logo"
                className="h-10 md:h-12 object-contain"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-white/80"
                }`}
              >
                {link.label}
              </a>
            ))}
            <Button
              className="rounded-full shadow-lg gap-2"
              variant={isScrolled ? "default" : "secondary"}
              onClick={() => {
                const element = document.querySelector("#contato");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <Phone className="w-4 h-4" />
              <span>Fale Conosco</span>
            </Button>
          </nav>

          {/* Mobile Toggle */}
          <button
            className={`md:hidden p-2 rounded-md ${
              isScrolled ? "text-foreground" : "text-white bg-black/20"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-border shadow-lg">
          <nav className="flex flex-col p-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="py-3 text-base font-medium text-foreground border-b border-border/50 last:border-0"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4">
              <Button className="w-full gap-2" size="lg">
                <Phone className="w-4 h-4" />
                (77) 3628-2196
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
