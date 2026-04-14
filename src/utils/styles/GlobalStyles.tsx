import { useContext } from 'react'
import { ThemeContext } from '../contex/context'
import { createGlobalStyle } from 'styled-components'

const StyledGlobalStyle = createGlobalStyle<{isDarkMode : boolean}>`
    * {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
 
    body {
        background-color: ${({ isDarkMode }) => (isDarkMode ? '#2F2E41' : 'white')};
        margin: 0;  
    }
`

function GlobalStyle(){
    const {theme} = useContext(ThemeContext)
    console.log(theme)
    console.log(theme === 'dark')
    return(
        <StyledGlobalStyle isDarkMode={theme === 'dark'}/>
    )
}
export default GlobalStyle