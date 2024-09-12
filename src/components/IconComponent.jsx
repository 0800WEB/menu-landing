const IconComponent = ({ iconPath, name, toUrl }) => {
  return (
    <a href={toUrl} className="cursor-pointer hover:scale-110 ease-in duration-300" target="_blank">
      <img className="size-5 sm:size-6 md:size-7" src={iconPath} alt={`Icon Social ${name}`} />
    </a>
  )
}

export default IconComponent;