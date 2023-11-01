import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "./Styles/GlobalStyles"
import { theme } from "./Styles/Theme"
import Navbar from "./Components/Navbar"
import ShopPage from "./Components/ShopPage"

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar/>
      <ShopPage />
    </ThemeProvider>
  )
}

export default App
