import { Phone, ShieldCheck, BadgeCheck, Clock } from 'lucide-react';
import nicheConfig from '../niche.config';

export default function Hero() {
  return (
    <section
      className="relative bg-gradient-to-br from-navy via-navy to-navy-light text-white overflow-hidden"
      style={{ minHeight: '600px' }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(20,184,166,0.15),transparent_50%)]" />

      <div className="relative max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-4">
          {nicheConfig.heroTagline} in {`{{BUSINESS_CITY}}`}
        </p>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-balance max-w-4xl mb-6">
          {`{{HERO_HEADLINE}}`}
        </h1>

        <p className="text-lg sm:text-xl text-white/80 max-w-2xl mb-10 leading-relaxed">
          {`{{YEARS_TRADING}}`} years serving {`{{SERVICE_AREA}}`}. Available 24/7 for emergencies.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <a
            href={`tel:{{BUSINESS_PHONE}}`}
            className="inline-flex items-center justify-center gap-2 bg-teal hover:bg-teal-hover text-white px-6 py-3.5 rounded-xl font-semibold text-base transition shadow-lg"
          >
            <Phone className="w-5 h-5" />
            <span>Call {`{{BUSINESS_PHONE}}`}</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-transparent border-2 border-white/30 hover:bg-white/10 text-white px-6 py-3.5 rounded-xl font-semibold text-base transition"
          >
            {nicheConfig.ctaLabel}
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/70">
          {nicheConfig.trustBadges.map((badge) => (
            <div key={badge} className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-teal" />
              <span>{badge}</span>
            </div>
          ))}
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-teal" />
            <span>{`{{YEARS_TRADING}}`}+ Years Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
}
