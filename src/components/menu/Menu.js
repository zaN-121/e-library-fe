import {ICONS, SIZES} from "../../constants/index";
import {MENU} from "../../constants/dashboard-menu";
import {Image} from "react-bootstrap";
import SubMenu from "../submenu/SubMenu";
import {MenuButton} from "./Menu.styled";

const Menu = ({menu, selectedMenu, setSelectedMenu, setSelectedSubMenu}) => {
    return (
        <div>
            <MenuButton  onClick={() => {
                if ( selectedMenu == menu.name) {
                    setSelectedMenu("")
                    setSelectedSubMenu("default")
                } else {
                    setSelectedMenu(menu.name)
                    setSelectedSubMenu("Search Book")
                }
            }}>
                <Image
                    src={menu.icon}
                    width={SIZES.L}
                    height={SIZES.L}
                />
                <p>{menu.name}</p>
            </MenuButton>
            {selectedMenu === menu.name ?  menu.subMenu.map(e => (
                <SubMenu item={e} setSelectedSubMenu={setSelectedSubMenu}/>
            )) : false}
        </div>
    )
}

export default Menu