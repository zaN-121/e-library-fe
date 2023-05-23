import {MainSideContainer} from "./MainSde.styled";
import BookList from "../features-component/BookList";
import AddBook from "../features-component/addbook/AddBook";
import DeleteBook from "../features-component/deletebook/DeleteBook";
import UpdateBook from "../features-component/updatebook/UpdateBook";
import DefaultFeature from "../features-component/default/DefaultFeature";

const MainSide = ({selectedSubMenu}) => {
    let ComponentFeature

    switch (selectedSubMenu) {
        case "Search Book":
            ComponentFeature = <BookList/>
            break
        case "Add Book":
            ComponentFeature = <AddBook/>
            break
        case "Delete Book":
            ComponentFeature = <DeleteBook />
            break
        case "Update Book":
            ComponentFeature = <UpdateBook />
            break
        default:
            ComponentFeature = <DefaultFeature/>
            break
    }

    return(
        <MainSideContainer>
            {ComponentFeature}
        </MainSideContainer>
    )
}

export default MainSide