import Link from 'next/link';
import { LUGARES, CATEGORIAS, sleep } from '@/lib/data';
import Categoria from './Categoria';

export async function Resumen() {
  await sleep(800);
  return (
    <section className="panel">
      <h3>Para empezar</h3>
      <p className="big">{LUGARES.length}</p>
      <p>lugares en {new Set(LUGARES.map((l) => l.municipio)).size} municipios y {CATEGORIAS.length} categorías de patrimonio.</p>
    </section>
  );
}

export async function Imperdibles() {
  await sleep(1800);
  return (
    <section className="panel">
      <h3>Imperdibles</h3>
      {LUGARES.filter((l) => l.imperdible).map((l) => (
        <div key={l.slug} className="fila"><Link href={`/lugares/${l.slug}`}>{l.nombre}</Link><Categoria c={l.categoria} /></div>
      ))}
    </section>
  );
}

export async function PorCategoria() {
  await sleep(3200);
  return (
    <section className="panel wide">
      <h3>Lugares por categoría</h3>
      <div className="chips">
        {CATEGORIAS.map((c) => (
          <div key={c} className="chip"><Categoria c={c} /><span>{LUGARES.filter((l) => l.categoria === c).map((l) => l.nombre).join(', ')}</span></div>
        ))}
      </div>
    </section>
  );
}

export const Esqueleto = ({ alto = 150, wide = false }: { alto?: number; wide?: boolean }) => (
  <div className={`panel skel ${wide ? 'wide' : ''}`} style={{ minHeight: alto }} aria-busy="true"><span /><span /><span /></div>
);
