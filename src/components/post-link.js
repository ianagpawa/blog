import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post, ind }) => (
  <article className="card ">
    <Link to={post.frontmatter.path}>
      {!!ind || ind + 1
        ? <img src={`/assets/image-${ind+1}.jpg`} alt={"Featured Shot"} />
        : !!post.frontmatter.thumbnail && (
          <img src={post.frontmatter.thumbnail} alt={post.frontmatter.title + "- Featured Shot"} />
        )
      }
    </Link>
    <header>
      <h2 className="post-title">
        <Link to={post.frontmatter.path} className="post-link">
          {post.frontmatter.title}
        </Link>
      </h2>
      <div className="post-meta">{post.frontmatter.date}</div>
    </header>
  </article>
)
export default PostLink
