'use client';
import { useEffect, useRef, useState } from 'react';
import Categoria from '@/components/Categoria';
import type { Ruta } from '@/lib/analysis';
import { CATEGORIAS, type Lugar, type Categoria as C } from '@/lib/data';

export default function Explorar() {
  const [datos, setDatos] = useState<Lugar[] | null>(null);
  const [q, setQ] = useState('');
  const [cat, setCat] = useState<C | null>(null);
  const [favs, setFavs] = useState<string[]>([]);
  const [prog, setProg] = useState(0);
  const [calculando, setCalculando] = useState(false);
  const [ruta, setRuta] = useState<Ruta | null>(null);
  const worker = useRef<Worker | null>(null);

  useEffect(() => {
    fetch('/api/lugares').then((r) => r.json()).then(setDatos);
    return () => worker.current?.terminate();
  }, []);

  const calcular = () => {
    if (!datos) return;
    setRuta(null); setProg(0); setCalculando(true);
    worker.current?.terminate();
    const w = new Worker(new URL('./analisis.worker.ts', import.meta.url));
    worker.current = w;
    w.onmessage = (e) => {
      if (e.data.tipo === 'progreso') setProg(e.data.p);
      else { setRuta(e.data.r); setCalculando(false); w.terminate(); }
    };
    w.postMessage(datos.map((l) => ({ nombre: l.nombre, lat: l.lat, lng: l.lng })));
  };
  const cancelar = () => { worker.current?.terminate(); setCalculando(false); setProg(0); };
  const toggle = (s: string) => setFavs((f) => (f.includes(s) ? f.filter((x) => x !== s) : [...f, s]));

  const lista = datos?.filter((l) => (!cat || l.categoria === cat) && (l.nombre + l.municipio).toLowerCase().includes(q.toLowerCase()));

  return (
    <>
      <h1>Explorar</h1>
      <p className="lead">Busca lugares por nombre o categoría, guarda tus favoritos y calcula el orden más corto para visitarlos.</p>
      <div className="grid2">
        <section className="panel">
          <h3>Busca un lugar</h3>
          <input className="input" placeholder="Nombre o municipio" value={q} onChange={(e) => setQ(e.target.value)} />
          <div className="filtros">
            <button className={`btn ghost ${!cat ? 'sel' : ''}`} onClick={() => setCat(null)}>Todos</button>
            {CATEGORIAS.map((c) => <button key={c} className={`btn ghost ${cat === c ? 'sel' : ''}`} onClick={() => setCat(cat === c ? null : c)}>{c}</button>)}
          </div>
          {!lista ? <div className="skel inline"><span /><span /><span /></div> :
            lista.length === 0 ? <p>Ningún lugar coincide. Prueba con otra palabra o quita el filtro.</p> :
            lista.map((l) => (
              <div key={l.slug} className="fila">
                <span>{l.nombre}<small> · {l.municipio}</small></span>
                <span className="der"><Categoria c={l.categoria} />
                  <button className="fav" aria-pressed={favs.includes(l.slug)} onClick={() => toggle(l.slug)} title="Guardar en favoritos">{favs.includes(l.slug) ? '★' : '☆'}</button></span>
              </div>
            ))}
          {favs.length > 0 && <small className="tag">{favs.length} favoritos guardados</small>}
        </section>

        <section className="panel">
          <h3>Tu mejor recorrido</h3>
          <p>Calcula el orden más corto para visitar todos los lugares, empezando por la Plaza de Nariño.</p>
          <div className="acciones">
            <button className="btn" onClick={calcular} disabled={calculando || !datos}>{calculando ? 'Calculando…' : 'Calcular recorrido'}</button>
            {calculando && <button className="btn ghost" onClick={cancelar}>Cancelar</button>}
          </div>
          {calculando && <div className="barra"><div style={{ width: `${prog * 100}%` }} /></div>}
          {ruta && (
            <div className="res">
              <p><b>{ruta.km.toFixed(1)} km</b> en total</p>
              <ol className="pasos">{ruta.orden.map((n) => <li key={n}>{n}</li>)}</ol>
            </div>
          )}
        </section>
      </div>
    </>
  );
}
