import React from 'react';
import Layout, { PageHero, Section } from '../components/Layout.jsx';
import { colors, contact } from '../site.js';

export const LegalSection = ({ number, title, children }) => (
  <section className="mb-10">
    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{number}. {title}</h2>
    <div className="space-y-4 text-slate-800">{children}</div>
  </section>
);

const PolitykaPrywatnosci = () => (
  <Layout>
    <PageHero label="Informacje" title="Polityka prywatności" />

    <Section alt narrow>
      <div className="bg-white rounded-2xl p-6 md:p-10 border border-slate-100 shadow-sm">
        <LegalSection number={1} title="Administrator danych">
          <p>
            Administratorem danych osobowych jest <strong>{contact.company}</strong>, {contact.address}, NIP: {contact.nip}, e-mail:{' '}
            <a href={`mailto:${contact.email}`} className="underline underline-offset-4 font-semibold break-all" style={{ color: colors.darkBlue }}>{contact.email}</a>.
          </p>
        </LegalSection>

        <LegalSection number={2} title="Jakie dane i w jakim celu">
          <p>Przetwarzam dane podane w formularzu kontaktowym (m.in. imię i nazwisko, adres e-mail, numer telefonu, nazwę firmy, NIP oraz treść wiadomości) w celu:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>odpowiedzi na zapytanie,</li>
            <li>przygotowania oferty,</li>
            <li>realizacji zamówienia.</li>
          </ul>
        </LegalSection>

        <LegalSection number={3} title="Podstawa prawna">
          <ul className="list-disc pl-6 space-y-2">
            <li>art. 6 ust. 1 lit. b RODO – podjęcie działań na Twoje żądanie przed zawarciem umowy oraz wykonanie umowy,</li>
            <li>art. 6 ust. 1 lit. f RODO – prawnie uzasadniony interes administratora, czyli odpowiedź na zapytanie i prowadzenie korespondencji,</li>
            <li>art. 6 ust. 1 lit. c RODO – obowiązek prawny w zakresie dokumentacji księgowej.</li>
          </ul>
        </LegalSection>

        <LegalSection number={4} title="Odbiorcy danych">
          <p>Dane mogą być przekazywane wyłącznie podmiotom, które pomagają mi prowadzić działalność:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>dostawcy hostingu strony (Cloudflare),</li>
            <li>dostawcy obsługi formularza kontaktowego (Formspree),</li>
            <li>biuru rachunkowemu.</li>
          </ul>
        </LegalSection>

        <LegalSection number={5} title="Okres przechowywania">
          <p>Dane z korespondencji przechowuję do jej zakończenia. Dane z faktur przechowuję przez okres wymagany przepisami podatkowymi.</p>
        </LegalSection>

        <LegalSection number={6} title="Twoje prawa">
          <p>Masz prawo do:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>dostępu do swoich danych,</li>
            <li>ich sprostowania,</li>
            <li>usunięcia,</li>
            <li>ograniczenia przetwarzania,</li>
            <li>sprzeciwu wobec przetwarzania,</li>
            <li>przenoszenia danych,</li>
            <li>wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (UODO).</li>
          </ul>
          <p>Aby skorzystać ze swoich praw, napisz na adres <a href={`mailto:${contact.email}`} className="underline underline-offset-4 font-semibold break-all" style={{ color: colors.darkBlue }}>{contact.email}</a>.</p>
        </LegalSection>

        <LegalSection number={7} title="Pliki cookies">
          <p>Strona nie używa plików cookies śledzących.</p>
        </LegalSection>
      </div>
    </Section>
  </Layout>
);

export default PolitykaPrywatnosci;
