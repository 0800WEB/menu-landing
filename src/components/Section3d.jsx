
Close
Section3d

Fork
Publish

Preview

Section3d.tsx


import React from "react";
import Image from "next/image";
import cell3d from "../assets/images/cell3d.png";
import snack from "../assets/images/snack.png";
import potatoes from "../assets/images/potatoes.png";
import sushi from "../assets/images/sushi.png";
import ButtonPrimary from './ButtonPrimary';

export default function Section3d() {
  return (
    <div className="min-h-screen p-4 md:p-8 bg-gray-100">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          {/* Texto */}
          <div className="w-full md:w-2/3 mb-12 text-center">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
              SABOR A UN <span className="text-[#FF6B00]">CLICK</span>
            </h2>
            <p className="text-lg mb-8">
              Nuestra app te permite explorar platillos únicos en un entorno de
              realidad virtual, donde la creatividad no tiene límites.
              Sumérgete en un mundo lleno de sabores y presentaciones
              espectaculares, y vive la experiencia de conocer tus platillos
              antes de que lleguen a tu mesa.
            </p>
            <ButtonPrimary widthClass="w-[100px]">Inicio</ButtonPrimary>
          </div>

          {/* Imágenes en triángulo */}
          <div className="relative w-full md:w-2/3 h-[500px]">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 z-20">
              <Image
                src={cell3d}
                alt="Smartphone with app"
                layout="responsive"
                width={400}
                height={400}
              />
            </div>
            <div className="absolute bottom-0 left-0 w-1/3 z-10 transform -translate-x-1/4">
              <Image
                src={sushi}
                alt="3D sushi"
                layout="responsive"
                width={200}
                height={200}
              />
            </div>
            <div className="absolute bottom-0 right-0 w-1/3 z-10 transform translate-x-1/4">
              <Image
                src={potatoes}
                alt="3D potatoes"
                layout="responsive"
                width={200}
                height={200}
              />
            </div>
            <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-1/3 z-30">
              <Image
                src={snack}
                alt="3D snack"
                layout="responsive"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

