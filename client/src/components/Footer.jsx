const Footer = () => {
  return (
    <footer className=" w-full h-[335px] bg-darkGreen1 flex items-center justify-center">
      <div className="w-[80%] h-full">
        <hr className=" w-[90%] pt-10 mt-24 mx-auto" />
        <div className="flex justify-around text-white">
          <div className="flex flex-col  items-start ">
            <p className="font-normal">&copy; 2024 No Country</p>
            <p className="font-normal">Todos los derechos reservados</p>
          </div>
          <div className="flex flex-col  items-start">
            <h3 className="font-bold">Sobre Nosotros</h3>
            <p className="font-normal">¿Quiénes Somos?</p>
            <p className="font-normal">Preguntas Frecuentes</p>
          </div>
          <div className="flex flex-col  items-start">
            <h3 className="font-bold">Legal</h3>
            <p className="font-normal">Términos y condiciones</p>
            <p className="font-normal">Política de Privacidad</p>
          </div>
          <div className="flex flex-col  items-start">
            <h3 className="font-bold">Contacto</h3>
            <p className="font-normal">Escribinos a</p>
          </div>
          <div className="flex flex-col  items-start">
            <h3 className="font-bold">Seguinos en:</h3>
            <div className="flex items-start">
              <img src="/facebook-icon.svg" alt=" " className="pr-2" />
              <img src="/instagram-icon.svg" alt=" " className="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// <div>
// <p>LOGO</p>
// </div>
// <div className="grid grid-flow-col auto-cols-fr gap-24">
// <div>
//   <p className="font-bold">Sobre Nosotros</p>
//   <ul>
//     <li>¿Quienes Somos?</li>
//     <li>Preguntas Frecuentes</li>
//     <li>Contacto</li>
//   </ul>
// </div>
// <div>
//   <p className="font-bold">Legal</p>
//   <ul>
//     <li>Términos y Condiciones</li>
//     <li>Pólitica de Privacidad</li>
//   </ul>
// </div>

// </div>
