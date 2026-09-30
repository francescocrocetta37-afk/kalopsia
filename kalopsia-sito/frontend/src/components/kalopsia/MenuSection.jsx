import { Phone } from "lucide-react";
import Reveal, { Tag } from "./Reveal";

const IMG_BARTENDER =
    "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?auto=format&fit=crop&w=1200&q=80";

const MENU = [
    {
        name: "Spritz Kalopsia",
        desc: "Il nostro spritz rivisitato: colore acceso, freschezza da aperitivo.",
    },
    {
        name: "Gin Unione",
        desc: "Botaniche equilibrate su agrumi e spezie: il drink dell'amicizia.",
    },
    {
        name: "Il Cartomante",
        desc: "Lascia che siano le carte a scegliere: il drink del giorno deciso dal gioco.",
    },
    {
        name: "Fratellanza",
        desc: "Ronde affumicate e note amiable: pensato per accompagnare la shisha.",
    },
    {
        name: "AperitivoLIS",
        desc: "Il drink della domenica: si assaggia, si impara, si comunica.",
    },
];

export default function MenuSection() {
    return (
        <section
            id="menu"
            data-testid="menu-section"
            className="py-24 sm:py-32 bg-surface border-y border-white/10"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-14 items-start">
                <Reveal className="lg:col-span-5 lg:sticky lg:top-28">
                    <Tag>Cocktail & Aperitivi</Tag>
                    <h2 className="font-display font-extrabold uppercase tracking-tighter text-3xl sm:text-4xl lg:text-5xl leading-[1.02]">
                        Drink d'autore,{" "}
                        <span className="font-serifit italic normal-case text-neon">
                            aperitivi generosi.
                        </span>
                    </h2>
                    <p className="mt-7 text-zinc-300 leading-relaxed">
                        Cocktail originali nati dalla nostra fantasia, birre
                        selezionate e vini scelti con cura. Ogni aperitivo
                        arriva al tavolo accompagnato da stuzzichini
                        abbondanti: qui nessuno esce con fame.
                    </p>
                    <div className="mt-7 inline-flex items-center gap-2 rounded-full bg-lime px-5 py-2.5 text-sm font-bold text-ink">
                        1–10 € a persona · aperitivo e dopocena
                    </div>
                    <div className="mt-8 rounded-2xl overflow-hidden border border-white/10 h-56 sm:h-64">
                        <img
                            src={IMG_BARTENDER}
                            alt="Il bartender al lavoro"
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                    </div>
                    <a
                        data-testid="menu-call-cta"
                        href="tel:+393914015915"
                        className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-neon px-7 py-4 font-semibold text-white shadow-[0_0_32px_rgba(255,0,127,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_48px_rgba(255,0,127,0.65)]"
                    >
                        <Phone className="w-5 h-5" fill="currentColor" />
                        Prenota un Tavolo
                    </a>
                </Reveal>

                <Reveal delay={0.1} className="lg:col-span-7">
                    <div className="rounded-3xl border border-white/10 bg-ink overflow-hidden">
                        <div className="flex items-center justify-between px-6 sm:px-10 py-6 border-b border-white/10">
                            <h3 className="font-display font-bold uppercase tracking-tight text-lg">
                                Il Menù
                            </h3>
                            <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                                Menù digitale
                            </span>
                        </div>
                        {MENU.map((item, i) => (
                            <div
                                key={item.name}
                                data-testid={`menu-item-${i}`}
                                className="group flex items-baseline gap-6 px-6 sm:px-10 py-6 border-b border-white/10 transition-colors duration-300 hover:bg-white/5"
                            >
                                <span className="font-serifit italic text-neon text-lg">
                                    0{i + 1}
                                </span>
                                <div>
                                    <h4 className="font-display font-bold tracking-tight group-hover:text-lime transition-colors duration-300">
                                        {item.name}
                                    </h4>
                                    <p className="mt-1.5 text-sm text-zinc-400 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                        <p className="px-6 sm:px-10 py-5 text-xs text-zinc-500 leading-relaxed">
                            Menù indicativo: le proposte d'autore cambiano di
                            settimana in settimana. Passa al banco o chiama per
                            scoprire le novità del momento.
                        </p>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
