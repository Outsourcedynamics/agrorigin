import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="banner">
        <img src="/banner.jpg" alt="Fresh organic vegetables" />
        <h1>Pure Organic Produce, Exported Worldwide</h1>
        <p>Exporting India's best to Japan and beyond.</p>
        <a href="/products" className="btn">Shop Now</a>
        <a href="/contact" className="btn">Contact Us</a>
      </section>
      <section className="features">
        <h2>Why Choose Agrorgin?</h2>
        <ul>
          <li>Certified Indian Organic Farms</li>
          <li>Fast, Cold-chain Export Logistics</li>
          <li>International Compliance</li>
        </ul>
      </section>
      <footer>
        <p>© 2025 Agrorgin | info@agrorgin.com</p>
      </footer>
    </main>
  );
}