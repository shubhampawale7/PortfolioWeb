import { cn } from "@/lib/utils";
import {
  Menu,
  X,
  Home,
  User,
  Code,
  FolderOpen,
  Mail,
  Briefcase,
  Layers, // New icon for Services
} from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero", icon: <Home size={18} className="mr-2" /> },
  { name: "About", href: "#about", icon: <User size={18} className="mr-2" /> },
  {
    name: "Services", // Added Services
    href: "#services", // Link to your new services section ID
    icon: <Layers size={18} className="mr-2" />, // Icon for Services
  },
  {
    name: "Skills",
    href: "#skills",
    icon: <Code size={18} className="mr-2" />,
  },

  {
    name: "Experience",
    href: "#experience",
    icon: <Briefcase size={18} className="mr-2" />,
  },
  {
    name: "Projects",
    href: "#projects",
    icon: <FolderOpen size={18} className="mr-2" />,
  },
  {
    name: "Contact",
    href: "#contact",
    icon: <Mail size={18} className="mr-2" />,
  },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled
          ? "py-3 bg-background/70 backdrop-blur-lg shadow-md border-b border-border"
          : "py-5"
      )}
    >
      <div className="container flex items-center justify-between px-4 md:px-15">
        <a
          className="text-2xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10 tracking-tight">
            <span className="text-glow text-foreground">Shubham Pawale</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="flex items-center text-foreground/80 hover:text-primary transition-colors duration-300 font-medium"
            >
              {item.icon}
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden pr-15 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Overlay Menu */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="flex items-center text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.icon}
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
