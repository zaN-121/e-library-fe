import {ICONS} from "../../constants";
import {Image} from "react-bootstrap";

const Search = () => {
    return (
        <div>
            <h1>Search Bar </h1>
            <Image src={ICONS.filter}/>
            <Image src={ICONS.search}/>
        </div>
    )
}

export default Search