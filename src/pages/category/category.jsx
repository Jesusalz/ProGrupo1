import { useEffect, useState } from "react";
import { SectionTitle } from "../../components";
import { getCategories } from "../../services/category";
import { Link, useNavigate } from "react-router-dom";
import Favorite from "../../../public/favorite.svg";
import View from "../../../public/view.svg";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from '../../store/cartSlice';
import { addToFavorites } from '../../store/favoriteSlice'; 

export function Category() {
    const categories = [
        { id: "beauty", label: "Beauty" },
        { id: "fragrances", label: "Fragrances" },
        { id: "laptops", label: "Laptops" },
        { id: "smartphones", label: "Smartphones" },
        { id: "sunglasses", label: "Sunglasses" }
    ];

    const [selectedCategory, setSelectedCategory] = useState("beauty");
    const [results, setResults] = useState([]);
    const navigate = useNavigate(); // Hook para redirigir
    const userLog = useSelector((state) => state.user.userLogged); // Accede al usuario logueado desde el authSlice
    const isAuthenticated = !!userLog; // Verifica si el usuario está autenticado
    const dispatch = useDispatch();
  
    /* funcion para cargar beauty principal */
    useEffect(() => {
        const fetchProducts = async () => {
            const category = "beauty";
            const results = await getCategories(category);
            setResults(results.data.products);
        };
        fetchProducts();
    }, []);

    const handleAddToFavorites = () => {
      if (!isAuthenticated) {
        // Si no está autenticado, redirigir a la página de inicio de sesión
        navigate('/login');
      } else {
        // Si está autenticado, despachar la acción para agregar a favoritos
        dispatch(addToFavorites(product));
      }
    };

    const handleCategoryClick = async (event) => {
        const refactorText = event.target.textContent.toLowerCase().replace(" ", "-");
        setSelectedCategory(refactorText);
        const results = await getCategories(refactorText);
        setResults(results.data.products);
    };
    return (
        <>
            <div className="container mx-auto w-full p-10">
                {/* Categorías */}
                <div><div className='flex items-center pl-2'>
                    <SectionTitle nameCategory="Categories" title="Browse By Category" />
                </div>

                    <div className="flex gap-6 mx-auto w-5/6 p-2">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                className={`p-14 rounded-lg border ${selectedCategory === category.id
                                    ? "bg-red-500 text-white"
                                    : "bg-white text-black border-gray-300"
                                    }`}
                                onClick={handleCategoryClick}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>

                </div>
            </div>
            <div>
                <div className="container mx-auto w-5/6 p-10">
                    {/* Categorías */}
                    <div className="grid grid-cols-4 gap-2 pl-8">
                        {results.length === 0 && <p>Loading...</p>}
                        {/* iterar solo 4 productos*/}
                        {results.length > 0 && (
                            results.slice(0, 4).map((product) => (
                                <div key={product.id} className="w-[250px]">
                                    <div className="relative bg-white border rounded-lg p-4 shadow-md group hover:shadow-lg transition">
                                        {/* Botones flotantes */}
                                        <div className="absolute top-4 right-4 flex flex-col space-y-2">
                                            <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition" 
                                            onClick={handleAddToFavorites}>
                                                <img src={Favorite} alt="favorite product" />
                                            </button>
                                            <Link
                                                to={`./product/${product.id}`}
                                                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition"
                                            >
                                                <img src={View} alt="view product" />
                                            </Link>
                                        </div>

                                        {/* Imagen del producto */}
                                        <img
                                            src={product.images[0]}
                                            alt={product.title}
                                            className="w-full h-36 object-contain"
                                        />

                                        {/* Botón "Add to Cart" */}
                                        <button
                                            className="w-full bg-black text-white text-sm font-semibold py-2 mt-4 rounded hover:bg-gray-800 transition opacity-0 group-hover:opacity-100"
                                            onClick={() => {
                                                dispatch(addToCart(product));
                                            }}
                                        >
                                            Add To Cart
                                        </button>

                                        {/* Título del producto */}
                                        <h3 className="mt-4 text-sm font-medium text-gray-800">
                                            {product.title}
                                        </h3>

                                        {/* Precio */}
                                        <div className="flex items-center justify-start mt-2 space-x-2">
                                            <span className="text-red-500 font-bold text-lg">
                                                ${product.price}
                                            </span>
                                            <span className="text-gray-400 line-through text-sm">
                                                ${(product.price * 1.3).toFixed(2)}
                                            </span>
                                        </div>

                                        {/* Calificación */}
                                        <div className="flex items-center mt-2">
                                            <div className="flex text-yellow-400 text-sm">
                                                {"★".repeat(product.rating)}
                                                {"☆".repeat(5 - product.rating)}
                                            </div>
                                            <span className="ml-2 text-gray-500 text-xs">({product.rating})</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}

                    </div>
                </div>
            </div>
        </>
    );
};
