import React from 'react';
import { ArrowRight, Wrench, TrendingUp, Target, Cpu, Mail } from 'lucide-react';
import Layout, { btnPrimary, btnSecondary, focusRing, PageHero, Section, SectionHeading, PackageCards, CheckList, ContactCta } from '../components/Layout.jsx';
import { colors, contactUrl } from '../site.js';

const deliverables = [
  'Warsztat z zespołem (2–3 godziny) – wspólne przejście procesu krok po kroku',
  'Mapę procesu w notacji BPMN',
  'Matrycę odpowiedzialności RACI',
  'Listę strat i wąskich gardeł',
  'Listę szybkich usprawnień do wdrożenia od zaraz',
  'Rekomendacje na dłuższy termin, w tym możliwości automatyzacji',
  'Raport podsumowujący i spotkanie omawiające wyniki'
];

const rows = [
  { key: 'scope', label: 'Zakres' },
  { key: 'time', label: 'Czas realizacji' }
];

const packages = [
  {
    name: 'Audyt procesu',
    scope: '1 proces, warsztat, mapa, RACI, raport',
    time: 'ok. 2 tygodnie',
    price: 'od 2 500 zł',
    cta: 'Zamów',
    href: contactUrl('audyt')
  },
  {
    name: 'Audyt + wdrożenie',
    scope: 'wszystko z pakietu Audyt + wsparcie we wdrożeniu usprawnień',
    time: 'do ustalenia',
    price: 'wycena indywidualna',
    cta: 'Zapytaj',
    href: contactUrl('audyt-wdrozenie')
  }
];

const methods = ['Lean', 'Six Sigma', 'Mapowanie procesów (BPMN, SIPOC)', 'Analiza przyczyn (5 Why, diagram Ishikawy)', 'RACI'];

// Dotychczasowa oferta szkoleń zamkniętych dla firm (ze starej strony głównej)
const trainings = [
  {
    title: 'Lean Six Sigma - Od Teorii do Praktyki',
    description: 'Poznaj narzędzia 8D, Diagram Ishikawy, 5 Why oraz FMEA. Naucz się eliminować marnotrawstwo i optymalizować koszty w Twojej firmie.',
    target: 'Dla Firm Produkcyjnych i Usługowych',
    icon: TrendingUp
  },
  {
    title: 'Podstawy zarządzania projektami',
    description: 'Solidne fundamenty dla Twojego zespołu. Jak skutecznie dowozić projekty, zarządzać ryzykiem i harmonogramem.',
    target: 'Dla Zespołów i Kadry Menadżerskiej',
    icon: Target
  },
  {
    title: 'Mapowanie i Optymalizacja Procesów z AI',
    description: 'Analiza przepływu wartości (VSM) oraz wykorzystanie nowoczesnych narzędzi AI do automatyzacji i usprawniania procesów.',
    target: 'Warsztat Wdrożeniowy',
    icon: Cpu
  }
];

const AudytProcesu = () => (
  <Layout>
    <PageHero
      label="Optymalizacja procesów"
      title="Mini-audyt procesu"
      subtitle="Spojrzenie z zewnątrz na jeden proces w Twojej firmie i konkretna lista usprawnień. Metodami, które sprawdzają się w dużych organizacjach, w skali małej firmy."
    >
      <a href="#pakiety" className={btnPrimary} style={{ backgroundColor: colors.darkBlue }}>
        Zobacz pakiety <ArrowRight size={22} aria-hidden="true" />
      </a>
      <a href={contactUrl('rozmowa')} className={btnSecondary} style={{ borderColor: colors.darkBlue, color: colors.darkBlue }}>
        Umów bezpłatną rozmowę
      </a>
    </PageHero>

    <Section alt narrow aria-labelledby="dla-kogo">
      <SectionHeading id="dla-kogo" label="Dla kogo" title="Kiedy warto zrobić audyt" />
      <div className="bg-white rounded-2xl p-6 md:p-10 border border-slate-100 shadow-sm">
        <p className="text-slate-800">
          Gdy coś „zawsze trwa za długo”, zadania giną między osobami, klienci czekają, a zespół gasi pożary zamiast pracować. Wybieramy jeden proces, np. obsługę zamówienia, przyjęcie klienta czy fakturowanie, i przyglądamy mu się dokładnie.
        </p>
      </div>
    </Section>

    <Section narrow aria-labelledby="co-otrzymujesz">
      <SectionHeading id="co-otrzymujesz" label="Rezultaty" title="Co otrzymujesz" />
      <CheckList items={deliverables} />
    </Section>

    <Section alt id="pakiety" aria-labelledby="pakiety-naglowek" className="scroll-mt-20">
      <SectionHeading id="pakiety-naglowek" label="Cennik" title="Pakiety" />
      <PackageCards packages={packages} rows={rows} note="Ceny netto." />
    </Section>

    <Section narrow aria-labelledby="metody">
      <SectionHeading id="metody" label="Warsztat pracy" title="Metody" />
      <ul className="flex flex-wrap justify-center gap-3">
        {methods.map((m) => (
          <li key={m} className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-slate-50 border-2 border-slate-200 font-semibold text-slate-800">
            <Wrench size={20} style={{ color: colors.darkBlue }} aria-hidden="true" /> {m}
          </li>
        ))}
      </ul>
    </Section>

    <Section alt aria-labelledby="szkolenia">
      <SectionHeading
        id="szkolenia"
        label="Współpraca B2B"
        title="Szkolenia dla Twojej Firmy"
        intro="Prowadzę zamknięte szkolenia i warsztaty dopasowane do specyfiki Twojej organizacji."
      />
      <div className="grid md:grid-cols-3 gap-8">
        {trainings.map(({ title, description, target, icon: Icon }) => (
          <div key={title} className="bg-white rounded-2xl shadow-xl shadow-slate-200/40 overflow-hidden flex flex-col border border-slate-100">
            <div className="h-2" style={{ background: `linear-gradient(90deg, ${colors.blue}, ${colors.green})` }}></div>
            <div className="p-6 md:p-8 flex-1 flex flex-col">
              <Icon size={32} className="mb-5" style={{ color: colors.darkBlue }} aria-hidden="true" />
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{title}</h3>
              <p className="text-slate-700 mb-4 flex-1">{description}</p>
              <p className="text-base font-bold uppercase tracking-wide mb-5 text-slate-500">{target}</p>
              <a href={contactUrl('inne')} className={`inline-flex items-center justify-center gap-3 min-h-[56px] px-6 rounded-xl text-white text-lg font-bold shadow-md hover:shadow-lg ${focusRing}`} style={{ backgroundColor: colors.textMain }}>
                Zapytaj o ten temat <Mail size={20} aria-hidden="true" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>

    <ContactCta />
  </Layout>
);

export default AudytProcesu;
