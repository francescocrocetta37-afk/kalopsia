import { Hand, Tent, Music2, Smile } from "lucide-react";
import Reveal, { Tag } from "./Reveal";

const IMG_SHISHA =
    "https://images.unsplash.com/photo-1635547821500-77542481940c?auto=format&fit=crop&w=1400&q=80";
const IMG_CARDS =
    "https://images.unsplash.com/photo-1644458719048-304b60863367?auto=format&fit=crop&w=1200&q=80";

const SERVICES = [
    { icon: Tent, label: "Tavoli all'aperto" },
    { icon: Music2, label: "Zona ballo" },
    { icon: Smile, label: "Servizio cordiale" },
];

export default function Experiences() {
    return (
        <section
            id="esperienze"
            data-testid="experiences-section"
            className="py-24 sm:py-32"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <Reveal className="max-w-2xl">
                    <Tag>Esperienze uniche · Inclusività & condivisione</Tag>
                    <h2 className="font-display font-extrabold uppercase tracking-tighter text-3xl sm:text-4xl lg:text-5xl leading-[1.02]">
                        Molto più di un{" "}
                        <span className="font-serifit italic normal-case text-neon">
                            drink.
                        </span>
                    </h2>
                </Reveal>

                <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-5">
                    <Reveal className="lg:col-span-7">
                        <div
                            data-testid="shisha-card"
                            className="group relative h-[440px] lg:h-[500px] rounded-3xl overflow-hidden border border-white/10"
                        >
                            <img
                                src={IMG_SHISHA}
                                alt="Shisha nel lounge del Kalopsia"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                            <div className="absolute bottom-0 left-0 p-8 sm:p-10">
                                <p className="text-xs uppercase tracking-[0.25em] font-semibold text-lime mb-3">
                                    Il rituale della condivisione
                                </p>
                                <h3 className="font-display font-extrabold uppercase tracking-tighter text-2xl sm:text-3xl">
                                    La Shisha
                                </h3>
                                <p className="mt-4 max-w-md text-zinc-300 leading-relaxed">
                                    Intesa come simbolo di amicizia, unione e
                                    fratellanza: un rituale lento da
                                    condividere tra amici, boccata dopo boccata,
                                    mentre la serata scorre.
                                </p>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={0.1} className="lg:col-span-5">
                        <div
                            data-testid="aperitivolis-card"
                            className="group relative h-[440px] lg:h-[500px] rounded-3xl bg-lime text-ink p-8 sm:p-10 flex flex-col justify-between overflow-hidden"
                        >
                            <div className="flex items-start justify-between">
                                <p className="text-xs uppercase tracking-[0.25em] font-bold text-ink/70">
                                    Ogni Domenica
                                </p>
                                <Hand className="w-10 h-10 transition-transform duration-500 group-hover:rotate-12" strokeWidth={1.5} />
                            </div>
                            <div>
                                <h3 className="font-display font-extrabold uppercase tracking-tighter text-3xl sm:text-4xl leading-none">
                                    Aperitivo<span className="font-serifit italic normal-case">LIS</span>
                                </h3>
                                <p className="mt-5 text-ink/80 leading-relaxed">
                                    L'evento unico nel suo genere: ogni
                                    domenica si bevono ottimi cocktail e si
                                    impara la Lingua dei Segni Italiana. Un
                                    aperitivo inclusivo che parla anche con le
                                    mani.
                                </p>
                                <p className="mt-6 inline-flex rounded-full border-2 border-ink/80 px-5 py-2 text-sm font-bold uppercase tracking-wider">
                                    Bevi · Impara · Comunica
                                </p>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={0.05} className="lg:col-span-5">
                        <div
                            data-testid="cards-card"
                            className="group relative h-[380px] rounded-3xl overflow-hidden border border-white/10"
                        >
                            <img
                                src={IMG_CARDS}
                                alt="Il gioco delle carte al Kalopsia"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
                            <div className="absolute bottom-0 left-0 p-8">
                                <p className="text-xs uppercase tracking-[0.25em] font-semibold text-lime mb-3">
                                    Lasciati sorprendere
                                </p>
                                <h3 className="font-display font-extrabold uppercase tracking-tighter text-2xl">
                                    Il Gioco delle Carte
                                </h3>
                                <p className="mt-3 text-zinc-300 text-sm leading-relaxed max-w-sm">
                                    Scegliere il drink fa parte del gioco:
                                    pesca una carta e concediti una proposta
                                    fuori dagli schemi.
                                </p>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={0.1} className="lg:col-span-7">
                        <div
                            data-testid="services-card"
                            className="h-[380px] rounded-3xl border border-white/10 bg-surface p-8 sm:p-10 flex flex-col justify-between"
                        >
                            <h3 className="font-display font-extrabold uppercase tracking-tighter text-2xl">
                                Servizi & Comfort
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                {SERVICES.map(({ icon: Icon, label }) => (
                                    <div
                                        key={label}
                                        className="rounded-2xl border border-white/10 bg-ink p-6 transition-all duration-300 hover:-translate-y-1 hover:border-neon/50"
                                    >
                                        <Icon className="w-7 h-7 text-neon mb-4" strokeWidth={1.75} />
                                        <p className="text-sm font-medium text-zinc-200">
                                            {label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
