import { motion } from "framer-motion";
import Reveal, { Tag } from "./Reveal";

const IMG_SIGN =
    "https://images.unsplash.com/photo-1778102779683-768d0343c31b?auto=format&fit=crop&w=1200&q=80";
const IMG_PEOPLE =
    "https://images.unsplash.com/photo-1781525674722-ac94844ad157?auto=format&fit=crop&w=1000&q=80";

const CHIPS = ["Intimo & accogliente", "Dettagli curati", "Proposte originali"];

export default function About() {
    return (
        <section
            id="chi-siamo"
            data-testid="about-section"
            className="py-24 sm:py-32"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                <Reveal>
                    <Tag>Chi siamo · La nostra atmosfera</Tag>
                    <h2 className="font-display font-extrabold uppercase tracking-tighter text-3xl sm:text-4xl lg:text-5xl leading-[1.02]">
                        Un locale piccolo, curato nei{" "}
                        <span className="font-serifit italic normal-case text-neon">
                            minimi dettagli.
                        </span>
                    </h2>
                    <p className="mt-8 text-zinc-300 leading-relaxed">
                        Nel cuore di Pescara Vecchia, Kalopsia è un punto di
                        ritrovo intimo e accogliente, dove ogni visita diventa
                        un'esperienza originale. A volte è il gioco delle carte
                        a decidere il tuo drink, a volte è una proposta fuori
                        dagli schemi che non ti aspettavi.
                    </p>
                    <p className="mt-5 text-zinc-400 leading-relaxed">
                        La qualità dei drink incontra la cultura dell'unione:
                        amicizia, condivisione e il piacere lento di stare
                        insieme, dal primo aperitivo al dopocena.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        {CHIPS.map((c) => (
                            <span
                                key={c}
                                className="rounded-full border border-white/15 px-4 py-2 text-sm text-zinc-300"
                            >
                                {c}
                            </span>
                        ))}
                    </div>
                </Reveal>

                <div className="relative h-[420px] sm:h-[520px]">
                    <motion.div
                        initial={{ opacity: 0, y: 40, rotate: 3 }}
                        whileInView={{ opacity: 1, y: 0, rotate: 2 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-0 right-0 w-[78%] h-[75%] rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
                    >
                        <img
                            src={IMG_SIGN}
                            alt="Insegna neon nel locale"
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 60, rotate: -4 }}
                        whileInView={{ opacity: 1, y: 0, rotate: -3 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            duration: 0.9,
                            delay: 0.15,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="absolute bottom-0 left-0 w-[52%] h-[52%] rounded-xl overflow-hidden border-4 border-ink shadow-2xl z-10"
                    >
                        <img
                            src={IMG_PEOPLE}
                            alt="Serata al Kalopsia"
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="absolute -bottom-2 right-2 font-serifit italic text-xl text-zinc-400"
                    >
                        «Ogni visita, un'esperienza.»
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
