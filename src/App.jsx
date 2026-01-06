import React from "react"
import { useState, useEffect } from "react"

function Toogle() {
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        const getItem = localStorage.getItem("theme")
        if(getItem === "dark"){
            setIsDarkMode(true)
        }
    }, [])
    const handleToogle = () => {
        const newTheme = !isDarkMode
        setIsDarkMode(newTheme)
        localStorage.setItem("theme", newTheme ? "dark" : "light")
    }

    return (
        <div className={isDarkMode ? "light" : "dark"}>
            <h1>{isDarkMode ? "Light Mode" : "Dark Mode"}</h1>
            <button onClick={handleToogle}>{isDarkMode ? "Dark" : "Light"}</button>
        </div>
    )
}

export default Toogle