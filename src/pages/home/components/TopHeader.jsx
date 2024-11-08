import { Link } from 'react-router-dom';

export default function TopHeader() {
  return (
    <div className="flex overflow-hidden flex-col justify-center items-center px-4 py-3 w-full text-sm bg-black text-neutral-50 md:px-16">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full max-w-7xl">
        <div className="text-center md:text-left flex flex-col md:flex-row items-center gap-2 md:gap-4">
          <span className="flex-1">Rebajas de verano en todos los trajes de baño y entrega exprés gratis - ¡50% de descuento!</span>
          <Link 
            to="/" 
            className="font-semibold underline decoration-solid underline-offset-2"
          >
            Descuentos!
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <span>English</span>
          <img 
            loading="lazy" 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c458026ddcb4daaaca9291897ab1b8ab8e65bd1233e48db8bbc95eb90ee3e16?placeholderIfAbsent=true&apiKey=cc67020b6a86463497ac5c7de37ca6f2" 
            alt="Language icon" 
            className="w-6 h-6 object-contain" 
          />
        </div>
      </div>
    </div>
  );
}
