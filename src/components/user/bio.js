/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
            twitch
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const avatar = data?.avatar?.childImageSharp?.fixed

  return (
    <div>
      {author && (
        <div className="flex items-center">
          {avatar && (
            <Image
              fixed={avatar}
              alt={author?.name || ``}
              className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
            />
          )}
          {author?.name && (
            <h1 className="text-gray-700 font-bold">{author.name}</h1>
          )}
        </div>
      )}
    </div>
  )
}

export default Bio
