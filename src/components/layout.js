import React, {useState} from "react"
import Dropdown from "./Dropdown"
import Footer from "./Footer"
import Header from "./Header"
import { GlobalStyle } from "./styles/GlobalStyles"

const Layout = ({ children }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  }

  return (
    <>
      <GlobalStyle />
      <Dropdown isOpen={isDropdownOpen} toggleOpen={toggleDropdown}/>
      <Header toggleOpen={toggleDropdown}/>
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
