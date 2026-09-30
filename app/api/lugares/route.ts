import { LUGARES, sleep } from '@/lib/data';

export async function GET() {
  await sleep(900); // latencia simulada para hacer visible la cascada del CSR
  return Response.json(LUGARES);
}
