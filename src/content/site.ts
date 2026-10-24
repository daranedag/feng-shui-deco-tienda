export const consultant = {
  name: "Paulina Valencia Pérez",
  shortName: "Paulina Valencia",
  email: "fengshuipranicochile@gmail.com",
  phone: "+56 9 9090 9209",
  whatsapp: "56990909209",
  qualifications: [
    "Constructora civil",
    "Diplomada en Feng Shui Hemisferio Sur · Escuela Chilena de Feng Shui",
    "Diplomada en Sanación Pránica y Feng Shui Pránico · Pranic Healing",
  ],
};

export const services = [
  {
    id: "basal",
    number: "01",
    title: "Armonización del hogar",
    subtitle: "Asesoría basal de Feng Shui",
    description: "Una mirada integral a tu hogar, sus habitantes y el entorno. El punto de partida para habitar con más intención.",
    detail: "A partir del Bagua Houtian, recorremos las ocho aspiraciones del hogar y observamos formas, colores, materiales y posibles bloqueos. La asesoría incluye la lectura del Ming Gua personal, recomendaciones, talismanes y una ceremonia de cierre.",
    timing: "El primer paso para tu hogar",
    featured: true,
  },
  {
    id: "renovacion-anual",
    number: "02",
    title: "Un nuevo ciclo",
    subtitle: "Cambio de año energético",
    description: "Acompaña las nuevas etapas con una revisión del entorno y la renovación de los talismanes de tu hogar.",
    detail: "Una revisión anual para dar continuidad a la armonización del hogar y actualizar los talismanes, según las necesidades del espacio y de quienes lo habitan.",
    timing: "Una vez al año, desde agosto",
    featured: false,
  },
  {
    id: "estudios-avanzados",
    number: "03",
    title: "Profundizar el equilibrio",
    subtitle: "Bazhai y estrellas volantes",
    description: "Estudios que profundizan el trabajo inicial, considerando las características de la vivienda y sus ciclos.",
    detail: "El estudio de Bazhai puede realizarse desde tres meses después de la asesoría basal. El estudio de estrellas volantes considera el año de construcción de la vivienda y puede realizarse después de un año de la asesoría basal.",
    timing: "Después de la asesoría basal",
    featured: false,
  },
  {
    id: "entorno",
    number: "04",
    title: "El entorno también importa",
    subtitle: "Purificación y paisajismo",
    description: "Una mirada que se extiende al jardín, el patio y los espacios que rodean tu vida cotidiana.",
    detail: "Asesorías de purificación energética del espacio y paisajismo para el entorno del hogar, jardín y patio. Su alcance se conversa de manera personalizada.",
    timing: "Según las necesidades de tu espacio",
    featured: false,
  },
] as const;

export type Service = (typeof services)[number];

export const steps = [
  { title: "Conocemos tu hogar", text: "Conversamos sobre tu espacio, las personas que lo habitan y lo que buscas acompañar en esta etapa." },
  { title: "Leemos el espacio", text: "Instalamos el Bagua Houtian y observamos el entorno, las ocho aspiraciones y el agente personal de cada habitante." },
  { title: "Encontramos el equilibrio", text: "Revisamos materiales, formas y colores para sugerir cambios y recursos adecuados a cada área." },
  { title: "Abrimos un nuevo ciclo", text: "Cerramos con los talismanes correspondientes y la ceremonia «Vuelo de la mariposa», descrita en la asesoría basal." },
];

export const elements = [
  { id: "madera", name: "Madera", season: "Primavera", concept: "Crecer", description: "Representa el crecimiento y el comienzo de los ciclos. En el hogar se reconoce en la madera, la vegetación y las formas que se expanden.", feeds: "La madera nutre al fuego.", controls: "La madera contiene a la tierra con sus raíces.", color: "#647454", symbol: "tree" },
  { id: "fuego", name: "Fuego", season: "Verano", concept: "Iluminar", description: "Se relaciona con la luz y la plenitud del verano. Invita a observar la presencia del sol, la iluminación y la calidez del espacio.", feeds: "El fuego, con sus cenizas, nutre a la tierra.", controls: "El fuego funde al metal.", color: "#ab654f", symbol: "flame" },
  { id: "tierra", name: "Tierra", season: "Verano tardío", concept: "Sostener", description: "Aporta la idea de cobijo y estabilidad. Aparece en materiales como el adobe, el ladrillo y la cerámica, y en las transiciones entre estaciones.", feeds: "La tierra, con sus minerales, alimenta al metal.", controls: "La tierra absorbe y contiene al agua.", color: "#a48658", symbol: "mountain" },
  { id: "metal", name: "Metal", season: "Otoño", concept: "Recoger", description: "Se asocia con el otoño y el tiempo de cosechar. Se reconoce en los metales del hogar y en la relación entre sus formas y materiales.", feeds: "El metal recoge y conduce al agua.", controls: "El metal corta a la madera.", color: "#777b79", symbol: "circle" },
  { id: "agua", name: "Agua", season: "Invierno", concept: "Fluir", description: "Representa la capacidad de contener y fluir. Invita a observar el agua, la humedad y la relación de estos factores con el resto del hogar.", feeds: "El agua alimenta a la madera y la hace brotar.", controls: "El agua apaga al fuego.", color: "#587481", symbol: "water" },
] as const;

export const tipCategories = [
  { id: "primeros-pasos", label: "Primeros pasos", intro: "Pequeños cambios para empezar a mirar tu hogar con otros ojos.", tips: [
    { title: "Dale la bienvenida al orden", text: "Mantén la entrada limpia, despejada y en buen estado. Evita acumular basura u objetos junto a las puertas principales.", icon: "door" },
    { title: "Haz espacio para lo que importa", text: "Revisa los objetos rotos y repara lo que aún tiene un lugar en tu vida. Un espacio cuidado empieza por los detalles.", icon: "sparkles" },
    { title: "Cuida el movimiento del agua", text: "Repara goteras y filtraciones. Mantén en buen estado puertas y ventanas para cuidar el entorno cotidiano.", icon: "water" },
    { title: "Elige lo que quieres mirar", text: "Prefiere imágenes que te evoquen calma. La guía invita a evitar escenas de destrucción, peligro o violencia en la decoración.", icon: "frame" },
  ] },
  { id: "dormitorio", label: "Dormitorio", intro: "Un lugar que invite a bajar el ritmo y descansar.", tips: [
    { title: "Observa los espejos", text: "La guía recomienda evitar los espejos enfrentados a la cama. Revisa qué reflejan y cómo te hace sentir su ubicación.", icon: "frame" },
    { title: "Una paleta más serena", text: "Se sugiere evitar el rojo y el negro en los muros del dormitorio y los textiles con líneas verticales muy marcadas.", icon: "moon" },
    { title: "Deja el agua fuera", text: "Según este enfoque, se recomienda no instalar fuentes de agua ni camas de agua en los dormitorios.", icon: "water" },
    { title: "Da un lugar a tus recuerdos", text: "La ubicación de fotografías familiares se revisa de forma personalizada con el Bagua durante la asesoría.", icon: "heart" },
  ] },
  { id: "cocina", label: "Cocina y baños", intro: "Cuidar los espacios cotidianos también es una forma de cuidar tu hogar.", tips: [
    { title: "Una cocina despejada", text: "Mantén limpios la cocina y el horno. Evita usar el horno para acumular ollas, sartenes u otros objetos.", icon: "sparkles" },
    { title: "Cada objeto en su lugar", text: "Guarda los cuchillos fuera de la vista y mantén en buen estado los muebles de cocina.", icon: "home" },
    { title: "Cuida los baños", text: "La guía sugiere mantener la puerta del baño y la tapa del WC cerradas, además de cuidar siempre su limpieza.", icon: "door" },
    { title: "Atiende las reparaciones", text: "No postergues las filtraciones o el deterioro de la vivienda. El cuidado del espacio forma parte de las recomendaciones básicas.", icon: "water" },
  ] },
  { id: "trabajo", label: "Espacio de trabajo", intro: "Un entorno pensado para acompañar lo que haces cada día.", tips: [
    { title: "Observa tu orientación", text: "En el enfoque del hemisferio sur, la guía asocia mirar al norte con el trabajo y la toma de decisiones.", icon: "compass" },
    { title: "Un lugar para crear", text: "La orientación hacia el este se propone para el trabajo creativo, el análisis y la meditación en ambos hemisferios.", icon: "sun" },
    { title: "Despeja tu entorno", text: "Aplica también aquí los principios generales de orden, buena iluminación y reparación de objetos deteriorados.", icon: "sparkles" },
    { title: "Encuentra tu propia disposición", text: "La orientación se interpreta junto con el entorno y las necesidades personales. Una asesoría permite revisar tu caso particular.", icon: "leaf" },
  ] },
] as const;

export const faqs = [
  { question: "¿Tengo que cambiar toda la decoración?", answer: "La asesoría estudia las formas, colores y materiales que ya existen en tu hogar. A partir de esa lectura se sugieren modificaciones e incentivos para cada área. El alcance de los cambios se conversa según tu espacio." },
  { question: "¿Por dónde se empieza?", answer: "Por la asesoría basal del hogar. Los documentos la describen como el punto de partida para las intervenciones posteriores, como el cambio de año energético o los estudios avanzados." },
  { question: "¿Qué significa Feng Shui del hemisferio sur?", answer: "Es el enfoque que relaciona las orientaciones, la luz del sol y las estaciones con nuestra ubicación en el hemisferio sur. Por eso algunas recomendaciones de orientación difieren de las del hemisferio norte." },
  { question: "¿Cómo puedo consultar por una asesoría?", answer: "Puedes escribir directamente a Paulina por WhatsApp o correo para conversar sobre tu hogar, el alcance de la asesoría, su modalidad y valor. La reserva y el pago en línea estarán disponibles en una etapa posterior." },
];

export const documentSummaries = [
  { id: "que-es", title: "Qué es el Feng Shui", source: "que es el feng shui.pdf", summary: "Una tradición china que propone habitar el espacio de forma consciente, relacionando el entorno, las personas, el Qi, el yin y el yang y los cinco agentes.", topics: ["Origen y conceptos", "Hemisferio sur", "Ocho aspiraciones del hogar"] },
  { id: "asesoria", title: "En qué consiste la asesoría", source: "En que consiste la asesoria.pdf", summary: "Un recorrido por la asesoría basal: Bagua Houtian, lectura del entorno y Ming Gua, recomendaciones, talismanes y ceremonia de cierre. Incluye las asesorías de continuidad.", topics: ["Asesoría basal", "Renovación anual", "Estudios avanzados"] },
  { id: "agentes", title: "Los cinco agentes y sus ciclos", source: "ciclos agentes.pdf", summary: "Agua, madera, fuego, tierra y metal se relacionan en ciclos de nutrición y control. Estos ciclos son una herramienta central del enfoque presentado.", topics: ["Ciclo de nutrición", "Ciclo de control", "Estaciones y materiales"] },
  { id: "tips", title: "Ideas para cuidar tu hogar", source: "tipsFengShui.pdf", summary: "Recomendaciones para la entrada, cocina, baños, dormitorios y trabajo, con énfasis en el orden, la limpieza y el cuidado de los objetos y del espacio.", topics: ["Primeros pasos", "Consejos por ambiente", "Orientación en el trabajo"] },
];
