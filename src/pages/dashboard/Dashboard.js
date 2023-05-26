import {DashboardContainer, DashboardHeader} from "./Dashboard.styled";
import SideBar from "../../components/sidebar/SideBar";
import MainSide from "../../components/mainside/MainSide";
import {useState} from "react";
import { removeToken } from "../../util/token";
import { useNavigate } from "react-router-dom";
import { Button, Container, Navbar } from "react-bootstrap";

const Dashboard = () => {
    const onNavigate = useNavigate()
    const [selectedSubMenu, setSelectedSubMenu] = useState("default")
    const onLogout = () => {
        removeToken()
        onNavigate('/auth/login')
    }
    return (
        <div>
            <Navbar bg="light" fixed="top" expand="m" >
                <Container>
                    <h3>e-Library</h3>
                    <Button variant="dark" onClick={onLogout} >Logout</Button>
                </Container>
            </Navbar>
            <DashboardContainer>

                <SideBar  setSelectedSubMenu={setSelectedSubMenu} />
                <MainSide selectedSubMenu={selectedSubMenu} setSelectedSubMenu={selectedSubMenu} />

            </DashboardContainer>
        </div>

    )
}

export default Dashboard