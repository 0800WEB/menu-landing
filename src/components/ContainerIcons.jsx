import iconFacebook from "../assets/svg/facebook-icon.svg"
import iconTwitter from "../assets/svg/instagram-icon.svg"
import iconInstagram from "../assets/svg/twitter-icon.svg"
import IconComponent from "./IconComponent"

const ContainerIcons = () => {
    return (
        <div className="flex gap-10 ">
            <IconComponent name="Facebook" iconPath={iconFacebook} />
            <IconComponent name="Instagram" iconPath={iconInstagram} />
            <IconComponent name="Twitter" iconPath={iconTwitter} />
        </div>
    )
}

export default ContainerIcons