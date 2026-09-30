import { MapPin, Phone, Instagram, Facebook, Clock } from "lucide-react";
import Reveal, { Tag } from "./Reveal";

const MAP_URL =
    "https://www.google.com/maps?q=Corso+Gabriele+Manthone+104,+65127+Pescara+PE&output=embed";

const HOURS = [
    { day: "Martedì — Domenica", time: "18:00 – 02:00", open: true },
    { day: "Lunedì", time: "Chiuso", open: false },
];

export default function Info() {
    return (
        <section
            id="contatti"
            data-testid="info-section"
            className="py-24 sm:py-32"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-14 items-stretch">
                <Reveal>
                    <Tag>Info, orari & contatti</Tag>
                    <h2 className="font-display font-extrabold uppercase tracking-tighter text-3xl sm:text-4xl lg:text-5xl leading-[1.02]">
                        Vieni a trovarci a{" "}
                        <span className="font-serifit italic normal-case text-neon">
                            Pescara Vecchia.
                        </span>
                    </h2>

                    <div className="mt-10 rounded-3xl border border-white/10 bg-surface overflow-hidden">
                        <div className="flex items-center gap-3 px-7 py-5 border-b border-white/10">
                            <Clock className="w-5 h-5 text-lime" />
                            <h3 className="font-display font-bold uppercase tracking-tight">
                                Orari di apertura
                            </h3>
                        </div>
                        {HOURS.map((h) => (
                            <div
                                key={h.day}
                                data-testid={`hours-row-${h.open ? "open" : "closed"}`}
                                className="flex items-center justify-between px-7 py-4 border-b border-white/5 last:border-b-0"
                            >
                                <span className="text-zinc-300">{h.day}</span>
                                <span
                                    className={`font-semibold ${
                                        h.open ? "text-lime" : "text-zinc-500"
                                    }`}
                                >
                                    {h.time}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 flex items-start gap-3 text-zinc-300">
                        <MapPin className="w-5 h-5 text-neon shrink-0 mt-0.5" />
                        <p className="leading-relaxed">
                            Corso Gabriele Manthone, 104
                            <br />
                            65127 Pescara PE
                        </p>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <a
                            data-testid="contact-call-button"
                            href="tel:+393914015915"
                            className="inline-flex items-center gap-2.5 rounded-full bg-neon px-7 py-4 font-semibold text-white shadow-[0_0_32px_rgba(255,0,127,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_48px_rgba(255,0,127,0.65)]"
                        >
                            <Phone className="w-5 h-5" fill="currentColor" />
                            +39 391 401 5915
                        </a>
                        <a
                            data-testid="contact-whatsapp-button"
                            href="https://wa.me/393914015915"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2.5 rounded-full border border-white/25 px-7 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-lime hover:text-lime"
                        >
                            WhatsApp
                        </a>
                    </div>

                    <div className="mt-8 flex flex-wrap items-center gap-3">
                        <a
                            data-testid="contact-instagram-button"
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram di Kalopsia"
                            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm text-zinc-300 transition-all duration-300 hover:border-neon hover:text-neon"
                        >
                            <Instagram className="w-4 h-4" />
                            Instagram
                        </a>
                        <a
                            data-testid="contact-facebook-button"
                            href="https://www.facebook.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook di Kalopsia"
                            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm text-zinc-300 transition-all duration-300 hover:border-neon hover:text-neon"
                        >
                            <Facebook className="w-4 h-4" />
                            Facebook
                        </a>
                    </div>
                </Reveal>

                <Reveal delay={0.1}>
                    <iframe
                        data-testid="map-embed"
                        title="Mappa — Kalopsia, Corso Gabriele Manthone 104, Pescara"
                        src={MAP_URL}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-[420px] lg:h-full min-h-[420px] rounded-3xl border border-white/10"
                        allowFullScreen
                    />
                </Reveal>
            </div>
        </section>
    );
}
