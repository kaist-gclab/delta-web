import { redirect } from 'next/navigation';

export default function NodePage() {
  return redirect('/processor-nodes/list');
}
