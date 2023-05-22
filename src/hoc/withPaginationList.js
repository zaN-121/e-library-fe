import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetchQuery from "../hook/useFetchQuery";
import StyledContainer from "../components/StyledContainer";
import { Button } from "react-bootstrap";
import EmptyState from "../components/EmptyState";
import Pagination from "../components/Pagination"

export default (ListComponent, opts) => {
    return (props) => {
        const navigate = useNavigate()
        const {label, routeToAdd, query} = opts
        const [currentPage, setCurrentPage] = useState(1)
        const {data, loading, refetch} = useFetchQuery(query, currentPage)

        if (loading) {
            return (
                <StyledContainer>
                    <p className="lead">loading...</p>
                </StyledContainer>
            )
        }

        return (
            <>
                <StyledContainer>
                    <Button variant="success" onClick={() => navigate(routeToAdd)}>Add {label} </Button>
                    {data?.data?.length > 0 ? (
                    <ListComponent data={data?.data} refetch={refetch} {...props} />
                    ) : <EmptyState text={`Data ${label} kosong...`} /> }
                </StyledContainer>
                <Pagination 
                    totalPage={data?.totalPage}
                    onChangeCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                />
            </>
        )
    }
}