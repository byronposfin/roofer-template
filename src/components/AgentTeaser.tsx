import React from 'react';
import { Bot, PhoneCall, ShoppingCart, FileText, Megaphone, Zap } from 'lucide-react';

export default function AgentTeaser() {
  return (
    <section className="py-20 bg-gradient-to-br from-navy to-[#0D1F3C] text-white overflow-hidden relative">
      {/* Subtle glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-content mx-auto px-4 sm:px-6 lg:px-8">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-teal/10 border border-teal/30 text-teal text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
          <Zap className="w-3.5 h-3.5" />
          Coming Next — Clawr Agent
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: copy */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-5">
              What if your website could<br />
              <span className="text-teal">answer the phone too?</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              The next step is your own AI agent — available 24/7, trained on your business.
              It qualifies enquiries, takes bookings, chases payments, and handles follow-ups
              while you're on the tools. Your face. Your voice. Your brand.
            </p>

            <ul className="space-y-3 mb-10">
              {[
                { icon: PhoneCall,    label: "Answers inbound calls & WhatsApp enquiries" },
                { icon: ShoppingCart, label: "Takes orders and bookings automatically" },
                { icon: FileText,     label: "Sends quotes, invoices, and follow-ups" },
                { icon: Megaphone,    label: "Runs outbound marketing campaigns" },
                { icon: Bot,          label: "Your avatar — your look, your voice" },
              ].map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-start gap-3 text-white/80 text-sm">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-teal/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-3 h-3 text-teal" />
                  </div>
                  {label}
                </li>
              ))}
            </ul>

            <a
              href="https://clawr.ai?ref=agent-teaser"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-teal hover:bg-teal/90 text-white px-6 py-3.5 rounded-xl font-semibold text-sm transition shadow-lg"
            >
              <Zap className="w-4 h-4" />
              Find out more at clawr.ai
            </a>
          </div>

          {/* Right: mock agent card */}
          <div className="relative">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-teal/20 border border-teal/40 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-teal" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Your AI Agent</p>
                  <p className="text-xs text-white/50">Online now · Responding instantly</p>
                </div>
                <span className="ml-auto w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
              </div>

              {/* Mock chat */}
              <div className="space-y-3 text-sm">
                <div className="bg-white/10 rounded-xl rounded-tl-none px-4 py-2.5 max-w-xs text-white/80">
                  Hi! I need a plumber tomorrow — boiler's leaking. Can you help?
                </div>
                <div className="bg-teal/20 border border-teal/30 rounded-xl rounded-tr-none px-4 py-2.5 max-w-xs ml-auto text-white">
                  Absolutely — I can get someone to you by 9am. What's your postcode?
                </div>
                <div className="bg-white/10 rounded-xl rounded-tl-none px-4 py-2.5 max-w-xs text-white/80">
                  M14 5PQ
                </div>
                <div className="bg-teal/20 border border-teal/30 rounded-xl rounded-tr-none px-4 py-2.5 max-w-xs ml-auto text-white">
                  Perfect — I've booked you in. You'll get a confirmation WhatsApp now. 👍
                </div>
              </div>

              <p className="text-center text-white/30 text-xs mt-5">Powered by Clawr.ai</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
