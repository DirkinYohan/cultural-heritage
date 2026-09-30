import Link from 'next/link';
import { notFound } from 'next/navigation';
import Categoria from '@/components/Categoria';
import { LUGARES, CAT_COLOR } from '@/lib/data';

export const dynamicParams = false; // solo existen las rutas generadas en el build
export const generateStaticParams = () => LUGARES.map((l) => ({ slug: l.slug }));

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const l = LUGARES.find((x) => x.slug === slug);
  return { title: l?.nombre, description: l?.resumen };
}

export default async function Detalle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const l = LUGARES.find((x) => x.slug === slug);
  if (!l) notFound();
  return (
    <article className="detalle" style={{ ['--c' as string]: CAT_COLOR[l.categoria] }}>
      <Link href="/lugares" className="volver">Volver a los lugares</Link>
      <h1>{l.nombre}</h1>
      <Categoria c={l.categoria} />
      <p className="lead">{l.resumen}</p>
      <div className="datos">
        <div><b>{l.municipio}</b><span>municipio</span></div>
        <div><b>{l.horario}</b><span>horario</span></div>
      </div>
      <p className="texto">{l.detalle}</p>
      <a className="btn" href={`https://www.google.com/maps?q=${l.lat},${l.lng}`} target="_blank" rel="noreferrer">Ver en el mapa</a>
    </article>
  );
}
