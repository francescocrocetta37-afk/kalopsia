import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Star, Phone, ChevronDown } from "lucide-react";
import { scrollToSection } from "./shared";
import { easeOut } from "./Reveal";

const HERO_IMG =
    "https://images.unsplash.com/photo-1636144924623-b3aea3c5f16c?auto=format&fit=crop&w=2000&q=80";

const LINES = ["Kalopsia:", "Il Gusto", "dell'Unione", "a Pescara Vecchia."];

const Stars = ({ className = "w-4 h-4" }) => (
    <span className="inline-flex gap-0.5 text-lime">
        {[...Array(5)].map((_, i) => (
            <Star key={i} className={className} fill="currentColor" strokeWidth={0} />
        ))}
    </span>
);

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "24%"]);
    const scale = useTransform(scrollYProgress, [0, 1], [1.06, 1.22]);

    return (
        <section
            ref={ref}
            data-testid="hero-section"
            className="relative min-h-screen flex flex-col justify-end overflow-hidden"
        >
            <motion.div style={{ y, scale }} className="absolute inset-0">
                <img
                    src={HERO_IMG}
                    alt="Cocktail d'autore Kalopsia"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-ink/70" />
            </motion.div>

            <div className="absolute top-24 right-6 lg:right-12 hidden lg:flex flex-col gap-2 rounded-2xl bg-black/50 backdrop-blur-xl border border-white/10 p-6 z-10">
                <div className="flex items-baseline gap-2">
                    <span className="font-display text-4xl font-extrabold">4,9</span>
                    <Stars />
                </div>
                <p className="text-xs text-zinc-400">
                    su oltre 90 recensioni · Google
                </p>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-12 pt-36 pb-16">
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1, ease: easeOut }}
                    className="inline-flex items-center gap-3 rounded-full bg-white/10 backdrop-blur-md border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.25em] font-semibold text-zinc-200 mb-8"
                >
                    Cocktail Bar · Pescara Vecchia
                </motion.p>

                <h1
                    data-testid="hero-headline"
                    className="font-display font-black uppercase tracking-tighter leading-[0.95] text-[clamp(2.4rem,7.5vw,6.5rem)]"
                >
                    {LINES.map((line, i) => (
                        <span key={line} className="block overflow-hidden pb-1">
                            <motion.span
                                className={
                                    i === 2
                                        ? "block text-neon"
                                        : "block"
                                }
                                style={
                                    i === 2
                                        ? {
                                              fontFamily:
                                                  '"Instrument Serif", serif',
                                              fontStyle: "italic",
                                              textTransform: "none",
                                              fontWeight: 400,
                                          }
                                        : undefined
                                }
                                initial={{ y: "112%" }}
                                animate={{ y: 0 }}
                                transition={{
                                    duration: 1,
                                    delay: 0.2 + i * 0.12,
                                    ease: easeOut,
                                }}
                            >
                                {line}
                            </motion.span>
                        </span>
                    ))}
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.85, ease: easeOut }}
                    className="mt-7 max-w-xl text-base sm:text-lg leading-relaxed text-zinc-300"
                >
                    Cocktail ricercati, shisha d'atmosfera e l'esperienza unica
                    dell'AperitivoLIS.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1, ease: easeOut }}
                    className="mt-9 flex flex-wrap items-center gap-4"
                >
                    <a
                        data-testid="hero-cta-call"
                        href="tel:+393914015915"
                        className="inline-flex items-center gap-2.5 rounded-full bg-neon px-7 py-4 font-semibold text-white shadow-[0_0_32px_rgba(255,0,127,0.45)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_48px_rgba(255,0,127,0.7)]"
                    >
                        <Phone className="w-5 h-5" fill="currentColor" />
                        Prenota un Tavolo
                    </a>
                    <button
                        data-testid="hero-cta-menu"
                        onClick={() => scrollToSection("#menu")}
                        className="inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/5 backdrop-blur-sm px-7 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-lime hover:text-lime"
                    >
                        Scopri il Menu
                    </button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.3 }}
                    className="mt-14 hidden sm:flex items-center justify-between text-xs uppercase tracking-[0.2em] text-zinc-400"
                >
                    <span className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-lime" />
                        Corso Gabriele Manthone, 104
                    </span>
                    <span className="flex items-center gap-2">
                        Mar–Dom · 18:00–02:00
                        <ChevronDown className="w-4 h-4 animate-bounce" />
                    </span>
                </motion.div>
            </div>
        </section>
    );
}
