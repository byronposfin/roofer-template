import nicheConfig from '../niche.config';
import * as Icons from 'lucide-react';

type IconName = keyof typeof Icons;

export default function Services() {
  return (
    <section id="services" className="bg-offwhite py-20 sm:py-24">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight text-balance mb-4">
            Our {nicheConfig.plural.toLowerCase()} services in {`{{BUSINESS_CITY}}`}
          </h2>
          <p className="text-lg text-slate-muted">
            Reliable workmanship, transparent pricing, and a friendly local team.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {nicheConfig.services.map((service) => {
            const Icon = Icons[service.icon as IconName] as React.ElementType || Icons.Star;
            return (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-teal/10 text-teal flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{service.title}</h3>
                <p className="text-slate-muted leading-relaxed">{service.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
