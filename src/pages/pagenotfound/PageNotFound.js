import { useLocation } from "react-router-dom"

const PageNotFound = () => {
    const location = useLocation()
    return (
        <>
            <h3>No Match For <code>{location.pathname}</code></h3>
        </>
    )
}

export default PageNotFound