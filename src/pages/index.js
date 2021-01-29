import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import SEO from "../components/seo"
import { BlogPostList } from "../components/blog"
import { TwitchEmbed } from "react-twitch-embed"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      <div className="px-6 py-8">
        <div className="flex justify-between container mx-auto">
          <div className="w-full">
            <TwitchEmbed
              id="twitch-embed-lg"
              channel="ExtremeModeration"
              width="100%"
              muted={true}
              parent={[
                "localhost",
                "extrememoderation.tv",
                "www.extrememoderation.tv",
              ]}
            />
          </div>
        </div>
      </div>
      <BlogPostList posts={posts} />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          tags
        }
      }
    }
  }
`
