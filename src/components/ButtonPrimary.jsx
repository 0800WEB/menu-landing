const ButtonPrimary = ({ children, widthClass }) => {
    return (
        <button className={`bg-whiteCustom rounded-radiusButton drop-shadow-shadowButtons h-10 md:h-[50px]  ${widthClass}`}>
            <p className='text-sm md:text-xl font-semibold leading-8 text-blackPrimary'>{children}</p>
        </button>
    )
}

export default ButtonPrimary