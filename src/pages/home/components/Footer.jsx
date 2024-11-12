
/** Componente Footer que se muestra al final de cada página del sitio web.*/


export default function Footer() {
    return (
      <footer className="flex overflow-hidden flex-col justify-end pt-20 pb-6 mt-8 w-full bg-black max-md:max-w-full">
        <div className="flex flex-wrap gap-10 justify-center items-start self-center max-md:max-w-full">
          <div className="flex flex-col text-neutral-50 w-[217px]">
            <div className="flex flex-col self-start">
              <div className="flex flex-col max-w-full whitespace-nowrap w-[118px]">
                <h2 className="w-full text-2xl font-bold tracking-wider leading-none">
                  Exclusivo
                </h2>
                <h3 className="mt-6 text-xl font-medium leading-snug">
                  Suscríbete
                </h3>
              </div>
              <p className="mt-6 text-base">
                Obtén un 10% de descuento en tu primera compra
              </p>
            </div>
            <form className="flex gap-8 items-center py-3 pl-4 mt-4 max-w-full text-base rounded border-solid border-[1.5px] border-neutral-50 w-[217px]">
              <label htmlFor="email" className="sr-only">Ingresa tu correo electrónico</label>
              <input
                type="email"
                id="email"
                placeholder="Ingresa tu correo electrónico"
                className="self-stretch my-auto opacity-40 bg-transparent border-none outline-none"
              />
              <button type="submit" aria-label="Suscribirse">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e470e02f490f8dfd60a13c8f31ae8fdca6dbd83fd4545421e1e221f73f5e66a?placeholderIfAbsent=true&apiKey=cc67020b6a86463497ac5c7de37ca6f2" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
              </button>
            </form>
          </div>
          <nav className="flex flex-col text-neutral-50 w-[175px]">
            <h3 className="text-xl font-medium leading-snug">Soporte</h3>
            <address className="flex flex-col mt-6 max-w-full text-base w-[175px] not-italic">
              <p className="leading-6">
                Avenida Siempreviva 742, Junín, Argentina.
              </p>
              <a href="mailto:grupo1@mail.com" className="mt-4">grupo1@mail.com</a>
              <a href="tel:+88015-88888-9999" className="mt-4">+54-2364-9999</a>
            </address>
          </nav>
          <nav className="flex flex-col text-neutral-50">
            <h3 className="text-xl font-medium leading-snug">Cuenta</h3>
            <ul className="flex flex-col mt-6 text-base">
              <li className="mt-4"><a href="#my-account">Mi cuenta</a></li>
              <li className="mt-4"><a href="#login-register">Iniciar sesión / Registrarse</a></li>
              <li className="mt-4"><a href="#cart">Carrito</a></li>
              <li className="mt-4"><a href="#wishlist">Lista de deseos</a></li>
              <li className="mt-4"><a href="#shop">Tienda</a></li>
            </ul>
          </nav>
          <nav className="flex flex-col text-neutral-50">
            <h3 className="text-xl font-medium leading-snug">Enlaces rápidos</h3>
            <ul className="flex flex-col mt-6 text-base">
              <li><a href="#privacy-policy">Política de privacidad</a></li>
              <li className="mt-4"><a href="#terms-of-use">Términos de uso</a></li>
              <li className="mt-4"><a href="#faq">Preguntas frecuentes</a></li>
              <li className="mt-4"><a href="#contact">Contacto</a></li>
            </ul>
          </nav>
          <div className="flex flex-col">
            <div className="flex flex-col">
              <h3 className="text-xl font-medium leading-snug text-neutral-50">
                Descargar App
              </h3>
              <div className="flex flex-col mt-6">
                <p className="text-xs font-medium opacity-70 text-neutral-50">
                  Ahorra $230 solo para nuevos usuarios de la app
                </p>
                <div className="flex gap-2 items-center mt-2">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/117cd7f055594d6d6b65871991299066ef74aad6e2cf4b309b868fcef07af99e?placeholderIfAbsent=true&apiKey=cc67020b6a86463497ac5c7de37ca6f2" alt="Código QR" className="object-contain shrink-0 self-stretch my-auto w-20 aspect-square" />
                  <div className="flex flex-col self-stretch my-auto w-[110px]">
                    <a href="#app-store" aria-label="Descargar en App Store">
                      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/99e35549861f497b794c5f8233c929df52bcb04ea213e4eb17f807bfe7245aac?placeholderIfAbsent=true&apiKey=cc67020b6a86463497ac5c7de37ca6f2" alt="Descargar en App Store" className="object-contain max-w-full aspect-[2.75] w-[110px]" />
                    </a>
                    <a href="#google-play" aria-label="Obtener en Google Play">
                      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa6fc45e82f6d38d43257c682d066052fbcdd8aad0d188b2eebdf4f531f1f0b4?placeholderIfAbsent=true&apiKey=cc67020b6a86463497ac5c7de37ca6f2" alt="Obtener en Google Play" className="object-contain mt-1 max-w-full aspect-[2.75] w-[110px]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-6 items-start self-start mt-6">
              <a href="#facebook" aria-label="Facebook">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/30ef1881c8ba382ad841b10dec22c4728e1ac56594cd8fd1b8fc54e4c0c91052?placeholderIfAbsent=true&apiKey=cc67020b6a86463497ac5c7de37ca6f2" alt="" className="object-contain shrink-0 w-6 aspect-square" />
              </a>
             
              <a href="#instagram" aria-label="Instagram">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d0b67f52bb53b8c3b436cfc50867157e647c1cc5fa6f7cc373ba309b35f3d286?placeholderIfAbsent=true&apiKey=cc67020b6a86463497ac5c7de37ca6f2" alt="" className="object-contain shrink-0 w-6 aspect-square" />
              </a>
              
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-16 w-full max-md:mt-4">
          <p className="w-full text-center text-neutral-50 text-sm font-normal opacity-70 max-md:opacity-100">
            © Todos los derechos reservados Grupo 1 2024
          </p>
        </div>
      </footer>
    );
  }
  