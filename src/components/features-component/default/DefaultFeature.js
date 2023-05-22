import Card from "./component/card/Card";
import {CardContainer, DefaultContainer} from "./DefaultFeature.styled";
import Lottie from "lottie-react";
import librarian from '../../../assets/librarian.json'

const DefaultFeature = () => {
    return (
        <DefaultContainer>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center"
                }}>
                    <h1>Welcome to Dashboard</h1>
                    <h3
                        style={{
                            color: "gray"
                        }}
                    >Nice to meet you mr. Ahmad</h3>
                </div>
                <Lottie animationData={librarian} autoPlay={true} style={{width: "30%", height:"30%"}}/>
            </div>

            <CardContainer>
                {[1,2,3].map(el => (
                    <Card/>
                ))}
            </CardContainer>
        </DefaultContainer>
    )
}

export default DefaultFeature