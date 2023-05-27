import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetchQuery from "../hook/useFetchQuery";
import StyledContainer from "../components/StyledContainer";
import { Button } from "react-bootstrap";
import EmptyState from "../components/EmptyState";
import Pagination from "../components/Pagination"
import {Levels} from "react-activity";

export default (ListComponent, opts) => {
    return (props) => {
        const navigate = useNavigate()
        const {label, routeToAdd, query} = opts
        const [currentPage, setCurrentPage] = useState(1)
        const {data, loading, refetch} = useFetchQuery(query, currentPage)
        if (loading) {
            return (
                <div style={{height: "100%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Levels color={"red"} size={80}/>
                    {/*<p className="lead">loading...</p>*/}
                </div>

            )
        }
        return (
            <>
                <StyledContainer>
                    {data?.data?.content?.length > 0 ? (
                    <ListComponent data={data?.data?.content} refetch={refetch} {...props} />
                    ) : <EmptyState text={`Data ${label} kosong...`} /> }
                </StyledContainer>
                <Pagination 
                    totalPage={data?.data?.totalPages}
                    onChangeCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                />
            </>
        )
    }
}