import React from "react"
import { Heading } from "theme-ui"
import { Link } from "../navigation"
import GlobalWrapper from "./GlobalWrapper"

export const Layout = ({ title, children }) => {
  return (
    <GlobalWrapper>
      <header className="global-header">
        <Heading className="main-heading">
          <Link to="/">{title}</Link>
        </Heading>
      </header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <Link href="https://www.gatsbyjs.com">Gatsby</Link>
      </footer>
    </GlobalWrapper>
  )
}

export default Layout
