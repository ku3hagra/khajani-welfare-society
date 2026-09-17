import { useState } from "react";
import Layout from "@/components/Layout";
import { AnimeReveal } from "@/components/AnimeReveal";
import AuroraBackground from "@/components/AuroraBackground";
import MediaLightbox, { MediaItem } from "@/components/MediaLightbox";
import { Newspaper, ZoomIn, Eye } from "lucide-react";

const newsClippings: MediaItem[] = [
  { image: "/images/media/news-clipping-1.jpg", source: "A Sipru / Dainik Jagran", desc: "Coverage of Khajani Welfare Society's initiatives for women empowerment and skill training in the Brij region.", date: "July 2021" },
  { image: "/images/media/news-clipping-2.jpg", source: "Amar Ujala / Dainik Jagran", desc: "Feature coverage on EduDaksh program launch and society's impact on rural communities.", date: "2023" },
  { image: "/images/media/news-clipping-3.jpg", source: "Regional Press", desc: "Multi-article compilation covering awards, cultural programs, and community outreach activities.", date: "2022" },
  { image: "/images/media/news-clipping-4.jpg", source: "Live Hindustan / Amar Ujala", desc: "Feature stories on women's skill training programs and Khajani's impact across 18,000+ beneficiaries.", date: "2021-2022" },
  { image: "/images/media/news-clipping-5.jpg", source: "Amar Ujala", desc: "Reporting on KWS programs reaching 800+ women with skill training across 5,000 villages.", date: "2018" },
  { image: "/images/media/news-clipping-6.jpg", source: "Amar Ujala / A Sipru", desc: "Coverage of sanitary napkin vending machine installation serving 2,000+ women and community welfare activities.", date: "2022" },
  { image: "/images/media/news-clipping-7.jpg", source: "A Sipru", desc: "Reporting on Digital literacy programs and EduDaksh remedial education initiative launch.", date: "Dec 2021" },
  { image: "/images/media/news-clipping-8.jpg", source: "A Sipru / Dainik Jagran", desc: "Coverage of Jal Seva camps, skill training programs, and Brij-Anshuman inmate training initiative.", date: "2021-2022" },
  { image: "/images/media/news-clipping-9.jpg", source: "Regional Press", desc: "Multi-article compilation covering society registrations, women's day celebrations, and training milestones.", date: "2021-2023" },
  { image: "/images/media/news-clipping-10.jpg", source: "The Times of India", desc: "Coverage of Mathura jail inmates producing PPE safety kits for staff and sanitation workers, developed with IIT Kanpur.", date: "2020" },
  { image: "/images/media/news-clipping-11.jpg", source: "The Times of India", desc: "Detailed feature on PPE kit making, training and donation initiative at Mathura jail in collaboration with KWS.", date: "2020" },
  { image: "/images/media/news-clipping-12.jpg", source: "Hindustan / Amar Ujala / Dainik Jagran", desc: "Compilation covering girls' education initiatives, Rakhi competition, free training programs, and Dainik Jagran feature.", date: "2021-2023" },
  { image: "/images/media/news-clipping-13.jpg", source: "Amar Ujala / Hindustan", desc: "Coverage of blood donation camp, Women's Day honour, online workshops for women's self-reliance.", date: "2019-2022" },
  { image: "/images/media/news-clipping-14.jpg", source: "Dainik Jagran / Amar Ujala / Hindustan", desc: "Feature on women empowerment award ceremony, summer camp activities, and students showcasing Thakur Ji poshak.", date: "2018" },
  { image: "/images/media/news-clipping-15.jpg", source: "Regional Press", desc: "Coverage of online workshops for women's self-reliance and 'Hauslon Ki Udaan' recognition program.", date: "2021" },
  { image: "/images/media/news-clipping-16.jpg", source: "Amar Ujala / Dainik Jagran", desc: "Women's excellence award ceremony by Khajani Welfare Society and coverage of outstanding women's contributions.", date: "2024" },
];

const pressReviews: MediaItem[] = [
  { image: "/images/media/press-review-3.jpg", title: "Award Ceremony", desc: "Recognition & honor ceremony celebrating women changemakers across Mathura." },
  { image: "/images/media/press-review-4.jpg", title: "Community Impact", desc: "Field reporting on grassroots mobilization and livelihood generation programs." },
  { image: "/images/media/press-review-5.jpg", title: "Skill Training", desc: "Master artisans conducting hands-on vocational training sessions in Brij villages." },
  { image: "/images/media/press-review-6.jpg", title: "Women Empowerment", desc: "Feature story celebrating financial independence of female entrepreneurs." },
];

const allMediaItems: MediaItem[] = [...newsClippings, ...pressReviews];

const MediaPage = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <Layout>
      {/* Hero */}
      <header className="bg-card relative overflow-hidden pt-24 pb-16 border-b border-border">
        <AuroraBackground variant="light" intensity={1.2} />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 skew-x-12 transform origin-top-right pointer-events-none" />

        <AnimeReveal variant="fade-left" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <span className="text-accent font-bold tracking-widest text-xs uppercase mb-4 glass px-3 py-1.5 rounded-full border border-accent/20 inline-block">
              Archive &amp; Coverage
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-primary mb-8 leading-tight mt-4">
              Beyond the <br /><span className="text-accent italic">Headlines.</span>
            </h1>
            <div className="h-1 w-24 bg-secondary mb-8 rounded-full" />
            <p className="text-xl text-muted-foreground max-w-2xl font-light leading-relaxed">
              Documenting our journey of impact through the lens of leading regional and national publications. A chronicle of change since 2007.
            </p>
          </div>
        </AnimeReveal>
      </header>

      {/* News Clippings Gallery */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <AnimeReveal variant="fade-up">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-border pb-4">
            <div>
              <h2 className="text-4xl font-display font-bold text-foreground mb-2">In The News</h2>
              <p className="text-muted-foreground italic font-display text-lg">Click on any clipping to expand and read the full print.</p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center gap-2 glass px-4 py-2 rounded-full border border-border">
              <Newspaper size={18} className="text-accent" />
              <span className="text-sm font-bold uppercase tracking-wider text-muted-foreground">{newsClippings.length} Articles</span>
            </div>
          </div>
        </AnimeReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsClippings.map((clipping, i) => (
            <AnimeReveal key={i} variant="fade-up" delay={i % 3 * 80}>
              <article
                onClick={() => setLightboxIndex(i)}
                className="clay-card group flex flex-col h-full overflow-hidden cursor-pointer hover:border-accent/40 border border-transparent transition-all"
                title="Click to expand & read article"
              >
                <div className="relative overflow-hidden aspect-[4/5] bg-muted">
                  <img
                    src={clipping.image}
                    alt={`News coverage - ${clipping.source}`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Hover reading badge overlay */}
                  <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                    <div className="p-3 bg-white text-primary rounded-full shadow-xl mb-2 transform scale-90 group-hover:scale-100 transition-transform">
                      <ZoomIn size={22} />
                    </div>
                    <span className="text-white text-sm font-bold tracking-wide">
                      Click to Read Article
                    </span>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className="glass px-3 py-1 text-accent text-xs font-bold uppercase tracking-wider rounded-full border border-accent/20 max-w-[70%] truncate">
                      {clipping.source}
                    </span>
                    <span className="text-xs text-muted-foreground shrink-0">{clipping.date}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1 line-clamp-3">
                    {clipping.desc}
                  </p>
                  <div className="mt-4 pt-3 border-t border-border flex items-center justify-between text-xs font-bold text-accent">
                    <span className="flex items-center gap-1 group-hover:underline">
                      <Eye size={14} /> Read Paper
                    </span>
                    <span className="text-muted-foreground text-[11px] font-normal">Double-click zoomable</span>
                  </div>
                </div>
              </article>
            </AnimeReveal>
          ))}
        </div>

        {/* Press Reviews */}
        <AnimeReveal variant="fade-up">
          <div className="mt-24 mb-8">
            <h3 className="text-3xl font-display font-bold text-foreground mb-2">Press Reviews &amp; Coverage</h3>
            <p className="text-muted-foreground italic font-display text-lg mb-8">Individual article clippings and photo coverage from various publications.</p>
          </div>
        </AnimeReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {pressReviews.map((review, i) => (
            <AnimeReveal key={i} variant="fade-up" delay={i * 80}>
              <div
                onClick={() => setLightboxIndex(newsClippings.length + i)}
                className="clay-card overflow-hidden group cursor-pointer hover:border-accent/40 border border-transparent transition-all"
                title="Click to view full image"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                  <img
                    src={review.image}
                    alt={review.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="p-2.5 bg-white text-primary rounded-full shadow-lg">
                      <ZoomIn size={18} />
                    </div>
                  </div>
                </div>
                <div className="p-3 text-center">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">{review.title}</span>
                </div>
              </div>
            </AnimeReveal>
          ))}
        </div>
      </main>

      {/* Interactive Newspaper Lightbox Modal */}
      <MediaLightbox
        items={allMediaItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />
    </Layout>
  );
};

export default MediaPage;
