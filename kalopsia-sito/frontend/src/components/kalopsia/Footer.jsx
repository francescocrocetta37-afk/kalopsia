import { KalopsiaMark } from "./shared";

export default function Footer() {
    return (
        <footer
            data-testid="footer"
            className="relative overflow-hidden border-t border-white/10 pt-16 pb-10"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <p
                    aria-hidden="true"
                    className="font-display font-black uppercase tracking-tighter leading-none text-[18vw] lg:text-[11rem] select-none text-transparent"
                    style={{
                        WebkitTextStroke: "1px rgba(255,255,255,0.16)",
                    }}
                >
                    Kalopsia
                </p>

                <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
                    <div className="flex items-center gap-3">
                        <KalopsiaMark className="w-8 h-8" />
                        <div>
                            <p className="font-display font-bold uppercase tracking-tight text-sm">
                                Kalopsia — Cocktail Bar
                            </p>
                            <p className="text-xs text-zinc-500 mt-1">
                                Corso Gabriele Manthone, 104 · 65127 Pescara PE
                            </p>
                        </div>
                    </div>
                    <p className="text-xs text-zinc-600">
                        © {new Date().getFullYear()} Kalopsia · Pescara Vecchia
                    </p>
                </div>
            </div>
        </footer>
    );
}
