import { useEffect, useState } from "react"
import { onChangeFile, onChangeText } from "../../../util/eventHandlers"

const useAddBook = () => {
    const [title, setTittle] = useState("")
    const [image, setImage] = useState()
    const [authorName, setAuthorName] = useState("")
    const [publisher, setPublisher] = useState("")
    const [publicationYear, setPublicationYear] = useState("")
    const [stock, setStock] = useState(0)
    const [categoryId, setCategoryId] = useState("")
    const [isDisable, setDisable] = useState(true);

    const getter = {title, image, authorName, publisher, publicationYear, stock, categoryId, isDisable}
    const setter = {
        title: onChangeText(setTittle),
        image: onChangeFile(setImage),
        authorName: onChangeText(setAuthorName),
        publisher: onChangeText(setPublisher),
        publicationYear: onChangeText(setPublicationYear),
        stock: onChangeText(setStock),
        categoryId: onChangeText(setCategoryId)
    }

    useEffect(() => {
        if (title && image && authorName && publisher && publicationYear && stock && categoryId) {
            setDisable(false)
        } else {
            setDisable(true)
        }
    }, [title, image, authorName, publisher, publicationYear, stock, categoryId])

    return {
        getter, setter
    }
}

export default useAddBook