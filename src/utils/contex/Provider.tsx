import React, { useState } from "react";
import {ThemeContext} from './context'

export const ThemeProvider = ({chidren} : {chidren : React.ReactNode}) =>{
    const [theme, setTheme] = useState('light')
    const toggleTheme = () =>{
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {chidren}
        </ThemeContext.Provider>
    )
}