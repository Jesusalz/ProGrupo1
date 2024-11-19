export function FooterComp() {
    return (
    <footer className="bg-black text-white py-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
              {/* Suscripción */}
              <div>
                <h3 className="font-bold text-lg mb-4">Exclusivo</h3>
                <p className="mb-2">Suscríbete</p>
                <p className="mb-4">Obtén un 10% de descuento en tu primera compra</p>
                <input
                  type="email"
                  placeholder="Ingresa tu correo electrónico"
                  className="w-full p-2 rounded-md text-black"
                />
              </div>
      
              {/* Soporte */}
              <div>
                <h3 className="font-bold text-lg mb-4">Soporte</h3>
                <p>Avenida Siempreviva 742, Junín, Argentina.</p>
                <p className="my-2">grupo1@mail.com</p>
                <p>+54-2364-9999</p>
              </div>
      
              {/* Cuenta */}
              <div>
                <h3 className="font-bold text-lg mb-4">Cuenta</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:underline">Mi cuenta</a></li>
                  <li><a href="#" className="hover:underline">Iniciar sesión / Registrarse</a></li>
                  <li><a href="#" className="hover:underline">Carrito</a></li>
                  <li><a href="#" className="hover:underline">Lista de deseos</a></li>
                  <li><a href="#" className="hover:underline">Tienda</a></li>
                </ul>
              </div>
      
              {/* Enlaces rápidos */}
              <div>
                <h3 className="font-bold text-lg mb-4">Enlaces rápidos</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:underline">Política de privacidad</a></li>
                  <li><a href="#" className="hover:underline">Términos de uso</a></li>
                  <li><a href="#" className="hover:underline">Preguntas frecuentes</a></li>
                  <li><a href="#" className="hover:underline">Contacto</a></li>
                </ul>
              </div>
      
              {/* Descargar App */}
              <div>
                <h3 className="font-bold text-lg mb-4">Descargar App</h3>
                <p className="mb-4">Ahorra $230 solo para nuevos usuarios de la app</p>
                <div className="flex items-center space-x-4">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/117cd7f055594d6d6b65871991299066ef74aad6e2cf4b309b868fcef07af99e?placeholderIfAbsent=true&apiKey=cc67020b6a86463497ac5c7de37ca6f2" alt="Código QR" className="object-contain shrink-0 self-stretch my-auto w-20 aspect-square" />
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/99e35549861f497b794c5f8233c929df52bcb04ea213e4eb17f807bfe7245aac?placeholderIfAbsent=true&apiKey=cc67020b6a86463497ac5c7de37ca6f2" alt="Descargar en App Store" className="object-contain max-w-full aspect-[2.75] w-[110px]" />
                </div>
                <div className="flex space-x-4 mt-4">
                  <a href="#facebook" aria-label="Facebook">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/30ef1881c8ba382ad841b10dec22c4728e1ac56594cd8fd1b8fc54e4c0c91052?placeholderIfAbsent=true&apiKey=cc67020b6a86463497ac5c7de37ca6f2" alt="" className="object-contain shrink-0 w-6 aspect-square" />
                  </a>
                  <a href="#instagram" aria-label="Instagram">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d0b67f52bb53b8c3b436cfc50867157e647c1cc5fa6f7cc373ba309b35f3d286?placeholderIfAbsent=true&apiKey=cc67020b6a86463497ac5c7de37ca6f2" alt="" className="object-contain shrink-0 w-6 aspect-square" />
                  </a>
                </div>
              </div>
        </div>
    </footer>
    );
}
