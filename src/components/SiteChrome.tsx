'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Home } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import FloatingWhatsapp from '@/components/FloatingWhatsapp';
import { Toaster } from '@/components/ui/sonner';

export default function SiteChrome({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith('/studio');

  if (isStudio) {
    return (
      <main className="min-h-screen relative">
        {children}
        <Link
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open website homepage"
          className="fixed bottom-12 left-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-lg border border-white/20 hover:bg-gray-100 active:scale-95 transition"
        >
          <Home className="h-5 w-5" />
        </Link>
      </main>
    );
  }

  return (
    <>
      <FloatingWhatsapp />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <Toaster richColors position="bottom-right" />
    </>
  );
}
