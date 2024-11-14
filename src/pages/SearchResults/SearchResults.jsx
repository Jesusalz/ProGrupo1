import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProducts } from "../../services/api";

export const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query) {
      getProducts()
        .then(data => {
          const filtered = data.products.filter(product => 
            product.title.toLowerCase().includes(query.toLowerCase()) ||
            product.description.toLowerCase().includes(query.toLowerCase())
          );
          setResults(filtered);
        })
        .catch(error => console.error('Error searching products:', error));
    }
  }, [query]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Resultado para: {query}</h2>
      {results.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {results.map(product => (
            <div key={product.id} className="border p-4 rounded">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No se encontraron resultados</p>
      )}
    </div>
  );
};
