import {SideBarContainer} from "./SideBar.styled";
import Profile from "../profile/Profile";
import {MENU} from "../../constants/dashboard-menu";
import Menu from "../menu/Menu";
import {useState} from "react";

const SideBar = ({setSelectedSubMenu}) => {
    const [selectedMenu, setSelectedMenu] = useState()
    return (
        <SideBarContainer>
            <Profile/>
            <div style={{marginTop: "30px"}}>
                {MENU.map(el => (
                    <Menu
                        menu={el}
                        selectedMenu={selectedMenu}
                        setSelectedMenu={setSelectedMenu}
                        setSelectedSubMenu={setSelectedSubMenu}
                    />
                ))}
            </div>

        </SideBarContainer>
    )
}

export default SideBar