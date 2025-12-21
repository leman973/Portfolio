import { useState, useEffect } from "react"
import { ImFolder } from "react-icons/im";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { cn } from "../lib/utils";


export const ThemeToggle =()=>{
    const [isDarkMode, setisDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if(storedTheme=="dark"){
            setisDarkMode(true);
            document.documentElement.classList.add("dark");
        }
        else{
            setisDarkMode(false);
            document.documentElement.classList.remove("dark");
        }
    }, [])
    

    const toggleTheme =()=>{
        if(isDarkMode){
            document.documentElement.classList.remove("dark");
            setisDarkMode(false);
            localStorage.setItem("theme", "light");
        }
        else{
            document.documentElement.classList.add("dark");
            setisDarkMode(true);
            localStorage.setItem("theme", "dark");
        }
    }

    return <button onClick={toggleTheme} className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-none"
    )}>
        {isDarkMode ? <IoSunnyOutline className="h-7 w-6 text-yellow-300"/> : <IoMoonOutline className="h-6 w-6 text-blue-900" />}
        </button>
}