import Link from 'next/link';

const SECCIONES = [
  { href: '/lugares', c: 'var(--ssg)', t: 'Lugares', d: 'Iglesias, museos, plazas, el carnaval y paisajes de Pasto y Nariño, uno por uno.' },
  { href: '/explorar', c: 'var(--csr)', t: 'Explorar', d: 'Busca por nombre o categoría, guarda tus favoritos y arma tu recorrido.' },
  { href: '/agenda', c: 'var(--ssr)', t: 'Abierto hoy', d: 'Qué lugares puedes visitar ahora mismo.' },
  { href: '/destacado', c: 'var(--isr)', t: 'Destacado', d: 'Un lugar para descubrir y conocer su historia.' },
  { href: '/recorrido', c: 'var(--stream)', t: 'Recorrido', d: 'Imperdibles y lugares organizados por categoría.' },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>Iglesias, museos, plazas y carnavales de Pasto y Nariño.</h1>
        <p className="lead">Explora el patrimonio cultural de la región: qué visitar, qué está abierto hoy y cómo recorrerlo.</p>
        <div className="hilos" aria-hidden>{SECCIONES.map((s) => <i key={s.href} style={{ background: s.c }} />)}</div>
      </section>
      <section className="grid5">
        {SECCIONES.map((s) => (
          <Link key={s.href} href={s.href} className="pcard" style={{ ['--c' as string]: s.c }}>
            <h3>{s.t}</h3>
            <p>{s.d}</p>
          </Link>
        ))}
      </section>
    </>
  );
}
