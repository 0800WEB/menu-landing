const ButtonPrimary = ({ children, widthClass, action }) => {
    return (
        <button onClick={()=> action() } className={`bg-whiteCustom rounded-radiusButton drop-shadow-shadowButtons h-10 md:h-[3.15rem]  ${widthClass} hover:-translate-y-1 hover:translate-x-1 ease-in-out duration-500`}>
            <p className='text-sm md:text-xl font-semibold leading-8 text-blackPrimary'>{children}</p>
        </button>
    )
}

export default ButtonPrimary