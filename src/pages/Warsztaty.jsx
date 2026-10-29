import React from 'react';
import { Phone, Mail, Sun, Moon, CheckCircle, AlertTriangle, Users, Clock, Smartphone, HelpCircle, ArrowLeft, Award, MapPin, FileText, Monitor, Gift, Send } from 'lucide-react';
import Layout, { focusRing, btnPrimary, btnSecondary, SectionLabel } from '../components/Layout.jsx';
import { colors, contact, contactUrl } from '../site.js';

// Podstrona "Nie takie AI straszne" – warsztaty AI dla każdego.
// Celowo większa czcionka, wysoki kontrast i duże przyciski (odbiorcy: m.in. seniorzy).
const Warsztaty = () => {

  const brightSides = [
    'Napisać list, pismo do urzędu albo życzenia dla wnuczki',
    'Przetłumaczyć rozmowę w podróży – na żywo, głosem',
    'Wyjaśnić prostym językiem trudne pojęcie, pismo z urzędu czy wynik badania',
    'Zaplanować wycieczkę, menu na tydzień albo listę zakupów',
    'Pomóc spisać rodzinne wspomnienia i historię rodziny'
  ];

  const darkSides = [
    'AI potrafi zmyślać fakty i brzmieć przy tym bardzo przekonująco',
    'Oszuści klonują głosy bliskich i tworzą fałszywe nagrania',
    'Wiadomości wyłudzające dane są dziś pisane bezbłędną polszczyzną',
    'To, co wpisujesz do czatu, nie zawsze zostaje między Tobą a komputerem'
  ];

  const audiences = [
    { title: 'Kluby seniora i Uniwersytety Trzeciego Wieku' },
    { title: 'Biblioteki, domy kultury, rady osiedli' },
    { title: 'Szkoły', text: 'spotkania dla rodziców: dzieci, AI i bezpieczeństwo w sieci' },
    { title: 'Firmy i instytucje', text: 'dla pracowników, którzy dopiero zaczynają przygodę z AI' }
  ];

  const formats = [
    {
      title: 'Pierwsze spotkanie z AI',
      time: '2 godziny',
      text: 'Czym jest AI, pokaz na żywo, pierwsze samodzielne pytanie do czatu, podstawy bezpieczeństwa. Dla osób bez żadnego doświadczenia.'
    },
    {
      title: 'AI na co dzień',
      time: '3 × 2 godziny',
      text: 'Jak zadawać dobre pytania, darmowe narzędzia (czat, tłumacz, rozpoznawanie zdjęć, asystent głosowy) i pełne spotkanie o oszustwach z użyciem AI.'
    },
    {
      title: 'AI bez tajemnic',
      time: '4 × 2 godziny',
      text: 'Tworzenie obrazów, praca z dokumentami i pismami, AI a zdrowie, spisywanie wspomnień i genealogia. Kończy się certyfikatem.'
    }
  ];

  const howItWorks = [
    { icon: Users, content: <>Małe grupy: <strong>8–15 osób</strong>, podchodzę do każdego uczestnika</> },
    { icon: Smartphone, content: <>Każdy ćwiczy <strong>na własnym telefonie lub tablecie</strong> (mam kilka zapasowych)</> },
    { icon: Monitor, content: <><strong>Mało slajdów, dużo praktyki</strong>, pokazy na żywo na dużym ekranie</> },
    { icon: FileText, content: <>Uczestnicy dostają <strong>drukowaną ściągawkę</strong> do domu</> },
    { icon: MapPin, content: <><strong>Przyjeżdżam do Państwa</strong> – Wrocław i okolice, wieczory w tygodniu lub weekendy</> }
  ];

  const faq = [
    {
      q: 'Czy trzeba znać się na komputerach?',
      a: 'Nie. Wystarczy, że potrafisz wysłać SMS-a. Resztę pokażę krok po kroku.'
    },
    {
      q: 'Czy uczestnicy muszą mieć smartfon?',
      a: 'Najlepiej tak, bo wtedy ćwiczą na urządzeniu, którego używają na co dzień. Dla osób bez telefonu mam kilka zapasowych.'
    },
    {
      q: 'Czy trzeba płacić za aplikacje?',
      a: 'Nie. Pracujemy wyłącznie na darmowych wersjach narzędzi.'
    },
    {
      q: 'Czego potrzebujecie na miejscu?',
      a: 'Sali z dostępem do internetu (Wi-Fi) oraz projektora lub telewizora. Jeśli nie ma Wi-Fi – damy radę, mam własny internet mobilny.'
    },
    {
      q: 'Czy zajęcia można opłacić z budżetu klubu lub dotacji?',
      a: 'Tak. Wystawiam fakturę i chętnie pomogę opisać zajęcia na potrzeby wniosku lub sprawozdania.'
    },
    {
      q: 'Czy warsztat może być tylko o bezpieczeństwie?',
      a: 'Tak. Mogę poprowadzić jedno spotkanie poświęcone wyłącznie oszustwom z użyciem AI (fałszywe głosy, SMS-y, e-maile). To dobry temat na początek współpracy.'
    }
  ];

  return (
    <Layout>
        {/* 1. NAGŁÓWEK SEKCJI */}
        <section className="pt-28 md:pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-3xl opacity-10 -translate-y-1/2 translate-x-1/3" style={{ backgroundColor: colors.blue }}></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-10 translate-y-1/2 -translate-x-1/4" style={{ backgroundColor: colors.green }}></div>

          <div className="max-w-4xl mx-auto relative z-10">
            <a href="/" className={`inline-flex items-center gap-2 min-h-[48px] mb-6 text-lg font-semibold underline underline-offset-4 rounded ${focusRing}`} style={{ color: colors.darkBlue }}>
              <ArrowLeft size={20} aria-hidden="true" /> Strona główna P&P Consulting
            </a>

            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-slate-900">
                Nie takie AI straszne, <br className="hidden md:block" />
                <span style={{ color: colors.darkBlue }}>jak je malują</span>
              </h1>

              <p className="text-2xl md:text-3xl font-semibold text-slate-700 mb-8">
                Blaski i cienie sztucznej inteligencji – praktyczne warsztaty dla każdego
              </p>

              <p className="max-w-3xl mx-auto text-xl md:text-2xl text-slate-700 leading-relaxed">
                Sztuczna inteligencja jest już w naszych telefonach. Pomaga pisać, tłumaczyć i planować, ale wykorzystują ją też oszuści. Na moich warsztatach pokazuję obie strony: jak mądrze korzystać z AI na co dzień i jak nie dać się nabrać. Prostym językiem, bez technicznego żargonu, z ćwiczeniami na własnym telefonie.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <a href={contact.phoneHref} className={btnPrimary} style={{ backgroundColor: colors.darkBlue }}>
                  <Phone size={24} aria-hidden="true" /> Zadzwoń: {contact.phoneDisplay}
                </a>
                <a href={`mailto:${contact.email}`} className={btnSecondary} style={{ borderColor: colors.darkBlue, color: colors.darkBlue }}>
                  <Mail size={24} aria-hidden="true" /> Napisz e-mail
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 2. BLASKI I CIENIE */}
        <section className="py-20 bg-slate-50 border-t border-slate-200" aria-labelledby="blaski-cienie">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <SectionLabel color={colors.darkBlue}>Dwie strony medalu</SectionLabel>
              <h2 id="blaski-cienie" className="text-3xl md:text-5xl font-bold text-slate-900">Blaski i cienie</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/40 overflow-hidden border border-slate-100">
                <div className="h-2" style={{ backgroundColor: colors.green }}></div>
                <div className="p-6 md:p-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Sun size={36} className="flex-shrink-0 text-amber-500" aria-hidden="true" />
                    Blaski – co AI może dla Ciebie zrobić
                  </h3>
                  <ul className="space-y-5">
                    {brightSides.map((item) => (
                      <li key={item} className="flex items-start gap-4">
                        <CheckCircle size={28} className="flex-shrink-0 mt-0.5" style={{ color: colors.green }} aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/40 overflow-hidden border border-slate-100">
                <div className="h-2 bg-slate-700"></div>
                <div className="p-6 md:p-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Moon size={36} className="flex-shrink-0 text-slate-700" aria-hidden="true" />
                    Cienie – na co uważać
                  </h3>
                  <ul className="space-y-5">
                    {darkSides.map((item) => (
                      <li key={item} className="flex items-start gap-4">
                        <AlertTriangle size={28} className="flex-shrink-0 mt-0.5 text-red-700" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. DLA KOGO */}
        <section className="py-20 bg-white border-t border-slate-200" aria-labelledby="dla-kogo">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <SectionLabel color={colors.darkBlue}>Odbiorcy</SectionLabel>
              <h2 id="dla-kogo" className="text-3xl md:text-5xl font-bold text-slate-900">Dla kogo</h2>
            </div>

            <ul className="grid sm:grid-cols-2 gap-6">
              {audiences.map((a) => (
                <li key={a.title} className="p-6 bg-slate-50 rounded-2xl border-2 border-slate-100 flex items-start gap-4">
                  <Users size={32} className="flex-shrink-0 mt-0.5" style={{ color: colors.darkBlue }} aria-hidden="true" />
                  <span>
                    <strong className="text-slate-900">{a.title}</strong>
                    {a.text && <> – {a.text}</>}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 4. FORMATY WARSZTATÓW */}
        <section className="py-20 bg-slate-50 border-t border-slate-200" aria-labelledby="formaty">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <SectionLabel color={colors.darkBlue}>Do wyboru</SectionLabel>
              <h2 id="formaty" className="text-3xl md:text-5xl font-bold text-slate-900">Formaty warsztatów</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {formats.map((f) => (
                <div key={f.title} className="bg-white rounded-2xl shadow-xl shadow-slate-200/40 overflow-hidden flex flex-col border border-slate-100">
                  <div className="h-2" style={{ background: `linear-gradient(90deg, ${colors.blue}, ${colors.green})` }}></div>
                  <div className="p-6 md:p-8 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{f.title}</h3>
                    <p className="inline-flex items-center gap-2 self-start mb-5 px-4 py-2 rounded-full text-white font-bold" style={{ backgroundColor: colors.darkBlue }}>
                      <Clock size={22} aria-hidden="true" /> {f.time}
                    </p>
                    <p className="text-slate-700 flex-1">{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. JAK WYGLĄDAJĄ ZAJĘCIA */}
        <section className="py-20 bg-white border-t border-slate-200" aria-labelledby="jak-wygladaja">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <SectionLabel color={colors.darkBlue}>Przebieg</SectionLabel>
              <h2 id="jak-wygladaja" className="text-3xl md:text-5xl font-bold text-slate-900">Jak wyglądają zajęcia</h2>
            </div>

            <ul className="space-y-5">
              {howItWorks.map(({ icon: Icon, content }, i) => (
                <li key={i} className="flex items-start gap-5 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                  <span className="w-14 h-14 rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow" style={{ backgroundColor: colors.darkBlue }}>
                    <Icon size={28} aria-hidden="true" />
                  </span>
                  <span className="pt-2.5">{content}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 6. PROWADZĄCY */}
        <section className="py-20 bg-slate-50 border-t border-slate-200" aria-labelledby="prowadzacy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-5 mb-12 lg:mb-0 max-w-md mx-auto lg:max-w-none w-full">
                <div className="relative rounded-2xl aspect-[4/5] w-full overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-100 bg-slate-100">
                  <img src="/wojciech-jakubiak.jpg" alt="Wojciech Jakubiak – prowadzący warsztaty" className="w-full h-full object-cover object-top" loading="lazy" />
                </div>
              </div>

              <div className="lg:col-span-7">
                <SectionLabel color={colors.darkBlue}>Prowadzący</SectionLabel>
                <h2 id="prowadzacy" className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">Wojciech Jakubiak</h2>

                <div className="space-y-6 text-slate-700">
                  <p>
                    Od ponad 15 lat zajmuję się usprawnianiem procesów i technologią: wcześniej w HP, od 2015 roku w Trans.eu Group. Na co dzień wdrażam w firmie narzędzia sztucznej inteligencji i współprowadzę społeczność „Entuzjaści AI”, w której uczę współpracowników praktycznego korzystania z ChatGPT, Claude, Gemini czy NotebookLM.
                  </p>
                  <p className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100">
                    <Award size={32} className="flex-shrink-0 mt-0.5" style={{ color: colors.darkBlue }} aria-hidden="true" />
                    <span><strong className="text-slate-900">Certyfikaty:</strong> Lean Six Sigma Black Belt, PMP®, PRINCE2®, AI Managers, Google „Umiejętności Jutra”.</span>
                  </p>
                  <p>
                    Prywatnie jestem mężem i tatą dwójki dzieci. Wierzę, że technologia powinna służyć wszystkim, nie tylko tym, którzy z nią dorastali.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. CENA */}
        <section className="py-20 bg-white border-t border-slate-200" aria-labelledby="cena">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <SectionLabel color={colors.darkBlue}>Koszt</SectionLabel>
              <h2 id="cena" className="text-3xl md:text-5xl font-bold text-slate-900">Cena</h2>
            </div>

            <div className="rounded-2xl border-4 p-6 md:p-10 text-center bg-white shadow-xl shadow-slate-200/40" style={{ borderColor: colors.green }}>
              <Gift size={48} className="mx-auto mb-4" style={{ color: colors.darkBlue }} aria-hidden="true" />
              <p className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Pierwszy warsztat pokazowy dla nowej instytucji – bezpłatnie.
              </p>
              <p className="text-slate-700">
                Kolejne zajęcia wyceniam indywidualnie: od 30 zł za osobę albo stała stawka za grupę. Wystawiam fakturę.
              </p>
            </div>
          </div>
        </section>

        {/* 8. FAQ */}
        <section className="py-20 bg-slate-50 border-t border-slate-200" aria-labelledby="faq">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <SectionLabel color={colors.darkBlue}>FAQ</SectionLabel>
              <h2 id="faq" className="text-3xl md:text-5xl font-bold text-slate-900">Najczęściej zadawane pytania</h2>
            </div>

            <div className="space-y-6">
              {faq.map((item) => (
                <div key={item.q} className="bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm">
                  <div className="flex items-start gap-4">
                    <HelpCircle size={32} className="flex-shrink-0 mt-0.5" style={{ color: colors.darkBlue }} aria-hidden="true" />
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">{item.q}</h3>
                      <p className="text-slate-700">{item.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. KONTAKT */}
        <section id="kontakt" className="py-20 text-white" style={{ backgroundColor: colors.textMain }} aria-labelledby="kontakt-naglowek">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 id="kontakt-naglowek" className="text-3xl md:text-5xl font-bold mb-6">Kontakt</h2>
            <p className="text-xl md:text-2xl text-slate-100 mb-12">
              Zadzwoń lub napisz – umówimy bezpłatny warsztat pokazowy.
            </p>

            <div className="flex flex-col gap-6 max-w-xl mx-auto">
              <a href={contact.phoneHref} className={`flex items-center justify-center gap-4 min-h-[72px] px-6 py-4 rounded-2xl bg-white text-2xl md:text-3xl font-bold shadow-xl hover:bg-slate-100 transition-colors ${focusRing}`} style={{ color: colors.darkBlue }}>
                <Phone size={32} aria-hidden="true" /> {contact.phoneDisplay}
              </a>
              <a href={`mailto:${contact.email}`} className={`flex items-center justify-center gap-4 min-h-[72px] px-6 py-4 rounded-2xl border-2 border-white text-xl md:text-2xl font-bold hover:bg-white/10 transition-colors break-all ${focusRing}`}>
                <Mail size={30} className="flex-shrink-0" aria-hidden="true" /> {contact.email}
              </a>
              <a href={contactUrl('warsztat-instytucja')} className={`flex items-center justify-center gap-4 min-h-[72px] px-6 py-4 rounded-2xl border-2 border-white text-xl md:text-2xl font-bold hover:bg-white/10 transition-colors ${focusRing}`}>
                <Send size={30} className="flex-shrink-0" aria-hidden="true" /> Wyślij zapytanie przez formularz
              </a>
            </div>
          </div>
        </section>
    </Layout>
  );
};

export default Warsztaty;
