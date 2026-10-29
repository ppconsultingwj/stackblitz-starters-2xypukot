import React from 'react';
import { ShoppingCart, LayoutGrid, Package } from 'lucide-react';
import Layout, { btnPrimary, PageHero, Section, SectionHeading, Steps, FaqList } from '../components/Layout.jsx';
import { colors, contactUrl } from '../site.js';

const orderSteps = [
  { text: 'Wypełniasz formularz zamówienia.' },
  { text: 'Otrzymujesz fakturę z danymi do przelewu.' },
  { text: 'Po zaksięgowaniu płatności wysyłam link do szablonu i plik PDF, zwykle w ciągu 1 dnia roboczego.' }
];

// Pytania z dotychczasowej sekcji FAQ sklepu
const faq = [
  {
    q: 'Czy otrzymam fakturę?',
    a: 'Tak. Prowadzę legalną działalność gospodarczą. Do każdego zamówienia wystawiam fakturę (dla firm) lub rachunek imienny (dla osób prywatnych). Dokument otrzymasz w formacie PDF na maila.'
  },
  {
    q: 'Czy muszę mieć firmę, żeby kupić narzędzia?',
    a: 'Nie. Oferta skierowana jest zarówno do firm (B2B), jak i osób prywatnych chcących podnieść swoje kompetencje. W przypadku osób prywatnych korzystam ze zwolnienia z kasy fiskalnej (płatność wyłącznie na konto).'
  }
];

const Szablony = () => (
  <Layout>
    <PageHero
      label="Sklep z narzędziami"
      title="Szablony do pracy z procesami i zespołem"
      subtitle="Sprawdzone narzędzia, które możesz wykorzystać od razu. Każdy szablon zawiera instrukcję i przykład."
    />

    <Section alt narrow aria-labelledby="raci">
      <article className="bg-white rounded-2xl shadow-xl shadow-slate-200/40 overflow-hidden border border-slate-100">
        <div className="h-2" style={{ background: `linear-gradient(90deg, ${colors.blue}, ${colors.green})` }}></div>
        <div className="p-6 md:p-10">
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <span className="w-20 h-20 rounded-2xl flex items-center justify-center bg-slate-50 border border-slate-100 flex-shrink-0">
              <LayoutGrid size={40} style={{ color: colors.darkBlue }} aria-hidden="true" />
            </span>
            <div className="flex-1">
              <h2 id="raci" className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Matryca RACI – szablon Miro</h2>
              <p className="text-4xl font-extrabold mb-6" style={{ color: colors.darkBlue }}>49 zł</p>
              <p className="text-slate-700 mb-6">
                Profesjonalny szablon do podziału odpowiedzialności w zespole. Zawiera wyjaśnienie ról R, A, C i I, wypełniony przykład, gotową matrycę z listami wyboru oraz narzędzie do wykrywania konfliktów kompetencyjnych.
              </p>
              <p className="flex items-start gap-3 bg-slate-50 rounded-xl p-4 border border-slate-100 mb-8">
                <Package size={26} className="flex-shrink-0 mt-0.5" style={{ color: colors.darkBlue }} aria-hidden="true" />
                <span><strong>W zestawie:</strong> szablon Miro + 8-stronicowy przewodnik PDF o metodzie RACI</span>
              </p>
              <a href={contactUrl('szablon-raci')} className={`${btnPrimary} w-full sm:w-auto`} style={{ backgroundColor: colors.darkBlue }}>
                Zamów <ShoppingCart size={22} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </article>
      <p className="mt-8 text-center text-slate-700 italic">
        Kolejne szablony w przygotowaniu: SIPOC, mapa procesu, raport A3, tablica Kaizen.
      </p>
    </Section>

    <Section aria-labelledby="zamowienie">
      <SectionHeading id="zamowienie" label="Zakup" title="Jak przebiega zamówienie" />
      <Steps steps={orderSteps} />
      <p className="mt-8 text-center text-slate-700">
        Zamawiając, akceptujesz <a href="/regulamin/" className="underline underline-offset-4 font-semibold" style={{ color: colors.darkBlue }}>Regulamin</a>.
      </p>
    </Section>

    <Section alt narrow aria-labelledby="faq">
      <SectionHeading id="faq" label="FAQ" title="Najczęściej zadawane pytania" />
      <FaqList items={faq} />
    </Section>
  </Layout>
);

export default Szablony;
