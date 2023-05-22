export const onChangeText = (setState, validator) => (e) =>  {
    if (validator) {
        validator(e.target.value)
    }
    setState(e.target.value)
}