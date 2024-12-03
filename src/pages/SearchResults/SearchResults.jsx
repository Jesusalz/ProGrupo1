import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { searchProducts } from "../../services/api";

export const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('search');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchResults = async () => {
      if (query) {
        setLoading(true);
        try {
          const data = await searchProducts(query);
          setResults(data.products || []);
        } catch (error) {
          console.error('Error searching products:', error);
          setResults([]);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchResults();
  }, [query]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Resultados para: {query}</h2>
      {loading ? (
        <div className="flex justify-center items-center">
          <p>Cargando resultados...</p>
        </div>
      ) : results.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {results.map(product => (
            <div 
              key={product.id} 
              className="border p-4 rounded hover:shadow-lg transition-shadow"
            >
              <img 
                src={product.images?.[0]} 
                alt={product.title} 
                className="w-full h-48 object-cover rounded mb-2"
              />
              <h3 className="font-bold text-lg">{product.title}</h3>
              <p className="text-gray-600 text-sm">{product.description}</p>
              <p className="text-blue-600 font-semibold mt-2">${product.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No se encontraron resultados</p>
      )}
    </div>
  );
};