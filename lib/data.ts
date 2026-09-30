export type Categoria = 'Iglesia' | 'Museo' | 'Centro histórico' | 'Carnaval' | 'Naturaleza';
export const CATEGORIAS: Categoria[] = ['Iglesia', 'Museo', 'Centro histórico', 'Carnaval', 'Naturaleza'];
export const CAT_COLOR: Record<Categoria, string> = {
  'Iglesia': '#c08bff', 'Museo': '#f4b942', 'Centro histórico': '#6f8cff', 'Carnaval': '#ff5d73', 'Naturaleza': '#a3c95b',
};

export type Lugar = {
  slug: string; nombre: string; categoria: Categoria; municipio: string; resumen: string; detalle: string;
  lat: number; lng: number; abre: number; cierra: number; horario: string; imperdible: boolean;
};

// Datos de ejemplo con fines académicos: verifica horarios y coordenadas antes de publicar.
export const LUGARES: Lugar[] = [
  { slug: 'plaza-de-narino', nombre: 'Plaza de Nariño', categoria: 'Centro histórico', municipio: 'Pasto', lat: 1.2136, lng: -77.2811, abre: 0, cierra: 24, horario: 'Todo el día', imperdible: true,
    resumen: 'El corazón del centro histórico de Pasto.', detalle: 'Punto de encuentro de la ciudad, rodeado de edificios institucionales y de iglesias. Es el mejor lugar para empezar un recorrido a pie.' },
  { slug: 'catedral-de-pasto', nombre: 'Catedral de Pasto', categoria: 'Iglesia', municipio: 'Pasto', lat: 1.2144, lng: -77.279, abre: 7, cierra: 19, horario: '7:00 a 19:00', imperdible: true,
    resumen: 'Templo principal de la ciudad, junto a la plaza.', detalle: 'Su arquitectura y sus altares muestran la historia religiosa de la ciudad. Se visita fácilmente junto con la plaza.' },
  { slug: 'san-juan-bautista', nombre: 'Iglesia de San Juan Bautista', categoria: 'Iglesia', municipio: 'Pasto', lat: 1.2137, lng: -77.2794, abre: 7, cierra: 18, horario: '7:00 a 18:00', imperdible: false,
    resumen: 'Una de las iglesias antiguas del centro.', detalle: 'Forma parte del conjunto de templos coloniales del centro histórico, con retablos y detalles decorativos de época.' },
  { slug: 'san-felipe-neri', nombre: 'Iglesia de San Felipe Neri', categoria: 'Iglesia', municipio: 'Pasto', lat: 1.2146, lng: -77.2797, abre: 7, cierra: 18, horario: '7:00 a 18:00', imperdible: false,
    resumen: 'Templo del centro conocido por su fachada.', detalle: 'Es una parada corta y muy fotogénica dentro del recorrido por las iglesias del centro de Pasto.' },
  { slug: 'la-merced', nombre: 'Iglesia de La Merced', categoria: 'Iglesia', municipio: 'Pasto', lat: 1.2135, lng: -77.2798, abre: 7, cierra: 18, horario: '7:00 a 18:00', imperdible: false,
    resumen: 'Templo colonial del centro histórico.', detalle: 'Sirve para entender cómo se organizó la vida religiosa y urbana de la ciudad durante la colonia.' },
  { slug: 'museo-del-oro-narino', nombre: 'Museo del Oro Nariño', categoria: 'Museo', municipio: 'Pasto', lat: 1.213, lng: -77.2782, abre: 9, cierra: 17, horario: '9:00 a 17:00', imperdible: true,
    resumen: 'Orfebrería de los pueblos prehispánicos de la región.', detalle: 'Reúne piezas de oro y cerámica de las culturas que habitaron el sur del país antes de la llegada de los españoles.' },
  { slug: 'museo-taminango', nombre: 'Museo Taminango de Arte Popular', categoria: 'Museo', municipio: 'Pasto', lat: 1.2153, lng: -77.279, abre: 9, cierra: 17, horario: '9:00 a 17:00', imperdible: false,
    resumen: 'Artesanías y arte popular nariñense.', detalle: 'Muestra oficios locales como el barniz de Pasto y otras expresiones del arte popular del departamento.' },
  { slug: 'carnaval-negros-y-blancos', nombre: 'Carnaval de Negros y Blancos', categoria: 'Carnaval', municipio: 'Pasto', lat: 1.2138, lng: -77.2805, abre: 0, cierra: 24, horario: '2 al 6 de enero', imperdible: true,
    resumen: 'Patrimonio Cultural Inmaterial de la Humanidad (UNESCO).', detalle: 'Cada enero la ciudad se llena de desfiles, carrozas y música. El 5 es el Día de Negros y el 6 el Día de Blancos.' },
  { slug: 'laguna-de-la-cocha', nombre: 'Laguna de La Cocha e Isla La Corota', categoria: 'Naturaleza', municipio: 'Pasto', lat: 1.1167, lng: -77.15, abre: 8, cierra: 17, horario: '8:00 a 17:00', imperdible: true,
    resumen: 'Laguna andina con un santuario de flora y fauna en su isla.', detalle: 'A menos de una hora de la ciudad. Se recorre en lancha y es ideal para conocer el paisaje y la vida local del corregimiento.' },
  { slug: 'volcan-galeras', nombre: 'Volcán Galeras', categoria: 'Naturaleza', municipio: 'Pasto', lat: 1.2205, lng: -77.3596, abre: 0, cierra: 24, horario: 'Vista libre', imperdible: false,
    resumen: 'El volcán que domina el paisaje de Pasto.', detalle: 'Se aprecia desde muchos puntos de la ciudad. El acceso a la zona cercana al cráter está restringido por seguridad.' },
  { slug: 'santuario-las-lajas', nombre: 'Santuario de Las Lajas', categoria: 'Iglesia', municipio: 'Ipiales', lat: 0.8058, lng: -77.5859, abre: 6, cierra: 18, horario: '6:00 a 18:00', imperdible: true,
    resumen: 'Basílica neogótica construida sobre un cañón.', detalle: 'Uno de los sitios religiosos y arquitectónicos más visitados de Nariño, levantado sobre el cañón del río Guáitara.' },
];

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
export const fmt = (d: Date = new Date()) =>
  d.toLocaleString('es-CO', { timeZone: 'America/Bogota', hour12: false, dateStyle: 'short', timeStyle: 'medium' });
export const horaBogota = () => Number(new Date().toLocaleString('en-US', { timeZone: 'America/Bogota', hour: 'numeric', hour12: false })) % 24;
