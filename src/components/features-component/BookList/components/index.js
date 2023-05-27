import React, { useState } from "react"
import { Button, ButtonGroup, Card, Modal } from "react-bootstrap"
import {Thumbnail} from "./styles";

const BookItem = ({data, onNavigateToEdit, onDelete}) => {
    const [showModal, setShowModal] = useState(false)
    const handleClose = () => setShowModal(false)
    const handleShow = () => setShowModal(true)
    return (
        < >
            <Card style={{ width: '18rem' }} className="mb-3 p-3">
                {/*<Card.Img variant="top" src={data.thumbnail} style={{height: "40px", width: "100%"}}/>*/}
                {/*<div style={{*/}
                {/*    height: "150px",*/}
                {/*    width: "100%",*/}
                {/*    backgroundImage: `url(${data.thumbnail})`,*/}
                {/*    backgroundSize: "contain",*/}
                {/*    backgroundRepeat: "no-repeat"*/}
                {/*}}></div>*/}
                <div style={{
                    height: "150px",
                    width: "100%"}}
                >
                    <Thumbnail
                        image={data.thumbnail}
                    />
                </div>
                <Card.Body>
                    <Card.Title className="text-truncate">{data.name}</Card.Title>
                    <Card.Text>{data.author}</Card.Text>
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
                <p>Book Name: {data.name}</p>
                <p>Author: {data.author}</p>
                <p>Page: {data.page}</p>
                <p>Release Year: {data.releaseYear}</p>
                <p>Language: {data.language}</p>
                <p>Stock: {data.stock}</p>
                <p>Category: {data.category.name}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Tutup</Button>
            </Modal.Footer>
        </Modal>
        </>   
    )
}

export default BookItem