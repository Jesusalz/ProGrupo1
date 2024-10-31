import { Route, Routes } from "react-router-dom"
import {HomePage , LoginPage, Register, AboutUs, NotFound} from './pages'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
