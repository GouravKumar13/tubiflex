import React, { useEffect, useState } from "react";
import { ThemeProvider } from "./utils/context/ThemeContext";
import Header from "./components/Header";
import Body from "./components/Body";


function App() {
  const userTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(userTheme || "light");
  const darkTheme = () => {
    setTheme("dark")
  }
  const lightTheme = () => {
    setTheme("light")
  }
  useEffect(() => {
    document.querySelector("html")?.classList.remove("light", "dark")
    document.querySelector("html")?.classList.add(theme)


  })



  return (

    <ThemeProvider value={{ theme, darkTheme, lightTheme }}>
      <div className="">

        <Header />
        <Body />
      </div>
    </ThemeProvider>


  )
}

export default App
