import useFetchMutation from "../../../hook/useFetchMutation"
import {deleteBookById, getBooks, updateBookById} from "../../../services/bookApi"
import BookItem from "./components/index"
import withPaginationList from "../../../hoc/withPaginationList"
import { Col, Row, Modal, Button, Form, FormSelect } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useFetchQueryCategory from "../../../hook/useFetchQueryCategory";
import { getCategories } from "../../../services/categoryApi";

const List = ({data, refetch}) => {
    const navigate = useNavigate()
    const {fetchMutation} = useFetchMutation(deleteBookById, refetch)
    const {fetchMutation: update} = useFetchMutation(updateBookById)
    const [showModal, setShowModal] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);
    const [formData, setFormData] = useState({
        title: "",
        image: null,
        authorName: "",
        publisher: "",
        publicationYear: "",
        stock: 0,
        category: ""
    });

    const {data: categoryData} = useFetchQueryCategory(getCategories, 1)
    console.log("Category:", categoryData);

    const onEdit = (book) => {
        setSelectedBook(book);
        setFormData({
            title: book.title,
            image: book.image,
            authorName: book.authorName,
            publisher: book.publisher,
            publicationYear: book.publicationYear,
            stock: book.stock,
            category: book.category.categoryId
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
            title: formData.title,
            image: formData.image,
            authorName: formData.authorName,
            publisher: formData.publisher,
            publicationYear: formData.publicationYear,
            stock: formData.stock,
            category: formData.category.categoryId
        };
        delete updatedBook.image
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
        const { name, value, type, files } = e.target;
        if (type === "file") {
            setFormData({
                ...formData,
                [name]: files[0] 
            });
        } else {
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
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Author</Form.Label>
                    <Form.Control
                        type="text"
                        name="authorName"
                        value={formData.authorName}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Publisher</Form.Label>
                    <Form.Control
                        type="text"
                        name="publisher"
                        value={formData.publisher}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Publication Year</Form.Label>
                    <Form.Control
                        type="text"
                        name="publicationYear"
                        value={formData.publicationYear}
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
                    <Form.Control
                        type="text"
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                    />
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
                <Form.Label>Image</Form.Label>
                    <Form.Control
                        type="file"
                        name="image"
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