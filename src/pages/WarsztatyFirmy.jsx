import React from 'react';
import { ArrowRight, Scale, AlertCircle } from 'lucide-react';
import Layout, { btnPrimary, btnSecondary, PageHero, Section, SectionHeading, PackageCards, CheckList, FaqList, ContactCta } from '../components/Layout.jsx';
import { colors, contactUrl } from '../site.js';

const program = [
  'Czym jest AI i jak działa, bez technicznego żargonu',
  'Jak pisać skuteczne polecenia (prompty) – metoda krok po kroku',
  'ChatGPT, Claude, Gemini, Copilot, NotebookLM – co do czego się nadaje',
  'Zastosowania w biurze: maile, dokumenty, notatki ze spotkań, analiza danych, przygotowanie ofert',
  'Bezpieczeństwo: dane firmowe i dane osobowe, błędy i „halucynacje” AI',
  'Zasady korzystania z AI w firmie – szkic wewnętrznej polityki'
];

const rows = [
  { key: 'time', label: 'Czas' },
  { key: 'group', label: 'Grupa' },
  { key: 'form', label: 'Forma' },
  { key: 'materials', label: 'Materiały' },
  { key: 'support', label: 'Wsparcie po szkoleniu' },
  { key: 'certificate', label: 'Zaświadczenie dla uczestników' }
];

const packages = [
  {
    name: 'Start',
    time: '3 godziny',
    group: 'do 12 osób',
    form: 'stacjonarnie (Wrocław) lub online',
    materials: 'ściągawka z promptami',
    support: '–',
    certificate: 'tak',
    price: 'od 1 500 zł',
    cta: 'Zamów',
    href: contactUrl('warsztat-start')
  },
  {
    name: 'Praktyk',
    time: '2 × 3 godziny',
    group: 'do 12 osób',
    form: 'stacjonarnie lub online',
    materials: 'ściągawka + zeszyt ćwiczeń + szkic polityki AI',
    support: '30 dni wsparcia mailowego',
    certificate: 'tak',
    price: 'od 2 900 zł',
    cta: 'Zamów',
    href: contactUrl('warsztat-praktyk')
  },
  {
    name: 'Na miarę',
    time: 'do ustalenia',
    group: 'dowolna',
    form: 'do ustalenia',
    materials: 'dopasowane do firmy',
    support: 'do ustalenia',
    certificate: 'tak',
    price: 'wycena indywidualna',
    cta: 'Zapytaj',
    href: contactUrl('warsztat-na-miare')
  }
];

const faq = [
  { q: 'Czy uczestnicy muszą coś umieć?', a: 'Nie. Wystarczy laptop lub telefon i podstawowa obsługa komputera.' },
  { q: 'Czy musimy mieć płatne licencje?', a: 'Nie. Pracujemy na darmowych wersjach narzędzi, a jeśli firma ma licencje, wykorzystamy je.' },
  { q: 'Czy możecie oprzeć ćwiczenia na naszych przykładach?', a: 'Tak, w pakiecie Praktyk i Na miarę ćwiczenia przygotowuję pod Waszą branżę.' },
  { q: 'Czy dostaniemy fakturę?', a: 'Tak, fakturę wystawiam po przeprowadzeniu szkolenia.' }
];

const WarsztatyFirmy = () => (
  <Layout>
    <PageHero
      label="Warsztaty AI dla firm"
      title="Warsztaty AI dla Twojego zespołu"
      subtitle="Praktyczne szkolenie z narzędzi AI w codziennej pracy biura. Zespół wychodzi z umiejętnościami, które wykorzysta jeszcze tego samego dnia."
    >
      <a href="#pakiety" className={btnPrimary} style={{ backgroundColor: colors.darkBlue }}>
        Zobacz pakiety <ArrowRight size={22} aria-hidden="true" />
      </a>
      <a href={contactUrl('rozmowa')} className={btnSecondary} style={{ borderColor: colors.darkBlue, color: colors.darkBlue }}>
        Umów bezpłatną rozmowę
      </a>
    </PageHero>

    <Section alt narrow aria-labelledby="problem">
      <div className="bg-white rounded-2xl p-6 md:p-10 border border-slate-100 shadow-sm flex items-start gap-5">
        <AlertCircle size={40} className="flex-shrink-0 mt-1" style={{ color: colors.darkBlue }} aria-hidden="true" />
        <div>
          <h2 id="problem" className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Z czym przychodzą firmy</h2>
          <p className="text-slate-700">
            Pracownicy już korzystają z AI, często na własną rękę i bez zasad. Jedni nie widzą w nim sensu, inni wklejają do czatu dane klientów. Warsztat porządkuje to w kilka godzin: pokazuje, co działa, a czego unikać.
          </p>
        </div>
      </div>
    </Section>

    <Section narrow aria-labelledby="program">
      <SectionHeading id="program" label="Zakres" title="Program warsztatu" />
      <CheckList items={program} />

      <aside className="mt-12 rounded-2xl border-l-8 p-6 md:p-8 bg-sky-50" style={{ borderColor: colors.darkBlue }} aria-label="Informacja o AI Act">
        <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 flex items-center gap-3">
          <Scale size={30} style={{ color: colors.darkBlue }} aria-hidden="true" /> AI Act
        </h3>
        <p className="text-slate-800">
          Akt o sztucznej inteligencji (AI Act, art. 4) zobowiązuje firmy korzystające z systemów AI do podejmowania działań wspierających kompetencje AI pracowników. Udokumentowany warsztat to jeden z najprostszych sposobów, by to wykazać.
        </p>
      </aside>
    </Section>

    <Section alt id="pakiety" aria-labelledby="pakiety-naglowek" className="scroll-mt-20">
      <SectionHeading id="pakiety-naglowek" label="Cennik" title="Pakiety" />
      <PackageCards packages={packages} rows={rows} note="Ceny netto. Poza Wrocławiem doliczam koszt dojazdu." />
    </Section>

    <Section narrow aria-labelledby="faq">
      <SectionHeading id="faq" label="FAQ" title="Najczęściej zadawane pytania" />
      <FaqList items={faq} />
    </Section>

    <ContactCta />
  </Layout>
);

export default WarsztatyFirmy;
