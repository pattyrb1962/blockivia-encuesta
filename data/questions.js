// ============================================================
//  BLOCKIVIA — PREGUNTAS DE LA ENCUESTA v2
//  Edita este archivo para modificar preguntas y opciones.
// ============================================================

const SURVEY_SECTIONS = [
  {
    id: "seguridad",
    title: "Seguridad Digital",
    emoji: "🛡️",
    description: "Exploramos tu experiencia con riesgos y hábitos de seguridad en el mundo digital.",
    questions: [
      {
        id: "q1",
        text: "¿Alguna vez te han estafado o han intentado estafarte?",
        type: "single",
        options: [
          { id: "a", text: "Sí, me han estafado",        score: { riesgo: 3 } },
          { id: "b", text: "No, pero lo han intentado",  score: { riesgo: 2 } },
          { id: "c", text: "No, nunca",                  score: { riesgo: 0 } }
        ]
      },
      {
        id: "q2",
        text: "¿Conoces a alguien (familiar, amigos, etc.) que haya sido estafado?",
        type: "single",
        options: [
          { id: "a", text: "Sí", score: { riesgo: 2 } },
          { id: "b", text: "No", score: { riesgo: 0 } }
        ]
      },
      {
        id: "q3",
        text: "¿Sabes qué son Phishing, Qhishing y Vishing?",
        type: "single",
        options: [
          { id: "a", text: "Sí", score: { seguridad: 3 } },
          { id: "b", text: "No", score: { seguridad: 0 } }
        ]
      },
      {
        id: "q4",
        text: "¿Utilizas autenticación de dos factores (2FA) en tus aplicaciones?",
        type: "single",
        options: [
          { id: "a", text: "En todas",   score: { seguridad: 3 } },
          { id: "b", text: "En algunas", score: { seguridad: 1 } },
          { id: "c", text: "En ninguna", score: { seguridad: 0 } }
        ]
      },
      {
        id: "q5",
        text: "¿Usas aplicaciones como Telegram, Discord o Reddit?",
        type: "single",
        options: [
          { id: "a", text: "Sí", score: { seguridad: 1 } },
          { id: "b", text: "No", score: { seguridad: 0 } }
        ]
      }
    ]
  },
  {
    id: "cripto",
    title: "Cripto & Blockchain",
    emoji: "₿",
    description: "Veamos qué tan familiarizado/a estás con el mundo de las criptomonedas y el blockchain.",
    questions: [
      {
        id: "q6",
        text: "¿Tienes cuenta en alguna casa de cambios (exchange) como Binance, Bybit o Coinbase?",
        type: "single",
        options: [
          { id: "a", text: "Sí",          score: { cripto: 2 } },
          { id: "b", text: "No",          score: { cripto: 0 } },
          { id: "c", text: "Tengo varias", score: { cripto: 3 } }
        ]
      },
      {
        id: "q7",
        text: "¿Usas aplicaciones como Meru, Takenos o similares para pagar servicios del exterior?",
        type: "single",
        options: [
          { id: "a", text: "Sí",                          score: { cripto: 2 } },
          { id: "b", text: "No",                          score: { cripto: 0 } },
          { id: "c", text: "Uso tarjeta de débito",       score: { cripto: 1 } },
          { id: "d", text: "Uso tarjeta de crédito",      score: { cripto: 1 } },
          { id: "e", text: "No pago servicios del exterior", score: { cripto: 0 } }
        ]
      },
      {
        id: "q8",
        text: "¿Alguna vez has comprado USDT o USDC?",
        type: "single",
        options: [
          { id: "a", text: "Sí",                      score: { cripto: 3 } },
          { id: "b", text: "No",                      score: { cripto: 0 } },
          { id: "c", text: "No sé qué es USDT o USDC", score: { cripto: -1 } }
        ]
      },
      {
        id: "q9",
        text: "¿Alguna vez has comprado criptomonedas?",
        type: "single",
        options: [
          { id: "a", text: "Sí", score: { cripto: 3 } },
          { id: "b", text: "No", score: { cripto: 0 } }
        ]
      },
      {
        id: "q10",
        text: "Escribe lo primero que piensas cuando escuchas la palabra Bitcoin.",
        type: "text",
        placeholder: "Escribe aquí tu respuesta... (máximo 50 palabras)",
        maxWords: 50,
        score: {}
      }
    ]
  },
  {
    id: "tech",
    title: "Tecnología & IA",
    emoji: "🤖",
    description: "Exploramos tu relación con el desarrollo de software y la inteligencia artificial.",
    questions: [
      {
        id: "q11",
        text: "¿Sabes desarrollar aplicaciones o programar?",
        type: "single",
        options: [
          { id: "a", text: "Sí",         score: { tech: 3 } },
          { id: "b", text: "No",         score: { tech: 0 } },
          { id: "c", text: "Uso No-Code", score: { tech: 2 } }
        ]
      },
      {
        id: "q12",
        text: "¿Alguna vez has creado una aplicación o sitio web?",
        type: "single",
        options: [
          { id: "a", text: "Sí", score: { tech: 3 } },
          { id: "b", text: "No", score: { tech: 0 } }
        ]
      },
      {
        id: "q13",
        text: "¿Tienes alguna idea para una aplicación?",
        type: "single",
        options: [
          { id: "a", text: "Sí", score: { tech: 2 } },
          { id: "b", text: "No", score: { tech: 0 } }
        ]
      },
      {
        id: "q14",
        text: "¿Usas IA para crear aplicaciones?",
        type: "single",
        options: [
          { id: "a", text: "Sí",                                       score: { tech: 3 } },
          { id: "b", text: "No",                                       score: { tech: 0 } },
          { id: "c", text: "Me gustaría pero no sé cómo empezar",      score: { tech: 1 } }
        ]
      },
      {
        id: "q15",
        text: "¿Sabes algo sobre computación cuántica?",
        type: "single",
        options: [
          { id: "a", text: "Sí",                       score: { tech: 3 } },
          { id: "b", text: "No",                       score: { tech: 0 } },
          { id: "c", text: "Solo escuché una noticia", score: { tech: 1 } }
        ]
      }
    ]
  }
];

// ============================================================
//  PERFILES FINALES — tono conservador e intrigante
//  Para llegar a Pionero hay que tener puntajes muy altos.
// ============================================================
const PROFILES = [
  {
    id: "pionero",
    title: "Pionero Tech 🚀",
    description: "Estás claramente por delante de la mayoría. Usas herramientas avanzadas, entiendes el ecosistema cripto y tienes buenos hábitos de seguridad. Aun así, el mundo digital evoluciona tan rápido que siempre hay algo nuevo que aprender.",
    color: "#00f5c4",
    condition: (s) => s.tech >= 9 && s.cripto >= 6 && s.seguridad >= 4
  },
  {
    id: "guardian",
    title: "Guardián Curioso 🛡️",
    description: "Tienes algunas herramientas y conoces parte de los riesgos, pero hay zonas grises importantes. ¿Sabes exactamente cómo te pueden atacar hoy? Hay cosas que quizás no sabes que no sabes.",
    color: "#00b4f5",
    condition: (s) => (s.seguridad >= 3 || s.cripto >= 4) && s.tech >= 3
  },
  {
    id: "explorador",
    title: "Explorador Digital 🌱",
    description: "Usas tecnología en tu día a día, pero tu conocimiento sobre seguridad y blockchain es todavía básico. Eso no es un problema — es una oportunidad. El mundo digital tiene mucho más para ofrecerte.",
    color: "#f5c400",
    condition: (s) => s.tech >= 2 || s.cripto >= 2 || s.seguridad >= 1
  },
  {
    id: "navegante",
    title: "Navegante en Formación 🧭",
    description: "Estás dando tus primeros pasos en el mundo digital. La buena noticia: no estás solo/a. Este taller fue diseñado exactamente para personas como tú que quieren entender este nuevo mundo sin perderse en el camino.",
    color: "#f55400",
    condition: () => true
  }
];
