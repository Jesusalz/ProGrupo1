import { Route, Routes } from "react-router-dom";
import NavBar from './pages/home/components/navBar'; 
import { HomePage, LoginPage, Register, AboutUs, NotFound } from './pages';

function App() {
  return (
    <>
      <NavBar /> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
