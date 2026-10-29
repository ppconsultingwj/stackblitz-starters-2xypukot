import React, { useState } from 'react';
import { X, ChevronRight, BookOpen, CheckCircle, Award, Target, ArrowRight, Brain, Cpu, Zap, Search, FileText, Users } from 'lucide-react';
import Layout, { focusRing, btnPrimary, btnSecondary, SectionHeading, Section, Steps } from '../components/Layout.jsx';
import { colors, contact, contactUrl } from '../site.js';
import { blogPosts } from '../blogPosts.jsx';

const serviceTiles = [
  {
    title: 'Warsztaty AI dla firm',
    text: 'Twój zespół nauczy się korzystać z AI w codziennej pracy, bezpiecznie i skutecznie.',
    price: 'od 1 500 zł',
    href: '/warsztaty-ai-dla-firm/',
    icon: Brain,
    accent: colors.blue
  },
  {
    title: 'Automatyzacje i asystenci AI',
    text: 'Powtarzalne zadania wykonują się same, a Ty odzyskujesz godziny w tygodniu.',
    price: 'od 600 zł',
    href: '/automatyzacje/',
    icon: Zap,
    accent: colors.green
  },
  {
    title: 'Mini-audyt procesu',
    text: 'Spojrzenie z zewnątrz na jeden proces i konkretna lista usprawnień.',
    price: 'od 2 500 zł',
    href: '/audyt-procesu/',
    icon: Search,
    accent: colors.blue
  },
  {
    title: 'Szablony do pobrania',
    text: 'Gotowe narzędzia do pracy z procesami i zespołem, np. matryca RACI.',
    price: 'od 49 zł',
    href: '/szablony/',
    icon: FileText,
    accent: colors.green
  }
];

// Certyfikaty (dotychczasowa sekcja "O mnie")
const certificates = [
  { icon: Award, title: 'Certified Black Belt', text: 'Lean Six Sigma' },
  { icon: Target, title: 'Certified PMP®', text: 'Project Management Professional' },
  { icon: Target, title: 'PRINCE2®', text: 'Zarządzanie projektami' },
  { icon: Brain, title: 'AI Managers (SGH & eduweb)', text: 'Certyfikowany program "AI Driven Manager". Projektowanie rozwiązań AI, analiza danych, zarządzanie zespołem AI.' },
  { icon: Cpu, title: 'Umiejętności Jutra (Google & SGH)', text: '"Using AI in Business Development". Wykorzystanie AI w rozwoju biznesu.' }
];

const trustedCompanies = [
  { name: 'Trans.EU', logo: '/logo_trans.png' },
  { name: 'Smartlunch', logo: '/logo_smartlunch.png' },
  { name: 'HP', logo: '/logo_hp.png' },
  { name: 'LG Electronics', logo: '/logo_lg.png' }
];

const workSteps = [
  { title: 'Bezpłatna rozmowa (30 min)', text: 'Opowiadasz, czego potrzebujesz.' },
  { title: 'Konkretna propozycja', text: 'Zakres, termin i cena na piśmie.' },
  { title: 'Realizacja i faktura', text: 'Płacisz za efekt, fakturę wystawiam po wykonaniu usługi.' }
];

const Home = () => {
  const [activePost, setActivePost] = useState(null);

  return (
    <Layout>
      {/* NAGŁÓWEK */}
      <section className="pt-32 pb-20 md:pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-3xl opacity-10 -translate-y-1/2 translate-x-1/3" style={{ backgroundColor: colors.blue }}></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-10 translate-y-1/2 -translate-x-1/4" style={{ backgroundColor: colors.green }}></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full border mb-8 backdrop-blur-sm shadow-sm bg-white" style={{ borderColor: colors.green }}>
            <Brain size={18} className="mr-2" style={{ color: colors.green }} aria-hidden="true" />
            <span className="text-sm md:text-base font-bold tracking-wide uppercase" style={{ color: colors.textMain }}>AI Driven Process Management</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-slate-900">
            Procesy i AI, które <span className="text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(90deg, ${colors.blue}, ${colors.green})` }}>naprawdę działają</span> w Twojej firmie
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-xl md:text-2xl text-slate-700 leading-relaxed">
            Pomagam małym i średnim firmom pracować sprawniej: uczę zespoły korzystać z AI, automatyzuję powtarzalne zadania i porządkuję procesy. Praktycznie, bez korporacyjnego żargonu.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
            <a href="#uslugi" className={btnPrimary} style={{ backgroundColor: colors.darkBlue }}>
              Zobacz usługi <ChevronRight size={22} aria-hidden="true" />
            </a>
            <a href={contactUrl('rozmowa')} className={btnSecondary} style={{ borderColor: colors.darkBlue, color: colors.darkBlue }}>
              Umów bezpłatną rozmowę
            </a>
          </div>
        </div>
      </section>

      {/* KAFELKI USŁUG */}
      <Section alt id="uslugi" aria-labelledby="uslugi-naglowek" className="scroll-mt-20">
        <SectionHeading id="uslugi-naglowek" label="Usługi" title="W czym mogę pomóc" />
        <div className="grid md:grid-cols-2 gap-8">
          {serviceTiles.map(({ title, text, price, href, icon: Icon, accent }) => (
            <a key={href} href={href} className={`group bg-white rounded-2xl shadow-xl shadow-slate-200/40 overflow-hidden border border-slate-100 hover:-translate-y-1 transition-transform duration-300 flex flex-col ${focusRing}`}>
              <div className="h-2" style={{ background: accent }}></div>
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <Icon size={40} className="mb-4" style={{ color: accent }} aria-hidden="true" />
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">{title}</h3>
                <p className="text-slate-700 mb-6 flex-1">{text}</p>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <span className="text-2xl font-extrabold" style={{ color: colors.darkBlue }}>{price}</span>
                  <span className="inline-flex items-center font-bold text-xl" style={{ color: colors.darkBlue }}>
                    Szczegóły <ArrowRight size={22} className="ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
        <p className="mt-6 text-center text-slate-600 text-base md:text-lg">Ceny netto.</p>

        {/* DLA INSTYTUCJI */}
        <div className="mt-12 bg-white rounded-2xl border-2 p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6" style={{ borderColor: colors.green }}>
          <Users size={40} className="flex-shrink-0" style={{ color: colors.darkBlue }} aria-hidden="true" />
          <p className="flex-1 text-slate-800">
            <strong className="text-slate-900">Dla instytucji i organizacji społecznych:</strong> „Nie takie AI straszne” – warsztaty dla seniorów i mieszkańców.
          </p>
          <a href="/warsztaty-ai/" className={btnSecondary} style={{ borderColor: colors.darkBlue, color: colors.darkBlue }}>
            Dowiedz się więcej <ArrowRight size={22} aria-hidden="true" />
          </a>
        </div>
      </Section>

      {/* DLACZEGO JA */}
      <Section aria-labelledby="dlaczego-ja">
        <div className="lg:grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 mb-12 lg:mb-0 max-w-md mx-auto lg:max-w-none w-full">
            <div className="relative rounded-2xl bg-slate-50 aspect-[4/5] w-full overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-100">
              <img src="/wlasciciel_p&p_consulting.png" alt="Wojciech Jakubiak" className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white backdrop-blur-md" style={{ backgroundColor: 'rgba(51, 65, 85, 0.9)' }}>
                <p className="font-bold text-2xl">{contact.name}</p>
                <p className="text-base">Ekspert ds. Doskonalenia Procesów, AI & Project Manager</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <span className="font-bold tracking-widest text-sm md:text-base uppercase mb-3 block" style={{ color: colors.darkBlue }}>O mnie</span>
            <h2 id="dlaczego-ja" className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">Dlaczego ja</h2>

            <div className="space-y-6 text-slate-700 mb-10">
              <p>
                Od ponad 15 lat usprawniam procesy w dużych firmach, najpierw w <strong>HP</strong>, od 2015 roku w <strong>Trans.eu Group</strong>. Na co dzień wdrażam narzędzia AI i współprowadzę społeczność „Entuzjaści AI”, w której uczę współpracowników praktycznego korzystania z AI.
              </p>
              <p>
                Wierzę, że technologia powinna służyć ludziom, eliminując "Mudę" i uwalniając kreatywny potencjał zespołów.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">Certyfikaty</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certificates.map(({ icon: Icon, title, text }) => (
                <li key={title} className="flex items-start p-5 bg-slate-50 rounded-xl border border-slate-100">
                  <Icon className="mt-1 mr-3 flex-shrink-0" size={28} style={{ color: colors.darkBlue }} aria-hidden="true" />
                  <div>
                    <p className="font-bold text-slate-900">{title}</p>
                    <p className="text-base text-slate-600">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ZAUFAŁO MI */}
      <Section alt aria-labelledby="zaufalo-mi">
        <SectionHeading id="zaufalo-mi" label="Doświadczenie" title="Zaufało mi" />
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-80 hover:opacity-100 transition-all duration-500">
          {trustedCompanies.map((company) => (
            <div key={company.name} className="flex items-center justify-center h-16 w-32 md:w-40 grayscale hover:grayscale-0 transition-all duration-300">
              <img src={company.logo} alt={`Logo ${company.name}`} className="max-h-full max-w-full object-contain" />
            </div>
          ))}
        </div>
      </Section>

      {/* JAK PRACUJĘ */}
      <Section aria-labelledby="jak-pracuje">
        <SectionHeading id="jak-pracuje" label="Współpraca" title="Jak pracuję" />
        <Steps steps={workSteps} />
        <div className="mt-12 text-center">
          <a href={contactUrl('rozmowa')} className={btnPrimary} style={{ backgroundColor: colors.darkBlue }}>
            Umów bezpłatną rozmowę <ArrowRight size={22} aria-hidden="true" />
          </a>
        </div>
      </Section>

      {/* BLOG */}
      <Section alt id="wiedza" aria-labelledby="wiedza-naglowek">
        <SectionHeading id="wiedza-naglowek" label="Blog & Publikacje" title="Dzielę się wiedzą" />
        <div className="grid md:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <article key={post.id} className="flex flex-col h-full">
              <button onClick={() => setActivePost(post)} className={`group text-left flex flex-col h-full rounded-2xl ${focusRing}`}>
                <div className="aspect-[16/10] bg-slate-100 rounded-2xl mb-6 overflow-hidden relative shadow-sm border border-slate-100 w-full">
                  {post.image ? (
                    <img src={post.image} alt="" className="w-full h-full object-cover" loading="lazy" />
                  ) : (
                    <BookOpen size={48} strokeWidth={1} />
                  )}
                </div>
                <p className="text-base font-bold text-slate-500 mb-3 uppercase tracking-wider">{post.date}</p>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 group-hover:underline">{post.title}</h3>
                <p className="text-slate-700 text-lg leading-relaxed mb-4 flex-1 line-clamp-3">{post.excerpt}</p>
                <span className="inline-flex items-center font-bold" style={{ color: colors.darkBlue }}>
                  Czytaj dalej <ArrowRight size={20} className="ml-2" aria-hidden="true" />
                </span>
              </button>
            </article>
          ))}
        </div>
      </Section>

      {/* KONTAKT */}
      <section className="py-16 md:py-20 text-white" style={{ backgroundColor: colors.textMain }} aria-labelledby="kontakt-naglowek">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="kontakt-naglowek" className="text-3xl md:text-5xl font-bold mb-6">Porozmawiajmy o Twoim biznesie</h2>
          <p className="text-xl md:text-2xl text-slate-100 mb-10">
            Szukasz wsparcia w optymalizacji procesów lub wdrożeniu AI? Skontaktuj się ze mną bezpośrednio. Pierwsza rozmowa jest bezpłatna.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/kontakt/" className={`${btnPrimary} !text-slate-900 bg-white`}>
              Napisz do mnie <ArrowRight size={22} aria-hidden="true" />
            </a>
            <a href={contact.phoneHref} className={`inline-flex items-center justify-center gap-3 min-h-[60px] px-8 py-4 rounded-xl border-2 border-white text-xl font-bold hover:bg-white/10 transition-colors ${focusRing}`}>
              Zadzwoń: {contact.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* MODAL BLOGA */}
      {activePost && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-900/90 backdrop-blur-md p-4 overflow-y-auto" role="dialog" aria-modal="true" aria-label={activePost.title}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full relative my-8 flex flex-col max-h-[90vh]">
            <div className="sticky top-0 bg-white/95 backdrop-blur-sm z-10 px-6 py-4 border-b border-slate-100 flex justify-between items-center rounded-t-2xl">
              <span className="text-sm font-bold uppercase tracking-widest" style={{ color: colors.darkBlue }}>Blog P&P Consulting</span>
              <button onClick={() => setActivePost(null)} className={`text-slate-600 hover:text-slate-900 p-3 hover:bg-slate-100 rounded-full ${focusRing}`} aria-label="Zamknij artykuł">
                <X size={28} aria-hidden="true" />
              </button>
            </div>

            <div className="p-6 md:p-8 overflow-y-auto">
              <span className="text-slate-500 text-base font-semibold">{activePost.date}</span>
              <h2 className="text-3xl font-bold text-slate-900 mt-2 mb-6">{activePost.title}</h2>
              <div className="w-full aspect-video bg-slate-100 rounded-xl mb-8 overflow-hidden">
                <img src={activePost.image} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="prose prose-lg prose-slate max-w-none">{activePost.content}</div>
            </div>

            <div className="p-6 border-t border-slate-100 bg-slate-50 rounded-b-2xl text-center">
              <button onClick={() => setActivePost(null)} className={`${btnSecondary}`} style={{ borderColor: colors.darkBlue, color: colors.darkBlue }}>
                Zamknij artykuł
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Home;
