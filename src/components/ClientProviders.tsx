'use client';

import type { ReactNode } from 'react';
import { QueryProvider } from '@/lib/react-query/QueryProvider';

export function ClientProviders({ children }: { children: ReactNode }) {
  return <QueryProvider>{children}</QueryProvider>;
}
