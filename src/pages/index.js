import React from "react"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import logo from '../images/logo.svg'
import './root.module.css'
import { container } from './index.module.css'
import { Preview } from '../templates/post'

// TODO: add typscript

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <main className={container}>
      <img src={logo} alt='Mr.Logan' />
      <div className="blog-posts">
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            const { title, date, path } = post.frontmatter
            return (
              <Preview title={title} excerpt={post.excerpt} date={date} to={path} />
            )
          })}
      </div>
    </main>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`