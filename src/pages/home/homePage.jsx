import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from "../../store/productsSlice";
import Product from './components/Product';
import { SectionTitle } from '../../components';

export function HomePage() {
  const dispatch = useDispatch();
  const { products = [], status, error } = useSelector((state) => state.products); 

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  return (
    <div className="container mx-auto p-4 w-full">
      <div className='flex max-w-2xl pr-12 justify-center items-center'>
        < SectionTitle nameCategory="Today's" title="Productos" />
      </div>

      {status === 'loading' && <p>Cargando...</p>}
      {status === 'failed' && <p>Error: {error}</p>}

      {status === 'succeeded' && products.length === 0 && (
        <p>No hay productos disponibles.</p>
      )}

      {status === 'succeeded' && products.length > 0 && (
        <div className="grid grid-cols-3 items-center justify-center max-w-3xl m-auto gap-4 pl-4">
          {products.map((product) => (
              <Product key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
