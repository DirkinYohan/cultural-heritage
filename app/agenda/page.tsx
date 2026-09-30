import Categoria from '@/components/Categoria';
import { LUGARES, sleep, horaBogota } from '@/lib/data';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Abierto hoy' };

export default async function Agenda() {
  await sleep(600);
  const h = horaBogota();
  const lista = LUGARES.map((l) => ({ ...l, abierto: h >= l.abre && h < l.cierra }))
    .sort((a, b) => Number(b.abierto) - Number(a.abierto));
  return (
    <>
      <h1>Abierto hoy</h1>
      <p className="lead">Consulta qué lugares puedes visitar en este momento, según la hora en Pasto.</p>
      <section className="panel wide">
        <h3>{lista.filter((l) => l.abierto).length} lugares abiertos ahora</h3>
        {lista.map((l) => (
          <div key={l.slug} className="fila">
            <span>{l.nombre}<small> · {l.horario}</small></span>
            <span className="der"><Categoria c={l.categoria} /><span className="estado" data-on={l.abierto}>{l.abierto ? 'Abierto' : 'Cerrado'}</span></span>
          </div>
        ))}
      </section>
    </>
  );
}
