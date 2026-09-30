import { motion } from "framer-motion";

export const easeOut = [0.16, 1, 0.3, 1];

export default function Reveal({ children, delay = 0, y = 36, className }) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, delay, ease: easeOut }}
        >
            {children}
        </motion.div>
    );
}

export const Tag = ({ children, light = false }) => (
    <p
        className={`text-xs uppercase tracking-[0.25em] font-semibold mb-5 ${
            light ? "text-ink/70" : "text-neon"
        }`}
    >
        {children}
    </p>
);
