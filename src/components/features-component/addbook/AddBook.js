import useAddBook from "./useAddBook"
import useFetchMutation from "../../../hook/useFetchMutation"
import {addBook} from "../../../services/bookApi"
import useFetchQuery from "../../../hook/useFetchQuery"
import { getCategories } from "../../../services/categoryApi"
import StyledContainer from "../../StyledContainer"
import { StyledTitle } from "./styles"
import { Button, ButtonGroup, Form } from "react-bootstrap"
import FormInput from "../../FormInput"

const FORM_LIST = [
    { id: "title", label: "Title", type: "text", placeholder: "Enter book title" },
    { id: "image", label: "Image", type: "file", placeholder: "Choose image book"},
    { id: "authorName", label: "Author", type: "text", placeholder: "Enter book author"},
    { id: "publisher", label: "Publisher", type: "text", placeholder: "Enter book publisher"},
    { id: "publicationYear", label: "Publication Year", type: "text", placeholder: "Enter book publication year"},
    { id: "stock", label: "Stock", type: "number", placeholder: "Enter book stock"},
    { id: "categoryId", label: "Category", type: "text", placeholder: "Enter book category"},
]

const AddBook = () => {
    const {getter, setter} = useAddBook()
    const {fetchMutation} = useFetchMutation(
        addBook,
        console.log("Ok")
    )

    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append("title", getter.title)
        formData.append("image", getter.image)
        formData.append("authorName", getter.authorName)
        formData.append("publisher", getter.publisher)
        formData.append("publicationYear", getter.publicationYear)
        formData.append("stock", getter.stock)
        formData.append("categoryId", getter.categoryId)
        fetchMutation(formData)
    }

    const {data} = useFetchQuery(getCategories)
    return (
        <StyledContainer>
            <StyledTitle>Add Book</StyledTitle>
            <Form>
                {FORM_LIST.map(item => (
                    <FormInput
                        label={item.label}
                        type={item.type}
                        value={getter[item.id]}
                        onChange={setter[item.id]}
                        placeholder={item.placeholder}
                        key={item.id}
                    />
                )) }
                <ButtonGroup className="pt-3">
                    <Button variant="success" onClick={submitHandler} disabled={getter.isDisable}>
                        Submit
                    </Button>
                </ButtonGroup>
            </Form>
        </StyledContainer>
    )
}

export default AddBook