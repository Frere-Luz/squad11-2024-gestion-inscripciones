import { useState } from "react";
import img1 from "../../assets/home/image1.png";
import img2 from "../../assets/home/image2.png";
import img3 from "../../assets/home/image3.png";
import img4 from "../../assets/home/image4.png";
import img5 from "../../assets/home/image5.png";
import img6 from "../../assets/home/image6.png";
import img7 from "../../assets/home/image7.png";
import "./Home.css";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=" h-full  font-poppins grid gap-10">
        <header className="fixed  p-4 w-full  bg-gray-50 ">
          <nav className="">
            <ul className="flex justify-between">
              <li>
                <img className="h-10 " src={img2} alt="" srcset="" />
              </li>
              <li className=" hover:scale-105">
                <a
                  className="bg-[#DA5061] p-2 rounded-full text-white"
                  href="#"
                >
                  Iniciar sesión
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <article className="flex h-screen w-full my-16 ">
          <div className="flex h-5/6 place-content-center gap-5">
            <div className="self-center w-5/6 md:w-1/2 ">
              <h1 className="text-5xl font-extrabold pb-3">
                Bienvenido al sistema de inscripción del Polo It
              </h1>
              <p className=" text-lg font-medium">
                Una plataforma innovadora que conecta automáticamente a mentores
                técnicos con egresados, facilitando su participación en diversas
                actividades y programas.
              </p>
            </div>
            <div className="hidden md:block">
              <img className=" h-full " src={img1} alt="" />
            </div>
          </div>
        </article>
        <article className="flex flex-col place-items-center gap-5">
          <div className="w-5/4 text-center">
            <h2 className="text-5xl font-extrabold pb-3">
              Cómo funciona el programa
            </h2>
            <p className=" text-md font-medium">
              Este programa permite conectarte con mentores, participar en
              eventos de aprendizaje y desarrollar nuevas habilidades en tu
              campo de interés.
            </p>
            <p className=" text-md font-medium">
              Sigue estos simples pasos para comenzar tu experiencia:
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-10 text-center">
            <div className="flex flex-col justify-items-center hover:scale-105">
              <img className="h-24 w-24 self-center" src={img3} alt="" />
              <h2 className="text-4xl font-extrabold pb-3  ">Paso 1:</h2>
              <p className=" text-md font-medium te">
                Iniciar sesión en la plataforma
              </p>
            </div>
            <div className="flex flex-col justify-items-center hover:scale-105">
              <img className="h-24 w-24 self-center" src={img4} alt="" />
              <h2 className="text-4xl font-extrabold pb-3  ">Paso 2:</h2>
              <p className=" text-md font-medium ">Inscribirse en un evento</p>
            </div>
            <div className="flex flex-col justify-items-center hover:scale-105 ">
              <img className="h-24 w-24 self-center" src={img5} alt="" />
              <h2 className="text-4xl font-extrabold pb-3  ">Paso 3:</h2>
              <p className=" text-md font-medium ">
                Conectar con tu mentor asignado
              </p>
            </div>
            <div className="flex flex-col justify-items-center hover:scale-105 ">
              <img className="h-24 w-24 self-center" src={img6} alt="" />
              <h2 className="text-4xl font-extrabold pb-3  ">Paso 4:</h2>
              <p className=" text-md font-medium ">Participar del evento </p>
            </div>
          </div>
        </article>
        <article className="flex flex-col place-items-center gap-10">
          <h2 className="text-5xl font-extrabold pb-3">Próximo evento</h2>
          <div className=" w-5/6  grid  lg:grid-cols-[auto_1fr] border-black border rounded-3xl overflow-hidden ">
            <div className="h-96">
              <img className="h-full bg-contain w-full" src={img7} alt="" />
            </div>
            <div className="flex flex-col  gap-10 p-5">
              <div className="flex flex-col md:flex-row text-center gap-3 md:items-baseline md:justify-between ">
                <h2>Acelerador IT</h2>
                <p className=" text-md font-medium text-center">
                  01 de Agosto del 2024 - 14 de Octubre del 2024
                </p>
              </div>
              <p className=" text-md font-medium  ">
                <span className="font-semibold">Tipo</span>: Acelerador
              </p>
              <p className=" text-md font-medium  ">
                Este programa ofrece un paquete exclusivo de contenidos técnicos
                asincrónicos y sesiones sincrónicas de acompañamiento
                profesional, brindadas por empresas socias del Polo IT. A lo
                largo del evento, trabajarás tanto en habilidades soft como en
                hard, con el objetivo de refinar y potenciar tu perfil. Si ya
                tienes conocimientos en programación, pero aún no te sientes
                listo para dar el salto al mercado laboral en tu primera etapa
                profesional, El Acelerador es la oportunidad perfecta para
                preparar tu camino y alcanzar el siguiente nivel.
              </p>
              <p className=" text-md font-medium  ">
                Si ya tienes conocimientos en programación, pero aún no te
                sientes listo para dar el salto al mercado laboral en tu primera
                etapa profesional, El Acelerador es la oportunidad perfecta para
                preparar tu camino y alcanzar el siguiente nivel.
              </p>
            </div>
          </div>
        </article>
        <footer></footer>
      </div>
    </>
  );
}

export default Home;
