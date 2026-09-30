import { Star } from "lucide-react";
import Reveal, { Tag } from "./Reveal";

const REVIEWS = [
    {
        quote:
            "Aperitivo abbondantissimo e cocktail curati nei dettagli: rapporto qualità-prezzo imbattibile.",
    },
    {
        quote:
            "Staff gentilissimo e simpatico, ti accoglie come un amico e ti mette subito a tuo agio.",
    },
    {
        quote:
            "Locale originale e suggestivo, ogni serata è diversa dalla precedente. Il gioco delle carte è una chicca.",
    },
];

const Stars = ({ size = "w-5 h-5" }) => (
    <span className="inline-flex gap-1 text-lime">
        {[...Array(5)].map((_, i) => (
            <Star key={i} className={size} fill="currentColor" strokeWidth={0} />
        ))}
    </span>
);

export default function Reviews() {
    return (
        <section
            id="recensioni"
            data-testid="reviews-section"
            className="py-24 sm:py-32 bg-surface border-y border-white/10"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-14 items-start">
                <Reveal className="lg:col-span-5">
                    <Tag>Dicono di noi</Tag>
                    <div data-testid="rating-widget" className="flex items-end gap-5">
                        <span className="font-display font-black tracking-tighter text-7xl sm:text-8xl leading-none">
                            4,9
                        </span>
                        <div className="pb-2">
                            <Stars />
                            <p className="mt-2 text-sm text-zinc-400">
                                su oltre 90 recensioni
                            </p>
                        </div>
                    </div>
                    <p className="mt-6 max-w-sm text-zinc-400 leading-relaxed">
                        La comunità di Pescara Vecchia ha già fatto il suo
                        verdetto: Google e Infobel parlano chiaro.
                    </p>
                    <p className="mt-4 text-xs uppercase tracking-[0.25em] text-zinc-600">
                        Google · Infobel
                    </p>
                </Reveal>

                <div className="lg:col-span-7 flex flex-col gap-8">
                    {REVIEWS.map((r, i) => (
                        <Reveal key={i} delay={i * 0.08}>
                            <blockquote
                                data-testid={`review-quote-${i}`}
                                className="border-l-2 border-neon/70 pl-6 sm:pl-8"
                            >
                                <p className="text-xl sm:text-2xl font-light leading-snug text-zinc-100">
                                    «{r.quote}»
                                </p>
                                <footer className="mt-3 flex items-center gap-3">
                                    <Stars size="w-3.5 h-3.5" />
                                    <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                                        Recensione Google
                                    </span>
                                </footer>
                            </blockquote>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
