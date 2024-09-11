const IconComponent = ({iconPath, name}) => {
  return (
    <img className="size-5 sm:size-[23px] md:size-[25px]" src={iconPath} alt={`Icon Social ${name}`} />
  )
}

export default IconComponent;