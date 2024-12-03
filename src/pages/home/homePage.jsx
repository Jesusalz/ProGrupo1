import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from "../../store/productsSlice";
import Product from './components/Product';
import { SectionTitle } from '../../components';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Category } from '../category';

export function HomePage() {
  
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const dispatch = useDispatch();
  const { products = [], status, error } = useSelector((state) => state.products); 

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  const productsCarousel = products.map((product) => <Product key={product.id} product={product} />);

  return (
    <>
    <div className="container mx-auto w-full p-10">
      <div className='flex items-center pl-2'>
        < SectionTitle nameCategory="Today's" title="Products" />
      </div>

      {status === 'loading' && <p>Cargando...</p>}
      {status === 'failed' && <p>Error: {error}</p>}

      {status === 'succeeded' && products.length === 0 && (
        <p>No hay productos disponibles.</p>
      )}
      {status === 'succeeded' && products.length > 0 && (
        <div className="mx-auto w-5/6">
          <Carousel responsive={responsive}>
            {productsCarousel}
          </Carousel>
       </div>   
      )}
    </div>
    <section>
      <Category />
    </section>
    </>
  );
}
