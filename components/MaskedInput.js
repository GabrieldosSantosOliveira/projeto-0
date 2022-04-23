import InputMask from "react-input-mask";

const onlyNumbers = (e) => e.replace(/[^0-9]/g, '')
const MaskedInput = ({ value, onChange, placeholder, mask, name }) => {
    function handleChange(event) {
        onChange({
            ...event,
            target: {
                ...event.target,
                name,
                value: onlyNumbers(event.target.value)

            }
        })
    }
    return <InputMask
        mask={mask}
        value={value}
        placeholder={placeholder}
        onChange={handleChange} />;
}

export default MaskedInput 