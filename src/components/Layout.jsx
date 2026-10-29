import React, { useState } from 'react';
import { Menu, X, Phone, Linkedin, ArrowRight, CheckCircle, HelpCircle } from 'lucide-react';
import { colors, contact, navItems } from '../site.js';

// Wspólne style: większa czcionka, wysoki kontrast i duże przyciski (czytelne także dla starszych osób)
export const focusRing = 'focus:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 focus-visible:ring-amber-400';
export const btnPrimary = `inline-flex items-center justify-center gap-3 min-h-[60px] px-8 py-4 rounded-xl text-white text-xl font-bold shadow-lg hover:shadow-xl hover:brightness-110 transition-all ${focusRing}`;
export const btnSecondary = `inline-flex items-center justify-center gap-3 min-h-[60px] px-8 py-4 rounded-xl bg-white border-2 text-xl font-bold shadow-sm hover:bg-slate-50 transition-all ${focusRing}`;

const currentPath = () => (typeof window !== 'undefined' ? window.location.pathname.replace(/\/?$/, '/') : '/');

export const SectionLabel = ({ children, color = colors.darkBlue }) => (
  <span className="font-bold tracking-widest text-sm md:text-base uppercase mb-3 block" style={{ color }}>{children}</span>
);

export const SectionHeading = ({ label, title, intro, id }) => (
  <div className="text-center mb-12">
    {label && <SectionLabel>{label}</SectionLabel>}
    <h2 id={id} className="text-3xl md:text-5xl font-bold text-slate-900">{title}</h2>
    {intro && <p className="mt-6 max-w-3xl mx-auto text-slate-700">{intro}</p>}
  </div>
);

export const Section = ({ children, alt = false, narrow = false, className = '', ...rest }) => (
  <section className={`py-16 md:py-20 border-t border-slate-200 ${alt ? 'bg-slate-50' : 'bg-white'} ${className}`} {...rest}>
    <div className={`${narrow ? 'max-w-4xl' : 'max-w-7xl'} mx-auto px-4 sm:px-6 lg:px-8`}>{children}</div>
  </section>
);

// Nagłówek podstrony (tytuł + podtytuł + opcjonalne przyciski)
export const PageHero = ({ label, title, subtitle, children }) => (
  <section className="pt-28 md:pt-36 pb-16 md:pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white">
    <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-3xl opacity-10 -translate-y-1/2 translate-x-1/3" style={{ backgroundColor: colors.blue }}></div>
    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-10 translate-y-1/2 -translate-x-1/4" style={{ backgroundColor: colors.green }}></div>
    <div className="max-w-4xl mx-auto text-center relative z-10">
      {label && <SectionLabel>{label}</SectionLabel>}
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-slate-900">{title}</h1>
      {subtitle && <p className="max-w-3xl mx-auto text-xl md:text-2xl text-slate-700 leading-relaxed">{subtitle}</p>}
      {children && <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">{children}</div>}
    </div>
  </section>
);

// Karty pakietów cenowych – zamiast tabeli, żeby dobrze wyglądały na telefonie
export const PackageCards = ({ packages, rows, note }) => (
  <>
    <div className={`grid gap-8 ${packages.length === 2 ? 'md:grid-cols-2 max-w-5xl mx-auto' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
      {packages.map((p) => (
        <div key={p.name} className="bg-white rounded-2xl shadow-xl shadow-slate-200/40 overflow-hidden flex flex-col border border-slate-100">
          <div className="h-2" style={{ background: `linear-gradient(90deg, ${colors.blue}, ${colors.green})` }}></div>
          <div className="p-6 md:p-8 flex-1 flex flex-col">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">{p.name}</h3>
            <dl className="space-y-4 flex-1">
              {rows.map((row) => (
                <div key={row.key} className="border-b border-slate-100 pb-3">
                  <dt className="text-base font-bold uppercase tracking-wide text-slate-500">{row.label}</dt>
                  <dd className="text-slate-800">{p[row.key]}</dd>
                </div>
              ))}
            </dl>
            <p className="text-3xl font-extrabold my-6" style={{ color: colors.darkBlue }}>{p.price}</p>
            <a href={p.href} className={btnPrimary} style={{ backgroundColor: colors.darkBlue }}>
              {p.cta} <ArrowRight size={22} aria-hidden="true" />
            </a>
          </div>
        </div>
      ))}
    </div>
    {note && <p className="mt-8 text-center text-slate-700">{note}</p>}
  </>
);

// Ponumerowane kroki ("Jak pracuję", "Jak to wygląda")
export const Steps = ({ steps }) => (
  <ol className={`grid gap-6 ${steps.length === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-3'}`}>
    {steps.map((s, i) => (
      <li key={i} className="bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm">
        <span className="w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl font-extrabold mb-4" style={{ backgroundColor: colors.darkBlue }} aria-hidden="true">{i + 1}</span>
        {s.title && <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">{s.title}</h3>}
        <p className="text-slate-700">{s.text}</p>
      </li>
    ))}
  </ol>
);

export const CheckList = ({ items, columns = false }) => (
  <ul className={columns ? 'grid md:grid-cols-2 gap-5' : 'space-y-5'}>
    {items.map((item) => (
      <li key={item} className="flex items-start gap-4">
        <CheckCircle size={28} className="flex-shrink-0 mt-0.5" style={{ color: colors.green }} aria-hidden="true" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export const FaqList = ({ items }) => (
  <div className="space-y-6">
    {items.map((item) => (
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
);

// Pasek zachęty do kontaktu na dole podstron
export const ContactCta = ({ title = 'Nie wiesz, który pakiet wybrać?', text = 'Pierwsza rozmowa jest bezpłatna. Opowiedz, czego potrzebujesz, a zaproponuję rozwiązanie.', usluga = 'rozmowa' }) => (
  <section className="py-16 md:py-20 text-white" style={{ backgroundColor: colors.textMain }}>
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-6">{title}</h2>
      <p className="text-xl md:text-2xl text-slate-100 mb-10">{text}</p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a href={`/kontakt/?usluga=${usluga}`} className={`${btnPrimary} !text-slate-900 bg-white`}>
          Umów bezpłatną rozmowę <ArrowRight size={22} aria-hidden="true" />
        </a>
        <a href={contact.phoneHref} className={`inline-flex items-center justify-center gap-3 min-h-[60px] px-8 py-4 rounded-xl border-2 border-white text-xl font-bold hover:bg-white/10 transition-colors ${focusRing}`}>
          <Phone size={24} aria-hidden="true" /> {contact.phoneDisplay}
        </a>
      </div>
    </div>
  </section>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const path = currentPath();

  return (
    <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 gap-4">
          <a href="/" className={`flex items-center gap-4 rounded-lg flex-shrink-0 ${focusRing}`} aria-label="P&P Consulting – strona główna">
            <img src="/logo2.jpg" alt="P&P Consulting Logo" className="h-14 md:h-16 w-auto object-contain" />
            <span className="hidden sm:flex xl:flex lg:hidden flex-col justify-center h-full pt-1 border-l-2 border-slate-200 pl-4 text-xs uppercase tracking-widest text-slate-500 font-bold leading-tight">
              Process &<br />Project Management
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Menu główne">
            {navItems.map((item) => {
              const active = path === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={`px-3 py-2 rounded-md text-lg font-semibold transition-colors hover:bg-slate-50 ${active ? '' : 'text-slate-700 hover:text-slate-900'} ${focusRing}`}
                  style={active ? { color: colors.darkBlue, textDecoration: 'underline', textUnderlineOffset: '6px', textDecorationThickness: '3px' } : undefined}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden inline-flex items-center gap-2 min-h-[48px] px-4 rounded-xl border-2 text-lg font-bold ${focusRing}`}
            style={{ borderColor: colors.darkBlue, color: colors.darkBlue }}
            aria-expanded={isMenuOpen}
            aria-controls="menu-mobilne"
          >
            {isMenuOpen ? <X size={26} aria-hidden="true" /> : <Menu size={26} aria-hidden="true" />}
            Menu
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav id="menu-mobilne" className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg max-h-[calc(100vh-5rem)] overflow-y-auto" aria-label="Menu główne">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navItems.map((item) => {
              const active = path === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={`flex items-center min-h-[56px] px-4 rounded-lg text-xl font-semibold hover:bg-slate-50 ${active ? 'bg-slate-50' : 'text-slate-800'} ${focusRing}`}
                  style={active ? { color: colors.darkBlue } : undefined}
                >
                  {item.label}
                </a>
              );
            })}
            <a href={contact.phoneHref} className={`${btnPrimary} w-full mt-4`} style={{ backgroundColor: colors.darkBlue }}>
              <Phone size={22} aria-hidden="true" /> Zadzwoń: {contact.phoneDisplay}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

const Footer = () => {
  const linkClass = `inline-flex items-center gap-2 min-h-[44px] hover:text-white underline underline-offset-4 rounded ${focusRing}`;
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800 text-base md:text-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h2 className="text-white font-bold text-xl mb-3">{contact.company}</h2>
            <p>NIP: {contact.nip} · {contact.city}</p>
          </div>
          <div>
            <h2 className="text-white font-bold text-xl mb-3">Kontakt</h2>
            <p>Telefon: <a href={contact.phoneHref} className={linkClass}>{contact.phoneDisplay}</a></p>
            <p>E-mail: <a href={`mailto:${contact.email}`} className={`${linkClass} break-all`}>{contact.email}</a></p>
          </div>
          <div>
            <h2 className="text-white font-bold text-xl mb-3">Informacje</h2>
            <ul>
              <li><a href="/polityka-prywatnosci/" className={linkClass}>Polityka prywatności</a></li>
              <li><a href="/regulamin/" className={linkClass}>Regulamin</a></li>
              <li><a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}><Linkedin size={20} aria-hidden="true" /> LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-sm md:text-base">
          <p>© {new Date().getFullYear()} {contact.shortName}. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

const Layout = ({ children }) => (
  <div className="min-h-screen font-sans text-slate-800 text-lg md:text-xl leading-relaxed" style={{ backgroundColor: colors.bgLight }}>
    <a href="#tresc" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-white focus:px-4 focus:py-3 focus:rounded-lg focus:shadow-lg">Przejdź do treści</a>
    <Header />
    <main id="tresc">{children}</main>
    <Footer />
  </div>
);

export default Layout;
