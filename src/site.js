// Wspólne dane całej strony: kolory, kontakt, menu i lista usług formularza.

export const colors = {
  blue: '#2EA3D8',
  green: '#6CC24A',
  darkBlue: '#1B6CA8',
  textMain: '#334155',
  bgLight: '#F8FAFC'
};

export const contact = {
  company: 'P&P Consulting Wojciech Jakubiak',
  shortName: 'P&P Consulting',
  name: 'Wojciech Jakubiak',
  nip: '6912422113',
  address: 'Smardzowska 43b, 52-234 Wrocław',
  city: 'Wrocław',
  phoneDisplay: '501 341 095',
  phoneHref: 'tel:+48501341095',
  email: 'ppconsultingwj@gmail.com',
  linkedin: 'https://www.linkedin.com/in/wojciech-jakubiak-11835963/'
};

// TWOJE ID FORMSPREE (to samo co w dotychczasowym formularzu)
export const FORMSPREE_ID = 'xykgndeb';

export const navItems = [
  { label: 'Warsztaty AI', href: '/warsztaty-ai-dla-firm/' },
  { label: 'Automatyzacje', href: '/automatyzacje/' },
  { label: 'Audyt procesu', href: '/audyt-procesu/' },
  { label: 'Szablony', href: '/szablony/' },
  { label: 'Dla instytucji', href: '/warsztaty-ai/' },
  { label: 'Kontakt', href: '/kontakt/' }
];

// Opcje pola "Usługa" w formularzu (/kontakt/?usluga=<value>)
export const services = [
  { value: 'rozmowa', label: 'Bezpłatna rozmowa' },
  { value: 'warsztat-start', label: 'Warsztat AI – Start' },
  { value: 'warsztat-praktyk', label: 'Warsztat AI – Praktyk' },
  { value: 'warsztat-na-miare', label: 'Warsztat AI – Na miarę' },
  { value: 'automatyzacja-szybka', label: 'Automatyzacja – szybka' },
  { value: 'automatyzacja-pakiet', label: 'Automatyzacja – pakiet' },
  { value: 'asystent-ai', label: 'Asystent AI dla firmy' },
  { value: 'audyt', label: 'Mini-audyt procesu' },
  { value: 'audyt-wdrozenie', label: 'Audyt + wdrożenie' },
  { value: 'szablon-raci', label: 'Szablon: Matryca RACI', isTemplate: true },
  { value: 'warsztat-instytucja', label: 'Warsztat „Nie takie AI straszne” dla instytucji' },
  { value: 'inne', label: 'Inne' }
];

export const contactUrl = (usluga) => `/kontakt/?usluga=${usluga}`;
