export default function About() {
  return (
    <section id="about" className="bg-navy text-white py-20 sm:py-24">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-balance mb-6">
              Local {`{{NICHE_PLURAL}}`} you can trust
            </h2>
            <div className="space-y-5 text-white/80 text-lg leading-relaxed">
              <p>
                For over {`{{YEARS_TRADING}}`} years, we've been the first call for households and
                businesses across {`{{SERVICE_AREA}}`}. From leaking taps to full bathroom fit-outs,
                our team delivers quality workmanship backed by transparent pricing and a clean
                finish — every time.
              </p>
              <p>
                We're Gas Safe registered, fully insured, and proudly local. No call-out fees, no
                jargon, and no surprises on the invoice — just dependable {`{{NICHE}}`} work from a
                team your neighbours already trust.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
              <p className="text-3xl sm:text-4xl font-extrabold text-teal mb-1">
                {`{{YEARS_TRADING}}`}+
              </p>
              <p className="text-sm text-white/70 font-medium">Years Trading</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
              <p className="text-3xl sm:text-4xl font-extrabold text-teal mb-1">5,000+</p>
              <p className="text-sm text-white/70 font-medium">Jobs Completed</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
              <p className="text-3xl sm:text-4xl font-extrabold text-teal mb-1">4.9★</p>
              <p className="text-sm text-white/70 font-medium">Average Rating</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
              <p className="text-3xl sm:text-4xl font-extrabold text-teal mb-1">24/7</p>
              <p className="text-sm text-white/70 font-medium">Emergency Response</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
