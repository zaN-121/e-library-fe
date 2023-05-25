import { useEffect, useState } from "react"
import { onChangeFile, onChangeText } from "../../../util/eventHandlers"

const useAddBook = () => {
    const [name, setName] = useState("")
    const [author, setAuthor] = useState("")
    const [thumbnail, setThumbnail] = useState()
    const [page, setPage] = useState(0)
    const [releaseYear, setReleaseYear] = useState("")
    const [language, setLanguage] = useState("")
    const [stock, setStock] = useState(0)
    const [categoryId, setCategoryId] = useState("")
    const [isDisable, setDisable] = useState(true);

    const getter = {name, author, thumbnail, page, releaseYear, language, stock, categoryId, isDisable}
    const setter = {
        name: onChangeText(setName),
        author: onChangeText(setAuthor),
        thumbnail: onChangeFile(setThumbnail),
        page: onChangeText(setPage),
        releaseYear: onChangeText(setReleaseYear),
        language: onChangeText(setLanguage),
        stock: onChangeText(setStock),
        categoryId: onChangeText(setCategoryId)
    }

    useEffect(() => {
        if (name && author && thumbnail && page && releaseYear && language && stock && categoryId) {
            setDisable(false)
        } else {
            setDisable(true)
        }
    }, [name, author, thumbnail, page, releaseYear, language, stock, categoryId])

    return {
        getter, setter
    }
}

export default useAddBook