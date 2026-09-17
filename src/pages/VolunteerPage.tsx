import { useState } from "react";
import Layout from "@/components/Layout";
import { AnimeReveal } from "@/components/AnimeReveal";
import AuroraBackground from "@/components/AuroraBackground";
import TiltCard from "@/components/TiltCard";
import { GraduationCap, Code, Megaphone, Building2, Sparkles } from "lucide-react";

const VolunteerPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "Volunteer (Educational)",
    availableFrom: "",
    motivation: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch("https://script.google.com/macros/s/AKfycbw_YY7ecAhA2tVYmh1xucywWrGdGEdFJqy6_rYtRXQRmMKTYLcg1YN9m8redond8rJR/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      alert("Thank you for your application! We will reach out to schedule an orientation.");
      setFormData({ name: "", email: "", interest: "Volunteer (Educational)", availableFrom: "", motivation: "" });
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const opportunities = [
    { icon: GraduationCap, title: "Mentor Girls in Education", desc: "Guide young women through academic challenges and provide life-skills coaching for future success." },
    { icon: Code, title: "Teach Vocational Courses", desc: "Share your expertise in Fashion Design, IT, or Beauty Wellness to create sustainable livelihoods." },
    { icon: Megaphone, title: "Fundraising & Campaigns", desc: "Help us raise awareness and secure resources through strategic digital and physical campaigns." },
    { icon: Building2, title: "Professional Internships", desc: "Formal internship programs for students and professionals to drive social research and NGO management." },
  ];

  const inputClass = "w-full bg-transparent border-0 border-b-2 border-border focus:border-accent focus:ring-0 py-3 outline-none text-foreground transition-colors placeholder:text-muted-foreground/50";

  return (
    <Layout>
      {/* Hero */}
      <header className="bg-primary text-primary-foreground py-24 md:py-32 px-6 md:px-12 text-center relative overflow-hidden">
        <AuroraBackground variant="dark" intensity={0.8} />
        <div className="max-w-4xl mx-auto relative z-10">
          <AnimeReveal variant="fade-up">
            <span className="inline-flex items-center gap-2 text-secondary uppercase tracking-[0.3em] font-bold text-sm mb-6 glass-dark px-4 py-1.5 rounded-full border border-white/10">
              <Sparkles size={10} /> Be the Catalyst
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight font-display">
              Join the Movement:{" "}
              <span className="italic text-secondary">Reforming Brij</span>{" "}
              Through Service
            </h1>
            <p className="text-xl md:text-2xl font-light text-primary-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Your time and skills are the catalysts for change. Documenting a legacy of welfare since 2007.
            </p>
            <div className="mt-12">
              <a
                href="#apply"
                className="btn-3d-accent inline-flex items-center justify-center px-10 py-4 text-lg font-bold uppercase tracking-widest"
              >
                Start Your Journey
              </a>
            </div>
          </AnimeReveal>
        </div>
      </header>

      {/* Mission */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <AnimeReveal variant="fade-left" className="order-2 md:order-1">
            <h2 className="text-4xl font-bold mb-8 leading-tight font-display text-primary">A Purpose Beyond the Self</h2>
            <p className="text-lg leading-relaxed text-muted-foreground drop-cap mb-6">
              Khajani Welfare Society has spent nearly two decades bridging the gap between potential and opportunity in the Brij region. Our volunteers are not just helpers; they are architects of a more equitable future. By lending your expertise, you help us scale our impact across 152 villages, ensuring that every woman and girl has the tools to write her own success story.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground italic border-l-4 border-accent pl-6 py-2">
              "The heart of a volunteer is not measured by size, but by the depth of the commitment to make a difference."
            </p>
          </AnimeReveal>
          <AnimeReveal variant="fade-right" delay={200} className="order-1 md:order-2 relative">
            <div
              className="rounded-3xl overflow-hidden rotate-2"
              style={{ boxShadow: "0 12px 0 hsl(var(--border)), 0 20px 48px rgba(0,0,0,0.15)" }}
            >
              <img alt="Volunteers in action" className="w-full h-[500px] object-cover" src="/images/projects/shakti-ek-adhaar-3.jpg" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full blur-2xl -z-10" />
          </AnimeReveal>
        </div>
      </section>

      {/* Avenues of Impact */}
      <section className="bg-card py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <AnimeReveal variant="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-primary text-4xl md:text-5xl font-bold mb-4 font-display">Avenues of Impact</h2>
              <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
            </div>
          </AnimeReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {opportunities.map((item, i) => (
              <AnimeReveal key={item.title} variant="fade-up" delay={i * 100}>
                <TiltCard maxTilt={8} className="h-full">
                  <div className="clay-card p-8 group h-full flex flex-col justify-between hover:border-accent/30 transition-all">
                    <div>
                      <div className="glass w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                        <item.icon className="w-7 h-7 text-accent group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-primary">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </TiltCard>
              </AnimeReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-accent text-accent-foreground py-16 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative z-10">
          {[
            { num: "20K+", label: "Women Empowered", gold: true },
            { num: "152+", label: "Villages Served", gold: false },
            { num: "12+", label: "Years of Legacy", gold: true },
          ].map((s, i) => (
            <AnimeReveal key={s.label} variant="fade-up" delay={i * 100}>
              <p className={`text-5xl md:text-6xl font-bold font-display ${s.gold ? "text-secondary" : "text-accent-foreground"}`}>{s.num}</p>
              <p className="uppercase tracking-widest text-sm font-semibold opacity-90 mt-2">{s.label}</p>
            </AnimeReveal>
          ))}
        </div>
      </section>

      {/* Application Form */}
      <section className="bg-background py-24 px-6 md:px-12 relative overflow-hidden" id="apply">
        <AuroraBackground variant="light" intensity={0.5} />
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="clay-card p-10 md:p-16">
            <AnimeReveal variant="fade-up">
              <div className="mb-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display text-primary">Application for Service</h2>
                <p className="text-muted-foreground">Please provide your details and we'll reach out to schedule an orientation.</p>
              </div>
            </AnimeReveal>
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs uppercase font-bold tracking-widest text-muted-foreground">Full Name</label>
                  <input className={inputClass} placeholder="Enter your name" type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase font-bold tracking-widest text-muted-foreground">Email Address</label>
                  <input className={inputClass} placeholder="email@example.com" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs uppercase font-bold tracking-widest text-muted-foreground">Interest Area</label>
                  <select className={inputClass} value={formData.interest} onChange={(e) => setFormData({ ...formData, interest: e.target.value })}>
                    <option>Volunteer (Educational)</option>
                    <option>Volunteer (Vocational)</option>
                    <option>Internship (Project Based)</option>
                    <option>Corporate Partnership</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase font-bold tracking-widest text-muted-foreground">Available From</label>
                  <input className={inputClass} type="date" value={formData.availableFrom} onChange={(e) => setFormData({ ...formData, availableFrom: e.target.value })} />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase font-bold tracking-widest text-muted-foreground">Why do you want to join us?</label>
                <textarea className={inputClass} placeholder="Tell us about your motivation..." rows={4} value={formData.motivation} onChange={(e) => setFormData({ ...formData, motivation: e.target.value })} />
              </div>
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-3d-accent w-full flex items-center justify-center py-5 text-lg font-bold uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default VolunteerPage;
