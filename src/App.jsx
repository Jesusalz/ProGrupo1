import { Route, Routes } from "react-router-dom";
import TopHeader from './pages/home/components/TopHeader';
import NavBar from './pages/home/components/navBar'; 
import { HomePage, LoginPage, Register, AboutUs, NotFound } from './pages';
import Footer from './pages/home/components/Footer'; 
import ProductDetailPage from './pages/home/ProductDetailPage';


function App() {
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
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
