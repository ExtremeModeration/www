import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faTwitch } from "@fortawesome/free-brands-svg-icons"

export const NavLinkList = ({ children }) => (
  <ul className="flex items-center justify-between font-normal text-sm text-white no-underline">
    {children}
  </ul>
)

export const NavLink = props => {
  let classNames = "hover:text-gray-200 hover:underline px-4"
  if (props.className !== undefined && props.className !== "") {
    classNames = `${classNames} ${props.className}`
  }
  if (props.href !== undefined) {
    return (
      <li>
        <a {...props} className={classNames}>
          {props.children}
        </a>
      </li>
    )
  }

  return (
    <li>
      <Link {...props} className={classNames}>
        {props.children}
      </Link>
    </li>
  )
}

export const NavBar = ({ title }) => (
  <nav className="w-full py-4 bg-purple-900 shadow">
    <div className="w-full container mx-auto flex flex-wrap items-center justify-between">
      {/* main navigation */}
      <nav>
        <NavLinkList>
          <NavLink to="/" className="font-bold">
            {title}
          </NavLink>

          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/commissions">Commissions</NavLink>
        </NavLinkList>
      </nav>

      {/* socials */}
      <div className="flex items-center text-lg no-underline text-white pr-6">
        <a
          href="https://twitch.tv/ExtremeModeration"
          target="_blank"
          rel="noreferrer"
          title="Twitch: ExtremeModeration"
        >
          <FontAwesomeIcon icon={faTwitch} />
        </a>

        <a
          href="https://instagram.com/ExtremeModerationTV"
          target="_blank"
          rel="noreferrer"
          title="Instagram: ExtremeModerationTV"
          className="pl-6"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </div>
  </nav>
)

export default NavBar
