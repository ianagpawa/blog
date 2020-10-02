import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"

export default (props) => (
  <nav className="navigation"> 
    <Link to="/">Home</Link>
    <Link to="/blogs">Blogs</Link>
    <Link to="/contact">Contact</Link>
    <a href="https://ianagpawa.github.io/portfolio" target="_blank">Portfolio</a>
    <ThemeChanger/>
  </nav>
  
)