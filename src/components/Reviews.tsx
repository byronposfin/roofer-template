import { Star } from 'lucide-react';

function Stars() {
  return (
    <div className="flex gap-0.5 mb-4 text-amber-400">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} className="w-5 h-5" fill="currentColor" />
      ))}
    </div>
  );
}

export default function Reviews() {
  const reviews = [`{{REVIEW_1}}`, `{{REVIEW_2}}`, `{{REVIEW_3}}`];

  return (
    <section id="reviews" className="bg-offwhite py-20 sm:py-24">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight text-balance mb-12 max-w-3xl">
          What {`{{BUSINESS_CITY}}`} customers say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm"
            >
              <Stars />
              <p className="text-slate-text text-lg leading-relaxed mb-6">"{review}"</p>
              <p className="text-sm text-slate-muted font-medium">
                Verified Customer · {`{{BUSINESS_CITY}}`}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="#" className="text-teal hover:text-teal-hover font-semibold text-sm">
            Read more reviews on Google →
          </a>
        </div>
      </div>
    </section>
  );
}
