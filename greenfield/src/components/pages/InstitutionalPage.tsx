import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export function InstitutionalPage({eyebrow,title,intro,note}:{eyebrow:string;title:string;intro:string;note?:string}) {
  return (
    <>
      <Header />
      <main>
        <section className="pageHero">
          <div className="shell">
            <p className="eyebrow">{eyebrow}</p>
            <h1>{title}</h1>
            <p className="heroLead">{intro}</p>
            {note ? <div className="pageNote">{note}</div> : null}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
