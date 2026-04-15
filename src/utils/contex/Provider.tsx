import React, { useState } from "react";
import {SurveyContext, ThemeContext} from './context'

export const ThemeProvider = ({children} : {children : React.ReactNode}) =>{
    const [theme, setTheme] = useState('light')
    const toggleTheme = () =>{
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}




export const SurveyProvider = ({ children } : { children : React.ReactNode }) => {
  const [answers, setAnswers] = useState({})
  const saveAnswers = (newAnswers : {newAnswers: object}) => {
    console.log(newAnswers);
    setAnswers({ ...answers, ...newAnswers })
  }

  return (
    <SurveyContext.Provider 
        value={{ answers, saveAnswers }}>
      {children}
    </SurveyContext.Provider>
  )
}