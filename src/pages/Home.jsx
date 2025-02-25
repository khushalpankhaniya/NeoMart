import { useDispatch, useSelector } from 'react-redux';
import InfoSection from '../components/infoSection';
import { useEffect } from 'react';
import { setProducts } from '../redux/productSlice';
import productsData from '../assets/Data';
// import { RootState } from "../redux/store";
import ProductCard from '../components/ProductCard';
import mainBg from '../assets/images/mainBg.png';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(setProducts(productsData));
  }, [dispatch]);

  return (
    <>
      <div
        className="relative flex flex-col items-center justify-center h-[80vh] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${mainBg})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>

        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative text-center text-white px-8">
          <h1 className="text-4xl font-bold">Welcome to NeoMart</h1>
          <p className="text-lg mt-2">Discover amazing products at great prices!</p>
          <button className="mt-6 px-6 py-3 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition">
            Shop Now
          </button>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <InfoSection />
      </div>

      <div className="max-w-screen-lg mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Top Picks for You</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
