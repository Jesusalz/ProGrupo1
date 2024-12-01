import bag from '../../../public/about-us/bag.svg';
import market from '../../../public/about-us/market.svg';
import money from '../../../public/about-us/money.svg';
import moneybag from '../../../public/about-us/moneybag.svg';

export function AboutUs() {
  const developers = [
    {
      name: "Rodrigo Ale",
      role: "Frontend Developer",
      img: "https://cdn.discordapp.com/attachments/833077073458364469/1312205081675825212/465606730_562447932998295_8737971712856714723_n.jpg?ex=674d9ff7&is=674c4e77&hm=19c91e620e3275a28e453c4d2d80c1582817af5ef0dfc0fe8f7cd200a76bf6ce&",
      social: {
        github: "https://github.com/Raiddzz"
      },
    },
    {
      name: "Tomas Bozzano",
      role: "Frontend Developer",
      img: "https://pbs.twimg.com/profile_images/1771250163895459840/FNjed9HZ_400x400.jpg", 
      social: {
        linkedin: "https://ar.linkedin.com/in/tomasbozzano",
        github: "https://github.com/TomasBozzano",
      },
    },
    {
      name: "Jesus Alzogaray",
      role: "Frontend Developer",
      img: "https://avatars.githubusercontent.com/u/87836996?v=4?s=400", 
      social: {
        linkedin: "https://www.linkedin.com/in/jesus-alzogaray-593394a/",
        github: "https://github.com/Jesusalz",
      },
    },
    {
      name: "Jose Luis Lopez",
      role: "Frontend Developer",
      img: "https://cdn.discordapp.com/attachments/1299162495910412362/1311836653442301994/JLL.jpg?ex=674d9a56&is=674c48d6&hm=20604e5a2d4bed5daf98e9fff95f0138707f42176da14bc25976fc946fa17996&", 
      social: {
        github: "https://github.com/lopezjoseluisit",
      },
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-8">
      {/* Sección de "Our Story" */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Fundado en 2024, Exclusive se ha convertido en el principal mercado de compras en línea de Asia del Sur, con una fuerte presencia en Bangladesh. Respaldada por una amplia gama de soluciones personalizadas de marketing, datos y servicios, exclusive cuenta con más de 10,500 vendedores, 300 marcas y atiende a más de 3 millones de clientes en toda la región.
          </p>
          <p className="text-gray-600">
            Exclusive ofrece una selección diversa de más de un millón de productos, con un crecimiento constante y acelerado. Nos especializamos en brindar a nuestros clientes acceso a una gran variedad de categorías, desde productos de consumo diario hasta artículos especializados, asegurando una experiencia de compra.
          </p>
        </div>
        <div className="flex-1">
          <img
            src="https://i.pinimg.com/736x/80/53/a0/8053a08278124a044ca4414dd51cf527.jpg" 
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

      {/* Sección de desarrolladores */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-center mb-8">Conoce nuestros desarrolladores</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {developers.map((dev, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 border rounded-lg shadow-lg"
            >
              <img
                src={dev.img}
                alt={dev.name}
                className="w-24 h-24 rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold">{dev.name}</h3>
              <p className="text-gray-600">{dev.role}</p>
              <div className="flex gap-4 mt-4">
                {dev.social.twitter && (
                  <a href={dev.social.twitter} target="_blank" rel="noreferrer">
                    <img
                      src="https://img.icons8.com/ios-filled/50/000000/twitter.png"
                      alt="Twitter"
                      className="w-6 h-6"
                    />
                  </a>
                )}
                {dev.social.instagram && (
                  <a href={dev.social.instagram} target="_blank" rel="noreferrer">
                    <img
                      src="https://img.icons8.com/ios-filled/50/000000/instagram-new.png"
                      alt="Instagram"
                      className="w-6 h-6"
                    />
                  </a>
                )}
                {dev.social.linkedin && (
                  <a href={dev.social.linkedin} target="_blank" rel="noreferrer">
                    <img
                      src="https://img.icons8.com/ios-filled/50/000000/linkedin.png"
                      alt="LinkedIn"
                      className="w-6 h-6"
                    />
                  </a>
                )}
                {dev.social.github && (
                  <a href={dev.social.github} target="_blank" rel="noreferrer">
                    <img
                      src="https://img.icons8.com/ios-filled/50/000000/github.png"
                      alt="GitHub"
                      className="w-6 h-6"
                    />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
