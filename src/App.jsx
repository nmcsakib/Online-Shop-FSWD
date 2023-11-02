import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "./Styles/GlobalStyles"
import { theme } from "./Styles/Theme"
import Navbar from "./Components/Navbar"
import ShopPage from "./Components/ShopPage"
import { AnimatePresence } from "framer-motion"

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar/>
      <AnimatePresence>
      <ShopPage />
      </AnimatePresence>
    </ThemeProvider>
  )
}

export default App
