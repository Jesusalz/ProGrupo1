import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from "../../store/productsSlice";
import Product from './components/Product';

export function HomePage() {
  const dispatch = useDispatch();
  const { products, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Productos</h1>

      {status === 'loading' && <p>Cargando...</p>}
      {status === 'failed' && <p>Error: {error}</p>}

      {status === 'succeeded' && products.length === 0 && (
        <p>No hay productos disponibles.</p>
      )}

      {status === 'succeeded' && products.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
