import React from "react"
import { Link } from "gatsby"

export const BlogPost = ({ post }) => {
  const title = post.frontmatter.title || post.fields.slug

  return (
    <article itemScope itemType="http://schema.org/Article">
      <div className="mt-6">
        <div className="max-w-full px-10 py-6 bg-white rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <span className="font-light text-gray-600">
              {post.frontmatter.date}
            </span>
            {post.frontmatter.tags.map(tag => (
              <div className="px-2 py-1 bg-gray-400 text-sm text-white hover:text-gray-100 rounded hover:bg-gray-500">
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
        </div>
      </div>
    </article>
  )
}

export const BlogPostList = ({ posts }) => (
  <div className="px-6 py-8">
    <div className="flex justify-between container mx-auto">
      <div className="w-full">
        {/* articles */}
        {posts.map(post => (
          <BlogPost key={post.fields.slug} post={post} />
        ))}
      </div>
    </div>
  </div>
)

export default BlogPostList
