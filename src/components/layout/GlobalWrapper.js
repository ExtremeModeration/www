/** @jsx jsx */
import { jsx } from "theme-ui"

const GlobalWrapper = ({ children }) => (
  <div
    sx={{
      margin: "0 auto",
      maxWidth: "42rem",
      padding: "10 5",
    }}
  >
    {children}
  </div>
)

export default GlobalWrapper
