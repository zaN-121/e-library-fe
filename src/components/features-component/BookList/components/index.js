import React from "react"
import {StyledListItem} from "./styles"
import { Button, ButtonGroup, Card, Col, Image, Row, Table } from "react-bootstrap"

const BookItem = ({data, onNavigateToEdit, onDelete}) => {
    console.log("Book: " + data.authorName)
    return (
        < >
            <Card style={{ width: '18rem' }} className="mb-3">
                <Card.Img variant="top" src="https://placehold.co/40x40" />
                <Card.Body>
                    <Card.Title className="text-truncate">{data.title}</Card.Title>
                    <Card.Text>{data.authorName}</Card.Text>
                </Card.Body>
            </Card>
        </>   
    )
}

export default BookItem