import React from 'react';
import { AlertTriangle } from 'lucide-react';
import Layout, { PageHero, Section } from '../components/Layout.jsx';
import { LegalSection } from './PolitykaPrywatnosci.jsx';

// Szkielet regulaminu – nagłówki do uzupełnienia treścią
const sections = [
  'Sprzedawca',
  'Przedmiot sprzedaży (treści cyfrowe)',
  'Zamówienie i płatność',
  'Dostarczenie',
  'Prawo odstąpienia od umowy (konsumenci)',
  'Reklamacje',
  'Licencja na korzystanie z szablonu',
  'Postanowienia końcowe'
];

const Regulamin = () => (
  <Layout>
    <PageHero label="Informacje" title="Regulamin sprzedaży szablonów" />

    <Section alt narrow>
      <div className="flex items-start gap-4 bg-amber-50 border-2 border-amber-300 rounded-2xl p-6 mb-8" role="note">
        <AlertTriangle size={32} className="flex-shrink-0 text-amber-700" aria-hidden="true" />
        <p className="text-xl font-bold text-slate-900">Dokument w przygotowaniu</p>
      </div>

      <div className="bg-white rounded-2xl p-6 md:p-10 border border-slate-100 shadow-sm">
        {sections.map((title, i) => (
          <LegalSection key={title} number={i + 1} title={title}>
            {title === 'Licencja na korzystanie z szablonu' && (
              <p>Licencja nie obejmuje prawa dalszej odsprzedaży szablonu.</p>
            )}
            <p className="text-slate-500 italic">[Treść do uzupełnienia]</p>
          </LegalSection>
        ))}
      </div>
    </Section>
  </Layout>
);

export default Regulamin;
