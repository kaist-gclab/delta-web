import { redirect } from 'next/navigation';

export default function NodePage() {
  return redirect('/node/processor-nodes/list');
}
