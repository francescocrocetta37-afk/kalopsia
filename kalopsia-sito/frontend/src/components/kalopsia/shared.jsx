export const KalopsiaMark = ({ className = "w-9 h-9" }) => (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
        <rect width="64" height="64" rx="16" fill="#FF007F" />
        <rect x="16" y="13" width="8" height="38" rx="4" fill="#09090B" />
        <path d="M32 33 L46 15" stroke="#09090B" strokeWidth="8" strokeLinecap="round" />
        <path d="M31 34 L48 49" stroke="#09090B" strokeWidth="8" strokeLinecap="round" />
        <circle cx="50" cy="14" r="5" fill="#CCFF00" />
    </svg>
);

export const scrollToSection = (href) => {
    const el = document.querySelector(href);
    if (!el) return;
    if (window.__lenis) window.__lenis.scrollTo(el, { offset: -70 });
    else el.scrollIntoView({ behavior: "smooth" });
};
