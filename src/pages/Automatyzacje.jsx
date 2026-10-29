import React from 'react';
import { ArrowRight, ClipboardCheck, FolderInput, BellRing, BarChart2, Bot, MailCheck } from 'lucide-react';
import Layout, { btnPrimary, btnSecondary, PageHero, Section, SectionHeading, PackageCards, Steps, ContactCta } from '../components/Layout.jsx';
import { colors, contactUrl } from '../site.js';

const examples = [
  { icon: ClipboardCheck, text: 'Zgłoszenie z formularza na stronie trafia do arkusza i automatycznie wysyła potwierdzenie do klienta' },
  { icon: FolderInput, text: 'Faktury z maila same lądują w odpowiednim folderze na Dysku' },
  { icon: BellRing, text: 'Przypomnienia dla klientów o wizytach, płatnościach lub terminach' },
  { icon: BarChart2, text: 'Cotygodniowy raport z arkusza wysyłany mailem do zespołu' },
  { icon: Bot, text: 'Asystent AI, który zna Twoje procedury, cennik i dokumenty i odpowiada na pytania pracowników' },
  { icon: MailCheck, text: 'Szablony odpowiedzi na typowe maile przygotowywane przez AI' }
];

const rows = [
  { key: 'scope', label: 'Zakres' },
  { key: 'docs', label: 'Dokumentacja' },
  { key: 'support', label: 'Wsparcie' }
];

const packages = [
  {
    name: 'Szybka automatyzacja',
    scope: '1 prosty przepływ',
    docs: 'krótka instrukcja',
    support: '14 dni',
    price: 'od 600 zł',
    cta: 'Zamów',
    href: contactUrl('automatyzacja-szybka')
  },
  {
    name: 'Pakiet automatyzacji',
    scope: 'do 3 przepływów',
    docs: 'instrukcja + schemat działania',
    support: '30 dni',
    price: 'od 1 500 zł',
    cta: 'Zamów',
    href: contactUrl('automatyzacja-pakiet')
  },
  {
    name: 'Asystent AI dla firmy',
    scope: 'konfiguracja asystenta z wiedzą firmy',
    docs: 'instrukcja dla pracowników',
    support: '30 dni',
    price: 'od 1 200 zł',
    cta: 'Zamów',
    href: contactUrl('asystent-ai')
  }
];

const steps = [
  { text: 'Bezpłatna rozmowa: pokazujesz, co robisz ręcznie.' },
  { text: 'Propozycja rozwiązania i stała cena.' },
  { text: 'Wdrożenie na Twoich kontach i narzędziach – wszystko zostaje u Ciebie.' },
  { text: 'Przekazanie z instrukcją i okres wsparcia.' }
];

const Automatyzacje = () => (
  <Layout>
    <PageHero
      label="Automatyzacje i asystenci AI"
      title="Niech powtarzalne zadania robią się same"
      subtitle="Projektuję i wdrażam proste automatyzacje oraz asystentów AI dla małych firm. Bez wielkich systemów i wielomiesięcznych wdrożeń."
    >
      <a href="#pakiety" className={btnPrimary} style={{ backgroundColor: colors.darkBlue }}>
        Zobacz pakiety <ArrowRight size={22} aria-hidden="true" />
      </a>
      <a href={contactUrl('rozmowa')} className={btnSecondary} style={{ borderColor: colors.darkBlue, color: colors.darkBlue }}>
        Umów bezpłatną rozmowę
      </a>
    </PageHero>

    <Section alt aria-labelledby="przyklady">
      <SectionHeading id="przyklady" label="Inspiracje" title="Przykłady automatyzacji" />
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {examples.map(({ icon: Icon, text }) => (
          <li key={text} className="bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm flex flex-col gap-4">
            <span className="w-14 h-14 rounded-xl flex items-center justify-center text-white flex-shrink-0" style={{ backgroundColor: colors.darkBlue }}>
              <Icon size={28} aria-hidden="true" />
            </span>
            <span className="text-slate-800">{text}</span>
          </li>
        ))}
      </ul>
    </Section>

    <Section id="pakiety" aria-labelledby="pakiety-naglowek" className="scroll-mt-20">
      <SectionHeading id="pakiety-naglowek" label="Cennik" title="Pakiety" />
      <PackageCards
        packages={packages}
        rows={rows}
        note="Ceny netto. Ewentualne abonamenty narzędzi (np. Make, Zapier, licencje AI) opłaca klient, zawsze uzgadniamy je przed startem."
      />
    </Section>

    <Section alt aria-labelledby="jak-to-wyglada">
      <SectionHeading id="jak-to-wyglada" label="Przebieg" title="Jak to wygląda" />
      <Steps steps={steps} />
    </Section>

    <ContactCta title="Robisz coś ręcznie co tydzień?" text="Pokaż mi to w czasie bezpłatnej rozmowy, a powiem, czy da się to zautomatyzować i ile to będzie kosztować." />
  </Layout>
);

export default Automatyzacje;
