import { Suspense } from 'react';
import { Resumen, Imperdibles, PorCategoria, Esqueleto } from '@/components/streams';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Recorrido' };

export default function Recorrido() {
  return (
    <>
      <h1>Recorrido por el patrimonio</h1>
      <p className="lead">Una mirada general a lo más representativo de Pasto y Nariño.</p>
      <div className="grid2">
        <Suspense fallback={<Esqueleto />}><Resumen /></Suspense>
        <Suspense fallback={<Esqueleto alto={220} />}><Imperdibles /></Suspense>
        <Suspense fallback={<Esqueleto wide />}><PorCategoria /></Suspense>
      </div>
    </>
  );
}
