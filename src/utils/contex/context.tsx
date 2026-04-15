import  { createContext } from "react";

type themeElement = {
    theme : string,
    toggleTheme() : void,
}

type questionAnswers = {
    answers : object,
    saveAnswers(ans: object) : void,
}

 export const ThemeContext = createContext<themeElement>(
    {
        theme : 'ligth', 
        toggleTheme: ()=>undefined
    }
)

 export const SurveyContext = createContext<questionAnswers>(
    {
        answers : {} , 
        saveAnswers: ()=>{}
    }
)
