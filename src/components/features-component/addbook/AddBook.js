import useAddBook from "./useAddBook"
import useFetchMutation from "../../../hook/useFetchMutation"
import {addBook} from "../../../services/bookApi"
import { getCategories } from "../../../services/categoryApi"
import StyledContainer from "../../StyledContainer"
import { StyledTitle } from "./styles"
import { Button, ButtonGroup, Form } from "react-bootstrap"
import FormInput from "../../FormInput"
import useFetchQueryCategory from "../../../hook/useFetchQueryCategory"
import {FormLabel, FormSelect } from "react-bootstrap";

const FORM_LIST = [
    { id: "name", label: "Name", type: "text", placeholder: "Enter book title" },
    { id: "author", label: "Author", type: "text", placeholder: "Enter book author"},
    { id: "thumbnail", label: "Thumbnail", type: "file", placeholder: "Choose Thumbnail book"},
    { id: "page", label: "Page", type: "number", placeholder: "Enter book page"},
    { id: "releaseYear", label: "Release Year", type: "text", placeholder: "Enter book release year"},
    { id: "language", label: "Language", type: "text", placeholder: "Enter book language"},
    { id: "stock", label: "Stock", type: "number", placeholder: "Enter book stock"},
]

const AddBook = () => {
    const {getter, setter} = useAddBook()
    const {fetchMutation} = useFetchMutation(
        addBook,
        () => console.log("Ok")
    )

    const {data} = useFetchQueryCategory(getCategories, 1)
    console.log(data.data)
    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append("name", getter.name)
        formData.append("author", getter.author)
        formData.append("thumbnail", getter.thumbnail)
        formData.append("page", getter.page)
        formData.append("releaseYear", getter.releaseYear)
        formData.append("language", getter.language)
        formData.append("stock", getter.stock)
        formData.append("categoryId", getter.categoryId)
        fetchMutation(formData)
    }

   
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
                <FormLabel>{"Category"}</FormLabel>
                <FormSelect 
                    onChange={setter.categoryId}
                    defaultValue={getter?.categoryId}
                >
                    <option value={""}>-- Category --</option>
                    {data?.data?.content?.map((item) => {
                        return (
                            <option value={item.categoryId}>{item.name}
                            </option>
                        )
                    })}
                </FormSelect>   
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