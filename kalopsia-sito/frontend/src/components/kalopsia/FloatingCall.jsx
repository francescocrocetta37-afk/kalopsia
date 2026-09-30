import { Phone } from "lucide-react";

export default function FloatingCall() {
    return (
        <a
            data-testid="floating-call-btn"
            href="tel:+393914015915"
            aria-label="Chiama Kalopsia"
            className="fixed bottom-5 right-5 z-50 group"
        >
            <span className="absolute inset-0 rounded-full bg-neon/50 animate-ping" />
            <span className="relative flex w-14 h-14 rounded-full bg-neon items-center justify-center shadow-[0_0_32px_rgba(255,0,127,0.55)] transition-transform duration-300 group-hover:scale-110">
                <Phone
                    className="w-6 h-6 text-white transition-transform duration-300 group-hover:rotate-12"
                    fill="currentColor"
                />
            </span>
        </a>
    );
}
