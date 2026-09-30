import { useEffect, Component } from "react";
import Lenis from "lenis";
import Navbar from "./components/kalopsia/Navbar";
import Hero from "./components/kalopsia/Hero";
import Marquee from "./components/kalopsia/Marquee";
import About from "./components/kalopsia/About";
import MenuSection from "./components/kalopsia/MenuSection";
import Experiences from "./components/kalopsia/Experiences";
import Reviews from "./components/kalopsia/Reviews";
import Info from "./components/kalopsia/Info";
import Footer from "./components/kalopsia/Footer";
import FloatingCall from "./components/kalopsia/FloatingCall";
import "./App.css";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-ink text-white flex items-center justify-center p-8">
                    <p className="text-zinc-400">
                        Qualcosa è andato storto. Ricarica la pagina.
                    </p>
                </div>
            );
        }
        return this.props.children;
    }
}

function App() {
    useEffect(() => {
        const reduce =
            window.matchMedia &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduce) return;
        const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
        window.__lenis = lenis;
        let raf;
        const loop = (t) => {
            lenis.raf(t);
            raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);
        return () => {
            cancelAnimationFrame(raf);
            lenis.destroy();
            window.__lenis = null;
        };
    }, []);

    return (
        <ErrorBoundary>
            <div className="bg-ink text-white font-body antialiased">
                <div className="grain" aria-hidden="true" />
                <Navbar />
                <main>
                    <Hero />
                    <Marquee />
                    <About />
                    <MenuSection />
                    <Experiences />
                    <Reviews />
                    <Info />
                </main>
                <Footer />
                <FloatingCall />
            </div>
        </ErrorBoundary>
    );
}

export default App;
