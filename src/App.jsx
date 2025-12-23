import React, { useState } from 'react';
import { Menu, X, ChevronRight, User, BookOpen, Mail, Phone, Linkedin, CheckCircle, Award, TrendingUp, Target, BarChart2, ArrowRight, Brain, Cpu, Leaf, Send, ShoppingCart, Layout, Map, ClipboardList, HelpCircle, FileText } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [activePost, setActivePost] = useState(null);
  const [showLegal, setShowLegal] = useState(false);
  
  const [modalFormStatus, setModalFormStatus] = useState('idle'); 
  const [contactFormStatus, setContactFormStatus] = useState('idle');

  // TWOJE ID FORMSPREE
  const FORMSPREE_ID = 'xykgndeb'; 

  const colors = {
    blue: '#2EA3D8',
    green: '#6CC24A',
    darkBlue: '#1B6CA8',
    textMain: '#334155',
    bgLight: '#F8FAFC'
  };

  const personalInfo = {
    name: "Wojciech Jakubiak",
    title: "Ekspert ds. Doskonalenia Procesów, AI & Project Manager",
    company: "P&P Consulting",
    email: "ppconsultingwj@gmail.com",
    phone: "+48 501 341 095",
    linkedin: "https://www.linkedin.com/in/wojciech-jakubiak-11835963/"
  };

  // Logotypy firm - PLIKI DO WGRANIA
  const trustedCompanies = [
    { name: "Trans.EU", logo: "logo_trans.png" },
    { name: "Smartlunch", logo: "logo_smartlunch.png" },
    { name: "HP", logo: "logo_hp.png" },
    { name: "LG Electronics", logo: "logo_lg.png" }
  ];

  // FAQ
  const faqItems = [
    {
      question: "Jak wygląda proces zakupu i płatności?",
      answer: "Działam w oparciu o tradycyjne przelewy, co pozwala na elastyczność i brak prowizji pośredników. Po wypełnieniu formularza zamówienia, otrzymasz ode mnie maila z danymi do przelewu (numer konta). Po zaksięgowaniu wpłaty, wysyłam zamówione materiały."
    },
    {
      question: "Czy otrzymam fakturę?",
      answer: "Tak. Prowadzę legalną działalność gospodarczą. Do każdego zamówienia wystawiam fakturę (dla firm) lub rachunek imienny (dla osób prywatnych). Dokument otrzymasz w formacie PDF na maila."
    },
    {
      question: "Czy muszę mieć firmę, żeby kupić narzędzia?",
      answer: "Nie. Oferta skierowana jest zarówno do firm (B2B), jak i osób prywatnych chcących podnieść swoje kompetencje. W przypadku osób prywatnych korzystam ze zwolnienia z kasy fiskalnej (płatność wyłącznie na konto)."
    },
    {
      question: "Jak szybko otrzymam dostęp do materiałów?",
      answer: "Materiały cyfrowe (szablony Miro, PDF) wysyłam zazwyczaj w ciągu 24 godzin od zaksięgowania wpłaty na koncie. W przypadku szkoleń online, termin ustalamy indywidualnie po opłaceniu zamówienia."
    }
  ];

  const trainings = [
    {
      id: 't1',
      type: 'training',
      title: "Lean Six Sigma - Od Teorii do Praktyki",
      description: "Poznaj narzędzia 8D, Diagram Ishikawy, 5 Why oraz FMEA. Naucz się eliminować marnotrawstwo i optymalizować koszty w Twojej firmie.",
      target: "Dla Firm Produkcyjnych i Usługowych",
      icon: <TrendingUp size={24} color={colors.green} />
    },
    {
      id: 't2',
      type: 'training',
      title: "Podstawy zarządzania projektami",
      description: "Solidne fundamenty dla Twojego zespołu. Jak skutecznie dowozić projekty, zarządzać ryzykiem i harmonogramem.",
      target: "Dla Zespołów i Kadry Menadżerskiej",
      icon: <Target size={24} color={colors.blue} />
    },
    {
      id: 't3',
      type: 'training',
      title: "Mapowanie i Optymalizacja Procesów z AI",
      description: "Analiza przepływu wartości (VSM) oraz wykorzystanie nowoczesnych narzędzi AI do automatyzacji i usprawniania procesów.",
      target: "Warsztat Wdrożeniowy",
      icon: <Cpu size={24} color={colors.green} />
    }
  ];

  const tools = [
    {
      id: 'p1',
      type: 'product',
      title: "Matryca RACI - Szablon Miro",
      price: "49 PLN netto",
      description: "Profesjonalny szablon do zarządzania odpowiedzialnością w zespole. Zawiera instrukcję jak definiować role (Responsible, Accountable, Consulted, Informed) i unikać konfliktów kompetencyjnych.",
      includes: "Szablon Miro + PDF z instrukcją",
      icon: <Layout size={32} color={colors.blue} />
    },
    {
      id: 'p2',
      type: 'product',
      title: "Mapa Procesu + Warsztat Wdrożeniowy",
      price: "599 PLN netto",
      description: "Kompletny pakiet startowy. Otrzymasz rozbudowany szablon mapowania procesów w Miro ORAZ 2-godzinne szkolenie online 1:1, podczas którego nauczę Cię jak poprawnie modelować przepływy i znajdować wąskie gardła.",
      includes: "Szablon Miro + 2h Konsultacji Online",
      icon: <Map size={32} color={colors.green} />
    },
    {
      id: 'p3',
      type: 'product',
      title: "SIPOC Masterclass + Szablon",
      price: "349 PLN netto",
      description: "SIPOC (Suppliers, Inputs, Process, Outputs, Customers) to klucz do zrozumienia biznesu 'z lotu ptaka'. Pakiet zawiera szablon oraz godzinne szkolenie, jak tworzyć dobre SIPOCi, które realnie pomagają w optymalizacji.",
      includes: "Szablon Miro + 1h Szkolenia Online",
      icon: <ClipboardList size={32} color={colors.blue} />
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Japanese lesson with Wojtek (Process-San-Shogun) 🙂",
      date: "20.12.2024",
      image: "shogun_wojtek.webp",
      excerpt: "Kaizen, Gemba, Muda, Muri... these are all Japanese words that recur in our posts. Let's start with the basics: San, Shogun, and today's hero: MUDA.",
      content: (
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p><strong>Kaizen, Gemba, Muda, Muri...</strong> these are all Japanese words that recur and will recur in our posts. Mainly because it was the Japanese who first recognised the importance of process management.</p>
          <p>We invite you to a Japanese lesson with Wojtek (Process-San-Shogun) 🙂</p>

          <h4 className="text-xl font-bold mt-6" style={{color: colors.blue}}>Let's start with the basics:</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>San (さん)</strong>, Mr. Miss. The most common Japanese suffix...</li>
            <li><strong>Shogun (将軍)</strong>, commander-in-chief. Colloquially: Someone wild, everywhere, knows everything...</li>
          </ul>

          <h4 className="text-xl font-bold mt-6" style={{color: colors.blue}}>And Today's hero… MUDA (無駄)</h4>
          <p>This is a Japanese word meaning "futility", "uselessness", or "wastefulness". Colloquially: Muda is simply a waste/loss. Something we do, whether in life or at work, and it does not bring value to our customers.</p>

          <h4 className="text-xl font-bold text-slate-900 mt-6">Let's focus on the 7 Wastes (Muda):</h4>

          <div className="grid gap-4 mt-4">
            <div className="bg-slate-50 p-4 rounded-lg border-l-4" style={{borderColor: colors.green}}>
              <h5 className="font-bold" style={{color: colors.green}}>1. Overproduction</h5>
              <p className="text-sm mt-1">Producing reports that no one reads.</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg border-l-4" style={{borderColor: colors.green}}>
              <h5 className="font-bold" style={{color: colors.green}}>2. Waiting</h5>
              <p className="text-sm mt-1">Waiting for approvals or signatures.</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-red-500">
              <h5 className="font-bold text-red-700">8. Unused potential</h5>
              <p className="text-sm mt-1">Not involving people to solve their problems.</p>
            </div>
          </div>

          <p className="mt-6 italic">That's all for today! If you go so far write in the comments how it's DELIVERY in Japanese?<br/>Regards, Process - SAN - Shogun Wojtek 🙂</p>
        </div>
      )
    },
    {
      id: 2,
      title: "Japanese lesson no.2 #Kaizen #5S",
      date: "22.12.2024",
      image: "shogun_wojtek_2.webp",
      excerpt: "Since it is spring cleaning time, today I would like to tell you about the 5S method. It originates directly from manufacturing but works great in offices too!",
      content: (
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>We are continuing our adventure with KAIZEN and since it is spring cleaning time, today I would like to tell you about the 5S method.</p>
          <p>The 5S methodology originates directly from manufacturing, where the need to maintain order and standardization is linked not only to productivity but actually also to safety. Business services are only slowly discovering how to use the 5S method and transfer it straight from production to office work.</p>

          <h4 className="text-xl font-bold mt-6 border-b pb-2" style={{color: colors.blue}}>The 5S System:</h4>

          <div className="space-y-6 mt-4">
            <div>
              <h5 className="text-lg font-bold" style={{color: colors.green}}>1. Sort (Seiri)</h5>
              <p>When in doubt, throw it out. Do you keep different versions of the same document? Think about the time wasted looking through files.</p>
            </div>
            <div>
              <h5 className="text-lg font-bold" style={{color: colors.green}}>2. Set in order (Seiton)</h5>
              <p>Arrange and organize things systematically. File shares, folder structures and naming conventions arranged in a logical fashion.</p>
            </div>
            <div>
              <h5 className="text-lg font-bold" style={{color: colors.green}}>3. Shine (Seiso)</h5>
              <p>Is the area clean and free of data clutter? Clutter leads to waste and storage costs money.</p>
            </div>
            <div>
              <h5 className="text-lg font-bold" style={{color: colors.green}}>4. Standardize (Seiketsu)</h5>
              <p>Creating guidelines and procedures. Develop database naming conventions, folder and file name standards.</p>
            </div>
            <div>
              <h5 className="text-lg font-bold" style={{color: colors.green}}>5. Sustain (Shitsuke)</h5>
              <p>Creating a culture of continuous improvement, where the previous four steps are consistently followed.</p>
            </div>
          </div>

          <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="font-bold text-red-800 mb-2">Please remember!</p>
            <p>5S is often misunderstood. Remember it's not just cleaning, it's a methodology. <br/>(See the photo of the desk below - that's how it SHOULDN'T look! 🙂)</p>
          </div>

          <div className="my-8 rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <div className="aspect-video bg-gray-200 flex items-center justify-center text-gray-500 flex-col">
              <img src="zdjecie_biurka.webp" alt="Bałagan na biurku:)" className="w-full h-full object-cover" />
            </div>
            <p className="text-center text-xs text-gray-500 p-2 italic">Don't try this at work! ;)</p>
          </div>

          <p className="mt-6 italic">Regards, Your Process-San-Shogun Wojtek 🙂</p>
        </div>
      )
    },
    {
      id: 3,
      title: "Kiedy potrzeba zmiany staje się kulturą firmy?",
      date: "10.12.2024",
      image: null,
      excerpt: "W Trans.eu budujemy świadomość, że doskonalenie to nie jednorazowy projekt, ale nawyk. Jak zaszczepić to w zespole?",
      content: (
        <div className="text-slate-700">
          <p>Treść artykułu o kulturze zmiany w organizacji...</p>
        </div>
      )
    }
  ];

  const submitToFormspree = async (event, setStatus) => {
    event.preventDefault();
    setStatus('submitting');
    
    const form = event.target;
    const data = new FormData(form);
    
    if (!FORMSPREE_ID || FORMSPREE_ID === 'TUTAJ_WKLEJ_SWOJ_KOD') {
      alert("Kod formularza nie został poprawnie skonfigurowany!");
      setStatus('error');
      return;
    }

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => {
          setStatus('idle');
          if (activeModal) setActiveModal(null);
        }, 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const getActiveItem = () => {
    return trainings.find(t => t.id === activeModal) || tools.find(t => t.id === activeModal);
  }

  const Navigation = () => (
    <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg" style={{background: `linear-gradient(135deg, ${colors.blue}, ${colors.green})`}}>
                P&P
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight leading-none" style={{color: colors.textMain}}>
                  P&P <span style={{color: colors.blue}}>Consulting</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mt-0.5">Process & Project Management</span>
              </div>
            </div>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            {['O mnie', 'Oferta', 'Narzędzia', 'Wiedza', 'Kontakt'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-slate-500 hover:text-slate-900 px-3 py-2 rounded-md text-sm font-semibold transition-colors hover:bg-slate-50"
              >
                {item}
              </a>
            ))}
            <a
              href="#oferta"
              className="text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              style={{background: `linear-gradient(90deg, ${colors.blue}, ${colors.green})`}}
            >
              Współpraca
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 focus:outline-none p-2"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {['O mnie', 'Oferta', 'Narzędzia', 'Wiedza', 'Kontakt'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="block px-4 py-3 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );

  return (
    <div className="min-h-screen font-sans text-slate-800" style={{backgroundColor: colors.bgLight}}>
      <Navigation />

      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-3xl opacity-10 -translate-y-1/2 translate-x-1/3" style={{backgroundColor: colors.blue}}></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-10 translate-y-1/2 -translate-x-1/4" style={{backgroundColor: colors.green}}></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full border mb-8 backdrop-blur-sm shadow-sm bg-white" style={{borderColor: colors.green}}>
            <Brain size={16} className="mr-2" style={{color: colors.green}} />
            <span className="text-xs md:text-sm font-bold tracking-wide uppercase" style={{color: colors.textMain}}>AI Driven Process Management</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-slate-900">
            Optymalizacja Procesów <br className="hidden md:block" />
            W Erze <span className="text-transparent bg-clip-text" style={{backgroundImage: `linear-gradient(90deg, ${colors.blue}, ${colors.green})`}}>Sztucznej Inteligencji</span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-slate-600 leading-relaxed font-light">
            Pomagam firmom wdrażać usprawnienia procesowe wykorzystując Lean Six Sigma oraz narzędzia AI.
            Skuteczne zarządzanie projektami i innowacje to moja specjalność.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">
            <a
              href="#oferta"
              className="px-8 py-4 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center"
              style={{background: colors.blue}}
            >
              Oferta dla firm <ChevronRight size={20} className="ml-2" />
            </a>
            <a href="#narzędzia" className="px-8 py-4 bg-white border text-slate-600 font-bold rounded-xl hover:bg-slate-50 transition-all flex items-center justify-center shadow-sm">
              Narzędzia i Szablony
            </a>
          </div>
        </div>
      </section>

      <section id="o-mnie" className="py-24 bg-white relative border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 gap-16 items-start">

            <div className="lg:col-span-5 mb-12 lg:mb-0 relative group">
              <div className="relative rounded-2xl bg-slate-50 aspect-[4/5] w-full flex items-center justify-center overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-100">
                <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100 text-gray-400">
                  <img src="wlasciciel_p&p_consulting.png" alt="Wojciech Jakubiak" className="w-full h-full object-cover" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white backdrop-blur-md" style={{backgroundColor: 'rgba(51, 65, 85, 0.9)'}}>
                  <p className="font-bold text-xl">{personalInfo.name}</p>
                  <p className="text-sm opacity-80">{personalInfo.title}</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <span className="font-bold tracking-widest text-xs uppercase mb-3 block" style={{color: colors.blue}}>O Mnie</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Łączę 15 lat doświadczenia z innowacjami AI.
              </h2>

              <div className="prose prose-lg text-slate-600 mb-10 leading-relaxed">
                <p>
                  Jestem ekspertem w dziedzinie doskonalenia procesów i zarządzania projektami.
                  Moje doświadczenie zdobyte w <strong>Trans.eu</strong> (Center of Process Excellence) oraz <strong>HP</strong> łączę z najnowszą wiedzą o sztucznej inteligencji.
                </p>
                <p>
                  Specjalizuję się w wyszukiwaniu i wdrażaniu usprawnień procesowych z wykorzystaniem narzędzi AI.
                  Wierzę, że technologia powinna służyć ludziom, eliminując "Mudę" i uwalniając kreatywny potencjał zespołów.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="p-5 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all">
                  <h3 className="font-bold text-slate-800 mb-3 flex items-center">
                    <Brain size={20} className="mr-2" style={{color: colors.blue}} />
                    Kompetencje AI & Innovation
                  </h3>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start">
                      <CheckCircle size={16} className="mt-1 mr-2 flex-shrink-0" style={{color: colors.green}} />
                      <span><strong>AI Managers (SGH & eduweb):</strong> Certyfikowany program "AI Driven Manager". Projektowanie rozwiązań AI, analiza danych, zarządzanie zespołem AI.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="mt-1 mr-2 flex-shrink-0" style={{color: colors.green}} />
                      <span><strong>Umiejętności Jutra (Google & SGH):</strong> "Using AI in Business Development". Wykorzystanie AI w rozwoju biznesu.</span>
                    </li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <Award className="mt-1 mr-3 flex-shrink-0" size={24} style={{color: colors.blue}} />
                    <div>
                      <h4 className="font-bold text-slate-900">Certified Black Belt</h4>
                      <p className="text-sm text-slate-500">Lean Six Sigma</p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <Target className="mt-1 mr-3 flex-shrink-0" size={24} style={{color: colors.blue}} />
                    <div>
                      <h4 className="font-bold text-slate-900">Certified PMP®</h4>
                      <p className="text-sm text-slate-500">Project Management Professional</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OFERTA SZKOLENIOWA */}
      <section id="oferta" className="py-24 bg-slate-50 relative border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-bold tracking-widest text-xs uppercase mb-3 block" style={{color: colors.green}}>Współpraca B2B</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Szkolenia dla Twojej Firmy</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Prowadzę zamknięte szkolenia i warsztaty dopasowane do specyfiki Twojej organizacji.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {trainings.map((training) => (
              <div key={training.id} className="bg-white rounded-2xl shadow-xl shadow-slate-200/40 overflow-hidden hover:-translate-y-2 transition-transform duration-300 flex flex-col border border-slate-100 group">
                <div className="h-2" style={{background: `linear-gradient(90deg, ${colors.blue}, ${colors.green})`}}></div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="mb-6">
                    {training.icon}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{training.title}</h3>
                  <p className="text-slate-600 mb-4 flex-1 text-sm leading-relaxed">{training.description}</p>

                  <div className="pt-6 border-t border-slate-100 mt-auto">
                    <p className="text-xs font-bold uppercase tracking-wide mb-4 text-slate-400">{training.target}</p>
                    <button
                      onClick={() => setActiveModal(training.id)}
                      className="w-full py-3 rounded-xl text-white font-bold text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center"
                      style={{backgroundColor: colors.textMain}}
                    >
                      Zapytaj o ten temat <Mail size={16} className="ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOWA SEKCJA: NARZĘDZIA (SKLEP) */}
      <section id="narzędzia" className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-bold tracking-widest text-xs uppercase mb-3 block" style={{color: colors.blue}}>Sklep z Narzędziami</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Gotowe szablony i warsztaty</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Przyspiesz pracę swojego zespołu korzystając ze sprawdzonych szablonów w Miro oraz dedykowanych instruktaży.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {tools.map((tool) => (
              <div key={tool.id} className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-blue-300 transition-all flex flex-col relative overflow-hidden group">
                <div className="mb-6 bg-white w-16 h-16 rounded-xl flex items-center justify-center shadow-sm">
                  {tool.icon}
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-2">{tool.title}</h3>
                <div className="text-2xl font-bold mb-4" style={{color: colors.green}}>{tool.price}</div>
                
                <p className="text-slate-600 text-sm mb-6 flex-1 leading-relaxed">
                  {tool.description}
                </p>

                <div className="bg-white rounded-lg p-3 mb-6 text-xs font-semibold text-slate-500 border border-slate-100">
                   📦 Zawiera: {tool.includes}
                </div>

                <button
                  onClick={() => setActiveModal(tool.id)}
                  className="w-full py-3 rounded-xl font-bold text-sm transition-all shadow-sm hover:shadow-md flex items-center justify-center border-2"
                  style={{borderColor: colors.blue, color: colors.blue}}
                >
                  Zamów teraz <ShoppingCart size={16} className="ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEKCJA ZAUFALI MI - Z LOGOTYPAMI OBRAZKOWYMI */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="font-bold tracking-widest text-xs uppercase mb-3 block" style={{color: colors.green}}>Doświadczenie</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Zaufało mi</h2>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-70 hover:opacity-100 transition-all duration-500">
             {trustedCompanies.map((company, index) => (
               <div key={index} className="flex items-center justify-center h-16 w-32 md:w-40 grayscale hover:grayscale-0 transition-all duration-300">
                  <img 
                    src={company.logo} 
                    alt={`Logo ${company.name}`} 
                    className="max-h-full max-w-full object-contain"
                    onError={(e) => {
                      e.target.style.display='none'; 
                      e.target.nextSibling.style.display='block';
                    }} 
                  />
                  {/* Fallback tekstowy (pokazuje się, gdy brakuje pliku) */}
                  <span className="hidden text-xl font-bold text-slate-400">{company.name}</span>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-bold tracking-widest text-xs uppercase mb-3 block" style={{color: colors.blue}}>FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Najczęściej zadawane pytania</h2>
          </div>

          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-blue-100 transition-colors">
                <div className="flex items-start">
                  <HelpCircle className="w-6 h-6 mr-4 mt-1 flex-shrink-0" style={{color: colors.blue}} />
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{item.question}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="wiedza" className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <span className="font-bold tracking-widest text-xs uppercase mb-3 block" style={{color: colors.blue}}>Blog & Publikacje</span>
              <h2 className="text-3xl font-bold text-slate-900">Dzielę się wiedzą</h2>
            </div>
            <a href="#" className="hidden md:flex items-center font-bold hover:underline transition-colors text-sm" style={{color: colors.blue}}>
              Zobacz wszystkie wpisy <ArrowRight size={16} className="ml-2" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {blogPosts.map((post) => (
              <article key={post.id} className="group cursor-pointer flex flex-col h-full" onClick={() => setActivePost(post)}>
                <div className="aspect-[16/10] bg-slate-100 rounded-2xl mb-6 overflow-hidden relative shadow-sm border border-slate-100">
                  <div className="absolute inset-0 flex items-center justify-center text-slate-300 bg-slate-50">
                    {post.image ? (
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                    ) : (
                      <BookOpen size={48} strokeWidth={1} />
                    )}
                  </div>
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-300 flex items-center justify-center">
                    <span className="bg-white text-slate-900 px-4 py-2 rounded-full font-bold text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                      Czytaj dalej
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-xs font-bold text-slate-400 mb-3 uppercase tracking-wider">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span style={{color: colors.green}}>Wiedza</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                  {post.excerpt}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="kontakt" className="py-24 text-white" style={{backgroundColor: colors.textMain}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Porozmawiajmy o Twoim biznesie</h2>
              <p className="text-slate-300 mb-10 text-lg leading-relaxed">
                Szukasz wsparcia w optymalizacji procesów lub wdrożeniu AI?
                Skontaktuj się ze mną bezpośrednio.
              </p>

              <div className="space-y-8">
                <div className="flex items-start space-x-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0 shadow-lg" style={{backgroundColor: colors.blue}}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1 uppercase tracking-wider font-bold">Email</p>
                    <a href={`mailto:${personalInfo.email}`} className="text-xl font-semibold hover:text-blue-300 transition-colors">{personalInfo.email}</a>
                  </div>
                </div>

                <div className="flex items-start space-x-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0 shadow-lg" style={{backgroundColor: colors.blue}}>
                    <Linkedin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1 uppercase tracking-wider font-bold">LinkedIn</p>
                    <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-xl font-semibold hover:text-blue-300 transition-colors">
                      Połącz się ze mną
                    </a>
                  </div>
                </div>
                
                 <div className="flex items-start space-x-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0 shadow-lg" style={{backgroundColor: colors.blue}}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1 uppercase tracking-wider font-bold">Telefon</p>
                     <p className="text-xl font-semibold hover:text-blue-300 transition-colors">{personalInfo.phone}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 text-slate-800 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-slate-900">Formularz kontaktowy</h3>

              {contactFormStatus === 'success' ? (
                <div className="bg-green-50 p-6 rounded-xl border border-green-200 text-center animate-in fade-in zoom-in">
                  <CheckCircle className="mx-auto text-green-500 mb-4" size={48} />
                  <h4 className="text-xl font-bold text-green-800 mb-2">Wiadomość wysłana!</h4>
                  <p className="text-green-700">Dziękuję za kontakt. Odpiszę najszybciej jak to możliwe.</p>
                </div>
              ) : (
                <form onSubmit={(e) => submitToFormspree(e, setContactFormStatus)} className="space-y-5">
                  {/* Ukryte pole tematu dla Formspree */}
                  <input type="hidden" name="_subject" value="Nowa wiadomość ze strony P&P Consulting" />

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Imię i nazwisko</label>
                    <input name="name" required type="text" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:border-blue-500 focus:bg-white transition-all" placeholder="Np. Jan Kowalski" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                    <input name="email" required type="email" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:border-blue-500 focus:bg-white transition-all" placeholder="jan@firma.pl" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Wiadomość</label>
                    <textarea name="message" required rows="4" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:border-blue-500 focus:bg-white transition-all" placeholder="Dzień dobry..."></textarea>
                  </div>
                  <button
                    disabled={contactFormStatus === 'submitting'}
                    className="w-full text-white font-bold py-4 rounded-xl transition-all flex justify-center items-center shadow-lg hover:shadow-xl hover:transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed"
                    style={{background: `linear-gradient(90deg, ${colors.blue}, ${colors.green})`}}
                  >
                    {contactFormStatus === 'submitting' ? 'Wysyłanie...' : 'Wyślij wiadomość'}
                  </button>
                  {contactFormStatus === 'error' && <p className="text-red-500 text-sm text-center">Wystąpił błąd. Spróbuj ponownie lub napisz maila bezpośrednio.</p>}
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* STOPKA (FOOTER) */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
              <h3 className="text-white font-bold text-xl mb-4">P&P Consulting</h3>
              <p className="text-sm leading-relaxed max-w-sm">
                Pomagam firmom i managerom odzyskać kontrolę nad procesami.
                Lean Six Sigma, AI i skuteczne zarządzanie projektami w jednym miejscu.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Nawigacja</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#o-mnie" className="hover:text-blue-400 transition-colors">O mnie</a></li>
                <li><a href="#oferta" className="hover:text-blue-400 transition-colors">Oferta B2B</a></li>
                <li><a href="#narzędzia" className="hover:text-blue-400 transition-colors">Narzędzia</a></li>
                <li><a href="#wiedza" className="hover:text-blue-400 transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Polityka Prywatności</a></li>
                <li>
                  <button onClick={() => setShowLegal(true)} className="hover:text-blue-400 transition-colors text-left">
                    Regulamin Sklepu
                  </button>
                </li>
                <li><a href="#kontakt" className="hover:text-blue-400 transition-colors">Kontakt</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
            <p>© 2025 {personalInfo.company}. Wszelkie prawa zastrzeżone.</p>
            <p className="mt-2 md:mt-0 opacity-50">Designed for Leaders</p>
          </div>
        </div>
      </footer>

      {/* UNIWERSALNY MODAL (Szkolenia i Produkty) */}
      {activeModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4 bg-slate-900/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative border-t-4" style={{borderColor: colors.blue}}>
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors bg-slate-100 rounded-full p-1"
            >
              <X size={20} />
            </button>

            {modalFormStatus === 'success' ? (
              <div className="text-center py-8 animate-in zoom-in duration-300">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={40} style={{color: colors.green}} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Dziękuję!</h3>
                <p className="text-slate-600">Twoje zgłoszenie zostało przyjęte. Otrzymasz szczegóły na maila.</p>
              </div>
            ) : (
              <>
                {/* Dynamiczny nagłówek w zależności od typu (szkolenie vs produkt) */}
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  {getActiveItem()?.type === 'product' ? 'Zamówienie narzędzia' : 'Zapytaj o szkolenie'}
                </h3>
                
                <p className="text-sm font-bold mb-6 uppercase tracking-wide" style={{color: colors.blue}}>
                  {getActiveItem()?.title}
                </p>

                <p className="text-slate-600 mb-6 text-sm">
                   {getActiveItem()?.type === 'product' 
                     ? "Zostaw swój email. Prześlę Ci fakturę proforma, a po opłaceniu otrzymasz dostęp do materiałów."
                     : "Jesteś zainteresowany tym tematem dla swojej firmy? Zostaw kontakt, porozmawiajmy o szczegółach."
                   }
                </p>

                <form onSubmit={(e) => submitToFormspree(e, setModalFormStatus)} className="space-y-4">
                  <input 
                    type="hidden" 
                    name="_subject" 
                    value={`Nowe zgłoszenie: ${getActiveItem()?.title} (${getActiveItem()?.type === 'product' ? 'ZAKUP' : 'ZAPYTANIE'})`} 
                  />

                  <div>
                    <input name="email" required placeholder="Twój adres Email" type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 outline-none transition-all" />
                  </div>
                   <div>
                    <input name="phone" placeholder="Telefon (opcjonalnie)" type="tel" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 outline-none transition-all" />
                  </div>
                  <button
                    disabled={modalFormStatus === 'submitting'}
                    type="submit"
                    className="w-full text-white font-bold py-3 rounded-xl transition-all mt-2 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                    style={{backgroundColor: getActiveItem()?.type === 'product' ? colors.blue : colors.green}}
                  >
                    {modalFormStatus === 'submitting' ? 'Przetwarzanie...' : (getActiveItem()?.type === 'product' ? 'Zamawiam z obowiązkiem zapłaty' : 'Wyślij zapytanie')}
                  </button>
                  {modalFormStatus === 'error' && <p className="text-red-500 text-sm text-center">Błąd wysyłania. Spróbuj ponownie.</p>}
                </form>
              </>
            )}
          </div>
        </div>
      )}

      {/* MODAL REGULAMINU */}
      {showLegal && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center px-4 bg-slate-900/90 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full flex flex-col max-h-[85vh]">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <FileText size={20} className="text-blue-600" /> Regulamin Sklepu
              </h3>
              <button 
                onClick={() => setShowLegal(false)}
                className="text-slate-400 hover:text-slate-600 transition-colors bg-slate-100 rounded-full p-1"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-8 overflow-y-auto prose prose-slate prose-sm text-slate-600">
              <h4>1. Postanowienia ogólne</h4>
              <p>Niniejszy regulamin określa zasady korzystania ze sklepu internetowego P&P Consulting, dostępnego pod adresem strony internetowej. Właścicielem jest P&P Consulting Wojciech Jakubiak.</p>
              
              <h4>2. Definicje</h4>
              <p><strong>Klient</strong> – osoba fizyczna, osoba prawna lub jednostka organizacyjna składająca Zamówienie.<br/><strong>Produkt</strong> – dostępna w ofercie usługa cyfrowa lub materiał edukacyjny (np. szablon, szkolenie).</p>
              
              <h4>3. Składanie zamówień</h4>
              <p>Zamówienia przyjmowane są poprzez formularz kontaktowy na stronie. Po złożeniu zamówienia Klient otrzymuje e-mail zwrotny z danymi do płatności (przelew tradycyjny).</p>
              
              <h4>4. Płatności i Dostawa</h4>
              <p>Realizacja zamówienia następuje po zaksięgowaniu wpłaty na koncie bankowym Sprzedawcy. Materiały cyfrowe wysyłane są drogą elektroniczną na adres e-mail podany w zamówieniu, zazwyczaj w ciągu 24h roboczych.</p>
              
              <h4>5. Reklamacje i odstąpienie od umowy</h4>
              <p>W przypadku produktów cyfrowych, które nie są zapisane na nośniku materialnym, prawo odstąpienia od umowy nie przysługuje w momencie, gdy spełnianie świadczenia rozpoczęło się za wyraźną zgodą konsumenta przed upływem terminu do odstąpienia od umowy.</p>
              
              <h4>6. Ochrona danych osobowych</h4>
              <p>Administratorem danych osobowych jest P&P Consulting. Dane przetwarzane są wyłącznie w celu realizacji zamówienia i nie są udostępniane podmiotom trzecim bez zgody Klienta.</p>
            </div>

            <div className="p-6 border-t border-slate-100 bg-slate-50 rounded-b-2xl text-center">
              <button 
                onClick={() => setShowLegal(false)}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors"
              >
                Rozumiem i akceptuję
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL BLOGA */}
      {activePost && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center px-4 bg-slate-900/90 backdrop-blur-md p-4 animate-in fade-in duration-300 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full relative my-8 flex flex-col max-h-[90vh]">
            <div className="sticky top-0 bg-white/95 backdrop-blur-sm z-10 px-6 py-4 border-b border-slate-100 flex justify-between items-center rounded-t-2xl">
              <span className="text-xs font-bold uppercase tracking-widest" style={{color: colors.blue}}>Blog P&P Consulting</span>
              <button
                onClick={() => setActivePost(null)}
                className="text-slate-400 hover:text-slate-800 transition-colors p-2 hover:bg-slate-100 rounded-full"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-8 overflow-y-auto">
              <div className="mb-6">
                <span className="text-slate-400 text-sm font-semibold">{activePost.date}</span>
                <h2 className="text-3xl font-bold text-slate-900 mt-2 mb-6">{activePost.title}</h2>
                <div className="w-full aspect-video bg-slate-100 rounded-xl mb-8 flex items-center justify-center text-slate-400 flex-col overflow-hidden">
                  {activePost.image ? (
                    <img src={activePost.image} alt="Cover" className="w-full h-full object-cover" />
                  ) : (
                    <BookOpen size={48} strokeWidth={1} />
                  )}
                </div>
              </div>

              <div className="prose prose-lg prose-slate max-w-none">
                {activePost.content}
              </div>
            </div>

            <div className="p-6 border-t border-slate-100 bg-slate-50 rounded-b-2xl text-center">
              <button
                onClick={() => setActivePost(null)}
                className="font-bold hover:opacity-80 text-sm uppercase tracking-wider"
                style={{color: colors.blue}}
              >
                Zamknij artykuł
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default App;
