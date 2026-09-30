/// <reference lib="webworker" />
import { mejorRecorrido, type Punto } from '@/lib/analysis';

self.onmessage = (e: MessageEvent<Punto[]>) => {
  const r = mejorRecorrido(e.data, (p) => self.postMessage({ tipo: 'progreso', p }));
  self.postMessage({ tipo: 'fin', r });
};
