import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
    Header,
    HeroSection,
    ClientsSection,
    AboutSection,
    StatsSection,
    Portfolio,
    FaqSection,
    TestimonialsSection,
    TeamSection,
    Footer,
    Layout,
} from "../../components";

function Home() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease-in-out",
        });
    }, []);

    return (
        <>
            <Header />
            <main>
                <HeroSection />
                <ClientsSection />
                <AboutSection />
                <StatsSection />
                <Portfolio />
                <FaqSection />
                <TeamSection />
                <TestimonialsSection />
            </main>

            <Footer />

            <Layout />
        </>
    );
}

export default Home;
