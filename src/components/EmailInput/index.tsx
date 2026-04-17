import { useState } from "react"
import { InputWrapper, StyledInput, StyledLabel } from "./style";

const EmailInput = ({theme} : {theme: string})=>{
    const [inputValue, setInputValue] = useState('')
    return(
            <InputWrapper theme={theme}>
                {inputValue}
                <StyledLabel htmlFor="" theme={theme}>Email</StyledLabel>
                <StyledInput
                theme={theme}
                      onChange={(e) => setInputValue(e.target.value)}
                />
            </InputWrapper>
        )
}

export default EmailInput