'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LINKS = [
  { href: '/lugares', label: 'Lugares', color: 'var(--ssg)' },
  { href: '/explorar', label: 'Explorar', color: 'var(--csr)' },
  { href: '/agenda', label: 'Abierto hoy', color: 'var(--ssr)' },
  { href: '/destacado', label: 'Destacado', color: 'var(--isr)' },
  { href: '/recorrido', label: 'Recorrido', color: 'var(--stream)' },
];

export default function Nav() {
  const path = usePathname();
  return (
    <header className="nav">
      <Link href="/" className="logo"><i />PatrimonioNariño</Link>
      <nav>
        {LINKS.map((l) => (
          <Link key={l.href} href={l.href} className={path.startsWith(l.href) ? 'act' : ''} style={{ ['--c' as string]: l.color }}>{l.label}</Link>
        ))}
      </nav>
    </header>
  );
}
