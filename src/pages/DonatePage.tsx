import { useState } from "react";
import Layout from "@/components/Layout";
import { AnimeReveal } from "@/components/AnimeReveal";
import AuroraBackground from "@/components/AuroraBackground";
import { ShieldCheck, Shield, Copy, Sparkles, CheckCircle2 } from "lucide-react";

const DonatePage = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("q353936413@ybl");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-background overflow-hidden pt-12 lg:pt-24 pb-16">
        <AuroraBackground variant="light" intensity={0.7} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20">
            {/* Left */}
            <AnimeReveal variant="fade-left" className="w-full lg:w-1/2">
              <span className="inline-flex items-center gap-2 glass border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-6 px-4 py-1.5 rounded-full">
                <Sparkles size={10} /> Official Donation Portal
              </span>
              <h1 className="text-5xl lg:text-7xl tracking-tighter font-display font-bold text-primary leading-none">
                <span className="block font-medium">Scan to</span>
                <span className="block text-accent not-italic font-black mt-2">Empower Lives</span>
              </h1>
              <div className="mt-8 border-l-4 border-accent pl-6 py-2">
                <p className="text-lg lg:text-xl text-muted-foreground font-light italic leading-relaxed">
                  "Your contribution directly funds skill development and healthcare initiatives in the Brij region. 100% transparency assured."
                </p>
              </div>

              {/* Impact tiers */}
              <div className="mt-12 space-y-4">
                <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground">Your Impact Today</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
                  {[
                    { amount: "₹200", desc: "Hygiene Kit" },
                    { amount: "₹500", desc: "Stationery Kit" },
                    { amount: "₹750", desc: "Dry Ration Kit" },
                    { amount: "₹1,000", desc: "School Uniforms" },
                    { amount: "₹6,100", desc: "Educational Support" },
                  ].map((item, i) => (
                    <AnimeReveal key={item.amount} variant="fade-up" delay={i * 60}>
                      <div
                        className="bg-white rounded-[26px] p-5 sm:p-6 text-left flex flex-col justify-between min-h-[120px] transition-all duration-300 hover:-translate-y-1.5 cursor-pointer group"
                        style={{
                          boxShadow: "0 14px 28px rgba(15, 23, 42, 0.06), 0 2px 6px rgba(15, 23, 42, 0.04), inset 0 -4px 0 rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.9)",
                        }}
                      >
                        <div className="text-2xl sm:text-[26px] font-bold text-[#0c2340] tracking-tight group-hover:text-accent transition-colors">
                          {item.amount}
                        </div>
                        <p className="text-[13px] sm:text-sm text-slate-500 font-serif italic leading-snug mt-2">
                          {item.desc}
                        </p>
                      </div>
                    </AnimeReveal>
                  ))}
                </div>
              </div>

              {/* Trust badges */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2 glass px-4 py-2 rounded-full border border-green-400/20">
                  <ShieldCheck className="text-green-500" size={16} />
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">80G Certificate</span>
                </div>
                <div className="flex items-center gap-2 glass px-4 py-2 rounded-full border border-blue-400/20">
                  <Shield className="text-blue-500" size={16} />
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">12A Registered</span>
                </div>
              </div>
            </AnimeReveal>

            {/* Right — QR card */}
            <AnimeReveal variant="fade-right" delay={200} className="w-full lg:w-1/2 flex flex-col items-center">
              <div className="clay-card p-8 max-w-sm w-full relative">
                <div className="aspect-square bg-muted rounded-2xl border border-border flex items-center justify-center mb-6 overflow-hidden">
                  <img
                    src="/images/donate/upi-qr.jpg"
                    alt="Khajani Welfare Society UPI QR Code"
                    className="w-full h-full object-contain p-2"
                  />
                </div>
                <div className="text-center space-y-3">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">UPI ID</p>
                  <button
                    onClick={handleCopy}
                    className="flex items-center justify-center gap-2 glass px-4 py-2.5 rounded-xl w-full border border-border hover:border-accent/30 transition-all group"
                  >
                    <code className="text-sm font-mono font-bold text-primary">q353936413@ybl</code>
                    {copied
                      ? <CheckCircle2 className="text-green-500 shrink-0" size={14} />
                      : <Copy className="text-muted-foreground group-hover:text-accent shrink-0 transition-colors" size={14} />
                    }
                  </button>
                  <p className="text-xs text-muted-foreground italic">Accepts GPay, PhonePe, Paytm, BHIM</p>
                </div>
              </div>
              <div className="mt-6 text-center max-w-sm">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Donations are exempt from tax under section 80G of the Income Tax Act. Please share your transaction details at{" "}
                  <a className="text-accent underline" href="mailto:info@khajaniwelfaresociety.com">info@khajaniwelfaresociety.com</a>{" "}
                  for the receipt.
                </p>
              </div>
            </AnimeReveal>
          </div>
        </div>
      </section>

      {/* Bank Details */}
      <section className="py-16 lg:py-24 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimeReveal variant="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary italic">Bank Transfer Details</h2>
              <p className="mt-4 text-muted-foreground text-sm font-serif italic">For direct NEFT/RTGS transfers</p>
            </div>
          </AnimeReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { label: "Account Name", value: "Khajani Welfare Society", mono: false },
              { label: "Bank", value: "Yes Bank, Dampier Nagar, Mathura", mono: false },
              { label: "Account Number", value: "007294600000533", mono: true },
              { label: "IFSC Code", value: "YESB0000072", mono: true },
            ].map((item, i) => (
              <AnimeReveal key={item.label} variant="fade-up" delay={i * 100}>
                <div className="clay-card p-6 text-center h-full flex flex-col justify-center">
                  <h3 className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-2">{item.label}</h3>
                  <p className={`text-base font-bold text-primary ${item.mono ? "font-mono" : "font-display"}`}>{item.value}</p>
                </div>
              </AnimeReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <AuroraBackground variant="dark" intensity={0.6} />
        <AnimeReveal variant="fade-up" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-primary-foreground leading-tight mb-8">
            Transparency is our <span className="text-secondary italic">Core Value</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { num: "92%", label: "Program Spending", sub: "Directly reaches beneficiaries" },
              { num: "100%", label: "Tax Exempt", sub: "For Indian Citizens (80G)" },
              { num: "18+", label: "Years of Service", sub: "Consistent community impact" },
            ].map((s, i) => (
              <AnimeReveal key={s.label} variant="fade-up" delay={i * 100}>
                <div className="glass-dark rounded-2xl p-8 border border-white/10">
                  <div className="text-5xl font-bold text-secondary mb-2 font-display">{s.num}</div>
                  <p className="text-sm font-bold uppercase tracking-widest opacity-80">{s.label}</p>
                  <p className="text-xs opacity-60 mt-2">{s.sub}</p>
                </div>
              </AnimeReveal>
            ))}
          </div>
        </AnimeReveal>
      </section>
    </Layout>
  );
};

export default DonatePage;
