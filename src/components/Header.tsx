import { Phone } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-navy text-white shadow-lg">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="text-lg sm:text-xl font-extrabold tracking-tight">
          {`{{BUSINESS_NAME}}`}
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#services" className="text-white/80 hover:text-white transition">Services</a>
          <a href="#about" className="text-white/80 hover:text-white transition">About</a>
          <a href="#reviews" className="text-white/80 hover:text-white transition">Reviews</a>
          <a href="#contact" className="text-white/80 hover:text-white transition">Contact</a>
        </nav>

        <a
          href={`tel:{{BUSINESS_PHONE}}`}
          className="hidden sm:inline-flex items-center gap-2 bg-teal hover:bg-teal-hover text-white px-4 py-2 rounded-xl text-sm font-semibold transition"
        >
          <Phone className="w-4 h-4" />
          <span>Call {`{{BUSINESS_PHONE}}`}</span>
        </a>

        <a
          href={`tel:{{BUSINESS_PHONE}}`}
          aria-label={`Call {{BUSINESS_PHONE}}`}
          className="sm:hidden inline-flex items-center justify-center bg-teal hover:bg-teal-hover text-white w-10 h-10 rounded-xl transition"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>
    </header>
  );
}
