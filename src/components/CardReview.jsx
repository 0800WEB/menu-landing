import React from 'react';
import starOrange from "../assets/svg/star-orange.svg";
import starGray from "../assets/svg/star-gray.svg";

const CardReview = ({ photoProfile, review, rating }) => {

    // Función para renderizar las estrellas según el rating
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating); // Estrellas completas
        const hasHalfStar = rating % 1 >= 0.5; // Verifica si hay medio estrella
        const emptyStars = 5 - Math.ceil(rating); // Estrellas vacías

        return (
            <div className="flex gap-[0.35rem] [&_img]:size-[0.6rem] [&_img]:md:size-full [&_img]:md:max-w-[1.38rem] [&_img]:md:max-h-5 ">
                {[...Array(fullStars)].map((_, index) => (
                    <img
                        key={`full-${index}`}
                        src={starOrange}
                        alt="Full Star"
                    />
                ))}
                {hasHalfStar && (
                    <img
                        key="half"
                        src={starOrange}
                        alt="Half Star"
                        style={{ clipPath: 'inset(0 50% 0 0)' }}
                    />
                )}
                {[...Array(emptyStars)].map((_, index) => (
                    <img
                        key={`empty-${index}`}
                        src={starGray}
                        alt="Empty Star"
                    />
                ))}
            </div>
        );
    };

    return (
        <div className="flex flex-col gap-3 drop-shadow-shadowCustom1">
            <div className="flex">
                {renderStars(rating)}
            </div>
            <div className="bg-whiteCustom w-36 h-[3.7rem] md:max-w-[22rem] md:w-full md:h-full md:max-h-28 rounded-radiusCardReview flex items-center gap-3 px-4 py-3">
                <img className="size-9 md:size-16 lg:size-20 xl:size-[5.5rem] rounded-full object-cover shrink-0" src={photoProfile} alt="Profile Photo" />
                <p className="text-[5px] md:text-xs md:leading-[16.5px]">{review}</p>
            </div>
        </div>
    );
};

export default CardReview;
