import { useNavigate } from "react-router-dom";
import useFetchMutation from "../../../hook/useFetchMutation"
import {deleteBookById, getBooks} from "../../../services/bookApi"
import BookItem from "./components/index"
import withPaginationList from "../../../hoc/withPaginationList"
import { Col, Row } from "react-bootstrap";

const List = ({data, refetch}) => {
    const navigate = useNavigate()
    const {fetchMutation} = useFetchMutation(deleteBookById, refetch)
    const onNavigateToEdit = (id) => () => {
        navigate();
    }

    const onDelete = (id) => () => {
        const isOk = window.confirm("Anda yakin ingin menghapus course ini?");
        if (isOk) {
            fetchMutation(id)
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
                        onNavigateToEdit={onNavigateToEdit(item.bookId)}
                        onDetail={{}}
                    />
                </Col>
            ))}
        </Row>
    )
}

export default withPaginationList(List, {
    label: "Book",
    query: getBooks
})