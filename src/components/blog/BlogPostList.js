import React from "react"
import { Link } from "gatsby"
import Bio from "../user/bio"

export const BlogPostList = ({ posts }) => (
  <div className="px-6 py-8">
    <div className="flex justify-between container mx-auto">
      <div className="w-full">
        {/* articles */}
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <article
              key={post.fields.slug}
              itemScope
              itemType="http://schema.org/Article"
            >
              <div className="mt-6">
                <div className="max-w-full px-10 py-6 bg-white rounded-lg shadow-md">
                  <div className="flex justify-between items-center">
                    <span className="font-light text-gray-600">
                      {post.frontmatter.date}
                    </span>
                    {post.frontmatter.tags.map(tag => (
                      <div className="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500">
                        {tag}
                      </div>
                    ))}
                  </div>
                  <div className="mt-2">
                    <Link
                      to={post.fields.slug}
                      itemProp="url"
                      className="text-2xl text-gray-700 font-bold hover:underline"
                    >
                      {title}
                    </Link>
                    <p
                      className="mt-2 text-gray-600"
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description"
                    />
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <Link
                      to={post.fields.slug}
                      itemProp="url"
                      className="text-blue-500 hover:underline"
                    >
                      Read more
                    </Link>
                    <Bio />
                  </div>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  </div>
)

export default BlogPostList
