const ITEMS = [
    "Cocktail d'Autore",
    "AperitivoLIS · Ogni Domenica",
    "Shisha & Amicizia",
    "Pescara Vecchia",
    "Aperitivi Abbondanti",
    "Aperti fino alle 02:00",
];

const Diamond = () => (
    <svg viewBox="0 0 12 12" className="w-3 h-3 shrink-0 text-neon" aria-hidden="true">
        <rect x="2" y="2" width="8" height="8" transform="rotate(45 6 6)" fill="currentColor" />
    </svg>
);

const Row = ({ hidden }) => (
    <div aria-hidden={hidden || undefined} className="flex items-center gap-14 pr-14">
        {ITEMS.map((item) => (
            <span key={item} className="flex items-center gap-14">
                <span className="font-serifit italic text-2xl sm:text-3xl text-zinc-100 whitespace-nowrap">
                    {item}
                </span>
                <Diamond />
            </span>
        ))}
    </div>
);

export default function Marquee() {
    return (
        <div
            data-testid="marquee"
            className="marquee relative overflow-hidden border-y border-white/10 bg-surface py-6"
        >
            <div className="marquee-track flex w-max items-center">
                <Row />
                <Row hidden />
            </div>
        </div>
    );
}
