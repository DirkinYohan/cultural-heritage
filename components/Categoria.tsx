import { CAT_COLOR, type Categoria as C } from '@/lib/data';
export default function Categoria({ c }: { c: C }) {
  return <span className="cat" style={{ ['--c' as string]: CAT_COLOR[c] }}>{c}</span>;
}
