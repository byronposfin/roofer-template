export default function Footer() {
  return (
    <footer className="bg-navy text-white/70 py-12">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <p className="text-2xl font-extrabold text-white mb-2">{`{{BUSINESS_NAME}}`}</p>
            <p className="text-sm max-w-md">
              {`{{YEARS_TRADING}}`}+ years of trusted {`{{NICHE}}`} services in {`{{SERVICE_AREA}}`}.
            </p>
          </div>
          <div className="text-sm space-y-1 md:text-right">
            <p className="font-semibold text-white">Contact</p>
            <p>
              <a href={`tel:{{BUSINESS_PHONE}}`} className="hover:text-teal transition">
                {`{{BUSINESS_PHONE}}`}
              </a>
            </p>
            <p>
              <a href={`mailto:{{BUSINESS_EMAIL}}`} className="hover:text-teal transition">
                {`{{BUSINESS_EMAIL}}`}
              </a>
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pt-6 text-xs">
          <p>© 2026 {`{{BUSINESS_NAME}}`}. All rights reserved.</p>
          <p>Gas Safe Registered · FCA Compliant</p>
        </div>
      </div>
    </footer>
  );
}
