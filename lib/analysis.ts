export type Punto = { nombre: string; lat: number; lng: number };
export type Ruta = { orden: string[]; km: number; ms: number; combinaciones: number };

const km = (a: Punto, b: Punto) => {
  const R = 6371, r = Math.PI / 180;
  const dLat = (b.lat - a.lat) * r, dLng = (b.lng - a.lng) * r;
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(a.lat * r) * Math.cos(b.lat * r) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
};

// Recorrido más corto por fuerza bruta (todas las permutaciones). Tarea pesada ideal para un Web Worker.
export function mejorRecorrido(puntos: Punto[], onProgress?: (p: number) => void): Ruta {
  const t0 = performance.now();
  const n = puntos.length;
  const d = puntos.map((a) => puntos.map((b) => km(a, b)));
  let mejor = Infinity, mejorOrden: number[] = [], combinaciones = 0;
  const usado = Array(n).fill(false), actual = [0];
  usado[0] = true; // el recorrido siempre empieza en el primer punto

  const ir = (dist: number) => {
    if (actual.length === n) {
      combinaciones++;
      if (dist < mejor) { mejor = dist; mejorOrden = [...actual]; }
      return;
    }
    const ult = actual[actual.length - 1];
    for (let i = 1; i < n; i++) {
      if (usado[i]) continue;
      usado[i] = true; actual.push(i);
      ir(dist + d[ult][i]);
      actual.pop(); usado[i] = false;
      if (actual.length === 1) onProgress?.(i / (n - 1));
    }
  };
  ir(0);
  return { orden: mejorOrden.map((i) => puntos[i].nombre), km: mejor, ms: Math.round(performance.now() - t0), combinaciones };
}
