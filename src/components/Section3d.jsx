import cell3d from "../assets/images/cell3d.png";
import snack from "../assets/images/snack.png";
import potatoes from "../assets/images/potatoes.png";
import sushi from "../assets/images/sushi.png";
import FloatingActionBar from "./FloatingActionBar";
import "../styles/animationLoop.css"

export default function Section3d() {
  return (
    <div id="section-3d" className="h-dvh border p-4 md:h-screen relative ">
      <div className="h-full flex flex-col pt-14 md:pt-24 gap-10 md:gap-0 items-center md:items-start md:justify-between [&_section]:flex [&_section]:flex-col [&_section]:gap-4 relative">
        <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between h-full w-full">
          <div className="flex flex-col gap-8 md:gap-[0px] [&_h2]:font-extrabold">
            <section className="max-w-xl [&_p]:text-pretty [&_p]:leading-[19px] md:[&_p]:leading-8 [&_p]:tracking-custom-3p [&_p]:text-xs [&_p]:sm:text-base [&_p]:md:text-lg [&_p]:lg:text-lg [&_p]:xl:text-xl">
              <h2 className="leading-8 2xl:text-nowrap text-2xl sm:text-4xl md:text-[2.5rem] lg:text-5xl xl:text-6xl md:leading-[3.125rem] lg:leading-[4.25rem]">
                Experiencia de <span className="text-highlight">Realidad Aumentada</span>
              </h2>
              <p className="max-w-xl racking-custom-3p text-pretty">
                Lleva la experiencia gastronómica al siguiente nivel con nuestra propuesta de realidad aumentada.
                Usando tu smartphone, podrás visualizar en 3D los platillos en tu mesa, permitiéndote explorar de manera interactiva lo que puedes esperar de cada opción.
                ¡Imagina poder ver cómo luce tu comida antes de pedirla!
              </p>
            </section>
          </div>
          <div className="flex justify-center md:justify-end max-w-96 md:max-w-[34rem] h-full w-full md:mt-10">
            <img className="w-full h-[95%] pt-5 md:pt-0  md:size-11/12 animation" src={cell3d} alt="Cell 3D" />
          </div>
        </div>

        <div className="hidden md:block 2xl:h-[70%] 2xl:w-[70%] left-[10%] absolute">
          <div className="hidden xl:block absolute bottom-0 md:max-w-[25%] ">
            <img
              src={sushi}
              alt="3D sushi"
              layout="responsive"
              width={270}
              height={229}
            />
          </div>
          <div className="hidden xl:block absolute bottom-0 left-1/2 md:max-w-[25%] -translate-x-5">
            <img
              src={potatoes}
              alt="3D potatoes"
              layout="responsive"
              width={356}
              height={229}
            />
          </div>
          <div className="hidden xl:block absolute bottom-[15%] right-1/2 md:max-w-[25%] ">
            <img
              src={snack}
              alt="3D snack"
              layout="responsive"
              width={319}
              height={220}
            />
          </div>
        </div>
      </div>
      <FloatingActionBar />
    </div>
  );
}