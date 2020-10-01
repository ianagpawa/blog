import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"

export default (props) => (
  <nav className="navigation"> 
    <a href="https://ianagpawa.github.io/portfolio" target="_blank">Portfolio</a>
    {/* <Link to="/contact">Contact</Link> */}
    <ThemeChanger/>
  </nav>
  
)