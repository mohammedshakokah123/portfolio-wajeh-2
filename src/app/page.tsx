import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrainingGallery from "@/components/TrainingGallery";
import TeachingMethodology from "@/components/TeachingMethodology";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrainingGallery />
        <TeachingMethodology />
        <Skills />
        <Experience />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
