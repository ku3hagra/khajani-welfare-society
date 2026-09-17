import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import Layout from "@/components/Layout";
import { AnimeReveal } from "@/components/AnimeReveal";
import { useAnimeCounter } from "@/hooks/use-anime-counter";
import AuroraBackground from "@/components/AuroraBackground";
import TiltCard from "@/components/TiltCard";
import { partnerList } from "@/components/PartnerLogos";
import { PlayCircle, Users, ArrowRight, Sparkles } from "lucide-react";
import { animate, stagger } from "animejs";

/* ─── Individual counter stat ─── */
function StatCounter({
  target,
  suffix,
  label,
  delay = 0,
}: {
  target: number;
  suffix: string;
  label: string;
  delay?: number;
}) {
  const { ref, displayed } = useAnimeCounter({
    target,
    duration: 2200,
    suffix,
  });

  return (
    <AnimeReveal variant="fade-up" delay={delay} className="text-center group">
      <div className="clay-card-gold p-8 flex flex-col items-center gap-3">
        <span
          ref={ref as React.RefObject<HTMLSpanElement>}
          className="text-4xl md:text-5xl font-bold text-secondary mb-1 font-display tabular-nums"
        >
          {displayed}
        </span>
        <div className="h-0.5 w-8 bg-secondary/30 rounded-full" />
        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{label}</p>
      </div>
    </AnimeReveal>
  );
}

/* ─── Big Impact Counter (50,000+) ─── */
function BigImpactCounter() {
  const { ref, displayed } = useAnimeCounter({
    target: 50000,
    duration: 2600,
    suffix: "+",
  });

  return (
    <h2
      ref={ref as React.RefObject<HTMLHeadingElement>}
      className="text-6xl md:text-8xl font-display font-bold text-secondary mb-4 tabular-nums"
    >
      {displayed}
    </h2>
  );
}

/* ─── Hero heading animated word-by-word ─── */
function HeroHeading() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;

    // Split into word spans
    const words = el.querySelectorAll(".hero-word");
    words.forEach((w) => {
      (w as HTMLElement).style.opacity = "0";
      (w as HTMLElement).style.transform = "translateY(40px)";
    });
    animate(Array.from(words) as HTMLElement[], {
      opacity: [0, 1],
      translateY: [40, 0],
      ease: "outExpo",
      duration: 900,
      delay: stagger(120, { start: 300 }),
    });
  }, []);

  return (
    <h1
      ref={headingRef}
      className="text-6xl md:text-7xl lg:text-8xl tracking-tight font-display font-bold text-primary mb-6 leading-[1.1]"
    >
      <span className="hero-word inline-block" style={{ opacity: 0 }}>Empowering</span>
      <br />
      <span className="hero-word relative inline-block text-primary" style={{ opacity: 0 }}>
        Women,
        <span className="absolute bottom-2 left-0 w-full h-3 bg-secondary/60 -z-10 rounded-full" />
      </span>
      <span className="hero-word block text-primary" style={{ opacity: 0 }}>
        Building Futures
      </span>
    </h1>
  );
}

/* ─── Partners ticker with authentic institutional logos ─── */
function PartnersTicker() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const items = Array.from(el.querySelectorAll(".partner-item")) as HTMLElement[];
    items.forEach((i) => { i.style.opacity = "0"; });
    animate(items, {
      opacity: [0, 1],
      translateY: [16, 0],
      ease: "outExpo",
      duration: 700,
      delay: stagger(120, { start: 200 }),
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-10"
    >
      {partnerList.map(({ name, Component, desc }) => (
        <div
          key={name}
          className="partner-item group relative glass px-5 py-3.5 rounded-2xl border border-border/80 hover:border-accent/40 bg-card/60 backdrop-blur-md shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-center justify-center cursor-pointer"
          title={`${name} — ${desc}`}
          style={{ opacity: 0 }}
        >
          <Component size={42} className="transition-transform duration-300 group-hover:scale-105" />
        </div>
      ))}
    </div>
  );
}

/* ─── Main page ─── */
const HomePage = () => {
  return (
    <Layout>
      {/* ── Hero ── */}
      <section className="relative bg-background overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32">
        {/* Radiant Aurora Morphism Background */}
        <AuroraBackground variant="light" intensity={1.3} />

        {/* Ambient atmospheric orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/15 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[90px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left copy */}
            <AnimeReveal variant="fade-left" className="lg:w-1/2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-6">
                <Sparkles size={12} />
                Est. 2007 • Empowering Lives
              </div>
              <HeroHeading />
              <p className="mt-8 text-xl text-muted-foreground font-light leading-relaxed max-w-lg mx-auto lg:mx-0 border-l-4 border-accent pl-6 italic">
                "Khajani Welfare Society is dedicated to transforming lives through skill development, cultural preservation, and inclusive education across the Braj region."
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Link
                  to="/donate"
                  className="btn-3d-accent flex items-center justify-center px-8 py-4 text-base"
                >
                  Start a Change
                </Link>
                <Link
                  to="/about"
                  className="btn-3d-outline flex items-center justify-center px-8 py-4 text-base group"
                >
                  <PlayCircle className="mr-2 group-hover:text-accent transition-colors" size={20} />
                  Our Story
                </Link>
              </div>
            </AnimeReveal>

            {/* Right image */}
            <AnimeReveal variant="fade-right" delay={200} className="lg:w-1/2 relative w-full flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg aspect-square">
                {/* Image with clay-style rounded shadow */}
                <div
                  className="hero-mask w-full h-full relative z-10"
                  style={{
                    boxShadow: "0 24px 0 0 hsl(var(--border)), 0 32px 64px rgba(27,46,107,0.18)",
                  }}
                >
                  <img
                    alt="Women working on pottery"
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                    src="/images/projects/brij-hunar-training.jpg"
                  />
                </div>

                {/* Floating glass stat badge with gentle floating bounce */}
                <div
                  className="absolute bottom-8 -left-4 lg:-left-12 glass rounded-2xl p-5 z-20 flex items-center gap-4 animate-float-bounce cursor-default"
                  style={{
                    boxShadow: "0 8px 0 hsl(var(--border)), 0 16px 40px rgba(0,0,0,0.12)",
                  }}
                >
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <Users className="text-primary" size={22} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-display font-bold text-primary leading-none">20,000+</h3>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold mt-1">
                      Women Impacted
                    </p>
                  </div>
                </div>
              </div>
            </AnimeReveal>
          </div>
        </div>
      </section>

      {/* ── Trusted Partners ── */}
      <AnimeReveal variant="fade">
        <section className="py-12 glass border-y border-white/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-center text-muted-foreground text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
              Trusted Partners &amp; Supporters
            </h3>
            <PartnersTicker />
          </div>
        </section>
      </AnimeReveal>

      {/* ── Impact Stats ── */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <AuroraBackground variant="dark" intensity={1.2} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimeReveal variant="fade-up">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1 glass-dark rounded-full text-[10px] font-bold tracking-widest uppercase mb-6 text-secondary border border-white/10">
                <Sparkles size={10} />
                Real-Time Impact 2024
              </div>
              <BigImpactCounter />
              <p className="text-2xl text-primary-foreground/70 font-light max-w-xl mx-auto">
                Families impacted across the Brij Region through our integrated welfare programs.
              </p>
            </div>
          </AnimeReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <StatCounter target={152} suffix="+" label="Villages Served" delay={0} />
            <StatCounter target={8000} suffix="+" label="Lives Touched Yearly" delay={100} />
            <StatCounter target={20000} suffix="+" label="Women Empowered" delay={200} />
            <StatCounter target={12} suffix="+" label="Years of Legacy" delay={300} />
          </div>
        </div>
      </section>

      {/* ── Network / Partners ── */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimeReveal variant="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-xs font-bold tracking-[0.2em] text-accent uppercase mb-3">
                Collaborators in Impact
              </h2>
              <p className="text-4xl md:text-5xl font-display font-bold text-primary italic">
                The Strategic Network Behind Our Mission
              </p>
            </div>
          </AnimeReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimeReveal variant="fade-up" delay={0}>
              <TiltCard className="h-full">
                <div className="clay-card p-10 flex flex-col items-center text-center h-full">
                  <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold font-serif mb-6 rounded-xl" style={{boxShadow:'0 4px 0 hsl(221 80% 8%), 0 8px 16px rgba(27,46,107,0.3)'}}>
                    1
                  </div>
                  <h4 className="font-bold text-primary mb-3 uppercase tracking-wider text-xs">
                    Government &amp; Institutional Partnerships
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Government partnerships enabling skill development and vocational training programs that empower young women and girls.
                  </p>
                </div>
              </TiltCard>
            </AnimeReveal>

            <AnimeReveal variant="fade-up" delay={100}>
              <TiltCard className="h-full">
                <div className="clay-card p-10 flex flex-col items-center text-center h-full">
                  <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold font-serif mb-6 rounded-xl" style={{boxShadow:'0 4px 0 hsl(221 80% 8%), 0 8px 16px rgba(27,46,107,0.3)'}}>
                    2
                  </div>
                  <h4 className="font-bold text-primary mb-3 uppercase tracking-wider text-xs">
                    Educational &amp; Skill Development Partners
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Educational support for remedial learning, personality development, and vocational training opportunities.
                  </p>
                </div>
              </TiltCard>
            </AnimeReveal>

            <AnimeReveal variant="fade-up" delay={200}>
              <TiltCard className="h-full">
                <div className="clay-card p-10 flex flex-col items-center text-center h-full">
                  <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold font-serif mb-6 rounded-xl" style={{boxShadow:'0 4px 0 hsl(221 80% 8%), 0 8px 16px rgba(27,46,107,0.3)'}}>
                    3
                  </div>
                  <h4 className="font-bold text-primary mb-3 uppercase tracking-wider text-xs">
                    Community &amp; Social Organizations
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Local community groups and women's organizations helping identify beneficiaries and mobilize communities across Mathura.
                  </p>
                </div>
              </TiltCard>
            </AnimeReveal>

            <AnimeReveal variant="fade-up" delay={300}>
              <TiltCard className="h-full">
                <div className="clay-card-navy rounded-3xl p-10 flex flex-col justify-center items-center text-center h-full relative overflow-hidden group">
                  <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl" />
                  <div className="relative z-10">
                    <h4 className="font-display italic text-3xl mb-4 text-primary-foreground">Join the Network</h4>
                    <a
                      href="/partner"
                      className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary group-hover:text-primary-foreground transition flex items-center justify-center gap-2"
                    >
                      Apply for Partnership <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </TiltCard>
            </AnimeReveal>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-primary py-32 relative overflow-hidden text-center">
        {/* Glass noise grid */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/8 rounded-full blur-3xl" />
        </div>

        <AnimeReveal
          variant="fade-up"
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <h2 className="text-5xl md:text-7xl font-display font-bold text-primary-foreground mb-6 leading-tight">
            The Future is a<br />
            <span className="text-secondary italic">Collective Canvas.</span>
          </h2>
          <p className="text-xl text-primary-foreground/70 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Your support fuels the initiatives that change lives. Be a part of the Khajani legacy today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/donate"
              className="btn-3d-accent inline-flex items-center justify-center px-10 py-5 text-sm font-bold uppercase tracking-widest"
            >
              Get Involved
            </Link>
            <Link
              to="/volunteer"
              className="btn-3d-outline inline-flex items-center justify-center px-10 py-5 text-sm font-bold uppercase tracking-widest"
            >
              Volunteer
            </Link>
          </div>
        </AnimeReveal>
      </section>
    </Layout>
  );
};

export default HomePage;
