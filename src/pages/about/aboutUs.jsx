import bag from '../../../public/about-us/bag.svg';
import market from '../../../public/about-us/market.svg';
import money from '../../../public/about-us/money.svg';
import moneybag from '../../../public/about-us/moneybag.svg';
export function AboutUs() {
  return (
    <div className="max-w-5xl mx-auto p-8">
      {/* Sección de "Our Story" */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Fundado en 2024, Exclusive se ha convertido en el principal mercado de compras en línea de Asia del Sur, con una fuerte presencia en Bangladesh. Respaldada por una amplia gama de soluciones personalizadas de marketing, datos y servicios, exclusive cuenta con mas de 10,500 vendedores, 300 marcas y atiende a mas de 3 millones de clientes en toda la región.
          </p>
          <p className="text-gray-600">
            Exclusive ofrece una selección diversa de mas de un millón de productos, con un crecimiento constante y acelerado. Nos especializamos en brindar a nuestros clientes acceso a una gran variedad de categorías, desde productos de consumo diario hasta artículos especializados, asegurando una experiencia de compra.
          </p>
        </div>
        <div className="flex-1">
          <img
            src="https://i.pinimg.com/736x/80/53/a0/8053a08278124a044ca4414dd51cf527.jpg" // Cambia esta URL por la imagen que necesitas
            alt="Our Story"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Sección de estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
        <div className="flex flex-col items-center p-6 border rounded-lg hover:bg-red-500 transition-colors">
          <img src={bag} alt="Sellers Icon" className="w-12 h-12 mb-4" />
          <p className="text-2xl font-bold">10.5k</p>
          <p className="text-gray-600">Sellers active on our site</p>
        </div>
        <div className="flex flex-col items-center p-6 border rounded-lg hover:bg-red-500 transition-colors">
          <img src={market} alt="Sales Icon" className="w-12 h-12 mb-4" />
          <p className="text-2xl font-bold">33k</p>
          <p className="text-gray-600">Monthly Product Sale</p>
        </div>
        <div className="flex flex-col items-center p-6 border rounded-lg hover:bg-red-500 transition-colors">
          <img src={money} alt="Customers Icon" className="w-12 h-12 mb-4" />
          <p className="text-2xl font-bold">45.5k</p>
          <p className="text-gray-600">Customers active on our site</p>
        </div>
        <div className="flex flex-col items-center p-6 border rounded-lg hover:bg-red-500 transition-colors">
          <img src={moneybag} alt="Annual Gross Icon" className="w-12 h-12 mb-4" />
          <p className="text-2xl font-bold">25k</p>
          <p className="text-gray-600">Annual gross sale on our site</p>
        </div>
      </div>
    </div>
  )
}
