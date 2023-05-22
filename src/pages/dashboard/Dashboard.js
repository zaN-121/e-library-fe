import {DashboardContainer, DashboardHeader} from "./Dashboard.styled";
import SideBar from "../../components/sidebar/SideBar";
import MainSide from "../../components/mainside/MainSide";
import {useState} from "react";

const Dashboard = () => {
    const [selectedSubMenu, setSelectedSubMenu] = useState("default")
    return (
        <div>
            <DashboardHeader>
                <h3>e-Library</h3>
            </DashboardHeader>
            <DashboardContainer>

                <SideBar  setSelectedSubMenu={setSelectedSubMenu} />
                <MainSide selectedSubMenu={selectedSubMenu} />

            </DashboardContainer>
        </div>

    )
}

export default Dashboard