import { useEffect, useState } from "react"

const useFetchQueryCategory = (query, params) => {
    const [data, setData] = useState({})
    const [fetching, setFetching] = useState(true)

    const refetch = () => {
        setFetching(true)
    }


    useEffect(() => {
        const fetchQuery = async () => {
            console.log("masuk get category")
            try {
                setFetching(true)
                const {data: response} = await query(params)
                console.log("apa")
                console.log(response)
                setData(response)
            } catch (error) {
                console.error(error)
            } finally {
                setFetching(false)
            }
        }
        if (fetching) fetchQuery()
    }, [fetching])

    return {
        data,
        loading: fetching,
        refetch
    }
}

export default useFetchQueryCategory