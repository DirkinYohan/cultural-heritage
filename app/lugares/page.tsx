import Link from 'next/link';
import Categoria from '@/components/Categoria';
import { LUGARES, CAT_COLOR } from '@/lib/data';

export const metadata = { title: 'Lugares' };

export default function Lugares() {
  return (
    <>
      <h1>Lugares de Pasto y Nariño</h1>
      <p className="lead">Templos, museos, plazas, fiestas y paisajes que cuentan la historia de la región.</p>
      <div className="grid3">
        {LUGARES.map((l) => (
          <Link key={l.slug} href={`/lugares/${l.slug}`} className="ficha" style={{ ['--c' as string]: CAT_COLOR[l.categoria] }}>
            <span className="muestra" />
            <Categoria c={l.categoria} />
            <h3>{l.nombre}</h3>
            <p>{l.resumen}</p>
            <small>{l.municipio} · {l.horario}</small>
          </Link>
        ))}
      </div>
    </>
  );
}
