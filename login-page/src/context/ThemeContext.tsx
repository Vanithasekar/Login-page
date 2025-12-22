import { createContext,useState, type ReactNode} from "react";

type ThemeContextType = {
  dark: boolean;
  toggle: () => void;
};

export const ThemeContext=createContext<ThemeContextType | null>(null);
export const ThemeProvider=({children}:{children:ReactNode})=>{
    const[dark,setDark]=useState(false);
    return(
        <ThemeContext.Provider value={{dark,toggle:()=>setDark(!dark)}}>
            {children}
        </ThemeContext.Provider>
    );
};
export default ThemeContext;