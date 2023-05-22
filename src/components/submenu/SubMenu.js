import {Image} from "react-bootstrap";
import {SubMenuButton} from "./SubMenu.styled";
import {SIZES} from "../../constants/index";

const SubMenu = ({item, setSelectedSubMenu}) => {
    return (
        <SubMenuButton onClick={() => setSelectedSubMenu(item.name) }>
            <Image
                src={item.icon}
                width={SIZES.L}
                height={SIZES.L}
            />
            <p style={{marginLeft: "3px"}}>{item.name}</p>
        </SubMenuButton>
    )
}

export default SubMenu