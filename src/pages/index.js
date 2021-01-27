import React from "react"
import { graphql, Link } from "gatsby"

import Bio from "../components/user/bio"
import { Layout } from "../components/layout"
import SEO from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />

      <div className="divide-y divide-gray-100">
        <h3 className="text-2xl">Recent Articles</h3>
        <div className="grid grid-cols-3 grid-rows-3 gap-4">
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug

            return (
              <article
                key={post.fields.slug}
                itemScope
                itemType="http://schema.org/Article"
              >
                <div className="min-w-0 relative flex-auto sm:pr-20 lg:pr-0 xl:pr-20">
                  <h2 className="text-lg font-semibold text-black mb-0.5">
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <div className="text-xs">{post.frontmatter.date}</div>

                  <section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description"
                    />
                  </section>
                </div>
              </article>
            )
          })}
        </div>
      </div>
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
        }
      }
    }
  }
`
