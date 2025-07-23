import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';

export default function Products() {
  // Dummy products
  const products = [
    { name: 'Tomato', price: 120, cert: 'India Organic', image: '/tomato.jpg' },
    { name: 'Carrot', price: 90, cert: 'India Organic', image: '/carrot.jpg' },
    // ... add more
  ];
  return (
    <main>
      <Navbar />
      <h1>Organic Vegetables</h1>
      <div className="product-grid">
        {products.map((prod) => <ProductCard key={prod.name} {...prod} />)}
      </div>
    </main>
  );
}