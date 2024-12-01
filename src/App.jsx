import { Route, Routes } from "react-router-dom";
import TopHeader from './pages/home/components/TopHeader';
import { NavBar } from './pages/home/components/navBar';
import { HomePage, LoginPage, Register, AboutUs, NotFound, SearchResults, ProductDetailPage, Cart, } from './pages';
import {Footer} from './pages/footer'; 
import { useEffect } from "react";
import { SetUserLog } from "./store/authSlice";
import { Favorites } from './pages/favorite/favorite'
import { me } from "./services/auth";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            const response = await me(accessToken);
            console.log(dispatch(SetUserLog(response.data)));
        }
    };
    fetchData();
}, []);
  return (
    <>
      <TopHeader />
      <NavBar /> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/product/:id" element={<ProductDetailPage />} /> 
        <Route path="/search" element={<SearchResults />} />
        <Route path ="/favorite" element={<Favorites/>} />
        <Route path="*" element={<NotFound />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
