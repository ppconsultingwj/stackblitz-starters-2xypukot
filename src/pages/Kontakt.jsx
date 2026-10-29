import React, { useState, useRef, useEffect } from 'react';
import { Phone, Mail, CheckCircle, AlertTriangle, Send, MessageCircle } from 'lucide-react';
import Layout, { focusRing, btnPrimary, PageHero, Section } from '../components/Layout.jsx';
import { colors, contact, services, FORMSPREE_ID } from '../site.js';

// Usługa wstępnie wybrana na podstawie parametru ?usluga= (tylko znane wartości)
const initialService = () => {
  const param = new URLSearchParams(window.location.search).get('usluga');
  return services.some((s) => s.value === param) ? param : '';
};

const inputClass = `w-full min-h-[56px] px-4 py-3 rounded-xl bg-white border-2 border-slate-300 text-lg md:text-xl text-slate-900 placeholder:text-slate-500 focus:border-sky-700 ${focusRing}`;
const labelClass = 'block text-lg md:text-xl font-bold text-slate-900 mb-2';

const Field = ({ id, label, required, hint, children }) => (
  <div>
    <label htmlFor={id} className={labelClass}>
      {label} {required ? <span className="text-red-700" aria-hidden="true">*</span> : <span className="font-normal text-slate-600 text-base">(opcjonalnie)</span>}
    </label>
    {hint && <p id={`${id}-hint`} className="text-base text-slate-600 -mt-1 mb-2">{hint}</p>}
    {children}
  </div>
);

const Kontakt = () => {
  const [usluga, setUsluga] = useState(initialService);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const resultRef = useRef(null);

  const selected = services.find((s) => s.value === usluga);
  const isTemplate = Boolean(selected?.isTemplate);
  const subject = selected
    ? `${isTemplate ? 'Nowe zamówienie' : 'Nowe zapytanie'} – ${selected.label}`
    : 'Zapytanie ze strony P&P Consulting';

  useEffect(() => {
    if (status === 'success' || status === 'error') resultRef.current?.focus();
  }, [status]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('submitting');
    const form = event.target;

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });
      if (response.ok) {
        form.reset();
        setUsluga('');
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <Layout>
      <PageHero
        label="Kontakt i zamówienia"
        title="Porozmawiajmy"
        subtitle="Napisz, czego potrzebujesz. Odpowiadam zwykle w ciągu 1 dnia roboczego."
      />

      <Section alt>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* DANE KONTAKTOWE */}
          <aside className="lg:col-span-4 space-y-6 order-2 lg:order-1" aria-label="Dane kontaktowe">
            <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white ring-1 ring-slate-100 max-w-sm mx-auto lg:max-w-none">
              <img src="/wojciech-jakubiak.jpg" alt="Wojciech Jakubiak" className="w-full aspect-[4/5] object-cover object-top" />
            </div>
            <div className="bg-white rounded-2xl p-6 border-2 flex items-start gap-4" style={{ borderColor: colors.green }}>
              <MessageCircle size={32} className="flex-shrink-0" style={{ color: colors.darkBlue }} aria-hidden="true" />
              <p className="font-bold text-slate-900 text-xl">Pierwsza rozmowa jest bezpłatna.</p>
            </div>
            <a href={contact.phoneHref} className={`flex items-center gap-4 min-h-[72px] px-6 py-4 rounded-2xl text-white text-2xl font-bold shadow-lg hover:brightness-110 ${focusRing}`} style={{ backgroundColor: colors.darkBlue }}>
              <Phone size={30} className="flex-shrink-0" aria-hidden="true" /> {contact.phoneDisplay}
            </a>
            <a href={`mailto:${contact.email}`} className={`flex items-center gap-4 min-h-[72px] px-6 py-4 rounded-2xl bg-white border-2 text-lg md:text-xl font-bold break-all hover:bg-slate-50 ${focusRing}`} style={{ borderColor: colors.darkBlue, color: colors.darkBlue }}>
              <Mail size={28} className="flex-shrink-0" aria-hidden="true" /> {contact.email}
            </a>
          </aside>

          {/* FORMULARZ */}
          <div className="lg:col-span-8 order-1 lg:order-2 bg-white rounded-2xl p-6 md:p-10 shadow-xl shadow-slate-200/40 border border-slate-100">
            {status === 'success' ? (
              <div ref={resultRef} tabIndex={-1} role="status" className="text-center py-10 focus:outline-none">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={52} className="text-green-700" aria-hidden="true" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Dziękuję! Odpowiem najszybciej, jak to możliwe.</h2>
                <button onClick={() => setStatus('idle')} className={`mt-6 underline underline-offset-4 font-semibold min-h-[48px] px-4 rounded ${focusRing}`} style={{ color: colors.darkBlue }}>
                  Wyślij kolejną wiadomość
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Formularz zapytania i zamówienia</h2>
                <p className="text-base text-slate-600">Pola oznaczone <span className="text-red-700">*</span> są wymagane.</p>

                <input type="hidden" name="_subject" value={subject} />
                <input type="hidden" name="usluga_nazwa" value={selected?.label || ''} />
                {/* Pole antyspamowe – ludzie go nie widzą, boty je wypełniają */}
                <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} aria-hidden="true" />

                <Field id="name" label="Imię i nazwisko" required>
                  <input id="name" name="name" type="text" required autoComplete="name" className={inputClass} />
                </Field>

                <div className="grid md:grid-cols-2 gap-7">
                  <Field id="email" label="E-mail" required>
                    <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} />
                  </Field>
                  <Field id="phone" label="Telefon">
                    <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputClass} />
                  </Field>
                </div>

                <Field id="usluga" label="Usługa" required>
                  <select id="usluga" name="usluga" required value={usluga} onChange={(e) => setUsluga(e.target.value)} className={`${inputClass} cursor-pointer`}>
                    <option value="" disabled>Wybierz usługę…</option>
                    {services.map((s) => (
                      <option key={s.value} value={s.value}>{s.label}</option>
                    ))}
                  </select>
                </Field>

                <div className="grid md:grid-cols-2 gap-7">
                  <Field id="firma" label="Nazwa firmy">
                    <input id="firma" name="firma" type="text" autoComplete="organization" className={inputClass} />
                  </Field>
                  <Field id="nip" label="NIP" hint="Jeśli faktura ma być na firmę.">
                    <input id="nip" name="nip" type="text" inputMode="numeric" aria-describedby="nip-hint" className={inputClass} />
                  </Field>
                </div>

                <Field id="message" label="Wiadomość" required>
                  <textarea id="message" name="message" required rows={5} placeholder="Opisz krótko, czego potrzebujesz" className={`${inputClass} min-h-[160px]`}></textarea>
                </Field>

                <div className="space-y-5">
                  <label className="flex items-start gap-4 cursor-pointer">
                    <input type="checkbox" name="zgoda" value="tak" required className={`mt-1 w-7 h-7 flex-shrink-0 accent-sky-700 ${focusRing}`} />
                    <span className="text-slate-800">
                      Wyrażam zgodę na przetwarzanie moich danych w celu odpowiedzi na zapytanie. Szczegóły w <a href="/polityka-prywatnosci/" target="_blank" className="underline underline-offset-4 font-semibold" style={{ color: colors.darkBlue }}>Polityce prywatności</a>. <span className="text-red-700" aria-hidden="true">*</span>
                    </span>
                  </label>

                  {isTemplate && (
                    <label className="flex items-start gap-4 cursor-pointer bg-amber-50 border-2 border-amber-200 rounded-xl p-4">
                      <input type="checkbox" name="regulamin" value="tak" required className={`mt-1 w-7 h-7 flex-shrink-0 accent-sky-700 ${focusRing}`} />
                      <span className="text-slate-800">
                        Akceptuję <a href="/regulamin/" target="_blank" className="underline underline-offset-4 font-semibold" style={{ color: colors.darkBlue }}>Regulamin</a> i wyrażam zgodę na dostarczenie treści cyfrowej przed upływem terminu do odstąpienia od umowy. Przyjmuję do wiadomości, że tracę wtedy prawo odstąpienia. <span className="text-red-700" aria-hidden="true">*</span>
                      </span>
                    </label>
                  )}
                </div>

                {status === 'error' && (
                  <div ref={resultRef} tabIndex={-1} role="alert" className="flex items-start gap-4 bg-red-50 border-2 border-red-200 rounded-xl p-5 focus:outline-none">
                    <AlertTriangle size={30} className="flex-shrink-0 text-red-700" aria-hidden="true" />
                    <p className="text-red-900">
                      <strong>Nie udało się wysłać wiadomości.</strong> Spróbuj ponownie albo skontaktuj się ze mną bezpośrednio: zadzwoń pod numer{' '}
                      <a href={contact.phoneHref} className="underline font-bold whitespace-nowrap">{contact.phoneDisplay}</a> lub napisz na{' '}
                      <a href={`mailto:${contact.email}`} className="underline font-bold break-all">{contact.email}</a>.
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className={`${btnPrimary} w-full disabled:opacity-70 disabled:cursor-not-allowed`}
                  style={{ backgroundColor: colors.darkBlue }}
                >
                  {status === 'submitting' ? 'Wysyłanie…' : (isTemplate ? 'Zamawiam z obowiązkiem zapłaty' : 'Wyślij wiadomość')}
                  <Send size={22} aria-hidden="true" />
                </button>
              </form>
            )}
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Kontakt;
