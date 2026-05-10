import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-20 sm:py-24">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight text-balance mb-3">
              Get in touch
            </h2>
            <p className="text-lg text-slate-muted mb-8">
              Tell us about the job and we'll come back to you fast.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-4"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-navy mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-offwhite border border-slate-200 rounded-xl focus:outline-none focus:border-teal transition"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-1.5">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 bg-offwhite border border-slate-200 rounded-xl focus:outline-none focus:border-teal transition"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-navy mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-offwhite border border-slate-200 rounded-xl focus:outline-none focus:border-teal transition"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-navy mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-offwhite border border-slate-200 rounded-xl focus:outline-none focus:border-teal transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto bg-teal hover:bg-teal-hover text-white px-8 py-3.5 rounded-xl font-semibold transition shadow-lg"
              >
                Send Enquiry
              </button>
            </form>

            <p className="mt-6 text-slate-muted">
              Or call us directly:{' '}
              <a
                href={`tel:{{BUSINESS_PHONE}}`}
                className="text-teal hover:text-teal-hover font-semibold"
              >
                {`{{BUSINESS_PHONE}}`}
              </a>
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-extrabold text-navy mb-2">Visit us</h3>

            <div className="space-y-4 text-slate-text">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-navy mb-1">Address</p>
                  <p>
                    {`{{BUSINESS_ADDRESS}}`}, {`{{BUSINESS_CITY}}`}, {`{{BUSINESS_POSTCODE}}`}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Phone className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-navy mb-1">Phone</p>
                  <a href={`tel:{{BUSINESS_PHONE}}`} className="hover:text-teal transition">
                    {`{{BUSINESS_PHONE}}`}
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <Mail className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-navy mb-1">Email</p>
                  <a href={`mailto:{{BUSINESS_EMAIL}}`} className="hover:text-teal transition">
                    {`{{BUSINESS_EMAIL}}`}
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-navy mb-1">Hours</p>
                  <p>Mon–Fri 8am–6pm · Emergency 24/7</p>
                </div>
              </div>
            </div>

            <div id="map-embed" className="rounded-xl overflow-hidden border border-slate-200 h-64">
              <iframe
                src={`https://www.google.com/maps?q={{BUSINESS_POSTCODE}}&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map to {{BUSINESS_NAME}}`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
