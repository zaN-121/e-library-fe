import React, { useState } from "react"
import { Button, ButtonGroup, Card, Modal } from "react-bootstrap"

const BookItem = ({data, onNavigateToEdit, onDelete}) => {
    const [showModal, setShowModal] = useState(false)
    const handleClose = () => setShowModal(false)
    const handleShow = () => setShowModal(true)
    return (
        < >
            <Card style={{ width: '18rem' }} className="mb-3 p-3">
                <Card.Img variant="top" src="https://placehold.co/40x40" />
                <Card.Body>
                    <Card.Title className="text-truncate">{data.title}</Card.Title>
                    <Card.Text>{data.authorName}</Card.Text>
                </Card.Body>
                <ButtonGroup>
                    <Button variant="outline-success" onClick={handleShow} size="m">Detail</Button>
                    <Button variant="outline-primary" onClick={onNavigateToEdit} size="m">Edit</Button>
                    <Button variant="outline-danger" onClick={onDelete} size="m">Delete</Button>
                </ButtonGroup>
            </Card>

            <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Detail Buku</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Title: {data.title}</p>
                <p>Author: {data.authorName}</p>
                <p>Publisher: {data.publisher}</p>
                <p>Publication Year: {data.publicationYear}</p>
                <p>Stock: {data.stock}</p>
                <p>Category: {data.category.name}</p>
                {/* Tambahkan informasi tambahan atau detail buku di sini */}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Tutup</Button>
            </Modal.Footer>
        </Modal>
        </>   
    )
}

export default BookItem