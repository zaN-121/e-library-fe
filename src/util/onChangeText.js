export const onChangeText = (setState, validator) => (e) =>  {
    if (validator) {
        validator(e.target.value)
    }
    setState(e.target.value)
}

export const onChangeFile = (callback) => (e) => {
    if (e.target.files) {
        callback(e.target.files[0])
    }
}