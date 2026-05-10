import { Siren, Flame, Droplets, Bath, Waves, Thermometer } from 'lucide-react';

const services = [
  {
    icon: Siren,
    title: 'Emergency Callouts',
    body: '24/7 response across {{SERVICE_AREA}}',
  },
  {
    icon: Flame,
    title: 'Boiler Repairs & Installation',
    body: 'Gas Safe certified work, all major brands',
  },
  {
    icon: Droplets,
    title: 'Leak Detection',
    body: 'Fast diagnosis, minimal disruption',
  },
  {
    icon: Bath,
    title: 'Bathroom Installations',
    body: 'Full fit-outs from design to tiling',
  },
  {
    icon: Waves,
    title: 'Drain Unblocking',
    body: 'High-pressure jetting, same-day service',
  },
  {
    icon: Thermometer,
    title: 'Central Heating',
    body: 'Power flushing, radiator repairs, system upgrades',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-offwhite py-20 sm:py-24">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight text-balance mb-4">
            Our {`{{NICHE_PLURAL}}`} services in {`{{BUSINESS_CITY}}`}
          </h2>
          <p className="text-lg text-slate-muted">
            Reliable workmanship, transparent pricing, and a friendly local team.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
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
