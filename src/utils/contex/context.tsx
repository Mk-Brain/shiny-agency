import  { createContext } from "react";

type themeElement = {
    theme : string,
    toggleTheme() : void,
}

 export const ThemeContext = createContext<themeElement>({theme : 'ligth', toggleTheme: ()=>undefined})

