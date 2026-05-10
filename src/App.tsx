import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIConciergeStub from './components/AIConciergeStub';

export default function App() {
  return (
    <div className="min-h-screen bg-offwhite">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <AIConciergeStub />
    </div>
  );
}
