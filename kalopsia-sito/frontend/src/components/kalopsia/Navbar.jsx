import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { KalopsiaMark, scrollToSection } from "./shared";

const LINKS = [
    { label: "Chi siamo", href: "#chi-siamo" },
    { label: "Menu", href: "#menu" },
    { label: "Esperienze", href: "#esperienze" },
    { label: "Recensioni", href: "#recensioni" },
    { label: "Contatti", href: "#contatti" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const go = (href) => {
        setOpen(false);
        setTimeout(() => scrollToSection(href), open ? 250 : 0);
    };

    return (
        <header
            data-testid="navbar"
            className="fixed top-0 inset-x-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/10"
        >
            <div className="max-w-7xl mx-auto px-5 lg:px-12 h-16 flex items-center justify-between">
                <button
                    data-testid="nav-logo"
                    onClick={() => window.__lenis ? window.__lenis.scrollTo(0) : window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="flex items-center gap-3 group"
                    aria-label="Kalopsia — torna su"
                >
                    <KalopsiaMark className="w-8 h-8 transition-transform duration-300 group-hover:rotate-6" />
                    <span className="font-display font-extrabold tracking-tight text-sm uppercase">
                        Kalopsia
                    </span>
                </button>

                <nav className="hidden lg:flex items-center gap-8">
                    {LINKS.map((l) => (
                        <button
                            key={l.href}
                            data-testid={`nav-link-${l.href.slice(1)}`}
                            onClick={() => go(l.href)}
                            className="text-sm text-zinc-300 hover:text-white transition-colors duration-200"
                        >
                            {l.label}
                        </button>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <a
                        data-testid="nav-call-button"
                        href="tel:+393914015915"
                        className="hidden sm:inline-flex items-center gap-2 rounded-full bg-neon px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_24px_rgba(255,0,127,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_36px_rgba(255,0,127,0.6)]"
                    >
                        <Phone className="w-4 h-4" fill="currentColor" />
                        Prenota un Tavolo
                    </a>
                    <button
                        data-testid="nav-toggle"
                        className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/15 text-white"
                        onClick={() => setOpen(!open)}
                        aria-label={open ? "Chiudi menu" : "Apri menu"}
                    >
                        {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.nav
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="lg:hidden overflow-hidden bg-ink/95 backdrop-blur-xl border-t border-white/10"
                        data-testid="mobile-menu"
                    >
                        <div className="px-6 py-6 flex flex-col gap-1">
                            {LINKS.map((l) => (
                                <button
                                    key={l.href}
                                    data-testid={`mobile-link-${l.href.slice(1)}`}
                                    onClick={() => go(l.href)}
                                    className="text-left font-display font-bold uppercase tracking-tight text-xl py-3 border-b border-white/5 text-zinc-100 hover:text-neon transition-colors"
                                >
                                    {l.label}
                                </button>
                            ))}
                            <a
                                data-testid="mobile-call-button"
                                href="tel:+393914015915"
                                className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-neon px-6 py-3.5 font-semibold text-white"
                            >
                                <Phone className="w-4 h-4" fill="currentColor" />
                                Prenota un Tavolo
                            </a>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}
