const IconComponent = ({ iconPath, name, toUrl }) => {
  return (
    <a href={toUrl} className="cursor-pointer hover:scale-110 ease-in duration-300" target="_blank">
      <img className="size-7 sm:size-8 md:size-9" src={iconPath} alt={`Icon Social ${name}`} />
    </a>
  )
}

export default IconComponent;