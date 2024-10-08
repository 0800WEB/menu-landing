import { useState, useEffect } from 'react';
import foodBrand from '../assets/svg/food-brand.svg';
import ButtonPrimary from './ButtonPrimary';
import homeIcon from '../assets/svg/home-icon.svg';
import cameraIcon from '../assets/svg/camera-icon.svg';
import VideoModal from './modalVideo';

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

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (

        <div
            className={`${isScrolled ? 'h-10' : 'h-28'} ${isModalOpen ? 'z-[60]' :'z-50'}
             bg-blackPrimary sticky top-0 flex justify-between items-center px-4 sm:px-16 md:px-20 lg:pl-[7.2rem] lg:pr-[8.1rem]  transition-all duration-300 ease-in-out
             `}
        >
            <div>
                <img className={`${isScrolled ? 'w-[139px] h-[40px]' : 'md:w-[232px] md:h-[50px]'}`} src={foodBrand} alt="Icon Brand" />
            </div>
            <div className='hidden md:flex gap-20'>
                {isScrolled ? (
                    <>
                        <a href="#section-hero" ><img src={homeIcon} alt="Home Icon" className="cursor-pointer" /></a>
                        <button onClick={() => openModal()}>
                            <img src={cameraIcon} alt="Camera Icon" className="cursor-pointer" />
                        </button>
                    </>
                ) : (
                    <>
                        <ButtonPrimary children={"Inicio"} widthClass={"w-[100px]"} />
                        <button onClick={() => openModal()}>
                            <p className='font-semibold text-[22px] leading-[33px] text-whiteCustom'>
                                Miralo en vivo
                            </p>
                        </button>
                    </>
                )}
            </div>
            <div className="flex gap-6 md:hidden">
                <button onClick={() => openModal()}>
                    <img src={cameraIcon} alt="Camera Icon" />
                </button>
                <a href="#section-hero" ><img src={homeIcon} alt="Home Icon" className="cursor-pointer" /></a>
            </div>
            <VideoModal isOpen={isModalOpen} onClose={() => closeModal()} />
        </div>
    );
};

export default NavBar;
