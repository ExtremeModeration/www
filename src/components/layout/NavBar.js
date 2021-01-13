/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

export const NavLinkList = ({ children }) => (
  <ul
    sx={{
      listStyle: "none",
      display: "flex",
    }}
  >
    {children}
  </ul>
)

export const NavLink = props => {
  const style = {
    display: "inline-block",
    padding: "10px 15px",
    textDecoration: "none",
    color: "primary",
    "&:hover": {
      color: "white",
    },
  }

  if (props.href !== undefined) {
    return (
      <li>
        <a {...props} sx={style}>
          {props.children}
        </a>
      </li>
    )
  }

  return (
    <li>
      <Link {...props} sx={style}>
        {props.children}
      </Link>
    </li>
  )
}

export const NavBar = ({ title }) => (
  <nav
    sx={{
      width: "100%",
      paddingLeft: "30px",
      paddingRight: "10px",
      paddingBottom: "2px",
      marginBottom: "10px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      background: `linear-gradient(
          90deg,
          rgba(254,0,255,1) 0%,
          rgba(0,232,255,1) 100%
        )
        left
        bottom
        #1b1524
        no-repeat`,
      backgroundSize: "100% 2px",
    }}
  >
    <Link
      to="/"
      sx={{
        display: "inline-block",
        textDecoration: "none",
        padding: "10px 15px",
        color: "secondary",
        fontSize: "1.5rem",
        fontWeight: "bold",
        "&:hover": {
          color: "white",
        },
      }}
    >
      {title}
    </Link>
    <NavLinkList>
      <NavLink href="https://twitch.tv/ExtremeModeration" target="_blank">
        Twitch
      </NavLink>
    </NavLinkList>
  </nav>
)

export default NavBar
