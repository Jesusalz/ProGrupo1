import { useEffect, useState } from 'react';

export const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <div>
      <h1>Mis Favoritos</h1>
      {favorites.length === 0 ? (
        <p>No tienes productos favoritos.</p>
      ) : (
        <ul>
          {favorites.map(product => (
            <li key={product.id}>
              {product.title} - ${product.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
