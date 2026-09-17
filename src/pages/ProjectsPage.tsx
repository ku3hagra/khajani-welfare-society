import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { AnimeReveal } from "@/components/AnimeReveal";
import AuroraBackground from "@/components/AuroraBackground";
import TiltCard from "@/components/TiltCard";
import {
  GraduationCap, Scissors, Users, Heart, TreePine, Flower2,
  HandHeart, Building2, ShieldAlert, Calendar, ArrowRight,
  BookOpen, Sparkles, Award, ShoppingBag, Umbrella, Rocket,
} from "lucide-react";

/* ─── Shared Section Header ─── */
const SectionHeader = ({
  label, title, description, icon: Icon,
}: {
  label: string; title: string; description?: string; icon: React.ElementType;
}) => (
  <AnimeReveal variant="fade-up" className="flex flex-col gap-4 max-w-3xl mb-10">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 glass rounded-xl flex items-center justify-center text-accent">
        <Icon size={20} />
      </div>
      <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase">{label}</span>
    </div>
    <h2 className="text-3xl md:text-4xl font-display font-bold text-primary leading-tight tracking-tight">{title}</h2>
    {description && <p className="text-muted-foreground text-lg leading-relaxed">{description}</p>}
  </AnimeReveal>
);

/* ─── Impact Stat ─── */
const ImpactStat = ({ value, label }: { value: string; label: string }) => (
  <div className="clay-card-gold flex flex-col items-center text-center p-5">
    <span className="text-2xl md:text-3xl font-display font-bold text-secondary">{value}</span>
    <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mt-1">{label}</span>
  </div>
);

/* ─── Photo Card ─── */
const PhotoCard = ({
  img, title, desc, link, badge,
}: {
  img: string; title: string; desc: string; link?: string; badge?: string;
}) => {
  const content = (
    <TiltCard maxTilt={10} className="h-full">
      <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg h-full" style={{
        boxShadow: "0 8px 0 hsl(var(--border)), 0 16px 40px rgba(0,0,0,0.12)"
      }}>
        <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/35 to-transparent" />
        {badge && (
          <span className="absolute top-4 left-4 px-3 py-1 glass text-primary-foreground text-[10px] font-bold uppercase tracking-widest rounded-full border border-white/30 backdrop-blur-md bg-primary/40">
            {badge}
          </span>
        )}
        <div className="absolute bottom-4 left-4 right-4" style={{ transform: "translateZ(20px)" }}>
          <h3 className="text-primary-foreground text-xl font-display font-bold leading-tight">{title}</h3>
          <p className="text-primary-foreground/80 text-xs mt-1 leading-relaxed line-clamp-2">{desc}</p>
          {link && (
            <span className="inline-flex items-center text-secondary text-xs font-bold uppercase tracking-widest mt-3 gap-1 group-hover:gap-2 transition-all">
              Learn More <ArrowRight size={12} />
            </span>
          )}
        </div>
      </div>
    </TiltCard>
  );
  if (link) return <Link to={link} className="block h-full">{content}</Link>;
  return content;
};

/* ─── Mini Card ─── */
const MiniCard = ({
  icon: Icon, title, desc, link,
}: {
  icon: React.ElementType; title: string; desc: string; link?: string;
}) => {
  const content = (
    <div className="clay-card p-6 flex flex-col gap-3 group h-full hover:border-accent/30 border border-transparent transition-all">
      <div className="flex items-center justify-between">
        <div className="glass w-10 h-10 rounded-xl flex items-center justify-center group-hover:bg-accent/10 transition-colors">
          <Icon size={20} className="text-accent" />
        </div>
        {link && <ArrowRight size={16} className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />}
      </div>
      <h3 className="text-base font-display font-bold text-primary group-hover:text-accent transition-colors">{title}</h3>
      <p className="text-xs text-muted-foreground leading-relaxed flex-1">{desc}</p>
    </div>
  );
  if (link) return <Link to={link} className="block h-full">{content}</Link>;
  return content;
};

const ProjectsPage = () => {
  return (
    <Layout>
      {/* ── Hero ── */}
      <section className="relative bg-primary overflow-hidden min-h-[50vh] flex items-center">
        <AuroraBackground variant="dark" intensity={0.8} />
        <div className="absolute inset-0 opacity-15">
          <img src="/images/projects/brij-hunar-sewing-hall.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/85 to-primary" />
        <div className="relative pt-24 pb-20 text-center w-full">
          <AnimeReveal variant="fade-up" className="max-w-4xl mx-auto px-4">
            <span className="inline-flex items-center gap-2 text-accent text-xs font-bold tracking-[0.2em] uppercase mb-6 glass-dark px-4 py-1.5 rounded-full border border-accent/20">
              <Sparkles size={10} /> Since 2007 • Transforming Lives
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-primary-foreground mb-2 leading-tight">
              Our Programs <span className="font-serif italic">&</span>
            </h1>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-secondary italic leading-tight mb-6">
              Initiatives
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto leading-relaxed">
              Khajani Welfare Society has been working since 2007 to empower women and communities in the Braj region through skill development, education, health, cultural preservation, and community service.
            </p>
          </AnimeReveal>
        </div>
      </section>

      {/* ── 1. Education ── */}
      <section className="bg-card border-y border-border">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20">
          <SectionHeader icon={GraduationCap} label="Education" title="Education & Youth Development" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <AnimeReveal variant="fade-right">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl" style={{ boxShadow: "0 10px 0 hsl(var(--border)), 0 20px 40px rgba(0,0,0,0.10)" }}>
                <img src="/images/projects/kla-students.jpg" alt="Khajani Learning Academy students" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 glass p-5 rounded-b-2xl">
                  <span className="text-secondary text-xs font-bold tracking-widest uppercase">Learn Today, Lead Tomorrow</span>
                  <h3 className="text-primary-foreground text-2xl font-display font-bold mt-1">Khajani Learning Academy</h3>
                  <p className="text-primary-foreground/80 text-sm mt-1">Classes 6–10</p>
                </div>
              </div>
            </AnimeReveal>
            <AnimeReveal variant="fade-left" delay={100}>
              <div className="flex flex-col gap-6">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Providing academic support and holistic development for girls from marginalized communities — strengthening foundations while building confidence.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {["Mathematics", "Science", "Social Science", "English"].map((s) => (
                    <div key={s} className="clay-card flex items-center gap-2 px-4 py-3 rounded-xl">
                      <BookOpen size={16} className="text-accent" />
                      <span className="text-sm font-semibold text-primary">{s}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Personality Development", "Exposure Trips", "Cultural Activities"].map((a) => (
                    <span key={a} className="px-3 py-1.5 glass text-accent text-xs font-bold rounded-full border border-accent/20">{a}</span>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <ImpactStat value="100+" label="Girls Supported" />
                  <ImpactStat value="120" label="Target 2026-27" />
                </div>
                <Link to="/projects/kla" className="btn-3d-accent inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-bold uppercase tracking-widest w-fit">
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            </AnimeReveal>
          </div>
        </div>
      </section>

      {/* ── 2. Skill Development ── */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeader
          icon={Scissors} label="Skill Development"
          title="Women Skill Training & Livelihood Programs"
          description="Empowering girls and women from marginalized communities through vocational skill training — enabling employment, entrepreneurship, and financial independence."
        />
        <AnimeReveal variant="fade-up" className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <PhotoCard img="/images/projects/upsdm-beauty.jpg" title="Beauty Therapy" desc="Professional beauty & salon training" link="/projects/brij-hunar" />
            <PhotoCard img="/images/projects/upsdm-tailor.jpg" title="Tailoring Program" desc="Self-employment through stitching" link="/projects/brij-hunar" />
          </div>
        </AnimeReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Scissors, title: "Women Skill Programs", desc: "Brij-Hunar: Vocational training in Beauty Therapy, Tailoring, and more.", link: "/projects/brij-hunar" },
            { icon: Award, title: "UPSDM Training Programs", desc: "Government-backed certified programs — Self Employed Tailor and Assistant Beauty Therapist.", link: "/projects/upsdm-training" },
            { icon: Sparkles, title: "MSME Skill Programs", desc: "Specialized skill initiatives in partnership with MSME for art, craft, fashion, and design." },
            { icon: ShoppingBag, title: "ProPoor Livelihood", desc: "World Bank aided UP Pro-Poor Tourism livelihood programs for women artisans in Braj." },
          ].map((card, i) => (
            <AnimeReveal key={card.title} variant="fade-up" delay={i * 80}>
              <TiltCard className="h-full"><MiniCard {...card} /></TiltCard>
            </AnimeReveal>
          ))}
        </div>
        <AnimeReveal variant="fade-up" delay={300}>
          <div className="mt-8 grid grid-cols-3 gap-4 max-w-lg">
            <ImpactStat value="400+" label="Trained Annually" />
            <ImpactStat value="20,000+" label="Since 2007" />
            <ImpactStat value="750+" label="Nipun Camps/Year" />
          </div>
        </AnimeReveal>
      </section>

      {/* ── 3. Women Community Development ── */}
      <section className="bg-card border-y border-border">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20">
          <SectionHeader
            icon={Users} label="Women Community Development"
            title="Women Community Development"
            description="Building sustainable livelihoods and community-driven enterprises through organized women's groups."
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-8">
            <AnimeReveal variant="fade-right">
              <PhotoCard img="/images/projects/shg-federation.jpg" title="Self Help Group Federation" desc="10 active SHGs with 120 women — building savings, credit, and micro-enterprise opportunities." link="/projects/shg-federation" badge="Community Power" />
            </AnimeReveal>
            <AnimeReveal variant="fade-left" delay={100}>
              <div className="flex flex-col gap-4">
                <TiltCard><MiniCard icon={Users} title="Self Help Groups (SHGs)" desc="10 active SHGs with 120 women — building savings, credit access, and micro-enterprise opportunities." link="/projects/shg-federation" /></TiltCard>
                <TiltCard><MiniCard icon={ShoppingBag} title="Braj Surabhi Area Level Federation" desc="Federation of SHGs promoting Braj art, craft, devotional products, and eco-friendly items through women-led enterprises." link="/projects/brij-surabhi" /></TiltCard>
                <div className="glass rounded-2xl p-6 border border-accent/20 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="glass w-10 h-10 rounded-xl flex items-center justify-center"><Rocket size={18} className="text-accent" /></div>
                    <span className="text-[10px] font-bold text-accent uppercase tracking-widest glass px-2 py-1 rounded-full border border-accent/20">In Progress</span>
                  </div>
                  <h3 className="text-base font-display font-bold text-primary">Brij Business Women's Directory</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">Digital directory connecting women entrepreneurs across Braj — promoting women-owned businesses and artisan markets.</p>
                </div>
              </div>
            </AnimeReveal>
          </div>
        </div>
      </section>

      {/* ── 4. Community Health ── */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeader
          icon={Heart} label="Community Health"
          title="Community Health & Social Awareness"
          description="Brij-Sangini — focusing on women's health awareness, hygiene education, and community medical support."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimeReveal variant="fade-up"><PhotoCard img="/images/projects/sanitary-napkin-vending.jpg" title="Menstrual Hygiene Initiative" desc="Health check-up camps, menstrual hygiene awareness, sanitary product distribution across 152 villages." link="/projects/sanitary-napkin" badge="Brij-Sangini" /></AnimeReveal>
          <AnimeReveal variant="fade-up" delay={100}><PhotoCard img="/images/projects/blood-donation-camp.jpg" title="Blood Donation Camps" desc="Community blood donation events partnering with district hospitals for reliable, safe blood supply." link="/projects/brij-sangini" badge="Health" /></AnimeReveal>
        </div>
      </section>

      {/* ── 5. Environment ── */}
      <section className="bg-card border-y border-border">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20">
          <SectionHeader
            icon={TreePine} label="Environment"
            title="Environment & Sustainability"
            description="Eco-friendly initiatives transforming waste into sustainable products and promoting environmental conservation."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimeReveal variant="fade-up"><PhotoCard img="/images/projects/plantation-drive.jpg" title="Plantation Drives" desc="Community-led tree planting and green initiatives across the Braj region." link="/projects/brij-seva" badge="Green" /></AnimeReveal>
            <AnimeReveal variant="fade-up" delay={100}><PhotoCard img="/images/projects/brij-surabhi-flower-recycling.jpg" title="Waste Flower Management" desc="Transforming temple floral offerings into incense, perfumes, and handmade paper." link="/projects/brij-surabhi-temple-waste" badge="Eco" /></AnimeReveal>
            <AnimeReveal variant="fade-up" delay={200}><PhotoCard img="/images/projects/brij-surabhi-cow-craft.jpg" title="Panchgavya Initiatives" desc="Eco-friendly Panchagavya commodities — blending animal welfare with rural empowerment." link="/projects/brij-surabhi-cow-welfare" badge="Sustainable" /></AnimeReveal>
          </div>
        </div>
      </section>

      {/* ── 6. Cultural Heritage ── */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeader
          icon={Flower2} label="Cultural Heritage"
          title="Cultural Heritage Preservation"
          description="Preserving and promoting the rich cultural traditions of the Braj region through specialized training."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimeReveal variant="fade-up"><PhotoCard img="/images/projects/poshak-sanjhi.jpg" title="Sanjhi Art Promotion" desc="Reviving royal heritage of Brij stencil art through MSME training in fashion, apparel, and interior design." link="/projects/royal-sanjhi" badge="Art" /></AnimeReveal>
          <AnimeReveal variant="fade-up" delay={100}><PhotoCard img="/images/projects/poshak-zari.jpg" title="Mathura Zari Poshak (GI) Promotion" desc="Preserving the sacred art of deity garment making through artisan training — World Bank aided project." link="/projects/radha-krishna-poshak" badge="Heritage" /></AnimeReveal>
        </div>
      </section>

      {/* ── 7. Community Service ── */}
      <section className="bg-card border-y border-border">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20">
          <SectionHeader
            icon={HandHeart} label="Community Service"
            title="Community Service & Braj Welfare"
            description="Brij-Seva — dedicated to supporting communities through seasonal and essential services."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimeReveal variant="fade-up"><PhotoCard img="/images/projects/daan-utsav.jpg" title="Daan Utsav" desc="Blanket and essential distribution during Makar Sankranti — serving the most vulnerable communities." link="/projects/brij-seva" badge="Seva" /></AnimeReveal>
            <AnimeReveal variant="fade-up" delay={100}><PhotoCard img="/images/projects/brij-seva-jal.jpg" title="Jal Seva Campaign" desc="Running continuously for 5 years — drinking water, sharbat, and buttermilk for travelers during summer." link="/projects/brij-seva" badge="5 Years" /></AnimeReveal>
          </div>
        </div>
      </section>

      {/* ── 8. Institutional Programs ── */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeader icon={Building2} label="Institutional Programs" title="Institutional Programs" />
        <AnimeReveal variant="fade-up">
          <div className="max-w-2xl">
            <TiltCard>
              <MiniCard icon={Building2} title="Skill Training for Women Inmates – District Jail Mathura" desc="Brij-Anshuman: Vocational skill training for women inmates, supporting rehabilitation and livelihood opportunities after release." link="/projects/brij-anshuman" />
            </TiltCard>
          </div>
        </AnimeReveal>
      </section>

      {/* ── 9. Relief Work ── */}
      <section className="bg-card border-y border-border">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20">
          <SectionHeader icon={ShieldAlert} label="Relief Work" title="Relief & Emergency Response" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimeReveal variant="fade-up"><TiltCard><MiniCard icon={ShieldAlert} title="COVID Relief" desc="Emergency relief distribution including food, medical supplies, and essential support during the COVID-19 pandemic." /></TiltCard></AnimeReveal>
            <AnimeReveal variant="fade-up" delay={100}><TiltCard><MiniCard icon={Heart} title="Disaster / Emergency Relief" desc="Rapid response activities for flood, fire, and other natural disaster relief — supporting affected families." /></TiltCard></AnimeReveal>
          </div>
        </div>
      </section>

      {/* ── 10. Events ── */}
      <section className="bg-primary py-20 relative overflow-hidden">
        <AuroraBackground variant="dark" intensity={0.6} />
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimeReveal variant="fade-up" className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="glass-dark w-10 h-10 rounded-xl flex items-center justify-center"><Calendar size={18} className="text-secondary" /></div>
              <span className="text-secondary text-xs font-bold tracking-[0.2em] uppercase">Events</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground leading-tight">Annual Events & Celebrations</h2>
          </AnimeReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimeReveal variant="fade-up">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl group" style={{ boxShadow: "0 12px 0 hsl(221 80% 8%), 0 20px 40px rgba(0,0,0,0.3)" }}>
                <img src="/images/projects/shakti-ek-adhaar-1.jpg" alt="Shakti Ek Adhaar" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 glass p-5 rounded-b-2xl">
                  <span className="text-secondary text-xs font-bold tracking-widest uppercase">Annual Day</span>
                  <h3 className="text-primary-foreground text-2xl font-display font-bold mt-1">Shakti Ek Adhaar</h3>
                  <p className="text-primary-foreground/80 text-sm mt-2 leading-relaxed">Annual Day of Khajani Welfare Society — honoring women leaders, educators, entrepreneurs, and social contributors.</p>
                  <Link to="/projects/shakti-ek-adhaar" className="inline-flex items-center text-secondary text-xs font-bold uppercase tracking-widest mt-3 hover:gap-2 transition-all gap-1">
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </AnimeReveal>
            <AnimeReveal variant="fade-up" delay={100}>
              <div className="glass-dark rounded-2xl aspect-[4/3] flex flex-col items-center justify-center text-center p-10 border border-white/10">
                <div className="glass-dark w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
                  <Umbrella size={32} className="text-secondary" />
                </div>
                <span className="text-secondary text-xs font-bold tracking-widest uppercase">Community Festival</span>
                <h3 className="text-primary-foreground text-2xl font-display font-bold mt-2">Umbrella Fest</h3>
                <p className="text-primary-foreground/70 text-sm mt-3 leading-relaxed max-w-sm">A vibrant community festival celebrating culture, creativity, and togetherness in the Braj region.</p>
              </div>
            </AnimeReveal>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-background py-24 text-center relative overflow-hidden">
        <AuroraBackground variant="light" intensity={0.6} />
        <AnimeReveal variant="fade-up" className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4 leading-tight">
            Want to partner on a<br />
            <span className="text-accent italic">Specific Initiative?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            We welcome corporate partnerships and individual sponsorships. Let's build a tailored impact plan together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/collaborations" className="btn-3d-accent inline-flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-widest">Partner With Us</Link>
            <Link to="/donate" className="btn-3d-outline inline-flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-widest">Donate Now</Link>
          </div>
        </AnimeReveal>
      </section>
    </Layout>
  );
};

export default ProjectsPage;
