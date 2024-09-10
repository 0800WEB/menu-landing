const ButtonPrimary = ({ children, widthClass }) => {
    return (
        <button className={`bg-whiteCustom rounded-radiusButton shadow-shadowButtons h-[50px]  ${widthClass}`}>
            <p className='text-[22px] font-semibold leading-[33px] text-blackPrimary'>{children}</p>
        </button>
    )
}

export default ButtonPrimary