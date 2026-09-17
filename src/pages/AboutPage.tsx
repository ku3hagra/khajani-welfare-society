import { useState, useRef, useEffect } from "react";
import Layout from "@/components/Layout";
import { AnimeReveal } from "@/components/AnimeReveal";
import AuroraBackground from "@/components/AuroraBackground";
import TiltCard from "@/components/TiltCard";
import { animate, stagger } from "animejs";
import {
  Handshake, Users, FileCheck, Award, Building2, Briefcase,
  GraduationCap, BookOpen, Landmark, Sparkles, HeartHandshake, Globe, TrendingUp,
} from "lucide-react";

/* ─── Dynamic Milestone Timeline Card ─── */
interface TimelineMilestoneProps {
  year: string;
  title: string;
  tagline: string;
  desc: string;
  metric: string;
  icon: React.ElementType;
  side: "left" | "right";
  delay?: number;
}

function TimelineMilestone({
  year,
  title,
  tagline,
  desc,
  metric,
  icon: Icon,
  side,
  delay = 0,
}: TimelineMilestoneProps) {
  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = nodeRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.unobserve(el);
          animate(el, {
            scale: [0.6, 1.15, 1],
            opacity: [0, 1],
            ease: "outElastic(1, 0.6)",
            duration: 800,
            delay,
          });
        }
      },
      { threshold: 0.3 }
    );
    el.style.opacity = "0";
    el.style.transform = "scale(0.6)";
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <AnimeReveal
      variant={side === "left" ? "fade-right" : "fade-left"}
      delay={delay}
      className="relative"
    >
      <div className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 ${side === "right" ? "md:flex-row-reverse" : ""}`}>
        {/* Content Card */}
        <div className={`w-full md:w-1/2 ${side === "left" ? "md:text-right" : "md:text-left"}`}>
          <div className="clay-card p-6 sm:p-8 group hover:border-accent/40 border border-transparent transition-all duration-300 relative overflow-hidden">
            {/* Background year watermark */}
            <span className={`text-6xl sm:text-7xl font-display font-black text-muted/20 absolute -top-3 ${side === "left" ? "right-4" : "left-4"} -z-10 group-hover:text-secondary/15 transition-colors select-none`}>
              {year}
            </span>

            <div className={`flex items-center gap-3 mb-3 ${side === "left" ? "md:justify-end" : "md:justify-start"}`}>
              <span className="btn-3d-accent text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {year}
              </span>
              <span className="text-xs font-semibold text-secondary uppercase tracking-widest">
                {tagline}
              </span>
            </div>

            <h3 className="text-2xl font-display font-bold text-primary mb-3 leading-snug">
              {title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4 font-normal">
              {desc}
            </p>

            <div className={`pt-3 border-t border-border flex items-center ${side === "left" ? "md:justify-end" : "md:justify-start"}`}>
              <span className="glass px-3 py-1 rounded-full text-xs font-bold text-primary border border-secondary/30 bg-secondary/10 flex items-center gap-1.5">
                <Sparkles size={12} className="text-secondary" />
                {metric}
              </span>
            </div>
          </div>
        </div>

        {/* Central Luminous Node */}
        <div
          ref={nodeRef}
          className="relative z-20 flex items-center justify-center w-14 h-14 rounded-2xl bg-primary text-primary-foreground shadow-xl border-4 border-card group cursor-default shrink-0"
          style={{
            boxShadow: "0 0 24px rgba(212, 168, 67, 0.4), 0 8px 16px rgba(27, 46, 107, 0.25)",
          }}
        >
          <Icon size={22} className="text-secondary group-hover:scale-110 transition-transform" />
          {/* Subtle pulse ring */}
          <span className="absolute inset-0 rounded-2xl border-2 border-secondary/50 animate-ping opacity-25 pointer-events-none" />
        </div>

        {/* Empty counter-balance spacer for zigzag alignment */}
        <div className="hidden md:block md:w-1/2" />
      </div>
    </AnimeReveal>
  );
}

/* ─── Leadership Card with 3D Tilt & High Contrast Text ─── */
function LeaderCard({
  name, role, desc, img, delay = 0,
}: {
  name: string; role: string; desc: string; img: string; delay?: number;
}) {
  return (
    <AnimeReveal variant="fade-up" delay={delay} className="h-full">
      <TiltCard maxTilt={12} className="h-full">
        <div className="clay-card p-8 text-center group cursor-default h-full flex flex-col items-center">
          <div className="relative w-36 h-36 mx-auto mb-6">
            <div className="w-full h-full rounded-2xl overflow-hidden border-2 border-primary/10 group-hover:border-secondary/60 transition-colors duration-300 shadow-md">
              <img
                alt={name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src={img}
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-secondary rounded-xl flex items-center justify-center shadow-md">
              <Users size={14} className="text-white" />
            </div>
          </div>
          <h3 className="text-xl font-display font-bold text-primary mb-1.5">
            {name}
          </h3>
          <p className="text-primary text-xs font-bold uppercase tracking-wider mb-3 bg-secondary/20 px-3 py-1 rounded-full inline-block border border-secondary/30">
            {role}
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed flex-1">
            {desc}
          </p>
        </div>
      </TiltCard>
    </AnimeReveal>
  );
}

/* ─── Cert card ─── */
function CertCard({
  icon: Icon, title, desc, id, delay = 0,
}: {
  icon: React.ElementType; title: string; desc: string; id?: string; delay?: number;
}) {
  return (
    <AnimeReveal variant="fade-up" delay={delay}>
      <div className="clay-card p-8 group hover:border-accent border border-transparent transition-all duration-300 h-full flex flex-col">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 flex items-center justify-center glass rounded-xl group-hover:bg-accent/10 transition-colors">
            <Icon className="text-accent" size={22} />
          </div>
          <h3 className="font-display text-lg font-bold text-foreground">{title}</h3>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed flex-1">{desc}</p>
        {id && (
          <div className="mt-4 pt-4 border-t border-border">
            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">ID: </span>
            <span className="text-xs font-mono text-primary">{id}</span>
          </div>
        )}
      </div>
    </AnimeReveal>
  );
}

/* ─── Map toggle button ─── */
function MapToggleBtn({
  active, onClick, label,
}: {
  active: boolean; onClick: () => void; label: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2.5 text-xs font-bold uppercase tracking-widest rounded-full border transition-all duration-200 ${
        active
          ? "btn-3d-accent border-accent"
          : "btn-3d-outline border-border"
      }`}
    >
      {label}
    </button>
  );
}

/* ─── Main page ─── */
const AboutPage = () => {
  const [activeMap, setActiveMap] = useState<"office" | "center">("office");
  const headingRef = useRef<HTMLHeadingElement>(null);

  // Hero headline word-by-word
  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
    const words = Array.from(el.querySelectorAll(".hero-word")) as HTMLElement[];
    words.forEach((w) => { w.style.opacity = "0"; w.style.transform = "translateY(32px)"; });
    animate(words, {
      opacity: [0, 1],
      translateY: [32, 0],
      ease: "outExpo",
      duration: 900,
      delay: stagger(100, { start: 200 }),
    });
  }, []);

  return (
    <Layout>
      {/* ── Hero ── */}
      <header className="relative pt-20 pb-24 bg-card overflow-hidden">
        <AuroraBackground variant="light" intensity={0.7} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <AnimeReveal variant="fade-left" className="lg:col-span-7 space-y-8">
              <span className="inline-flex items-center gap-2 text-accent font-bold text-xs tracking-[0.2em] uppercase px-3 py-1 glass rounded-full border border-accent/20">
                Special Edition – 2024
              </span>
              <h1
                ref={headingRef}
                className="text-6xl md:text-8xl font-display font-medium text-primary leading-[0.95] tracking-tight"
              >
                <span className="hero-word inline-block" style={{ opacity: 0 }}>Rooted in</span>{" "}
                <br />
                <span className="hero-word font-bold italic inline-block" style={{ opacity: 0 }}>Tradition,</span>
                <br />
                <span className="hero-word inline-block" style={{ opacity: 0 }}>Driven by{" "}</span>
                <span className="hero-word text-accent inline-block" style={{ opacity: 0 }}>Change.</span>
              </h1>
              <p className="text-xl text-muted-foreground font-light max-w-xl leading-relaxed mt-8 border-l-4 border-border pl-6">
                "We are reshaping the narrative of rural welfare by integrating health, ecology, and heritage into a single, cohesive movement."
              </p>
            </AnimeReveal>

            <AnimeReveal variant="fade-right" delay={200} className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] overflow-hidden group rounded-3xl" style={{
                boxShadow: "0 16px 0 hsl(var(--border)), 0 24px 48px rgba(0,0,0,0.12)"
              }}>
                <img
                  alt="Khajani Welfare Society women training"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  src="/images/about/hero-women-training.jpg"
                />
                <div className="absolute bottom-0 left-0 right-0 glass p-5 border-t-4 border-accent rounded-b-3xl">
                  <p className="font-display text-primary italic text-lg leading-tight">
                    Since 2006, bridging rural potential and modern opportunity.
                  </p>
                </div>
              </div>
            </AnimeReveal>
          </div>
        </div>
      </header>

      {/* ── Vision ── */}
      <section className="py-24 bg-background relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <AnimeReveal variant="fade-right" className="lg:col-span-3 hidden lg:block">
              <div className="sticky top-32 glass rounded-2xl p-6 border border-accent/10">
                <h3 className="font-display text-3xl text-primary font-bold mb-4">The Human Foundation</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Our philosophy centers on the belief that geography should not dictate destiny.
                </p>
              </div>
            </AnimeReveal>

            <div className="lg:col-span-9">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <AnimeReveal variant="fade-up">
                  <div
                    className="w-full h-[400px] overflow-hidden rounded-2xl"
                    style={{ boxShadow: "0 12px 0 hsl(var(--border)), 0 20px 40px rgba(0,0,0,0.10)" }}
                  >
                    <img
                      alt="Empowering women in rural India"
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                      src="/images/about/apparel-beauty-lab.jpg"
                    />
                  </div>
                </AnimeReveal>

                <AnimeReveal variant="fade-up" delay={150} className="flex flex-col justify-center">
                  <p className="text-lg text-foreground leading-relaxed drop-cap font-serif">
                    We envision a society where traditional artisans command global respect, where rural youth lead innovation, and where every woman has the economic independence to shape her own future. Our goal is not just charity, but the construction of self-sustaining ecosystems of growth.
                  </p>
                  <div className="mt-8 pt-8 border-t border-border">
                    <h4 className="font-display text-2xl text-primary font-bold mb-5">Core Values</h4>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-4">
                        <div className="glass p-2 rounded-xl shrink-0 mt-0.5">
                          <Handshake className="text-accent" size={20} />
                        </div>
                        <div>
                          <strong className="block text-primary font-bold font-display text-lg">Dignity</strong>
                          <span className="text-muted-foreground text-sm">Empowerment is cultivated, not given.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="glass p-2 rounded-xl shrink-0 mt-0.5">
                          <Users className="text-accent" size={20} />
                        </div>
                        <div>
                          <strong className="block text-primary font-bold font-display text-lg">Heritage</strong>
                          <span className="text-muted-foreground text-sm">Deep respect for the culture of the Brij region.</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </AnimeReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimeReveal variant="fade-up">
            <div className="text-center mb-24 max-w-3xl mx-auto">
              <h2 className="text-5xl md:text-7xl font-display font-medium text-primary mb-6">
                17 Years of Impact
              </h2>
              <p className="text-muted-foreground italic font-serif text-xl">
                "A chronicle of change, a legacy of welfare."
              </p>
            </div>
          </AnimeReveal>

          <div className="relative">
            {/* Glowing animated vertical center beam */}
            <div
              className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 hidden md:block rounded-full z-0"
              style={{
                background: "linear-gradient(180deg, transparent 0%, hsl(var(--secondary)) 15%, hsl(var(--accent)) 50%, hsl(var(--secondary)) 85%, transparent 100%)",
                boxShadow: "0 0 16px rgba(212, 168, 67, 0.45)",
              }}
            />

            <div className="space-y-16 sm:space-y-20 relative z-10">
              {[
                {
                  year: "2006",
                  title: "The Genesis & Foundation",
                  tagline: "Where it all began",
                  desc: "Khajani Welfare Society was formally registered in Mathura with a steadfast mission: restoring human dignity, basic education, and health for rural women and marginalized families across the Braj region.",
                  metric: "1st Welfare Center Established",
                  icon: Sparkles,
                  side: "left" as const,
                },
                {
                  year: "2010",
                  title: "Vocational Expansion",
                  tagline: "Skills for Self-Reliance",
                  desc: "Launched our first dedicated Sewing, Tailoring & Traditional Handicraft center. Over 500 women received intensive training in the very first batch, unlocking home-based financial independence.",
                  metric: "500+ Artisans Trained",
                  icon: Award,
                  side: "right" as const,
                },
                {
                  year: "2015",
                  title: "UPSDM State Partnership",
                  tagline: "Government Recognition",
                  desc: "Accredited as official training partner under the Uttar Pradesh Skill Development Mission (UPSDM) and Ministry of MSME, scaling structured training centers across 5 districts of Western UP.",
                  metric: "5 Districts Reached",
                  icon: Building2,
                  side: "left" as const,
                },
                {
                  year: "2020",
                  title: "Humanitarian Crisis Response",
                  tagline: "Serving on the Frontlines",
                  desc: "Partnered with IIT Kanpur to train Mathura District Jail inmates in manufacturing certified PPE safety kits, while running daily Jal Seva and nutrition relief camps across 50+ affected villages.",
                  metric: "10,000+ PPE Kits Produced",
                  icon: HeartHandshake,
                  side: "right" as const,
                },
                {
                  year: "2023",
                  title: "Global Recognition & World Bank",
                  tagline: "International Benchmarks",
                  desc: "Awarded prestigious ISO 9001:2015 certification and partnered with the World Bank UP Pro-Poor Tourism Project to integrate rural artisans into national and international craft supply chains.",
                  metric: "World Bank Partnership",
                  icon: Globe,
                  side: "left" as const,
                },
                {
                  year: "2024",
                  title: "Modern Horizons & 50,000+ Lives",
                  tagline: "Expanding the Legacy",
                  desc: "Surpassed 20,000+ certified women artisans, launched the EduDaksh digital literacy and sanitary hygiene vending initiatives, serving over 152 villages across Uttar Pradesh.",
                  metric: "50,000+ Lives Touched",
                  icon: TrendingUp,
                  side: "right" as const,
                },
              ].map((item, i) => (
                <TimelineMilestone key={item.year} {...item} delay={i * 80} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Leadership ── */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <AuroraBackground variant="dark" intensity={1.3} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <AnimeReveal variant="fade-right" className="lg:col-span-4">
              <h2 className="text-5xl font-display font-medium mb-6">Leadership</h2>
              <p className="text-primary-foreground/70 text-lg leading-relaxed font-light mb-8">
                Guided by visionaries with decades of experience in social work, public administration, and education.
              </p>
            </AnimeReveal>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <LeaderCard
                  name="Mrs. Abha Maheshwari"
                  role="President"
                  desc="A lawyer and social reformer with 45 years of experience in empowering women and providing skill training."
                  img="/images/about/abha.jpg"
                  delay={0}
                />
                <LeaderCard
                  name="Mrs. Shipra Rathi"
                  role="Secretary"
                  desc="Known as 'Rozgaar Didi', 22+ years of experience in vocational and educational training. Gold medalist in M.A. Sociology."
                  img="/images/about/shipra-rathi.jpg"
                  delay={150}
                />
                <LeaderCard
                  name="Dr. Hari Mohan Maheshwari"
                  role="Chairman, Advisory Board"
                  desc="Retired Chief Veterinary Officer with 50 years of experience in public service."
                  img="/images/about/dr-hari-mohan.jpg"
                  delay={300}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Geography ── */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimeReveal variant="fade-up">
            <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between border-b border-border pb-8">
              <h2 className="text-5xl font-display font-medium text-primary">Presence in Brij</h2>
              <p className="text-muted-foreground max-w-md text-right mt-4 md:mt-0 italic font-serif">
                "Serving over 100 villages within a 50km radius."
              </p>
            </div>
          </AnimeReveal>

          <AnimeReveal variant="scale">
            <div className="clay-card overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-[500px] w-full bg-muted overflow-hidden">
                  {/* Map toggle */}
                  <div className="absolute top-4 left-4 z-10 flex gap-2">
                    <MapToggleBtn active={activeMap === "office"} onClick={() => setActiveMap("office")} label="Office" />
                    <MapToggleBtn active={activeMap === "center"} onClick={() => setActiveMap("center")} label="Center" />
                  </div>
                  <iframe
                    title={activeMap === "office" ? "Khajani Welfare Society - Office" : "Khajani Welfare Society - Training Centre"}
                    src={
                      activeMap === "office"
                        ? "https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Khajani+Welfare+Society,+Gali+Sales+Tax,+Dampier+Nagar,+Mathura,+Uttar+Pradesh&zoom=17"
                        : "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d221.16145897473746!2d77.675511!3d27.5133306!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3973711c41e6011d%3A0x9d9880dcfc6f0c68!2sKHAJANI%20LEARNING%20ACADEMY!5e0!3m2!1sen!2sin!4v1773558202587!5m2!1sen!2sin"
                    }
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <div className="p-12 flex flex-col justify-center">
                  <div className="space-y-8">
                    {[
                      { num: "01", name: "Mathura HQ", desc: "Administrative hub & Advanced IT Training Center. The heart of our operations." },
                      { num: "02", name: "Vrindavan Cluster", desc: "Focus on textile, embroidery, and souvenir crafting for the tourism market." },
                      { num: "03", name: "Govardhan Unit", desc: "Agri-based skill development and organic farming workshops." },
                    ].map((loc) => (
                      <div key={loc.num} className="glass rounded-xl p-5 group cursor-pointer hover:border-accent/30 transition-all duration-300">
                        <div className="flex items-center mb-2 gap-3">
                          <span className="text-secondary font-bold text-sm w-8 shrink-0">{loc.num}.</span>
                          <h3 className="text-xl font-display font-bold text-primary group-hover:text-accent transition-colors">
                            {loc.name}
                          </h3>
                        </div>
                        <p className="text-muted-foreground text-sm pl-11 leading-relaxed">{loc.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimeReveal>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section className="py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimeReveal variant="fade-up">
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <h2 className="text-5xl md:text-7xl font-display font-medium text-primary mb-6">
                Registrations &<br />Certifications
              </h2>
              <p className="text-muted-foreground italic font-serif text-xl">
                "Transparency and accountability are the pillars of trust."
              </p>
            </div>
          </AnimeReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: FileCheck, title: "12AA Registration", desc: "Tax exemption under Section 12AA of the Income Tax Act.", id: "AADTK2215NE2021001" },
              { icon: Award, title: "80G Registration", desc: "Donors eligible for tax benefits under Section 80G.", id: "AADTK2215NF20168" },
              { icon: Building2, title: "NGO DARPAN", desc: "Registered on the NITI Aayog NGO DARPAN portal.", id: "UP/2020/0249575" },
              { icon: Briefcase, title: "CSR Registration", desc: "Eligible for Corporate Social Responsibility funding.", id: "CSR00005014" },
              { icon: GraduationCap, title: "NSDC Impanelment", desc: "National Skill Development Corporation training partner since 15/12/2018.", id: "TP 015247" },
              { icon: BookOpen, title: "Seekho aur Kamao", desc: "Registered under the Ministry of Minority Affairs scheme for skill development." },
              { icon: Landmark, title: "Nai Roshni Scheme", desc: "Registered under the Government welfare scheme for women's leadership development." },
            ].map((cert, i) => (
              <CertCard key={cert.title} {...cert} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
