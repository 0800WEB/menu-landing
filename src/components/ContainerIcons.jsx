import iconFacebook from "../assets/svg/facebook-icon.svg"
import iconTwitter from "../assets/svg/instagram-icon.svg"
import iconWhatsapp from "../assets/svg/whatsapp-icon.svg"
import IconComponent from "./IconComponent"

const ContainerIcons = () => {
    return (
        <div className="flex gap-4 sm:gap-7 md:gap-10 items-center">
            <IconComponent name="Whatsapp" iconPath={iconWhatsapp} toUrl={"https://wa.link/68hah7"}/>
            {/* <IconComponent name="Facebook" iconPath={iconFacebook} toUrl={"https://www.facebook.com/0800web"} />
            <IconComponent name="Twitter" iconPath={iconTwitter} toUrl={"https://www.instagram.com/0800web/"}/> */}
        </div>
    )
}

export default ContainerIcons