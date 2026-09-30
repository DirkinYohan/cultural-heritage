import Link from 'next/link';
import Categoria from '@/components/Categoria';
import { LUGARES, CAT_COLOR } from '@/lib/data';

export const revalidate = 20;
export const metadata = { title: 'Lugar destacado' };

export default function Destacado() {
  const l = LUGARES[Math.floor(Date.now() / 20000) % LUGARES.length];
  return (
    <>
      <h1>Lugar destacado</h1>
      <p className="lead">Una parada para conocer con calma. Vuelve más tarde para descubrir otro lugar.</p>
      <div className="ficha destacado" style={{ ['--c' as string]: CAT_COLOR[l.categoria] }}>
        <span className="muestra" />
        <Categoria c={l.categoria} />
        <h2>{l.nombre}</h2>
        <p>{l.detalle}</p>
        <small>{l.municipio} · {l.horario}</small>
        <Link href={`/lugares/${l.slug}`} className="volver">Ver la ficha completa</Link>
      </div>
    </>
  );
}
