/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link as GLink } from "gatsby"

export const Link = props => {
  const sxStyle = {
    color: "primary",
    "&.active": {
      color: "primary",
    },
    "&:hover": {
      color: "secondary",
    },
  }

  if (props.href !== undefined) {
    // use an A tag here
    return (
      <a {...props} sx={sxStyle} href={props.href}>
        {props.children}
      </a>
    )
  } else {
    return <GLink {...props} activeClassName="active" sx={sxStyle} />
  }
}

export default Link
