import React from "react"
import { NavBar } from "."

export const Layout = ({ title, children }) => {
  return (
    <div className="divide-y divide-gray-100">
      <NavBar title={title} />
      <main className="p-5">
        <div>{children}</div>
      </main>
      <footer className="p-5">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com" target="_blank" rel="noreferrer">
          Gatsby
        </a>
      </footer>
    </div>
  )
}

export default Layout
