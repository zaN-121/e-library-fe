import useFetchMutation from "../../../hook/useFetchMutation"
import {deleteBookById, getBooks, updateBookById} from "../../../services/bookApi"
import BookItem from "./components/index"
import withPaginationList from "../../../hoc/withPaginationList"
import { Col, Row, Modal, Button, Form, FormSelect} from "react-bootstrap";
import { useState } from "react";
import useFetchQueryCategory from "../../../hook/useFetchQueryCategory";
import { getCategories } from "../../../services/categoryApi";

const List = ({data, refetch}) => {
    const {fetchMutation} = useFetchMutation(deleteBookById, refetch)
    const {fetchMutation: update} = useFetchMutation(updateBookById)
    const [showModal, setShowModal] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        author: "",
        thumbnail: null,
        page: 0,
        releaseYear: "",
        language: "",
        stock: 0,
        category: ""
    });

    
    const {data: categoryData} = useFetchQueryCategory(getCategories, 1)
    // console.log("Category:", categoryData);

    const onEdit = (book) => {
        setSelectedBook(book);
        setFormData({
            name: book.name,
            author: book.author,
            thumbnail: book.thumbnail,
            page: book.page,
            releaseYear: book.releaseYear,
            language: book.language,
            stock: book.stock,
            category:  {
                name: book.category.name,
                categoryId: book.category.categoryId
            }
        });
        setShowModal(true);
    }

    const onDelete = (id) => () => {
        const isOk = window.confirm("Are you sure for deleted this book?");
        if (isOk) {
            fetchMutation(id)
        }
    }

    const handleModalClose = () => {
        setShowModal(false);
      }
    
    const handleModalSave = () => {
        const updatedBook = {
            bookId: selectedBook.bookId,
            name: formData.name,
            author: formData.author,
            thumbnail: formData.thumbnail,
            page: formData.page,
            releaseYear: formData.releaseYear,
            language: formData.language,
            stock: formData.stock,
            categoryId: formData.category.categoryId
        };
        // const reader = new FileReader()
        // reader.onload = () => {
        //     const base64Thumbnail = reader.result
        //     update({
        //         ...updatedBook,
        //         thumbnail: base64Thumbnail
        //     })
        // }
        // reader.readAsDataURL(thumbnail)
        // delete updatedBook.thumbnail
        update(updatedBook)
        // // Call the function to update the book data
        // updateBookById(updatedBook)
        // .then(() => {
        //     // Reset the form and close the modal after successful update
            // setFormData({
            //     title: "",
            //     image: null,
            //     authorName: "",
            //     publisher: "",
            //     publicationYear: "",
            //     stock: 0,
            //     category: ""
            // });
            setShowModal(false);
        //     // Refetch the book data to update the list
        //     refetch();
        // })
        // .catch((error) => {
        //     // Handle any errors if there are any
        //     console.log("Error updating book:", error);
        // });
    }

    const handleInputChange = (e) => {
        const { name, value, type, files} = e.target;
        if (type === "file") {
            setFormData({
                ...formData,
                [name]: files[0] 
            });
        } else {
            if (name === "category") {
                setFormData({
                    ...formData,
                    [name]: {
                        name: e.target[e.target.selectedIndex].innerText,
                        categoryId: e.target.value
                    }
                })
            }
            setFormData({
                ...formData,
                [name]: value
            });
        }
    }

    return (
        <Row>
            {data?.map((item, index) => (
                <Col xs={12} sm={6} md={4}>
                    <BookItem
                        key={item.bookId} 
                        data={item}
                        onDelete={onDelete(item.bookId)}
                        onNavigateToEdit={() => onEdit(item)}
                    />
                </Col>
            ))}


        <Modal show={showModal} onHide={handleModalClose}>
            <Modal.Header closeButton>
            <Modal.Title>Edit Book</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Author</Form.Label>
                    <Form.Control
                        type="text"
                        name="author"
                        value={formData.author}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Page</Form.Label>
                    <Form.Control
                        type="number"
                        name="page"
                        value={formData.page}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Release Year</Form.Label>
                    <Form.Control
                        type="text"
                        name="releaseYear"
                        value={formData.releaseYear}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Language</Form.Label>
                    <Form.Control
                        type="text"
                        name="language"
                        value={formData.language}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Stock</Form.Label>
                    <Form.Control
                        type="number"
                        name="stock"
                        value={formData.stock}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Category</Form.Label>
                    <FormSelect 
                    onChange={handleInputChange}
                    defaultValue={formData.category}
                    onClick={(e) => console.log(e.target[e.target.selectedIndex].innerText)}
                    >
                    <option value={""}>{formData.category.name}</option>
                    {categoryData?.data?.content?.map((item) => {
                        if (item.name === formData.category.name) return false 
                        return (
                            <option value={item.categoryId}>{item.name}
                            </option>
                        )
                    })}
                </FormSelect> 
            {/* <FormSelect
                name="category"
                value={formData.category}
                // onChange={handleInputChange}
            >
                <option value="">Select category</option>
                {categoryData.map((category) => (
                    <option key={category.categoryId} value={category.categoryId}>
                    {category.name}
                    </option>
                ))}
            </FormSelect> */}
                </Form.Group>
                <Form.Group>
                <Form.Label>Thumbnail</Form.Label>
                    <Form.Control
                        type="file"
                        name="thumbnail"
                        onChange={handleInputChange}
                    />
                </Form.Group>
            </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleModalClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleModalSave}>
                    Save Changes
                </Button>
            </Modal.Footer>
      </Modal>


        </Row>
    )
}

export default withPaginationList(List, {
    label: "Book",
    query: getBooks
})