import {Image} from "react-bootstrap";
import {COLORS, FONTS, ICONS, SIZES} from "../../constants/index";

const Profile = () => {
    return (
        <div style={
            {
                marginTop: "20px",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }
        }>
            <div style={
                {
                    width: "100px",
                    height: "100px",
                    background: COLORS.quaternary,
                    borderRadius: "50%",
                    marginBottom: "20px",
                    color: COLORS.tertiary
                }
            }>
                <Image
                    src={ICONS.user}
                    width="80px"
                    height="80px"
                />

            </div>
            <div
                style={{
                    fontFamily: FONTS.cutiveMono,
                    fontWeight: 600,
                    fontSize: SIZES.M
                }}
            >
                <p style={{color: COLORS.primary}}>Ahmad Nazir Arrobi <p style={{color: COLORS.tertiary}}>librarian</p></p>
            </div>
        </div>
    )
}

export default Profile