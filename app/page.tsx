
import { redirect } from 'next/navigation';

export default function Home() {
  // For now, redirect to login. In a real app, you'd check authentication status
  redirect('/login');
}
