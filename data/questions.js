// ============================================================
//  BLOCKIVIA — PREGUNTAS DE LA ENCUESTA
//  Edita este archivo para modificar preguntas y opciones.
//  No toques los demás archivos a menos que sea necesario.
// ============================================================

const SURVEY_SECTIONS = [
  {
    id: "seguridad",
    title: "Seguridad Digital",
    emoji: "🛡️",
    description: "Exploramos tu experiencia con riesgos en el mundo digital.",
    questions: [
      {
        id: "q1",
        text: "¿Alguna vez te han estafado o han intentado estafarte?",
        type: "single",
        options: [
          { id: "a", text: "Sí, me han estafado", score: { riesgo: 3 } },
          { id: "b", text: "No, pero lo han intentado", score: { riesgo: 2 } },
          { id: "c", text: "No, nunca", score: { riesgo: 0 } }
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
      }
    ]
  },
  {
    id: "cripto",
    title: "Cripto & Blockchain",
    emoji: "₿",
    description: "Veamos qué tan familiarizado estás con el mundo de las criptomonedas.",
    questions: [
      {
        id: "q3",
        text: "¿Tienes cuenta en alguna casa de cambios (exchange) como Binance, Bybit o Coinbase?",
        type: "single",
        options: [
          { id: "a", text: "Sí", score: { cripto: 2 } },
          { id: "b", text: "No", score: { cripto: 0 } },
          { id: "c", text: "Tengo varias", score: { cripto: 3 } }
        ]
      },
      {
        id: "q4",
        text: "¿Usas aplicaciones como Meru, Takenos o similares para pagar servicios del exterior?",
        type: "single",
        options: [
          { id: "a", text: "Sí", score: { cripto: 2 } },
          { id: "b", text: "No", score: { cripto: 0 } },
          { id: "c", text: "Uso tarjeta de débito", score: { cripto: 1 } },
          { id: "d", text: "Uso tarjeta de crédito", score: { cripto: 1 } },
          { id: "e", text: "No pago servicios del exterior", score: { cripto: 0 } }
        ]
      },
      {
        id: "q5",
        text: "¿Alguna vez has comprado USDT o USDC?",
        type: "single",
        options: [
          { id: "a", text: "Sí", score: { cripto: 3 } },
          { id: "b", text: "No", score: { cripto: 0 } },
          { id: "c", text: "No sé qué es USDT o USDC", score: { cripto: -1 } }
        ]
      },
      {
        id: "q6",
        text: "¿Alguna vez has comprado criptomonedas?",
        type: "single",
        options: [
          { id: "a", text: "Sí", score: { cripto: 3 } },
          { id: "b", text: "No", score: { cripto: 0 } }
        ]
      },
      {
        id: "q7",
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
    description: "Exploramos tu relación con el desarrollo y la inteligencia artificial.",
    questions: [
      {
        id: "q8",
        text: "¿Sabes desarrollar aplicaciones o \"programar\"?",
        type: "single",
        options: [
          { id: "a", text: "Sí", score: { tech: 3 } },
          { id: "b", text: "No", score: { tech: 0 } },
          { id: "c", text: "Uso No-Code", score: { tech: 2 } }
        ]
      },
      {
        id: "q9",
        text: "¿Alguna vez has creado una aplicación o sitio web?",
        type: "single",
        options: [
          { id: "a", text: "Sí", score: { tech: 3 } },
          { id: "b", text: "No", score: { tech: 0 } }
        ]
      },
      {
        id: "q10",
        text: "¿Tienes alguna idea para una aplicación?",
        type: "single",
        options: [
          { id: "a", text: "Sí", score: { tech: 2 } },
          { id: "b", text: "No", score: { tech: 0 } }
        ]
      },
      {
        id: "q11",
        text: "¿Usas IA para crear aplicaciones?",
        type: "single",
        options: [
          { id: "a", text: "Sí", score: { tech: 3 } },
          { id: "b", text: "No", score: { tech: 0 } },
          { id: "c", text: "Me gustaría pero no sé cómo empezar", score: { tech: 1 } }
        ]
      },
      {
        id: "q12",
        text: "¿Sabes algo sobre computación cuántica?",
        type: "single",
        options: [
          { id: "a", text: "Sí", score: { tech: 3 } },
          { id: "b", text: "No", score: { tech: 0 } },
          { id: "c", text: "Solo escuché una noticia", score: { tech: 1 } }
        ]
      }
    ]
  }
];

// ============================================================
//  PERFILES FINALES
//  Basados en la combinación de puntuaciones por categoría.
// ============================================================

const PROFILES = [
  {
    id: "pionero",
    title: "Pionero Tech 🚀",
    description: "Ya estás en el futuro. Usas tecnología avanzada, conoces cripto y sabes protegerte. Eres exactamente el tipo de persona que puede inspirar a otros.",
    color: "#00f5c4",
    condition: (s) => s.tech >= 6 && s.cripto >= 4
  },
  {
    id: "guardian",
    title: "Guardián Digital 🛡️",
    description: "Conoces los riesgos y sabes moverte con cuidado en el mundo digital. Tu experiencia es valiosa para proteger a quienes te rodean.",
    color: "#00b4f5",
    condition: (s) => s.riesgo >= 2 && s.cripto >= 2
  },
  {
    id: "explorador",
    title: "Explorador Curioso 🌱",
    description: "Tienes curiosidad y estás despertando al mundo tech. Con los recursos correctos, puedes ir mucho más lejos de lo que imaginas.",
    color: "#f5c400",
    condition: (s) => s.tech >= 2 || s.cripto >= 1
  },
  {
    id: "navegante",
    title: "Navegante en Formación 🧭",
    description: "Usas tecnología en tu día a día, pero hay un mundo por descubrir. Este taller está hecho para ti.",
    color: "#f55400",
    condition: () => true // fallback
  }
];
