/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "../navigation"
import { NavBar } from "."

export const Layout = ({ title, children }) => {
  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        variant: "layout.root",
      }}
    >
      <header
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          variant: "layout.header",
        }}
      >
        <NavBar title={title} />
      </header>
      <main
        sx={{
          width: "100%",
          flex: "1 1 auto",
          variant: "layout.main",
        }}
      >
        <div
          sx={{
            maxWidth: 768,
            mx: "auto",
            px: 3,
            variant: "layout.container",
          }}
        >
          {children}
        </div>
      </main>
      <footer
        sx={{
          width: "100%",
          variant: "layout.footer",
        }}
      >
        © {new Date().getFullYear()}, Built with
        {` `}
        <Link href="https://www.gatsbyjs.com">Gatsby</Link>
      </footer>
    </div>
  )
}

export default Layout
