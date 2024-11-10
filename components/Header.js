// components/Header.tsx
import Link from 'next/link';

const Header = () => {
  return (
    <header className="p-4 bg-gray-50 flex justify-between items-center">
      <h1>Voice UI</h1>
      <nav>
        <Link href="/" className="mr-4">Home</Link>
        <Link href="/about" className="mr-4">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
