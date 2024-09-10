import foodBrand from '../assets/svg/food-brand.svg'
import ButtonPrimary from './ButtonPrimary'
const NavBar = () => {
    return (
        <div className="h-[150px] bg-blackPrimary flex justify-between items-center pl-[115px] pr-[130px]">
            <div>
                <img className='w-[232px] h-[50px]' src={foodBrand} alt="Icon Brand" />
            </div>
            <div className='flex gap-20'>
                <ButtonPrimary children={"Inicio"} widthClass={"w-[100px]"}/>
                <button>
                    <p className='font-semibold text-[22px] leading-[33px] text-whiteCustom'>Miralo en vivo</p>
                </button>
            </div>
        </div>
    )
}

export default NavBar