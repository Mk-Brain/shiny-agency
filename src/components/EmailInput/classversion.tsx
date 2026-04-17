import { Component, type ReactNode } from "react";
import { InputWrapper, StyledInput, StyledLabel } from "./style";

class EmailInput extends Component<{theme: string}>{
    constructor(props: {theme: string}){
        super(props)
        this.updateInputValue = this.updateInputValue.bind(this)
        this.state = {
            inputValue: ''
        }

    }
    updateInputValue = (value : string) => {
        this.setState({ inputValue: value })
    }
    render(): ReactNode {
        const {theme} = this.props
        console.log(theme)
        return(
            <InputWrapper theme={theme}>
                {this.state.inputValue}
                <StyledLabel htmlFor="" theme={theme}>Email</StyledLabel>
                <StyledInput
                theme={theme}
                      onChange={(e) => this.updateInputValue(e.target.value)}
                />
            </InputWrapper>
        )
    }
}

export default EmailInput