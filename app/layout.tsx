import '../styles/globals.css'; // Mevcut stil dosyasını koruyoruz
import Header from '../components/Header'; // Header bileşenini içe aktarıyoruz
import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        {/* Header bileşenini ekliyoruz */}
        <Header />
        
        {/* Ana içerik alanı */}
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
