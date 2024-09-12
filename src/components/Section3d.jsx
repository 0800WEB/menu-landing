import cell3d from "../assets/images/cell3d.png";
import snack from "../assets/images/snack.png";
import potatoes from "../assets/images/potatoes.png";
import sushi from "../assets/images/sushi.png";
import FloatingActionBar from "./FloatingActionBar";

export default function Section3d() {
  return (
    <div id="section-3d"  className="h-dvh border border-yellow-500 p-4 md:h-screen relative ">
      <div className="h-full flex flex-col  gap-10 md:gap-0 md:flex-row items-center md:items-start md:justify-between pt-6 [&_section]:flex [&_section]:flex-col [&_section]:gap-4 relative">
        <div className="flex flex-col gap-8 md:gap-[0px] md:pt-[86px] [&_h2]:font-extrabold">
          <section className="max-w-xl">
            <h2 className="text-2xl sm:text-4xl md:text-[2.5rem] lg:text-5xl xl:text-6xl leading-[3.125rem] lg:leading-[4.25rem]">
              SABOR A UN <span className="text-highlight">CLICK</span>
            </h2>
            <p className="max-w-xl text-xl leading-8 tracking-custom-3p text-pretty">
              {" "}
              Nuestra app te permite explorar platillos únicos en un entorno de
              realidad virtual, donde la creatividad no tiene límites. Sumérgete
              en un mundo lleno de sabores y presentaciones espectaculares, y
              vive la experiencia de conocer tus platillos antes de que lleguen
              a tu mesa.
            </p>
          </section>
        </div>
        <div className="flex justify-center md:justify-end max-w-60 md:max-w-full h-full md:mt-10">
          <img className=" size-11/12" src={cell3d} alt="Cell 3D" />
        </div>

        <div className="absolute bottom-0  w-1/4 z-10 transform ">
          <img
            src={sushi}
            alt="3D sushi"
            layout="responsive"
            width={270}
            height={229}
          />
        </div>
        <div className="absolute bottom-[-35px] left-1/2 z-10 w-1/4 transform -translate-x-5">
          <img
            src={potatoes}
            alt="3D potatoes"
            layout="responsive"
            width={356}
            height={229}
          />
        </div>
        <div className="absolute top-[52%] right-1/2 w-1/4 z-10 transform ">
          <img
            src={snack}
            alt="3D snack"
            layout="responsive"
            width={319}
            height={220}
          />
        </div>
      </div>
      <FloatingActionBar />
    </div>
  );
}