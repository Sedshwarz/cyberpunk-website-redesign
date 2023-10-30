import './App.css';
import Head from '../components/head/head';
import News from '../components/news/news';
import Products from '../components/products/products';
import Footer from '../components/footer/footer';

function App() {
  return (
    <div className="App">
      <Head />
      <News />
      <Products />
      <Footer />
    </div>
  );
}
export default App;
