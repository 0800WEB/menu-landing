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
            <div className="flex gap-[5.46px]">
                {[...Array(fullStars)].map((_, index) => (
                    <img
                        key={`full-${index}`}
                        src={starOrange}
                        alt="Full Star"
                        className="lg:w-[22px] lg:h-[20.5px]"
                    />
                ))}
                {hasHalfStar && (
                    <img
                        key="half"
                        src={starOrange}
                        alt="Half Star"
                        className="lg:w-[22px] lg:h-[20.5px]"
                        style={{ clipPath: 'inset(0 50% 0 0)' }}
                    />
                )}
                {[...Array(emptyStars)].map((_, index) => (
                    <img
                        key={`empty-${index}`}
                        src={starGray}
                        alt="Empty Star"
                        className="lg:w-[22px] lg:h-[20.5px]"
                    />
                ))}
            </div>
        );
    };

    return (
        <div className="flex flex-col gap-[11px] drop-shadow-shadowCustom1">
            <div className="flex">
                {renderStars(rating)}
            </div>
            <div className="bg-whiteCustom w-[350px] h-[110px] rounded-radiusCardReview flex items-center gap-[10px] px-[15px]">
                <img className="size-[90px] rounded-full object-cover shrink-0" src={photoProfile} alt="Profile Photo" />
                <p className="text-[11px] leading-[16.5px]">{review}</p>
            </div>
        </div>
    );
};

export default CardReview;
