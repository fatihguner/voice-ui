// components/Header.js
import Link from 'next/link';

const Header = () => {
  return (
    <header style={{ padding: '1rem', backgroundColor: '#f8f9fa', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1>Voice UI</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
