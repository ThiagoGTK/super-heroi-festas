import Header from "./components/Header";
import Hero from "./components/Hero";
import Apresentacao from "./components/Apresentacao";
import Experiencia from "./components/Experiencia";
import Galeria from "./components/Galeria";
import Eventos from "./components/Eventos";
import CTAContratacao from "./components/CTAContratacao";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import WhatsappFloatButton from "./components/WhatsappFloatButton";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Apresentacao />
        <Experiencia />
        <Galeria />
        <Eventos />
        <CTAContratacao />
        <FAQ />
      </main>
      <Footer />
      <WhatsappFloatButton />
    </>
  );
}
