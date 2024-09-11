import { useState, useEffect } from 'react';
import foodBrand from '../assets/svg/food-brand.svg';
import ButtonPrimary from './ButtonPrimary';
import homeIcon from '../assets/svg/home-icon.svg';
import cameraIcon from '../assets/svg/camera-icon.svg';

const NavBar = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className={`${isScrolled ? 'h-[40px]' : 'h-[110px]'
                } bg-blackPrimary sticky top-0 z-50 flex justify-between items-center pl-[115px] pr-[130px] transition-all duration-300 ease-in-out`}
        >
            <div>
                <img className={`${isScrolled ? 'w-[139px] h-[40px]' : 'w-[232px] h-[50px]'}`} src={foodBrand} alt="Icon Brand" />
            </div>
            <div className='flex gap-20'>
                {isScrolled ? (
                    <>
                        <img src={cameraIcon} alt="Camera Icon" />
                        <img src={homeIcon} alt="Home Icon" />
                    </>
                ) : (
                    <>
                        <ButtonPrimary children={"Inicio"} widthClass={"w-[100px]"} />
                        <button>
                            <p className='font-semibold text-[22px] leading-[33px] text-whiteCustom'>
                                Miralo en vivo
                            </p>
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default NavBar;
